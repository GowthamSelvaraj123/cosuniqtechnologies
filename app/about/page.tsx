import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export const metadata = {
  title: "About | Cosuniq Technologies",
  description: "Learn about Cosuniq Technologies — vision, mission, and the team behind our digital solutions from Udumalpet / Coimbatore.",
};

export default function About() {
  return (
    <>
      <InitReveal />
      <InnerBanner 
        title="Intelligence meets craft"
        description="Cosuniq Technologies is a digital solutions company blending software engineering with brand and media — so your product, presence, and story stay aligned."
      />

      <section>
        <div className="container about-grid">
          <article className="about-block reveal">
            <h3>Vision</h3>
            <p>
              To be the trusted growth partner for businesses that want technology and creative quality
              without juggling five vendors.
            </p>
          </article>
          <article className="about-block reveal">
            <h3>Mission</h3>
            <p>
              Ship reliable software, clear brands, and compelling content — on time, with transparent
              communication and measurable impact.
            </p>
          </article>
          <article className="about-block reveal">
            <h3>Approach</h3>
            <p>
              Discover → design → build → launch → support. We keep scope honest, demos frequent, and
              handovers documented.
            </p>
          </article>
          <article className="about-block reveal">
            <h3>Location</h3>
            <p>
              Rooted in the Udumalpet / Coimbatore region, collaborating with clients across Tamil Nadu
              and remote teams worldwide.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Team</span>
            <h2>People behind the product</h2>
            <p>Engineers, designers, and editors who care about the details.</p>
          </div>
          <div className="team-grid">
            <article className="team-card reveal">
              <div className="avatar">CT</div>
              <h3>Core Tech Team</h3>
              <span>Full-stack &amp; SaaS engineering</span>
            </article>
            <article className="team-card reveal">
              <div className="avatar">DX</div>
              <h3>Design Studio</h3>
              <span>Brand, UI &amp; visual systems</span>
            </article>
            <article className="team-card reveal">
              <div className="avatar">MV</div>
              <h3>Media Desk</h3>
              <span>Video editing &amp; motion</span>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Let’s build together</h2>
            <p>Whether you need a platform, a store, or a full brand refresh — we’re ready.</p>
            <Link className="btn btn-primary" href="/contact">Contact Cosuniq</Link>
          </div>
        </div>
      </section>
    </>
  );
}
