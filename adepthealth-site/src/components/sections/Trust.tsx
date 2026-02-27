import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Trust() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Card className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Trust and Compliance"
            title="AI delivery with governance built in."
          />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {siteConfig.trustBullets.map((item) => (
              <li key={item} className="rounded-xl border bg-[var(--surface-muted)] px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
