import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Series from "./pages/Series";
import CategoryPage from "./pages/CategoryPage";

import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/work/:category"
            element={<CategoryPage />}
          />

          <Route
            path="/series/:category/:slug"
            element={<Series />}
          />

        </Routes>
      </main>
    </>
  );
}