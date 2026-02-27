import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Healthcare AI consulting services from strategy to deployment.",
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Practical healthcare AI services, from roadmap to operations."
          description="Focused support for providers, payers, and digital health teams that need measurable outcomes and controlled risk."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.servicePageItems.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
