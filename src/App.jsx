import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import { Draggable } from "gsap/draggable";
import Terminal from "./windows/terminal";
import AboutMe from "./windows/AboutMe";
import Projects from "./windows/Projects";
import Photography from "./windows/Photography";
import BackgroundImage from "./assets/Background.jpg";
gsap.registerPlugin(Draggable);

function App() {
  const [background, setBackground] = useState(BackgroundImage);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const needsOverlay =
    background === "/images/wallpaper1.jpg" ||
    background === "/images/wallpaper2.jpg";
  const bgPosition =
    background === "/images/wallpaper1.jpg" ? "center top" : "center 70%";

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      {/* Page load fade from black */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none z-[100] transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Background transition overlay */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />
      {needsOverlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}
      {/* Slight darkening overlay for all backgrounds */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <AboutMe />
      <Projects />
      <Photography />
    </main>
  );
}

export default App;
