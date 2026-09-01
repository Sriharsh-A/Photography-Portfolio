import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        SRIHARSH<span>.</span>
      </Link>

      <nav>
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>

        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}