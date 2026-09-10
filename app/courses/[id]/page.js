import { notFound } from "next/navigation";
import { courses } from "@/components/Data/courses";
import { getCourse } from "@/components/Data/courseDetails";
import CourseDetail from "@/components/courses/CourseDetail";

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) return { title: "Course not found" };

  return {
    title: `${course.title}, ${course.university}`,
    description: `${course.level} in ${course.subject} at ${course.university}, ${course.city}. ${course.duration}, IELTS ${course.ielts.toFixed(1)}, tuition ${course.tuitionLabel}.`,
  };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = getCourse(id);

  if (!course) notFound();

  return <CourseDetail course={course} />;
}
