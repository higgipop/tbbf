import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "About",
  description:
    "Tampa Bay Business Forum is an invite-only referral network of 24 vetted Tampa Bay professionals. Learn how the group works and what makes it different.",
};

const principles = [
  {
    title: "One seat per industry",
    body: "Each professional category holds exactly one member. When your category is filled, it's filled. No conflicts, no competing colleagues at the table.",
  },
  {
    title: "Referrals are personal",
    body: "When a TBBF member refers you, they're putting their reputation on it. That weight is what makes the introductions meaningful.",
  },
  {
    title: "Consistency over volume",
    body: "Members show up, stay engaged, and refer deliberately. The group's value compounds over time through relationships built on follow-through.",
  },
  {
    title: "Membership by introduction only",
    body: "Every member was brought in by someone already in the group. New members are vetted and approved before they ever attend a meeting.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0F1F3C] text-white overflow-hidden">
        <Image
          src="/tampa-panoramic.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-25"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-[#BF9040] text-sm font-semibold tracking-widest uppercase mb-4">
              About TBBF
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A different kind of
              <br />
              business network.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Tampa Bay Business Forum is an invite-only group of 24 professionals
              who meet regularly, know each other well, and refer each other
              intentionally. It&rsquo;s been operating in the Tampa Bay area for
              over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Group photo */}
      <div className="w-full bg-[#0F1F3C]/4">
        <Image
          src="/group-photo.jpg"
          alt="Tampa Bay Business Forum members"
          width={1600}
          height={900}
          className="w-full object-cover max-h-[580px]"
          style={{ objectPosition: "center 25%" }}
          priority
        />
      </div>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0F1F3C] mb-6">How it works</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                The Tampa Bay Business Forum is a Business-to-Business member
                organization and a forum to network in a professional atmosphere.
                Sales professionals and business leaders that sell primarily or
                totally to business enterprises are invited to apply.
              </p>
              <p>
                The group provides a resource of information for business
                professionals and topics of common interest. Through active
                participation, members can promote their own businesses, give
                presentations, increase their visibility, and exchange referrals.
              </p>
              <p>
                When a TBBF member refers you to one of our colleagues, you
                arrive with context. The professional you&rsquo;re meeting knows
                who you are, why you need them, and that you were introduced by
                someone they trust.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {principles.map(({ title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 shadow-sm border border-black/5 flex gap-4"
              >
                <div className="w-1 rounded-full bg-[#BF9040] flex-shrink-0 self-stretch" />
                <div>
                  <h3 className="font-semibold text-[#0F1F3C] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-[#0F1F3C]/4 border-y border-black/8">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#0F1F3C] mb-4">Membership</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every member joined because an existing member vouched for them and
              the group approved the fit. Each category holds one seat — if yours
              is open, you can submit an application for committee review.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              If you were referred to this site by a TBBF member,{" "}
              <Link href="/members" className="text-[#BF9040] hover:underline">
                browse the member directory
              </Link>{" "}
              to connect with the professional you&rsquo;re looking for.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#BF9040] hover:bg-[#D4AA5A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Apply for Membership →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#0F1F3C] mb-1">
              Looking for a member?
            </h2>
            <p className="text-gray-500 text-sm">
              24 professionals. 24 industries. One introduction away.
            </p>
          </div>
          <Link
            href="/members"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F1F3C] hover:bg-[#1A3460] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View all members →
          </Link>
        </div>
      </section>
    </>
  );
}
