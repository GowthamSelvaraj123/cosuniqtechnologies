"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * GsapAnimations — centralized GSAP animation layer.
 * Mounted once in layout.tsx. Adds premium motion to the existing design
 * WITHOUT touching any layout, content, color or component structure.
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;

    const init = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const SplitType = (await import("split-type")).default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ════════════════════════════════════════════════════════════════
        // 1. HERO — fires the instant CinematicHero (#cinematic-hero-root)
        //    is removed from DOM. Short relative delays create a fast stagger.
        // ════════════════════════════════════════════════════════════════
        const animateHero = () => {
          const heroSection = document.querySelector<HTMLElement>("#hero-main");
          if (!heroSection) return;

          // Eyebrow
          const eyebrow = heroSection.querySelector<HTMLElement>(".eyebrow");
          if (eyebrow) {
            gsap.fromTo(eyebrow,
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
            );
          }

          // Headline — whole block (contains AnimatePresence for rotating words)
          const headline = heroSection.querySelector<HTMLElement>("h1");
          if (headline) {
            gsap.fromTo(headline,
              { opacity: 0, y: 36 },
              { opacity: 1, y: 0, duration: 0.9, ease: "power4.out", delay: 0.2 }
            );
          }

          // Description paragraph
          const desc = heroSection.querySelector<HTMLElement>("p");
          if (desc) {
            gsap.fromTo(desc,
              { opacity: 0, y: 22 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.45 }
            );
          }

          // Service tags line
          const services = heroSection.querySelector<HTMLElement>("[class*='services']");
          if (services) {
            gsap.fromTo(services,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.6 }
            );
          }

          // CTA buttons — stagger
          const ctaBtns = heroSection.querySelectorAll<HTMLElement>("a");
          if (ctaBtns.length) {
            gsap.fromTo(ctaBtns,
              { opacity: 0, y: 18, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.75 }
            );
          }
        };

        // If splash already gone (route change), animate immediately
        if (!document.getElementById("cinematic-hero-root")) {
          animateHero();
        } else {
          // Watch for CinematicHero removal
          const mo = new MutationObserver(() => {
            if (!document.getElementById("cinematic-hero-root")) {
              mo.disconnect();
              animateHero();
            }
          });
          mo.observe(document.body, { childList: true, subtree: true });
        }

        // ════════════════════════════════════════════════════════════════
        // 2. SECTION HEADINGS — split-word scroll reveal
        //    Only targets sections without Framer on h2
        // ════════════════════════════════════════════════════════════════
        const scrollHeadings = document.querySelectorAll<HTMLElement>(
          "#work h2, #results h2, #work-lifecycle h2"
        );

        scrollHeadings.forEach((heading) => {
          const split = new SplitType(heading, { types: "words" });
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
              },
              onComplete: () => setTimeout(() => split.revert(), 100),
            }
          );
        });

        // ════════════════════════════════════════════════════════════════
        // 3. WORKSLIDER — staggered cards + signature image parallax
        // ════════════════════════════════════════════════════════════════
        const workSlides = document.querySelectorAll<HTMLElement>(".work-slide");

        if (workSlides.length) {
          gsap.fromTo(
            workSlides,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.85, ease: "power3.out", stagger: 0.1,
              scrollTrigger: {
                trigger: ".work-slider",
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          // Signature: parallax depth on each slide image
          if (!isMobile) {
            workSlides.forEach((slide) => {
              const img = slide.querySelector<HTMLElement>(".work-slide__img img");
              if (!img) return;
              gsap.fromTo(img,
                { y: -20, scale: 1.08 },
                {
                  y: 20, scale: 1, ease: "none",
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
        // 4. RESULTS SHOWCASE — bento cards stagger
        // ════════════════════════════════════════════════════════════════
        const resultCards = document.querySelectorAll<HTMLElement>("#results [class*='card']");
        if (resultCards.length) {
          gsap.fromTo(
            resultCards,
            { opacity: 0, top: 40 },
            {
              opacity: 1, top: 0,
              duration: 0.8, ease: "power3.out",
              stagger: { amount: 0.5, from: "start" },
              scrollTrigger: {
                trigger: "#results",
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ════════════════════════════════════════════════════════════════
        // 5. CAPABILITIES — service cards stagger
        // ════════════════════════════════════════════════════════════════
        const capCards = document.querySelectorAll<HTMLElement>(
          "[class*='CapabilitiesUniverse'] [class*='card'], .service-card"
        );
        if (capCards.length) {
          gsap.fromTo(
            capCards,
            { opacity: 0, top: 36 },
            {
              opacity: 1, top: 0,
              duration: 0.75, ease: "power3.out", stagger: 0.07,
              scrollTrigger: {
                trigger: capCards[0].closest("section") || capCards[0],
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ════════════════════════════════════════════════════════════════
        // 6. ABOUT — headline line-by-line clip-path reveal
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
                opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)",
                duration: 1.0, ease: "power4.out", stagger: 0.12,
                scrollTrigger: {
                  trigger: aboutH2, start: "top 85%",
                  toggleActions: "play none none none",
                },
                onComplete: () => setTimeout(() => split.revert(), 100),
              }
            );
          }

          const aboutEyebrow = aboutSection.querySelector<HTMLElement>("[class*='eyebrow']");
          if (aboutEyebrow) {
            gsap.fromTo(aboutEyebrow,
              { opacity: 0, x: -16 },
              {
                opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: {
                  trigger: aboutEyebrow, start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 7. BRAND PHILOSOPHY — clip-path wipe + principles stagger
        // ════════════════════════════════════════════════════════════════
        const philosophySection = document.querySelector<HTMLElement>("#philosophy");
        if (philosophySection && !isMobile) {
          gsap.fromTo(
            philosophySection,
            { clipPath: "inset(4% 2% 4% 2% round 20px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              duration: 1.2, ease: "power4.out",
              scrollTrigger: {
                trigger: philosophySection, start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );

          const principles = philosophySection.querySelectorAll<HTMLElement>("[class*='principle']");
          if (principles.length) {
            gsap.fromTo(
              principles,
              { opacity: 0, x: -30 },
              {
                opacity: 1, x: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
                scrollTrigger: {
                  trigger: principles[0], start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 8. FINAL CTA — word cascade + button entrance
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
                opacity: 1, y: 0, rotationX: 0,
                duration: 1.0, ease: "expo.out", stagger: 0.07,
                scrollTrigger: {
                  trigger: ctaH2, start: "top 88%",
                  toggleActions: "play none none none",
                },
                onComplete: () => setTimeout(() => split.revert(), 100),
              }
            );
          }

          const ctaBtn = ctaSection.querySelector<HTMLElement>("a[class*='cta']");
          if (ctaBtn) {
            gsap.fromTo(ctaBtn,
              { opacity: 0, y: 24, scale: 0.94 },
              {
                opacity: 1, y: 0, scale: 1,
                duration: 0.9, ease: "power3.out", delay: 0.2,
                scrollTrigger: {
                  trigger: ctaBtn, start: "top 90%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 9. BUTTON HOVER — arrow nudge
        // ════════════════════════════════════════════════════════════════
        if (!isMobile) {
          const ctaLinks = document.querySelectorAll<HTMLElement>(
            "[class*='primaryCta'], [class*='ctaButton'], [class*='ctaLink']"
          );
          ctaLinks.forEach((btn) => {
            const arrow = btn.querySelector<HTMLElement>("svg, span[class*='arrow'], .arrow");
            if (!arrow) return;
            const enterAnim = gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out", paused: true });
            btn.addEventListener("mouseenter", () => enterAnim.play());
            btn.addEventListener("mouseleave", () => enterAnim.reverse());
          });
        }

        // ════════════════════════════════════════════════════════════════
        // 10. WORK LIFECYCLE — process cards stagger
        // ════════════════════════════════════════════════════════════════
        const lifecycleSection = document.querySelector<HTMLElement>("#work-lifecycle");
        if (lifecycleSection) {
          const processCards = lifecycleSection.querySelectorAll<HTMLElement>(".process-card");
          if (processCards.length) {
            gsap.fromTo(
              processCards,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1, y: 0, scale: 1,
                duration: 0.8, ease: "power3.out", stagger: 0.1,
                scrollTrigger: {
                  trigger: lifecycleSection, start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // ════════════════════════════════════════════════════════════════
        // 11. GENERIC .reveal fallback
        // ════════════════════════════════════════════════════════════════
        document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: {
                trigger: el, start: "top 88%",
                toggleActions: "play none none none",
                onEnter: () => el.classList.add("visible"),
              },
            }
          );
        });

        // ════════════════════════════════════════════════════════════════
        // 12. PARALLAX — SVG visuals (desktop only)
        // ════════════════════════════════════════════════════════════════
        if (!isMobile) {
          const diffVisual = document.querySelector<HTMLElement>("[class*='unifiedVisualWrapper']");
          if (diffVisual) {
            gsap.fromTo(diffVisual, { y: 40 }, {
              y: -40, ease: "none",
              scrollTrigger: { trigger: "#difference", start: "top bottom", end: "bottom top", scrub: 2 },
            });
          }

          const aboutVisual = document.querySelector<HTMLElement>("[class*='visualWrapper']");
          if (aboutVisual) {
            gsap.fromTo(aboutVisual, { y: 30 }, {
              y: -30, ease: "none",
              scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: 1.5 },
            });
          }
        }

      }); // end gsap.context
    };

    init();

    return () => {
      ctx?.revert();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, [pathname]);

  return null;
}
