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
    <section id="contact" className="py-14 sm:py-16">
      <Container>
        <Card className="p-7 sm:p-10">
          {showHeading ? (
            <SectionHeading
              eyebrow="Contact"
              title="Let's build systems that work."
              description="Whether you are exploring a new AI initiative or shaping a focused operating model, Adept Systems helps turn direction into execution."
            />
          ) : (
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Start a Conversation
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Let&apos;s build systems that work.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                Share the initiative you&apos;re shaping, where the operating friction
                sits today, and what outcomes you need to reach.
              </p>
            </div>
          )}
          <div className="mt-6 grid gap-6">
            <ContactForm />
            <aside className="rounded-2xl border bg-[var(--surface-muted)] p-6 text-center">
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
