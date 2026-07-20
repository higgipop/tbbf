import type { MetadataRoute } from "next";
import { members } from "@/lib/members";

const BASE = "https://tampabusinessforum.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const memberUrls = members.map((m) => ({
    url: `${BASE}/members/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/members`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...memberUrls,
  ];
}
