"use client";

import { useState } from "react";

const WORKER_URL =
  process.env.NEXT_PUBLIC_CONTACT_WORKER_URL ||
  "https://tbbf-contact.workers.dev";

type State = "idle" | "sending" | "success" | "error";

export default function ContactForm({ slug, memberName }: { slug: string; memberName: string }) {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    message: "",
  });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...form }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-[#0F1F3C]/4 rounded-xl p-8 text-center">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="font-semibold text-[#0F1F3C]">Message sent</p>
        <p className="text-sm text-gray-500 mt-1">{memberName} will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Your name</label>
          <input
            required
            type="text"
            value={form.senderName}
            onChange={update("senderName")}
            placeholder="Jane Smith"
            className="w-full border border-black/12 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040] bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Your email</label>
          <input
            required
            type="email"
            value={form.senderEmail}
            onChange={update("senderEmail")}
            placeholder="jane@company.com"
            className="w-full border border-black/12 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040] bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">
          Phone <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          value={form.senderPhone}
          onChange={update("senderPhone")}
          placeholder="(813) 555-1234"
          className="w-full border border-black/12 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040] bg-white"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Message</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder={`What can ${memberName} help you with?`}
          className="w-full border border-black/12 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040] bg-white resize-none"
        />
      </div>
      {state === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try again.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-[#0F1F3C] hover:bg-[#1A3460] disabled:opacity-60 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
      >
        {state === "sending" ? "Sending…" : `Send message to ${memberName}`}
      </button>
    </form>
  );
}
