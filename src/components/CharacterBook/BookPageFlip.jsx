// 📖 BookPageFlip.jsx
// This component animates a sequence of page flip frames (images) to simulate a book opening/closing.
// It uses setInterval to flip through a series of image frames passed via props.

import { useEffect, useState } from "react";
import "./character-book.css";

// Props:
// - onFinish: function to call when animation is done
// - direction: "right" (default) or "close"
// - frames: array of frame numbers to animate
// - folder: name of the image folder
// - baseName: base name of the image files

function BookPageFlip({ onFinish, direction = "right", frames, folder, baseName }) {
  // 🌀 State
  const [frameIndex, setFrameIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 🌄 Preload all frames into memory before animation starts
  useEffect(() => {
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === frames.length) {
        setImagesLoaded(true);
      }
    };

    frames.forEach((frame) => {
      const padded = String(frame).padStart(2, "0");
      const src = direction === "close" ? `/images/${folder}/${baseName}-${frame}.webp` : `/images/${folder}/${baseName}-${padded}.webp`;

      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
  }, [frames, folder, baseName, direction]);

  // ⏱️ useEffect for frame animation
  useEffect(() => {
    if (!imagesLoaded) return;

    let i = 0;
    let animationFrame;
    let lastTime = performance.now();
    const frameDelay = 75; // milliseconds per frame

    const animate = (time) => {
      if (time - lastTime >= frameDelay) {
        setFrameIndex(i);
        i++;
        lastTime = time;
      }

      if (i < frames.length) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(onFinish, 80);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [imagesLoaded, direction, onFinish, frames]);

  const currentFrame = frames[frameIndex];
  const padded = String(currentFrame).padStart(2, "0");
  const imagePath = direction === "close" ? `/images/${folder}/${baseName}-${currentFrame}.webp` : `/images/${folder}/${baseName}-${padded}.webp`;

  return (
    <div className="book-flip-frame" style={{ height: "100vh", overflow: "hidden" }}>
      <img
        src={imagePath}
        alt={`Page Flip ${direction}`}
        className="book-img"
        style={{
          opacity: 1,
        }}
      />
    </div>
  );
}

export default BookPageFlip;
