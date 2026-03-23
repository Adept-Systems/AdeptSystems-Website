import type { Metadata } from "next";
import { ContactSection } from "@/src/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adept Systems about applied AI, workflow systems, and focused segment solutions.",
};

export default function ContactPage() {
  return <ContactSection showHeading />;
}
