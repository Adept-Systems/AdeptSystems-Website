import type { Metadata } from "next";
import { Hero } from "@/src/components/sections/Hero";
import { ServicesPreview } from "@/src/components/sections/ServicesPreview";
import { Outcomes } from "@/src/components/sections/Outcomes";
import { Trust } from "@/src/components/sections/Trust";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { ContactScrollSync } from "@/src/components/sections/ContactScrollSync";

export const metadata: Metadata = {
  title: "Adept Systems",
  description:
    "A parent company building applied AI, workflow systems, and digital products.",
};

export default function HomePage() {
  return (
    <div className="pb-8 sm:pb-12">
      <ContactScrollSync />
      <Hero />
      <Trust />
      <ServicesPreview />
      <Outcomes />
      <ContactSection />
    </div>
  );
}
