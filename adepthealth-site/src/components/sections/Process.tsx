import { Container } from "@/src/components/ui/Container";
import { siteConfig } from "@/src/lib/site";

const stepBlurbs: Record<string, string> = {
  Discovery:
    "We align on goals, constraints, and where AI can create near-term value.",
  "Data and Workflow Assessment":
    "We review data quality, system touchpoints, and workflow bottlenecks.",
  "Pilot and Validation":
    "We test in a controlled environment with safety, quality, and adoption checks.",
  "Scale and Monitoring":
    "We operationalize with governance, monitoring, and continuous improvement.",
};

function getStepIcon(index: number) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 7.05 5.64 5.64m12.72 0-1.42 1.41M7.05 16.95l-1.41 1.41" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M4 19h16M6 16V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
        <path d="M9 10h6M9 13h4" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M20 7 9 18l-5-5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 20V10m8 10V4m8 16v-7" />
    </svg>
  );
}

export function Process() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <header className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            How We Work
          </p>
          <h2 className="mt-2 text-balance text-3xl font-semibold sm:text-4xl">
            A four-step delivery model.
          </h2>
        </header>
        <div className="mt-10 grid gap-8 lg:grid-cols-4 lg:gap-5">
          {siteConfig.processSteps.map((step, index) => (
            <div key={step} className="relative">
              <div className="flex flex-col items-center text-center lg:block lg:text-left">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)]">
                  {getStepIcon(index)}
                </div>
                <div className="lg:mt-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[var(--primary)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{step}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-zinc-600 dark:text-zinc-300 lg:mx-0">
                    {stepBlurbs[step] ?? "Structured delivery tailored to your workflow."}
                  </p>
                </div>
              </div>

              {index < siteConfig.processSteps.length - 1 ? (
                <>
                  <div className="mt-4 flex justify-center lg:hidden">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="process-arrow-y h-5 w-5 text-[var(--primary)]"
                    >
                      <path d="M12 5v14m0 0 5-5m-5 5-5-5" />
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute left-[50%] top-5 hidden items-center lg:flex">
                    <span className="h-px w-8 bg-[var(--border)]" />
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="process-arrow-x h-4 w-4 text-[var(--primary)]"
                    >
                      <path d="M5 12h14m0 0-5-5m5 5-5 5" />
                    </svg>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
