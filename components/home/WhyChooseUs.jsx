"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserRound, Gauge, BadgeCheck, Globe2 } from "lucide-react";

const reasons = [
  {
    icon: UserRound,
    title: "Personalised counselling",
    desc: "One-on-one sessions that start from your marks and your budget, not from a list of universities we are pushing.",
  },
  {
    icon: Gauge,
    title: "Fast and transparent process",
    desc: "Clear timelines, one counsellor throughout, and every cost written down before you commit to anything.",
  },
  {
    icon: BadgeCheck,
    title: "96% visa success rate",
    desc: "Financial documents prepared the way embassies expect, plus mock interviews with the questions actually asked.",
  },
  {
    icon: Globe2,
    title: "16 countries represented",
    desc: "From the UK and Canada to Finland and Malta, with partner universities in each one.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        {/* ---------------- top heading ---------------- */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Why choose us
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Some reasons students trust Riz Migration
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            We are not just a consultancy. We are the people who sit with your
            file from the first phone call to the day you land.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* ---------------- left: reasons ---------------- */}
          <ul className="space-y-8">
            {reasons.map(({ icon: Icon, title, desc }, index) => (
              <li
                key={title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`flex gap-5 transition-all duration-700 ease-out ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border text-primary">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </li>
            ))}

            <li className="pt-2">
              <Link href="/about" className="btn btn-primary">
                How we actually work
              </Link>
            </li>
          </ul>

          {/* ---------------- right: arch collage ---------------- */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative mx-auto w-full max-w-[440px] pb-16 pl-12 pt-10 sm:pb-10">
              {/* পেছনে খালি আউটলাইন আর্চ, একটু সরিয়ে বসানো */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-0 h-[92%] w-[76%] rounded-b-[40px] rounded-t-full border-2 border-dashed border-primary/35"
              />

              {/* ডট টেক্সচার */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-24 left-0 h-28 w-28 opacity-45"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />

              {/* মূল আর্চ ছবি */}
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-b-[40px] rounded-t-full">
                <Image
                  src="/why/students.webp"
                  alt="Two students arriving at the airport"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent"
                />
              </figure>

              {/* কোণায় গোল ছবি */}
              <figure className="absolute right-0 top-24 h-28 w-28 overflow-hidden rounded-full ring-8 ring-white sm:h-32 sm:w-32">
                <Image
                  src="/why/departure.webp"
                  alt="A student leaving for university abroad"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </figure>

              {/* নিচে বাঁয়ে চৌকো ছবি */}
              <figure className="absolute bottom-6 left-0 h-40 w-40 overflow-hidden rounded-[32px] ring-8 ring-white sm:bottom-0">
                <Image
                  src="/why/students.webp"
                  alt="A counsellor going through options with a student"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </figure>

              {/* ভাসমান স্ট্যাট কার্ড */}
              <div className="absolute bottom-0 right-0 w-[190px] rounded-[24px] bg-primary p-5 shadow-[0_28px_56px_-24px_rgba(15,148,136,0.9)] sm:bottom-6">
                <p className="text-2xl font-bold leading-none text-white">
                  2,400+
                </p>
                <p className="mt-1.5 text-sm font-medium text-white/85">
                  students placed
                </p>

                <div className="relative mt-3 h-9 w-[100px]">
                  <Image
                    src="/why/counselling.webp"
                    alt="Students placed by Riz Migration"
                    fill
                    sizes="100px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* সেকশনটা স্ক্রিনে ঢুকলে একবার true হয়, তারপর আর বদলায় না */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}