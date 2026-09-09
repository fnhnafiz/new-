"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  FileText,
  Wallet,
  Plane,
  ArrowRight,
  Check,
} from "lucide-react";
import { allCountries } from "@/components/Data/navigation";

const steps = [
  {
    icon: BookOpen,
    title: "Choose your programme",
    desc: "Start from what you actually studied and what you can afford, not from a brochure.",
  },
  {
    icon: Building2,
    title: "Find your university",
    desc: "A shortlist split into safe, likely and ambitious, so you always have a fallback.",
  },
  {
    icon: FileText,
    title: "Prepare tests and applications",
    desc: "IELTS planning, SOP drafts and reference letters, with deadlines mapped backwards.",
  },
  {
    icon: Wallet,
    title: "Secure funding",
    desc: "Scholarships you qualify for, plus bank statements prepared the way embassies expect.",
  },
  {
    icon: Plane,
    title: "Visa and beyond",
    desc: "Mock interviews, then accommodation and arrival support once the stamp is in.",
  },
];

const years = ["2026", "2027", "2028"];
const intakes = ["January to April", "May to August", "September to December"];

export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    year: "",
    intake: "",
    agreed: false,
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const canSubmit =
    form.name.trim() && form.phone.trim() && form.email.trim() && form.agreed;

  const handleSubmit = () => {
    if (!canSubmit) return;
    // TODO: ব্যাকএন্ড রেডি হলে এখানে API কল বসবে
    setSent(true);
  };

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="wrapper grid gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* ---------------- left: steps ---------------- */}
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your next steps to studying abroad
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Five stages sit between where you are now and your first day on
            campus. We walk you through each one, and tell you plainly when a
            stage is not ready to move forward.
          </p>

          <ul className="mt-10 space-y-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-dark">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- right: form ---------------- */}
        <div className="rounded-3xl bg-white p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] sm:p-8">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                <Check size={26} />
              </span>
              <h3 className="mt-5 text-xl font-semibold">
                Request received, {form.name.split(" ")[0]}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed">
                A counsellor will call you within one working day. Keep your
                academic transcripts handy for that call.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-center text-xl font-semibold sm:text-2xl">
                Book a free consultation with a certified counsellor
              </h3>

              <div className="mt-6 space-y-3.5">
                <Field
                  placeholder="Full name *"
                  value={form.name}
                  onChange={update("name")}
                />

                <div className="flex gap-2">
                  <span className="flex shrink-0 items-center rounded-xl border border-border px-4 text-sm text-body">
                    +880
                  </span>
                  <Field
                    type="tel"
                    placeholder="Mobile number *"
                    value={form.phone}
                    onChange={update("phone")}
                    className="flex-1"
                  />
                </div>

                <Field
                  type="email"
                  placeholder="Email address *"
                  value={form.email}
                  onChange={update("email")}
                />

                <Select
                  label="Where do you want to study? *"
                  value={form.country}
                  onChange={update("country")}
                  options={allCountries.map((c) => c.name)}
                />

                <Select
                  label="Which year do you want to start? *"
                  value={form.year}
                  onChange={update("year")}
                  options={years}
                />

                <Select
                  label="When do you plan to start? *"
                  value={form.intake}
                  onChange={update("intake")}
                  options={intakes}
                />
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, agreed: e.target.checked }))
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                <span>
                  I agree to Riz Migration&apos;s{" "}
                  <Link href="/privacy" className="text-primary-dark underline">
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-primary-dark underline">
                    terms
                  </Link>
                  .
                </span>
              </label>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                Start my free consultation
                <ArrowRight size={17} />
              </button>

              <p className="mt-3 text-center text-xs">
                No charge for the first call, and no obligation to sign up.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- form primitives ---------------- */

function Field({ className = "", ...props }) {
  return (
    <input
      {...props}
      aria-label={props.placeholder}
      className={`w-full rounded-xl border border-border px-4 py-3 text-sm text-dark placeholder:text-body/70 focus:border-primary focus:outline-none ${className}`}
    />
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      aria-label={label}
      className={`w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none ${
        value ? "text-dark" : "text-body/70"
      }`}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option} className="text-dark">
          {option}
        </option>
      ))}
    </select>
  );
}
