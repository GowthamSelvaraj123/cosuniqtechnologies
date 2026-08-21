import Link from "next/link";
import InitReveal from "../../components/InitReveal";

export const metadata = {
  title: "Services | Cosuniq Technologies",
  description: "Explore Cosuniq services: custom software & SaaS, CRM, e-commerce, website development, branding, and video editing.",
};

export default function Services() {
  return (
    <>
      <InitReveal />
      <section className="page-hero bg-mesh">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Everything you need to launch &amp; scale</h1>
          <p>
            Six focused capabilities — engineering, commerce, design, and media — delivered with clear
            scope and measurable outcomes.
          </p>
        </div>
      </section>

      <section id="software">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">01</span>
            <h2 className="service-title">Custom Software &amp; SaaS</h2>
            <p className="service-lead">
              Product architecture, APIs, dashboards, and multi-tenant SaaS built for reliability and
              growth.
            </p>
            <div className="tech-pills">
              <span>Node.js</span><span>React</span><span>PostgreSQL</span><span>Cloud</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>MVP to production SaaS platforms</li>
            <li>Internal tools &amp; workflow automation</li>
            <li>API design, auth, and role-based access</li>
            <li>Performance, monitoring &amp; maintenance</li>
          </ul>
        </div>
      </section>

      <div className="accent-line" aria-hidden="true"></div>

      <section id="crm">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">02</span>
            <h2 className="service-title">CRM Solutions</h2>
            <p className="service-lead">
              Custom and configured CRM systems that capture leads, automate follow-ups, and give
              leadership clear foresight.
            </p>
            <div className="tech-pills">
              <span>Pipelines</span><span>Automation</span><span>Reports</span><span>Integrations</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>Lead &amp; deal pipeline design</li>
            <li>Email / WhatsApp / SMS triggers</li>
            <li>Sales dashboards &amp; forecasting</li>
            <li>Migration from spreadsheets or legacy tools</li>
          </ul>
        </div>
      </section>

      <div className="accent-line" aria-hidden="true"></div>

      <section id="ecommerce">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">03</span>
            <h2 className="service-title">E-commerce Development</h2>
            <p className="service-lead">
              Conversion-focused online stores with secure payments, catalog management, and smooth
              checkout.
            </p>
            <div className="tech-pills">
              <span>Shopify</span><span>Custom carts</span><span>Razorpay</span><span>Inventory</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>Storefront UX &amp; mobile checkout</li>
            <li>Payment gateways &amp; order tracking</li>
            <li>Inventory, coupons &amp; shipping rules</li>
            <li>Admin panels for non-technical teams</li>
          </ul>
        </div>
      </section>

      <div className="accent-line" aria-hidden="true"></div>

      <section id="web">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">04</span>
            <h2 className="service-title">Website Design &amp; Development</h2>
            <p className="service-lead">
              Fast, responsive websites and full-stack web apps with strong SEO foundations.
            </p>
            <div className="tech-pills">
              <span>HTML/CSS/JS</span><span>React</span><span>SEO</span><span>CMS</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>Corporate &amp; product marketing sites</li>
            <li>Landing pages built to convert</li>
            <li>CMS setup &amp; content training</li>
            <li>Speed, accessibility &amp; analytics</li>
          </ul>
        </div>
      </section>

      <div className="accent-line" aria-hidden="true"></div>

      <section id="branding">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">05</span>
            <h2 className="service-title">Brand Identity &amp; Graphic Design</h2>
            <p className="service-lead">
              Visual systems that feel premium and consistent across web, print, and social.
            </p>
            <div className="tech-pills">
              <span>Logo</span><span>Guidelines</span><span>Social kits</span><span>Print</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>Logo &amp; brand mark design</li>
            <li>Color, type &amp; usage guidelines</li>
            <li>Marketing collateral &amp; packs</li>
            <li>UI visual language for products</li>
          </ul>
        </div>
      </section>

      <div className="accent-line" aria-hidden="true"></div>

      <section id="video">
        <div className="container service-detail-grid">
          <div className="reveal">
            <span className="eyebrow">06</span>
            <h2 className="service-title">Video Editing &amp; Multimedia</h2>
            <p className="service-lead">
              Promo films, explainers, and social edits that match your brand tone and campaign goals.
            </p>
            <div className="tech-pills">
              <span>Promo</span><span>Reels</span><span>Explainers</span><span>Motion</span>
            </div>
          </div>
          <ul className="feature-list reveal">
            <li>Product &amp; brand promo videos</li>
            <li>Short-form content for social</li>
            <li>Subtitles, sound design &amp; color</li>
            <li>Thumbnail &amp; cover design</li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Need a scoped proposal?</h2>
            <p>Share your goals — we’ll recommend the right mix of services.</p>
            <Link className="btn btn-primary" href="/contact">Talk to Cosuniq</Link>
          </div>
        </div>
      </section>
    </>
  );
}
