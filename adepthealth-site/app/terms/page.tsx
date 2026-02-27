import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for AdeptHealth.AI.",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Terms of Use</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          This is a placeholder terms page for AdeptHealth.AI.
        </p>
      </Container>
    </section>
  );
}
