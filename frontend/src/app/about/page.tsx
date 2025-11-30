export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>Who we are</h1>
          <section>
            <p>At Everyday Interiors, we believe great design doesn’t require a gut renovation or a luxury budget, 
              it starts with seeing the potential in what you already have. Whether you're preparing to sell, settling 
              into a new home, or simply craving a refresh, we help you reimagine and elevate your space.</p>
          </section>
        </div>
      </section>


      <section className="section-card about-story">
        <div className="about-grid">
          <div className="about-values">
            <h1>About Us</h1>
            <p>
              Hello, I’m Laura Mullally, the heart behind Everyday Interiors.  As a passionate newcomer to the interior design world, 
              I’m turning a lifelong appreciation for beautiful, functional spaces into a growing business. 
              My love for design began early on in high school—Inspired by countless hours watching HGTV. 
              While I pursued a career in healthcare, interior design remained my creative outlet. Now, I’m turning this lifelong passion into a business.
            </p>

            <p>
              As I build my business, I understand the importance of trust — and want you to know that I’m not just designing spaces, 
              I’m building my dream too. Let’s create something beautiful together.
            </p>

          </div>
          <figure className="about-photo">

            <img src="/images/portfolio_imgs/livingspaceheadon.JPEG" alt="Living room design" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="section-card about-story">
        <div className="about-grid">
          <div className="about-values">
            <h1>Services Offered</h1>
            <p>
              Whether you're a homeowner prepping to sell, a buyer struggling to visualize potential, or a realtor seeking that extra edge, we deliver 
              curated design direction and thoughtful styling that brings your space to life. From budget-friendly tweaks to cohesive, high-impact suggestions, 
              you'll get a clear plan that’s easy to implement without a major renovation. 
            </p>

            <p>
              At this early stage, services are offered <strong>free of charge</strong> to build experience, gather testimonials, and grow a portfolio.
            </p>

          </div>
          <figure className="about-photo">

            <img src="/images/portfolio_imgs/livingspaceangle.JPEG" alt="Living room design" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="section-card about-story">
        <div className="about-grid">
          <div className="about-values">
            <h1>Design Process</h1>
            <p>
              We work across all design styles and tailor each project to your lifestyle, goals, and budget. Our design process includes:
            </p>

            <ul className="values-list">
              <li>A personalized walkthrough to understand your space and vision</li>
              <li>A detailed design rendering that brings your ideas to life</li>
              <li>A curated shopping list with accessible, style-forward product recommendations including paint, furniture, lighting, and decor selections.</li>
            </ul>

            <p>
              We are willing to work with you or your contractor to create a beautiful space for everyday living. 
            </p>


          </div>
          <figure className="about-photo">

            <img src="/images/portfolio_imgs/bedroomheadon.JPEG" alt="Living room design" loading="lazy" />
          </figure>
        </div>
      </section>


    </main>
  );
}
