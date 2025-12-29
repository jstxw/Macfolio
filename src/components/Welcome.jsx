import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;
  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMovement = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 12000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  container.addEventListener("mousemove", handleMouseMovement);
  container.addEventListener("mousemove", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMovement);
    container.removeEventListener("mousemove", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleref = useRef(null);
  const subtitleRef = useRef(null);
  //so the useref hook in react basically allows you to reference and change items withoutn rerender

  useGSAP(() => {
    const titleCleaup = setupTextHover(titleref.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    return () => {
      subtitleCleanup(), titleCleaup();
    };
  }, []);
  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Justin! Welcome to my",
          "text-4xl italic font-georama",
          100
        )}
      </p>
      <h1 ref={titleref} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>
      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
