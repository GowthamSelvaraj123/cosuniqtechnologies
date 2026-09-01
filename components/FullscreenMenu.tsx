"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.css";


interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Study", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Academy", href: "/academy" }
];

// Stagger variants for the container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Reveal variants for each link
const linkVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  },
  exit: { 
    opacity: 0, 
    y: -50, 
    transition: { ease: "easeInOut", duration: 0.3 }
  }
};

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.menuOverlay}
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >

          <motion.div 
            className={styles.menuContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, i) => (
              <motion.div key={i} variants={linkVariants}>
                <Link href={link.href} className={styles.navLink} onClick={onClose}>
                  <div className={styles.linkInner}>
                    <span>{link.name}</span>
                    <span className={styles.arrow}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.menuFooter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          >
            <Link href="/contact" className={styles.contactCTA} onClick={onClose}>
              Let's build something 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
