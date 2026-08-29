"use client";

import { useRef } from "react";
import Link from "next/link";
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
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start center", "end center"]
  });
  
  const lineScale = useTransform(storyProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.pageWrapper}>
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
            { path: "M14.5 2 2 14.5l3.5 3.5 12.5-12.5L14.5 2zM6 18c-2 2-4 2-4 2s0-2 2-4", size: 28, top: "8%", left: "5%", color: "#888", opacity: 0.35, delay: 0 },
            // 2. Fire
            { path: "M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z", size: 32, top: "55%", left: "8%", color: "#888", opacity: 0.4, delay: 0.2 },
            // 3. Writing
            { path: "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11l1 1", size: 28, top: "15%", left: "25%", color: "#888", opacity: 0.45, delay: 0.4 },
            // 4. Wheel
            { path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 14a2 2 0 100-4 2 2 0 000 4z M12 2v8 M12 14v8 M4.93 4.93l5.66 5.66 M13.41 13.41l5.66 5.66 M2 12h8 M14 12h8 M4.93 19.07l5.66-5.66 M13.41 10.59l5.66-5.66", size: 40, top: "70%", left: "30%", color: "#888", opacity: 0.5, delay: 0.6 },
            // 5. Gear
            { path: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z M12 15a3 3 0 100-6 3 3 0 000 6z", size: 36, top: "12%", left: "45%", color: "#999", opacity: 0.55, delay: 0.8 },
            // 6. Electricity
            { path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", size: 32, top: "45%", left: "65%", color: "#999", opacity: 0.6, delay: 1.0 },
            // 7. Computer
            { path: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z M12 16v4 M8 20h8", size: 36, top: "20%", left: "80%", color: "#aaa", opacity: 0.7, delay: 1.2 },
            // 8. Internet
            { path: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z", size: 40, top: "75%", left: "90%", color: "#aaa", opacity: 0.75, delay: 1.4 },
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
                style={{transform: "scale(-1)", top: "-109px", position:"absolute", width:"400px", right:"0px"}}
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
      <section className={styles.visionMission}>
        <motion.div 
          className={`${styles.vmBlock} ${styles.visionBlock}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.vmLabel}>Vision</div>
          <div className={styles.vmText}>
            To become the trusted creative technology partner for ambitious businesses shaping what comes next.
          </div>
        </motion.div>

        <motion.div 
          className={`${styles.vmBlock} ${styles.missionBlock}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.vmLabel}>Mission</div>
          <div className={styles.vmText}>
            To transform ideas into purposeful brands and high-performing digital experiences that create lasting impact.
          </div>
        </motion.div>
      </section>

      {/* 05 — WHAT WE BELIEVE */}
      <section className={`${styles.principlesSection} ${styles.sectionPadding}`}>
        <div className="container">
          <motion.div className={styles.principlesHeader} {...fadeUpParams}>
            <h2 className={styles.displayMedium}>What we believe.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              "Strategy before execution.",
              "Design with purpose.",
              "Technology that performs.",
              "Collaboration over handoffs.",
              "Quality without compromise."
            ].map((principle, index) => (
              <motion.div 
                key={index} 
                className={styles.principleItem}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className={styles.pNumber}>0{index + 1}</div>
                <div className={styles.pText}>{principle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06 — THE COSUNIQ DIFFERENCE */}
      <section className={`${styles.differenceSection} ${styles.sectionPadding}`}>
        <div className="container">
          <motion.div className={styles.diffHeader} {...fadeUpParams}>
            <h2 className={styles.displayLarge}>Think.<br/>Create.<br/>Build.</h2>
          </motion.div>

          <motion.div 
            className={styles.diffGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "THINK", desc: "Strategic thinking that creates clarity before execution. We define the 'why' before we build the 'what'." },
              { title: "CREATE", desc: "Purposeful creativity that makes brands distinctive and memorable across every digital touchpoint." },
              { title: "BUILD", desc: "Reliable technology that turns ideas into scalable, high-performing digital experiences." }
            ].map((col, index) => (
              <motion.div 
                key={index} 
                className={styles.diffColumn}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <h3 className={styles.diffTitle}>{col.title}</h3>
                <p className={styles.diffDesc}>{col.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07 — FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.ctaBgElement}></div>
        <div className={`container ${styles.ctaContent}`}>
          <motion.h2 
            className={styles.displayMedium}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Have an idea worth building?
          </motion.h2>
          
          <motion.p 
            className={styles.displaySmall}
            style={{ color: '#888' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's make it real.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/contact" className={styles.magneticBtn}>
              Start a Project 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
