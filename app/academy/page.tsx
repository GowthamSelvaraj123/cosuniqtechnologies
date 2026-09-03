"use client";

import React from "react";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import AcademyHero from "../../components/AcademyHero";
import FinalCta from "../../components/FinalCta";
import styles from "./Academy.module.css";
import FAQItem from "./FAQItem";

export default function Academy() {
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
                More than a course. A place to become a builder<span className={styles.trustDot}>.</span>
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

          </div>
        </div>
      </section>

      {/* 5. MEET YOUR MENTOR */}
      <section className={`${styles.section} ${styles.mentorSection}`}>
        <div className={`container ${styles.mentorGrid} reveal`}>
          <div className={styles.mentorImageWrapper}>
            <div className={styles.mentorImage}>
              <img src="/assets/images/person-businessman.jpg" alt="Mentor" />
            </div>
            <div className={styles.mentorBadge}>
              <span className={styles.badgeNum}>10+</span>
              <span className={styles.badgeText}>Years<br/>Experience</span>
            </div>
          </div>
          
          <div className={styles.mentorContent}>
            <span className={styles.eyebrow}>MEET YOUR MENTOR</span>
            <h2 className={styles.title} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Learn. Build. Ship.</h2>
            
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
                <a href="#" className="btn btn-primary" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="#" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT WILL YOU BUILD? */}
      <section className={`${styles.section} ${styles.sectionBg}`}>
        <div className="container reveal">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>PROOF OF OUTPUT</span>
            <h2 className={styles.title}>Don't just finish a course. Build something worth showing.</h2>
            <p className={styles.subtitle}>Every learning path is designed around tangible outcomes.</p>
          </div>

          <div className={styles.proofGrid}>
            <div className={styles.proofCard}>
              <div className={styles.proofImage}>
                <img src="/assets/images/bento-ui-ux.jpg" alt="AI Agent Application" />
              </div>
              <div className={styles.proofContent}>
                <span className={styles.proofTags}>AI Agents · APIs · Full Stack</span>
                <h3>AI Agent Application</h3>
                <p>Build an AI-powered application using agents, APIs, automation and modern full-stack architecture.</p>
                <Link href="#waitlist" className="tag" style={{alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-block', border: '1px solid var(--brand)', padding: '0.4rem 1rem', borderRadius: '2rem'}}>View Project →</Link>
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofImage}>
                <img src="/assets/images/hero-brand.jpg" alt="Global Brand & Web Experience" />
              </div>
              <div className={styles.proofContent}>
                <span className={styles.proofTags}>Branding · UI/UX · Web</span>
                <h3>Global Brand & Web Experience</h3>
                <p>Create a complete visual identity and premium website for a real-world product.</p>
                <Link href="#waitlist" className="tag" style={{alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-block', border: '1px solid var(--brand)', padding: '0.4rem 1rem', borderRadius: '2rem'}}>View Project →</Link>
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofImage}>
                <img src="/assets/images/laptop.jpg" alt="Startup MVP" />
              </div>
              <div className={styles.proofContent}>
                <span className={styles.proofTags}>MVP · Product · GTM</span>
                <h3>Startup MVP</h3>
                <p>Turn an idea into a working MVP with product strategy, technology, branding and launch planning.</p>
                <Link href="#waitlist" className="tag" style={{alignSelf: 'flex-start', marginTop: '1rem', display: 'inline-block', border: '1px solid var(--brand)', padding: '0.4rem 1rem', borderRadius: '2rem'}}>View Project →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THREE ACADEMY TRACKS */}
      <section className={`${styles.section} ${styles.trackSection}`}>
        <div className="container reveal">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>ACADEMY TRACKS</span>
            <h2 className={styles.title}>Choose Your Path. Build Your Future.</h2>
          </div>

          <div className={styles.trackGrid}>
            <div className={styles.trackCard}>
              <div className={styles.trackEyebrow}>Cosuniq Code</div>
              <h3>AI Agentic Fullstack Engineering</h3>
              <p>Build modern AI-powered applications using full-stack engineering, APIs, agents and production workflows.</p>
              <ul className={styles.trackTopics}>
                <li>AI Agents</li>
                <li>Full Stack</li>
                <li>APIs</li>
                <li>Databases</li>
                <li>Deployment</li>
                <li>Architecture</li>
              </ul>
              <Link href="#waitlist" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Explore Code →</Link>
            </div>

            <div className={styles.trackCard}>
              <div className={styles.trackEyebrow}>Cosuniq Design</div>
              <h3>Global Branding & Web Experience</h3>
              <p>Learn to create premium brands and digital experiences that communicate clearly and convert users.</p>
              <ul className={styles.trackTopics}>
                <li>Brand Identity</li>
                <li>UI/UX</li>
                <li>Design Systems</li>
                <li>Web Experience</li>
                <li>Conversion</li>
              </ul>
              <Link href="#waitlist" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Explore Design →</Link>
            </div>

            <div className={styles.trackCard}>
              <div className={styles.trackEyebrow}>Cosuniq Founder</div>
              <h3>Startup Launchpad</h3>
              <p>Turn ideas into MVPs with product strategy, branding, technology and go-to-market thinking.</p>
              <ul className={styles.trackTopics}>
                <li>Idea Validation</li>
                <li>Product Strategy</li>
                <li>MVP</li>
                <li>Branding</li>
                <li>GTM</li>
                <li>Pitching</li>
              </ul>
              <Link href="#waitlist" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Explore Founder →</Link>
            </div>
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

          <div className={styles.roadmapWrapper}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 01</div>
                <div className={styles.timelineTitle}>Foundation</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 02</div>
                <div className={styles.timelineTitle}>Product Thinking</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 03</div>
                <div className={styles.timelineTitle}>Build</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 04</div>
                <div className={styles.timelineTitle}>AI & Automation</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 05</div>
                <div className={styles.timelineTitle}>Design & Experience</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 06</div>
                <div className={styles.timelineTitle}>Deploy</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 07</div>
                <div className={styles.timelineTitle}>Polish</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 08</div>
                <div className={styles.timelineTitle}>Refinement</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 09</div>
                <div className={styles.timelineTitle}>Advanced Topics</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 10</div>
                <div className={styles.timelineTitle}>Performance & Scaling</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 11</div>
                <div className={styles.timelineTitle}>Final Polish</div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineWeek}>Week 12</div>
                <div className={styles.timelineTitle}>Showcase & Launch</div>
              </div>
            </div>

            <div className={styles.roadmapIncluded}>
              <h4>Included</h4>
              <ul className={styles.mentorList} style={{marginBottom: 0}}>
                <li>Live Classes</li>
                <li>Recordings</li>
                <li>Doubt Sessions</li>
                <li>Mentor Guidance</li>
                <li>Community</li>
                <li>Project Reviews</li>
              </ul>
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
