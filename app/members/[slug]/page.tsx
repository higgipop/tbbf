import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { members, getMemberBySlug } from "@/lib/members";
import Avatar from "@/components/Avatar";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.category}`,
    description: `${member.name} is TBBF's ${member.category} specialist at ${member.company}. Connect with Tampa Bay's trusted referral network.`,
  };
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 py-3.5 border-b border-black/6 last:border-0">
      <span className="text-[#BF9040] flex-shrink-0 w-5">{icon}</span>
      <span className="text-xs text-gray-400 w-20 flex-shrink-0">{label}</span>
      <span className="text-sm text-[#0F1F3C] font-medium">{value}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block hover:bg-black/2 rounded transition-colors -mx-2 px-2"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.category,
    worksFor: {
      "@type": "Organization",
      name: member.company,
    },
    email: member.email,
    telephone: member.phone,
    ...(member.website ? { url: member.website } : {}),
    memberOf: {
      "@type": "Organization",
      name: "Tampa Bay Business Forum",
      url: "https://tampababusinessforum.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-black/8">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#0F1F3C] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/members" className="hover:text-[#0F1F3C] transition-colors">
              Members
            </Link>
            <span>/</span>
            <span className="text-[#0F1F3C] font-medium">{member.name}</span>
          </nav>
        </div>
      </div>

      {/* Profile header */}
      <div className="bg-[#0F1F3C]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <Avatar
              name={member.name}
              slug={member.slug}
              hasPhoto={member.hasPhoto}
              size="lg"
            />
            <div className="text-white">
              <span className="inline-block bg-[#BF9040]/20 text-[#D4AA5A] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                {member.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">{member.name}</h1>
              <p className="text-white/60 text-lg">{member.company}</p>
              {member.yearsInGroup && (
                <p className="text-white/40 text-sm mt-2">
                  TBBF Member · {member.yearsInGroup}{" "}
                  {member.yearsInGroup === 1 ? "year" : "years"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-lg font-semibold text-[#0F1F3C] mb-3">About the Member</h2>
              {member.bio ? (
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              ) : (
                <p className="text-gray-400 italic leading-relaxed">Bio coming soon.</p>
              )}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#0F1F3C] mb-3">Area of Focus</h2>
              <p className="text-gray-600 leading-relaxed">
                {member.areaOfFocus ?? `${member.name} is TBBF’s ${member.category} specialist, serving clients throughout the Tampa Bay area.`}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#0F1F3C] mb-3">About the Company</h2>
              {member.companyBio ? (
                <p className="text-gray-600 leading-relaxed">{member.companyBio}</p>
              ) : (
                <p className="text-gray-400 italic leading-relaxed">Company description coming soon.</p>
              )}
            </div>
          </div>

          {/* Contact card */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-black/6 p-6">
              <h2 className="text-sm font-semibold text-[#0F1F3C] uppercase tracking-wide mb-4">
                Contact
              </h2>

              <ContactRow
                icon={
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
                label="Phone"
                value={member.phone}
                href={`tel:${member.phone.replace(/\D/g, "")}`}
              />

              <ContactRow
                icon={
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
                label="Email"
                value="Send a message"
                href="#contact"
              />

              {member.website && (
                <ContactRow
                  icon={
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Website"
                  value={member.website.replace(/^https?:\/\//, "")}
                  href={member.website}
                />
              )}

              {member.linkedin && (
                <ContactRow
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                  label="LinkedIn"
                  value="View profile"
                  href={member.linkedin}
                />
              )}
            </div>

            <a
              href={`/api/vcard/${member.slug}`}
              download
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#0F1F3C] hover:bg-[#1A3460] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M10 2a.75.75 0 01.75.75v8.614l2.72-2.72a.75.75 0 111.06 1.061l-4.06 4.06a.75.75 0 01-1.06 0L5.47 9.705a.75.75 0 111.06-1.06l2.72 2.72V2.75A.75.75 0 0110 2z" />
                <path d="M3.5 13.75a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-1.5a.75.75 0 00-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-1.5z" />
              </svg>
              Add to Contacts
            </a>

            <div className="mt-3 bg-[#0F1F3C]/4 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                {member.name} was referred into TBBF by a current member and has
                been vetted by the group.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div id="contact" className="bg-white border-t border-black/8">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[#0F1F3C] mb-2">
              Send {member.name} a message
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Your message goes directly to {member.name}. Your contact information
              is never shared publicly.
            </p>
            <ContactForm slug={member.slug} memberName={member.name} />
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          href="/members"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0F1F3C] transition-colors"
        >
          ← Back to all members
        </Link>
      </div>
    </>
  );
}
