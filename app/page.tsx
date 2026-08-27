import Link from "next/link";
import CinematicHero from "../components/CinematicHero";
import LivingBrandHero from "../components/LivingBrandHero";
import CapabilitiesUniverse from "../components/CapabilitiesUniverse";
import WorkSlider from "../components/WorkSlider";
import QuoteSlider from "../components/QuoteSlider";
import InitReveal from "../components/InitReveal";
import WorkLifecycle from "../components/WorkLifecycle";
import ResultsShowcase from "../components/ResultsShowcase";

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

      <QuoteSlider />



    </>
  );
}
