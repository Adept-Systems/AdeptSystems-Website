"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";

const workforceCards = [
  {
    title: "Agents are becoming operators",
    description:
      "AI agents are moving beyond simple assistance. They are becoming operational team members that can take on execution while people stay focused on strategy, oversight, and judgment.",
  },
  {
    title: "A new workforce layer",
    description:
      "The teams moving fastest are treating agents as a real workforce layer across sales, operations, customer success, finance, and support. The coordinated agent layer keeps work moving across functions without losing context.",
  },
  {
    title: "Built for continuity",
    description:
      "Agentic systems can work around the clock, share knowledge across workflows, and carry context from one task to the next. That gives your team more continuity, more coverage, and more execution capacity.",
  },
  {
    title: "Scoped to real functions",
    description:
      "Adept Systems helps identify which functions are ready for agentic deployment, where autonomous workflows can own execution, and how to phase the rollout with the right controls in place.",
  },
  {
    title: "Connected to your stack",
    description:
      "We build the agents, connect them to your systems, and shape the handoffs between people and autonomous agents so the workflow feels operational from day one.",
  },
  {
    title: "Managed after launch",
    description:
      "Standing up an agent workforce is not a one-time build. We stay close to performance, refine orchestration, and help the agent layer keep improving alongside your team.",
  },
];

export function AgenticWorkforce() {
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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[color:rgb(245_158_11_/_0.14)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_90%,transparent),color-mix(in_srgb,var(--surface-muted)_82%,transparent))] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-10 top-8 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl dark:bg-amber-300/8" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.18),transparent)]" />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr] lg:gap-10">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="Agentic Workforce"
                title="The next workforce layer is agentic."
                description="Organizations are starting to treat autonomous agents as operational teammates. Adept Systems helps define where that layer belongs, build it, and get it working alongside your team."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-[color:rgb(245_158_11_/_0.16)] bg-[color:rgb(245_158_11_/_0.08)] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                    Operating model
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    A coordinated agent layer that executes across functions, shares context, and stays aligned with human oversight.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <p className="text-2xl font-semibold text-[var(--primary)]">
                      24/7
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      Agent continuity
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <p className="text-2xl font-semibold text-[var(--primary)]">
                      Multi-team
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      Shared context
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workforceCards.map((card, index) => (
                <Card
                  key={card.title}
                  className={`reveal-item relative overflow-hidden bg-[color:rgb(255_255_255_/_0.5)] backdrop-blur-sm dark:bg-[color:rgb(20_20_20_/_0.45)] ${isVisible ? "is-visible" : ""}`}
                  style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
                >
                  <div className="absolute left-6 top-0 h-10 w-px bg-[linear-gradient(180deg,var(--primary),transparent)]" />
                  <div className="pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                      Workforce layer
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {card.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
