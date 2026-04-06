import type { Metadata } from "next";
import { Hero } from "@/src/components/sections/Hero";
import { ServicesPreview } from "@/src/components/sections/ServicesPreview";
import { Outcomes } from "@/src/components/sections/Outcomes";
import { Trust } from "@/src/components/sections/Trust";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { ContactScrollSync } from "@/src/components/sections/ContactScrollSync";
import { AgenticWorkforce } from "@/src/components/sections/AgenticWorkforce";
import { Team } from "@/src/components/sections/Team";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Adept Systems",
  description: siteConfig.siteDescription,
};

export default function HomePage() {
  return (
    <div className="pb-8 sm:pb-12">
      <ContactScrollSync />
      <Hero />
      <Trust />
      <ServicesPreview />
      <AgenticWorkforce />
      <Outcomes />
      <Team />
      <ContactSection />
    </div>
  );
}
