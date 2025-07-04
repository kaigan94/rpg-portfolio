// =====================================================
// 📦 Imports
// =====================================================
import "./character-book-mobile.css";
import { useState, useRef } from "react";

function CharacterBookMobile() {
  // =====================================================
  // 🔢 State
  // =====================================================
  const [currentPage, setCurrentPage] = useState(0);
  const clickSoundRef = useRef(null);

  // =====================================================
  // 🎵 Click Sound
  // =====================================================
  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.2;
      clickSoundRef.current.play();
    }
  };

  // =====================================================
  // ⏩ Navigation
  // =====================================================
  const goToNext = () => {
    if (currentPage < 2) {
      playClickSound();
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      playClickSound();
      setCurrentPage(currentPage - 1);
    }
  };

  // =====================================================
  // 📄 Render Page Function
  // =====================================================
  const renderPage = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        return (
          <div className="mobile-book-page fade-in">
            <img src="/images/nico-wizard-scaled.webp" alt="Pixel Avatar" className="mobile-avatar" />
            <h2 className="mobile-section-title">Nicholas Sjöstrand</h2>
            <div className="mobile-section-content">
              <div className="icon-text-row">
                <img src="/icons/sweden-flag.webp" alt="Origin" className="icon-inline" loading="lazy" />
                <span>Origin: Lund, Sweden</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/wizard-hat-2.png" alt="Class" className="icon-inline" loading="lazy" />
                <span>Class: Frontend Mage</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/person-wings.png" alt="Level" className="icon-inline" loading="lazy" />
                <span>Level: Fullstack Student Developer (YH)</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/plant.png" alt="Currently learning" className="icon-inline" loading="lazy" />
                <span>Current Quest: Java, React & Spring Boot</span>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="mobile-book-page fade-in">
            <h2 className="mobile-section-title">Skills & Abilities</h2>
            <div className="mobile-section-content">
              <div className="icon-text-row">
                <img src="/icons/lightning-2.png" alt="Frontend" className="icon-inline" loading="lazy" />
                <span>HTML, CSS, JavaScript, React</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/potion-blue-glow.png" alt="Backend" className="icon-inline" loading="lazy" />
                <span>Node.js, Java, Spring Boot, SQLite</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/scroll.png" alt="UI" className="icon-inline" loading="lazy" />
                <span>Smart Layouts & UI Scrolls</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/brain.png" alt="Passive" className="icon-inline" loading="lazy" />
                <span>+10 Creativity after nightfall</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/hand-spell.png" alt="Ultimate" className="icon-inline" loading="lazy" />
                <span>
                  <strong>Ultimate:</strong> Pixel Overdrive – unlocks full visual polish
                </span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mobile-book-page fade-in">
            <h2 className="mobile-section-title">Origin & Background</h2>
            <div className="mobile-section-content">
              <div className="icon-text-row">
                <img src="/icons/book.png" alt="Education" className="icon-inline" loading="lazy" />
                <span>Trained at Teknikhögskolan Lund</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/leaf.png" alt="Inspiration" className="icon-inline" loading="lazy" />
                <span>Inspired by fantasy, metal, and old RPGs</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/boots-flame.png" alt="Quest" className="icon-inline" loading="lazy" />
                <span>Questing through final LIA</span>
              </div>
              <div className="icon-text-row">
                <img src="/icons/scroll-open.png" alt="Goal" className="icon-inline" loading="lazy" />
                <span>Seeking challenges, purpose & growth</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // =====================================================
  // 🧙 Render
  // =====================================================
  return (
    <div className="character-book-mobile">
      <audio ref={clickSoundRef} src="/sounds/button-click.mp3" preload="auto" />
      {renderPage(currentPage)}
      <div className="mobile-nav-buttons fixed-bottom">
        <button onClick={goToPrev} disabled={currentPage === 0} className="arrow-button">
          <img src="/icons/arrows/arrow-left-0.webp" alt="Previous" loading="lazy" />
        </button>
        <div className="mobile-page-indicator">Page {currentPage + 1} of 3</div>
        <button onClick={goToNext} disabled={currentPage === 2} className="arrow-button">
          <img src="/icons/arrows/arrow-right-0.webp" alt="Next" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

export default CharacterBookMobile;
