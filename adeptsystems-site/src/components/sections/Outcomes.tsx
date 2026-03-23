import type { CSSProperties } from "react";
import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

function getCapabilityIcon(index: number) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 18h5V6H4v12Zm11 0h5V11h-5v7ZM9 18h6V3H9v15Z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 7h10M4 12h16M4 17h8" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="10" cy="17" r="2" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M5 17 10 12l3 3 6-7" />
        <path d="M19 8v5h-5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M12 3v6m0 6v6M3 12h6m6 0h6" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function Outcomes() {
  return (
    <section id="capabilities" className="py-14 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(245,158,11,0.08),transparent_30%),var(--surface)] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full bg-amber-300/15 blur-3xl dark:bg-amber-300/8" />

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Capabilities
            </p>
            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">
                The delivery stack behind each build.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                Adept Systems combines strategy, workflow design, prototyping,
                and applied ML into one compact execution model.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {siteConfig.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="capability-panel group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[color:rgb(255_255_255_/_0.58)] p-6 backdrop-blur dark:bg-[color:rgb(20_20_20_/_0.58)]"
                style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
              >
                <div className="capability-scan" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--primary)] transition duration-500 group-hover:scale-105 group-hover:-rotate-3">
                    {getCapabilityIcon(index)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-10">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                    {capability.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    Active capability
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
