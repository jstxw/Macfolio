import { useGSAP } from "@gsap/react";
import { dockApps } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import useWindowStore from "../store/Store";

const Dock = () => {
  const { openWindow, closeWindow, restoreWindow, windows } = useWindowStore();
  const dockRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Entrance animation - slide up from bottom after 1s
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power3.out" }
    );
  }, []);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const items = dock.querySelectorAll(".dock-item");
    const { left } = dock.getBoundingClientRect();

    const animateItems = (mouseX) => {
      items.forEach((item) => {
        const { left: itemLeft, width } = item.getBoundingClientRect();
        const center = itemLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2) / 5000);

        const icon = item.querySelector(".dock-icon");
        const label = item.querySelector(".dock-label");

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });

        gsap.to(label, {
          scale: 1 + 0.3 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const resetItems = () => {
      items.forEach((item) => {
        const icon = item.querySelector(".dock-icon");
        const label = item.querySelector(".dock-label");

        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power1.out",
        });

        gsap.to(label, {
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX - left;
      animateItems(mouseX);
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetItems);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetItems);
    };
  }, []);
  const toggleApp = (app) => {
    // Handle external links
    if (app.link) {
      window.open(app.link, "_blank");
      return;
    }

    if (!app.canOpen) return;

    const win = windows[app.id];

    if (!win) {
      console.error("Window not found for id:", app.id);
      return;
    }

    if (win.isMinimized) {
      // Restore minimized window
      restoreWindow(app.id);
    } else if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock" ref={sectionRef} className="opacity-0">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen, link }) => (
          <div key={id} className="dock-item flex flex-col items-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              disabled={!canOpen && !link}
              onClick={() => toggleApp({ id, canOpen, link })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen || link ? "" : "opacity-60"}
              />
            </button>
            <span className="dock-label text-white text-xs font-georama">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
