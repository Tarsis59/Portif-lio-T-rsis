"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;

  size?: number;

  opacity?: number;
};

export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "rgba(0, 229, 255, 0.15)",
  size = 600,
  opacity = 1,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const gradient = `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${fill}, transparent 65%)`;

  return (
    <div
      className={cn("fixed inset-0 z-30 pointer-events-auto", className)}
      onMouseMove={handleMouseMove}
      aria-hidden
    >
      <div
        className="pointer-events-none fixed inset-0 transition-opacity duration-300"
        style={{
          background: gradient,
          opacity,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default Spotlight;
