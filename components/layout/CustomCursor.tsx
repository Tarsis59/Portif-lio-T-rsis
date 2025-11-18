/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, {
    stiffness: 900,
    damping: 36,
    mass: 0.45,
  });
  const cursorY = useSpring(mouseY, {
    stiffness: 900,
    damping: 36,
    mass: 0.45,
  });

  const trailX = useSpring(mouseX, { stiffness: 220, damping: 20, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 220, damping: 20, mass: 1 });

  const hoverTarget = useMotionValue(1);
  const hoverSpring = useSpring(hoverTarget, {
    stiffness: 260,
    damping: 28,
    mass: 0.6,
  });

  const [hoverScale, setHoverScale] = useState<number>(1);

  useEffect(() => {
    const unsubscribe = hoverSpring.onChange((v) => {
      setHoverScale(v);
    });
    return () => unsubscribe();
  }, [hoverSpring]);

  const clickPulse = () => {
    hoverTarget.set(1.9);
    setTimeout(() => hoverTarget.set(hoverTarget.get() > 1.1 ? 1.3 : 1), 90);
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickPulse);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickPulse);
      document.body.style.cursor = previousCursor || "auto";
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const selector =
      'a, button, [data-cursor="hover"], [role="button"], input[type="button"], input[type="submit"]';
    const elems = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const handleEnter = () => hoverTarget.set(1.8);
    const handleLeave = () => hoverTarget.set(1);
    const handleFocus = () => hoverTarget.set(1.8);
    const handleBlur = () => hoverTarget.set(1);

    elems.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      el.addEventListener("focus", handleFocus);
      el.addEventListener("blur", handleBlur);
    });

    const observer = new MutationObserver(() => {
      elems.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        el.removeEventListener("focus", handleFocus);
        el.removeEventListener("blur", handleBlur);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      elems.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        el.removeEventListener("focus", handleFocus);
        el.removeEventListener("blur", handleBlur);
      });
      observer.disconnect();
    };
  }, [hoverTarget]);

  const trailSize = 72;
  const trailVisualStyle: React.CSSProperties = {
    width: trailSize,
    height: trailSize,
    borderRadius: "9999px",
    background: "rgba(0, 229, 255, 0.18)",
    boxShadow: "0 0 90px 30px rgba(0, 200, 255, 0.45)",
    filter: "blur(10px)",
    transform: `translate(-50%, -50%) scale(${Math.max(
      0.9,
      hoverScale * 0.95
    )})`,
    willChange: "transform, opacity",
    pointerEvents: "none",
    opacity: isVisible ? 1 : 0,
  };

  const coreSize = 12;
  const coreVisualStyle: React.CSSProperties = {
    width: coreSize,
    height: coreSize,
    borderRadius: "9999px",
    backgroundColor: "rgba(0, 200, 255, 1)",
    boxShadow: "0 0 16px 3px rgba(255,255,255,0.95)",
    transform: `translate(-50%, -50%) scale(${hoverScale})`,
    willChange: "transform, opacity",
    pointerEvents: "none",
    opacity: isVisible ? 1 : 0,
  };

  const wrapperClass = "pointer-events-none fixed z-[9998] hidden md:block";

  return (
    <>
      {}
      <motion.div
        aria-hidden
        className={wrapperClass}
        style={{ x: trailX, y: trailY } as any}
      >
        <div style={trailVisualStyle} />
      </motion.div>

      {}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY } as any}
      >
        <div style={coreVisualStyle} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
