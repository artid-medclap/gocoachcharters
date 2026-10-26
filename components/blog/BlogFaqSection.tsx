"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionTitleAccent } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

const BLOG_FAQ_IDS = ["faq-1", "faq-2", "faq-6", "faq-7"] as const;

const blogFaqs = faqs.filter((faq) =>
  (BLOG_FAQ_IDS as readonly string[]).includes(faq.id),
);

export function BlogFaqSection() {
  const [openId, setOpenId] = useState<string | null>(blogFaqs[0]?.id ?? null);

  return (
    <section
      className="border-t border-[#f2b3c7]/35 bg-white py-10 sm:py-12"
      aria-label="Frequently asked questions"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-800">
              FAQ
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-primary-950 sm:text-2xl">
              Quick answers
              <SectionTitleAccent> for group travel</SectionTitleAccent>
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Planning a charter? Start with these common questions.
            </p>
          </div>

          <ul className="mt-6 divide-y divide-[#f2b3c7]/50 rounded-2xl border border-[#f2b3c7]/40 bg-surface-blush/30">
            {blogFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <li key={faq.id}>
                  <button
                    type="button"
                    id={`blog-faq-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`blog-faq-answer-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  >
                    <span className="text-sm font-semibold leading-snug text-primary-950 sm:text-[0.9375rem]">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary-200/80 bg-white text-primary-900 transition-transform duration-200",
                        isOpen && "rotate-180 border-primary-300 bg-primary-50",
                      )}
                      aria-hidden
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`blog-faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`blog-faq-${faq.id}`}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-3.5 text-sm leading-6 text-body-text sm:px-5 sm:pb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Need more detail?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#7a011f] underline-offset-2 hover:underline"
            >
              Contact our team
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
