import { Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import CategoryNav from "../components/CategoryNav";
import ScrollReveal from "../components/ScrollReveal";

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

      <div className="view-more-wrapper">
        <Link to={`/work/${category}`} className="view-more">
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
      {/* Floating category navigation */}
      <CategoryNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-small">
          PHOTOGRAPHER / HYDERABAD
        </div>

        <h1>
          Sriharsh
          <em>Akkala.</em>
        </h1>

        <p>
          Portraits, automobiles & events.
          <br />
          Photography with intention.
        </p>

        <a href="#work" className="hero-link">
          Explore my work ↓
        </a>
      </section>

      {/* WORK */}
      <section id="work" className="work-section">
        <ScrollReveal>
          <Category
            title="Portraits"
            category="portraits"
            items={portfolio.portraits}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Category
            title="Automotive"
            category="automotive"
            items={portfolio.automotive}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Category
            title="Events"
            category="events"
            items={portfolio.events}
          />
        </ScrollReveal>
      </section>

      {/* ABOUT */}
      <ScrollReveal>
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
                I work across portraits, automobiles and events.
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
      </ScrollReveal>

      {/* CONTACT */}
      <ScrollReveal>
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
            href="mailto:sriharshakkala@gmail.com"
            className="email"
          >
            sriharshakkala@gmail.com
          </a>

          <div className="contact-bottom">
            <span>HYDERABAD, INDIA</span>
            <span>© 2026 SRIHARSH AKKALA</span>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}