"use client";

import { useRef, useState, useEffect } from "react";

export default function WorkSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (sliderRef.current) {
        // scrollWidth > clientWidth detects if the container has scrollable overflow
        const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.clientWidth + 5;
        // fallback heuristic just in case scrollWidth is acting up in this layout
        const hasManyChildren = sliderRef.current.children.length > 3;
        setShowArrows(isOverflowing || hasManyChildren);
      }
    };
    
    checkOverflow();

    // Use ResizeObserver for robust layout-shift detection
    const observer = new ResizeObserver(() => checkOverflow());
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
      // Observe the first child as well, since its size dictates the scrollWidth
      if (sliderRef.current.firstElementChild) {
        observer.observe(sliderRef.current.firstElementChild);
      }
    }
    
    window.addEventListener("resize", checkOverflow);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

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
          {showArrows && (
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
          )}
        </div>

        <div className="work-slider" ref={sliderRef}>
          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/laptop.jpg" alt="Own Product: Sellgy" />
            </div>
            <div className="work-slide__meta">
              <h3>Own Product: Sellgy</h3>
              <p>Our proprietary, scalable e-commerce application engineered for high-performance and seamless shopping experiences.</p>
              <div className="tags"><span>Product</span><span>E-com</span></div>
            </div>
          </article>

          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/bento-mobile.jpg" alt="Classbell App" />
            </div>
            <div className="work-slide__meta">
              <h3>Classbell</h3>
              <p>An intuitive mobile application designed to seamlessly streamline communications and daily operations.</p>
              <div className="tags"><span>Mobile App</span></div>
            </div>
          </article>

          <article className="work-slide">
            <div className="work-slide__img">
              <img src="/assets/images/dashboard.png" alt="Shopify Inventory Sync 4" />
            </div>
            <div className="work-slide__meta">
              <h3>Shopify Inventory Sync 4</h3>
              <p>A robust inventory management system built to provide seamless, real-time synchronization with Shopify stores.</p>
              <div className="tags"><span>Inventory</span><span>Shopify</span></div>
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
              <img src="/assets/images/hero-brand.jpg" alt="Cosuniq Technologies" />
            </div>
            <div className="work-slide__meta">
              <h3>Cosuniq Technologies</h3>
              <p>In-depth analysis and strategic framework for positioning modern brands in competitive digital markets.</p>
              <div className="tags"><span>Research</span><span>Brand</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
