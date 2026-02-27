import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for AdeptHealth.AI.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          This is a placeholder privacy policy for AdeptHealth.AI.
        </p>
      </Container>
    </section>
  );
}
