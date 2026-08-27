import Link from "next/link";
import CinematicHero from "../components/CinematicHero";
import LivingBrandHero from "../components/LivingBrandHero";
import CapabilitiesUniverse from "../components/CapabilitiesUniverse";
import WorkSlider from "../components/WorkSlider";
import QuoteSlider from "../components/QuoteSlider";
import InitReveal from "../components/InitReveal";
import WorkLifecycle from "../components/WorkLifecycle";

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


      {/* RESULTS — KOTA style */}
      <section className="band band--white" id="results">
        <div className="container">
          <div className="section-intro reveal">
            <span className="eyebrow"><span className="spark spark--inline"></span> Results</span>
            <h2>Numbers that mean something.</h2>
          </div>
          <div className="results-grid reveal">
            <div className="result">
              <strong>67%</strong>
              <span>avg. engagement lift after launch</span>
            </div>
            <div className="result">
              <strong>2×</strong>
              <span>faster delivery with clear process</span>
            </div>
            <div className="result">
              <strong>80+</strong>
              <span>projects shipped and counting</span>
            </div>
            <div className="result">
              <strong>100%</strong>
              <span>dedicated creative + tech partnership</span>
            </div>
          </div>
        </div>
      </section>

      <QuoteSlider />



    </>
  );
}
