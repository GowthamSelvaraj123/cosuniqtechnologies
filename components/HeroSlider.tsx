"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/assets/images/hero-tech.png",
    alt: "Software and technology team",
    eyebrow: "Cosuniq Technologies",
    title: "We build software that <em>scales</em>.",
    sub: "Custom SaaS, apps, and platforms engineered to solve real problems — and grow with your business.",
    cta: "Be our next happy client",
    link: "/contact"
  },
  {
    image: "/assets/images/hero-brand.png",
    alt: "Brand and design workspace",
    eyebrow: "Design · Brand · Web",
    title: "Beyond boundaries of <em>ordinary</em>.",
    sub: "Brand identity and websites that feel premium, convert better, and stay unmistakably you.",
    cta: "Explore services",
    link: "/services"
  },
  {
    image: "/assets/images/dashboard.png",
    alt: "Digital product dashboard",
    eyebrow: "CRM · Commerce · AI",
    title: "Digital systems that <em>deliver</em>.",
    sub: "CRM, e-commerce, and AI-accelerated workflows — connected so nothing gets lost between your product and your customers.",
    cta: "Book a discovery",
    link: "/contact"
  },
  {
    image: "/assets/images/hero-creative.png",
    alt: "Creative visual storytelling",
    eyebrow: "Creative studio",
    title: "In a realm of <em>wonder</em>.",
    sub: "Video, motion, and storytelling that make brands memorable — crafted with the same care as our code.",
    cta: "See the work",
    link: "/portfolio"
  }
];

export default function HeroSlider() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const heroRootRef = useRef<HTMLElement>(null);
  const heroTimer = useRef<NodeJS.Timeout | null>(null);
  const HERO_MS = 6000;

  const pad = (n: number) => (n < 10 ? "0" + n : String(n));

  const goHero = (i: number) => {
    setHeroIndex((i + slides.length) % slides.length);
  };

  const startHeroAuto = () => {
    stopHeroAuto();
    heroTimer.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % slides.length);
    }, HERO_MS);
  };

  const stopHeroAuto = () => {
    if (heroTimer.current) clearInterval(heroTimer.current);
    heroTimer.current = null;
  };

  useEffect(() => {
    startHeroAuto();
    return stopHeroAuto;
  }, []);

  const handleMouseEnter = () => stopHeroAuto();
  const handleMouseLeave = () => startHeroAuto();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRootRef.current) return;
    const active = heroRootRef.current.querySelector(".hero-slide.is-active .hero-slide__media") as HTMLElement;
    if (!active) return;
    const rect = heroRootRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    active.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
  };

  const handleMouseLeaveRoot = () => {
    startHeroAuto();
    if (!heroRootRef.current) return;
    const active = heroRootRef.current.querySelector(".hero-slide.is-active .hero-slide__media") as HTMLElement;
    if (active) active.style.transform = "translate(0, 0)";
  };

  // Drag logic
  const startX = useRef(0);
  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as Element).closest("a, button")) return;
    setIsDragging(true);
    startX.current = e.clientX;
    stopHeroAuto();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 60) {
      goHero(dx < 0 ? heroIndex + 1 : heroIndex - 1);
    }
    startHeroAuto();
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    startHeroAuto();
  };

  return (
    <section 
      className={`hero-slider ${isDragging ? "is-dragging" : ""}`} 
      id="hero-slider" 
      aria-roledescription="carousel" 
      aria-label="Cosuniq highlights"
      ref={heroRootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveRoot}
      onMouseMove={handleMouseMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      <div className="hero-slides" id="hero-track">
        {slides.map((slide, idx) => (
          <article key={idx} className={`hero-slide ${idx === heroIndex ? "is-active" : ""}`} data-slide={idx}>
            <div className="hero-slide__media">
              <img src={slide.image} alt={slide.alt} draggable="false" />
            </div>
            <div className="hero-slide__veil"></div>
            <div className="container hero-slide__content">
              <p className="hero-slide__eyebrow"><span className="spark spark--inline"></span> {slide.eyebrow}</p>
              <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
              <p className="hero-slide__sub">{slide.sub}</p>
              <div className="hero-slide__actions">
                <Link className="btn btn-primary" href={slide.link}>{slide.cta}</Link>
                <a className="hero-more" href="#section-a">more <span></span></a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hero-slider__ui">
        <div className="hero-slider__count" aria-live="polite">
          <span id="hero-current">{pad(heroIndex + 1)}</span><span className="sep">/</span><span id="hero-total">{pad(slides.length)}</span>
        </div>
        <div className="hero-slider__nav">
          <button type="button" className="hero-nav-btn" id="hero-prev" aria-label="Previous slide" onClick={() => goHero(heroIndex - 1)}>PREV</button>
          <span className="hero-nav-divider" aria-hidden="true"></span>
          <button type="button" className="hero-nav-btn" id="hero-next" aria-label="Next slide" onClick={() => goHero(heroIndex + 1)}>NEXT</button>
        </div>
        <div className="hero-slider__progress" aria-hidden="true">
          <i key={heroIndex} className="is-animating" style={{ width: "100%", animationDuration: `${HERO_MS}ms` }}></i>
        </div>
      </div>

      <a className="hero-scroll-a" href="#section-a" aria-label="Scroll to start">
        <span>A</span>
        <small>Scroll</small>
      </a>
    </section>
  );
}
