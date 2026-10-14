import type { Metadata } from "next";
import Link from "next/link";
import CinematicHero from "../components/CinematicHero";
import LivingBrandHero from "../components/LivingBrandHero";
import OurDifference from "../components/OurDifference";
import AboutCosuniq from "../components/AboutCosuniq";
import FinalCta from "../components/FinalCta";
import CapabilitiesUniverse from "../components/CapabilitiesUniverse";
import WorkSlider from "../components/WorkSlider";
import InitReveal from "../components/InitReveal";
import WorkLifecycle from "../components/WorkLifecycle";
import ResultsShowcase from "../components/ResultsShowcase";

export const metadata: Metadata = {
  title: "Cosuniq Technologies | Creative Digital Agency",
  description: "Cosuniq Technologies — full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production. Every brand has a story. We help you build it.",
  alternates: { canonical: "https://cosuniq.in" },
};

export default function Home() {
  return (
    <>
      <InitReveal />
      
      <CinematicHero />
      <LivingBrandHero />
      <CapabilitiesUniverse />
      <WorkLifecycle />

      {/* Services are now handled by CapabilitiesUniverse */}

      <WorkSlider />


      {/* RESULTS — Innovative Bento Showcase */}
      <ResultsShowcase />
      
      <OurDifference />
      <AboutCosuniq />
      <FinalCta />

    </>
  );
}
