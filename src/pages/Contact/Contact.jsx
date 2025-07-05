// =====================================================
// 📦 Imports
// =====================================================
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import PixelBackground from "../../components/PixelBackground/PixelBackground";
import "./contact.css";

// =====================================================
// 🔊 Sound Functions
// =====================================================
const playClickSound = () => {
  const audio = new Audio("/sounds/button-click.mp3");
  audio.volume = 0.2;
  audio.play();
};

const hoverSound = () => {
  const audio = new Audio("/sounds/book-hover.mp3");
  audio.volume = 0.1;
  audio.play();
};

// =====================================================
// 📬 Contact Page Component
// =====================================================
function Contact() {
  // 🎯 State
  const [bgImage, setBgImage] = useState("/images/ui/backgrounds/contact-me.webp");

  // 🧠 Handle background image on resize
  useEffect(() => {
    const handleResize = () => {
      setBgImage("/images/ui/backgrounds/contact-me.webp");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧠 ScrollReveal animations
  useEffect(() => {
    const config = {
      origin: "bottom",
      distance: "20px",
      opacity: 0,
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal(".section-header", { ...config, origin: "top" });
    ScrollReveal().reveal(".contact-frame", { ...config, delay: 100 });
    ScrollReveal().reveal(".contact-card", { ...config, delay: 200 });
    ScrollReveal().reveal(".contact-links", { ...config, delay: 300 });
    ScrollReveal().reveal(".cv-title", { ...config, delay: 300 });
  }, []);

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <div className="page contact-page">
      <PixelBackground image={bgImage} />

      {/* 🎁 Dekorativ fast ram */}
      <div className="rpgui-container framed-golden-2 full-page-frame" />

      {/* 📜 Scrollbart innehåll */}
      <div className="contact-scroll">
        <div className="page-wrapper contact-container">
          <div className="section-header big">
            <h2 className="section-title">CONTACT ME</h2>
          </div>

          <div className="contact-frame">
            <div className="contact-inner contact-card">
              {/* 📝 Intro text */}
              <div className="contact-panel">
                <div className="contact-section-header">
                  <h3 className="contact-section-title">
                    <img src="/icons/bubble.webp" alt="" className="section-icon" />
                    Let’s Connect
                  </h3>
                </div>
                <p className="contact-text">
                  If you’ve found your way here — welcome!
                  <br />
                  <br />
                  Have you checked out my character book already? If not, click the About section in the navigation bar above to see it in action!
                  <br />
                </p>

                <div className="contact-section-header">
                  <h3 className="contact-section-title">
                    <img src="/icons/coffee.webp" alt="" className="section-icon" />
                    About Me
                  </h3>
                </div>
                <p className="contact-text">
                  Hi, I'm Nicholas - a fullstack development student based in Lund, Sweden, graduating in summer 2026.
                  <br />
                  <br />
                  After many years of figuring out my true passion in life, my mind always buzzing with thoughts and ideas, I finally found my calling in coding
                  and software development.
                  <br />
                  <br />
                  In my free time, I enjoy spending time with my partner and our little dog. I also enjoy reading fantasy, playing guitar, coding, board games,
                  video games, and love to travel and explore new places.
                  <br />
                  <br />
                  Currently open to internships or junior positions where I can contribute, grow, and level up my skills.
                </p>

                <div className="contact-section-header">
                  <h3 className="contact-section-title">
                    <img src="/icons/pencil.webp" alt="" className="section-icon" />
                    HOW TO REACH ME?
                  </h3>
                </div>
                <p className="contact-text">
                  Below you'll find links to my LinkedIn, GitHub, and email. Feel free to reach out if you have any questions or just want to say hi.
                  <br />
                  <br />
                  <img src="/icons/stars.webp" alt="" className="stars-icon" /> Hope to hear from you soon!
                </p>
              </div>

              {/* 🔗 Contact links */}
              <div className="contact-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nicholas-sjostrand/"
                  className="tooltip-wrapper linkedin-link"
                  onClick={playClickSound}
                  onMouseEnter={hoverSound}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/book-linkedin.png" alt="LinkedIn" className="contact-icon-img" loading="lazy" />
                  <span className="tooltip">
                    <img src="/icons/heart.png" alt="LinkedIn Icon" className="tooltip-icon" loading="lazy" />
                    Let’s connect
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/kaigan94"
                  className="tooltip-wrapper github-link"
                  onClick={playClickSound}
                  onMouseEnter={hoverSound}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/book-github.png" alt="GitHub" className="contact-icon-img" loading="lazy" />
                  <span className="tooltip">
                    <img src="/icons/bag.png" alt="Code Inventory Icon" className="tooltip-icon" loading="lazy" />
                    Explore my code inventory
                  </span>
                </a>

                {/* Mail */}
                <a href="mailto:kaigan.codes@gmail.com" className="tooltip-wrapper mail-link" onClick={playClickSound} onMouseEnter={hoverSound}>
                  <img src="/icons/book-mail.png" alt="Email" className="contact-icon-img" loading="lazy" />
                  <span className="tooltip">
                    <img src="/icons/quill.png" alt="Mail Me Icon" className="tooltip-icon" loading="lazy" />
                    Send me an owl or an email
                  </span>
                </a>
              </div>

              {/* 📄 CV Section */}
              <div className="cv-title">
                <span>Download My CV</span>
                <img src="/icons/arrows/arrow-yellow.webp" alt="CV Icon" className="cv-title-icon" loading="lazy" />
              </div>

              <div className="cv-downloads">
                <div className="cv-icon-group">
                  <img src="/icons/flag-swe.png" alt="Swedish Flag" className="cv-flag" loading="lazy" />
                  <a href="/pdf/Nicholas-S-CV-SWE.pdf" download onClick={playClickSound} onMouseEnter={hoverSound} className="cv-icon-link">
                    Download in Swedish
                  </a>
                </div>
                <div className="cv-icon-group">
                  <img src="/icons/flag-uk.png" alt="UK Flag" className="cv-flag" loading="lazy" />
                  <a href="/pdf/Nicholas-S-CV-ENG.pdf" download onClick={playClickSound} onMouseEnter={hoverSound} className="cv-icon-link">
                    Download in English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
