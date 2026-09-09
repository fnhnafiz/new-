"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight, GraduationCap } from "lucide-react";

import "swiper/css";

const featured = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    href: "/destinations/united-kingdom",
    blurb:
      "One-year master's, a two-year graduate route after you finish, and the widest scholarship pool of any destination we work with.",
    universities: 162,
    stats: [
      { label: "Tuition from", value: "£11,000" },
      { label: "Main intakes", value: "Sep, Jan" },
      { label: "Post-study stay", value: "2 years" },
    ],
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    href: "/destinations/canada",
    blurb:
      "The clearest path from a study permit to permanent residence, with a work permit that can run as long as your degree did.",
    universities: 96,
    stats: [
      { label: "Tuition from", value: "CA$14,000" },
      { label: "Main intakes", value: "Sep, Jan, May" },
      { label: "Post-study stay", value: "Up to 3 years" },
    ],
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    href: "/destinations/australia",
    blurb:
      "Work rights from day one of your course, and regional campuses that add extra points toward a skilled visa later.",
    universities: 74,
    stats: [
      { label: "Tuition from", value: "AU$20,000" },
      { label: "Main intakes", value: "Feb, Jul" },
      { label: "Post-study stay", value: "2 to 4 years" },
    ],
  },
  {
    flag: "🇺🇸",
    name: "United States",
    href: "/destinations/united-states",
    blurb:
      "The largest choice of programmes anywhere, plus OPT and a three-year STEM extension if your subject qualifies.",
    universities: 148,
    stats: [
      { label: "Tuition from", value: "$18,000" },
      { label: "Main intakes", value: "Aug, Jan" },
      { label: "Post-study stay", value: "1 to 3 years" },
    ],
  },
];

const countries = [
  { flag: "🇩🇪", name: "Germany", universities: 58, note: "No tuition at public unis", href: "/destinations/germany" },
  { flag: "🇮🇪", name: "Ireland", universities: 34, note: "Tech and pharma hubs", href: "/destinations/ireland" },
  { flag: "🇫🇮", name: "Finland", universities: 27, note: "English-taught degrees", href: "/destinations/finland" },
  { flag: "🇲🇹", name: "Malta", universities: 12, note: "Lower cost of living", href: "/destinations/malta" },
  { flag: "🇳🇱", name: "Netherlands", universities: 41, note: "Orientation year visa", href: "/destinations/netherlands" },
  { flag: "🇸🇪", name: "Sweden", universities: 29, note: "Strong research funding", href: "/destinations/sweden" },
  { flag: "🇩🇰", name: "Denmark", universities: 22, note: "Paid internships built in", href: "/destinations/denmark" },
  { flag: "🇵🇱", name: "Poland", universities: 31, note: "Low tuition in the EU", href: "/destinations/poland" },
  { flag: "🇭🇺", name: "Hungary", universities: 24, note: "Stipendium scholarships", href: "/destinations/hungary" },
  { flag: "🇨🇾", name: "Cyprus", universities: 14, note: "Easier entry requirements", href: "/destinations/cyprus" },
  { flag: "🇳🇿", name: "New Zealand", universities: 18, note: "Partner work rights", href: "/destinations/new-zealand" },
  { flag: "🇯🇵", name: "Japan", universities: 26, note: "Scholarships for Asia", href: "/destinations/japan" },
];

export default function Destinations() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Sixteen countries. One honest shortlist.
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Tuition, intake months and post-study work rules, side by side. Pick
            the country that fits your budget instead of the one in the
            brochure.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* ---------- featured slider — always first, full width ---------- */}
          <div className="order-first col-span-2 sm:col-span-2 lg:row-span-2">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              grabCursor
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="h-full rounded-3xl"
            >
              {featured.map((country) => (
                <SwiperSlide key={country.name} className="h-full">
                  <FeaturedCard {...country} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ---------- country grid — 2 cols on mobile ---------- */}
          {countries.map((country) => (
            <Link
              key={country.name}
              href={country.href}
              className="group order-last flex flex-col justify-between rounded-2xl border border-border p-4 transition-colors hover:border-primary hover:bg-primary-light sm:order-none sm:rounded-3xl sm:p-6"
            >
              <span className="text-3xl sm:text-4xl">{country.flag}</span>

              <div className="mt-4 sm:mt-8">
                <h3 className="text-sm font-semibold sm:text-lg">{country.name}</h3>
                <p className="mt-1 text-xs sm:text-sm">{country.note}</p>

                <p className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-dark sm:mt-4 sm:gap-1.5 sm:text-sm">
                  <GraduationCap size={13} />
                  {country.universities} unis
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/destinations" className="btn btn-outline">
            See all destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
function FeaturedCard({ flag, name, href, blurb, universities, stats }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[440px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-white/80 lg:p-10"
    >
      {/* কোণায় নরম আলো */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl"
      />

      {/* ওয়াটারমার্ক পতাকা */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-8 text-[200px] leading-none opacity-15 blur-[1px]"
      >
        {flag}
      </span>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]">
            {flag}
          </span>

          <span className="rounded-full border border-white/35 px-3 py-1.5 text-xs font-semibold text-white">
            Top choice
          </span>
        </div>

        <h3 className="mt-7 text-3xl font-bold text-white lg:text-4xl">
          {name}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed">{blurb}</p>
      </div>

      <div className="relative mt-10">
        {/* স্ট্যাটগুলো এখন আলাদা কাঁচের ঘরে */}
        <dl className="grid grid-cols-3 gap-2.5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-sm"
            >
              <dt className="text-[11px] leading-tight text-white/70">
                {stat.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-dark">
          Explore {universities} universities
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}