import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function ServicesPreview() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Agentic systems for teams that need execution, not theory."
          description="Adept Systems builds agentic AI, autonomous workflows, and rapid implementation paths that move from scoping to live deployment."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.coreServices.map((item, index) => (
            <Card
              key={item.title}
              className="relative overflow-hidden border-[color:rgb(245_158_11_/_0.14)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_88%,transparent),color-mix(in_srgb,var(--surface-muted)_82%,transparent))] p-0"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--primary),transparent)]" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-[color:rgb(245_158_11_/_0.18)] bg-[color:rgb(245_158_11_/_0.08)] px-3 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-200">
                    Core service
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
