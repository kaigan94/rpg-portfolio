// =====================================================
// 📦 Imports
// =====================================================
import { Routes, Route, useLocation } from "react-router-dom";
import RPGNavbar from "./components/Navbar/RPGNavBar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// =====================================================
// 🧭 Layout Component
// =====================================================
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // 🏠 Göm navbar på startsidan

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <>
      {/* Navbar visas ej på Home (startsidan) */}
      {!isHome && <RPGNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Layout;
