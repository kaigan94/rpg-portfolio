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
      const src = direction === "close" ? `/images/${folder}/${baseName}-${frame}.png` : `/images/${folder}/${baseName}-${padded}.png`;

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
    const interval = setInterval(() => {
      setFrameIndex(i);
      i++;

      if (i >= frames.length) {
        clearInterval(interval);
        setTimeout(onFinish, 80); // Slight delay before finishing
      }
    }, 75);

    return () => clearInterval(interval); // Cleanup
  }, [imagesLoaded, direction, onFinish, frames]);

  const currentFrame = frames[frameIndex];
  const padded = String(currentFrame).padStart(2, "0");
  const imagePath = direction === "close" ? `/images/${folder}/${baseName}-${currentFrame}.png` : `/images/${folder}/${baseName}-${padded}.png`;

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
