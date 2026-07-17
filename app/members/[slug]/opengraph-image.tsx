import { ImageResponse } from "next/og";
import { getMemberBySlug, members } from "@/lib/members";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return new Response("Not found", { status: 404 });

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
            margin: "0 0 40px",
          }}
        >
          Tampa Bay Business Forum
        </p>
        <h1
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            margin: "0 0 14px",
            lineHeight: 1,
          }}
        >
          {member.name}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 30,
            margin: "0 0 24px",
          }}
        >
          {member.company}
        </p>
        <div style={{ display: "flex" }}>
          <span
            style={{
              background: "rgba(191,144,64,0.2)",
              color: "#D4AA5A",
              fontSize: 18,
              fontWeight: 600,
              padding: "8px 24px",
              borderRadius: 999,
            }}
          >
            {member.category}
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
