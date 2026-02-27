import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Mission and principles behind AdeptHealth.AI.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="AdeptHealth.AI helps healthcare teams move from AI intent to AI delivery."
          description="We combine technical implementation with healthcare workflow understanding so solutions are useful, governed, and sustainable."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {siteConfig.principles.map((principle) => (
            <Card key={principle}>
              <p className="text-base font-medium">{principle}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
