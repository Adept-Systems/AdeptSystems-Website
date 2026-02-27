import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { siteConfig } from "@/src/lib/site";

type ContactSectionProps = {
  showHeading?: boolean;
};

export function ContactSection({ showHeading = false }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <Card className="p-7 sm:p-10">
          {showHeading ? (
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you need to deliver."
              description="Share your goals and current constraints. We respond with practical next steps."
            />
          ) : (
            <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          )}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_280px]">
            <ContactForm />
            <aside className="rounded-2xl border bg-[var(--surface-muted)] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Alternative
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                Prefer email? Reach us directly at:
              </p>
              <a
                href={siteConfig.contactMailto}
                className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
              >
                {siteConfig.contactEmail}
              </a>
            </aside>
          </div>
        </Card>
      </Container>
    </section>
  );
}
