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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#000000db', /* Darker burnt orange */
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
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '0.4rem 1rem',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}><span className="spark spark--inline"></span>Featured work</span>
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

        <div className="work-slider" ref={sliderRef}>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/dashboard.jpg" alt="Freelance Experience" />
            </div>
            <div className="work-slide__meta">
              <h3>Freelance Experience</h3>
              <p>Designed and engineered tailored digital experiences across more than 100 diverse industry categories.</p>
              <div className="tags"><span>Freelance</span><span>Design</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/orangebabe_mockup.jpg" alt="Orangebabe kids ecommerce" />
            </div>
            <div className="work-slide__meta">
              <h3>Orangebabe</h3>
              <p>Developed a vibrant, playful e-commerce platform for children that significantly boosted customer engagement.</p>
              <div className="tags"><span>E-com</span><span>Brand</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/strategy.jpg" alt="CRM and ERP cross integrations" />
            </div>
            <div className="work-slide__meta">
              <h3>Own Product: CRM & ERP</h3>
              <p>Engineered seamless, real-time cross integrations between our internal CRM and ERP software products.</p>
              <div className="tags"><span>CRM</span><span>ERP</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/workshop.jpg" alt="Brand workshop" />
            </div>
            <div className="work-slide__meta">
              <h3>Lumen Brand</h3>
              <p>Crafted a comprehensive, scalable identity system and digital presence for a growing fintech.</p>
              <div className="tags"><span>Brand</span><span>Design</span></div>
            </div>
          </article>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/collab.jpg" alt="Video production collab" />
            </div>
            <div className="work-slide__meta">
              <h3>Launch Reels</h3>
              <p>Produced high-impact, engaging product film series designed specifically for social media marketing campaigns.</p>
              <div className="tags"><span>Video</span><span>Motion</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
