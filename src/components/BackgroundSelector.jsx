import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const wallpapers = [
  { id: 1, src: "/images/wallpaper1.jpg" },
  { id: 2, src: "/images/wallpaper2.jpg" },
];

const BackgroundSelector = ({ selected, onSelect }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 opacity-0"
    >
      {wallpapers.map((wallpaper) => (
        <button
          key={wallpaper.id}
          onClick={() => onSelect(wallpaper.src)}
          className={`size-8 rounded-full border-2 bg-cover bg-center transition-all hover:scale-110 ${
            selected === wallpaper.src
              ? "border-white shadow-lg"
              : "border-white/50"
          }`}
          style={{ backgroundImage: `url(${wallpaper.src})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSelector;
