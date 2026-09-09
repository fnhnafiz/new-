import Link from "next/link";
import { Search, Check, Bell, Menu } from "lucide-react";

const points = [
  "12,000+ courses with entry bars shown up front",
  "1,200+ partner universities",
  "16 countries, one comparison table",
];

export default function CourseFinderBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-black px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px] lg:gap-8">
            {/* ---------------- left ---------------- */}
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Explore. Apply. Start studying.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Filter by your marks, your budget and the intake you are aiming
                for. Every course tells you the bar you have to clear, so you
                never apply on a guess.
              </p>

              <ul className="mt-7 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25 text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>

              <Link href="/courses" className="btn btn-white mt-9">
                Search courses now
                <Search size={16} />
              </Link>
            </div>

            {/* ---------------- right: phone ---------------- */}
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ছবির বদলে পুরো ফোনটাই div দিয়ে আঁকা — কোনো asset লাগে না */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] lg:mx-0">
      {/* ফোনের বডি */}
      <div className="rounded-[42px] bg-dark p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]">
        <div className="relative h-[460px] overflow-hidden rounded-[34px] bg-white">
          {/* নচ */}
          <span className="absolute left-1/2 top-2.5 h-5 w-20 -translate-x-1/2 rounded-full bg-dark" />

          <div className="px-4 pt-11">
            <div className="flex items-center justify-between text-dark">
              <Menu size={16} />
              <span className="text-[13px] font-semibold">
                Riz <span className="text-primary">Search</span>
              </span>
              <Bell size={16} />
            </div>

            <div className="mt-6 rounded-2xl bg-primary-light p-4">
              <p className="text-[15px] font-semibold leading-snug text-dark">
                Explore courses that match your{" "}
                <span className="text-primary-dark">career plans</span>
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {["Data Science", "Business Analytics", "Public Health"].map(
                (course) => (
                  <div
                    key={course}
                    className="h-9 rounded-lg border border-border px-3 text-[12px] leading-9 text-body"
                  >
                    {course}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ফোনের কোণে ভেসে থাকা ফিল্টার কার্ড */}
      <div className="absolute -bottom-6 -left-6 w-[220px] rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.4)]">
        <div className="space-y-2">
          {[
            "What do you want to study?",
            "Where do you want to study?",
            "What level are you applying for?",
          ].map((question) => (
            <div
              key={question}
              className="rounded-lg bg-surface px-3 py-2.5 text-[11px] text-body"
            >
              {question}
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 text-[12px] font-semibold text-white">
          Search
          <Search size={12} />
        </div>
      </div>
    </div>
  );
}