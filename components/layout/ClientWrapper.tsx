"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState, useCallback, useMemo } from "react";

interface ClientWrapperProps {
  children: React.ReactNode;
}

/* ── Preloader particles (pre-computed random values) ── */
const PARTICLE_COUNT = 20;

const PreloaderParticles = React.memo(() => {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      initX: `${(i * 37 + 13) % 100}%`,
      initY: `${(i * 53 + 7) % 100}%`,
      animX: `${(i * 67 + 29) % 100}%`,
      animY: `${(i * 41 + 19) % 100}%`,
      duration: 2 + ((i * 0.7) % 3),
      delay: (i * 0.35) % 1.5,
    })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{ x: p.initX, y: p.initY, opacity: 0, scale: 0 }}
          animate={{ x: p.animX, y: p.animY, opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
});

PreloaderParticles.displayName = "PreloaderParticles";

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isTouch] = useState(() =>
    typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  );
  const [preloaderPhase, setPreloaderPhase] = useState<"enter" | "exit">("enter");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { stiffness: 900, damping: 36, mass: 0.45 });
  const cursorY = useSpring(mouseY, { stiffness: 900, damping: 36, mass: 0.45 });
  const trailX = useSpring(mouseX, { stiffness: 220, damping: 20, mass: 1 });
  const trailY = useSpring(mouseY, { stiffness: 220, damping: 20, mass: 1 });

  const hoverTarget = useMotionValue(1);
  const hoverSpring = useSpring(hoverTarget, { stiffness: 260, damping: 28, mass: 0.6 });
  const [hoverScale, setHoverScale] = useState(1);

  useEffect(() => {
    const unsub = hoverSpring.onChange((v) => setHoverScale(v));
    return () => unsub();
  }, [hoverSpring]);

  const clickPulse = useCallback(() => {
    hoverTarget.set(1.9);
    setTimeout(() => hoverTarget.set(1), 90);
  }, [hoverTarget]);

  /* ── Preloader ── */
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    const exitTimer = setTimeout(() => setPreloaderPhase("exit"), 1800);
    const doneTimer = setTimeout(() => {
      setLoading(false);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    }, 2300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };
  }, []);

  /* ── Cursor ── */
  useEffect(() => {
    if (isTouch) return;
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickPulse);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickPulse);
      document.body.style.cursor = "";
    };
  }, [isTouch, mouseX, mouseY, clickPulse]);

  /* ── Cursor hover detection ── */
  useEffect(() => {
    if (isTouch) return;
    const selector =
      'a, button, [data-cursor="hover"], [role="button"], input[type="button"], input[type="submit"]';

    const handleEnter = () => hoverTarget.set(1.8);
    const handleLeave = () => hoverTarget.set(1);

    const attach = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    attach();

    const observer = new MutationObserver(() => attach());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isTouch, hoverTarget]);

  const trailSize = 72;
  const coreSize = 12;

  return (
    <>
      {/* ════════ PRELOADER ════════ */}
      <AnimatePresence>
        {loading && (
          <motion.div
            aria-hidden={false}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <PreloaderParticles />

            <motion.div
              className="flex flex-col items-center gap-6 px-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Logo with morphing ring */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute w-24 h-24 rounded-full border-2 border-primary/30"
                  animate={{
                    rotate: 360,
                    scale: preloaderPhase === "exit" ? [1, 1.5] : 1,
                    opacity: preloaderPhase === "exit" ? [1, 0] : 1,
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.6, ease: "easeIn" },
                    opacity: { duration: 0.6, ease: "easeIn" },
                  }}
                />
                <motion.div
                  className="absolute w-16 h-16 rounded-full border border-secondary/40"
                  animate={{
                    rotate: -360,
                    scale: preloaderPhase === "exit" ? [1, 1.8] : 1,
                    opacity: preloaderPhase === "exit" ? [1, 0] : 1,
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.5, delay: 0.1, ease: "easeIn" },
                    opacity: { duration: 0.5, delay: 0.1, ease: "easeIn" },
                  }}
                />
                <motion.div
                  className="h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.25)]"
                  animate={{
                    scale: preloaderPhase === "exit" ? [1, 0.5] : [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    scale: preloaderPhase === "exit"
                      ? { duration: 0.5, ease: "easeIn" }
                      : { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <motion.span
                    className="text-lg font-bold text-white"
                    animate={{ opacity: preloaderPhase === "exit" ? [1, 0] : 1 }}
                  >
                    TB
                  </motion.span>
                </motion.div>
              </div>

              <motion.p
                className="text-sm text-white/50 font-medium tracking-widest uppercase"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {preloaderPhase === "enter" ? "Carregando" : "Bem-vindo"}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════ CUSTOM CURSOR ════════ */}
      {!isTouch && !loading && (
        <>
          {/* Trail glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed z-[9998] hidden md:block"
            style={{ x: trailX, y: trailY } as unknown as React.CSSProperties}
          >
            <div
              className="rounded-full"
              style={{
                width: trailSize,
                height: trailSize,
                background: "rgba(0, 229, 255, 0.12)",
                boxShadow: "0 0 90px 30px rgba(0, 200, 255, 0.3)",
                filter: "blur(10px)",
                transform: `translate(-50%, -50%) scale(${Math.max(0.9, hoverScale * 0.95)})`,
                willChange: "transform",
              }}
            />
          </motion.div>

          {/* Core dot */}
          <motion.div
            aria-hidden
            className="pointer-events-none fixed z-[9999] hidden md:block"
            style={{ x: cursorX, y: cursorY } as unknown as React.CSSProperties}
          >
            <div
              className="rounded-full"
              style={{
                width: coreSize,
                height: coreSize,
                backgroundColor: "rgba(0, 200, 255, 1)",
                boxShadow: "0 0 16px 3px rgba(255,255,255,0.9)",
                transform: `translate(-50%, -50%) scale(${hoverScale})`,
                willChange: "transform",
              }}
            />
          </motion.div>
        </>
      )}

      {/* ════════ CONTENT ════════ */}
      <div className="relative">{children}</div>
    </>
  );
};

export default ClientWrapper;
