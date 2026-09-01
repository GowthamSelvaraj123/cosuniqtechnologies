"use client";

import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import FinalCta from "../../components/FinalCta";

export default function Academy() {
  return (
    <>
      <InitReveal />
      <title>Academy | Cosuniq Technologies</title>
      <meta name="description" content="Cosuniq Academy - E-learning platform and management system." />

      <InnerBanner 
        title="Cosuniq Academy"
        description="A comprehensive e-learning platform and academy management system built for interactive online education."
      />

      <section style={{ backgroundColor: "var(--white)", padding: "100px 0", minHeight: "50vh" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Coming Soon</h2>
          <p style={{ color: "var(--muted)", maxWidth: "600px", marginInline: "auto" }}>
            We are building a robust platform to empower learning through tailored digital experiences. Stay tuned for updates on the Cosuniq Academy.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
