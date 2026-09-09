import Link from "next/link";
import { ArrowUpRight, ShieldCheck, FileText, Search } from "lucide-react";

export default function AiTools() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">
      {/* হালকা ডট টেক্সচার, কালোটা যেন ফাঁকা না লাগে */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(20,184,166,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Find out where you stand before you pay anyone
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Three tools, no fee, no consultation booking first. Run them
            tonight, and bring the results to us when you are ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          <ToolCard
            icon={ShieldCheck}
            title="Visa Possibility Checker"
            desc="Answer questions about your grades, funds and English score. You get a country-by-country read on your chances, plus the two or three things holding you back."
            cta="Check my chances"
            href="/visa-checker"
            preview={<ScorePreview />}
          />
          <ToolCard
            icon={FileText}
            title="SOP Review"
            desc="Upload your statement and pick the university you are targeting. It comes back marked up, with a rewritten version that answers what that admissions office actually asks for."
            cta="Review my SOP"
            href="/sop-review"
            preview={<SopPreview />}
          />
          <ToolCard
            icon={Search}
            title="Course Finder"
            desc="Filter by your marks, budget and intake instead of scrolling university websites one by one. Every course shows the entry bar you have to clear."
            cta="Find my course"
            href="/courses"
            preview={<CoursePreview />}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- card shell ---------------- */

function ToolCard({ icon: Icon, title, desc, cta, href, preview }) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-transform duration-300 hover:-translate-y-1"
    >
      {/* টুলটা আসলে কী দেখাবে, তার ছোট নমুনা */}
      <div className="border-b border-border bg-primary-light px-7 pb-7 pt-8">
        {preview}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Icon size={19} />
          </span>
          <span className="rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary-dark">
            Free
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{desc}</p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-dark">
          {cta}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- previews ---------------- */

function ScorePreview() {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const filled = circumference * 0.82;

  return (
    <div className="flex items-center gap-6">
      <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference}`}
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--color-dark)"
          fontSize="26"
          fontWeight="700"
          transform="rotate(90 60 60)"
        >
          82%
        </text>
      </svg>

      <div className="min-w-0 flex-1 space-y-2.5">
        {[
          { label: "Academics", width: "88%" },
          { label: "Finances", width: "74%" },
          { label: "English", width: "61%" },
        ].map((factor) => (
          <div key={factor.label}>
            <p className="mb-1.5 text-xs font-medium text-primary-dark">
              {factor.label}
            </p>
            <div className="h-1.5 rounded-full bg-white">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: factor.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SopPreview() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border bg-white p-3.5">
        <p className="mb-2 text-xs">Your line</p>
        <p className="text-sm leading-relaxed text-body/70 line-through decoration-red-400">
          Since childhood I have always had a passion for computers.
        </p>
      </div>

      <div className="rounded-xl border border-primary/40 bg-primary p-3.5">
        <p className="mb-2 text-xs font-medium text-white/75">Rewritten</p>
        <p className="text-sm leading-relaxed text-white">
          I spent my final year building a Bangla OCR model that cut manual data
          entry at my college by half.
        </p>
      </div>
    </div>
  );
}

function CoursePreview() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {["Canada", "Master's", "IELTS 6.5", "Under $20k"].map((chip) => (
          <span
            key={chip}
            className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-primary-dark"
          >
            {chip}
          </span>
        ))}
      </div>

      {[
        { name: "MSc Data Science", uni: "University of Alberta", match: 94 },
        { name: "MEng Software", uni: "Concordia University", match: 87 },
      ].map((course) => (
        <div
          key={course.name}
          className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3.5 py-3"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-dark">
              {course.name}
            </p>
            <p className="truncate text-xs">{course.uni}</p>
          </div>
          <span className="shrink-0 text-sm font-semibold text-primary-dark">
            {course.match}%
          </span>
        </div>
      ))}
    </div>
  );
}