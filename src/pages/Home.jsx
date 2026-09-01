import { Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";

function Category({ title, category, items }) {
  // Only show the first 4 on the homepage
  const visibleItems = items.slice(0, 4);

  return (
    <section className="category">
      <div className="section-heading">
        <span>{title}</span>
        <span className="count">
          {String(items.length).padStart(2, "0")} SERIES
        </span>
      </div>

      <div className="photo-grid">
        {visibleItems.map((item) => (
          <Link
            key={item.id}
            to={`/series/${category}/${item.slug}`}
            className="photo-card"
          >
            <div className="image-wrapper">
              <img src={item.cover} alt={item.title} />

              <div className="card-overlay">
                <span>VIEW SERIES</span>
                <span>↗</span>
              </div>
            </div>

            <div className="card-info">
              <h3>{item.title}</h3>
              <span>{title.slice(0, -1)}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* VIEW MORE */}
      <div className="view-more-wrapper">
        <Link
          to={`/work/${category}`}
          className="view-more"
        >
          <span>VIEW MORE</span>
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-small">
          PHOTOGRAPHER / HYDERABAD
        </div>

        <h1>
          Sriharsh
          <em>Akkala.</em>
        </h1>

        <p>
          Portraits, automobiles & products.
          <br />
          Photography with intention.
        </p>

        <a href="#work" className="hero-link">
          Explore my work ↓
        </a>
      </section>

      <section id="work" className="work-section">
        <Category
          title="Portraits"
          category="portraits"
          items={portfolio.portraits}
        />

        <Category
          title="Automotive"
          category="automotive"
          items={portfolio.automotive}
        />

        <Category
          title="Product"
          category="products"
          items={portfolio.products}
        />
      </section>

      <section id="about" className="about">
        <div className="section-heading">
          <span>ABOUT</span>
        </div>

        <div className="about-content">
          <h2>
            I photograph
            <br />
            <em>what catches my eye.</em>
          </h2>

          <div className="about-text">
            <p>
              I'm Sriharsh, a photographer based in Hyderabad, India.
              I work across portraits, automobiles, events and product photography.
            </p>

            <p>
              My approach is simple — good light, strong composition and
              images that feel intentional.
            </p>

            <a href="#contact">
              Let's work together →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-label">
          HAVE A PROJECT?
        </div>

        <h2>
          Let's make
          <br />
          something <em>great.</em>
        </h2>

        <a
          href="mailto:your@email.com"
          className="email"
        >
          sriharshakkala@gmail.com
        </a>

        <div className="contact-bottom">
          <span>HYDERABAD, INDIA</span>
          <span>© 2026 SRIHARSH AKKALA</span>
        </div>
      </section>
    </div>
  );
}