import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { siteConfig } from "@/src/lib/site";

export function FAQ() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10 space-y-4">
          {siteConfig.faqs.map((faq) => (
            <Card key={faq.question} className="p-5">
              <h3 className="text-base font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
