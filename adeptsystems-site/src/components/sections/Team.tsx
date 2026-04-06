import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Card } from "@/src/components/ui/Card";

const teamMembers = [
  {
    name: "Roopak Manchanda",
    role: "Co-Founder",
    bio: "Brings deep operational and strategic expertise to Adept Systems.",
  },
  {
    name: "Rahul Manchanda-Izquierdo",
    role: "Co-Founder",
    bio: "Leads product, engineering, and AI implementation at Adept Systems.",
  },
];

export function Team() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="The Team"
          title="Built by people who ship."
          description="Adept Systems is led by operators and builders who stay close to execution."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] text-lg font-semibold text-[var(--primary)]">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
