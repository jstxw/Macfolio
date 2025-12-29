import React from "react";

const wallpapers = [
  { id: 1, src: "/images/wallpaper1.jpg" },
  { id: 2, src: "/images/wallpaper2.jpg" },
];

const BackgroundSelector = ({ selected, onSelect }) => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
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
