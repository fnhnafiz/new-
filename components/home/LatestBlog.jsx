"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const posts = [
  {
    slug: "study-gap-explanation-letter",
    title: "How to explain a two year study gap without losing the offer",
    category: "Admissions",
    date: "12 August 2026",
    readTime: "6 min read",
    excerpt:
      "Admissions officers are not looking for a perfect record. They are looking for an account that adds up. Here is the structure that works, and the three explanations that get files rejected.",
    src: "/blog/1.webp",
  },
  {
    slug: "uk-january-intake-deadlines",
    title: "January intake in the UK: the real deadlines, not the listed ones",
    category: "Deadlines",
    date: "4 August 2026",
    readTime: "5 min read",
    excerpt:
      "Universities publish one date. CAS processing, visa appointments and financial hold periods quietly move it forward by six weeks. Work backwards from these dates instead.",
    src: "/blog/2.webp",
  },
  {
    slug: "bank-statement-visa-refusal",
    title: "Why bank statements cause more refusals than low grades",
    category: "Visa",
    date: "28 July 2026",
    readTime: "7 min read",
    excerpt:
      "The amount is rarely the problem. It is the age of the account, the source of the deposits and whose name sits on the paperwork. Fix these before you book an appointment.",
    src: "/blog/3.webp",
  },
  {
    slug: "germany-no-tuition-catch",
    title: "Germany charges no tuition. Here is what it does cost you",
    category: "Destinations",
    date: "19 July 2026",
    readTime: "8 min read",
    excerpt:
      "The blocked account, the semester contribution, the language requirement that appears in year two. None of it is hidden, but nobody puts it on the brochure either.",
    src: "/blog/4.webp",
  },
  {
    slug: "sop-opening-lines",
    title: "The opening line that quietly ruins most statements of purpose",
    category: "SOP",
    date: "9 July 2026",
    readTime: "4 min read",
    excerpt:
      "If your first sentence mentions childhood passion, an admissions officer has read it four hundred times this week. Open with the specific thing you built or fixed instead.",
    src: "/blog/5.webp",
  },
];

export default function LatestBlog() {
  return (
    <section className=" py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            From the blog
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            The things agencies usually let you find out the hard way
          </h2>
        </div>

        <BlogCarousel posts={posts} />

        <div className="mt-16 text-center">
          <Link href="/blog" className="btn btn-outline">
            Read all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

/* স্ক্রিনের প্রস্থ অনুযায়ী পাশের ছবি কতটা সরবে */
function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return (
    minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth)
  );
}

function BlogCarousel({ posts, autoplay = true }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const containerRef = useRef(null);
  const reduced = useReducedMotion();

  const count = posts.length;
  const active = useMemo(() => posts[activeIndex], [posts, activeIndex]);

  useEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // activeIndex বদলালেই টাইমার রিসেট, তাই ম্যানুয়ালি ঘোরালেও অটোপ্লে চলতে থাকে
  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(
      () => setActiveIndex((prev) => (prev + 1) % count),
      6000,
    );
    return () => clearTimeout(timer);
  }, [autoplay, activeIndex, count]);

  const next = useCallback(
    () => setActiveIndex((prev) => (prev + 1) % count),
    [count],
  );
  const prev = useCallback(
    () => setActiveIndex((prev) => (prev - 1 + count) % count),
    [count],
  );

  const imageStyle = (index) => {
    const gap = calculateGap(containerWidth);
    const lift = gap * 0.8;
    const transition = "all 0.8s cubic-bezier(.4,2,.3,1)";

    if (index === activeIndex) {
      return {
        zIndex: 3,
        opacity: 1,
        transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)",
        transition,
      };
    }

    if ((activeIndex - 1 + count) % count === index) {
      return {
        zIndex: 2,
        opacity: 1,
        transform: `translateX(-${gap}px) translateY(-${lift}px) scale(0.85) rotateY(15deg)`,
        transition,
      };
    }

    if ((activeIndex + 1) % count === index) {
      return {
        zIndex: 2,
        opacity: 1,
        transform: `translateX(${gap}px) translateY(-${lift}px) scale(0.85) rotateY(-15deg)`,
        transition,
      };
    }

    return { zIndex: 1, opacity: 0, transition };
  };

  return (
    <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
      {/* ---------- stacked images ---------- */}
      <div
        ref={containerRef}
        className="relative h-80 sm:h-96"
        style={{ perspective: "1000px" }}
      >
        {posts.map((post, index) => (
          <img
            key={post.slug}
            src={post.src}
            alt=""
            aria-hidden={index !== activeIndex}
            style={imageStyle(index)}
            className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-[0_24px_50px_-24px_rgba(15,23,42,0.5)]"
          />
        ))}
      </div>

      {/* ---------- content ---------- */}
      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-primary-light px-3 py-1 font-medium text-primary-dark">
                {active.category}
              </span>
              <span>{active.date}</span>
              <span aria-hidden="true">·</span>
              <span>{active.readTime}</span>
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-tight lg:text-3xl">
              {active.title}
            </h3>

            <p className="mt-5 text-base leading-relaxed">
              {reduced
                ? active.excerpt
                : active.excerpt.split(" ").map((word, i) => (
                    <motion.span
                      key={`${activeIndex}-${i}`}
                      initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                        delay: 0.02 * i,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
            </p>

            <Link
              href={`/blog/${active.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark"
            >
              Read article
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-4">
          <ArrowButton onClick={prev} label="Previous post">
            <ArrowLeft size={18} />
          </ArrowButton>
          <ArrowButton onClick={next} label="Next post">
            <ArrowRight size={18} />
          </ArrowButton>

          <span className="ml-2 text-sm tabular-nums">
            {activeIndex + 1} of {count}
          </span>
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-white transition-colors hover:bg-primary"
    >
      {children}
    </button>
  );
}
