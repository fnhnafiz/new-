/* components/courses/CourseCard.jsx */
"use client";

import Link from "next/link";
import { Award, Clock, CalendarDays, Languages, Check, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course, compared, onCompare, disabled }) {
  const {
    id,
    title,
    university,
    city,
    country,
    flag,
    level,
    subject,
    duration,
    tuitionLabel,
    intakes,
    ielts,
    scholarship,
    match,
  } = course;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_26px_50px_-30px_rgba(15,23,42,0.55)]">
      {/* ---------- header band ---------- */}
      <div className="relative bg-gradient-to-r from-primary-light via-primary-light/60 to-white px-5 pb-6 pt-5">
        {/* বড় পতাকা ওয়াটারমার্ক */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-16 text-[96px] leading-none opacity-[0.12] blur-[0.5px]"
        >
          {flag}
        </span>

        <div className="relative flex items-start gap-3 pr-16">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
            {flag}
          </span>

          <div className="min-w-0 flex-1 pt-0.5">
            <p className="truncate text-sm font-semibold text-dark">
              {university}
            </p>
            <p className="truncate text-xs text-body/80">
              {city}, {country}
            </p>
          </div>
        </div>

        {scholarship && (
          <span className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">
            <Award size={11} />
            Scholarship available
          </span>
        )}

        {/* ব্যান্ডের কিনারায় অর্ধেক বসে থাকা ম্যাচ রিং */}
        <MatchRing value={match} />
      </div>

      {/* ---------- body ---------- */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <h3 className="pr-14 text-lg font-bold leading-snug lg:text-xl">
          <Link href={`/courses/${id}`} className="hover:text-primary-dark">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip>{level}</Chip>
          <Chip>{subject}</Chip>
        </div>

        {/* খাড়া ডিভাইডার দিয়ে ভাগ করা স্পেক স্ট্রিপ */}
        <dl className="mt-5 grid grid-cols-3 divide-x divide-border rounded-2xl bg-surface py-3.5">
          <Spec icon={Clock} label="Duration" value={duration} />
          <Spec icon={CalendarDays} label="Intake" value={intakes[0]} />
          <Spec icon={Languages} label="IELTS" value={ielts.toFixed(1)} />
        </dl>
      </div>

      {/* ---------- footer ---------- */}
      <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-4">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wide text-body/70">
            Tuition per year
          </p>
          <p className="truncate text-base font-bold text-dark">
            {tuitionLabel}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {/* z-10 না দিলে উপরের absolute লিংকটা এটাকে ঢেকে ফেলে */}
          <label
            title="Add to compare"
            className={`relative z-10 flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
              compared
                ? "border-primary bg-primary-light text-primary-dark"
                : disabled
                  ? "cursor-not-allowed border-border text-body/40"
                  : "border-border text-body hover:border-primary hover:text-primary-dark"
            }`}
          >
            <input
              type="checkbox"
              checked={compared}
              disabled={disabled && !compared}
              onChange={() => onCompare(course)}
              className="sr-only"
            />
            <span
              className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                compared
                  ? "border-primary bg-primary text-white"
                  : "border-border"
              }`}
            >
              {compared && <Check size={11} strokeWidth={3} />}
            </span>
            Compare
          </label>

          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
          >
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </article>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1 text-[11px] font-medium text-body">
      {children}
    </span>
  );
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="min-w-0 px-3 text-center">
      <dt className="flex items-center justify-center gap-1 text-[10px] uppercase tracking-wide text-body/70">
        <Icon size={11} />
        {label}
      </dt>
      <dd className="mt-1.5 truncate text-sm font-bold text-dark">{value}</dd>
    </div>
  );
}

/* ব্যান্ডের নিচের কিনারায় অর্ধেক ভাসিয়ে বসানো */
function MatchRing({ value }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="absolute -bottom-6 right-5 h-12 w-12 rounded-full bg-white p-0.5 shadow-[0_4px_14px_rgba(15,23,42,0.14)]">
      <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="4"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(circumference * value) / 100} ${circumference}`}
        />
      </svg>

      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-[13px] font-bold text-dark">{value}</span>
        <span className="mt-px text-[7px] font-semibold uppercase tracking-wide text-body/70">
          match
        </span>
      </span>
    </div>
  );
}