import type { Metadata } from "next";
import { members } from "@/lib/members";
import MemberSearch from "@/components/MemberSearch";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the vetted professionals of the Tampa Bay Business Forum — one per industry, committed to referring each other across the Tampa Bay area.",
};

export default function MembersPage() {
  const sorted = [...members].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0F1F3C] mb-3">Our Members</h1>
        <p className="text-gray-500 text-lg max-w-xl">
          {members.length} professionals. {members.length} industries. One group.
        </p>
      </div>

      <MemberSearch members={sorted} />
    </div>
  );
}
