"use client";

import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faqs";
import { homeSectionMeta } from "@/lib/home-sections";
import {
  bodyTextClass,
  bodyTextSmClass,
  sectionTitleClass,
  sectionTitleEmphasisClass,
} from "@/lib/typography";

export const faqSection = homeSectionMeta.faq;

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id={faqSection.id}
      aria-label={faqSection.name}
      className="relative overflow-hidden bg-surface-blush py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-100/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-100/10 blur-[120px]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b3c7]/50 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100">
              <Sparkles className="h-3.5 w-3.5 text-primary-900" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-900">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className={cn("mt-6 max-w-4xl text-primary-950", sectionTitleClass)}>
            Questions,
            <span className={cn("block", sectionTitleEmphasisClass)}>
              answered clearly.
            </span>
          </h2>

          {/* Description */}
          <p className={`mt-6 max-w-2xl ${bodyTextClass}`}>
            Everything you need to know about booking, pricing, routes, and group
            transportation.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 grid gap-3 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "group overflow-hidden rounded-[24px] border bg-white transition-all duration-300",
                  isOpen
                  ? "border-primary-100 bg-white shadow-[0_15px_45px_rgba(91,49,65,0.05)]"
                  : "border-primary-100 shadow-[0_8px_30px_rgba(31,20,27,0.03)] hover:border-primary-200"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  {/* Number */}
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300",
                      isOpen
                        ? "bg-primary-100 text-primary-950"
                        : "bg-primary-50 text-primary-800 group-hover:bg-primary-100"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={cn(
                      "flex-1 pr-2 text-sm font-bold transition-colors duration-300 sm:text-base",
                      isOpen ? "text-primary-900" : "text-primary-950"
                    )}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle */}
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-primary-200 bg-primary-100 text-primary-900"
                        : "border-primary-100 bg-surface-blush text-primary-800 group-hover:border-primary-200"
                    )}
                  >
                    <Plus
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-primary-950/8 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                      <div className="flex gap-4">
                        <div className="hidden w-10 shrink-0 sm:block" />

                        <p className={`max-w-3xl ${bodyTextSmClass}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}