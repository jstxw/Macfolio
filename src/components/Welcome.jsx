import React from "react";
import { useRef, useEffect, useState } from "react";
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
  if (!container) return () => {};
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

const DrawnPortfolio = ({ onAnimationComplete }) => {
  const containerRef = useRef(null);
  const strokeRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const strokeText = strokeRef.current;
    const fillText = fillRef.current;
    if (!strokeText || !fillText) return;

    gsap.set(strokeText, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(fillText, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(strokeText, {
      clipPath: "inset(0 0% 0 0)",
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(fillText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.to(
      strokeText,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => onAnimationComplete?.(),
      },
      "<"
    );
  }, [onAnimationComplete]);

  const textStyle = {
    fontSize: "clamp(4rem, 10vw, 8rem)",
    fontFamily: "Georama, sans-serif",
    fontStyle: "italic",
    fontWeight: 400,
  };

  return (
    <div ref={containerRef} className="relative mt-7">
      <span
        ref={strokeRef}
        className="text-transparent"
        style={{
          ...textStyle,
          WebkitTextStroke: "2px #e5e7eb",
        }}
      >
        Portfolio
      </span>
      <span
        ref={fillRef}
        className="absolute left-0 top-0 text-gray-200"
        style={textStyle}
      >
        Portfolio
      </span>
    </div>
  );
};

const Welcome = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const [animationDone, setAnimationDone] = useState(false);

  useGSAP(() => {
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    return () => {
      subtitleCleanup();
    };
  }, []);

  useEffect(() => {
    if (animationDone && titleRef.current) {
      const titleCleanup = setupTextHover(titleRef.current, "title");
      return () => titleCleanup();
    }
  }, [animationDone]);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Justin! Welcome to my",
          "text-4xl italic font-georama",
          100
        )}
      </p>
      {!animationDone ? (
        <DrawnPortfolio onAnimationComplete={() => setAnimationDone(true)} />
      ) : (
        <h1 ref={titleRef} className="mt-7">
          {renderText("Portfolio", "text-9xl italic font-georama text-gray-200", 400)}
        </h1>
      )}
      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
