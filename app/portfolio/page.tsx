"use client";

import Link from "next/link";
import FinalCta from "../../components/FinalCta";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export default function Portfolio() {
  return (
    <>
      <InitReveal />
      <title>Work / Portfolio | Cosuniq Technologies</title>
      <meta name="description" content="Selected Cosuniq projects across software, e-commerce, branding, and video." />

      <InnerBanner 
        title="Selected work"
        description="A snapshot of software, commerce, brand, and video projects we’ve shipped."
      />

      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="portfolio-grid">
            <article className="portfolio-item reveal" data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/laptop.jpg" alt="Sellgy" />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>Sellgy</h3>
                <p>Built a scalable, high-performance e-commerce application optimized for seamless mobile and desktop shopping experiences.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/orangebabe_mockup.jpg" alt="Orangebabe" />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>Orangebabe</h3>
                <p>Developed a vibrant, playful e-commerce platform for children that significantly boosted customer engagement.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="branding">
              <div className="portfolio-thumb">
                <img src="/assets/images/hero-brand.jpg" alt="Cosuniq Technologies" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Branding</span>
                <h3>Cosuniq Technologies</h3>
                <p>In-depth analysis and strategic framework for positioning modern brands in competitive digital markets.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
