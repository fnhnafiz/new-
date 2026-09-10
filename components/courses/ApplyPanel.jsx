/* components/courses/ApplyPanel.jsx */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, Share2, Check, MessageSquare } from "lucide-react";

export default function ApplyPanel({ course }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: course.title, url });
        return;
      } catch {
        // ইউজার বাতিল করলে চুপচাপ কপিতে নেমে আসবে
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_44px_-32px_rgba(15,23,42,0.5)]">
      <p className="text-[11px] uppercase tracking-wide text-body/70">
        Tuition per year
      </p>
      <p className="mt-1 text-2xl font-bold text-dark">{course.tuitionLabel}</p>

      <dl className="mt-5 space-y-3 border-y border-border py-5 text-sm">
        <Row label="Next intake" value={course.intakes[0]} />
        <Row label="Duration" value={course.duration} />
        <Row label="IELTS needed" value={course.ielts.toFixed(1)} />
        <Row
          label="Apply by"
          value={course.scholarship ? "6 weeks before intake" : "8 weeks before intake"}
        />
      </dl>

      <div className="mt-5 space-y-2.5">
        <Link href="/counseling" className="btn btn-primary w-full">
          Apply with Riz Migration
        </Link>
        <Link href="/visa-checker" className="btn btn-outline w-full">
          Check my visa chances
        </Link>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-colors ${
            saved
              ? "border-primary bg-primary-light text-primary-dark"
              : "border-border text-body hover:border-primary"
          }`}
        >
          <Bookmark size={15} className={saved ? "fill-current" : ""} />
          {saved ? "Saved" : "Save"}
        </button>

        <button
          type="button"
          onClick={share}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium text-body transition-colors hover:border-primary"
        >
          {copied ? <Check size={15} /> : <Share2 size={15} />}
          {copied ? "Copied" : "Share"}
        </button>
      </div>

      <div className="mt-6 flex gap-3 rounded-2xl bg-surface p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
          <MessageSquare size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-dark">
            Not sure you qualify?
          </p>
          <p className="mt-1 text-xs leading-relaxed">
            A counsellor will read your transcripts and tell you before you pay
            an application fee.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt>{label}</dt>
      <dd className="font-semibold text-dark">{value}</dd>
    </div>
  );
}