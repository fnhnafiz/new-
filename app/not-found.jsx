/* app/not-found.js */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Plane,
  Search,
  ShieldCheck,
  FileText,
  CalendarCheck,
  ArrowLeft,
} from "lucide-react";

const quickLinks = [
  {
    icon: Search,
    title: "Course Finder",
    desc: "Filter by marks, budget and intake",
    href: "/courses",
  },
  {
    icon: ShieldCheck,
    title: "Visa Checker",
    desc: "See where your profile stands",
    href: "/visa-checker",
  },
  {
    icon: FileText,
    title: "SOP Review",
    desc: "Upload it, get it back rewritten",
    href: "/sop-review",
  },
  {
    icon: CalendarCheck,
    title: "Book counselling",
    desc: "Free first call, no obligation",
    href: "/counseling",
  },
];

export default function NotFound() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const search = () => {
    const term = query.trim();
    router.push(term ? `/courses?q=${encodeURIComponent(term)}` : "/courses");
  };

  return (
    <section className="relative overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-28">
      {/* হালকা ডট টেক্সচার */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl text-center">
        <BoardingPass />

        <h1 className="mt-12 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          This page did not clear immigration
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed">
          The link you followed does not exist, or it moved somewhere else.
          Nothing is wrong with your application.
        </p>

        {/* ---------- search ---------- */}
        <div className="mx-auto mt-9 flex max-w-md gap-2">
          <div className="relative flex-1">
            <Search
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body/60"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && search()}
              placeholder="Search a course or subject"
              aria-label="Search courses"
              className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm text-dark placeholder:text-body/70 focus:border-primary focus:outline-none"
            />
          </div>
          <button type="button" onClick={search} className="btn btn-primary">
            Search
          </button>
        </div>

        {/* ---------- quick links ---------- */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {quickLinks.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_20px_40px_-28px_rgba(15,23,42,0.5)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-dark">
                  {title}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed">
                  {desc}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:underline"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </div>
    </section>
  );
}

/* ভিসা প্রত্যাখ্যানের স্ট্যাম্প নয়, একটা বোর্ডিং পাস — যেটার গেট খুঁজে পাওয়া যায়নি */
function BoardingPass() {
  return (
    <div className="mx-auto w-full max-w-md -rotate-1">
      <div className="relative overflow-hidden rounded-3xl bg-dark text-left shadow-[0_36px_70px_-34px_rgba(0,0,0,0.7)]">
        {/* উপরের turquoise পট্টি */}
        <div className="flex items-center justify-between bg-primary px-6 py-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
            Riz Migration
          </span>
          <Plane size={16} className="text-white" />
        </div>

        <div className="flex items-stretch">
          <div className="flex-1 px-6 py-7">
            <p className="text-[11px] uppercase tracking-wide text-white/45">
              Gate
            </p>
            <p className="mt-1 text-6xl font-bold leading-none text-white sm:text-7xl">
              404
            </p>

            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/45">
                  From
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  This link
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/45">
                  To
                </p>
                <p className="mt-1 text-sm font-semibold text-white">Nowhere</p>
              </div>
            </div>
          </div>

          {/* ছেঁড়ার রেখা, দুই পাশে খাঁজ */}
          <div className="relative">
            <span className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-surface" />
            <span className="absolute -bottom-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-surface" />
            <span className="block h-full border-l border-dashed border-white/25" />
          </div>

          <div className="flex w-32 flex-col justify-between px-5 py-7">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-white/45">
                Status
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm font-bold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Not found
              </p>
            </div>

            {/* বারকোড */}
            <div
              aria-hidden="true"
              className="mt-6 flex h-10 items-end gap-[3px]"
            >
              {[8, 4, 10, 3, 7, 5, 10, 4, 6, 9, 3, 8].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-sm bg-white/35"
                  style={{ height: `${h * 10}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}