import { Container } from "@/src/components/ui/Container";

const stats = [
  {
    value: "2-4 weeks",
    label: "From scoping to live deployment",
  },
  {
    value: "80%",
    label: "Reduction in manual workflow time",
  },
  {
    value: "24/7",
    label: "Agent execution, zero downtime",
  },
  {
    value: "Day 30",
    label: "Typical timeline to measurable ROI",
  },
];

export function StatsStrip() {
  return (
    <section className="border-y border-[color:rgb(245_158_11_/_0.12)] [background:linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,white),color-mix(in_srgb,var(--surface-muted)_88%,white))] py-8 text-[var(--foreground)] dark:border-black dark:[background:#000] dark:text-white">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center xl:text-left">
              <p className="text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-white/72">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
