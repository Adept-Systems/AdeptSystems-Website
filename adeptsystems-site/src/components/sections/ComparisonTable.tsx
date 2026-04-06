import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const rows = [
  {
    label: "Time to working software",
    traditional: "Weeks to months",
    adept: "Days to weeks",
  },
  {
    label: "Deliverable",
    traditional: "Strategy deck",
    adept: "Working system",
  },
  {
    label: "Team involvement",
    traditional: "Handoff at end",
    adept: "Built alongside your team",
  },
  {
    label: "Ongoing support",
    traditional: "Separate retainer",
    adept: "Included in engagement",
  },
  {
    label: "Agentic AI capability",
    traditional: "Rarely",
    adept: "Core to every build",
  },
  {
    label: "Time to ROI",
    traditional: "Unclear",
    adept: "Targeted within 30 days",
  },
];

export function ComparisonTable() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title="Traditional consultant vs Adept Systems."
          description="We stay focused on working systems, direct execution, and agentic delivery that starts producing results quickly."
        />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid grid-cols-[1.15fr_1fr] border-b border-[var(--border)] md:grid-cols-[1.1fr_1fr_1fr]">
            <div className="hidden px-6 py-5 md:block" />
            <div className="px-6 py-5 text-sm font-semibold text-zinc-500 dark:text-zinc-300">
              Traditional Consultant
            </div>
            <div className="col-span-2 bg-[color:rgb(245_158_11_/_0.1)] px-6 py-5 text-sm font-semibold text-[var(--foreground)] md:col-span-1 md:border-l md:border-[color:rgb(245_158_11_/_0.22)]">
              Adept Systems
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.15fr_1fr] border-b border-[var(--border)] last:border-b-0 md:grid-cols-[1.1fr_1fr_1fr]"
            >
              <div className="col-span-2 px-6 pt-5 text-sm font-medium text-[var(--foreground)] md:col-span-1 md:py-5">
                {row.label}
              </div>
              <div className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-300 md:py-5">
                {row.traditional}
              </div>
              <div className="bg-[color:rgb(245_158_11_/_0.08)] px-6 pb-5 text-sm font-medium text-[var(--foreground)] md:border-l md:border-[color:rgb(245_158_11_/_0.22)] md:py-5">
                {row.adept}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
