// =====================================================
// 🏠 Home Page
// =====================================================
import Hero from "../../components/Hero/Hero";
import "./home.css";
import PixelBackground from "../../components/PixelBackground/PixelBackground";

// =====================================================
// 🎮 Home Component
// =====================================================

function Home() {
  return (
    <>
      {/* Bakgrund bakom ramen */}
      <PixelBackground image="/images/ui/backgrounds/hero-bg.webp" />

      {/* RPGUI Yttre ram + Hero */}
      <div className="rpgui-container framed-golden-2 full-page-frame">
        <main className="home-wrapper">
          <Hero />
        </main>
      </div>
    </>
  );
}

export default Home;
