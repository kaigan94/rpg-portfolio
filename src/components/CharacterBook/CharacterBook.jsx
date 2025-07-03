// =====================================================
// 🔢 State & Imports
// =====================================================
import { useState } from "react";
import BookPageFlip from "./BookPageFlip";
import "./character-book.css";
import playClickSound from "../../config/playClickSound";

function CharacterBook({ onClose, playCloseSound, playFlipSound }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("right");

  // =====================================================
  // 🧠 Handlers
  // =====================================================
  const handleNext = () => {
    if (currentPage < 1 && !isFlipping) {
      playClickSound();
      setIsFlipping(true);
      setFlipDirection("right");
      playFlipSound();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      playClickSound();
      setIsFlipping(true);
      setFlipDirection("left");
      playFlipSound();
    }
  };

  const handleFlipFinish = () => {
    setCurrentPage((prev) => (flipDirection === "right" ? prev + 1 : prev - 1));
    setIsFlipping(false);
  };

  const handleClose = () => {
    playClickSound();
    setIsFlipping(true);
    setFlipDirection("close");
  };

  const handleCloseFinish = () => {
    playCloseSound();
    onClose();
  };

  const getFrames = (direction) => {
    const frames = [...Array(9).keys()];
    return direction === "left" ? frames.reverse() : frames;
  };

  const getFolder = (direction) => {
    if (direction === "right") return "book-flip/right";
    if (direction === "left") return "book-flip/right";
    return "rpg-book/Open";
  };

  // =====================================================
  // 📄 Render Page Function
  // =====================================================
  const renderPage = (side) => {
    if (currentPage === 0 && side === "left") {
      return (
        <div className="book-content-box character-info left">
          <div className="character-banner-shared">
            <img src="/images/ui/borders/scroll-header-2.png" alt="Character Banner" loading="lazy" />
            <span className="character-label">Nicholas Sjöstrand</span>
          </div>
          <img src="/images/nico-wizard-scaled.webp" alt="Pixel Avatar" className="avatar-img" loading="lazy" />
          <div className="character-details">
            <p>
              <img src="/icons/wizard-hat-2.png" alt="" className="icon-inline" loading="lazy" />
              <strong>Class:</strong> Frontend Adventurer
            </p>
            <p>
              <img src="/icons/person-wings.png" alt="" className="icon-inline" loading="lazy" />
              <strong>Level:</strong> Fullstack Development Student (YH)
            </p>
            <p>
              <img src="icons/plant.png" alt="" className="icon-inline" loading="lazy" />
              <strong>Currently learning:</strong> React, Java, Spring Boot, MySQL, UI Crafting
            </p>
          </div>
        </div>
      );
    }

    if (currentPage === 0 && side === "right") {
      return (
        <div className="book-content-box quote-page right">
          <blockquote>“Crafting creative, user-friendly worlds through code – powered by coffee, metal and magic.”</blockquote>
          <div className="rpg-row">
            <img src="/images/coffin-man.webp" alt="" loading="lazy" />
          </div>
        </div>
      );
    }

    if (currentPage === 1 && side === "left") {
      return (
        <div className="book-content-box skills left">
          <img className="skills-banner" src="/images/ui/borders/scroll-header-2.png" alt="Skills Banner" loading="lazy" />
          <span className="name-label">Skills & Abilities</span>
          <ul className="skills-list">
            <li>
              <img src="/icons/lightning-2.png" alt="" className="icon-inline" loading="lazy" />
              Frontend Magic: HTML, CSS, JavaScript, React
            </li>
            <li>
              <img src="/icons/potion-blue-glow.png" alt="" className="icon-inline" loading="lazy" />
              Backend Potions: Java, Spring Boot, MySQL & SQLite, Node.js
            </li>
            <li>
              <img src="/icons/scroll.png" alt="" className="icon-inline" loading="lazy" />
              UI Scrolls: Smart Layouts, Creative Styling & User Friendly Interfaces
            </li>
            <li>
              <img src="/icons/brain.png" alt="" className="icon-inline" loading="lazy" />
              Passive Skills: +10 Creativity when working after dark,
              <br />
              +5 Problem Solving in the morning
              <br />
            </li>
          </ul>
        </div>
      );
    }

    if (currentPage === 1 && side === "right") {
      return (
        <div className="book-content-box origin right">
          <img className="origin-banner" src="/images/ui/borders/scroll-header-2.png" alt="Origin Banner" loading="lazy" />
          <span className="name-label">Origin & Background</span>
          <ul className="origin-list">
            <li>
              <img src="/icons/sweden-flag.webp" alt="Home Icon" className="icon-inline" loading="lazy" />
              Based in Lund, Sweden
            </li>
            <li>
              <img src="/icons/book.png" alt="Education Icon" className="icon-inline" loading="lazy" />
              Forged skills at Teknikhögskolan Lund – trained in fullstack arts
            </li>
            <li>
              <img src="/icons/leaf.png" alt="Inspiration Icon" className="icon-inline" loading="lazy" />
              Draws inspiration from fantasy stories, metal & old school RPG design
            </li>
            <li>
              <img src="/icons/boots-flame.png" alt="" className="icon-inline" loading="lazy" />
              Current Quest: Mastering JavaScript, React & finding a LIA (Internship)
            </li>
            <li>
              <img src="/icons/scroll-open.png" alt="Quest Icon" className="icon-inline" loading="lazy" />
              Seeks quests with purpose, personal growth & challenge
            </li>
          </ul>
        </div>
      );
    }

    return null;
  };

  // =====================================================
  // 🧙 Render
  // =====================================================
  return (
    <div className="character-book-wrapper">
      {isFlipping ? (
        flipDirection === "close" ? (
          <div className="book-flip-frame">
            <BookPageFlip direction="close" onFinish={handleCloseFinish} frames={[5, 4, 3, 2, 1]} folder="rpg-book/Open" baseName="book-open-style" />
          </div>
        ) : (
          <div className="book-flip-frame">
            <BookPageFlip
              direction={flipDirection}
              onFinish={handleFlipFinish}
              frames={getFrames(flipDirection)}
              folder={getFolder(flipDirection)}
              baseName="book-flip"
            />
          </div>
        )
      ) : (
        <div className="book-idle">
          <img src="/images/rpg-book/book-idle.webp" alt="Open Book Background" className="book-img" />
          <div className="book-layout">
            <div className="book-page left-page">{renderPage("left")}</div>
            <div className="book-page right-page">{renderPage("right")}</div>
          </div>
          <div className="book-controls">
            <button className="arrow-btn left" onClick={handlePrev} disabled={currentPage === 0}>
              <img src="/icons/arrows/arrow-left-0.webp" alt="Prev" loading="lazy" />
            </button>
            <button className="close-btn" onClick={handleClose}>
              <img src="/icons/close-x.webp" alt="Close" loading="lazy" />
            </button>
            <button className="arrow-btn right" onClick={handleNext} disabled={currentPage === 1}>
              <img src="/icons//arrows/arrow-right-0.webp" alt="Next" loading="lazy" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterBook;
