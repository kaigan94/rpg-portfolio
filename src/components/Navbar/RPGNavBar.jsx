// =====================================================
// 📦 Imports
// =====================================================
import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuPortal from "./MenuPortal";
import "../../styles/buttons.css";
import "./rpg-navbar.css";

// =====================================================
// 🧭 RPGNavbar Component
// =====================================================
function RPGNavbar() {
  // 🔧 Refs & State
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const clickSoundRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { path: "/", icon: "/icons/rune.png", label: "Home" },
    { path: "/about", icon: "/icons/q-mark.png", label: "About" },
    { path: "/projects", icon: "/icons/pouch.png", label: "Projects" },
    { path: "/contact", icon: "/icons/letter.png", label: "Contact" },
  ];

  // 🔊 Load click sound
  useEffect(() => {
    const audio = new Audio("/sounds/button-click.mp3");
    clickSoundRef.current = audio;
  }, []);

  // 🔊 Play click sound
  const handleClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.15;
      clickSoundRef.current.play();
    }
  };

  // 🧭 Navigation helper
  const handleNavigate = (to) => {
    handleClickSound();
    navigate(to);
    setShowDropdown(false);
  };

  // 📤 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <nav className="rpg-navbar">
      <div className="navbar-content">
        {/* 🖥️ Desktop Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => handleNavigate("/")} className={({ isActive }) => `rpgui-button nav-btn ${isActive ? "active" : ""}`}>
              <img src="/icons/rune.png" alt="Home" className="nav-icon" loading="lazy" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => handleNavigate("/about")} className={({ isActive }) => `rpgui-button nav-btn ${isActive ? "active" : ""}`}>
              <img src="/icons/q-mark.png" alt="About" className="nav-icon" loading="lazy" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => handleNavigate("/projects")}
              className={({ isActive }) => `rpgui-button nav-btn ${isActive ? "active" : ""}`}
            >
              <img src="/icons/pouch.png" alt="Projects" className="nav-icon" loading="lazy" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => handleNavigate("/contact")} className={({ isActive }) => `rpgui-button nav-btn ${isActive ? "active" : ""}`}>
              <img src="/icons/letter.png" alt="Contact" className="nav-icon" loading="lazy" />
              Contact
            </NavLink>
          </li>
        </ul>

        {/* 📱 Mobile Dropdown Button */}
        <div className="custom-dropdown" ref={dropdownRef}>
          <button
            className="hanger-button"
            onClick={() => {
              handleClickSound();
              if (!showDropdown) {
                const chainSound = new Audio("/sounds/chain.mp3");
                chainSound.volume = 0.1;
                chainSound.play();
              }
              setShowDropdown((prev) => !prev);
            }}
          >
            <span className="hanger-label">MENU</span>
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <MenuPortal showDropdown={showDropdown} handleNavigate={handleNavigate} handleClickSound={handleClickSound} dropdownRef={dropdownRef} />
    </nav>
  );
}

export default RPGNavbar;
