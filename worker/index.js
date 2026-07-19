// TBBF Contact Worker
// Receives form submissions and forwards to member email via Resend.
// Member emails live server-side only — never exposed to the browser.

const MEMBER_EMAILS = {
  "anh-spear":           "anh@quantum-iq.ai",
  "brian-damasiewicz":   "brian.damasiewicz@nm.com",
  "brian-dodd":          "bdodd@nextpathcp.com",
  "chris-stewart":       "stewy560@gmail.com",
  "daniel-brunal":       "daniel.brunal@lorosproductions.com",
  "fred-wallrapp":       "fred@wallrapp.com",
  "gil-fernandez":       "gfernandez@bankoftampa.com",
  "jeff-orchard":        "jorchard@supportingstrategies.com",
  "jennifer-ihrig":      "jihrig@propelrpay.com",
  "jon-slater":          "jslater@lpc.com",
  "juan-segura":         "juan@seguragallo.com",
  "justin-cole":         "Justin.Cole@halo.com",
  "larry-stephen":       "larry.stephen@thedesignfirminc.com",
  "mark-purtee":         "m.purtee@murphybusiness.com",
  "michael-higgins":     "michael@ultradesignagency.com",
  "michael-kimling":     "mkimling@mail.com",
  "nick-smith":          "nick@fortifiedtech.net",
  "rob-shobe":           "rob.shobe@ioausa.com",
  "robert-bishop":       "robert@robertbishop.us",
  "ron-martin":          "ron@southlakesignstampa.com",
  "sergei-galeano":      "sgaleano@galeanocfo.com",
  "shane-mihok":         "shane.mihok@rofinc.com",
  "shawn-spiering":      "sspiering@adt.com",
  "gary-hoffman":        "ghoffman@olympiamoving.com",
  "vanessa-ferguson":    "vanessa@fidaralegal.com",
};

// Basic email format check — prevents obviously invalid reply-to addresses
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getAllowed(env) {
  return (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
}

function corsHeaders(origin, allowed) {
  const allowOrigin = allowed.includes(origin) ? origin : (allowed[0] || "");
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function respond(body, status, origin, allowed) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin, allowed) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = getAllowed(env);

    // Enforce origin allowlist — reject anything not from the known site
    if (!allowed.includes(origin)) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin, allowed) });
    }

    if (request.method !== "POST") {
      return respond({ error: "Method not allowed" }, 405, origin, allowed);
    }

    // Require explicit JSON content-type — blocks no-cors browser CSRF
    const ct = request.headers.get("Content-Type") || "";
    if (!ct.includes("application/json")) {
      return respond({ error: "Unsupported media type" }, 415, origin, allowed);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return respond({ error: "Invalid JSON" }, 400, origin, allowed);
    }

    const { slug, senderName, senderEmail, senderPhone, message } = body;

    if (!slug || !senderName || !senderEmail || !message) {
      return respond({ error: "Missing required fields" }, 400, origin, allowed);
    }

    // Validate sender email format — prevents header injection via reply_to
    if (!EMAIL_RE.test(senderEmail)) {
      return respond({ error: "Invalid sender email" }, 400, origin, allowed);
    }

    // Enforce max lengths to cap payload size
    if (
      String(senderName).length > 120 ||
      String(senderEmail).length > 254 ||
      String(message).length > 4000
    ) {
      return respond({ error: "Input too long" }, 400, origin, allowed);
    }

    const toEmail = MEMBER_EMAILS[slug];
    if (!toEmail) {
      return respond({ error: "Member not found" }, 404, origin, allowed);
    }

    if (!env.RESEND_API_KEY) {
      return respond({ error: "Email service not configured" }, 500, origin, allowed);
    }

    // Static subject — user-supplied names go only inside the sanitized HTML body
    const subject = "New message via Tampa Bay Business Forum";

    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto">
        <p style="color:#6b7280;font-size:13px;margin-bottom:24px">
          Sent via the Tampa Bay Business Forum contact form
        </p>
        <h2 style="font-size:20px;color:#0F1F3C;margin:0 0 4px">
          Message from ${escHtml(senderName)}
        </h2>
        <p style="color:#6b7280;font-size:14px;margin:0 0 24px">
          ${escHtml(senderEmail)}${senderPhone ? ` · ${escHtml(senderPhone)}` : ""}
        </p>
        <div style="background:#f8f7f4;border-left:3px solid #BF9040;padding:16px 20px;border-radius:0 8px 8px 0">
          <p style="margin:0;color:#1A1A2E;line-height:1.6;white-space:pre-wrap">${escHtml(message)}</p>
        </div>
        <p style="margin-top:24px;font-size:13px;color:#9ca3af">
          To reply, copy the sender's email above — do not reply directly to this message.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tampa Bay Business Forum <contact@tampababusinessforum.com>",
        to: [toEmail],
        // No reply_to — sender's email is visible in the body only,
        // so the member consciously copies it before responding.
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return respond({ error: "Failed to send message" }, 502, origin, allowed);
    }

    return respond({ ok: true }, 200, origin, allowed);
  },
};

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
