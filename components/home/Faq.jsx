"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, MessagesSquare } from "lucide-react";

const faqs = [
  {
    q: "Is the first counselling session really free?",
    a: "Yes, and there is no obligation after it. You bring your transcripts and your budget, we tell you where you stand. If we cannot help this intake, we will say so on that call rather than sign you up and stall.",
  },
  {
    q: "What if my grades are low or I have a study gap?",
    a: "Neither is disqualifying on its own. Gaps need a documented explanation, and low grades are often offset by work experience, a strong SOP or a foundation route. What we will not do is send an application we know is going to fail.",
  },
  {
    q: "How much do your services cost?",
    a: "It depends on the country and how much of the process you hand over. You get the full breakdown in writing before you commit to anything, including tuition, deposits, visa fees and insurance, so nothing appears later.",
  },
  {
    q: "Do the AI tools cost anything?",
    a: "No. The visa checker, the SOP review and the course finder are free and do not require you to book a counselling session first. Run them, read the results, and come to us only if you want to.",
  },
  {
    q: "How accurate is the visa possibility checker?",
    a: "It weighs your profile against the published requirements and the patterns we see in real applications, so it is a strong indicator rather than a guarantee. No tool can predict an embassy decision, and anyone who claims otherwise is selling something.",
  },
  {
    q: "Can you help if my visa was refused before?",
    a: "Often yes. A refusal is not a permanent bar, but the second application has to address the exact ground for refusal. We start by reading the refusal letter properly, which is the step most reapplications skip.",
  },
  {
    q: "How long does the whole process take?",
    a: "Usually four to eight weeks for applications and offers, then six to twelve weeks for the visa. Working backwards, that means starting roughly six months before your intended intake.",
  },
  {
    q: "Do you help after the visa is approved?",
    a: "Yes. Accommodation, airport pickup, opening a bank account and getting a local SIM are all arranged before you fly, so your first week is not spent solving logistics.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[400px_1fr] lg:gap-16 lg:px-8">
        {/* ---------------- left ---------------- */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Questions
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            The things students ask us first
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Straight answers, including the ones that are not in our favour.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary-dark">
              <MessagesSquare size={20} />
            </span>
            <h3 className="mt-4 text-lg font-semibold">
              Still have something specific?
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              Ask a counsellor directly. No form-filling before you get an
              answer.
            </p>
            <Link href="/contact" className="btn btn-primary mt-5 w-full">
              Talk to a counsellor
            </Link>
          </div>
        </div>

        {/* ---------------- accordion ---------------- */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  open ? "border-primary" : "border-border"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span
                      className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        open ? "text-primary-dark" : "text-dark"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-45 bg-primary text-white"
                          : "bg-surface text-body"
                      }`}
                    >
                      <Plus size={17} />
                    </span>
                  </button>
                </h3>

                {/* 0fr → 1fr, তাই উচ্চতা না মেপেই মসৃণভাবে খোলে */}
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-14 text-[15px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}