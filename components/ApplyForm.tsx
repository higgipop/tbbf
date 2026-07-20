"use client";

import { useState } from "react";

const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL ?? "";

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "apply",
          senderName: data.name,
          senderEmail: data.email,
          senderPhone: data.phone || "",
          senderCompany: data.company,
          senderIndustry: data.industry,
          message: data.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-10 text-center">
        <p className="text-green-800 font-semibold text-lg mb-1">Application received</p>
        <p className="text-green-700 text-sm">We&rsquo;ll review your submission and follow up within a few business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">Full Name *</label>
          <input
            name="name"
            required
            maxLength={120}
            className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">Company *</label>
          <input
            name="company"
            required
            maxLength={120}
            className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">Industry / Category *</label>
        <input
          name="industry"
          required
          maxLength={120}
          placeholder="e.g. Commercial Insurance, IT Services, Legal…"
          className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            maxLength={30}
            className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">
          Tell us about your business and why you&rsquo;d like to join TBBF *
        </label>
        <textarea
          name="message"
          required
          maxLength={4000}
          rows={5}
          className="w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040] resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#BF9040] hover:bg-[#D4AA5A] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        {status === "sending" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
