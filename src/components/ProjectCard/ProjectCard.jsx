// =====================================================
// 📦 Imports
// =====================================================
import playClickSound from "../../config/playClickSound.js";
import "./project-card.css";
import "../../styles/buttons.css";
// =====================================================
// 🧩 ProjectCard Component
// =====================================================
function ProjectCard({ image, title, description, tech, icon, link, rarity = "RARE" }) {
  return (
    <div className={`project-card-frame ${rarity.toLowerCase()} sr-card`}>
      {/* 🏷️ Rarity Label */}
      <span className={`card-label ${rarity.toLowerCase()}`}>{rarity}</span>

      <div className="project-card-inner">
        {/* 🖼️ Image */}
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
        </div>

        {/* 📝 Text Panel */}
        <div className="project-text-panel">
          {/* 🧱 Header */}
          <div className="card-header">
            <img src={icon} alt="Project Icon" className="project-icon-img" />
            <h3 className="project-title project-title-pixel">{title}</h3>
          </div>

          {/* 📝 Description */}
          <p className="project-description">{description}</p>

          {/* ⚙️ Tech */}
          <p className="project-tech">
            <img src="/icons/cog.png" alt="Tech Icon" className="tech-icon" loading="lazy" />
            {tech}
          </p>

          {/* 🔗 Link Button */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="pixel-btn-small" onClick={playClickSound}>
              <img src="/icons/mag-glass.png" alt="Demo Icon" className="demo-icon" loading="lazy" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
