/* app/courses/page.js */

import CourseFinder from "@/components/courses/CourseFinder";

export const metadata = {
  title: "Course Finder",
  description:
    "Filter thousands of courses by country, degree, subject, tuition, IELTS and intake. Every listing shows the entry bar before you apply.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-primary px-5 pb-14 pt-12 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl text-center flex flex-col justify-center items-center">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
            Find a course you can actually get into
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            Filter by your marks, your budget and your intake. Every listing
            shows the entry bar you have to clear.
          </p>
        </div>
      </section>

      <CourseFinder />
    </>
  );
}
