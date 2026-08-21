"use client";

import React, { useRef, useState, useEffect, CSSProperties } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Link from "next/link";
import styles from "./CapabilitiesUniverse.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — Cards orbit the protected central zone (approx. 25–75% x, 30–70% y)
// Positions follow the spec exactly: top/bottom + left/right % values
// ─────────────────────────────────────────────────────────────────────────────
const services: ServiceItem[] = [
  {
    id: "branding",
    name: "BRANDING",
    desc: "Make your brand memorable.",
    pos: { top: "20%", left: "6%" },
    rot: -4, width: 210, floatDur: 5.2, floatDelay: 0.0,
    related: ["websites", "uiux"],
  },
  {
    id: "strategy",
    name: "STRATEGY",
    desc: "Clear pathways for growth.",
    pos: { top: "14%", left: "40%" },
    rot: 2, width: 220, floatDur: 6.4, floatDelay: 0.8,
    related: ["branding", "ai"],
  },
  {
    id: "ai",
    name: "AI SOLUTIONS",
    desc: "Build with intelligence.",
    pos: { top: "19%", right: "6%" },
    rot: 4, width: 210, floatDur: 4.8, floatDelay: 1.6,
    related: ["webapps", "strategy"],
  },
  {
    id: "webapps",
    name: "WEB APPS",
    desc: "Powerful tools for your business.",
    pos: { top: "44%", left: "3%" },
    rot: -2, width: 220, floatDur: 5.7, floatDelay: 0.4,
    related: ["ai", "strategy"],
  },
  {
    id: "mobile",
    name: "MOBILE APPS",
    desc: "Your business in their hands.",
    pos: { top: "44%", right: "3%" },
    rot: 3, width: 215, floatDur: 6.1, floatDelay: 1.2,
    related: ["uiux", "webapps"],
  },
  {
    id: "uiux",
    name: "UI / UX",
    desc: "Design that performs.",
    pos: { top: "68%", left: "7%" },
    rot: -3, width: 200, floatDur: 4.9, floatDelay: 2.0,
    related: ["websites", "branding", "mobile"],
  },
  {
    id: "websites",
    name: "WEBSITES",
    desc: "Digital experiences that stand out.",
    pos: { top: "71%", left: "38%" },
    rot: 2, width: 230, floatDur: 5.8, floatDelay: 0.6,
    related: ["branding", "uiux"],
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    desc: "Stores built to convert.",
    pos: { top: "68%", right: "6%" },
    rot: -3, width: 215, floatDur: 6.6, floatDelay: 1.4,
    related: ["websites", "branding"],
  },
];

type ServiceItem = {
  id: string;
  name: string;
  desc: string;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  rot: number;
  width: number;
  floatDur: number;
  floatDelay: number;
  related: string[];
};

// ─────────────────────────────────────────────────────────────────────────────
// THREE.JS PARTICLE FIELD
// ─────────────────────────────────────────────────────────────────────────────
const particleVert = `
  uniform float uTime;
  attribute float aScale;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float r = length(p.xy);
    float a = atan(p.y, p.x) + uTime * (0.04 / (r + 1.0));
    r += sin(uTime * 0.25 + p.x * 1.2) * 0.2;
    p.x = cos(a) * r;
    p.y = sin(a) * r;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aScale * (5.5 / -mv.z);
    gl_Position  = projectionMatrix * mv;
    vAlpha = smoothstep(14.0, 3.0, r) * 0.18;
  }
`;
const particleFrag = `
  varying float vAlpha;
  void main() {
    vec2 uv = 2.0 * gl_PointCoord - 1.0;
    if (dot(uv, uv) > 1.0) discard;
    float a = (1.0 - smoothstep(0.4, 1.0, dot(uv, uv))) * vAlpha;
    gl_FragColor = vec4(0.85, 0.28, 0.0, a);
  }
`;

function OrbitalParticles() {
  const mesh = useRef<THREE.Points>(null);
  const mat  = useRef<THREE.ShaderMaterial>(null);
  const N = 1600;

  const [pos, sc] = React.useMemo(() => {
    const p = new Float32Array(N * 3);
    const s = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 4 + Math.random() * 12;
      p[i * 3]     = Math.cos(theta) * r;
      p[i * 3 + 1] = Math.sin(theta) * r;
      p[i * 3 + 2] = (Math.random() - 0.5) * 3;
      s[i] = Math.random() + 0.4;
    }
    return [p, s];
  }, []);

  useFrame(({ clock }) => {
    if (mat.current)  mat.current.uniforms.uTime.value = clock.elapsedTime;
    if (mesh.current) mesh.current.rotation.z = clock.elapsedTime * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={N} array={pos} itemSize={3} />
        <bufferAttribute attach="attributes-aScale"   count={N} array={sc}  itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={particleVert}
        fragmentShader={particleFrag}
        uniforms={{ uTime: { value: 0 } }}
        transparent depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD — three-layer animation separation:
//  1. cardOrbit (motion.div)  → entrance fade-in + absolute position
//  2. cardFloat (plain div)   → CSS keyframe float (no Framer conflict)
//  3. card (motion.div)       → spring magnetic x/y + hover scale
// ─────────────────────────────────────────────────────────────────────────────
function ScatterCard({
  service,
  index,
  activeService,
  setActiveService,
}: {
  service: ServiceItem;
  index: number;
  activeService: string | null;
  setActiveService: (id: string | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const sX = useSpring(mX, { stiffness: 65, damping: 15 });
  const sY = useSpring(mY, { stiffness: 65, damping: 15 });
  const sScale = useSpring(1, { stiffness: 180, damping: 20 });

  // Magnetic pull toward cursor
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const r  = cardRef.current.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const RADIUS = 280;
      if (dist < RADIUS) {
        const strength = (1 - dist / RADIUS) * 0.11;
        mX.set(dx * strength);
        mY.set(dy * strength);
      } else {
        mX.set(0);
        mY.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mX, mY]);

  const isHovered   = activeService === service.id;
  const isRelated   = !!activeService && service.related.includes(activeService);
  const isUnrelated = !!activeService && !isHovered && !isRelated;

  useEffect(() => {
    sScale.set(isHovered ? 1.04 : isUnrelated ? 0.96 : 1);
  }, [isHovered, isUnrelated, sScale]);

  const orbitStyle: CSSProperties = {
    ...service.pos,
    transform: `rotate(${service.rot}deg)`,
  };

  const floatStyle: CSSProperties = {
    animationDuration:  `${service.floatDur}s`,
    animationDelay:     `-${service.floatDelay}s`, // negative delay = phase offset
  };

  return (
    <motion.div
      className={styles.cardOrbit}
      style={orbitStyle}
      initial={{ opacity: 0, y: 16, scale: 0.88 }}
      whileInView={{ opacity: isUnrelated ? 0.38 : 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.55,
        delay: 0.25 + index * 0.07,
        type: "spring",
        stiffness: 80,
        damping: 16,
      }}
      animate={{ opacity: isUnrelated ? 0.38 : 1 }}
    >
      {/* Float animation — pure CSS, no Framer conflict */}
      <div className={styles.cardFloat} style={floatStyle}>

        {/* Magnetic / hover interaction */}
        <motion.div
          ref={cardRef}
          className={styles.card}
          style={{ x: sX, y: sY, scale: sScale, width: service.width }}
          onMouseEnter={() => setActiveService(service.id)}
          onMouseLeave={() => setActiveService(null)}
        >
          <div className={styles.cardTitle}>
            {service.name}
            <svg
              className={styles.arrowIcon}
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <p className={styles.cardDesc}>{service.desc}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function CapabilitiesUniverse() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className={styles.universeSection}>

      {/* Layer 1 — atmospheric glow + particles */}
      <div className={styles.centerGlow} />
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [0, 0, 15], fov: 44 }} dpr={[1, 1.5]}>
          <OrbitalParticles />
        </Canvas>
      </div>


      {/* Layer 3 — Central typography */}
      <motion.div
        className={styles.centerContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className={styles.headline}>
          Everything your brand needs<span className={styles.headlineDot}>.</span>
        </h2>
        <Link href="/services" className={styles.exploreCta}>
          Explore What We Do
          <svg
            className={styles.ctaArrow}
            width="14" height="14"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </motion.div>

      {/* Layer 2 — Orbiting service cards */}
      <div className={styles.scatterLayer}>
        {services.map((service, i) => (
          <ScatterCard
            key={service.id}
            service={service}
            index={i}
            activeService={activeService}
            setActiveService={setActiveService}
          />
        ))}
      </div>

    </section>
  );
}
