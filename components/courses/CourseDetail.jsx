/* components/courses/CourseDetail.jsx */

import Link from "next/link";
import {
  ChevronRight,
  Clock,
  CalendarDays,
  Languages,
  Wallet,
  Award,
  GraduationCap,
  Check,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { getDetails, getRelated } from "@/components/Data/courseDetails";
import ApplyPanel from "./ApplyPanel";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Entry requirements" },
  { id: "modules", label: "What you study" },
  { id: "fees", label: "Fees and funding" },
  { id: "careers", label: "After you graduate" },
];

export default function CourseDetail({ course }) {
  const details = getDetails(course);
  const related = getRelated(course);

  return (
    <>
      {/* ================= header ================= */}
      <header className="relative overflow-hidden bg-dark px-5 pb-14 pt-8 lg:px-8 lg:pb-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 text-[300px] leading-none opacity-[0.07] blur-[2px]"
        >
          {course.flag}
        </span>

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-white/55"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/courses" className="hover:text-white">
              Course finder
            </Link>
            <ChevronRight size={14} />
            <span className="text-white/80">{course.subject}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                  {course.flag}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {course.university}
                  </p>
                  <p className="text-xs text-white/55">
                    {course.city}, {course.country}
                  </p>
                </div>
              </div>

              <h1 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>{course.level}</Tag>
                <Tag>{course.subject}</Tag>
                <Tag>{course.duration}</Tag>
                {course.scholarship && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                    <Award size={12} />
                    Scholarship available
                  </span>
                )}
              </div>
            </div>

            {/* বড় ম্যাচ রিং */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 lg:justify-end">
              <MatchRing value={course.match} />
              <div>
                <p className="text-sm font-semibold text-white">
                  Profile match
                </p>
                <p className="mt-1 max-w-[160px] text-xs leading-relaxed text-white/60">
                  Based on the grades and budget most applicants bring to this
                  course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= sticky section nav ================= */}
      <nav
        aria-label="Sections"
        className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur xl:top-20"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">
          <ul className="flex gap-1 whitespace-nowrap">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-4 py-4 text-sm font-medium text-body transition-colors hover:text-primary-dark"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= body ================= */}
      <div className="bg-surface px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {/* ---- quick facts ---- */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-4">
              <Fact icon={Clock} label="Duration" value={course.duration} />
              <Fact
                icon={CalendarDays}
                label="Intake"
                value={course.intakes.join(", ")}
              />
              <Fact
                icon={Languages}
                label="IELTS"
                value={course.ielts.toFixed(1)}
              />
              <Fact
                icon={Wallet}
                label="Tuition"
                value={course.tuitionLabel}
              />
            </div>

            {/* ---- overview ---- */}
            <Panel id="overview" title="Overview">
              <p className="leading-relaxed">{details.overview}</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {details.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl bg-surface p-4 text-sm leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Panel>

            {/* ---- requirements ---- */}
            <Panel id="requirements" title="Entry requirements">
              <dl className="divide-y divide-border">
                {details.requirements.map((req) => (
                  <div
                    key={req.label}
                    className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-dark">
                      {req.label}
                    </dt>
                    <dd className="text-sm leading-relaxed">{req.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 rounded-2xl bg-primary-light p-4 text-sm leading-relaxed text-primary-dark">
                Missing one of these does not always end the application. Study
                gaps and slightly low bands can often be explained, and we will
                tell you honestly when they cannot.
              </p>
            </Panel>

            {/* ---- modules ---- */}
            <Panel id="modules" title="What you study">
              <div className="grid gap-5 sm:grid-cols-2">
                {details.modules.map((block) => (
                  <div key={block.year}>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-primary-dark">
                      <GraduationCap size={16} />
                      {block.year}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-border px-4 py-3 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Panel>

            {/* ---- fees ---- */}
            <Panel id="fees" title="Fees and funding">
              <dl className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
                {details.fees.map((fee) => (
                  <div key={fee.label} className="bg-white p-5">
                    <dt className="text-xs uppercase tracking-wide text-body/70">
                      {fee.label}
                    </dt>
                    <dd className="mt-1.5 text-base font-bold text-dark">
                      {fee.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Panel>

            {/* ---- careers ---- */}
            <Panel id="careers" title="After you graduate">
              <div className="flex flex-wrap gap-2">
                {details.careers.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm"
                  >
                    <Briefcase size={14} className="text-primary" />
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-surface p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
                  <TrendingUp size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-body/70">
                    Typical starting salary
                  </p>
                  <p className="text-sm font-bold text-dark">
                    {details.salary}
                  </p>
                </div>
              </div>
            </Panel>
          </div>

          {/* ---- sticky panel ---- */}
          <aside>
            <div className="lg:sticky lg:top-36">
              <ApplyPanel course={course} />
            </div>
          </aside>
        </div>
      </div>

      {/* ================= related ================= */}
      {related.length > 0 && (
        <section className="bg-white px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Students who looked at this also compared
              </h2>
              <Link href="/courses" className="btn btn-outline">
                Back to course finder
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/courses/${item.id}`}
                  className="group rounded-2xl border border-border p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_44px_-30px_rgba(15,23,42,0.5)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-lg">
                      {item.flag}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-dark">
                        {item.university}
                      </p>
                      <p className="truncate text-xs">{item.country}</p>
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug group-hover:text-primary-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-bold text-dark">
                    {item.tuitionLabel}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ---------------- small pieces ---------------- */

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/85">
      {children}
    </span>
  );
}

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="bg-white p-5">
      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-body/70">
        <Icon size={12} />
        {label}
      </p>
      <p className="mt-1.5 text-sm font-bold text-dark">{value}</p>
    </div>
  );
}

function Panel({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-36 rounded-3xl border border-border bg-white p-6 lg:p-8"
    >
      <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function MatchRing({ value }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="6"
        />
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(circumference * value) / 100} ${circumference}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
        {value}
      </span>
    </div>
  );
}