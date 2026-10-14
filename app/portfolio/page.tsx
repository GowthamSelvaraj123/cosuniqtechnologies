import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "../../components/FinalCta";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Cosuniq Technologies' selected work — e-commerce platforms, mobile apps, SaaS products, branding, and more.",
  keywords: ["Cosuniq portfolio", "web development projects", "e-commerce projects", "branding case studies", "mobile app projects"],
  openGraph: {
    title: "Portfolio | Cosuniq Technologies",
    description: "Explore Cosuniq's selected work — e-commerce, mobile apps, SaaS, branding, and video projects.",
    url: "https://cosuniq.in/portfolio",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Cosuniq Technologies",
    description: "Explore Cosuniq's selected work — e-commerce, mobile apps, SaaS, branding, and video projects.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/portfolio" },
};

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
                <img src="/assets/images/laptop.webp" alt="Own Product: Sellgy" loading="lazy" decoding="async" width={700} height={440} />
              </div>
              <div className="portfolio-body">
                <span className="tag">Product</span>
                <h3>Own Product: Sellgy</h3>
                <p>Our proprietary, scalable e-commerce application engineered for high-performance and seamless shopping experiences.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="mobile">
              <div className="portfolio-thumb">
                <img src="/assets/images/bento-mobile.webp" alt="Classbell App" loading="lazy" decoding="async" width={700} height={440} />
              </div>
              <div className="portfolio-body">
                <span className="tag">Mobile App</span>
                <h3>Classbell</h3>
                <p>An intuitive mobile application designed to seamlessly streamline communications and daily operations.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="inventory">
              <div className="portfolio-thumb">
                <img src="/assets/images/dashboard.webp" alt="Shopify Inventory Sync 4" loading="lazy" decoding="async" width={700} height={440} />
              </div>
              <div className="portfolio-body">
                <span className="tag">Shopify / Inventory</span>
                <h3>Shopify Inventory Sync 4</h3>
                <p>A robust inventory management system built to provide seamless, real-time synchronization with Shopify stores.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/orangebabe_mockup.webp" alt="Orangebabe" loading="lazy" decoding="async" width={700} height={440} />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>Orangebabe</h3>
                <p>Developed a vibrant, playful e-commerce platform for children that significantly boosted customer engagement.</p>
              </div>
            </article>

            <article className="portfolio-item reveal" data-category="branding">
              <div className="portfolio-thumb">
                <img src="/assets/images/hero-brand.webp" alt="Cosuniq Technologies" loading="lazy" decoding="async" width={700} height={440} />
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
