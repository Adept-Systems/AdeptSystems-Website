"use client";

import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { HeroVisual } from "@/src/components/sections/HeroVisual";
import { siteConfig } from "@/src/lib/site";

export function Hero() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
              {siteConfig.hero.description}
            </p>
            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <Button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Contact
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              {siteConfig.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
