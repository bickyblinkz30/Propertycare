import { NextRequest, NextResponse } from "next/server";

// Force Node.js runtime — Edge Runtime blocks certain fetch behaviours and
// lacks some APIs used here.
export const runtime = "nodejs";

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

export async function POST(req: NextRequest) {
  // Top-level catch — any unhandled exception produces a logged 500 rather
  // than a silent crash with no HTTP response.
  try {
    return await handlePost(req);
  } catch (fatal: unknown) {
    const msg = fatal instanceof Error
      ? `${fatal.message}\n${fatal.stack ?? ""}`
      : String(fatal);
    console.error("[contact] FATAL UNHANDLED ERROR:", msg);
    return NextResponse.json(
      { error: "Server error. Please call us on 07922 909982.", _fatal: msg },
      { status: 500 }
    );
  }
}

async function handlePost(req: NextRequest): Promise<NextResponse> {

  // ── Step 1: Log env var presence (never log values) ───────────────────────
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
  console.log("[contact] STEP 1 — ENV CHECK:", JSON.stringify(envCheck));

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

  console.log(
    `[contact] STEP 1 OK — from="${contactFrom.slice(0, 6)}…" (len=${contactFrom.length})`,
    `to="${contactTo.slice(0, 6)}…" (len=${contactTo.length})`,
    `tenantId="${tenantId.slice(0, 8)}…" clientId="${clientId.slice(0, 8)}…"`
  );

  // ── Step 2: Parse request body ────────────────────────────────────────────
  console.log("[contact] STEP 2 — parsing request body");
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    address?: string;
    details?: string;
    contactMethod?: string;
    _pcpe_b8k2?: string;
  };

  try {
    body = await req.json();
    console.log("[contact] STEP 2 OK — body parsed, fields:", Object.keys(body).join(", "));
  } catch (err) {
    console.error("[contact] STEP 2 FAIL — body parse error:", String(err));
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ── Step 3: Honeypot ──────────────────────────────────────────────────────
  // Discard only when the hidden field has a non-empty, non-whitespace value.
  const honeyValue = body._pcpe_b8k2?.trim() ?? "";
  if (honeyValue) {
    // Log what filled it so we can diagnose autofill vs bot traffic
    console.warn(`[contact] STEP 3 — honeypot triggered, discarding. Field value: "${honeyValue.slice(0, 80)}"`);
    return NextResponse.json({ ok: true });
  }
  console.log("[contact] STEP 3 OK — honeypot empty, proceeding");

  // ── Step 4: Validate required fields ─────────────────────────────────────
  console.log("[contact] STEP 4 — validating fields");
  const { name, phone, service, address } = body;
  if (!name?.trim() || !phone?.trim() || !service?.trim() || !address?.trim()) {
    const missing = ["name", "phone", "service", "address"].filter(f => !body[f as keyof typeof body]?.trim());
    console.log("[contact] STEP 4 FAIL — missing required fields:", missing.join(", "));
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 422 }
    );
  }
  console.log("[contact] STEP 4 OK — all required fields present");

  const serviceLabel   = SERVICE_LABELS[service] ?? service;
  const submitterEmail = body.email?.trim() || undefined;
  const submitterName  = name.trim();
  const subject        = `New Quote Request — ${submitterName} (${serviceLabel})`;

  // ── Step 5: Build email content ───────────────────────────────────────────
  console.log("[contact] STEP 5 — building email content");
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
  console.log("[contact] STEP 5 OK — HTML built, length:", htmlContent.length);

  // ── Step 6: Get OAuth2 access token ──────────────────────────────────────
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  console.log("[contact] STEP 6 — token request →", tokenUrl);

  let accessToken: string;
  try {
    const tokenRes = await fetch(tokenUrl, {
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

    console.log("[contact] STEP 6 — token HTTP status:", tokenRes.status);

    const rawToken = await tokenRes.text();
    console.log("[contact] STEP 6 — token raw response (first 500 chars):", rawToken.slice(0, 500));

    let tokenData: Record<string, unknown> = {};
    try {
      tokenData = JSON.parse(rawToken);
    } catch {
      console.error("[contact] STEP 6 FAIL — token response is not JSON");
      throw new Error(`Token endpoint returned non-JSON (HTTP ${tokenRes.status}): ${rawToken.slice(0, 200)}`);
    }

    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("[contact] STEP 6 FAIL — no access_token:", JSON.stringify(tokenData, null, 2));
      throw new Error(String(tokenData.error_description ?? tokenData.error ?? `Token HTTP ${tokenRes.status}`));
    }

    accessToken = tokenData.access_token as string;
    console.log(`[contact] STEP 6 OK — token acquired, length=${accessToken.length}, expires_in=${tokenData.expires_in}`);
  } catch (err: unknown) {
    if (err instanceof Error && err.message.startsWith("Token")) throw err;
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] STEP 6 FAIL — fetch threw:", msg);
    throw new Error(`Token fetch error: ${msg}`);
  }

  // ── Step 7: Send email via Graph sendMail ─────────────────────────────────
  const sendUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(contactFrom)}/sendMail`;
  console.log("[contact] STEP 7 — sendMail →", sendUrl);

  const message: Record<string, unknown> = {
    subject,
    body: { contentType: "HTML", content: htmlContent },
    toRecipients: [{ emailAddress: { address: contactTo } }],
  };
  if (submitterEmail) {
    message.replyTo = [
      { emailAddress: { address: submitterEmail, name: submitterName } },
    ];
  }

  let sendRes: Response;
  try {
    sendRes = await fetch(sendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, saveToSentItems: true }),
      cache: "no-store",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] STEP 7 FAIL — sendMail fetch threw:", msg);
    throw new Error(`sendMail network error: ${msg}`);
  }

  console.log("[contact] STEP 7 — sendMail HTTP status:", sendRes.status);

  // Always read the body so it appears in logs
  const rawSend = await sendRes.text();
  console.log("[contact] STEP 7 — sendMail body:", rawSend.slice(0, 1000) || "(empty — expected for 202)");

  // Graph returns 202 Accepted with empty body on success.
  // Any other status — including other 2xx — is treated as failure.
  if (sendRes.status !== 202) {
    let detail = `sendMail HTTP ${sendRes.status}`;
    try {
      const errBody = JSON.parse(rawSend);
      console.error("[contact] STEP 7 FAIL:", JSON.stringify(errBody, null, 2));
      detail = String(errBody?.error?.message ?? errBody?.error?.code ?? detail);
    } catch {
      console.error("[contact] STEP 7 FAIL (non-JSON body):", rawSend.slice(0, 300));
    }
    throw new Error(detail);
  }

  console.log("[contact] STEP 7 OK — 202 Accepted, email queued");

  // ── Success ───────────────────────────────────────────────────────────────
  return NextResponse.json({ ok: true });
}
