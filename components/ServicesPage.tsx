"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ServicesPage.module.css";
import InnerBanner from "./InnerBanner";
import FinalCta from "./FinalCta";
import TiltCard from "./TiltCard";
import { 
  SiMiro, SiNotion, SiFigma, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPhp, SiLaravel, SiFramer, SiSketch, SiShopify, SiStripe, SiGraphql, 
  SiDocker, SiPostgresql, SiTypescript, SiFlutter, SiFirebase, SiSwift, 
  SiGithubactions, SiLinux 
} from "react-icons/si";
import { FaAws, FaCubes, FaPalette, FaImage, FaVideo } from "react-icons/fa6";

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    'Miro': <SiMiro />,
    'Notion': <SiNotion />,
    'Figma': <SiFigma />,
    'Maze': <FaCubes />,
    'Illustrator': <FaPalette />,
    'Photoshop': <FaImage />,
    'After Effects': <FaVideo />,
    'React': <SiReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <SiNodedotjs />,
    'PHP': <SiPhp />,
    'Laravel': <SiLaravel />,
    'Framer': <SiFramer />,
    'Sketch': <SiSketch />,
    'Principle': <FaCubes />,
    'Shopify': <SiShopify />,
    'Stripe': <SiStripe />,
    'GraphQL': <SiGraphql />,
    'AWS': <FaAws />,
    'Docker': <SiDocker />,
    'PostgreSQL': <SiPostgresql />,
    'TypeScript': <SiTypescript />,
    'React Native': <SiReact />,
    'Flutter': <SiFlutter />,
    'Firebase': <SiFirebase />,
    'Swift': <SiSwift />,
    'GitHub Actions': <SiGithubactions />,
    'Linux': <SiLinux />,
  };
  return icons[name] || <FaCubes />;
};

/* ─────────── DATA ─────────── */
const overviewServices = [
  { num: "01", name: "Web Development", desc: "Fast, responsive websites and web apps built for performance and scale.", href: "#web-dev" },
  { num: "02", name: "UI/UX & Product Design", desc: "Intuitive interfaces and design systems that users love.", href: "#design" },
  { num: "03", name: "E-Commerce", desc: "High-converting online stores powered by modern commerce technology.", href: "#ecommerce" },
  { num: "04", name: "Custom Software", desc: "Bespoke digital platforms solving real operational problems.", href: "#software" },
  { num: "05", name: "Mobile Applications", desc: "Polished mobile experiences for iOS, Android, and beyond.", href: "#mobile" },
  { num: "06", name: "Cloud & DevOps", desc: "Reliable infrastructure and deployment pipelines behind every product.", href: "#cloud" },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Understand the business, users, goals, and challenges in depth." },
  { num: "02", title: "Define", desc: "Turn requirements into a clear product strategy and roadmap." },
  { num: "03", title: "Design", desc: "Create the visual language, UX, and interaction system." },
  { num: "04", title: "Develop", desc: "Build scalable, maintainable, production-ready technology." },
  { num: "05", title: "Launch", desc: "Test, optimise, deploy, and bring the product to life." },
  { num: "06", title: "Scale", desc: "Improve, maintain, and evolve the product over time." },
];

const techCategories = [
  { title: "Frontend", pills: ["React", "Next.js", "Vue", "HTML/CSS", "Tailwind"] },
  { title: "Backend", pills: ["Node.js", "Laravel", "PHP", "Python"] },
  { title: "Database", pills: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"] },
  { title: "Cloud & Infra", pills: ["AWS", "Linux", "Docker", "Git / CI/CD"] },
  { title: "E-Commerce", pills: ["Shopify", "WooCommerce"] },
];

const whyItems = [
  { num: "01", title: "Strategy before pixels.", desc: "Every project starts with understanding the problem. We design with purpose." },
  { num: "02", title: "Engineering without compromise.", desc: "Clean, scalable technology built for the long term — not the deadline." },
  { num: "03", title: "Designed for real users.", desc: "Beautiful interfaces backed by thoughtful UX research and clear hierarchy." },
  { num: "04", title: "Built to evolve.", desc: "Products designed to adapt and grow as your business scales and changes." },
];

const workItems = [
  { tags: ["E-Commerce", "Shopify"], name: "Orangebabe Kids Store", desc: "A vibrant Shopify-powered store driving 40% higher conversion for a children's apparel brand.", bg: "linear-gradient(135deg, #fff7f0 0%, #ffe8d6 100%)" },
  { tags: ["SaaS", "Node.js"], name: "Lumen CRM Platform", desc: "End-to-end CRM and analytics dashboard built for a fast-growing fintech startup.", bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)" },
  { tags: ["Brand", "Web"], name: "Lumen Brand Identity", desc: "Complete visual identity and marketing site for a Series A fintech company.", bg: "linear-gradient(135deg, #fff7f0 0%, #ff6a0015 100%)" },
  { tags: ["Mobile", "React Native"], name: "TrackR Field App", desc: "React Native workforce management app with real-time GPS and offline capabilities.", bg: "linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%)" },
];

const faqItems = [
  { q: "What type of projects do you work on?", a: "We work on digital product projects of all sizes — from startup MVPs to enterprise platforms. Our sweet spot is building things that are complex enough to be interesting and important enough to matter." },
  { q: "How long does a typical project take?", a: "It depends on scope. A focused website or MVP can be delivered in 6–10 weeks. A full SaaS platform or complex e-commerce build typically runs 3–6 months. We'll give you a clear timeline after the discovery phase." },
  { q: "Can you work with an existing application?", a: "Absolutely. We regularly step into existing codebases for audits, refactors, feature development, and performance optimisation. We're comfortable in messy environments." },
  { q: "Do you provide UI/UX design?", a: "Yes. Design is a core part of every project we take on. We don't separate design from development — the two disciplines work together from day one." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer retainer-based maintenance and support packages for all products we deliver. We also take on maintenance for projects we didn't build." },
  { q: "What technologies do you work with?", a: "We primarily build with React, Next.js, Node.js, Laravel, and PHP on the backend. For mobile, we use React Native and Flutter. For cloud, we deploy on AWS and Linux servers." },
  { q: "How do we start a project?", a: "Simple — reach out via the contact form or book a call. We'll have a short discovery conversation, understand your goals, and come back with a clear proposal and timeline." },
];

/* ─────────── COMPONENTS ─────────── */

// HeroSection replaced by InnerBanner

function OverviewSection() {
  const cards: { num: string; name: string; href: string; desc: string; icon: React.ReactNode; featured?: boolean; image?: string; imagePos?: 'left'|'right'|'top' }[] = [
    {
      num: "01", name: "Strategy & Consulting", href: "#strategy",
      desc: "Addressing your core brand strategy to connect directly with people. We dive deep into market research, user personas, and competitive analysis to build a strong foundation for scale.",
      image: "/assets/images/bento-strategy.jpg",
      imagePos: "left",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
    },
    {
      num: "02", name: "Brand Identity", href: "#brand",
      desc: "Positioning your brand to be exactly what people need it to be. We craft compelling visual systems, memorable logos, and strategic messaging frameworks that truly resonate with your target audience.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
    {
      num: "03", name: "UI / UX Design", href: "#design",
      desc: "Designing interfaces that perform, delight users, and drive conversions. Our approach blends aesthetic excellence with cognitive psychology to create seamless user journeys.",
      image: "/assets/images/bento-ui-ux.jpg",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
    },
    {
      num: "04", name: "Web Development", href: "#web-dev",
      desc: "Building fast, responsive websites and powerful web applications. We engineer secure, scalable, and high-performance digital platforms using modern tech stacks to drive your business forward.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
    },
    {
      num: "05", name: "Mobile App Development", href: "#mobile",
      desc: "Putting your business directly in their hands with engaging experiences. We build high-performance applications for iOS and Android using modern frameworks.",
      image: "/assets/images/bento-mobile.jpg",
      imagePos: "right",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
    },
    {
      num: "06", name: "E-Commerce Solutions", href: "#ecommerce",
      desc: "Creating digital experiences that stand out and capture your audience. We build high-conversion online stores with seamless payment integrations, intuitive product discovery, and robust inventory management.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
    },
    {
      num: "07", name: "AI & Custom Software", href: "#software",
      desc: "Driving your brand&apos;s sales directly to the market with built-to-convert solutions. We engineer robust software tailored exactly to your complex operational needs.",
      image: "/assets/images/bento-ai.jpg",
      imagePos: "left",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      num: "08", name: "Cloud & DevOps", href: "#cloud",
      desc: "Reliable infrastructure and deployment pipelines behind every product. We architect secure, highly available cloud environments and automated CI/CD workflows to ensure your applications run flawlessly at any scale.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.overview} id="services-overview">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.overviewHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowDot} />
              OUR SERVICES
            </span>
            <h2 className={styles.overviewHeadline}>
              Everything your product needs<span className={styles.overviewDot}>.</span>
            </h2>
          </div>
          <a href="/contact" className={styles.overviewCta}>
            EXPLORE WHAT WE DO →
          </a>
        </div>

        {/* 4-col card grid */}
        <div className={styles.servicesGrid}>
          {cards.map((s, idx) => {
            let bentoClass = styles.bentoNormal;
            if (idx === 0 || idx === 4 || idx === 6) bentoClass = styles.bentoWide;
            if (idx === 2) bentoClass = styles.bentoTall;

            // Scatter offsets for each card
            const scatter = [
              { rot: -1.2, tx: -3, ty: 2 },
              { rot: 0.8, tx: 2, ty: -3 },
              { rot: -0.6, tx: -1, ty: 4 },
              { rot: 1.4, tx: 3, ty: 1 },
              { rot: 0.9, tx: -2, ty: -2 },
              { rot: -1.1, tx: 4, ty: 3 },
              { rot: 0.5, tx: -3, ty: 1 },
              { rot: -1.5, tx: 2, ty: -4 },
            ];
            const sc = scatter[idx] || { rot: 0, tx: 0, ty: 0 };

            return (
              <TiltCard key={s.num} intensity={12} className={bentoClass}>
                <a href={s.href} className={`${styles.serviceCard} ${s.featured ? styles.serviceCardFeatured : ""} ${s.imagePos === 'left' ? styles.cardImgLeft : s.imagePos === 'right' ? styles.cardImgRight : ""}`} style={{ height: '100%', '--rot': `${sc.rot}deg`, '--tx': `${sc.tx}px`, '--ty': `${sc.ty}px` } as React.CSSProperties}>
                  {s.image && (
                    <div className={styles.serviceCardImage}>
                      <img src={s.image} alt={s.name} />
                    </div>
                  )}
                  <div className={styles.serviceCardContent}>
                    {/* Top row: icon + arrow */}
                    <div className={styles.serviceCardTop}>
                      <span className={styles.serviceCardIcon}>{s.icon}</span>
                      <span className={styles.serviceArrow}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </div>
                    <div className={styles.serviceName}>{s.name}</div>
                    <p className={styles.serviceDesc} dangerouslySetInnerHTML={{ __html: s.desc }} />
                  </div>
                </a>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function StrategySection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="strategy">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />01 / STRATEGY & CONSULTING</span>
            <h2 className={styles.serviceHeadline}>Vision. Planning. Scale<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Product Strategy", "Market Research", "Digital Transformation", "Business Analysis", "Go-To-Market", "Roadmapping"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Miro", "Notion", "Figma", "Maze"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹50,000 - ₹2,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 - 4 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/strategy_story.png" alt="strategy Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function BrandSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="brand">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />02 / BRAND IDENTITY</span>
            <h2 className={styles.serviceHeadline}>Identity. Voice. Presence<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Logo Design", "Brand Guidelines", "Typography & Color", "Messaging Framework", "Brand Strategy", "Visual Assets"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Illustrator", "Photoshop", "Figma", "After Effects"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹80,000 - ₹3,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>3 - 6 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/brand_story.png" alt="brand Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function WebDevSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="web-dev">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />04 / WEB DEVELOPMENT</span>
            <h2 className={styles.serviceHeadline}>Speed. Scale. Impact<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Corporate Websites", "Business Websites", "Web Applications", "CMS Development", "Custom Portals", "API Integration", "Performance Optimisation"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["React", "Next.js", "Node.js", "PHP", "Laravel"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹60,000 - ₹2,50,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>3 - 6 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/webdev_story.png" alt="web-dev Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function DesignSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgDarkOrange}`} id="design">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />03 / UI/UX & PRODUCT DESIGN</span>
            <h2 className={styles.serviceHeadline}>Aesthetic. Usability. Delight<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["UX Research", "Wireframing", "UI Design", "Design Systems", "Prototyping", "Interaction Design", "Website Redesign"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Figma", "Framer", "Sketch", "Principle"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹40,000 - ₹1,50,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>2 - 4 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/design_story.jpg" alt="design Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function EcommerceSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgDarkOrange}`} id="ecommerce">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />06 / E-COMMERCE</span>
            <h2 className={styles.serviceHeadline}>Conversion. Flow. Growth<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Shopify Development", "WooCommerce", "Custom E-Commerce", "Payment Integration", "Product Management", "API Integration", "E-Commerce Automation"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["Shopify", "Stripe", "Next.js", "GraphQL"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹80,000 - ₹3,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>4 - 8 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/ecommerce_story.jpg" alt="ecommerce Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function SoftwareSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgLightOrange}`} id="software">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />07 / AI & CUSTOM SOFTWARE</span>
            <h2 className={styles.serviceHeadline}>Logic. Automation. Power<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["CRM", "ERP", "SaaS Platforms", "Business Dashboards", "Booking Systems", "Real-time Apps", "Business Automation", "API-driven Platforms"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["AWS", "Docker", "PostgreSQL", "TypeScript"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹2,50,000+</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>8 - 16 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/software_story.png" alt="software Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function MobileSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="mobile">
      <div className={styles.container}>
        <div className={styles.serviceSectionInner}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />05 / MOBILE APPLICATIONS</span>
            <h2 className={styles.serviceHeadline}>Native. Fluid. Engaging<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["React Native", "Flutter", "Android & iOS", "API Integration", "Push Notifications", "Real-time Features"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["React Native", "Flutter", "Firebase", "Swift"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>₹1,50,000 - ₹4,00,000</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>6 - 12 Weeks</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/mobile_story.png" alt="mobile Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function CloudSection() {
  return (
    <section className={`${styles.serviceSection} ${styles.bgWhite}`} id="cloud">
      <div className={styles.container}>
        <div className={`${styles.serviceSectionInner} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <span className={styles.sectionEyebrow}><span className={styles.sectionEyebrowDot} />08 / CLOUD & DEVOPS</span>
            <h2 className={styles.serviceHeadline}>Reliable. Secure. Scalable<span className={styles.overviewDot}>.</span></h2>
            <ul className={styles.capabilitiesList}>
              {["Cloud Deployment", "AWS", "Linux Server Management", "CI/CD", "SSL & Security", "Performance Optimisation", "Monitoring", "App Maintenance"].map(c => <li key={c}>{c}</li>)}
            </ul>
            <div className={styles.serviceTools}>
              {["AWS", "GitHub Actions", "Docker", "Linux"].map(t => (
                <span key={t} className={styles.toolIcon} title={t}>{getIcon(t)} {t}</span>
              ))}
            </div>
            <div className={styles.serviceMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Investment</span>
                <span className={styles.metaValue}>Custom</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>Ongoing</span>
              </div>
            </div>
            <Link href="/contact" className={styles.moreDetailsBtn}>More details</Link>
          </div>

          <div className={styles.serviceVisual}><img src="/assets/services/cloud_story.png" alt="cloud Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.processGlow} />
      <div className={styles.container}>
        <div className={styles.processHeader}>
          <span className={styles.sectionEyebrowDark}>HOW WE WORK</span>
          <h2 className={styles.processHeadline}>From first idea to a product people love to use.</h2>
        </div>
        <div className={styles.processSteps}>
          {processSteps.map((s) => (
            <div key={s.num} className={styles.processStep}>
              <span className={styles.processStepNum}>{s.num} — {s.title.toUpperCase()}</span>
              <h3 className={styles.processStepTitle}>{s.title}</h3>
              <p className={styles.processStepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.techStack} id="tech">
      <div className={styles.container}>
        <div className={styles.overviewHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowDot} />
              THE TECHNOLOGY BEHIND THE WORK
            </span>
            <h2 className={styles.overviewHeadline}>
              The right technology for the right problem<span className={styles.overviewDot}>.</span>
            </h2>
          </div>
        </div>
        
        <div className={styles.techTabsContainer}>
          <div className={styles.techTabsHeader}>
            {techCategories.map((cat, idx) => (
              <button 
                key={cat.title} 
                className={`${styles.techTabBtn} ${activeTab === idx ? styles.techTabBtnActive : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          <div className={styles.techTabContent}>
            {techCategories[activeTab].pills.map(p => (
              <div key={p} className={styles.techPill}>{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className={styles.container}>
        <div className={styles.whyHeader}>
          <span className={styles.sectionEyebrow}>WHY US</span>
          <h2 className={styles.whyHeadline}>We don't just build websites. We build digital products with purpose.</h2>
        </div>
        <div className={styles.whyGrid}>
          {whyItems.map((item) => (
            <div key={item.num} className={styles.whyItem}>
              <span className={styles.whyNum}>{item.num}</span>
              <h3 className={styles.whyItemTitle}>{item.title}</h3>
              <p className={styles.whyItemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className={styles.work} id="selected-work">
      <div className={styles.container}>
        <div className={styles.workHeader}>
          <span className={styles.sectionEyebrow}>SELECTED WORK</span>
          <h2 className={styles.workHeadline}>A few things we&apos;ve built.</h2>
        </div>
        <div className={styles.workGrid}>
          {workItems.map((w) => (
            <TiltCard key={w.name} intensity={8}>
              <div className={styles.workCard} style={{ height: '100%' }}>
                <div className={styles.workCardImg}>
                  <div className={styles.workImgFallback} style={{ background: w.bg }} />
                </div>
                <div className={styles.workCardMeta}>
                  <div className={styles.workCardTags}>
                    {w.tags.map(t => <span key={t} className={styles.workCardTag}>{t}</span>)}
                  </div>
                  <h3 className={styles.workCardName}>{w.name}</h3>
                  <p className={styles.workCardDesc}>{w.desc}</p>
                  <Link href="/portfolio" className={styles.workCardLink}>
                    View Case Study →
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>QUESTIONS</span>
            <h2 className={styles.faqHeadline}>Things you might want to know.</h2>
            <p className={styles.faqLeftSub}>
              Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ul className={styles.faqList}>
            {faqItems.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <li key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>+</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <p className={styles.faqAnswerInner}>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────── MAIN EXPORT ─────────── */
export default function ServicesPage() {
  return (
    <>
      <InnerBanner
        title="We Build. We Design. We Deliver."
        description="Web development, UI/UX design, e-commerce, custom software, mobile apps & cloud — end-to-end digital services for ambitious businesses."
        bgImage="/assets/images/office.jpg"
      />
      <OverviewSection />
      <StrategySection />
      <BrandSection />
      <DesignSection />
      <WebDevSection />
      <MobileSection />
      <EcommerceSection />
      <SoftwareSection />
      <CloudSection />
      <ProcessSection />
      <TechStackSection />
      <FinalCta />
    </>
  );
}

// force reload
// re-fetch
