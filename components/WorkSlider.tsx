"use client";

import { useRef } from "react";

export default function WorkSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideBy = (dir: number) => {
    if (!sliderRef.current) return;
    const amount = Math.min(380, sliderRef.current.clientWidth * 0.85) * dir;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="band band--black" id="work">
      <div className="container">
        <div className="slider-head reveal">
          <div>
            <span className="eyebrow"><span className="spark spark--inline"></span> Featured work</span>
            <h2>Work that’s worked.</h2>
          </div>
          <div className="slider-controls">
            <button type="button" className="slider-btn" aria-label="Previous" onClick={() => slideBy(-1)}>
              ←
            </button>
            <button type="button" className="slider-btn" aria-label="Next" onClick={() => slideBy(1)}>
              →
            </button>
          </div>
        </div>
      </div>

      <div className="work-slider-wrap">
        <div className="work-slider" ref={sliderRef}>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/dashboard.jpg" alt="OpsCloud SaaS dashboard" />
              <div className="stat-badge">80+ <small>projects</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>OpsCloud</h3>
              <p>Multi-tenant SaaS for operations teams.</p>
              <div className="tags"><span>Software</span><span>UX</span><span>Web</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/laptop.jpg" alt="NovaMart ecommerce" />
              <div className="stat-badge">+32% <small>conversion</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>NovaMart</h3>
              <p>Commerce experience built to convert.</p>
              <div className="tags"><span>E-com</span><span>Brand</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/strategy.jpg" alt="PipeCRM strategy" />
              <div className="stat-badge">2× <small>pipeline</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>PipeCRM</h3>
              <p>Sales CRM with smart follow-ups.</p>
              <div className="tags"><span>CRM</span><span>Automation</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/workshop.jpg" alt="Brand workshop" />
              <div className="stat-badge">Full <small>identity</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>Lumen Brand</h3>
              <p>Identity system for a growing fintech.</p>
              <div className="tags"><span>Brand</span><span>Design</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/collab.jpg" alt="Video production collab" />
              <div className="stat-badge">16k+ <small>views</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>Launch Reels</h3>
              <p>Product film series for social.</p>
              <div className="tags"><span>Video</span><span>Motion</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
