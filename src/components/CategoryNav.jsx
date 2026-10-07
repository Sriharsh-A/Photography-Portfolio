import { useLocation, useNavigate } from "react-router-dom";
import "./CategoryNav.css";

const categories = [
  { label: "PORTRAITS", path: "/work/portraits" },
  { label: "AUTOMOTIVE", path: "/work/automotive" },
  { label: "EVENTS", path: "/work/events" },
];

export default function CategoryNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentCategory = location.pathname.split("/")[2];

  return (
    <nav className="category-nav" aria-label="Portfolio categories">
      {categories.map((category) => {
        const categoryName = category.path.split("/")[2];
        const isActive = currentCategory === categoryName;

        return (
          <button
            key={category.path}
            className={`category-nav-item ${isActive ? "active" : ""}`}
            onClick={() => navigate(category.path)}
          >
            {category.label}
          </button>
        );
      })}
    </nav>
  );
}