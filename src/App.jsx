// =====================================================
// 📦 Core Imports
// =====================================================
import { BrowserRouter as Router } from "react-router-dom";

// =====================================================
// 🧩 App Layout & Global Components
// =====================================================
import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop";

// =====================================================
// 🎨 Global Styles
// =====================================================
import "./styles/global.css";
import "./styles/fonts.css";
import "./styles/buttons.css";
import "./styles/rpgui-cursors.css";

// =====================================================
// 🚀 App Component
// =====================================================
function App() {
  return (
    <Router>
      {/* 🧭 Ensure scroll-to-top on route change */}
      <ScrollToTop />

      {/* 🌐 Main Layout with global cursor */}
      <div className="rpgui-cursor-default">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
