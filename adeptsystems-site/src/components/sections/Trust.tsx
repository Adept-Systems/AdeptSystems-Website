import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Trust() {
  return (
    <section id="segments" className="py-14 sm:py-16">
      <Container>
        <Card className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Segments"
            title="Focused solutions, built by segment."
            description="Adept Systems operates as a parent platform with targeted verticals and solution areas underneath it."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {siteConfig.segments.map((segment) => (
              <article
                key={segment.title}
                className={`rounded-2xl border px-5 py-5 ${
                  segment.featured
                    ? "border-transparent bg-neutral-900 text-white dark:bg-[color:rgb(245_158_11_/_0.12)]"
                    : "bg-[var(--surface-muted)]"
                }`}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold">{segment.title}</p>
                    {segment.featured ? (
                      <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 dark:border-[var(--border)] dark:text-[var(--foreground)]">
                        Featured
                      </span>
                    ) : (
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-300">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      segment.featured
                        ? "text-white/78 dark:text-zinc-200"
                        : "text-zinc-600 dark:text-zinc-300"
                    }`}
                  >
                    {segment.description}
                  </p>
                  {segment.ctaHref ? (
                    <a
                      href={segment.ctaHref}
                      target={segment.external ? "_blank" : undefined}
                      rel={segment.external ? "noreferrer" : undefined}
                      className={`mt-5 inline-flex items-center text-sm font-medium underline underline-offset-4 ${
                        segment.featured ? "text-white dark:text-[var(--foreground)]" : ""
                      }`}
                    >
                      {segment.ctaLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
