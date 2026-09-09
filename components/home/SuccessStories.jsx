"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I had a two year study gap and three agencies told me to forget the UK. Riz found a university that accepted the gap with an explanation letter. I started at Leeds in September.",
    image: "/testimonials/1.jpg",
    name: "Tasnim Rahman",
    role: "MSc Business Analytics, Leeds",
    flag: "🇬🇧",
  },
  {
    text: "They told me on the first call that my bank statement was too new and gave me a date to come back. No other agency would turn away a paying client like that.",
    image: "/testimonials/2.jpg",
    name: "Sakib Hossain",
    role: "MSc Data Science, Alberta",
    flag: "🇨🇦",
  },
  {
    text: "My SOP came back with half of it rewritten and honest notes on why. The Munich admission came through six weeks later, and I still had not paid tuition anywhere.",
    image: "/testimonials/3.jpg",
    name: "Nusrat Jahan",
    role: "MSc Computer Science, TUM",
    flag: "🇩🇪",
  },
  {
    text: "The mock interview was harder than the real one at the embassy. Every question they drilled me on came up, almost word for word.",
    image: "/testimonials/4.jpg",
    name: "Arif Chowdhury",
    role: "BEng Mechanical, RMIT",
    flag: "🇦🇺",
  },
  {
    text: "I came in wanting Canada and left with a Finland shortlist that cost a third of it. Same subject, better scholarship. I would never have found those universities alone.",
    image: "/testimonials/5.jpg",
    name: "Farhana Akter",
    role: "BBA International Business, Tampere",
    flag: "🇫🇮",
  },
  {
    text: "One counsellor from the first call to the airport pickup in Dublin. I never had to explain my situation twice.",
    image: "/testimonials/6.jpg",
    name: "Mahmudul Hasan",
    role: "MPH Public Health, UCD",
    flag: "🇮🇪",
  },
  {
    text: "My parents joined the counselling call and got every cost in writing that same day. That is what convinced them to let me go.",
    image: "/testimonials/7.jpg",
    name: "Ishrat Binte Karim",
    role: "MSc Public Policy, Malta",
    flag: "🇲🇹",
  },
  {
    text: "Applied in November, visa stamped in February, landed in time for the spring intake. Not one deadline was missed.",
    image: "/testimonials/8.jpg",
    name: "Rafiul Islam",
    role: "MSc Cyber Security, Dublin",
    flag: "🇮🇪",
  },
  {
    text: "I was refused a US visa in 2024. They rebuilt the whole financial file and the second attempt went through without a single extra question.",
    image: "/testimonials/9.jpg",
    name: "Sadia Noor",
    role: "MS Information Systems, USA",
    flag: "🇺🇸",
  },
  {
    text: "I applied twice on my own and got nowhere. They found the mistake in twenty minutes, it was the sponsor letter, not my grades.",
    image: "/testimonials/10.jpg",
    name: "Zarin Tasnim",
    role: "MSc Marketing, Sweden",
    flag: "🇸🇪",
  },
  {
    text: "My budget was fixed and non-negotiable. Every option they showed me was inside it, so I never had to say no to something I liked.",
    image: "/testimonials/11.jpg",
    name: "Tanvir Ahmed",
    role: "MSc Logistics, Netherlands",
    flag: "🇳🇱",
  },
  {
    text: "They kept following up with the university for six weeks while I was busy with my finals. The offer letter just arrived in my inbox one day.",
    image: "/testimonials/12.jpg",
    name: "Maliha Rahman",
    role: "MA Education, New Zealand",
    flag: "🇳🇿",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const fourthColumn = testimonials.slice(9, 12);

export default function SuccessStories() {
  const reduced = useReducedMotion();

  return (
    <section className=" py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Success stories
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Students who were told no somewhere else
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Study gaps, refused visas, tight budgets. Here is how those files
            turned into offer letters.
          </p>
        </div>

        {/* উপরে-নিচে মিলিয়ে যাওয়া mask, যাতে কার্ড হঠাৎ কেটে না যায় */}
        <div
          className="mt-14 flex justify-center gap-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
            maxHeight: "700px",
          }}
        >
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={19}
            paused={reduced}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={24}
            paused={reduced}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={21}
            paused={reduced}
            className="hidden lg:block"
          />
          <TestimonialsColumn
            testimonials={fourthColumn}
            duration={26}
            paused={reduced}
            className="hidden xl:block"
          />
        </div>

        <div className="mt-14 text-center">
          <Link href="/success-stories" className="btn btn-primary">
            Read more student stories
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsColumn({
  className = "",
  testimonials,
  duration = 20,
  paused = false,
}) {
  return (
    <div className={className}>
      <motion.div
        animate={paused ? undefined : { translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role, flag }) => (
              <figure
                key={`${index}-${name}`}
                className="w-full max-w-xs rounded-3xl border border-border bg-white p-8"
              >
                <Quote size={22} className="text-primary" />

                <blockquote className="mt-4 text-sm leading-relaxed">
                  {text}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-dark">
                      {name}
                    </p>
                    <p className="truncate text-xs">
                      {flag} {role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

/* কেউ motion কমিয়ে রাখলে অনন্ত স্ক্রল বন্ধ থাকবে */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (e) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
