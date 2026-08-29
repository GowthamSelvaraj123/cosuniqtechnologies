"use client";

import React from "react";
import Link from "next/link";

export default function WorkLifecycle() {
  return (
    <section className="band band--white" id="work-lifecycle">
      <div className="lifecycle-container">
        
        {/* Top Right: Hi, We are Cosuniq */}
        <div className="lifecycle-gowtham-text">
          <div style={{
            position: 'relative',
            display: 'inline-flex',
            background: '#FF6B00',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1rem',
            padding: '0.4rem 1rem',
            borderRadius: '30px',
            boxShadow: '0 4px 12px rgba(255, 107, 0, 0.25)'
          }}>
            Hi,
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '17px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #FF6B00'
            }} />
          </div>
          <span style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em' }}>
            We are Cosuniq,
          </span>
        </div>

        {/* Right Vertical: we love support your business */}
        <div className="lifecycle-support-text">
          we <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#FF6B00" className="lifecycle-heart"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> support your business.
        </div>

        <div className="lifecycle-grid reveal">
          <div className="section-intro process-card" style={{ background: '#FF6B00', borderColor: '#FF6B00', justifyContent: 'center', borderRadius: '12px' }}>
            <span className="eyebrow" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.2)', alignSelf: 'flex-start' }}>
              <span className="spark spark--inline" style={{ background: '#fff' }} />
              Our Approach
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#fff', margin: 0, fontWeight: 700, letterSpacing: '-0.03em' }}>
              Digital Metamorphosis.
            </h2>
          </div>

          <article className="process-card">
            <span className="process-num">01</span>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 14 C 8 10 16 14 22 10" />
                <path d="M10 12 C 10 12 12 4 18 6 C 18 6 20 14 10 12 Z" fill="rgba(255,107,0,0.1)" />
                <ellipse cx="14" cy="9.5" rx="2" ry="2.5" fill="#ffffff" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Origin</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Strategy, planning, and aligning on goals before the work begins.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">02</span>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18 L 22 18" />
                <path d="M5 16 A 3 3 0 0 1 11 16 A 3 3 0 0 1 17 16 A 2.5 2.5 0 0 1 21 16" fill="rgba(255,107,0,0.1)" />
                <circle cx="21" cy="14.5" r="0.5" fill="#FF6B00" stroke="none" />
                <path d="M20 13 Q 21 10 23 11" />
                <path d="M19 13 Q 18 10 17 10" />
                <line x1="6" y1="16" x2="6" y2="18" />
                <line x1="8" y1="16" x2="8" y2="18" />
                <line x1="12" y1="16" x2="12" y2="18" />
                <line x1="14" y1="16" x2="14" y2="18" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Form</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Gathering ideas, laying the strategic foundation, and core design.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">03</span>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4 L 20 4" />
                <line x1="12" y1="4" x2="12" y2="7" />
                <path d="M10 7 L 14 7 C 16 11 15 17 12 22 C 9 17 8 11 10 7 Z" fill="rgba(255,107,0,0.1)" />
                <path d="M9.5 11 L 14.5 11" />
                <path d="M9.2 15 L 14.8 15" />
                <path d="M10.5 18 L 13.5 18" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Metamorphosis</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Intense transformation—building systems and primary development.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">04</span>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="7" x2="12" y2="17" strokeWidth="2" />
                <path d="M12 7 Q 9 3 7 5" />
                <path d="M12 7 Q 15 3 17 5" />
                <path d="M11 9 C 3 4 2 12 11 14 C 5 16 7 21 11 18 Z" fill="rgba(255,107,0,0.1)" />
                <path d="M13 9 C 21 4 22 12 13 14 C 19 16 17 21 13 18 Z" fill="rgba(255,107,0,0.1)" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Emergence</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Emergence through refinement, rigorous testing, and final polish.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">05</span>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21 C 6 19 8 19 10 17 C 12 15 11 12 13 10" strokeDasharray="2 3" />
                <g transform="translate(4, -6) scale(0.85)">
                  <line x1="12" y1="7" x2="12" y2="17" strokeWidth="2" />
                  <path d="M12 7 Q 9 3 7 5" />
                  <path d="M12 7 Q 15 3 17 5" />
                  <path d="M11 9 C 3 4 2 12 11 14 C 5 16 7 21 11 18 Z" fill="rgba(255,107,0,0.1)" />
                  <path d="M13 9 C 21 4 22 12 13 14 C 19 16 17 21 13 18 Z" fill="rgba(255,107,0,0.1)" />
                </g>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Flight</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Launch, scalable commercial momentum, and ongoing growth.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
