import "./pixel-background.css";

function PixelBackground({ image }) {
  return (
    <div
      className="pixel-bg"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

export default PixelBackground;
