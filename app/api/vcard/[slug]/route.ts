import { NextResponse } from "next/server";
import { getMemberBySlug } from "@/lib/members";

export function generateStaticParams() {
  const { members } = require("@/lib/members");
  return members.map((m: { slug: string }) => ({ slug: m.slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return new NextResponse("Not found", { status: 404 });

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${member.name}`,
    `N:${member.name.split(" ").slice(1).join(" ")};${member.name.split(" ")[0]};;;`,
    `ORG:${member.company}`,
    `TITLE:${member.category}`,
    `TEL;TYPE=CELL:${member.phone}`,
    member.website ? `URL:${member.website}` : null,
    member.linkedin ? `URL;type=LinkedIn:${member.linkedin}` : null,
    `NOTE:TBBF Member — Tampa Bay Business Forum\\nhttps://tampababusinessforum.com/members/${member.slug}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const filename = `${member.name.replace(/\s+/g, "-")}.vcf`;

  return new NextResponse(lines, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
