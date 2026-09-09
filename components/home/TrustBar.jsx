"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 1200,
    suffix: "+",
    label: "Partner Universities",
    desc: "Course lists and entry requirements we keep updated, so you are never applying on a guess.",
  },
  {
    value: 96,
    suffix: "%",
    label: "Visa Success Rate",
    desc: "On applications we prepare end to end. And we tell you plainly when a profile is not ready yet.",
  },
  {
    value: 14,
    suffix: "",
    label: "Study Destinations",
    desc: "From the UK and Canada to Finland and Malta, matched to your budget rather than the brochure.",
  },
];

export default function TrustBar() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // motion কমানো থাকলে অ্যানিমেশন ছাড়াই ফাইনাল সংখ্যা দেখাবে
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect(); // একবারই চলবে
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className=" pb-8 lg:pb-16">
      <div className="wrapper">
        <h2 className="text-center text-[28px] font-bold lg:text-5xl">
          Our core strengths
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3 lg:mt-16 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary bg-primary px-6 py-10 text-center"
            >
              <p className="text-[38px] font-bold leading-none tabular-nums text-white lg:text-[44px]">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  started={started}
                />
              </p>
              <h3 className="mt-4 text-[16px] font-semibold text-white">
                {stat.label}
              </h3>
              <p className="mx-auto mt-3 max-w-[300px] text-[14px] leading-relaxed text-white/85">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix, started, duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // শেষের দিকে ধীরে থামে
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
}
