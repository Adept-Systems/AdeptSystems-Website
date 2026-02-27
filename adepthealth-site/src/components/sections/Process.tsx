import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Process() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="How We Work" title="A four-step delivery model." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.processSteps.map((step, index) => (
            <Card key={step} className="p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--primary)]">
                Step {index + 1}
              </p>
              <p className="mt-2 text-base font-medium">{step}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
