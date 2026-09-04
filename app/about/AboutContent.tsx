"use client";

import { useRef } from "react";
import Link from "next/link";
import FinalCta from "../../components/FinalCta";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import ParticleAnimal from "../../components/ParticleAnimal";
import styles from "./About.module.css";

const fadeUpParams = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const teamSliderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const slideTeam = (direction: 'left' | 'right') => {
    if (teamSliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      teamSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start center", "end center"]
  });
  
  const lineScale = useTransform(storyProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      <InitReveal />
      
      {/* 01 — BANNER (Existing) */}
      <InnerBanner 
        eyebrow={<><span className="spark spark--inline" style={{ backgroundColor: '#ffffff' }} />About Us</>}
        title="We. Build. Uniq."
        description="Cosuniq Technologies is a digital solutions company blending software engineering with brand and media — so your product, presence, and story stay aligned."
        bgImage="/assets/images/team.png"
      />

      {/* 02 — WHO WE ARE */}
      <section className={styles.whoWeAre}>
        <div className={`container ${styles.whoGrid}`}>
          <motion.div className={styles.whoText} {...fadeUpParams}>
            <span className={`eyebrow ${styles.eyebrowWrap}`}>
              <span className="spark spark--inline" />
              Who We Are
            </span>
            <h2 className={styles.whoHeadline}>
              Dream<span className={styles.dot}>.</span> Design<span className={styles.dot}>.</span> Deliver<span className={styles.dot}>.</span>
            </h2>
            <p className={styles.whoDescription}>We are a creative technology team bringing strategy, design, and development together to turn ideas into meaningful digital experiences.</p>
          </motion.div>
          <motion.div 
            className={styles.whoVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ParticleAnimal animal="🦋" />
          </motion.div>
        </div>
      </section>

      {/* 03 — OUR STORY */}
      <section className={`${styles.storySection} ${styles.sectionPadding}`} ref={storyRef}>
        <div className={styles.floatingIconContainer}>
          {[
            // 1. Stone Tool
            { path: "M14.5 2 2 14.5l3.5 3.5 12.5-12.5L14.5 2zM6 18c-2 2-4 2-4 2s0-2 2-4", size: 28, top: "5%", left: "15%", color: "#888", opacity: 0.35, delay: 0 },
            // 2. Fire
            { path: "M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z", size: 32, top: "38%", left: "8%", color: "#888", opacity: 0.4, delay: 0.2 },
            // 3. Wheel
            { path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 14a2 2 0 100-4 2 2 0 000 4z M12 2v8 M12 14v8 M4.93 4.93l5.66 5.66 M13.41 13.41l5.66 5.66 M2 12h8 M14 12h8 M4.93 19.07l5.66-5.66 M13.41 10.59l5.66-5.66", size: 40, top: "12%", left: "45%", color: "#888", opacity: 0.5, delay: 0.6 },
            // 4. Electricity
            { path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", size: 32, top: "28%", left: "60%", color: "#999", opacity: 0.6, delay: 1.0 },
            // 5. Internet
            { path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z", size: 40, top: "35%", left: "80%", color: "#aaa", opacity: 0.75, delay: 1.4 },
          ].map((icon: any, idx) => (
            <motion.div
              key={idx}
              className={styles.floatingIcon}
              style={{
                top: icon.top,
                left: icon.left,
                right: icon.right,
                bottom: icon.bottom,
                opacity: icon.opacity,
                filter: icon.glow ? `drop-shadow(0 0 8px ${icon.color})` : "none"
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: icon.opacity }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: icon.delay, ease: "easeOut" }}
            >
              <motion.svg
                width={icon.size}
                height={icon.size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={icon.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-3, 3, -3]
                }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: icon.delay
                }}
              >
                <path d={icon.path} />
              </motion.svg>
            </motion.div>
          ))}
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.storyTopRow}>
            <motion.div className={styles.storyHeader} {...fadeUpParams}>
              <span className={`eyebrow ${styles.eyebrowWrap}`}>
                <span className="spark spark--inline" />
                Our Story
              </span>
              <h2 className={styles.whoHeadline}>
                The Evolution of COSUNIQ<span className={styles.dot}>.</span>
              </h2>
            </motion.div>

            <motion.div 
              className={styles.evolutionImageWrapper}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/assets/images/evolution-new.png" 
                alt="The Evolution of Cosuniq" 
                width={1920} 
                height={1080} 
                className={styles.evolutionImage}
                quality={90}
                unoptimized
              />
            </motion.div>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineLaser}></div>

            {[
              { title: "Survival", desc: "A primal instinct to bridge the gap between creative vision and execution." },
              { title: "Foundation", desc: "Establishing our core principles of strategy, design, and raw engineering." },
              { title: "Knowledge", desc: "Gathering insights and refining our technical capabilities for the modern web." },
              { title: "Evolution", desc: "Expanding into a full-service creative agency with immersive media production." },
              { title: "Innovation", desc: "Pushing boundaries with cutting-edge architectures and futuristic design." },
              { title: "Vision", desc: "Today, we operate as a unified creative technology partner for global brands." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineStep}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div 
                  className={styles.timelineDot}
                  style={{ "--dot-delay": `${index * 1}s` } as React.CSSProperties}
                ></div>
                <div className={styles.timelineCard}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — VISION + MISSION */}
      <section className={styles.visionMissionWrapper}>
        <div className={styles.visionMission}>
          <motion.div 
            className={`${styles.vmBlock} ${styles.visionBlock}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`eyebrow ${styles.eyebrowWrap} ${styles.visionEyebrow}`} style={{ marginBottom: '3rem', display: 'inline-flex', alignSelf: 'flex-start' }}>
              <span className="spark spark--inline" />
              Vision
            </div>
            <div className={styles.vmText}>
              To become the trusted creative technology partner for ambitious businesses shaping what comes next<span className={styles.visionDot}>.</span>
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.vmBlock} ${styles.missionBlock}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`eyebrow ${styles.eyebrowWrap} ${styles.missionEyebrow}`} style={{ marginBottom: '3rem', display: 'inline-flex', alignSelf: 'flex-start' }}>
              <span className="spark spark--inline" />
              Mission
            </div>
            <div className={styles.vmText}>
              To transform ideas into purposeful brands and high-performing digital experiences that create lasting impact<span className={styles.dot}>.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 05 — OUR TEAM */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sliderHeader}>
            <motion.div className={styles.teamHeader} {...fadeUpParams}>
              <div className={`eyebrow ${styles.eyebrowWrap}`} style={{ marginBottom: '2rem', display: 'inline-flex' }}>
                <span className="spark spark--inline" />
                OUR TEAM
              </div>
              <h2 className={styles.teamHeadline}>The minds behind the magic<span className={styles.dot}>.</span></h2>
            </motion.div>
            
            <motion.div className={styles.sliderControls} {...fadeUpParams}>
              <button onClick={() => slideTeam('left')} className={styles.controlBtn} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>
              <button onClick={() => slideTeam('right')} className={styles.controlBtn} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.teamGrid}
            ref={teamSliderRef}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { name: "Gowtham", role: "Founder / CEO", img: "/assets/images/person-businessman.jpg" },
              { name: "Kowsalya", role: "Business Advisor", img: "/assets/images/person-woman-phone.jpg" },
              { name: "Dinesh babu.", role: "Investor", img: "/assets/images/team.jpg" },
              { name: "Manikandan", role: "Fullstack Designer and Developer", img: "/assets/images/person-celebrate.jpg" },
              { name: "Sumathi", role: "Fullstack developer", img: "/assets/images/person-woman-phone.jpg" },
              { name: "Srilekha", role: "Fullstack developer", img: "/assets/images/person-celebrate.jpg" }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className={styles.teamCard}
                variants={{
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className={styles.teamImageWrapper}>
                  <img src={member.img} alt={member.name} className={styles.teamImage} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>
                    {member.name}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.teamArrow}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06 — FINAL CTA */}
      <FinalCta />
    </div>
  );
}
