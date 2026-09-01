import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";

import App from "./App";
import "./index.css";

function SmoothScroll() {
  useEffect(() => {
    // Let phones use native touch scrolling
    if (window.innerWidth <= 700) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      lerp: 0.08,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>

      <SmoothScroll />

      <App />

    </BrowserRouter>
  </React.StrictMode>
);