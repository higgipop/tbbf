import Link from "next/link";
import Image from "next/image";
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
            <p className="text-white/80 text-lg italic leading-relaxed mb-10 max-w-xl border-l-2 border-[#BF9040] pl-5">
              &ldquo;A group of like-minded, achievement-oriented business
              professionals coming together to create an association far greater
              than the sum of its parts, thus dramatically leveraging each
              other&rsquo;s success.&rdquo;
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
              { value: members.length.toString(), label: "Active Members" },
              { value: members.length.toString(), label: "Industries Represented" },
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

      {/* Group photo */}
      <div className="w-full">
        <Image
          src="/group-photo.jpg"
          alt="Tampa Bay Business Forum members"
          width={1600}
          height={900}
          className="w-full object-cover max-h-[560px]"
          style={{ objectPosition: "center 25%" }}
          priority
        />
      </div>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Tampa Bay Business Forum is a Business-to-Business member
              organization and a forum to network in a professional atmosphere.
              Sales professionals and business leaders that sell primarily or
              totally to business enterprises are invited to apply.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The group provides a resource of information for business
              professionals and topics of common interest. Through active
              participation, members promote their own businesses, give
              presentations, increase their visibility, and exchange referrals.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#0F1F3C] hover:bg-[#1A3460] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Apply for Membership →
            </Link>
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

      {/* CTA */}
      <section className="bg-[#0F1F3C]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-10">
          <div className="flex flex-col items-start gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Looking for a TBBF member?
              </h2>
              <p className="text-white/50 text-sm">
                {members.length} professionals. {members.length} industries. One introduction away.
              </p>
            </div>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 bg-[#BF9040] hover:bg-[#D4AA5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Meet our members →
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4 sm:border-l sm:border-white/10 sm:pl-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Interested in joining?
              </h2>
              <p className="text-white/50 text-sm">
                B2B sales professionals and business leaders are invited to apply.
              </p>
            </div>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 border border-[#BF9040] text-[#BF9040] hover:bg-[#BF9040] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
