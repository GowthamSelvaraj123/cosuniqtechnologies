"use client";

import Link from "next/link";
import { useState } from "react";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const isVisible = (category: string) => {
    return filter === "all" || filter === category;
  };

  return (
    <>
      <InitReveal />
      <title>Work / Portfolio | Cosuniq Technologies</title>
      <meta name="description" content="Selected Cosuniq projects across software, e-commerce, branding, and video." />

      <InnerBanner 
        title="Selected work"
        description="A snapshot of software, commerce, brand, and video projects we’ve shipped."
      />

      <section>
        <div className="container">
          <div className="filters reveal" role="group" aria-label="Filter projects">
            <button type="button" className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
            <button type="button" className={`filter-btn ${filter === "software" ? "active" : ""}`} onClick={() => setFilter("software")}>Software</button>
            <button type="button" className={`filter-btn ${filter === "crm" ? "active" : ""}`} onClick={() => setFilter("crm")}>CRM</button>
            <button type="button" className={`filter-btn ${filter === "ecommerce" ? "active" : ""}`} onClick={() => setFilter("ecommerce")}>E-commerce</button>
            <button type="button" className={`filter-btn ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>Web</button>
            <button type="button" className={`filter-btn ${filter === "branding" ? "active" : ""}`} onClick={() => setFilter("branding")}>Branding</button>
            <button type="button" className={`filter-btn ${filter === "video" ? "active" : ""}`} onClick={() => setFilter("video")}>Video</button>
          </div>

          <div className="portfolio-grid">
            <article className={`portfolio-item reveal ${!isVisible("software") ? "hidden" : ""}`} data-category="software">
              <div className="portfolio-thumb">
                <img src="/assets/images/dashboard.jpg" alt="OpsCloud" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Software</span>
                <h3>OpsCloud SaaS</h3>
                <p>Multi-tenant operations dashboard with role-based access and live KPIs.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("ecommerce") ? "hidden" : ""}`} data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/laptop.jpg" alt="NovaMart" />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>NovaMart Store</h3>
                <p>Mobile-first storefront with Razorpay checkout and inventory sync.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("branding") ? "hidden" : ""}`} data-category="branding">
              <div className="portfolio-thumb">
                <img src="/assets/images/workshop.jpg" alt="Lumen" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Branding</span>
                <h3>Lumen Identity</h3>
                <p>Full brand system — mark, type, color, and social kit.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("crm") ? "hidden" : ""}`} data-category="crm">
              <div className="portfolio-thumb">
                <img src="/assets/images/strategy.jpg" alt="PipeCRM" />
              </div>
              <div className="portfolio-body">
                <span className="tag">CRM</span>
                <h3>PipeCRM</h3>
                <p>Custom sales CRM with automated follow-ups and WhatsApp alerts.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("web") ? "hidden" : ""}`} data-category="web">
              <div className="portfolio-thumb">
                <img src="/assets/images/meeting.jpg" alt="FinEdge" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Web</span>
                <h3>FinEdge Corporate Site</h3>
                <p>High-converting marketing site with lead capture and SEO setup.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("video") ? "hidden" : ""}`} data-category="video">
              <div className="portfolio-thumb">
                <img src="/assets/images/collab.jpg" alt="Reels" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Video</span>
                <h3>Product Launch Reels</h3>
                <p>Short-form launch series with motion graphics and captions.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Want your project here next?</h2>
            <p>Let’s scope your software, store, brand, or campaign.</p>
            <Link className="btn btn-primary" href="/contact">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
