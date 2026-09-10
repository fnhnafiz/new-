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
  ArrowUpRight,
} from "lucide-react";

import "swiper/css";

const items = [
  {
    icon: GraduationCap,
    title: "Student Visa",
    desc: "We build the file the visa officer expects: funds, intent, and a course that matches your background.",
    href: "/services/student-visa",
  },
  {
    icon: ClipboardCheck,
    title: "Admission Support",
    desc: "A shortlist you can realistically get into, then the application itself from form to offer letter.",
    href: "/services/admission-support",
  },
  {
    icon: FolderCheck,
    title: "Documentation",
    desc: "Bank statements, translations, attestation and affidavits, checked before they reach the embassy.",
    href: "/services/documentation",
  },
  {
    icon: MessageSquareQuote,
    title: "SOP & Interview Prep",
    desc: "Your statement rewritten for the university you are targeting, plus mock interviews with real questions.",
    href: "/services/sop-interview",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    desc: "Skilled worker and post-study routes, including what your degree is actually worth in that country.",
    href: "/services/work-visa",
  },
  {
    icon: PlaneLanding,
    title: "Post-Landing Support",
    desc: "Airport pickup, accommodation, bank account and SIM, sorted before you board the plane.",
    href: "/services/post-landing",
  },
];

export default function Services() {
  return (
    <section className="overflow-hidden  py-20 lg:py-28">
      <div className="wrapper">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Everything between your marksheet and your boarding pass
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Pick the part you need help with, or hand us the whole thing. You
            will always know which stage your file is sitting at.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.08}
          loop
          grabCursor
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.7 },
            1024: { slidesPerView: 2.4 },
            1440: { slidesPerView: 3 },
          }}
          className="mt-14 !overflow-visible lg:mt-16"
        >
          {items.map(({ icon: Icon, title, desc, href }, index) => (
            <SwiperSlide key={title} className="h-auto">
              <ServiceCard
                Icon={Icon}
                index={index + 1}
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

/*
  [.swiper-slide-active_&] দিয়ে শুধু সামনের কার্ডটাকে টার্গেট করা হচ্ছে —
  autoplay চলার সাথে সাথে হাইলাইট এক কার্ড থেকে আরেকটায় সরে যায়
*/
function ServiceCard({ Icon, index, title, desc, href }) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-white p-9 transition-colors duration-500 [.swiper-slide-active_&]:border-primary [.swiper-slide-active_&]:bg-primary lg:min-h-[460px] lg:p-10"
    >
      {/* কোণায় বড় ক্রমিক সংখ্যা */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-6 text-[110px] font-bold leading-none text-dark/[0.05] transition-colors duration-500 [.swiper-slide-active_&]:text-white/20"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary-dark transition-colors duration-500 [.swiper-slide-active_&]:bg-white">
          <Icon size={28} strokeWidth={1.6} />
        </span>

        <h3 className="mt-8 text-2xl font-bold leading-snug transition-colors duration-500 [.swiper-slide-active_&]:text-white lg:text-[28px]">
          {title}
        </h3>

        <p className="mt-4 text-[15px] leading-relaxed transition-colors duration-500 [.swiper-slide-active_&]:text-white/85">
          {desc}
        </p>
      </div>

      <div className="relative mt-10 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-colors duration-500 [.swiper-slide-active_&]:bg-white [.swiper-slide-active_&]:text-primary-dark">
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
        <span className="text-[15px] font-medium text-primary-dark transition-colors duration-500 [.swiper-slide-active_&]:text-white">
          Learn more
        </span>
      </div>
    </Link>
  );
}