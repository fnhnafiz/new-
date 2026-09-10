/* components/Data/courseDetails.js */

import { courses } from "./courses";

/* প্রতিটা কোর্সের জন্য হাতে কনটেন্ট লেখা বাস্তবসম্মত না, তাই কোর্সের
   নিজের ডেটা থেকেই একটা ভিত্তি তৈরি হয়। নির্দিষ্ট কোর্সে আসল কনটেন্ট
   বসাতে চাইলে নিচের overrides এ id ধরে যোগ করবেন। */

const overrides = {
  "msc-data-science-alberta": {
    overview:
      "Alberta runs this degree with the university's machine learning institute, so the second year is largely supervised research rather than coursework. Graduates most often move into industry roles in Calgary and Toronto rather than continuing to a PhD.",
    careers: ["Data Scientist", "ML Engineer", "Analytics Consultant", "Research Associate"],
    salary: "CA$78,000 - CA$105,000",
  },
};

const yearOne = (subject) =>
  ({
    "Computing & IT": ["Statistical foundations", "Programming for data", "Databases and pipelines", "Machine learning I"],
    Business: ["Financial reporting", "Managerial economics", "Marketing strategy", "Business research methods"],
    Engineering: ["Engineering mathematics", "Materials and mechanics", "Thermodynamics", "Design and simulation"],
    Health: ["Epidemiology", "Health systems", "Biostatistics", "Public health policy"],
    Education: ["Learning theory", "Curriculum design", "Assessment practice", "Education research methods"],
  })[subject] ?? ["Core foundations", "Research methods", "Applied practice", "Professional skills"];

const yearTwo = (subject) =>
  ({
    "Computing & IT": ["Machine learning II", "Cloud and scale", "Ethics in computing", "Dissertation project"],
    Business: ["Operations and analytics", "Corporate strategy", "Elective track", "Capstone consultancy project"],
    Engineering: ["Control systems", "Manufacturing processes", "Industry placement", "Final year project"],
    Health: ["Global health", "Programme evaluation", "Field placement", "Dissertation"],
    Education: ["Inclusive practice", "Leadership in schools", "Placement", "Dissertation"],
  })[subject] ?? ["Advanced topics", "Elective track", "Placement", "Final project"];

export function getCourse(id) {
  return courses.find((course) => course.id === id) ?? null;
}

export function getDetails(course) {
  const custom = overrides[course.id] ?? {};

  return {
    overview:
      custom.overview ??
      `This ${course.level.toLowerCase()} programme at ${course.university} runs for ${course.duration} and is taught in English. It suits applicants who want a ${course.subject.toLowerCase()} qualification that is recognised across ${course.country} and the wider region, with a mix of taught modules and a supervised final project.`,

    highlights: custom.highlights ?? [
      `Taught in English, no ${course.country} language certificate required`,
      course.scholarship
        ? "Scholarship funding available for international applicants"
        : "Direct application route with no agent-only quota",
      `Entry accepted with IELTS ${course.ielts.toFixed(1)} overall`,
      `${course.intakes.join(" and ")} intake${course.intakes.length > 1 ? "s" : ""} each year`,
    ],

    requirements: custom.requirements ?? [
      {
        label: "Academic",
        value:
          course.level === "Master's"
            ? "A recognised bachelor's degree in a related subject, minimum 60% or CGPA 3.0"
            : "Higher Secondary Certificate or equivalent, minimum GPA 4.0",
      },
      {
        label: "English",
        value: `IELTS ${course.ielts.toFixed(1)} overall with no band below 6.0, or an accepted equivalent`,
      },
      {
        label: "Documents",
        value:
          "Transcripts, passport copy, statement of purpose, two references and a CV",
      },
      {
        label: "Finance",
        value:
          "Proof of one year tuition plus living costs, held for the period the embassy requires",
      },
    ],

    modules: custom.modules ?? [
      { year: "Year one", items: yearOne(course.subject) },
      { year: "Year two", items: yearTwo(course.subject) },
    ],

    fees: custom.fees ?? [
      { label: "Tuition per year", value: course.tuitionLabel },
      { label: "Application fee", value: course.tuitionUSD === 0 ? "None" : "Paid at submission" },
      { label: "Living costs", value: "Estimated by the university each year" },
      {
        label: "Scholarship",
        value: course.scholarship ? "Available on merit" : "Not offered on this course",
      },
    ],

    careers: custom.careers ?? [
      `${course.subject} Specialist`,
      "Analyst",
      "Project Coordinator",
      "Consultant",
    ],

    salary: custom.salary ?? "Varies by role and city",
  };
}

export function getRelated(course, limit = 3) {
  return courses
    .filter(
      (c) =>
        c.id !== course.id &&
        (c.subject === course.subject || c.country === course.country),
    )
    .slice(0, limit);
}