import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1F3C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Hex monogram placeholder — gold square */}
          <div
            style={{
              width: 52,
              height: 52,
              background: "#BF9040",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#0F1F3C", fontSize: 24, fontWeight: 900 }}>T</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ color: "white", fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>
              Tampa Bay Business Forum
            </span>
            <span style={{ color: "#BF9040", fontSize: 12, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
              Invite-Only · Tampa Bay
            </span>
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Gold rule */}
          <div style={{ width: 64, height: 4, background: "#BF9040", borderRadius: 2 }} />
          <h1
            style={{
              color: "white",
              fontSize: 72,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.05,
              maxWidth: 820,
            }}
          >
            One seat per industry.
            <br />
            <span style={{ color: "#BF9040" }}>Built on trust.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 24, margin: 0, fontWeight: 400 }}>
            24 vetted members. Consistent deal flow. No competitors at the table.
          </p>
        </div>

        {/* Bottom: domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18 }}>
            tampabusinessforum.com
          </span>
          <div
            style={{
              background: "#BF9040",
              color: "#0F1F3C",
              fontSize: 16,
              fontWeight: 700,
              padding: "10px 24px",
              borderRadius: 6,
              letterSpacing: 0.5,
            }}
          >
            Apply Now →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
