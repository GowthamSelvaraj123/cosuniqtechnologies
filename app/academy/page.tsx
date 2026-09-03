"use client";

import React, { useState } from "react";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import AcademyHero from "../../components/AcademyHero";
import FinalCta from "../../components/FinalCta";
import styles from "./Academy.module.css";
import FAQItem from "./FAQItem";
import { FiBox, FiUsers, FiCode, FiCpu, FiLayout, FiServer, FiSliders, FiTool, FiTrendingUp, FiActivity, FiStar, FiAward, FiHeart, FiPackage, FiMapPin, FiCoffee, FiBookOpen, FiMic, FiAlertCircle, FiMap, FiUserCheck, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function Academy() {
  const [openTrack, setOpenTrack] = useState<number | null>(null);

  const academyTracks = [
    {
      id: 0,
      eyebrow: "Cosuniq Code",
      title: "AI Agentic Fullstack Engineering",
      desc: "Build modern AI-powered applications using full-stack engineering, APIs, agents and production workflows.",
      strikePrice: "₹49,999",
      price: "₹19,999",
      topics: ["AI Agents", "Full Stack", "APIs", "Databases", "Deployment", "Architecture", "Real Projects"],
      link: "#waitlist",
      linkText: "Enroll in Code →",
      isBundle: false
    },
    {
      id: 1,
      eyebrow: "Cosuniq Design",
      title: "Global Branding & Web Experience",
      desc: "Learn to create premium brands and digital experiences that communicate clearly and convert users.",
      strikePrice: "₹34,999",
      price: "₹14,999",
      topics: ["Branding", "UI/UX", "Design Systems", "Web Experience", "Conversion", "Portfolio"],
      link: "#waitlist",
      linkText: "Enroll in Design →",
      isBundle: false
    },
    {
      id: 2,
      eyebrow: "Cosuniq Founder",
      title: "Startup Launchpad",
      desc: "Turn ideas into MVPs with product strategy, branding, technology and go-to-market thinking.",
      strikePrice: "₹49,999",
      price: "₹19,999",
      topics: ["Idea Validation", "Product Strategy", "MVP", "Branding", "GTM", "Pitching"],
      link: "#waitlist",
      linkText: "Enroll in Founder →",
      isBundle: false
    },
    {
      id: 3,
      eyebrow: "Cosuniq Complete",
      title: "The Ultimate Builder Bundle",
      desc: "Master Code, Design, and Founder tracks. Become a true technical founder.",
      strikePrice: "₹1,19,999",
      price: "₹49,999",
      topics: ["All Code Topics", "All Design Topics", "All Founder Topics", "Priority Support", "Lifetime Updates"],
      link: "#waitlist",
      linkText: "Enroll in Complete →",
      isBundle: true
    }
  ];
  const socialApps = [
    {
      title: "LifeDrop",
      subtitle: "Emergency Blood & Platelet Connect",
      desc: "Help connect emergency patients with nearby blood and platelet donors through smart matching and real-time alerts.",
      tags: ["AI Matching", "GPS", "Emergency SOS"],
      link: "Join LifeDrop →",
      icon: <FiHeart size={24} />
    },
    {
      title: "MediShare",
      subtitle: "Medicine Donation Platform",
      desc: "Help connect eligible unused medicines with verified NGOs and community healthcare initiatives.",
      tags: ["AI OCR", "Expiry Detection", "NGO Network"],
      link: "Join MediShare →",
      icon: <FiPackage size={24} />
    },
    {
      title: "TreeTag",
      subtitle: "Digital Tree Tracker",
      desc: "Track planted trees, volunteer activities and long-term survival — turning tree planting into measurable impact.",
      tags: ["GPS Tagging", "AI Vision", "Impact Tracking"],
      link: "Join TreeTag →",
      icon: <FiMapPin size={24} />
    },
    {
      title: "E-Waste Hero",
      subtitle: "Digital E-Waste Collection",
      desc: "Make responsible e-waste disposal easier by connecting people with certified recyclers and collection partners.",
      tags: ["AI Identification", "Pickup Tracking", "Green Credits"],
      link: "Join E-Waste Hero →",
      icon: <FiCpu size={24} />
    },
    {
      title: "Annadata",
      subtitle: "Excess Food Rescue",
      desc: "Help redirect surplus food from events, restaurants and functions to organizations that need it.",
      tags: ["Smart Matching", "Route Optimization", "Real-Time"],
      link: "Join Annadata →",
      icon: <FiCoffee size={24} />
    },
    {
      title: "VidyaBridge",
      subtitle: "Rural Digital Mentorship",
      desc: "Connect college mentors with rural students for practical learning in English, mathematics, technology and more.",
      tags: ["AI Learning", "Mentorship", "Low-Bandwidth"],
      link: "Join VidyaBridge →",
      icon: <FiBookOpen size={24} />
    },
    {
      title: "Drishti Voice",
      subtitle: "AI Accessibility Assistant",
      desc: "Help make everyday information more accessible through AI-powered vision, OCR, voice and text-to-speech.",
      tags: ["Computer Vision", "Voice AI", "Accessibility"],
      link: "Join Drishti Voice →",
      icon: <FiMic size={24} />
    },
    {
      title: "StrayCare",
      subtitle: "Animal Rescue Coordination",
      desc: "Help citizens report injured animals and connect them with nearby rescuers, volunteers and veterinary support.",
      tags: ["AI Identification", "GPS", "Case Tracking"],
      link: "Join StrayCare →",
      icon: <FiAlertCircle size={24} />
    },
    {
      title: "CivicFix",
      subtitle: "Hyperlocal Civic Reporting",
      desc: "Report potholes, garbage, broken streetlights and other local issues — and track them from report to resolution.",
      tags: ["AI Detection", "Community", "Status Tracking"],
      link: "Join CivicFix →",
      icon: <FiMap size={24} />
    },
    {
      title: "SeniorCompanion",
      subtitle: "Digital Elderly Assistance Network",
      desc: "Connect elderly users with verified volunteers for everyday non-medical assistance and emergency SOS.",
      tags: ["Task Matching", "Risk Alerts", "Verification"],
      link: "Join SeniorCompanion →",
      icon: <FiUserCheck size={24} />
    }
  ];

  return (
    <main className={styles.academyRoot}>
      <InitReveal />
      <title>Academy | Cosuniq Technologies</title>
      <meta name="description" content="Cosuniq Academy - A practical, mentor-led learning environment for the next generation of AI engineers, designers and startup builders." />

      {/* 3. HERO SECTION */}
      <AcademyHero />

      {/* 4. TRUST SECTION */}
      <section className={styles.trustSection}>
        <div className="container reveal">
          <div className={styles.trustHeaderWrapper}>
            <div>
              <span className={styles.trustEyebrow}>
                <span className="spark spark--inline" style={{ background: '#005aff' }} />
                Why Cosuniq Academy
              </span>
              <h2 className={styles.trustHeadline}>
                Learn. Build. Ship. 10 Missions. One Purpose<span className={styles.trustDot}>.</span>
              </h2>
            </div>
          </div>

          <div className={styles.trustGrid}>
            
            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><StrategyIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Industry Experience</h4>
                <p>Learn directly from engineers and designers who build real products.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><WebAppsIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Project Based</h4>
                <p>No more tutorial hell. Build portfolios that get you hired.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><AIIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>AI First</h4>
                <p>Master AI tools to code faster, design smarter, and scale.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><UIUXIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Mentor Led</h4>
                <p>Get personalized feedback on your code and design architecture.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><ModernStackIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Modern Stack</h4>
                <p>Learn React, Next.js, and TypeScript—tools used by top startups.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><CareerReadyIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Career Ready</h4>
                <p>Mock interviews, resume building, and GitHub profile optimization.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><CommunityIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Global Community</h4>
                <p>Connect with peers, alumni, and global builders for life.</p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustCardTop}>
                <div className={styles.trustIcon}><MissionsIcon /></div>
                <div className={styles.trustCardArrow}><ArrowIcon /></div>
              </div>
              <div>
                <h4>Real Missions</h4>
                <p>Ship production-ready apps instead of building generic todo lists.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MEET YOUR MENTOR */}
      <section className={`${styles.section} ${styles.mentorSection}`}>
        <div className={`container ${styles.mentorGrid} reveal`}>
          <div className={styles.mentorImageWrapper}>
            <div className={styles.mentorImage}>
              <img src="/assets/images/tech_mentor_avatar.jpg" alt="Mentor" />
            </div>
            <div className={styles.mentorBadge}>
              <span className={styles.badgeNum}>10+</span>
              <span className={styles.badgeText}>Years<br/>Experience</span>
            </div>
          </div>
          
          <div className={styles.mentorContent}>
            <span className={styles.eyebrow}>MEET YOUR MENTOR</span>
            <h2 className={styles.title}>Learn. Build. Ship.</h2>
            
            <div className={styles.mentorCard}>
              <div className={styles.mentorHeader}>
                <h3>Gowtham.S</h3>
                <div className={styles.mentorTags}>
                  <span className={styles.mentorTag}>Founder & Lead Mentor</span>
                  <span className={styles.mentorTag}>Full-Stack Architecture</span>
                </div>
              </div>
              
              <div className={styles.mentorQuoteWrapper}>
                <span className={styles.quoteMark}>"</span>
                <p className={styles.mentorQuote}>
                  Bridging the gap between learning tech and actually building with it through real projects and direct mentorship.
                </p>
              </div>
              
              <div className={styles.heroBtns}>
                <a href="#" className="btn btn-primary" style={{ background: '#ffffff', color: '#111111' }} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="#" className="btn btn-ghost" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT WILL YOU BUILD? */}
      <section className={`${styles.section} ${styles.sectionBg} ${styles.impactSectionContainer}`}>
        <div className="container reveal">
          <div className={styles.impactGrid}>
            <div className={styles.impactCenterHeader}>
              <span className={styles.eyebrow}>BUILD FOR IMPACT</span>
              <h2 className={styles.title}>10 Missions. One Purpose.</h2>
              <div className={styles.subtitle}>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.2rem', margin: 0 }}>Learn. Build. Launch. Make an Impact.</p>
              </div>
            </div>
            {socialApps.map((app, i) => (
              <div key={i} className={styles.impactCard}>
                <div className={styles.impactHeader}>
                  <div className={styles.impactIconWrapper}>{app.icon}</div>
                  <h3>{app.title}</h3>
                </div>
                <h4 className={styles.impactSubtitle}>{app.subtitle}</h4>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 7. THREE ACADEMY TRACKS */}
      <section className={`${styles.section} ${styles.trackSection}`}>
        <div className="container reveal">
          <div className={`${styles.sectionHeader} ${styles.left}`}>
            <span className={styles.eyebrow}>ACADEMY TRACKS</span>
            <h2 className={styles.title}>Choose Your Path. Build Your Future.</h2>
          </div>

          <div className={styles.accordionList}>
            {academyTracks.map((track) => {
              const isOpen = openTrack === track.id;
              
              return (
                <div 
                  key={track.id} 
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''} ${track.isBundle ? styles.bundleAccordionItem : ''}`}
                >
                  <div 
                    className={styles.accordionHeader} 
                    onClick={() => setOpenTrack(isOpen ? null : track.id)}
                  >
                    <div className={styles.accordionHeaderLeft}>
                      <div className={styles.accordionArrow}>
                        {isOpen ? <FiChevronDown size={24} /> : <FiChevronRight size={24} />}
                      </div>
                      <div className={styles.accordionTitleBlock}>
                        <span className={styles.accordionEyebrow}>{track.eyebrow}</span>
                        <h3 className={styles.accordionTitle}>{track.title}</h3>
                      </div>
                    </div>
                    
                    <div className={styles.accordionHeaderRight}>
                      <span className={styles.accordionStrike}>{track.strikePrice}</span>
                      <strong className={styles.accordionPrice}>{track.price}</strong>
                    </div>
                  </div>
                  
                  {isOpen && (
                    <div className={styles.accordionContent}>
                      <div className={styles.accordionContentInner}>
                        <p className={styles.accordionDesc}>{track.desc}</p>
                        
                        <ul className={styles.accordionTopics}>
                          {track.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                        
                        <Link 
                          href={track.link} 
                          className={`btn ${track.isBundle ? 'btn-primary' : 'btn-outline'}`}
                          style={track.isBundle ? { background: '#ffffff', color: '#111111', border: 'none' } : {}}
                        >
                          {track.linkText}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. 8-WEEK ROADMAP */}
      <section className={`${styles.section} ${styles.roadmapSection}`}>
        <div className="container reveal">
          <div className={`${styles.sectionHeader} ${styles.left}`}>
            <span className={styles.eyebrow}>THE ROADMAP</span>
            <h2 className={styles.title}>12 Weeks. One Real Outcome.</h2>
          </div>

          <div className={styles.roadmapBentoGrid}>
            {[
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 14 C 8 10 16 14 22 10" />
                    <ellipse cx="14" cy="9.5" rx="1.5" ry="2" fill="none" />
                  </svg>
                ), 
                title: 'Foundation', desc: 'Setup environment, version control, and core web fundamentals.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 14 C 8 10 16 14 22 10" />
                    <path d="M10 12 C 10 12 12 4 18 6 C 18 6 20 14 10 12 Z" fill="rgba(0,90,255,0.05)" />
                    <ellipse cx="14" cy="9.5" rx="2" ry="2.5" fill="#ffffff" />
                  </svg>
                ), 
                title: 'Product Thinking', desc: 'User research, wireframing, and UI/UX design in Figma.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 14 C 8 10 16 14 22 10" />
                    <path d="M10 12 C 10 12 12 4 18 6 C 18 6 20 14 10 12 Z" fill="rgba(0,90,255,0.05)" />
                    <ellipse cx="14" cy="9.5" rx="2" ry="2.5" fill="none" />
                    <path d="M13 7 L 14 8 L 13 9" />
                  </svg>
                ), 
                title: 'Build', desc: 'Frontend development with React and Next.js.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18 L 22 18" />
                    <path d="M9 16 A 2 2 0 0 1 13 16 A 2 2 0 0 1 17 16" fill="rgba(0,90,255,0.05)" />
                    <circle cx="17" cy="15" r="0.5" fill="#005aff" stroke="none" />
                    <line x1="11" y1="16" x2="11" y2="18" />
                    <line x1="15" y1="16" x2="15" y2="18" />
                  </svg>
                ), 
                title: 'AI & Automation', desc: 'Integrating LLMs, computer vision, and workflow automation.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18 L 22 18" />
                    <path d="M7 16 A 2.5 2.5 0 0 1 12 16 A 2.5 2.5 0 0 1 17 16 A 2 2 0 0 1 20 16" fill="rgba(0,90,255,0.05)" />
                    <circle cx="20" cy="14.5" r="0.5" fill="#005aff" stroke="none" />
                    <line x1="9" y1="16" x2="9" y2="18" />
                    <line x1="14" y1="16" x2="14" y2="18" />
                    <line x1="18" y1="16" x2="18" y2="18" />
                  </svg>
                ), 
                title: 'Design & Experience', desc: 'Advanced CSS, animations, and responsive layouts.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18 L 22 18" />
                    <path d="M5 16 A 3 3 0 0 1 11 16 A 3 3 0 0 1 17 16 A 2.5 2.5 0 0 1 21 16" fill="rgba(0,90,255,0.1)" />
                    <circle cx="21" cy="14.5" r="0.5" fill="#005aff" stroke="none" />
                    <path d="M20 13 Q 21 10 23 11" />
                    <path d="M19 13 Q 18 10 17 10" />
                    <line x1="6" y1="16" x2="6" y2="18" />
                    <line x1="8" y1="16" x2="8" y2="18" />
                    <line x1="12" y1="16" x2="12" y2="18" />
                    <line x1="14" y1="16" x2="14" y2="18" />
                  </svg>
                ), 
                title: 'Deploy', desc: 'Backend APIs, databases, and authentication.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4 L 20 4" />
                    <line x1="12" y1="4" x2="12" y2="7" />
                    <path d="M11 7 L 13 7 C 14 9 14 13 12 17 C 10 13 10 9 11 7 Z" fill="rgba(0,90,255,0.05)" />
                  </svg>
                ), 
                title: 'Polish', desc: 'Connecting frontend to backend and state management.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4 L 20 4" />
                    <line x1="12" y1="4" x2="12" y2="7" />
                    <path d="M10 7 L 14 7 C 16 11 15 17 12 22 C 9 17 8 11 10 7 Z" fill="rgba(0,90,255,0.1)" />
                    <path d="M9.5 11 L 14.5 11" />
                    <path d="M9.2 15 L 14.8 15" />
                    <path d="M10.5 18 L 13.5 18" />
                  </svg>
                ), 
                title: 'Refinement', desc: 'Testing, debugging, and code quality.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4 L 20 4" />
                    <line x1="12" y1="4" x2="12" y2="7" />
                    <path d="M10 7 L 14 7 C 16 11 15 17 12 22 C 9 17 8 11 10 7 Z" fill="none" />
                    <path d="M12 7 L 11 10 L 13 13 L 11 16" />
                  </svg>
                ), 
                title: 'Advanced Topics', desc: 'Performance optimization and SEO.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="9" x2="12" y2="19" strokeWidth="2" />
                    <path d="M12 9 Q 10 5 9 7" />
                    <path d="M12 9 Q 14 5 15 7" />
                    <path d="M12 11 C 7 7 6 13 12 15 Z" fill="rgba(0,90,255,0.05)" />
                    <path d="M12 11 C 17 7 18 13 12 15 Z" fill="rgba(0,90,255,0.05)" />
                  </svg>
                ), 
                title: 'Performance & Scaling', desc: 'Preparing for production and scaling.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="7" x2="12" y2="17" strokeWidth="2" />
                    <path d="M12 7 Q 9 3 7 5" />
                    <path d="M12 7 Q 15 3 17 5" />
                    <path d="M11 9 C 3 4 2 12 11 14 C 5 16 7 21 11 18 Z" fill="rgba(0,90,255,0.1)" />
                    <path d="M13 9 C 21 4 22 12 13 14 C 19 16 17 21 13 18 Z" fill="rgba(0,90,255,0.1)" />
                  </svg>
                ), 
                title: 'Final Polish', desc: 'Finalizing projects, fixing bugs, and polishing.' 
              },
              { 
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#005aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21 C 6 19 8 19 10 17 C 12 15 11 12 13 10" strokeDasharray="2 3" />
                    <g transform="translate(4, -6) scale(0.85)">
                      <line x1="12" y1="7" x2="12" y2="17" strokeWidth="2" />
                      <path d="M12 7 Q 9 3 7 5" />
                      <path d="M12 7 Q 15 3 17 5" />
                      <path d="M11 9 C 3 4 2 12 11 14 C 5 16 7 21 11 18 Z" fill="rgba(0,90,255,0.1)" />
                      <path d="M13 9 C 21 4 22 12 13 14 C 19 16 17 21 13 18 Z" fill="rgba(0,90,255,0.1)" />
                    </g>
                  </svg>
                ), 
                title: 'Showcase & Launch', desc: 'Deploying to production, demo day, and portfolio building.' 
              }
            ].map((week, index) => (
              <div key={index} className={styles.roadmapBentoCard}>
                <div className={styles.bentoNum}>{String(index + 1).padStart(2, '0')}</div>
                <div style={{ marginBottom: '1.5rem', display: 'inline-flex', alignSelf: 'flex-start' }}>
                  {week.icon}
                </div>
                <h3>{week.title}</h3>
                <p>{week.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.roadmapIncludedBento}>
            <h4>Included</h4>
            <div className={styles.includedTags}>
              <span>Live Classes</span>
              <span>Recordings</span>
              <span>Doubt Sessions</span>
              <span>Mentor Guidance</span>
              <span>Community</span>
              <span>Project Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW IT WORKS */}
      <section className={styles.section}>
        <div className="container reveal">
          <div className={styles.stepGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>01</div>
              <h3>Learn</h3>
              <p style={{color: 'var(--muted)'}}>Understand the concepts that actually matter.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>02</div>
              <h3>Build</h3>
              <p style={{color: 'var(--muted)'}}>Apply them immediately to a real project.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>03</div>
              <h3>Review</h3>
              <p style={{color: 'var(--muted)'}}>Get feedback and improve your work.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>04</div>
              <h3>Launch</h3>
              <p style={{color: 'var(--muted)'}}>Deploy it, present it and turn it into portfolio proof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARENT TRUST SECTION */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className={`container ${styles.parentGrid} reveal`}>
          <div>
            <h2 className={styles.trustHeadline} style={{marginBottom: '1rem', fontSize: 'clamp(2rem, 3vw, 2.5rem)'}}>For Parents: Know What Your Student Is Getting.</h2>
            <p className={styles.trustSubtitle}>Clear learning. Real projects. Visible mentorship. No vague promises.</p>
            
            <ul className={styles.trustCheckList}>
              <li>Transparent curriculum</li>
              <li>Clear learning roadmap</li>
              <li>Mentor visibility</li>
              <li>Practical projects</li>
              <li>Direct support</li>
            </ul>
          </div>
          <div style={{background: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', textAlign: 'center'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Have questions before joining?</h3>
            <div className={styles.heroBtns} style={{justifyContent: 'center', flexDirection: 'column', gap: '1rem'}}>
              <Link href="/contact" className="btn btn-primary" style={{width: '100%'}}>Talk to a Mentor</Link>
              <a href="#" className="btn btn-secondary" style={{width: '100%'}}>WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>



      {/* 13. FAQ */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className="container reveal">
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqWrapper}>
            <FAQItem question="Do I need prior coding experience?" answer="No prior experience is necessary. We start from the fundamentals and scale up to advanced topics." />
            <FAQItem question="Are classes live or recorded?" answer="Classes are conducted live with recordings available afterwards for all students." />
            <FAQItem question="What happens if I miss a live class?" answer="You will have access to the recorded session and can ask questions in the community or during doubt sessions." />
            <FAQItem question="How much time should I spend each week?" answer="We recommend dedicating at least 10-15 hours per week, including live classes, reading, and project work." />
            <FAQItem question="Will I build real projects?" answer="Yes. The entire curriculum is structured around building portfolio-worthy, real-world projects." />
            <FAQItem question="Do I get mentor support?" answer="Absolutely. You will have direct access to mentor guidance throughout the course." />
            <FAQItem question="Is there a certificate?" answer="Yes, upon successful completion and presentation of your final project." />
            <FAQItem question="Is EMI / installment payment available?" answer="Yes, we offer flexible payment options for eligible students." />
            <FAQItem question="What is the refund policy?" answer="We offer a transparent refund policy. Please reach out to our admissions team for full details." />
            <FAQItem question="How do I contact the mentor?" answer="Mentors are accessible via our private community platform and dedicated Q&A sessions." />
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <FinalCta variant="academy" />
    </main>
  );
}

// --- ICONS ---
const Dots = () => (
  <>
    <circle cx="2"   cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="2"   cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="2"   cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
  </>
);

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="14" cy="10" r="3"   stroke="currentColor" strokeWidth="1.2" />
    <circle cx="14" cy="10" r="0.8" fill="#005aff" />
    <line x1="7" y1="17" x2="11.5" y2="12.5" stroke="currentColor" strokeWidth="1.2" />
    <polyline points="7,15 9,17 7,17 Z" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const WebAppsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <polyline points="10,8 7,12 10,16"  stroke="currentColor" strokeWidth="1.2" />
    <polyline points="14,8 17,12 14,16" stroke="currentColor" strokeWidth="1.2" />
    <line x1="13" y1="7" x2="11" y2="17" stroke="#005aff" strokeWidth="1.2" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <line x1="12" y1="12" x2="12" y2="8"  stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="8"  y2="12" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="7.5"  r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16.5" cy="12" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="16.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="12"  r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.5" fill="#005aff" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <line x1="7"  y1="17" x2="7"  y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    <line x1="17" y1="7"  x2="17" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    <circle cx="7"  cy="10" r="0.8" fill="#005aff" />
    <circle cx="17" cy="14" r="0.8" fill="#005aff" />
    <path d="M7,17 C7,10 17,14 17,7" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="7"  cy="17" r="1.2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="17" cy="7"  r="1.2" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ModernStackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="7" ry="2" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="7" ry="2" stroke="currentColor" strokeWidth="1.2" transform="rotate(-45 12 12)" />
    <circle cx="12" cy="12" r="1" fill="#005aff" />
  </svg>
);

const CareerReadyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <rect x="6" y="9" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 9 V 7 C 9 6 10 6 12 6 C 14 6 15 6 15 7 V 9" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="13.5" r="1" fill="#005aff" />
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="3" ry="6" stroke="currentColor" strokeWidth="1.2" />
    <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.5" fill="#005aff" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const MissionsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="5" x2="12" y2="7" stroke="#005aff" strokeWidth="1.2" />
    <line x1="12" y1="17" x2="12" y2="19" stroke="#005aff" strokeWidth="1.2" />
    <line x1="5" y1="12" x2="7" y2="12" stroke="#005aff" strokeWidth="1.2" />
    <line x1="17" y1="12" x2="19" y2="12" stroke="#005aff" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1" fill="#005aff" />
  </svg>
);
