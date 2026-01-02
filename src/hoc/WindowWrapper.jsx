//higher order components take a component and enchances it
//wraps the original component with props, logic, and behavior
import gsap from "gsap";
import { useRef, useEffect, useLayoutEffect } from "react";
import { Draggable } from "gsap/draggable";
import { useGSAP } from "@gsap/react";
import useWindowStore from "../store/Store";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const store = useWindowStore();

    const focusWindow = store.focusWindow;
    const closeWindow = store.closeWindow;
    const minimizeWindow = store.minimizeWindow;
    const windows = store.windows;

    const windowState = windows[windowKey];

    const ref = useRef(null);
    const wasMinimizedRef = useRef(false);

    if (!windowState) {
      console.error("Window key not found:", windowKey);
      return null;
    }

    const { isOpen, isMinimized, zIndex } = windowState;

    // Draggable setup
    useEffect(() => {
      if (ref.current) {
        const draggable = Draggable.create(ref.current, {
          type: "x,y",
          bounds: "main",
          trigger: ref.current.querySelector("#window-header"),
          onDragStart: () => focusWindow(windowKey),
        });

        return () => {
          draggable[0]?.kill();
        };
      }
    }, []);

    // Show window with GSAP when opened
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      // Center the window on screen
      const rect = el.getBoundingClientRect();
      const centerX = (window.innerWidth - rect.width) / 2;
      const centerY = (window.innerHeight - rect.height) / 2;

      gsap.set(el, { left: centerX, top: centerY, x: 0, y: 0 });

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    // Toggle display based on isOpen state
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized]);

    // Handle minimize/restore animation
    useEffect(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      if (isMinimized) {
        wasMinimizedRef.current = true;
        gsap.to(el, {
          scale: 0,
          opacity: 0,
          y: window.innerHeight,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else if (wasMinimizedRef.current) {
        // Restore from minimized
        wasMinimizedRef.current = false;
        el.style.display = "block";
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0, y: window.innerHeight },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    }, [isMinimized, isOpen]);

    //windows is an object destructuring of useWindowStore()
    //return the content under windowkey with the object windows
    return (
      <div
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          display: "none",
          position: "absolute",
        }}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component
          {...props}
          closeWindow={() => closeWindow(windowKey)}
          minimizeWindow={() => minimizeWindow(windowKey)}
        />
      </div>
    );
  };
  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
