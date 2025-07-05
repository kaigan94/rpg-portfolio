// =====================================================
// 📦 Imports
// =====================================================
import "./hero.css";
import playClickSound from "../../config/playClickSound";
import { useNavigate } from "react-router-dom";
// import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// =====================================================
// 🎯 Hero Component
// =====================================================
function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    playClickSound();
    navigate("/about");
  };

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <div className="no-scroll-wrapper">
      <section className="hero-section">
        {/* 🧙‍♂️ Avatar + Frame */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/images/ui/borders/dragon-border.webp" alt="Avatar Frame" className="hero-frame" loading="lazy" />
          <img src="/images/nico-wizard.webp" alt="Avatar" className="hero-avatar" loading="lazy" />
        </motion.div>

        {/* 📜 Name & Introduction Scroll */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="hero-name">Nicholas Sjöstrand</h1>
          <p className="hero-description">Fullstack developer student with a passion for frontend, fantasy art and magical UI design.</p>
        </motion.div>

        {/* ✨ Call to Action Button */}
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <button className="rpgui-button hero-rpgui-button" onClick={handleClick}>
            ENTER PORTFOLIO
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
