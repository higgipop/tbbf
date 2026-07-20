"use client";

import { useState } from "react";

const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL ?? "";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0F1F3C] mb-1.5">
        {label}{required && " *"}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-black/15 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BF9040]/40 focus:border-[#BF9040]";
const textareaCls = `${inputCls} resize-none`;

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 pb-1 border-b border-black/8">
      <h3 className="text-xs font-semibold text-[#BF9040] tracking-widest uppercase">{children}</h3>
    </div>
  );
}

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "apply",
          senderName: g("applicantName"),
          senderEmail: g("businessEmail"),
          senderPhone: g("businessPhone"),
          senderCompany: g("companyName"),
          senderIndustry: g("category"),
          applicationData: {
            date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
            applicantName: g("applicantName"),
            companyName: g("companyName"),
            businessAddress: g("businessAddress"),
            cityStateZip: g("cityStateZip"),
            businessPhone: g("businessPhone"),
            mobilePhone: g("mobilePhone"),
            businessEmail: g("businessEmail"),
            category: g("category"),
            serviceDescription: g("serviceDescription"),
            yearsInTampaBay: g("yearsInTampaBay"),
            yearsInCurrentRole: g("yearsInCurrentRole"),
            contribution: g("contribution"),
            referralSources: g("referralSources"),
            hunterOrFarmer: g("hunterOrFarmer"),
            hunterOrFarmerExplain: g("hunterOrFarmerExplain"),
            percentageBusiness: g("percentageBusiness"),
            otherNetworkingGroups: g("otherNetworkingGroups"),
            commitmentConfirm: g("commitmentConfirm"),
            memberSponsor: g("memberSponsor"),
          },
        }),
      });

      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-10 text-center">
        <p className="text-green-800 font-semibold text-lg mb-1">Application received</p>
        <p className="text-green-700 text-sm">The membership committee will review your submission and follow up within a few business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <SectionHeading>Contact Information</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Applicant's Name" required>
          <input name="applicantName" required maxLength={120} className={inputCls} />
        </Field>
        <Field label="Company Name" required>
          <input name="companyName" required maxLength={120} className={inputCls} />
        </Field>
      </div>

      <Field label="Business Address" required>
        <input name="businessAddress" required maxLength={200} className={inputCls} />
      </Field>

      <Field label="City / State / Zip" required>
        <input name="cityStateZip" required maxLength={100} className={inputCls} />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Business Telephone" required>
          <input name="businessPhone" type="tel" required maxLength={30} className={inputCls} />
        </Field>
        <Field label="Mobile Telephone">
          <input name="mobilePhone" type="tel" maxLength={30} className={inputCls} />
        </Field>
      </div>

      <Field label="Business Email Address" required>
        <input name="businessEmail" type="email" required maxLength={254} className={inputCls} />
      </Field>

      <SectionHeading>Business Classification</SectionHeading>

      <Field label="Classification / Business Category" required>
        <input name="category" required maxLength={120} placeholder="e.g. Commercial Insurance, IT Services, Legal…" className={inputCls} />
      </Field>

      <Field label="Description of Service or Product" required>
        <textarea name="serviceDescription" required maxLength={1000} rows={3} className={textareaCls} />
      </Field>

      <SectionHeading>Experience</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="How long have you been doing this business in Tampa Bay?" required>
          <input name="yearsInTampaBay" required maxLength={100} placeholder="e.g. 5 years" className={inputCls} />
        </Field>
        <Field label="How long in your current role with this company?" required>
          <input name="yearsInCurrentRole" required maxLength={100} placeholder="e.g. 3 years" className={inputCls} />
        </Field>
      </div>

      <SectionHeading>Group Fit</SectionHeading>

      <Field label="What do you expect to be able to contribute to the group?" required>
        <textarea name="contribution" required maxLength={1000} rows={3} className={textareaCls} />
      </Field>

      <Field label="What will be your major source of referrals and leads?" required>
        <textarea name="referralSources" required maxLength={1000} rows={3} className={textareaCls} />
      </Field>

      <Field label='Would you consider yourself to be a "Hunter or Farmer"?' required>
        <div className="flex gap-6 mt-1">
          {["Hunter", "Farmer", "Both"].map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="hunterOrFarmer" value={v} required className="accent-[#BF9040]" />
              {v}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Explain" required>
        <textarea name="hunterOrFarmerExplain" required maxLength={500} rows={2} className={textareaCls} />
      </Field>

      <Field label="Approximately what % of your selling time is focused on businesses vs. consumers?" required>
        <input name="percentageBusiness" required maxLength={100} placeholder="e.g. 90% business / 10% consumer" className={inputCls} />
      </Field>

      <Field label="What other networking groups do you belong to?">
        <input name="otherNetworkingGroups" maxLength={200} placeholder="Or 'None'" className={inputCls} />
      </Field>

      <SectionHeading>Commitment & Policies</SectionHeading>

      <Field label="Are you able and willing to arrive no later than 8:00 AM and stay to the end of each meeting?" required>
        <div className="flex gap-6 mt-1">
          {["Yes", "No"].map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="commitmentConfirm" value={v} required className="accent-[#BF9040]" />
              {v}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Member Sponsor (if applicable)">
        <input name="memberSponsor" maxLength={120} className={inputCls} />
      </Field>

      <div className="bg-[#F8F7F4] rounded-lg p-4 border border-black/6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#BF9040] flex-shrink-0" />
          <span className="text-sm text-gray-600 leading-relaxed">
            I certify that the information contained in this application is true and accurate. I also agree that I have read and understand the 9 General Policies of the TBBF and will comply.
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or contact Michael Kimling directly at mkimling@mail.com.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#BF9040] hover:bg-[#D4AA5A] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        {status === "sending" ? "Submitting…" : "Submit Application"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Applications are reviewed by the membership committee. We&rsquo;ll be in touch within a few business days.
      </p>
    </form>
  );
}
