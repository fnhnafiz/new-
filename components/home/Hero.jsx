import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Skyline />

      <div className="wrapper relative z-10 grid items-center gap-14 pb-32 pt-14 lg:grid-cols-[1fr_680px] lg:gap-10 lg:pb-44 lg:pt-24">
        {/* ================= left ================= */}
        <div className="max-w-[680px]">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-9 bg-white/60" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-[12px]">
              Honest guidance. Better outcomes.
            </p>
          </div>

          <h1 className="mt-7 text-[42px] font-bold leading-[1.07] tracking-tight text-white sm:text-[56px] lg:text-[74px]">
            <span className="block">Your degree</span>
            <span className="block">abroad starts with</span>
            <span className="block text-white/55">an honest answer.</span>
          </h1>

          <p className="mt-8 max-w-[500px] text-[17px] leading-[1.85] text-white/75">
            Check where your profile really stands, find courses that match your
            grades and budget, and get your SOP reviewed before you pay anyone a
            single fee.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/counseling"
              className="group flex items-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-[15px] font-semibold text-dark transition-colors hover:bg-primary-light"
            >
              Book free counseling
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={17} />
              </span>
            </Link>

            <Link
              href="/visa-checker"
              className="rounded-full border border-white/40 px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Apply now
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="h-11 w-1 shrink-0 rounded-full bg-white/30"
            />
            <div>
              <p className="text-[14px] text-white/65">
                Trusted by 2,500+ students
              </p>
              <p className="text-[14px] font-semibold text-white">
                across 16 destination countries
              </p>
            </div>
          </div>
        </div>

        {/* ================= right ================= */}
        <div className="relative">
          {/* পেছনের বৃত্তরেখা */}
          <Orbits />

          {/* ছবির পেছনে অর্ধেক ঢাকা পিল */}
          <span className="absolute right-2 top-[12%] z-0 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
            Your next chapter
          </span>

          {/* object-contain, তাই ছবির কোনো অংশ কাটা যায় না */}
          <Image
            src="/hero-banner.png"
            alt="Three students on their way to study abroad"
            width={920}
            height={980}
            priority
            sizes="(max-width: 1024px) 90vw, 680px"
            className="relative z-10 mx-auto h-[440px] w-auto object-contain object-bottom sm:h-[540px] lg:h-[660px]"
          />

          {/* ছবির উপরে ভাসমান কার্ড */}
          <div className="absolute bottom-8 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 backdrop-blur-md sm:left-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
              <ArrowUpRight size={18} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Profile check
              </p>
              <p className="text-[14px] font-semibold text-white">
                Know your real options
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* নিচের বাঁকানো কাটা */}
      <svg
        className="absolute inset-x-0 bottom-0 z-20 h-[60px] w-full lg:h-[110px]"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 Q720 110 1440 0 L1440 110 L0 110 Z" fill="#f9fafb" />
      </svg>
    </section>
  );
}

/* ছবির পেছনে হালকা বৃত্তরেখা আর বিন্দু */
function Orbits() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 text-white/20"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="300" cy="300" r="286" strokeWidth="1" />
      <circle cx="300" cy="300" r="228" strokeWidth="1" opacity="0.7" />
      <circle cx="300" cy="300" r="160" strokeWidth="1" opacity="0.45" />

      <circle cx="300" cy="14" r="6" fill="currentColor" stroke="none" />
      <circle cx="528" cy="228" r="4" fill="currentColor" stroke="none" />
      <circle cx="86" cy="380" r="5" fill="currentColor" stroke="none" />
      <circle cx="440" cy="520" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Skyline() {
  return (
    <svg
      className="pointer-events-none absolute bottom-16 right-0 h-[60%] w-[85%] text-white/10 lg:bottom-24 lg:w-[58%]"
      viewBox="0 0 900 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      <path d="M20 320V150h150v170" />
      <path d="M20 150l75-42 75 42" />
      {[45, 75, 105, 135].map((x) => (
        <path key={x} d={`M${x} 320v-70a10 10 0 0120 0v70`} />
      ))}

      <path d="M200 320V90h44v230M222 90V52M200 118h44" />
      <path d="M210 320v-60a12 12 0 0124 0v60" />

      <path d="M300 320V170h230v150" />
      <path d="M415 170V96" />
      <path d="M352 96a63 55 0 01126 0z" />
      <path d="M415 96V56a8 8 0 0116 0" />
      <path d="M340 320v-84a14 14 0 0128 0v84M400 320v-84a15 15 0 0130 0v84M462 320v-84a14 14 0 0128 0v84" />

      <path d="M560 320V140h180v180" />
      <path d="M560 140l90-46 90 46" />
      <path d="M590 320v-72a16 16 0 0132 0v72M678 320v-72a16 16 0 0132 0v72" />

      <path d="M770 320V120h60v200M800 120V78M770 152h60" />
      <path d="M860 320V180h30v140" />
    </svg>
  );
}