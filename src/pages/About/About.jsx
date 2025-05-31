// =====================================================
// 📦 Imports
// =====================================================
import "./about.css";
import SOUND_VOLUMES from "../../config/soundConfig";
import playClickSound from "../../config/playClickSound";
import CharacterBook from "../../components/CharacterBook/CharacterBook";
import CharacterBookMobile from "../../components/CharacterBook/CharacterBookMobile";
import PixelBackground from "../../components/PixelBackground/PixelBackground";
import { useState, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useMediaQuery } from "react-responsive";

// =====================================================
// 🎯 About Component
// =====================================================
function About() {
  // 🔍 Device check
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  // 🔢 State & Refs
  const [showBook, setShowBook] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [displayFrame, setDisplayFrame] = useState(null);
  const [bgImage, setBgImage] = useState("/images/ui/backgrounds/caves-bg.png");

  const openSoundRef = useRef(null);
  const closeSoundRef = useRef(null);
  const flipSoundRef = useRef(null);

  // =====================================================
  // 🧠 useEffect Hooks
  // =====================================================

  // 🖼️ Bakgrundsbild beroende på skärmstorlek
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth <= 1024 ? "/images/ui/backgrounds/cliff-path.png" : "/images/ui/backgrounds/cliff-path.png");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔮 ScrollReveal + bildförladdning
  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      const img = new Image();
      img.src = `/images/rpg-book/Open/book-open-style-${i}.png`;
    }

    if (!isMobile) {
      ScrollReveal().reveal(".book-cover-screen", {
        origin: "bottom",
        distance: "20px",
        opacity: 0,
        duration: 1000,
        delay: 100,
        easing: "ease-in-out",
        reset: false,
      });
      ScrollReveal().reveal(".book-bg-btn", {
        origin: "bottom",
        distance: "20px",
        opacity: 0,
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: false,
      });
    }
  }, [isMobile]);

  // =====================================================
  // 🪄 Event Handlers
  // =====================================================

  const handleOpenBook = () => {
    playClickSound();

    if (openSoundRef.current) {
      openSoundRef.current.currentTime = 0;
      openSoundRef.current.volume = SOUND_VOLUMES.openBook;
      openSoundRef.current.play();
    }

    setIsOpening(true);
    setShowBook(false);
    setDisplayFrame(1);

    let frame = 2;
    const interval = setInterval(() => {
      setDisplayFrame(frame);
      frame++;
      if (frame > 5) {
        clearInterval(interval);
        setIsOpening(false);
        setDisplayFrame(null);
        setShowBook(true);
      }
    }, 75);
  };

  const playCloseSound = () => {
    if (closeSoundRef.current) {
      closeSoundRef.current.currentTime = 0;
      closeSoundRef.current.volume = SOUND_VOLUMES.closeBook;
      setTimeout(() => {
        closeSoundRef.current.play();
      }, 50);
    }
  };

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <div className="no-scroll-wrapper">
      {/* 🌌 Bakgrundsbild */}
      <PixelBackground image={bgImage} />

      {/* 🧱 RPGUI Ram runt allt */}
      <div className="rpgui-container framed-golden-2 full-page-frame">
        <div className="page about-page">
          {/* 🎵 Ljud */}
          <audio ref={openSoundRef} src="/sounds/open-book.wav" preload="auto" />
          <audio ref={closeSoundRef} src="/sounds/book-close.mp3" preload="auto" />
          <audio ref={flipSoundRef} src="/sounds/book-page-flip.mp3" preload="auto" />

          {/* 🧙 Desktop */}
          {!isMobile ? (
            <>
              {displayFrame && (
                <div className="book-opening-animation">
                  <img
                    src={`/images/rpg-book/Open/book-open-style-${displayFrame}.png`}
                    onError={(e) => (e.target.style.display = "none")}
                    alt="Book Animation"
                    className="book-cover-img"
                  />
                </div>
              )}

              {!showBook && !isOpening && !isClosing && !displayFrame && (
                <div className="book-cover-screen">
                  <img src="/images/rpg-book/Open/book-open-style-1.png" alt="Closed Book Cover" className="book-cover-img" />
                  <div className="book-cover-content">
                    <h1>Nicholas Sjöstrand</h1>
                    <h2 className="book-subtitle">Frontend Developer</h2>
                    <p className="book-intro">
                      A fullstack development student focusing on the frontend path — where design and interactivity meet. Open the book to discover more about
                      my character and skills.
                    </p>
                    <button className="book-bg-btn rpgui-cursor-point" onClick={handleOpenBook}>
                      Open Character Book
                    </button>
                  </div>
                </div>
              )}

              {showBook && !isOpening && !isClosing && !displayFrame && (
                <CharacterBook
                  onClose={() => setShowBook(false)}
                  playCloseSound={playCloseSound}
                  playFlipSound={() => {
                    if (flipSoundRef.current) {
                      flipSoundRef.current.currentTime = 0;
                      flipSoundRef.current.volume = SOUND_VOLUMES.flipBook;
                      flipSoundRef.current.play();
                    }
                  }}
                />
              )}
            </>
          ) : (
            <CharacterBookMobile />
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
