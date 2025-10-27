export default function ServicesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>What we offer</h1>
        </div>
      </section>

      <section className="section-card about-story">
        <div className="about-grid">
          <div className="about-copy">
            <p>
                Whether you're a homeowner prepping to sell, a buyer struggling to visualize potential, or a realtor seeking that extra edge, 
                we deliver curated design direction and thoughtful styling that brings your space to life. From budget-friendly tweaks to cohesive, 
                high-impact suggestions, you'll get a clear plan that’s easy to implement without a major renovation.
            </p>
          </div>

          <figure className="about-photo">
            <img src="/images/portfolio_imgs/livingspaceheadon.JPEG" alt="Service example" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="section-card about-process">
        <h2>What’s Included</h2>
        <ol className="process-steps">
          <li>
            <span></span>
            <div>
              <h3>Consultation</h3>
              <p>Walkthrough consultation (in-person or virtual) to learn your goals, style, and how you live.</p>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <h3>Design Concept</h3>
              <p>Full design concept based on your budget, including visual renderings.</p>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <h3>Product Selections</h3>
              <p>Product selections with sourcing links from retailers (local or online) that match your aesthetic and budget.</p>
            </div>
          </li>
        </ol>

        <div className="about-cta">
          <a href="/contact" className="call-btn">Let’s Start Your Project</a>
        </div>
      </section>
    </main>
  );
}
