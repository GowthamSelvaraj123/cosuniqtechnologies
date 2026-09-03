"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";
import { SiX } from "react-icons/si";
import styles from "./Header.module.css";


interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isAcademy?: boolean;
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

export default function FullscreenMenu({ isOpen, onClose, isAcademy }: FullscreenMenuProps) {
  const handleLinkClick = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`${styles.menuOverlay} ${isAcademy ? styles.academyTheme : ''}`}
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >

          <div className={styles.menuGrid}>
            <motion.div 
              className={styles.menuContent}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link, i) => (
                <motion.div key={i} variants={linkVariants}>
                  <Link href={link.href} className={styles.navLink} onClick={handleLinkClick}>
                    <div className={styles.linkInner}>
                      <span className={styles.navNumber}>0{i + 1}</span>
                      <span className={styles.navText}>{link.name}</span>
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
              className={styles.menuRight}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.5 } }}
              exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
            >
              <div className={styles.menuRightBlock}>
                <h4>Get in Touch</h4>
                <a href="mailto:cosuniqtechnologies@gmail.com" onClick={handleLinkClick}>cosuniqtechnologies@gmail.com</a>
                <a href="tel:+917358696546" onClick={handleLinkClick}>+91 73586 96546</a>
              </div>
              
              <div className={styles.menuRightBlock}>
                <h4>Follow Us</h4>
                <div className={styles.menuSocials}>
                  <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                  <a href="#" aria-label="YouTube"><FiYoutube /></a>
                  <a href="#" aria-label="X"><SiX /></a>
                  <a href="#" aria-label="Instagram"><FiInstagram /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
