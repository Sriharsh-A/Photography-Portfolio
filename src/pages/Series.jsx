import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/portfolio";

const categoryNames = {
  portraits: "Portraits",
  automotive: "Automotive",
  events: "Events",
};

export default function Series() {
  const { category, slug } = useParams();

  const series = portfolio[category]?.find(
    (item) => item.slug === slug
  );

  if (!series) {
    return (
      <div className="not-found">
        <h1>Series not found.</h1>

        <Link to="/" className="back-link">
          ← BACK HOME
        </Link>
      </div>
    );
  }

  const categoryName =
    categoryNames[category] || category.toUpperCase();

  return (
    <article className="series-page">

      {/* BACK */}
      <Link
        to={`/work/${category}`}
        className="back-link series-back"
      >
        ← BACK TO {categoryName.toUpperCase()}
      </Link>

      {/* HEADER */}
      <header className="series-header">

        <div className="series-topline">
          <span>{categoryName.toUpperCase()}</span>

          <span>{series.date}</span>
        </div>

        <h1>{series.title}</h1>

        <div className="series-intro">
          <p className="series-description">
            {series.description}
          </p>

          <span className="series-count">
            {String(series.photos.length).padStart(2, "0")} PHOTOS
          </span>
        </div>

      </header>

      {/* DETAILS */}
      <section className="series-details" aria-label="Series details">

        <div>
          <span>MODEL / SUBJECT</span>
          <strong>{series.model}</strong>
        </div>

        <div>
          <span>LOCATION</span>
          <strong>{series.location}</strong>
        </div>

        <div>
          <span>DATE</span>
          <strong>{series.date}</strong>
        </div>

        <div>
          <span>CAMERA</span>
          <strong>{series.camera}</strong>
        </div>

        <div>
          <span>LENS</span>
          <strong>{series.lens}</strong>
        </div>

      </section>

      {/* GALLERY */}
      <section className="series-gallery">

        {series.photos.map((photo, index) => (
          <figure
            key={`${series.slug}-${index}`}
            className={
              index === 0
                ? "gallery-feature"
                : "gallery-item"
            }
          >
            <img
              src={photo}
              alt={`${series.title} — photograph ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />

            <figcaption>
              {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}

      </section>

      {/* FOOTER */}
      <footer className="series-footer">

        <Link
          to={`/work/${category}`}
          className="series-next-link"
        >
          <span>←</span>
          <strong>VIEW ALL {categoryName.toUpperCase()}</strong>
        </Link>

        <span className="series-footer-title">
          {series.title}
        </span>

      </footer>

    </article>
  );
}