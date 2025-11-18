/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -9999, y: -9999 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    
    const hasTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouch(Boolean(hasTouch));

    
    if (typeof document !== "undefined") {
      if (loading) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => {
      clearTimeout(timer);
      
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };
  }, [loading]);

  useEffect(() => {
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
     
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isTouch]);

  return (
    <>
      {}
      {loading && (
        <div
          aria-hidden={false}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-4 px-6">
            {}
            <div className="relative flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-[0_10px_40px_rgba(0,229,255,0.12)] flex items-center justify-center">
                <span className="text-xl font-bold text-white drop-shadow-sm">T</span>
              </div>
              <div className="absolute inset-0 animate-pulse rounded-full opacity-30" />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">Carregando o portfólio...</h3>
              <p className="mt-2 text-sm text-white/70"></p>
            </div>
          </div>
        </div>
      )}

      {}
      {!isTouch && (
        <div
          aria-hidden
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`
          }}
          className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        >
          {/* Outer glow */}
          <div
            className="pointer-events-none rounded-full blur-lg opacity-60"
            style={{
              width: 52,
              height: 52,
              boxShadow: "0 6px 40px rgba(122,75,255,0.18), 0 0 30px rgba(0,229,255,0.08)",
              background: "radial-gradient(circle at 30% 30%, rgba(0,229,255,0.2), rgba(122,75,255,0.14))"
            }}
          />
          {/* Inner core */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 12,
              height: 12,
              background: "linear-gradient(135deg, #00e5ff, #7a4bff)",
              boxShadow: "0 6px 18px rgba(122,75,255,0.18), 0 6px 30px rgba(0,229,255,0.12)"
            }}
          />
        </div>
      )}

      {}
      <div className="relative">{children}</div>
    </>
  );
};

export default ClientWrapper;
