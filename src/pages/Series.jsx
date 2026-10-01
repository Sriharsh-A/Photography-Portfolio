import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/portfolio";

export default function Series() {
  const { category, slug } = useParams();

  const series = portfolio[category]?.find(
    (item) => item.slug === slug
  );

  if (!series) {
    return (
      <div className="not-found">
        <h1>Series not found.</h1>
        <Link to="/">← Back home</Link>
      </div>
    );
  }

  return (
    <article className="series-page">

      {/* BACK TO CATEGORY */}
      <Link
        to={`/work/${category}`}
        className="back-link"
      >
        ← BACK TO WORK
      </Link>

      <div className="series-header">

        <div className="series-category">
          {category === "products"
            ? "PRODUCT"
            : category.toUpperCase()}
        </div>

        <h1>{series.title}</h1>

        <p className="series-description">
          {series.description}
        </p>

      </div>

      {/* DETAILS */}

      <div className="series-details">

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

      </div>

      {/* GALLERY */}

      <div className="series-gallery">

        {series.photos.map((photo, index) => (
          <figure
            key={index}
            className={
              index === 0
                ? "gallery-feature"
                : ""
            }
          >
            <img
              src={photo}
              alt={`${series.title} ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </figure>
        ))}

      </div>

      {/* FOOTER */}

      <div className="series-footer">

        <Link
          to={`/work/${category}`}
          className="back-link"
        >
          ← ALL {category === "products"
            ? "PRODUCT"
            : category.slice(0, -1).toUpperCase()}
        </Link>

        <span>{series.title}</span>

      </div>

    </article>
  );
}