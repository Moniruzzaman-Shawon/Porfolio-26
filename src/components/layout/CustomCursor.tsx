"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const scopePos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const raf = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    scopePos.current.x = lerp(scopePos.current.x, pos.current.x, 0.35);
    scopePos.current.y = lerp(scopePos.current.y, pos.current.y, 0.35);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
    if (scopeRef.current) {
      scopeRef.current.style.transform = `translate(${scopePos.current.x}px, ${scopePos.current.y}px)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (hasTouch && hasCoarsePointer) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const onHoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']")
      ) {
        setHovering(true);
      }
    };
    const onHoverOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']")
      ) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onHoverIn);
    document.addEventListener("mouseout", onHoverOut);

    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onHoverIn);
      document.removeEventListener("mouseout", onHoverOut);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  if (isTouchDevice) return null;

  const size = hovering ? 52 : 36;
  const half = size / 2;
  const accent = "#00ff88";
  const accentDim = hovering ? "rgba(0,255,136,0.5)" : "rgba(0,255,136,0.3)";

  return (
    <>
      {/* Center dot — precise hit point */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: clicking ? 4 : 5,
          height: clicking ? 4 : 5,
          marginLeft: clicking ? -2 : -2.5,
          marginTop: clicking ? -2 : -2.5,
          borderRadius: "50%",
          backgroundColor: accent,
          boxShadow: clicking
            ? `0 0 10px ${accent}, 0 0 20px rgba(0,255,136,0.4)`
            : `0 0 6px rgba(0,255,136,0.5)`,
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.2s, width 0.15s, height 0.15s, box-shadow 0.15s",
          willChange: "transform",
        }}
      />

      {/* Crosshair scope — trailing */}
      <div
        ref={scopeRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: size,
          height: size,
          marginLeft: -half,
          marginTop: -half,
          opacity: hidden ? 0 : clicking ? 0.7 : 1,
          transition:
            "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), margin 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
          willChange: "transform",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
            filter: clicking ? `drop-shadow(0 0 4px ${accent})` : "none",
          }}
        >
          {/* Outer circle */}
          <circle
            cx={half}
            cy={half}
            r={half - 2}
            stroke={accentDim}
            strokeWidth={1.2}
            fill={hovering ? "rgba(0,255,136,0.05)" : "none"}
          />

          {/* Top crosshair line */}
          <line
            x1={half}
            y1={1}
            x2={half}
            y2={half - 7}
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          {/* Bottom crosshair line */}
          <line
            x1={half}
            y1={half + 7}
            x2={half}
            y2={size - 1}
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          {/* Left crosshair line */}
          <line
            x1={1}
            y1={half}
            x2={half - 7}
            y2={half}
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          {/* Right crosshair line */}
          <line
            x1={half + 7}
            y1={half}
            x2={size - 1}
            y2={half}
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
          />

          {/* Corner tick marks — top-left */}
          <path
            d={`M${half - 10} ${4} L${half - 10} ${8}`}
            stroke={accentDim}
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          {/* Corner tick — top-right */}
          <path
            d={`M${half + 10} ${4} L${half + 10} ${8}`}
            stroke={accentDim}
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          {/* Corner tick — bottom-left */}
          <path
            d={`M${half - 10} ${size - 4} L${half - 10} ${size - 8}`}
            stroke={accentDim}
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          {/* Corner tick — bottom-right */}
          <path
            d={`M${half + 10} ${size - 4} L${half + 10} ${size - 8}`}
            stroke={accentDim}
            strokeWidth={0.8}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
