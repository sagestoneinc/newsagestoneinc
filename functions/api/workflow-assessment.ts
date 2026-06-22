import { EmailMessage } from "cloudflare:email";

interface Env {
  SEND_EMAIL: { send(message: EmailMessage): Promise<void> };
  FROM_EMAIL?: string;
  CRM_WEBHOOK_URL?: string;
  CRM_WEBHOOK_TOKEN?: string;
}

interface WorkflowAssessmentData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  employees: string;
  adminHours: string;
  challenge: string;
  _honeypot?: string;
}

const RECIPIENT_EMAIL = "hello@sagestoneinc.com";
const ALLOWED_INDUSTRIES = [
  "Marketing Agency",
  "Real Estate",
  "Property Management",
  "Insurance",
  "Consulting",
  "E-commerce",
  "Professional Services",
  "Other",
];
const ALLOWED_EMPLOYEES = ["1–5", "6–10", "11–25", "26–50", "50+"];
const ALLOWED_ADMIN_HOURS = ["Less than 5", "5–10", "10–20", "More than 20"];

function stripTags(input: string): string {
  let result = input;
  let previous;
  do {
    previous = result;
    result = result.replace(/<[^>]*>/g, "");
  } while (result !== previous);
  return result;
}

function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function encodeUtf8Base64(str: string): string {
  const globalAny = globalThis as any;
  if (typeof globalAny.Buffer !== "undefined") {
    return globalAny.Buffer.from(str, "utf-8").toString("base64");
  }

  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function toReadableStream(str: string): ReadableStream {
  const response = new Response(str);
  return response.body ?? new ReadableStream();
}

function encodeHeaderValue(str: string): string {
  const safe = str.replace(/[\r\n]/g, "");
  if (/^[\x20-\x7E]*$/.test(safe)) return safe;
  return `=?UTF-8?B?${encodeUtf8Base64(safe)}?=`;
}

function sanitizeEmailForHeader(email: string): string {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address");
  }
  if (/[\r\n\x00-\x1F\x7F]/.test(email)) {
    throw new Error("Email address contains invalid control characters");
  }
  return email;
}

function formatMailbox(name: string, email: string): string {
  const safeEmail = sanitizeEmailForHeader(email);
  if (!name) return safeEmail;
  return `${encodeHeaderValue(name)} <${safeEmail}>`;
}

function buildMimeMessage(options: {
  from: string;
  fromName: string;
  to: string;
  toName?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}): string {
  const boundary = `----=_Part_${crypto.randomUUID()}`;
  const msgId = `<${crypto.randomUUID()}@sagestoneinc.com>`;

  return [
    `From: ${formatMailbox(options.fromName, options.from)}`,
    `To: ${options.toName ? formatMailbox(options.toName, options.to) : options.to}`,
    ...(options.replyTo ? [`Reply-To: ${options.replyTo}`] : []),
    `Subject: ${encodeHeaderValue(options.subject)}`,
    `MIME-Version: 1.0`,
    `Message-ID: ${msgId}`,
    `Date: ${new Date().toUTCString()}`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    ``,
    `--${boundary}`,
    `Content-Type: text/plain; charset=utf-8`,
    `Content-Transfer-Encoding: 8bit`,
    ``,
    options.text,
    ``,
    `--${boundary}`,
    `Content-Type: text/html; charset=utf-8`,
    `Content-Transfer-Encoding: 8bit`,
    ``,
    options.html,
    ``,
    `--${boundary}--`,
  ].join("\r\n");
}

async function sendToCrm(env: Env, payload: Record<string, unknown>) {
  if (!env.CRM_WEBHOOK_URL) return;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (env.CRM_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${env.CRM_WEBHOOK_TOKEN}`;
  }

  const response = await fetch(env.CRM_WEBHOOK_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`CRM webhook returned ${response.status}`);
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Invalid content type" }, 400);
    }

    let body: WorkflowAssessmentData;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON body" }, 400);
    }

    if (body._honeypot && body._honeypot.trim()) {
      return jsonResponse({ success: true, message: "Assessment request received." }, 200);
    }

    const fullName = stripTags((body.fullName || "").trim());
    const companyName = stripTags((body.companyName || "").trim());
    const email = stripTags((body.email || "").trim());
    const phone = stripTags((body.phone || "").trim());
    const industry = stripTags((body.industry || "").trim());
    const employees = stripTags((body.employees || "").trim());
    const adminHours = stripTags((body.adminHours || "").trim());
    const challenge = stripTags((body.challenge || "").trim());

    if (!fullName || fullName.length > 200) return jsonResponse({ error: "Please provide a valid full name." }, 400);
    if (!companyName || companyName.length > 200) return jsonResponse({ error: "Please provide a valid company name." }, 400);
    if (!email || email.length > 254 || !isValidEmail(email)) return jsonResponse({ error: "Please provide a valid email address." }, 400);
    if (!phone || phone.length > 30) return jsonResponse({ error: "Please provide a valid phone number." }, 400);
    if (!ALLOWED_INDUSTRIES.includes(industry)) return jsonResponse({ error: "Please select a valid industry." }, 400);
    if (!ALLOWED_EMPLOYEES.includes(employees)) return jsonResponse({ error: "Please select a valid employee range." }, 400);
    if (!ALLOWED_ADMIN_HOURS.includes(adminHours)) return jsonResponse({ error: "Please select a valid weekly admin hours range." }, 400);
    if (!challenge || challenge.length < 10 || challenge.length > 5000) {
      return jsonResponse({ error: "Please describe your biggest operational challenge in at least 10 characters." }, 400);
    }

    const timestamp = new Date().toISOString();
    const leadPayload = {
      source: "Free Workflow Assessment Landing Page",
      fullName,
      companyName,
      email,
      phone,
      industry,
      employees,
      adminHours,
      challenge,
      timestamp,
    };

    try {
      await sendToCrm(env, leadPayload);
    } catch (error) {
      console.error("CRM webhook error:", error);
    }

    if (!env.SEND_EMAIL) {
      console.error("Email binding (SEND_EMAIL) is not configured.");
      return jsonResponse({ error: "We couldn't submit your assessment right now. Please try again later or email hello@sagestoneinc.com." }, 502);
    }

    const notificationHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 680px; margin: 0 auto;">
  <div style="background: #2E2E2E; padding: 28px; border-radius: 14px 14px 0 0;">
    <p style="color: #D8DED2; margin: 0 0 8px; letter-spacing: 0.16em; text-transform: uppercase; font-size: 12px;">SageStone Inc.</p>
    <h1 style="color: #fff; margin: 0; font-size: 24px;">New Workflow Assessment Request</h1>
  </div>
  <div style="background: #F3EFE7; padding: 28px; border: 1px solid #C7BDB1; border-top: none; border-radius: 0 0 14px 14px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #6A645C; width: 180px; vertical-align: top;">Full Name</td><td style="padding: 8px 0; color: #2E2E2E; font-weight: 600;">${sanitize(fullName)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Company</td><td style="padding: 8px 0; color: #2E2E2E;">${sanitize(companyName)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Email</td><td style="padding: 8px 0; color: #2E2E2E;"><a href="mailto:${sanitize(email)}" style="color: #6F7F67;">${sanitize(email)}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Phone</td><td style="padding: 8px 0; color: #2E2E2E;">${sanitize(phone)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Industry</td><td style="padding: 8px 0; color: #2E2E2E;">${sanitize(industry)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Employees</td><td style="padding: 8px 0; color: #2E2E2E;">${sanitize(employees)}</td></tr>
      <tr><td style="padding: 8px 0; color: #6A645C; vertical-align: top;">Admin Hours</td><td style="padding: 8px 0; color: #2E2E2E;">${sanitize(adminHours)}</td></tr>
    </table>
    <div style="margin-top: 18px; padding-top: 18px; border-top: 1px solid #C7BDB1;">
      <p style="color: #6A645C; margin: 0 0 8px;">Biggest operational challenge</p>
      <p style="color: #2E2E2E; white-space: pre-wrap; margin: 0; line-height: 1.6;">${sanitize(challenge)}</p>
    </div>
    <p style="color: #6A645C; font-size: 12px; margin: 20px 0 0;">Submitted at ${timestamp}</p>
  </div>
</div>`;

    const notificationText = [
      "New Workflow Assessment Request",
      "",
      `Full Name: ${fullName}`,
      `Company: ${companyName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Industry: ${industry}`,
      `Employees: ${employees}`,
      `Admin Hours: ${adminHours}`,
      "",
      "Biggest operational challenge:",
      challenge,
      "",
      `Submitted at ${timestamp}`,
    ].join("\n");

    const confirmationHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto;">
  <div style="background: #8F987A; padding: 28px; border-radius: 14px 14px 0 0;">
    <h1 style="color: #fff; margin: 0; font-size: 22px;">Thanks, ${sanitize(fullName)}. Your assessment request is in.</h1>
  </div>
  <div style="background: #F3EFE7; padding: 28px; border: 1px solid #C7BDB1; border-top: none; border-radius: 0 0 14px 14px;">
    <p style="color: #2E2E2E; line-height: 1.7; margin: 0 0 16px;">SageStone will review your workflow details and follow up with practical recommendations for improving delegation, administrative structure, and operational efficiency.</p>
    <p style="color: #2E2E2E; line-height: 1.7; margin: 0 0 16px;">If you would like to discuss your priorities sooner, schedule a complimentary discovery call here: <a href="https://calendly.com/d/cym9-q4q-pnm" style="color: #5C6855; font-weight: 700;">Book a Discovery Call</a>.</p>
    <p style="color: #6A645C; font-size: 13px; margin: 24px 0 0;">— The SageStone Inc Team | <a href="https://sagestoneinc.com" style="color: #5C6855;">sagestoneinc.com</a></p>
  </div>
</div>`;

    const fromEmail = env.FROM_EMAIL || "hello@sagestoneinc.com";
    const notificationMime = buildMimeMessage({
      from: fromEmail,
      fromName: "SageStone Workflow Assessment",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Workflow Assessment Request from ${fullName} – ${companyName}`,
      text: notificationText,
      html: notificationHtml,
    });

    await env.SEND_EMAIL.send(new EmailMessage(fromEmail, RECIPIENT_EMAIL, toReadableStream(notificationMime)));

    try {
      const confirmationText = [
        `Hi ${fullName},`,
        "",
        "Thank you for requesting your complimentary SageStone Workflow Assessment. We will review your responses and follow up with practical recommendations.",
        "",
        "You can also book a discovery call here: https://calendly.com/d/cym9-q4q-pnm",
        "",
        "— The SageStone Inc Team",
      ].join("\n");

      const confirmationMime = buildMimeMessage({
        from: fromEmail,
        fromName: "SageStone Inc",
        to: email,
        toName: fullName,
        replyTo: RECIPIENT_EMAIL,
        subject: "We received your Workflow Assessment request — SageStone Inc",
        text: confirmationText,
        html: confirmationHtml,
      });

      await env.SEND_EMAIL.send(new EmailMessage(fromEmail, email, toReadableStream(confirmationMime)));
    } catch (error) {
      console.error("Assessment confirmation send error (non-fatal):", error);
    }

    return jsonResponse({ success: true, message: "Assessment request received." }, 200);
  } catch (error) {
    console.error("Unhandled workflow assessment error:", error);
    return jsonResponse({ error: "We couldn't submit your assessment right now. Please try again later or email hello@sagestoneinc.com." }, 500);
  }
};
