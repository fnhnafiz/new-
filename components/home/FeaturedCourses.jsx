import Link from "next/link";
import { Check } from "lucide-react";

const courses = [
  {
    id: "msc-data-science-alberta",
    title: "MSc Data Science",
    university: "University of Alberta",
    city: "Edmonton, Canada",
    flag: "🇨🇦",
    duration: "2 years",
    tuition: "CA$21,400",
    intake: "Sep 2026",
    ielts: "6.5",
    scholarship: true,
  },
  {
    id: "msc-business-analytics-leeds",
    title: "MSc Business Analytics",
    university: "University of Leeds",
    city: "Leeds, United Kingdom",
    flag: "🇬🇧",
    duration: "1 year",
    tuition: "£27,750",
    intake: "Sep 2026",
    ielts: "6.5",
    scholarship: true,
  },
  {
    id: "beng-mechanical-rmit",
    title: "BEng Mechanical Engineering",
    university: "RMIT University",
    city: "Melbourne, Australia",
    flag: "🇦🇺",
    duration: "4 years",
    tuition: "AU$44,600",
    intake: "Feb 2027",
    ielts: "6.0",
    scholarship: false,
  },
  {
    id: "msc-computer-science-tum",
    title: "MSc Computer Science",
    university: "Technical University of Munich",
    city: "Munich, Germany",
    flag: "🇩🇪",
    duration: "2 years",
    tuition: "No tuition fee",
    intake: "Oct 2026",
    ielts: "6.5",
    scholarship: false,
  },
  {
    id: "mph-public-health-ucd",
    title: "MPH Public Health",
    university: "University College Dublin",
    city: "Dublin, Ireland",
    flag: "🇮🇪",
    duration: "1 year",
    tuition: "€19,900",
    intake: "Sep 2026",
    ielts: "6.5",
    scholarship: true,
  },
  {
    id: "bba-international-business-tampere",
    title: "BBA International Business",
    university: "Tampere University",
    city: "Tampere, Finland",
    flag: "🇫🇮",
    duration: "3.5 years",
    tuition: "€11,000",
    intake: "Aug 2026",
    ielts: "6.0",
    scholarship: true,
  },
];

export default function FeaturedCourses() {
  return (
    <section className=" py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Courses students applied to this month
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Every listing shows the entry bar and the real yearly cost, so you
            know before you click whether it is worth your time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/courses" className="btn btn-primary">
            Browse all courses
          </Link>
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  id,
  title,
  university,
  city,
  flag,
  duration,
  tuition,
  intake,
  ielts,
  scholarship,
}) {
  const points = [
    scholarship ? "Scholarship available" : "Direct application route",
    `IELTS ${ielts} required`,
    `${duration} programme`,
    `Next intake ${intake}`,
  ];

  return (
    <Link
      href={`/courses/${id}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_4px_rgba(15,23,42,0.05)] transition-shadow "
    >
      {/* উপরের গাঢ় ব্লক, নিচে বাঁকানো কাটা */}
      <div className="relative bg-primary px-6 pb-12 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
            {flag}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {university}
            </p>
            <p className="truncate text-xs text-white/55">{city}</p>
          </div>
        </div>

        <svg
          className="absolute inset-x-0 bottom-0 h-8 w-full"
          viewBox="0 0 400 32"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 32 Q200 0 400 32 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6">
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>

        <ul className="mt-5 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="text-xs">Tuition per year</p>
            <p className="mt-1 text-xl font-bold text-dark">{tuition}</p>
          </div>

          {/* কোণায় গোল অ্যাপ্লাই ব্যাজ */}
          <span className="flex h-[76px] w-[76px] shrink-0 -rotate-6 flex-col items-center justify-center rounded-full bg-primary text-center text-[13px] font-bold leading-tight text-white transition-transform group-hover:rotate-0">
            Apply
            <span>now</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
