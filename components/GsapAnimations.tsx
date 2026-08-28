"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * GsapAnimations — centralized GSAP animation layer.
 * Mounted once in layout.tsx. Adds premium motion to the existing design
 * WITHOUT touching any layout, content, color or component structure.
 *
 * Coexists cleanly with existing Framer Motion animations.
 */
export default function GsapAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // ── Respect prefers-reduced-motion ──────────────────────────────────
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;

    // ── Dynamic GSAP import (avoids SSR issues with static export) ───────
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;

    const init = async () => {
      const gsapModule = await import("gsap");
      const { default: gsap } = gsapModule;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const SplitType = (await import("split-type")).default;

      gsap.registerPlugin(ScrollTrigger);

      // Create a GSAP context for clean teardown
      ctx = gsap.context(() => {
        // ════════════════════════════════════════════════════════════════
        // 1. HERO (LivingBrandHero) — entrance after splash exits (~6.5s)
        // ════════════════════════════════════════════════════════════════
        const heroSection = document.querySelector<HTMLElement>("#hero-main");

        if (heroSection) {
          // Eyebrow
          const eyebrow = heroSection.querySelector<HTMLElement>(".eyebrow");
          if (eyebrow) {
            gsap.fromTo(
              eyebrow,
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
                delay: 6.8,
              }
            );
          }

        // Headline — animate as a whole (contains animated rotating words inside)
          const headline = heroSection.querySelector<HTMLElement>("h1");
          if (headline) {
            gsap.fromTo(
              headline,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power4.out",
                delay: 7.0,
              }
            );
          }

          // Description paragraph
          const desc = heroSection.querySelector<HTMLElement>("p");
          if (desc) {
            gsap.fromTo(
              desc,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                delay: 7.4,
              }
            );
          }

          // Service tags
          const services = heroSection.querySelector<HTMLElement>(".hero-services");
          if (services) {
            gsap.fromTo(
              services,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 7.6,
              }
            );
          }

          // CTA buttons stagger
          const ctaBtns = heroSection.querySelectorAll<HTMLElement>("a");
          if (ctaBtns.length) {
            gsap.fromTo(
              ctaBtns,
              { opacity: 0, y: 20, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12,
                delay: 7.7,
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 2. SECTION HEADINGS — split-word reveal on scroll
        // ════════════════════════════════════════════════════════════════
        // Target h2 elements in sections that don't already have Framer
        // motion on them (WorkSlider, WorkLifecycle, ResultsShowcase)
        const scrollHeadings = document.querySelectorAll<HTMLElement>(
          "#work h2, #results h2, #work-lifecycle h2"
        );

        scrollHeadings.forEach((heading) => {
          const split = new SplitType(heading, { types: "words,chars" });

          gsap.fromTo(
            split.words,
            { opacity: 0, y: 50, skewY: 3 },
            {
              opacity: 1,
              y: 0,
              skewY: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.06,
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
                onLeaveBack: () => split.revert(),
              },
              onComplete: () => {
                // revert after animation to avoid split DOM persisting
                setTimeout(() => split.revert(), 100);
              },
            }
          );
        });

        // ════════════════════════════════════════════════════════════════
        // 3. WORKSLIDER — staggered cards + signature parallax
        // ════════════════════════════════════════════════════════════════
        const workSlides = document.querySelectorAll<HTMLElement>(".work-slide");

        if (workSlides.length) {
          gsap.fromTo(
            workSlides,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".work-slider",
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          // ── SIGNATURE EFFECT: Parallax depth on work slide images ──────
          if (!isMobile) {
            workSlides.forEach((slide) => {
              const img = slide.querySelector<HTMLElement>(".work-slide__img img");
              if (!img) return;

              gsap.fromTo(
                img,
                { y: -20, scale: 1.08 },
                {
                  y: 20,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: slide,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2,
                  },
                }
              );
            });
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 4. RESULTS SHOWCASE — bento card stagger reveal
        // ════════════════════════════════════════════════════════════════
        const resultCards = document.querySelectorAll<HTMLElement>(
          "#results [class*='card']"
        );

        if (resultCards.length) {
          gsap.fromTo(
            resultCards,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: {
                amount: 0.5,
                from: "start",
              },
              scrollTrigger: {
                trigger: "#results",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ════════════════════════════════════════════════════════════════
        // 5. CAPABILITIES / SERVICES CARDS
        // ════════════════════════════════════════════════════════════════
        const capCards = document.querySelectorAll<HTMLElement>(
          "[class*='CapabilitiesUniverse'] [class*='card'], [class*='service-card'], .service-card"
        );

        if (capCards.length) {
          gsap.fromTo(
            capCards,
            { opacity: 0, y: 36, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: capCards[0].closest("section") || capCards[0],
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ════════════════════════════════════════════════════════════════
        // 6. ABOUT COSUNIQ — headline word reveal + intro text
        // ════════════════════════════════════════════════════════════════
        const aboutSection = document.querySelector<HTMLElement>("#about");
        if (aboutSection) {
          const aboutH2 = aboutSection.querySelector<HTMLElement>("h2");
          if (aboutH2) {
            const split = new SplitType(aboutH2, { types: "lines,words" });
            gsap.fromTo(
              split.lines,
              { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
              {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.0,
                ease: "power4.out",
                stagger: 0.12,
                scrollTrigger: {
                  trigger: aboutH2,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
                onComplete: () => setTimeout(() => split.revert(), 100),
              }
            );
          }

          // Eyebrow
          const aboutEyebrow = aboutSection.querySelector<HTMLElement>("[class*='eyebrow']");
          if (aboutEyebrow) {
            gsap.fromTo(
              aboutEyebrow,
              { opacity: 0, x: -16 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: aboutEyebrow,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 7. BRAND PHILOSOPHY — section clip-path reveal
        // ════════════════════════════════════════════════════════════════
        const philosophySection = document.querySelector<HTMLElement>("#philosophy");
        if (philosophySection && !isMobile) {
          // Subtle clip-path wipe on section entrance
          gsap.fromTo(
            philosophySection,
            { clipPath: "inset(4% 2% 4% 2% round 20px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: philosophySection,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );

          // Principle items stagger (already Framer but GSAP will run first
          // since it starts slightly earlier — they stack without conflict)
          const principles = philosophySection.querySelectorAll<HTMLElement>("[class*='principle']");
          if (principles.length) {
            gsap.fromTo(
              principles,
              { opacity: 0, x: -30 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                  trigger: principles[0],
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 8. FINAL CTA — headline word cascade
        // ════════════════════════════════════════════════════════════════
        const ctaSection = document.querySelector<HTMLElement>("#start");
        if (ctaSection) {
          const ctaH2 = ctaSection.querySelector<HTMLElement>("h2");
          if (ctaH2) {
            const split = new SplitType(ctaH2, { types: "words" });
            gsap.fromTo(
              split.words,
              { opacity: 0, y: 60, rotationX: -20 },
              {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.0,
                ease: "expo.out",
                stagger: 0.07,
                scrollTrigger: {
                  trigger: ctaH2,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
                onComplete: () => setTimeout(() => split.revert(), 100),
              }
            );
          }

          // CTA button — subtle entrance scale
          const ctaBtn = ctaSection.querySelector<HTMLElement>("a[class*='cta']");
          if (ctaBtn) {
            gsap.fromTo(
              ctaBtn,
              { opacity: 0, y: 24, scale: 0.94 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                  trigger: ctaBtn,
                  start: "top 90%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 9. BUTTON HOVER — arrow nudge on all primary CTAs
        // ════════════════════════════════════════════════════════════════
        if (!isMobile) {
          const ctaLinks = document.querySelectorAll<HTMLElement>(
            "[class*='primaryCta'], [class*='ctaButton'], [class*='ctaLink']"
          );

          ctaLinks.forEach((btn) => {
            const arrow = btn.querySelector<HTMLElement>("svg, span[class*='arrow'], .arrow");
            if (!arrow) return;

            const enterAnim = gsap.to(arrow, {
              x: 5,
              duration: 0.3,
              ease: "power2.out",
              paused: true,
            });

            btn.addEventListener("mouseenter", () => enterAnim.play());
            btn.addEventListener("mouseleave", () => enterAnim.reverse());
          });
        }

        // ════════════════════════════════════════════════════════════════
        // 10. WORK LIFECYCLE SECTION — number/step reveal
        // ════════════════════════════════════════════════════════════════
        const lifecycleSection = document.querySelector<HTMLElement>("#work-lifecycle");
        if (lifecycleSection) {
          const processCards = lifecycleSection.querySelectorAll<HTMLElement>(".process-card");
          if (processCards.length) {
            gsap.fromTo(
              processCards,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: lifecycleSection,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }

          // Eyebrow + heading
          const lifecycleH2 = lifecycleSection.querySelector<HTMLElement>("h2");
          if (lifecycleH2) {
            const split = new SplitType(lifecycleH2, { types: "words" });
            gsap.fromTo(
              split.words,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                stagger: 0.07,
                scrollTrigger: {
                  trigger: lifecycleH2,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
                onComplete: () => setTimeout(() => split.revert(), 100),
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 11. GENERIC REVEAL for remaining .reveal class elements
        //     (complements InitReveal.tsx — fires if IntersectionObserver
        //      hasn't already added .visible)
        // ════════════════════════════════════════════════════════════════
        const genericReveals = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
        genericReveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                onEnter: () => el.classList.add("visible"),
              },
            }
          );
        });

        // ════════════════════════════════════════════════════════════════
        // 12. SUBTLE SECTION PARALLAX — selected sections only
        // ════════════════════════════════════════════════════════════════
        if (!isMobile) {
          // OurDifference SVG visual parallax
          const diffVisual = document.querySelector<HTMLElement>("[class*='unifiedVisualWrapper']");
          if (diffVisual) {
            gsap.fromTo(
              diffVisual,
              { y: 40 },
              {
                y: -40,
                ease: "none",
                scrollTrigger: {
                  trigger: "#difference",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2,
                },
              }
            );
          }

          // AboutCosuniq visual parallax
          const aboutVisual = document.querySelector<HTMLElement>("[class*='visualWrapper']");
          if (aboutVisual) {
            gsap.fromTo(
              aboutVisual,
              { y: 30 },
              {
                y: -30,
                ease: "none",
                scrollTrigger: {
                  trigger: "#about",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
              }
            );
          }
        }
      }); // end gsap.context
    };

    init();

    return () => {
      // Clean up GSAP context and all ScrollTrigger instances on route change
      ctx?.revert();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, [pathname]);

  return null;
}
