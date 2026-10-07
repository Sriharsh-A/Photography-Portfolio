import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import CategoryNav from "../components/CategoryNav";

const categoryNames = {
  portraits: "Portraits",
  automotive: "Automotive",
  events: "Events",
};

export default function CategoryPage() {
  const { category } = useParams();
  const items = portfolio[category];
  const title = categoryNames[category];

  if (!items) {
    return (
      <div className="not-found">
        <h1>Category not found.</h1>
        <Link to="/">← Back home</Link>
      </div>
    );
  }

  return (
    <>
      <CategoryNav />

      <div className="category-page">
        <div className="category-page-header">
          <Link to="/" className="back-link">
            ← BACK HOME
          </Link>

          <div className="series-category">
            {title.toUpperCase()}
          </div>

          <h1>{title}</h1>

          <p>
            A collection of selected {title.toLowerCase()} work.
          </p>
        </div>

        <div className="category-page-grid">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/series/${category}/${item.slug}`}
              className="photo-card"
            >
              <div className="image-wrapper">
                <img
                  src={item.cover}
                  alt={item.title}
                />

                <div className="card-overlay">
                  <span>VIEW SERIES</span>
                  <span>↗</span>
                </div>
              </div>

              <div className="card-info">
                <h3>{item.title}</h3>
                <span>{item.model}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}