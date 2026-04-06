import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";

const workforceCards = [
  {
    title: "Agents are becoming operators",
    description:
      "AI agents are moving beyond simple assistance. They are becoming operational team members that can take on execution while people stay focused on strategy, oversight, and judgment.",
  },
  {
    title: "A new workforce layer",
    description:
      "The teams moving fastest are treating agents as a real workforce layer across sales, operations, customer success, finance, and support. The coordinated agent layer keeps work moving across functions without losing context.",
  },
  {
    title: "Built for continuity",
    description:
      "Agentic systems can work around the clock, share knowledge across workflows, and carry context from one task to the next. That gives your team more continuity, more coverage, and more execution capacity.",
  },
  {
    title: "Scoped to real functions",
    description:
      "Adept Systems helps identify which functions are ready for agentic deployment, where autonomous workflows can own execution, and how to phase the rollout with the right controls in place.",
  },
  {
    title: "Connected to your stack",
    description:
      "We build the agents, connect them to your systems, and shape the handoffs between people and autonomous agents so the workflow feels operational from day one.",
  },
  {
    title: "Managed after launch",
    description:
      "Standing up an agent workforce is not a one-time build. We stay close to performance, refine orchestration, and help the agent layer keep improving alongside your team.",
  },
];

export function AgenticWorkforce() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Agentic Workforce"
          title="The next workforce layer is agentic."
          description="Organizations are starting to treat autonomous agents as operational teammates. Adept Systems helps define where that layer belongs, build it, and get it working alongside your team."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workforceCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
