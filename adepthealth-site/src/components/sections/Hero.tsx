import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl border bg-[var(--surface)] px-6 py-14 shadow-sm shadow-slate-900/5 sm:px-10">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Healthcare AI consulting that ships.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Strategy, implementation, and governance for safe, compliant AI in
            clinical and operational workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#contact">Contact</Button>
            <Button href="/services" variant="secondary">
              View services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
