import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function Testimonials() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Sample testimonials"
          description="Illustrative examples only until live client references are available."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.testimonials.map((item) => (
            <Card key={item.quote} className="p-6">
              <blockquote className="text-sm text-slate-700 dark:text-slate-200">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {item.author}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
