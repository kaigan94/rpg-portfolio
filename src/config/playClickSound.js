// =====================================================
// 🔊 playClickSound Utility
// =====================================================
import SOUND_VOLUMES from "./soundConfig";

const playClickSound = () => {
  const audio = new Audio("/sounds/button-click.mp3");
  audio.preload = "auto"; // 📦 ensure early loading
  audio.volume = SOUND_VOLUMES.click;
  audio.play().catch(() => {}); // 🚫 suppress autoplay policy errors
};

export default playClickSound;
