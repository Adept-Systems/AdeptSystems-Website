import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";

const founder = {
  name: "Roopak Manchanda",
  role: "Founding Partner",
  bio: "Brings deep operational and strategic expertise to Adept Systems. He is a serial founder and brings that founder perspective to execution, growth, and long-term business design.",
};

export function Team() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="The Team"
          title="Built by people who ship."
          description="Adept Systems is led by operators and builders who stay close to execution."
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.78fr_1.12fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[32px] border border-[var(--border)]">
            <Image
              src="/roopak-manchanda.png"
              alt={founder.name}
              width={1200}
              height={1400}
              className="h-full min-h-[300px] w-full object-cover sm:min-h-[360px]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.16)_45%,rgba(15,23,42,0.7))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-xs text-white">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/78">
                  {founder.role}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              We built this because too many teams get strategy without execution.
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Adept Systems exists to close that gap. Organizations know AI
              matters, but many initiatives stall between planning and live
              deployment. We focus on agentic systems, digital workflows, and
              implementation that can operate in the real world.
            </p>

            <Card className="mt-8 rounded-[24px] bg-[var(--surface-muted)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Founder profile
              </p>
              <p className="mt-3 text-lg font-semibold">{founder.name}</p>
              <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-300">
                {founder.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {founder.bio}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
