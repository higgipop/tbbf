import Link from "next/link";
import { members } from "@/lib/members";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tampa Bay Business Forum",
  alternateName: "TBBF",
  description:
    "Tampa Bay's invite-only professional referral network. 24 vetted members, one per industry.",
  url: "https://tampababusinessforum.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Tampa Bay Area, Florida",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#0F1F3C] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[#BF9040] text-sm font-semibold tracking-widest uppercase mb-4">
              Tampa Bay Business Forum
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tampa Bay&rsquo;s professional
              <br />
              referral network.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              TBBF is an invite-only group of 24 trusted professionals — one per
              industry — who refer each other to clients across the Tampa Bay area.
              Membership is by introduction only.
            </p>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 bg-[#BF9040] hover:bg-[#D4AA5A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Meet Our Members
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: {members.length.toString()}, label: "Active Members" },
              { value: {members.length.toString()}, label: "Industries Represented" },
              { value: "Tampa Bay", label: "Area Served" },
              { value: "Invite Only", label: "Membership" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-2xl font-bold text-[#0F1F3C]">{value}</dt>
                <dd className="text-sm text-gray-500 mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0F1F3C] mb-5">
              Built on trust, not transactions.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TBBF operates on a simple principle: the best business introductions
              come from people who know each other well. Members meet regularly, refer
              intentionally, and hold each other accountable to results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each seat in the group is exclusive to one professional per category.
              When a member refers you, it means something — there&rsquo;s no
              competing colleague in the same room.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                title: "One member per industry",
                body: "Each professional service category holds exactly one seat. No conflicts, no competition.",
              },
              {
                title: "Vetted membership",
                body: "Every member is introduced by an existing member and approved by the group before joining.",
              },
              {
                title: "Consistent deal flow",
                body: "Members have generated hundreds of thousands of dollars in referred business across Tampa Bay.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-black/5"
              >
                <div className="w-1.5 rounded-full bg-[#BF9040] flex-shrink-0 self-stretch" />
                <div>
                  <h3 className="font-semibold text-[#0F1F3C] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
