import type { Metadata } from "next";
import { ContactSection } from "@/src/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Adept Systems about agentic AI systems, autonomous workflows, and rapid implementation.",
};

export default function ContactPage() {
  return <ContactSection showHeading />;
}
