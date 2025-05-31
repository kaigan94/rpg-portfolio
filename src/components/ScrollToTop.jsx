// =====================================================
// 📦 Imports
// =====================================================
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// =====================================================
// 📍 ScrollToTop Component
// =====================================================
function ScrollToTop() {
  const { pathname } = useLocation();

  // 🚀 Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 💬 Smooth scroll
  }, [pathname]);

  // 🌀 Nothing to render
  return null;
}

export default ScrollToTop;
