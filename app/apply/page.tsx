import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply for Membership | Tampa Bay Business Forum",
  description:
    "Apply to join the Tampa Bay Business Forum — an invite-only professional referral network for B2B business leaders in the Tampa Bay area.",
};

export default function ApplyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-10">
        <p className="text-[#BF9040] text-sm font-semibold tracking-widest uppercase mb-3">
          Membership
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F1F3C] mb-4">
          Apply to TBBF
        </h1>
        <p className="text-gray-600 leading-relaxed">
          The Tampa Bay Business Forum is an invite-only group for B2B sales
          professionals and business leaders. One seat per industry — no
          conflicts, no competition. Members are vetted and introduced by an
          existing member before joining.
        </p>
      </div>

      {/* Download option */}
      <div className="bg-[#F8F7F4] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 border border-black/6">
        <div>
          <p className="font-semibold text-[#0F1F3C] mb-0.5">Prefer a paper application?</p>
          <p className="text-sm text-gray-500">Download, complete, and return the PDF to any current member.</p>
        </div>
        <a
          href="/Application.pdf"
          download
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F1F3C] hover:bg-[#1A3460] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v8M4 7l4 4 4-4M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Application
        </a>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black/8" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-400">or apply online</span>
        </div>
      </div>

      <ApplyForm />

      <p className="mt-6 text-xs text-gray-400 text-center">
        Applications are reviewed by the membership committee. We&rsquo;ll be in touch within a few business days.
      </p>
    </div>
  );
}
