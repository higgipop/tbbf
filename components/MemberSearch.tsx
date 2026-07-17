"use client";
import { useState } from "react";
import MemberCard from "./MemberCard";
import type { Member } from "@/lib/members";

export default function MemberSearch({ members }: { members: Member[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? members.filter((m) => {
        const q = query.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.company.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)
        );
      })
    : members;

  return (
    <>
      <div className="sticky top-16 z-40 -mx-6 px-6 py-3 bg-[#F8F7F4] border-b border-black/6 mb-8">
        <input
          type="search"
          placeholder="Search by name, company, or specialty…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-96 px-4 py-2.5 rounded-lg border border-black/10 text-sm text-[#0F1F3C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 bg-white"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No members match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      )}
    </>
  );
}
