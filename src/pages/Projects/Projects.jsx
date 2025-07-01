// =====================================================
// 📦 Imports
// =====================================================
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import PixelBackground from "../../components/PixelBackground/PixelBackground";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./projects.css";

// =====================================================
// 🧩 Projects Component
// =====================================================
function Projects() {
  // 🎯 Background image state
  const [bgImage, setBgImage] = useState("/images/ui/backgrounds/treasure-room.webp");

  // 🔄 Handle responsive background
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage("/images/ui/backgrounds/treasure-room-mobile.webp");
      } else {
        setBgImage("/images/ui/backgrounds/treasure-room.webp");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔮 ScrollReveal animations
  useEffect(() => {
    ScrollReveal().reveal(".section-header", {
      origin: "top",
      distance: "20px",
      opacity: 0,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    ScrollReveal().reveal(".sr-card", {
      origin: "bottom",
      distance: "20px",
      opacity: 0,
      duration: 1000,
      interval: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <div className="page projects-page">
      <PixelBackground image={bgImage} />

      {/* 🟡 RAMEN ska ligga separat! */}
      <div className="rpgui-container framed-golden-2 full-page-frame" />

      {/* 🟢 Innehållet som scrollas */}
      <div className="scroll-content-area">
        <div className="page-wrapper projects-wrapper">
          <div className="section-header small">
            <h2 className="section-title">MY QUESTS</h2>
          </div>

          <ProjectCard
            title="Noctra"
            description="A magical counting app where you can increment, decrement, save entries, track totals, and export your data as a .txt file."
            tech="JavaScript, HTML, CSS"
            icon="/icons/scroll-open.png"
            image="/images/previews/noctra-preview.png"
            link="https://noctra.netlify.app/"
          />

          <ProjectCard
            title="Cocktail Explorer"
            description="A responsive web app that lets users search for cocktails and view detailed instructions and ingredients. Part of a school project."
            tech="JavaScript, HTML, API, Tailwind CSS"
            icon="/icons/drink.png"
            image="/images/previews/cocktail-preview.png"
            link="https://kaigan-cocktail-app.netlify.app/"
          />

          <ProjectCard
            title="Dungeon Mapper"
            description="Drag, drop & design pixel-perfect dungeons for your party!"
            tech="React, JS, HTML, CSS"
            icon="/icons/skull.png"
            image="/images/dungeon-mapper.png"
            link=""
            rarity="LEGENDARY"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
