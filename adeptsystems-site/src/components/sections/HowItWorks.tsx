"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { siteConfig } from "@/src/lib/site";

const steps = siteConfig.processSteps.map((step) => ({
  title: step,
  description: siteConfig.processBlurbs[step],
}));

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From scoping to live deployment in a tight operating loop."
          description="We keep the process compact. Each phase moves directly toward a working agentic system, not a handoff document."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`reveal-item relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 ${isVisible ? "is-visible" : ""}`}
              style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
            >
              {index < steps.length - 1 ? (
                <div className="process-step-line hidden lg:block" />
              ) : null}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-[var(--primary-foreground)]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
