"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: null, y: null });
  const currentRef = useRef({ x: null, y: null });
  const [pos, setPos] = useState({ x: null, y: null });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial center position
    const rect = section.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    targetRef.current = { x: cx, y: cy };
    currentRef.current = { x: cx, y: cy };
    setPos({ x: cx, y: cy });

    const handleMouseMove = (e) => {
      const r = section.getBoundingClientRect();
      targetRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;
      if (tx !== null) {
        const nx = lerp(currentRef.current.x, tx, 0.1);
        const ny = lerp(currentRef.current.y, ty, 0.1);
        currentRef.current = { x: nx, y: ny };
        setPos({ x: nx, y: ny });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const orbX = pos.x ?? 0;
  const orbY = pos.y ?? 0;
  const ORB_SIZE = 220;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-8 pt-20 overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-animated" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Single cursor-following gradient orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full bg-primary blur-3xl"
          style={{
            width: ORB_SIZE,
            height: ORB_SIZE,
            opacity: 0.45,
            left: orbX - ORB_SIZE / 2,
            top: orbY - ORB_SIZE / 2,
            willChange: "left, top",
          }}
        />
      </div>

      <div className="z-10 max-w-4xl text-center space-y-6">
        <h1 className="font-ahsing text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-foreground tracking-tight leading-tight animate-fade-in">
          Journey Alone.
          <br />
          <span className="text-primary hover:scale-105 inline-block transition-transform duration-300">
            Connect Together.
          </span>
        </h1>
        <p className="font-bricolage text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          AI-powered travel companion for solo explorers seeking authentic
          connections
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
          style={{ cursor: "pointer" }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2 hover:border-primary transition-colors">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
