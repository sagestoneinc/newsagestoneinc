import { EmailMessage } from "cloudflare:email";

interface Env {
  SEND_EMAIL: { send(message: EmailMessage): Promise<void> };
  FROM_EMAIL?: string;
}

interface ContactFormData {
  name: string;
  business?: string;
  email: string;
  phone?: string;
  service: string;
  workload?: string;
  tools?: string;
  message: string;
  consent: boolean;
  _honeypot?: string;
}

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

function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function stripTags(input: string): string {
  let result = input;
  let previous;
  do {
    previous = result;
    result = result.replace(/<[^>]*>/g, "");
  } while (result !== previous);
  return result;
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
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

/** Convert a string to a ReadableStream (required by EmailMessage). */
function toReadableStream(str: string): ReadableStream {
  return new Response(str).body!;
}

function encodeHeaderValue(str: string): string {
  if (/^[\x20-\x7E]*$/.test(str)) return str;
  return `=?UTF-8?B?${encodeUtf8Base64(str)}?=`;
}

function formatMailbox(name: string, email: string): string {
  if (!name) return email;
  return `${encodeHeaderValue(name)} <${email}>`;
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
  const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const msgId = `<${Date.now()}.${Math.random().toString(36).slice(2)}@sagestoneinc.com>`;

  const lines = [
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
  ];

  return lines.join("\r\n");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    // Validate content type
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Invalid content type" }, 400);
    }

    // Parse body
    let body: ContactFormData;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON body" }, 400);
    }

    // Honeypot check — if this field has any content, it's likely a bot
    if (body._honeypot && body._honeypot.trim()) {
      // Return success to not reveal detection
      return jsonResponse({ success: true, message: "Message sent successfully." }, 200);
    }

    // Validate required fields
    const name = stripTags((body.name || "").trim());
    const email = stripTags((body.email || "").trim());
    const service = stripTags((body.service || "").trim());
    const message = stripTags((body.message || "").trim());

    if (!name || name.length > 200) {
      return jsonResponse({ error: "Please provide a valid name (max 200 characters)." }, 400);
    }
    if (!email || email.length > 254) {
      return jsonResponse({ error: "Please provide a valid email address (max 254 characters)." }, 400);
    }
    if (!isValidEmail(email)) {
      return jsonResponse({ error: "Please provide a valid email address." }, 400);
    }
    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return jsonResponse({ error: "Please select a valid service." }, 400);
    }
    if (!message || message.length < 10 || message.length > 5000) {
      return jsonResponse({ error: "Please provide a message between 10 and 5000 characters." }, 400);
    }
    if (!body.consent) {
      return jsonResponse({ error: "You must consent to be contacted." }, 400);
    }

    // Sanitize optional fields
    const business = sanitize(stripTags((body.business || "").trim())).slice(0, 200);
    const phone = sanitize(stripTags((body.phone || "").trim())).slice(0, 30);
    const workload = ALLOWED_WORKLOADS.includes(body.workload || "") ? body.workload || "" : "";
    const tools = sanitize(stripTags((body.tools || "").trim())).slice(0, 500);

    const timestamp = new Date().toISOString();

    // Build notification email HTML for hello@sagestoneinc.com
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
      `New Contact Form Submission`,
      ``,
      `Name: ${name}`,
      business ? `Business: ${business}` : "",
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Service: ${service}`,
      workload ? `Workload: ${workload}` : "",
      tools ? `Tools: ${tools}` : "",
      ``,
      `Message:`,
      message,
      ``,
      `Submitted at ${timestamp}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    // Build confirmation email for the user
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

    if (!env.SEND_EMAIL) {
      console.error("Email binding (SEND_EMAIL) is not configured.");
      return jsonResponse(
        { error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com." },
        502
      );
    }

    const fromEmail = env.FROM_EMAIL || "noreply@sagestoneinc.com";

    // Send notification email to SageStone
    try {
      const notificationMime = buildMimeMessage({
        from: fromEmail,
        fromName: "SageStone Contact Form",
        to: RECIPIENT_EMAIL,
        replyTo: formatMailbox(name, email),
        subject: `New Inquiry from ${name}${business ? ` – ${business}` : ""}`,
        text: notificationText,
        html: notificationHtml,
      });

      const notificationMsg = new EmailMessage(fromEmail, RECIPIENT_EMAIL, toReadableStream(notificationMime));
      await env.SEND_EMAIL.send(notificationMsg);
    } catch (err) {
      console.error("Email notification send error:", err);
      return jsonResponse(
        { error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com." },
        502
      );
    }

    // Send confirmation email to the user (best effort — don't fail the request)
    try {
      const confirmationText = [
        `Hi ${stripTags(name)},`,
        ``,
        `Thank you for reaching out to SageStone Inc. We've received your message and will get back to you within 24 hours.`,
        ``,
        `Service: ${stripTags(service)}`,
        ``,
        `Your message:`,
        stripTags(message),
        ``,
        `If you have urgent questions, reply to this email or call us at +1 214-945-2234.`,
        ``,
        `— The SageStone Inc Team`,
        `https://sagestoneinc.com`,
      ].join("\n");

      const confirmMime = buildMimeMessage({
        from: fromEmail,
        fromName: "SageStone Inc",
        to: email,
        toName: name,
        replyTo: formatMailbox("SageStone Inc", RECIPIENT_EMAIL),
        subject: "We received your message — SageStone Inc",
        text: confirmationText,
        html: confirmationHtml,
      });

      const confirmMsg = new EmailMessage(fromEmail, email, toReadableStream(confirmMime));
      await env.SEND_EMAIL.send(confirmMsg);
    } catch (err) {
      console.error("Email confirmation send error (non-fatal):", err);
    }

    return jsonResponse({ success: true, message: "Your message has been sent. We'll be in touch within 24 hours!" }, 200);
  } catch (err) {
    console.error("Unhandled error in contact handler:", err);
    return jsonResponse(
      { error: "We couldn't send your message right now. Please try again later or email us directly at hello@sagestoneinc.com." },
      500
    );
  }
};
