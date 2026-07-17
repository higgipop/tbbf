import Link from "next/link";
import Avatar from "./Avatar";
import type { Member } from "@/lib/members";

function IconPhone() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-black/6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      {/* Clickable top section */}
      <Link
        href={`/members/${member.slug}`}
        className="flex flex-col items-center text-center gap-3 p-6 pb-4 flex-1 group"
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

      {/* Contact strip */}
      <div className="border-t border-black/6 px-4 py-3 flex items-center justify-center gap-1">
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/\D/g, "")}`}
            title={member.phone}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#0F1F3C] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-black/4 text-xs"
          >
            <IconPhone />
            <span className="hidden sm:inline">{member.phone}</span>
          </a>
        )}

        <a
          href={`/members/${member.slug}#contact`}
          title="Send a message"
          className="flex items-center gap-1.5 text-gray-400 hover:text-[#BF9040] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-black/4 text-xs"
        >
          <IconMail />
          <span className="hidden sm:inline">Message</span>
        </a>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#0F1F3C] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-black/4 text-xs"
          >
            <IconLinkedIn />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
