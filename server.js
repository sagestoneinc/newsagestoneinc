import express from "express";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import path from "path";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ── Contact form constants ─────────────────────────────────────────

const ALLOWED_SERVICES = [
  "Virtual Operations & Admin",
  "Real Estate Virtual Assistant",
  "Bookkeeping Support",
  "Social Media Marketing Support",
  "Lead Generation Support",
  "Graphic Design Support",
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

// ── SMTP transporter (configured via env vars) ────────────────────

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

// ── POST /api/contact ─────────────────────────────────────────────

app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body;

    // Honeypot check
    if (body._honeypot && body._honeypot.trim()) {
      return res.json({ success: true, message: "Message sent successfully." });
    }

    // Validate required fields
    const name = stripTags((body.name || "").trim());
    const email = stripTags((body.email || "").trim());
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

    // Sanitize optional fields
    const business = sanitize(stripTags((body.business || "").trim())).slice(0, 200);
    const phone = sanitize(stripTags((body.phone || "").trim())).slice(0, 30);
    const workload = ALLOWED_WORKLOADS.includes(body.workload || "") ? body.workload || "" : "";
    const tools = sanitize(stripTags((body.tools || "").trim())).slice(0, 500);

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
      ${business ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Business</td><td style="padding: 8px 0; color: #111827;">${business}</td></tr>` : ""}
      <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${sanitize(email)}" style="color: #4a7c59;">${sanitize(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td><td style="padding: 8px 0; color: #111827;">${phone}</td></tr>` : ""}
      <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Service</td><td style="padding: 8px 0; color: #111827;">${sanitize(service)}</td></tr>
      ${workload ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Workload</td><td style="padding: 8px 0; color: #111827;">${sanitize(workload)}</td></tr>` : ""}
      ${tools ? `<tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Tools</td><td style="padding: 8px 0; color: #111827;">${tools}</td></tr>` : ""}
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

    const transporter = createTransporter();
    if (!transporter) {
      console.error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
      return res.status(502).json({
        error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com.",
      });
    }

    // Send notification email to SageStone
    try {
      await transporter.sendMail({
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
    <p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0;">— The SageStone Inc Team | <a href="https://sagestoneinc.com" style="color: #4a7c59;">sagestoneinc.com</a></p>
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
        "https://sagestoneinc.com",
      ].join("\n");

      await transporter.sendMail({
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

// SPA fallback — serve index.html for all non-API routes
app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ── Start ─────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
