"use client";

import { useState } from "react";

const quotes = [
  {
    text: "“Cosuniq made everything click — positioning, product UX, and delivery. Patient, talented, and invested.”",
    author: "Priya N.",
    role: "Operations Lead"
  },
  {
    text: "“Beyond aesthetics, the platform is functional. We’re happier shipping with a team that owns the craft.”",
    author: "Arun K.",
    role: "Founder"
  },
  {
    text: "“Fresh ideas, one-stop for brand, site, and video. Amazing creative technology partner.”",
    author: "Meera S.",
    role: "Marketing Head"
  }
];

export default function QuoteSlider() {
  const [qIndex, setQIndex] = useState(0);

  const showQuote = (i: number) => {
    setQIndex((i + quotes.length) % quotes.length);
  };

  return (
    <section className="band band--cream" id="voices">
      <div className="container">
        <div className="slider-head reveal">
          <div>
            <span className="eyebrow"><span className="spark spark--inline"></span> Clients</span>
            <h2>Hear from our partners.</h2>
          </div>
          <div className="slider-controls">
            <button type="button" className="slider-btn" aria-label="Previous quote" onClick={() => showQuote(qIndex - 1)}>←</button>
            <button type="button" className="slider-btn" aria-label="Next quote" onClick={() => showQuote(qIndex + 1)}>→</button>
          </div>
        </div>

        <div className="quote-slider reveal">
          {quotes.map((q, idx) => (
            <blockquote key={idx} className={`quote-card ${idx === qIndex ? "is-active" : ""}`}>
              <p>{q.text}</p>
              <footer><strong>{q.author}</strong> · {q.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
