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
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <p
          style={{
            color: "#BF9040",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            margin: "0 0 28px",
          }}
        >
          Tampa Bay Business Forum
        </p>
        <h1
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            margin: "0 0 24px",
            lineHeight: 1.1,
          }}
        >
          Tampa Bay&apos;s professional
          <br />
          referral network.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, margin: 0 }}>
          tampababusinessforum.com
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
