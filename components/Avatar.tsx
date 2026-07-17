import Image from "next/image";
import { getInitials } from "@/lib/members";

const COLORS = [
  ["#1A3460", "#BF9040"],
  ["#0F3D2E", "#5BA88C"],
  ["#2D1A4A", "#8B63C4"],
  ["#3D1A1A", "#C46363"],
  ["#1A2D3D", "#4A90C4"],
  ["#2D2D1A", "#C4B44A"],
];

function pickColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return COLORS[Math.abs(hash) % COLORS.length];
}

interface AvatarProps {
  name: string;
  slug: string;
  hasPhoto?: boolean;
  size?: "sm" | "lg";
}

export default function Avatar({ name, slug, hasPhoto, size = "sm" }: AvatarProps) {
  const dim = size === "lg" ? 160 : 80;
  const textSize = size === "lg" ? "text-4xl" : "text-xl";

  if (hasPhoto) {
    return (
      <Image
        src={`/members/${slug}.jpg`}
        alt={name}
        width={dim}
        height={dim}
        className="rounded-full object-cover"
        style={{ width: dim, height: dim }}
      />
    );
  }

  const [bg, fg] = pickColor(name);
  const initials = getInitials(name);

  return (
    <div
      className={`rounded-full flex items-center justify-center flex-shrink-0 font-semibold ${textSize}`}
      style={{ width: dim, height: dim, backgroundColor: bg, color: fg }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
