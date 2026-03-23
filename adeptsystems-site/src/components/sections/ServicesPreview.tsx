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
          title="Applied systems for organizations that need execution, not theory."
          description="Adept Systems develops focused solutions at the intersection of AI, operations, and industry execution."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.coreServices.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
