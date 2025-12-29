import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import BackgroundSelector from "./components/BackgroundSelector";

function App() {
  const [background, setBackground] = useState("/images/wallpaper1.jpg");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const needsOverlay = background === "/images/wallpaper1.jpg" || background === "/images/wallpaper2.jpg";
  const bgPosition = background === "/images/wallpaper1.jpg" ? "center top" : "center";

  const handleBackgroundChange = (newBg) => {
    if (newBg === background) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setBackground(newBg);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  return (
    <main
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgPosition,
      }}
    >
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />
      {needsOverlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}
      <Navbar />
      <Welcome />
      <Dock />
      <BackgroundSelector selected={background} onSelect={handleBackgroundChange} />
    </main>
  );
}

export default App;
