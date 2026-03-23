"use client";

import { useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { siteConfig } from "@/src/lib/site";

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((value) => value !== index)
        : [...current, index],
    );
  };

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const panelId = `faq-panel-${index}`;
            return (
              <div key={faq.question} className="group py-1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="flex w-full cursor-pointer select-none items-center justify-between gap-6 py-5 text-left"
                >
                  <h3 className="text-base font-semibold transition duration-300 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 sm:text-lg">
                    {faq.question}
                  </h3>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`h-5 w-5 shrink-0 text-[var(--primary)] transition duration-500 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-zinc-600 transition duration-300 group-hover:text-zinc-500 dark:text-zinc-300 dark:group-hover:text-zinc-400 sm:text-base">
                      {faq.answer}
                    </p>
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
