import Link from "next/link";
import Avatar from "./Avatar";
import type { Member } from "@/lib/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/members/${member.slug}`}
      className="group bg-white rounded-xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center gap-4"
    >
      <Avatar name={member.name} slug={member.slug} hasPhoto={member.hasPhoto} size="sm" />
      <div className="space-y-1">
        <p className="font-semibold text-[#0F1F3C] group-hover:text-[#BF9040] transition-colors leading-tight">
          {member.name}
        </p>
        <p className="text-sm text-gray-500">{member.company}</p>
      </div>
      <span className="mt-auto inline-block bg-[#0F1F3C]/6 text-[#0F1F3C] text-xs font-medium px-3 py-1 rounded-full">
        {member.category}
      </span>
    </Link>
  );
}
