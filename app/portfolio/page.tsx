"use client";

import Link from "next/link";
import FinalCta from "../../components/FinalCta";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export default function Portfolio() {
  return (
    <>
      <InitReveal />

      <InnerBanner 
        title="Selected work"
        description="A snapshot of software, commerce, brand, and video projects we’ve shipped."
      />

      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="portfolio-grid">
            <article className="portfolio-item reveal" data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/laptop.jpg" alt="Own Product: Sellgy" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Product</span>
                <h3>Own Product: Sellgy</h3>
                <p>Our proprietary, scalable e-commerce application engineered for high-performance and seamless shopping experiences.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="mobile">
              <div className="portfolio-thumb">
                <img src="/assets/images/bento-mobile.jpg" alt="Classbell App" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Mobile App</span>
                <h3>Classbell</h3>
                <p>An intuitive mobile application designed to seamlessly streamline communications and daily operations.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="inventory">
              <div className="portfolio-thumb">
                <img src="/assets/images/dashboard.png" alt="Shopify Inventory Sync 4" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Shopify / Inventory</span>
                <h3>Shopify Inventory Sync 4</h3>
                <p>A robust inventory management system built to provide seamless, real-time synchronization with Shopify stores.</p>
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
