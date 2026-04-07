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
                className="rounded-2xl border bg-[var(--surface-muted)] px-5 py-5"
              >
                <div className="flex h-full flex-col">
                  <p className="text-lg font-semibold">{segment.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {segment.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
