export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>Who we are</h1>
        </div>
      </section>

      <section className="section-card about-story">
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Everyday Interiors is an interior design service that bridges the gap between real estate and interior styling. 
              Whether you're a homeowner prepping to sell, a buyer struggling to visualize potential, or a realtor seeking that extra edge, 
              Curate &amp; Co. offers curated, cosmetic design solutions that elevate spaces—without the need for a major renovation.
            </p>

            <p>
              Hi, I’m Laura Mullally, the heart behind Everyday Interiors.
            </p>

            <p>
              I’m thrilled to introduce myself as a passionate newcomer to the interior design world, 
              turning a lifelong appreciation for beautiful, functional spaces into a growing business.
            </p>

            <p>
              Though I’m new to the professional interior design space, my love for design began early on in high school—Inspired by countless hours watching HGTV. 
              While I pursued a career in healthcare, interior design remained my creative outlet. Now, I’m turning this lifelong passion into a business.
            </p>

            <p>
              I work with all design styles and love helping clients see the potential in their homes—whether they’re selling, settling in, 
              or simply craving a change. My process includes a personalized walkthrough, a detailed design rendering, and a curated list of 
              product recommendations to bring the vision to life.
            </p>

            <p>
              As I build my business, I understand the importance of trust — and I want you to know that I’m not just designing spaces, I’m building my dream too. 
              Let’s create something beautiful together.
            </p>
          </div>

          <figure className="about-photo">
            <img src="/images/portfolio_imgs/bedroomheadon.JPEG" alt="Bedroom design" loading="lazy" />
            <img src="/images/portfolio_imgs/livingspaceheadon.JPEG" alt="Living room design" loading="lazy" />
            <img src="/images/portfolio_imgs/openkitchen.JPEG" alt="Open kitchen design" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="section-card about-values">
        <h2>Who It’s For</h2>
        <ul className="values-list">
          <li><strong>Homeowners</strong> looking to boost listing appeal with minimal investment</li>
          <li><strong>Buyers</strong> who need help envisioning how a space could feel with a few cosmetic changes</li>
          <li><strong>Realtors</strong> who want to offer added value and faster sales</li>
        </ul>
      </section>

      <section className="section-card about-values">
        <h2>Why It Works</h2>
        <ul className="values-list">
          <li><strong>Minimal to no renovation required </strong> - just smart, cosmetic upgrades</li>
          <li><strong>Design with resale in mind</strong>  - every choice supports marketability</li>
          <li><strong>Vision-first approach</strong> helps buyers emotionally connect with a space</li>
        </ul>
      </section>

      <section className="section-card about-process">
        <h2>How We Work</h2>
        <ol className="process-steps">
          <li><span>1</span><div><h3>Consultation</h3><p>We learn your goals, style, and how you live.</p></div></li>
          <li><span>2</span><div><h3>Concepts</h3><p>Layouts, palettes, and selections that fit your budget and vision.</p></div></li>
          <li><span>3</span><div><h3>Refinement</h3><p>Finalize furnishings, finishes, lighting, and styling details.</p></div></li>
          <li><span>4</span><div><h3>Implementation</h3><p>We coordinate and guide to bring the design to life.</p></div></li>
        </ol>
        <div className="about-cta">
          <a href="/contact" className="call-btn">Let’s Start Your Project</a>
        </div>
      </section>
    </main>
  );
}
