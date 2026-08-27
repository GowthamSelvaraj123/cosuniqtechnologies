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

      {/* BENTO SHOWCASE — RSNL creative grid */}
      <section className="band band--cream" id="showcase">
        <div className="container">
          <div className="section-intro reveal">
            <span className="eyebrow"><span className="spark spark--inline"></span> Studio energy</span>
            <h2>Creative craft. Human delivery.</h2>
          </div>

          <div className="bento reveal">
            <div className="bento-card bento-card--tall">
              <img src="/assets/images/dev-team.jpg" alt="Development team" />
              <div className="stat-badge stat-badge--tl">AI <small>first</small></div>
              <div className="bento-caption">
                <h3>Build with intelligence</h3>
                <p>Software shaped by real user behaviour.</p>
              </div>
            </div>
            <div className="bento-card bento-card--wide">
              <img src="/assets/images/meeting.jpg" alt="Strategy meeting" />
              <Link className="bento-cutout" href="/about">
                Insights. Why ambitious brands think in systems →
              </Link>
            </div>
            <div className="bento-card">
              <img src="/assets/images/office.jpg" alt="Studio workspace" />
              <div className="stat-badge">5+ <small>years</small></div>
            </div>
            <div className="bento-card">
              <img src="/assets/images/brainstorm.jpg" alt="Brainstorm session" />
              <div className="stat-badge">40+ <small>clients</small></div>
            </div>
          </div>
        </div>
      </section>

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

      {/* PATHWAYS — Creative Graphics clear starting points */}
      <section className="band band--white" id="paths">
        <div className="container">
          <div className="section-intro reveal">
            <span className="eyebrow"><span className="spark spark--inline"></span> Pathways</span>
            <h2>Clear starting points. No guesswork.</h2>
          </div>
          <div className="paths-grid reveal">
            <article className="path-card">
              <h3>Launch</h3>
              <p>Brand + website foundation for new businesses ready to go to market.</p>
              <Link href="/contact">Explore →</Link>
            </article>
            <article className="path-card path-card--hot">
              <h3>Build</h3>
              <p>Custom software, CRM, or commerce engineered for real workflows.</p>
              <Link href="/contact">Explore →</Link>
            </article>
            <article className="path-card">
              <h3>Grow</h3>
              <p>Ongoing design, content, video, and product iterations that scale.</p>
              <Link href="/contact">Explore →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band band--cream band--tight">
        <div className="container">
          <div className="cta-blob reveal">
            <span className="spark spark--lg" aria-hidden="true"></span>
            <h2>Ready to make an impact?</h2>
            <p>Whether you’re planning a new product or refreshing your brand — let’s talk.</p>
            <Link className="btn btn-primary" href="/contact">Design a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
