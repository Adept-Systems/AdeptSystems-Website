import type { Metadata } from "next";
import { Hero } from "@/src/components/sections/Hero";
import { ServicesPreview } from "@/src/components/sections/ServicesPreview";
import { Process } from "@/src/components/sections/Process";
import { Outcomes } from "@/src/components/sections/Outcomes";
import { Trust } from "@/src/components/sections/Trust";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { FAQ } from "@/src/components/sections/FAQ";
import { ContactSection } from "@/src/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "AdeptHealth.AI",
  description: "Healthcare AI strategy and implementation consulting.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <Outcomes />
      <Trust />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
