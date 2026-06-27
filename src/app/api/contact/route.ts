import { NextRequest, NextResponse } from "next/server";

// Env vars (set in Vercel — never hardcoded here):
//   MS_TENANT_ID     — Azure AD tenant / directory ID
//   MS_CLIENT_ID     — App registration client ID
//   MS_CLIENT_SECRET — App registration client secret
//   CONTACT_FROM     — Mailbox the app has Mail.Send over (e.g. info@propertycarepro.co.uk)
//   CONTACT_TO       — Recipient address (usually the same mailbox)

const SERVICE_LABELS: Record<string, string> = {
  painting: "Painting & Decorating",
  electrical: "Electrical Services",
  maintenance: "Property Maintenance",
  "media-wall": "TV Media Wall Installation",
  multiple: "Multiple Services",
};

function escHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #E8E2D9;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9E9488;width:40%;vertical-align:top">${escHtml(label)}</td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid #E8E2D9;font-size:14px;color:#0A0908;font-weight:600;vertical-align:top">${escHtml(value)}</td>
  </tr>`;
}

// Step 1 — Client Credentials token request
async function getAccessToken(
  tenantId: string,
  clientId: string,
  clientSecret: string
): Promise<string> {
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  console.log("[contact] TOKEN REQUEST →", tokenUrl);

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "https://graph.microsoft.com/.default",
      client_id: clientId,
      client_secret: clientSecret,
    }).toString(),
    cache: "no-store",
  });

  // Always parse and log the full token response — even on apparent success
  let data: Record<string, unknown> = {};
  const rawText = await res.text();
  try {
    data = JSON.parse(rawText);
  } catch {
    console.error("[contact] TOKEN non-JSON response:", rawText.slice(0, 500));
    throw new Error(`Token request returned non-JSON (HTTP ${res.status})`);
  }

  if (!res.ok || !data.access_token) {
    console.error(
      `[contact] TOKEN FAILED — HTTP ${res.status}:`,
      JSON.stringify(data, null, 2)
    );
    throw new Error(
      String(data.error_description ?? data.error ?? `Token request failed (HTTP ${res.status})`)
    );
  }

  const token = data.access_token as string;
  console.log(
    `[contact] TOKEN OK — HTTP ${res.status}, token length=${token.length}, expires_in=${data.expires_in}`
  );
  return token;
}

// Step 2 — Send via Graph users/{from}/sendMail
async function sendGraphMail(
  accessToken: string,
  from: string,
  to: string,
  subject: string,
  htmlBody: string,
  replyToAddress?: string,
  replyToName?: string
): Promise<void> {
  const sendUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`;
  console.log(
    `[contact] SENDMAIL REQUEST → ${sendUrl}`,
    `| from="${from}" to="${to}" subject="${subject}"`
  );

  const message: Record<string, unknown> = {
    subject,
    body: { contentType: "HTML", content: htmlBody },
    toRecipients: [{ emailAddress: { address: to } }],
  };

  if (replyToAddress) {
    message.replyTo = [
      { emailAddress: { address: replyToAddress, name: replyToName ?? replyToAddress } },
    ];
  }

  const res = await fetch(sendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, saveToSentItems: true }),
    cache: "no-store",
  });

  // Read the raw body regardless of status so we can log it
  const rawText = await res.text();
  console.log(`[contact] SENDMAIL RESPONSE — HTTP ${res.status}`, rawText.slice(0, 1000) || "(empty body)");

  // Graph returns 202 Accepted on success with no body.
  // Any other status — including 200, 204, or any 4xx/5xx — is an error.
  if (res.status !== 202) {
    let detail = `HTTP ${res.status}`;
    try {
      const errBody = JSON.parse(rawText);
      console.error(
        `[contact] SENDMAIL FAILED — HTTP ${res.status}:`,
        JSON.stringify(errBody, null, 2)
      );
      detail =
        String(errBody?.error?.message ?? errBody?.error?.code ?? detail);
    } catch {
      console.error(`[contact] SENDMAIL FAILED — HTTP ${res.status} (non-JSON):`, rawText.slice(0, 500));
    }
    throw new Error(detail);
  }

  console.log("[contact] SENDMAIL SUCCESS — 202 Accepted");
}

export async function POST(req: NextRequest) {
  // ── Log env var presence (never log values) ───────────────────────────────
  const envCheck = {
    MS_TENANT_ID:     !!process.env.MS_TENANT_ID,
    MS_CLIENT_ID:     !!process.env.MS_CLIENT_ID,
    MS_CLIENT_SECRET: !!process.env.MS_CLIENT_SECRET,
    CONTACT_FROM:     !!process.env.CONTACT_FROM,
    CONTACT_TO:       !!process.env.CONTACT_TO,
    TENANT_ID_LEN:    process.env.MS_TENANT_ID?.length ?? 0,
    CLIENT_ID_LEN:    process.env.MS_CLIENT_ID?.length ?? 0,
    SECRET_LEN:       process.env.MS_CLIENT_SECRET?.length ?? 0,
    FROM_LEN:         process.env.CONTACT_FROM?.length ?? 0,
    TO_LEN:           process.env.CONTACT_TO?.length ?? 0,
  };
  console.log("[contact] ENV CHECK:", JSON.stringify(envCheck));

  const tenantId     = process.env.MS_TENANT_ID?.trim();
  const clientId     = process.env.MS_CLIENT_ID?.trim();
  const clientSecret = process.env.MS_CLIENT_SECRET?.trim();
  const contactFrom  = process.env.CONTACT_FROM?.trim();
  const contactTo    = process.env.CONTACT_TO?.trim();

  if (!tenantId || !clientId || !clientSecret || !contactFrom || !contactTo) {
    const missing = ["MS_TENANT_ID", "MS_CLIENT_ID", "MS_CLIENT_SECRET", "CONTACT_FROM", "CONTACT_TO"]
      .filter((k) => !process.env[k]?.trim());
    console.error("[contact] MISSING ENV VARS:", missing.join(", "));
    return NextResponse.json(
      { error: "Server configuration error. Please contact us directly on 07922 909982." },
      { status: 500 }
    );
  }

  // Log first few chars of addresses to confirm they match expectations (no typos/spaces)
  console.log(
    `[contact] ADDRESSES — from="${contactFrom.slice(0, 6)}…" to="${contactTo.slice(0, 6)}…"`,
    `tenantId prefix="${tenantId.slice(0, 8)}…" clientId prefix="${clientId.slice(0, 8)}…"`
  );

  // ── Parse body ────────────────────────────────────────────────────────────
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

  // ── Honeypot ──────────────────────────────────────────────────────────────
  if (body._honey) {
    return NextResponse.json({ ok: true }); // silent discard
  }

  // ── Server-side validation ────────────────────────────────────────────────
  const { name, phone, service, address } = body;
  if (!name?.trim() || !phone?.trim() || !service?.trim() || !address?.trim()) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 }
    );
  }

  const serviceLabel    = SERVICE_LABELS[service] ?? service;
  const submitterEmail  = body.email?.trim() || undefined;
  const submitterName   = name.trim();

  // ── Build email content ───────────────────────────────────────────────────
  const subject = `New Quote Request — ${submitterName} (${serviceLabel})`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F8F5F0;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F5F0;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;max-width:600px;width:100%">
        <tr><td style="background:#0A0908;padding:28px 36px;border-bottom:4px solid #F58220">
          <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#F58220;font-weight:700">Property Care Paint &amp; Electrics</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.01em">New Quote Request</h1>
        </td></tr>
        <tr><td style="padding:36px">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", submitterName)}
            ${row("Phone", phone.trim())}
            ${row("Email", submitterEmail ?? "—")}
            ${row("Service Required", serviceLabel)}
            ${row("Property Address", address.trim())}
            ${row("Contact Method", body.contactMethod?.trim() || "—")}
          </table>
          <div style="margin-top:24px;padding:20px;background:#F8F5F0;border-left:4px solid #F58220;border-radius:0 4px 4px 0">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#F58220;font-weight:700">Project Details</p>
            <p style="margin:0;font-size:14px;color:#3D3A37;line-height:1.7">${escHtml(body.details?.trim() || "(none provided)")}</p>
          </div>
          ${submitterEmail
            ? `<p style="margin:28px 0 0;font-size:13px;color:#6B6460">Hit <strong>Reply</strong> to respond directly to <strong>${escHtml(submitterEmail)}</strong>.</p>`
            : ""}
        </td></tr>
        <tr><td style="background:#F8F5F0;padding:20px 36px;border-top:1px solid #E8E2D9">
          <p style="margin:0;font-size:11px;color:#9E9488">Sent via propertycarepro.co.uk · ${new Date().toUTCString()}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // ── Get token → send mail ─────────────────────────────────────────────────
  try {
    const accessToken = await getAccessToken(tenantId, clientId, clientSecret);

    await sendGraphMail(
      accessToken,
      contactFrom,
      contactTo,
      subject,
      htmlContent,
      submitterEmail,
      submitterName
    );

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] SEND FAILED:", msg);

    return NextResponse.json(
      {
        error:
          "We couldn't send your message right now — please call us on 07922 909982 or WhatsApp us directly.",
        _graphError: msg,
      },
      { status: 502 }
    );
  }
}
