"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function GlowCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="relative size-8">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
          <div className="absolute inset-1 rounded-full bg-accent/40 blur-md" />
          <div className="absolute inset-[10px] rounded-full bg-primary/80" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="size-64 rounded-full bg-primary/5 blur-3xl" />
      </motion.div>
    </>
  );
}
