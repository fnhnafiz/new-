import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";

const board = [
  {
    destination: "United Kingdom",
    flag: "🇬🇧",
    intake: "Sep 2026",
    status: "Boarding",
    live: true,
  },
  { destination: "Canada", flag: "🇨🇦", intake: "Jan 2027", status: "On time" },
  {
    destination: "Germany",
    flag: "🇩🇪",
    intake: "Oct 2026",
    status: "Filling up",
  },
  {
    destination: "Australia",
    flag: "🇦🇺",
    intake: "Feb 2027",
    status: "On time",
  },
  {
    destination: "Ireland",
    flag: "🇮🇪",
    intake: "Sep 2026",
    status: "Final calls",
  },
];

export default function FinalCta() {
  return (
    <section className=" py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-primary px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          {/* তির্যক ডোরা, turquoise টা যেন ফ্ল্যাট না লাগে */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 22px)",
            }}
          />

          {/* কোণায় নরম আলো */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/25 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* ---------------- left ---------------- */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium text-white">
                <Plane size={15} />
                Next intakes are open
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[52px]">
                Stop guessing where you stand
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
                One call, your real transcripts, and an honest answer about
                which of these departures you can actually make. No fee, and no
                obligation afterwards.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/counseling" className="btn btn-white">
                  Book free counselling
                  <ArrowRight size={17} />
                </Link>
                <Link href="/visa-checker" className="btn btn-white-outline">
                  Apply Now
                </Link>
              </div>

              <p className="mt-7 text-sm text-white/75">
                2,400+ students placed · 96% visa success rate
              </p>
            </div>

            {/* ---------------- right: departure board ---------------- */}
            <div className="overflow-hidden rounded-3xl bg-dark p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Departures
                </p>
                <Plane size={16} className="text-primary" />
              </div>

              <ul className="mt-2 divide-y divide-white/[0.07]">
                {board.map((row) => (
                  <li
                    key={row.destination}
                    className="flex items-center gap-3 py-3.5"
                  >
                    <span aria-hidden="true" className="text-lg">
                      {row.flag}
                    </span>

                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-white">
                      {row.destination}
                    </span>

                    <span className="shrink-0 text-sm tabular-nums text-white/55">
                      {row.intake}
                    </span>

                    <span className="flex w-[92px] shrink-0 items-center justify-end gap-1.5 text-right text-xs font-semibold text-primary">
                      {row.live && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                        </span>
                      )}
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-t border-white/10 pt-4 text-xs text-white/45">
                Application windows close roughly six weeks before each intake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
