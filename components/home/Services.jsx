"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  FolderCheck,
  MessageSquareQuote,
  PlaneLanding,
} from "lucide-react";

import "swiper/css";

const items = [
  {
    icon: GraduationCap,
    stamp: "F-1 / Tier 4",
    title: "Student Visa",
    desc: "We build the file the visa officer expects: funds, intent, and a course that matches your background.",
    href: "/services/student-visa",
  },
  {
    icon: ClipboardCheck,
    stamp: "Offer letter",
    title: "Admission Support",
    desc: "A shortlist you can realistically get into, then the application itself from form to offer letter.",
    href: "/services/admission-support",
  },
  {
    icon: FolderCheck,
    stamp: "Attested",
    title: "Documentation",
    desc: "Bank statements, translations, attestation and affidavits, checked before they reach the embassy.",
    href: "/services/documentation",
  },
  {
    icon: MessageSquareQuote,
    stamp: "Reviewed",
    title: "SOP & Interview Prep",
    desc: "Your statement rewritten for the university you are targeting, plus mock interviews with real questions.",
    href: "/services/sop-interview",
  },
  {
    icon: Briefcase,
    stamp: "Skilled route",
    title: "Work Visa",
    desc: "Skilled worker and post-study routes, including what your degree is actually worth in that country.",
    href: "/services/work-visa",
  },
  {
    icon: PlaneLanding,
    stamp: "On arrival",
    title: "Post-Landing Support",
    desc: "Airport pickup, accommodation, bank account and SIM, sorted before you board the plane.",
    href: "/services/post-landing",
  },
];

export default function Services() {
  return (
    <section className="overflow-hidden  py-16 lg:py-24">
      <div className="wrapper">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-[28px] font-bold lg:text-5xl">
            Everything between your marksheet and your boarding pass
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed">
            Pick the part you need help with, or hand us the whole thing. You
            will always know which stage your file is sitting at.
          </p>
        </div>

        {/* ---------- slider ---------- */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          grabCursor
          autoplay={{
            delay: 3200,
            disableOnInteraction: false, // ড্রাগ করার পরেও অটো চলতে থাকবে
            pauseOnMouseEnter: true, // পড়ার সময় থেমে থাকবে
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="mt-12 !overflow-visible lg:mt-16"
        >
          {items.map(({ icon: Icon, stamp, title, desc, href }) => (
            <SwiperSlide key={title} className="h-auto">
              <ServiceCard
                Icon={Icon}
                stamp={stamp}
                title={title}
                desc={desc}
                href={href}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* বোর্ডিং পাস / ভিসা স্ট্যাম্পের আদলে কার্ড — ছেঁড়া কাগজের খাঁজসহ */
function ServiceCard({ Icon, stamp, title, desc, href }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-2xl bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] "
    >
      <div className="flex flex-1 flex-col p-7 pb-6">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon size={22} />
          </span>

          {/* কোণার স্ট্যাম্প — কাত করে বসানো, পাসপোর্টের সিলের মতো */}
          <span className="-rotate-6 rounded-md border border-dashed border-primary/45 px-2.5 py-1 text-[11px] font-semibold text-primary/75">
            {stamp}
          </span>
        </div>

        <h3 className="mt-6 text-[19px] font-semibold">{title}</h3>
        <p className="mt-2.5 flex-1 text-[14px] leading-relaxed">{desc}</p>
      </div>

      {/* ছেঁড়ার রেখা: দুই পাশে খাঁজ, মাঝে ড্যাশ */}
      <div className="relative">
        <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-surface" />
        <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-surface" />
        <span className="mx-6 block border-t border-dashed border-border" />
      </div>

      <div className="flex items-center justify-between px-7 pb-6 pt-5">
        <span className="text-[14px] font-medium text-primary-dark">
          Learn more
        </span>
        <span className="text-[13px] text-body/70">Riz Migration</span>
      </div>
    </Link>
  );
}