import type { Metadata } from "next";
import { ContactSection } from "@/src/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AdeptHealth.AI for healthcare AI consulting support.",
};

export default function ContactPage() {
  return <ContactSection showHeading />;
}
