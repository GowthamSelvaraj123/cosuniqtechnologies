"use client";

import Link from "next/link";
import FinalCta from "../../components/FinalCta";
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
            <article className={`portfolio-item reveal ${!isVisible("ecommerce") ? "hidden" : ""}`} data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/orangebabe_mockup.jpg" alt="Orangebabe" />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>Orangebabe</h3>
                <p>Developed a vibrant, playful e-commerce platform for children that significantly boosted customer engagement.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("branding") ? "hidden" : ""}`} data-category="branding">
              <div className="portfolio-thumb">
                <img src="/assets/images/hero-brand.jpg" alt="Brand Research" />
              </div>
              <div className="portfolio-body">
                <span className="tag">Branding</span>
                <h3>Our Brand Research</h3>
                <p>In-depth analysis and strategic framework for positioning modern brands in competitive digital markets.</p>
              </div>
            </article>

            <article className={`portfolio-item reveal ${!isVisible("ecommerce") ? "hidden" : ""}`} data-category="ecommerce">
              <div className="portfolio-thumb">
                <img src="/assets/images/laptop.jpg" alt="Sellgy" />
              </div>
              <div className="portfolio-body">
                <span className="tag">E-commerce</span>
                <h3>Sellgy</h3>
                <p>Built a scalable, high-performance e-commerce application optimized for seamless mobile and desktop shopping experiences.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
