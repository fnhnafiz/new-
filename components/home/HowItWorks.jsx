import Link from "next/link";
import {
  MessagesSquare,
  ListChecks,
  Send,
  PlaneTakeoff,
  ChevronRight,
  ChevronDown,
  Clock,
} from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Tell us where you stand",
    desc: "Your marks, budget, English score and the gap years if you have any. Nothing is disqualifying until we look at it together.",
    duration: "About 30 minutes",
  },
  {
    icon: ListChecks,
    title: "Get an honest shortlist",
    desc: "Courses split into safe, likely and ambitious, with the entry bar and total cost written next to each one.",
    duration: "2 to 3 days",
  },
  {
    icon: Send,
    title: "Apply and collect offers",
    desc: "We prepare the applications, chase the universities and keep you posted on which file is sitting where.",
    duration: "4 to 8 weeks",
  },
  {
    icon: PlaneTakeoff,
    title: "Visa, then departure",
    desc: "Financial documents, mock interviews, and once the stamp is in, accommodation and arrival support.",
    duration: "6 to 12 weeks",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Four steps, and you always know which one you are on
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            No file sits in a drawer waiting for a follow-up call. Here is the
            whole route, with the time each stage usually takes.
          </p>
        </div>

        {/* grid এ সব ঘর সমান উচ্চতার, gap-8 = ৩২px ফাঁক */}
        <ol className="mt-16 grid gap-6 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ icon: Icon, title, desc, duration }, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={title} className="relative">
                <div className="flex h-full gap-5 rounded-2xl border border-border p-6 transition-colors hover:border-primary hover:bg-primary-light lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-primary-dark">
                    <Icon size={22} />
                  </span>

                  <div className="lg:mt-6">
                    <p className="text-sm font-semibold text-primary-dark">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold">{title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed lg:mx-auto lg:max-w-[230px]">
                      {desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-body">
                      <Clock size={12} />
                      {duration}
                    </span>
                  </div>
                </div>

                {/* কার্ডের বাইরে, ঠিক দুই কার্ডের ফাঁকের মাঝখানে */}
                {!isLast && (
                  <>
                    <ChevronDown
                      aria-hidden="true"
                      size={22}
                      className="absolute left-1/2 top-full mt-[1px] -translate-x-1/2 text-primary lg:hidden"
                    />
                    <ChevronRight
                      aria-hidden="true"
                      size={26}
                      className="absolute left-full top-1/2 ml-[3px] hidden -translate-y-1/2 text-primary lg:block"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-16 text-center">
          <Link href="/counseling" className="btn btn-primary">
            Start with a free profile check
          </Link>
          <p className="mt-3 text-sm">
            No charge for the first call, and no obligation to sign up.
          </p>
        </div>
      </div>
    </section>
  );
}