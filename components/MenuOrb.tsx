"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import styles from "./Header.module.css";

interface MenuOrbProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MenuOrb({ onClick, isOpen }: MenuOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Spring physics for smooth magnetic follow
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    // Disable magnetic hover on mobile devices
    if (window.innerWidth < 900) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center of orb
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Magnetic pull radius (px)
      const magneticRadius = 80;
      
      if (distance < magneticRadius) {
        setIsHovered(true);
        // Pull strength decreases as cursor gets further away from center
        const pullStrength = 1 - distance / magneticRadius;
        mouseX.set(distX * pullStrength * 0.4);
        mouseY.set(distY * pullStrength * 0.4);
      } else {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.orbWrapper} ref={orbRef}>
      <motion.button
        onClick={onClick}
        style={{
          x: mouseX,
          y: mouseY,
          width: "var(--orb-size, 54px)",
          height: "var(--orb-size, 54px)",
          borderRadius: "50%",
          background: isOpen ? "var(--text)" : "var(--white)",
          border: isOpen ? "1px solid var(--text)" : "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "none",
          position: "relative",
          overflow: "hidden",
          boxShadow: isHovered && !isOpen ? "0 8px 24px -8px rgba(255, 106, 0, 0.4)" : "none",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <motion.div
          animate={{
            rotate: isHovered && !isOpen ? 45 : 0,
            scale: isOpen ? 0.9 : 1
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{
            color: isOpen ? "var(--white)" : "var(--text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
