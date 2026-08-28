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
    <section 
      className="band band--black" 
      id="work" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: 'rgb(68 27 0)', /* Darker burnt orange */
        backgroundImage: 'url(/assets/images/office.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="slider-head reveal">
          <div>
            <span className="eyebrow" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.4)',
              color: '#ffffff',
              padding: '0.4rem 1rem',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}><span className="spark spark--inline"></span> Featured work</span>
            <h2>Work that’s worked.</h2>
          </div>
          <div className="slider-controls">
            <button type="button" className="slider-btn" aria-label="Previous" onClick={() => slideBy(-1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button type="button" className="slider-btn" aria-label="Next" onClick={() => slideBy(1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="work-slider-wrap">
        <div className="work-slider" ref={sliderRef}>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/dashboard.jpg" alt="Freelance Experience" />
              <div className="stat-badge">100+ <small>websites</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>Freelance Experience</h3>
              <p>Designed and built across 100+ different categories.</p>
              <div className="tags"><span>Freelance</span><span>Design</span><span>Web</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/orangebabe_mockup.jpg" alt="Orangebabe kids ecommerce" />
              <div className="stat-badge">+32% <small>conversion</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>Orangebabe</h3>
              <p>Playful e-commerce experience for kids.</p>
              <div className="tags"><span>E-com</span><span>Brand</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/strategy.jpg" alt="CRM and ERP cross integrations" />
              <div className="stat-badge">100% <small>sync</small></div>
            </div>
            <div className="work-slide__meta">
              <h3>Own Product: CRM & ERP</h3>
              <p>Seamless cross integrations for our internal product.</p>
              <div className="tags"><span>CRM</span><span>ERP</span><span>Integration</span></div>
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
