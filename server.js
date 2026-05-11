import express from "express";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// Trust the first proxy (Railway / reverse proxy) so req.ip reflects the real client
app.set("trust proxy", 1);

app.use(express.json());

// ── Canonical host redirects for production SEO hygiene ───────────
app.use((req, res, next) => {
  const host = req.get("host")?.split(":")[0];
  const proto = req.get("x-forwarded-proto") || req.protocol;

  if (host && host !== "www.sagestoneinc.com" && host.endsWith("sagestoneinc.com")) {
    return res.redirect(301, `https://www.sagestoneinc.com${req.originalUrl}`);
  }

  if (host === "www.sagestoneinc.com" && proto !== "https") {
    return res.redirect(301, `https://www.sagestoneinc.com${req.originalUrl}`);
  }

  return next();
});


// ── Contact form constants ─────────────────────────────────────────

const ALLOWED_SERVICES = [
  "Virtual Assistant Services",
  "Customer Support Outsourcing",
  "E-Commerce Virtual Assistant Services",
  "Real Estate Virtual Assistant Services",
  "Social Media Management Services",
  "Business Operations Support",
  "Web Design and Website Maintenance",
  "Bookkeeping Support",
  "Data Entry & Web Research",
  "Multiple Services",
  "Not Sure Yet",
];

const ALLOWED_WORKLOADS = [
  "",
  "Part-Time (10–20 hrs/week)",
  "Full-Time (40 hrs/week)",
  "Project-Based (one-time)",
  "Not Sure Yet",
];

const RECIPIENT_EMAIL = "hello@sagestoneinc.com";

// ── Helpers ────────────────────────────────────────────────────────

function sanitize(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function stripTags(input) {
  let result = input;
  let previous;
  do {
    previous = result;
    result = result.replace(/<[^>]*>/g, "");
  } while (result !== previous);
  return result;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function stripControlChars(str) {
  return str.replace(/[\x00-\x1f\x7f]/g, "");
}

// ── Retry helper for transient SMTP errors ────────────────────────

const TRANSIENT_CODES = new Set(["ECONNECTION", "ETIMEDOUT", "ECONNRESET", "ECONNREFUSED", "ESOCKET"]);
const MAX_RETRIES = 2;

async function sendMailWithRetry(transporter, mailOptions) {
  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await transporter.sendMail(mailOptions);
    } catch (err) {
      lastError = err;
      const isTransient = TRANSIENT_CODES.has(err.code) || /timeout/i.test(err.message);
      if (!isTransient || attempt === MAX_RETRIES) {
        throw err;
      }
      const delay = 1000 * 2 ** attempt; // 1 s, 2 s
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}

// ── SMTP transporter (singleton, configured via env vars) ─────────

const smtpTransporter = (() => {
  const host = process.env.SMTP_HOST;
  const portEnv = process.env.SMTP_PORT;
  const defaultPort = 587;
  let port = defaultPort;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (portEnv) {
    const parsedPort = parseInt(portEnv, 10);
    if (Number.isNaN(parsedPort)) {
      console.warn(
        `Invalid SMTP_PORT value "${portEnv}". Falling back to default port ${defaultPort}.`
      );
    } else {
      port = parsedPort;
    }
  }
  if (!host || !user || !pass) {
    console.warn("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
    return null;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 30_000,
    greetingTimeout: 15_000,
    socketTimeout: 60_000,
  });

  // Log SMTP connection errors instead of crashing the process
  transporter.on("error", (err) => {
    console.error("SMTP transporter error:", err);
  });

  // Verify connection on startup (non-blocking)
  transporter.verify().then(() => {
    console.log("SMTP connection verified successfully.");
  }).catch((err) => {
    console.warn("SMTP connection verification failed:", err.code || "", err.message);
  });

  return transporter;
})();

// ── Simple rate limiter (per-IP, in-memory) ───────────────────────

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max requests per window

function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return next();
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
  }

  return next();
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000).unref();

// ── POST /api/contact ─────────────────────────────────────────────

app.post("/api/contact", rateLimit, async (req, res) => {
  try {
    const body = req.body;

    // Honeypot check
    if (body._honeypot && body._honeypot.trim()) {
      return res.json({ success: true, message: "Message sent successfully." });
    }

    // Validate required fields
    const name = stripControlChars(stripTags((body.name || "").trim()));
    const email = stripControlChars(stripTags((body.email || "").trim()));
    const service = stripTags((body.service || "").trim());
    const message = stripTags((body.message || "").trim());

    if (!name || name.length > 200) {
      return res.status(400).json({ error: "Please provide a valid name (max 200 characters)." });
    }
    if (!email || email.length > 254) {
      return res.status(400).json({ error: "Please provide a valid email address (max 254 characters)." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }
    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return res.status(400).json({ error: "Please select a valid service." });
    }
    if (!message || message.length < 10 || message.length > 5000) {
      return res.status(400).json({ error: "Please provide a message between 10 and 5000 characters." });
    }
    if (!body.consent) {
      return res.status(400).json({ error: "You must consent to be contacted." });
    }

    // Sanitize optional fields (strip HTML tags and limit length; avoid HTML-escaping to keep text clean)
    const business = stripControlChars(stripTags((body.business || "").trim())).slice(0, 200);
    const phone = stripTags((body.phone || "").trim()).slice(0, 30);
    const workload = ALLOWED_WORKLOADS.includes(body.workload || "") ? body.workload || "" : "";
    const tools = stripTags((body.tools || "").trim()).slice(0, 500);

    const timestamp = new Date().toISOString();
    const fromEmail = process.env.FROM_EMAIL || "hello@sagestoneinc.com";

    // Build notification email HTML
    const notificationHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #4a7c59; padding: 24px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
  </div>
  <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td><td style="padding: 8px 0; color: #111827; font-weight: 500;">${sanitize(name)}</td></tr>
      ${business ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Business</td><td style="padding: 8px 0; color: #111827;">${sanitize(business)}</td></tr>` : ""}
      <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${sanitize(email)}" style="color: #4a7c59;">${sanitize(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td><td style="padding: 8px 0; color: #111827;">${sanitize(phone)}</td></tr>` : ""}
      <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Service</td><td style="padding: 8px 0; color: #111827;">${sanitize(service)}</td></tr>
      ${workload ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Workload</td><td style="padding: 8px 0; color: #111827;">${sanitize(workload)}</td></tr>` : ""}
      ${tools ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Tools</td><td style="padding: 8px 0; color: #111827;">${sanitize(tools)}</td></tr>` : ""}
    </table>
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; margin: 0 0 8px;">Message</p>
      <p style="color: #111827; white-space: pre-wrap; margin: 0;">${sanitize(message)}</p>
    </div>
    <p style="color: #9ca3af; font-size: 12px; margin: 16px 0 0;">Submitted at ${timestamp}</p>
  </div>
</div>`;

    const notificationText = [
      "New Contact Form Submission",
      "",
      `Name: ${name}`,
      business ? `Business: ${business}` : "",
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Service: ${service}`,
      workload ? `Workload: ${workload}` : "",
      tools ? `Tools: ${tools}` : "",
      "",
      "Message:",
      message,
      "",
      `Submitted at ${timestamp}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    if (!smtpTransporter) {
      return res.status(502).json({
        error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com.",
      });
    }

    // Send notification email to SageStone
    try {
      await sendMailWithRetry(smtpTransporter, {
        from: `"SageStone Contact Form" <${fromEmail}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Inquiry from ${name}${business ? ` – ${business}` : ""}`,
        text: notificationText,
        html: notificationHtml,
      });
    } catch (err) {
      console.error("Email notification send error:", err);
      return res.status(502).json({
        error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com.",
      });
    }

    // Send confirmation email to the user (best effort)
    try {
      const confirmationHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #4a7c59; padding: 24px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 20px;">Thanks for reaching out, ${sanitize(name)}!</h1>
  </div>
  <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
    <p style="color: #374151; line-height: 1.6; margin: 0 0 16px;">We've received your message and a team member will get back to you within 24 hours to schedule a free discovery call.</p>
    <p style="color: #374151; line-height: 1.6; margin: 0 0 16px;">Here's a summary of what you submitted:</p>
    <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin-bottom: 16px;">
      <p style="margin: 0 0 4px; color: #6b7280; font-size: 13px;">Service requested</p>
      <p style="margin: 0 0 12px; color: #111827; font-weight: 500;">${sanitize(service)}</p>
      <p style="margin: 0 0 4px; color: #6b7280; font-size: 13px;">Your message</p>
      <p style="margin: 0; color: #111827; white-space: pre-wrap;">${sanitize(message)}</p>
    </div>
    <p style="color: #374151; line-height: 1.6; margin: 0;">If you have any urgent questions, reply to this email or call us at <strong>+1 214-945-2234</strong>.</p>
    <p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0;">— The SageStone Inc Team | <a href="https://www.sagestoneinc.com" style="color: #4a7c59;">sagestoneinc.com</a></p>
  </div>
</div>`;

      const confirmationText = [
        `Hi ${stripTags(name)},`,
        "",
        "Thank you for reaching out to SageStone Inc. We've received your message and will get back to you within 24 hours.",
        "",
        `Service: ${stripTags(service)}`,
        "",
        "Your message:",
        stripTags(message),
        "",
        "If you have urgent questions, reply to this email or call us at +1 214-945-2234.",
        "",
        "— The SageStone Inc Team",
        "https://www.sagestoneinc.com",
      ].join("\n");

      await sendMailWithRetry(smtpTransporter, {
        from: `"SageStone Inc" <${fromEmail}>`,
        to: `"${name}" <${email}>`,
        replyTo: RECIPIENT_EMAIL,
        subject: "We received your message — SageStone Inc",
        text: confirmationText,
        html: confirmationHtml,
      });
    } catch (err) {
      console.error("Email confirmation send error (non-fatal):", err);
    }

    return res.json({ success: true, message: "Your message has been sent. We'll be in touch within 24 hours!" });
  } catch (err) {
    console.error("Unhandled error in contact handler:", err);
    return res.status(500).json({
      error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com.",
    });
  }
});

// ── Serve static files from Vite build ────────────────────────────

app.use(express.static(path.join(__dirname, "dist")));

// ── Explicit /api 404 — prevent SPA fallback from masking API errors
app.use("/api", (_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// SPA fallback — serve index.html for all non-API routes
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ── Start ─────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
