import Link from "next/link";
import Avatar from "./Avatar";
import type { Member } from "@/lib/members";

export default function MemberCard({ member }: { member: Member }) {
  const hasButtons = member.phone || member.linkedin;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-black/6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Clickable profile area */}
      <Link
        href={`/members/${member.slug}`}
        className="group flex flex-col items-center text-center gap-3 p-6 pb-4 flex-1"
      >
        <Avatar name={member.name} slug={member.slug} hasPhoto={member.hasPhoto} size="sm" />
        <div className="space-y-0.5">
          <p className="font-semibold text-[#0F1F3C] group-hover:text-[#BF9040] transition-colors leading-tight text-sm">
            {member.name}
          </p>
          <p className="text-xs text-gray-400">{member.company}</p>
        </div>
        <span className="inline-block bg-[#0F1F3C]/6 text-[#0F1F3C] text-xs font-medium px-3 py-1 rounded-full">
          {member.category}
        </span>
      </Link>

      {/* Contact buttons */}
      {(hasButtons || true) && (
        <div className="border-t border-black/6 px-3 py-3 flex items-center justify-center gap-2">
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\D/g, "")}`}
              title="Call"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#0F1F3C] hover:bg-black/4 border border-black/8 hover:border-black/16 rounded-lg py-1.5 px-2 transition-all"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
                <path d="M1.5 2A1.5 1.5 0 013 .5h.936a1 1 0 01.979.796l.518 2.59a1 1 0 01-.54 1.073l-.868.434a8.036 8.036 0 004.585 4.585l.433-.868a1 1 0 011.073-.54l2.59.518A1 1 0 0113.5 9.564V10.5A1.5 1.5 0 0112 12C6.201 12 1.5 7.299 1.5 1.5V2z" />
              </svg>
              <span className="hidden sm:inline">Phone</span>
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#0F1F3C] hover:bg-black/4 border border-black/8 hover:border-black/16 rounded-lg py-1.5 px-2 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          )}

          <a
            href={`/members/${member.slug}#contact`}
            title="Email"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#BF9040] hover:bg-[#BF9040]/6 border border-black/8 hover:border-[#BF9040]/30 rounded-lg py-1.5 px-2 transition-all"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 5.154V12.25c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.154l-5.5 3.138a1.5 1.5 0 01-1.5 0L1.5 5.154zm13-1.996l-6.5 3.71-6.5-3.71V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v-.592z" />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      )}
    </div>
  );
}
