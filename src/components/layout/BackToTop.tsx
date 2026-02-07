"use client";

import { ChevronUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const scrollY = useScrollPosition();

  const visible = scrollY > 500;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={cn(
        "fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50",
        "flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full",
        "bg-card border border-border-subtle text-text-secondary",
        "transition-all duration-300",
        "hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]",
        "cursor-pointer",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <ChevronUp size={20} />
    </button>
  );
}
