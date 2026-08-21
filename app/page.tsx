import Link from "next/link";
import CinematicHero from "../components/CinematicHero";
import LivingBrandHero from "../components/LivingBrandHero";
import WorkSlider from "../components/WorkSlider";
import QuoteSlider from "../components/QuoteSlider";
import InitReveal from "../components/InitReveal";

export default function Home() {
  return (
    <>
      <InitReveal />
      
      <CinematicHero />
      <LivingBrandHero />

      {/* Scroll starts here — Section A */}
      <section className="band band--cream" id="section-a">
        <div className="container manifesto reveal">
          <p className="mega-line">
            Meaningful digital is made through
            <span className="line-accent"><span className="spark spark--inline"></span> software with purpose</span>
            <span className="line-accent"><span className="spark spark--inline"></span> design that performs</span>
            <span className="line-accent"><span className="spark spark--inline"></span> brand that connects</span>
            <span className="line-accent"><span className="spark spark--inline"></span> video that impresses</span>
          </p>
        </div>
      </section>

      {/* PROCESS — KOTA numbered clarity */}
      <section className="band band--white" id="process">
        <div className="container">
          <div className="section-intro reveal">
            <span className="eyebrow"><span className="spark spark--inline"></span> Our framework</span>
            <h2>Strategy first. Always.</h2>
            <p>There are moments of change for every brand. That’s where our work begins.</p>
          </div>
          <div className="process-grid reveal">
            <article className="process-card">
              <span className="process-num">01</span>
              <h3>Brand Clarity</h3>
              <p>Decisions that help brands re-position and commit.</p>
            </article>
            <article className="process-card">
              <span className="process-num">02</span>
              <h3>Creative Craft</h3>
              <p>Visually confident design built to stand out.</p>
            </article>
            <article className="process-card">
              <span className="process-num">03</span>
              <h3>Commercial Momentum</h3>
              <p>Scalable systems with growth in mind.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES — RSNL / Kota service clarity */}
      <section className="band band--cream" id="services">
        <div className="container">
          <div className="section-intro reveal">
            <span className="eyebrow"><span className="spark spark--inline"></span> What we do</span>
            <h2>We create from concept to completion.</h2>
          </div>
          <div className="service-bento reveal">
            <Link className="svc" href="/services#software">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>Software &amp; SaaS</h3>
              <p>Custom platforms engineered to scale.</p>
            </Link>
            <Link className="svc" href="/services#crm">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>CRM</h3>
              <p>Pipelines, automation, clear foresight.</p>
            </Link>
            <Link className="svc" href="/services#ecommerce">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>E-commerce</h3>
              <p>Stores built to convert and delight.</p>
            </Link>
            <Link className="svc" href="/services#web">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>Web Design</h3>
              <p>Sites where beauty meets ROI.</p>
            </Link>
            <Link className="svc" href="/services#branding">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>Branding</h3>
              <p>Identity systems that feel inevitable.</p>
            </Link>
            <Link className="svc" href="/services#video">
              <span className="svc-icon spark" aria-hidden="true"></span>
              <h3>Video</h3>
              <p>Motion that makes brands memorable.</p>
            </Link>
          </div>
        </div>
      </section>

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
