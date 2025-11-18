/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newMeteors = new Array(number || 20).fill(true).map(() => ({
      top: 0,
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 1.2 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(newMeteors);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "pointer-events-none absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-primary shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 h-[1px] w-[50px] bg-gradient-to-r from-primary to-transparent" />
        </span>
      ))}
    </>
  );
};