"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LiveMobileMockup.module.css";

interface LiveMobileMockupProps {
  activeFeature: string | null;
}

// These variants control the crossfade & slide animation when feature changes
const screenVariants = {
  initial: { opacity: 0, y: 15, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
};

export default function LiveMobileMockup({ activeFeature }: LiveMobileMockupProps) {
  
  // Always use brand orange glow
  const getGlowColor = () => {
    return "rgba(255, 107, 0, 0.25)";
  };

  // Renders different UI screens based on the active feature
  const renderScreenContent = () => {
    switch (activeFeature) {
      case "strategy":
        return (
          <div className={styles.screenContent} key="strategy">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Strategy & Consulting</h4>
              <p className={styles.realDesc}>Addressing your core brand strategy to connect directly with people.</p>
            </div>
            {/* Bar chart with an upward trend line */}
            <div className={styles.chartArea}>
              <motion.div className={styles.bar} style={{ background: '#eee' }} initial={{ height: 0 }} animate={{ height: '30%' }} transition={{ duration: 0.6, delay: 0.1 }} />
              <motion.div className={styles.bar} style={{ background: '#ddd' }} initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ duration: 0.6, delay: 0.2 }} />
              <motion.div className={styles.bar} style={{ background: '#ccc' }} initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ duration: 0.6, delay: 0.3 }} />
              <motion.div className={styles.bar} style={{ background: '#FF6B00' }} initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 0.6, delay: 0.4 }} />
              
              {/* Animated Trend Line SVG */}
              <svg className={styles.trendLine} viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M13,70 L38,50 L63,30 L88,0" 
                  fill="none" 
                  stroke="#111" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="88" cy="0" r="4" 
                  fill="#FF6B00"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                />
              </svg>
            </div>

            {/* Floating Goal Card */}
            <motion.div 
              style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FF6B00', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: '8px', background: '#111', width: '60%', borderRadius: '4px', marginBottom: '6px' }}></div>
                <div style={{ height: '6px', background: '#ddd', width: '80%', borderRadius: '3px' }}></div>
              </div>
            </motion.div>
          </div>
        );
      
      case "branding":
        return (
          <div className={styles.screenContent} key="branding">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Brand Identity</h4>
              <p className={styles.realDesc}>Positioning your brand to be exactly what people need it to be.</p>
            </div>
            {/* Typography and Colors */}
            <div className={styles.brandHero}>
              <motion.div 
                className={styles.typographyIcon}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Aa
              </motion.div>
            </div>
            <div className={styles.skeletonTitle} style={{ margin: '1rem auto 0.5rem', background: '#111', width: '40%' }}></div>
            <div className={styles.skeletonText} style={{ margin: '0 auto 1.5rem', width: '30%' }}></div>
            
            <div className={styles.colorPalette}>
              <motion.div className={styles.colorSwatch} style={{ background: '#111' }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#FF6B00' }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#ccc' }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#eee' }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}></motion.div>
            </div>
          </div>
        );

      case "uiux":
        return (
          <div className={styles.screenContent} key="uiux">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>UI / UX Design</h4>
              <p className={styles.realDesc}>Designing interfaces that perform, delight users, and drive conversions.</p>
            </div>
            {/* Wireframe to styled UI transition */}
            <motion.div 
              className={styles.uiuxHeroImage}
              animate={{ 
                background: ["#f5f5f5", "#FF6B00"], 
                borderColor: ["#ddd", "#FF6B00"] 
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className={styles.skeletonTitle} 
              style={{ width: '70%', margin: '20px auto 8px' }}
              animate={{ background: ["#eee", "#111"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className={styles.skeletonText} style={{ width: '50%', margin: '0 auto 24px' }}></div>
            <motion.div 
              className={styles.uiuxButton}
              animate={{ 
                background: ["#eee", "#111"], 
                color: ["rgba(0,0,0,0)", "#fff"], 
                width: ["50%", "80%"] 
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Get Started
            </motion.div>
          </div>
        );
        
      case "webdev":
        return (
          <div className={styles.screenContent} key="webdev">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Web Development</h4>
              <p className={styles.realDesc}>Creating digital experiences that stand out and capture your audience.</p>
            </div>
            <div className={styles.browserTop}>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
            </div>
            <div className={styles.browserContent}>
              {/* Simulated code typing */}
              <div className={styles.codeLine}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, ease: "linear" }} style={{ background: '#FF6B00' }} />
              </div>
              <div className={styles.codeLine} style={{ width: '80%' }}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 1, ease: "linear" }} style={{ background: '#111' }} />
              </div>
              <div className={styles.codeLine} style={{ width: '60%' }}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.6, delay: 1.8, ease: "linear" }} style={{ background: '#ccc' }} />
              </div>
              
              {/* Resulting UI block pops in */}
              <motion.div 
                className={styles.skeletonBlock}
                style={{ height: '50px', background: '#f5f5f5', marginTop: '20px', border: '1px solid #ddd' }}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2.5, type: "spring" }}
              ></motion.div>
            </div>
          </div>
        );

      case "mobile":
        return (
          <div className={styles.screenContent} key="mobile" style={{ padding: '20px 10px' }}>
            <div className={styles.header} style={{ padding: '0 10px' }}>
              <h4 className={styles.realTitle}>Mobile App Dev</h4>
              <p className={styles.realDesc}>Putting your business directly in their hands with engaging experiences.</p>
            </div>
            {/* Grid of app icons */}
            <div className={styles.appGrid}>
              {[1,2,3,4,5,6].map((i) => (
                <motion.div 
                  key={i} 
                  className={styles.appIcon}
                  style={{ background: i === 1 ? '#FF6B00' : '#eee' }}
                  whileHover={{ scale: 1.1 }}
                  animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                  transition={i === 1 ? { repeat: Infinity, duration: 2 } : {}}
                />
              ))}
            </div>
            {/* App Launch Animation */}
            <motion.div 
              className={styles.appLaunchScreen}
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: [0, 1, 1, 0], y: [100, 0, 0, 100], scale: [0.5, 1, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={styles.skeletonTitle} style={{ background: '#fff', width: '60%' }}></div>
              <div className={styles.skeletonText} style={{ background: 'rgba(255,255,255,0.7)', width: '40%' }}></div>
            </motion.div>
          </div>
        );

      case "ecommerce":
        return (
          <div className={styles.screenContent} key="ecommerce">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>E-Commerce</h4>
              <p className={styles.realDesc}>Driving your brand's sales directly to the market with built-to-convert stores.</p>
            </div>
            {/* Header with Cart Icon */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ position: 'relative' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <motion.div 
                  className={styles.cartBadge}
                  style={{ background: '#FF6B00', position: 'absolute', top: '-8px', right: '-8px', width: '16px', height: '16px', fontSize: '10px' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1, duration: 0.5 }}
                >1</motion.div>
              </div>
            </div>

            <div className={styles.productImage} style={{ background: '#f5f5f5', height: '140px', padding: 0 }}>
              {/* Product Placeholder (Shopping Bag) */}
              <motion.div 
                style={{ width: '50px', height: '60px', background: '#ddd', borderRadius: '4px', margin: 'auto', position: 'relative', marginTop: '40px' }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Bag Handle */}
                <div style={{ position: 'absolute', top: '-12px', left: '12px', right: '12px', height: '14px', border: '4px solid #ddd', borderBottom: 'none', borderRadius: '10px 10px 0 0' }}></div>
              </motion.div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', marginBottom: 'auto' }}>
              <div>
                <div className={styles.skeletonTitle} style={{ width: '80px', background: '#111', margin: '0 0 8px 0' }}></div>
                <div className={styles.skeletonText} style={{ width: '50px', background: '#ccc', margin: 0 }}></div>
              </div>
              <div style={{ fontWeight: '900', color: '#FF6B00', fontSize: '18px', lineHeight: 1 }}>$99</div>
            </div>
            
            {/* Add to cart click animation */}
            <motion.div 
              className={styles.checkoutBtn}
              style={{ background: '#111', color: '#fff', marginTop: '16px' }}
              animate={{ scale: [1, 0.95, 1], background: ["#111", "#FF6B00", "#111"] }}
              transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
            >Add to Cart</motion.div>
          </div>
        );

      case "ai":
        return (
          <div className={styles.screenContent} key="ai">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>AI & Custom Software</h4>
              <p className={styles.realDesc}>Building powerful digital tools that streamline your daily operations.</p>
            </div>
            <div className={styles.chatArea}>
              {/* User asks a question */}
              <motion.div 
                className={`${styles.chatBubble} ${styles.chatUser}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.skeletonText} style={{ background: 'rgba(255,255,255,0.8)', marginTop: 0 }}></div>
              </motion.div>
              
              {/* AI Typing Indicator */}
              <motion.div 
                className={styles.typingIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.8, duration: 1.5 }}
              >
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
              </motion.div>

              {/* AI Responds */}
              <motion.div 
                className={`${styles.chatBubble} ${styles.chatBot}`}
                initial={{ opacity: 0, x: -20, display: 'none' }}
                animate={{ opacity: 1, x: 0, display: 'block' }}
                transition={{ delay: 2.3 }}
              >
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '100%', marginBottom: '6px' }}></div>
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '80%', marginBottom: '6px' }}></div>
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '60%' }}></div>
              </motion.div>
            </div>
          </div>
        );

      case "cloud":
        return (
          <div className={styles.screenContent} key="cloud">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Cloud & DevOps</h4>
              <p className={styles.realDesc}>Reliable infrastructure and deployment pipelines behind every product.</p>
            </div>
            {/* Server Rack layout */}
            <div className={styles.cloudRackArea}>
              {[1, 2, 3].map((server, i) => (
                <div key={server} className={styles.serverRack}>
                  <div className={styles.serverDrive}></div>
                  <div className={styles.serverDrive}></div>
                  <div className={styles.serverLights}>
                    <motion.div 
                      className={styles.serverLight}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                      style={{ background: '#FF6B00' }}
                    />
                    <motion.div 
                      className={styles.serverLight}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
                      style={{ background: '#10b981' }} /* Keep green for server health */
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // Default/Fallback or when no specific feature is hovered
      default:
        return (
          <div className={styles.screenContent} key="default">
            <div className={styles.header}>
              <div className={styles.skeletonTitle} style={{ background: '#eee' }}></div>
            </div>
            <motion.div 
              className={styles.pulsingCircle}
              style={{ background: '#FF6B00' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <div className={styles.skeletonBlock}></div>
            <div className={styles.skeletonBlock}></div>
            <div className={styles.skeletonBlock}></div>
          </div>
        );
    }
  };

  return (
    <div className={styles.mockupContainer}>
      {/* Background glow behind the phone */}
      <div 
        className={styles.glow} 
        style={{ 
          background: getGlowColor(),
          transition: 'background 0.5s ease'
        }}
      ></div>
      
      {/* Phone Hardware Frame */}
      <div className={styles.phoneFrame}>
        <div className={styles.notch}></div>
        <div className={styles.screen}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFeature || "default"}
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.screenInner}
            >
              {renderScreenContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
