import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "info@propertycarepro.co.uk";

const SERVICE_LABELS: Record<string, string> = {
  painting: "Painting & Decorating",
  electrical: "Electrical Services",
  maintenance: "Property Maintenance",
  "media-wall": "TV Media Wall Installation",
  multiple: "Multiple Services",
};

export async function POST(req: NextRequest) {
  // Environment variable guard — fail loudly so misconfiguration is obvious
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    console.error("SMTP_USER or SMTP_PASS env vars are not set");
    return NextResponse.json(
      { error: "Server email configuration missing. Please contact us directly on 07922 909982." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    address?: string;
    details?: string;
    contactMethod?: string;
    _honey?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; real users don't
  if (body._honey) {
    return NextResponse.json({ ok: true }); // silent discard
  }

  // Required field validation (server-side mirror of client-side)
  const { name, phone, service, address } = body;
  if (!name?.trim() || !phone?.trim() || !service?.trim() || !address?.trim()) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 }
    );
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service;

  // Plain-text email body
  const textBody = [
    "NEW QUOTE REQUEST — Property Care Paint & Electrics",
    "=".repeat(52),
    "",
    `Name:              ${name.trim()}`,
    `Phone:             ${phone.trim()}`,
    `Email:             ${body.email?.trim() || "—"}`,
    `Service Required:  ${serviceLabel}`,
    `Property Address:  ${address.trim()}`,
    `Contact Method:    ${body.contactMethod?.trim() || "—"}`,
    "",
    "Project Details:",
    body.details?.trim() || "(none provided)",
    "",
    "=".repeat(52),
    "Sent via propertycarepro.co.uk contact form",
  ].join("\n");

  // HTML email body
  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F8F5F0;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F5F0;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;max-width:600px;width:100%">
        <!-- Header -->
        <tr><td style="background:#0A0908;padding:28px 36px;border-bottom:4px solid #F58220">
          <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#F58220;font-weight:700">Property Care Paint &amp; Electrics</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.01em">New Quote Request</h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:36px">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", name.trim())}
            ${row("Phone", phone.trim())}
            ${row("Email", body.email?.trim() || "—")}
            ${row("Service Required", serviceLabel)}
            ${row("Property Address", address.trim())}
            ${row("Contact Method", body.contactMethod?.trim() || "—")}
          </table>
          <div style="margin-top:24px;padding:20px;background:#F8F5F0;border-left:4px solid #F58220;border-radius:0 4px 4px 0">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#F58220;font-weight:700">Project Details</p>
            <p style="margin:0;font-size:14px;color:#3D3A37;line-height:1.7;white-space:pre-wrap">${escHtml(body.details?.trim() || "(none provided)")}</p>
          </div>
          ${body.email?.trim() ? `<p style="margin:28px 0 0;font-size:13px;color:#6B6460">Reply to this email to respond directly to the customer at <strong>${escHtml(body.email.trim())}</strong>.</p>` : ""}
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#F8F5F0;padding:20px 36px;border-top:1px solid #E8E2D9">
          <p style="margin:0;font-size:11px;color:#9E9488">Sent via propertycarepro.co.uk · ${new Date().toUTCString()}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  function row(label: string, value: string) {
    return `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9E9488;width:40%;vertical-align:top">${escHtml(label)}</td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8E2D9;font-size:14px;color:#0A0908;font-weight:600;vertical-align:top">${escHtml(value)}</td>
    </tr>`;
  }

  function escHtml(s: string) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Nodemailer — Microsoft 365 SMTP via STARTTLS
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // STARTTLS
    auth: { user: smtpUser, pass: smtpPass },
    tls: {
      // office365 requires SNI; ciphers must include TLS_AES_256_GCM_SHA384
      ciphers: "SSLv3",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Property Care Website" <${smtpUser}>`,
      to: RECIPIENT,
      replyTo: body.email?.trim() ? `"${name.trim()}" <${body.email.trim()}>` : undefined,
      subject: `New Quote Request — ${name.trim()} (${serviceLabel})`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("SMTP send failed:", msg);

    // Surface the raw SMTP error so we can diagnose auth issues immediately
    return NextResponse.json(
      {
        error:
          "We couldn't send your message right now — please call us on 07922 909982 or WhatsApp us directly.",
        _smtpError: msg, // included in the JSON response for debugging; not shown in the UI
      },
      { status: 502 }
    );
  }
}
