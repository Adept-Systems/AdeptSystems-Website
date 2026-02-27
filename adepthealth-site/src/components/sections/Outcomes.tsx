import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Outcomes() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="Designed to improve real workflows, not demo environments."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.outcomes.map((outcome) => (
            <Card key={outcome} className="p-5">
              <p className="text-lg font-semibold">{outcome}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
