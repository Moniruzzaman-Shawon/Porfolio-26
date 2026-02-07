"use client";

import { cn } from "@/lib/utils";

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export default function FilterButton({
  children,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-mono text-[0.8rem] px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer",
        active
          ? "bg-accent border-accent text-void font-medium"
          : "border-border-subtle text-text-secondary hover:border-text-muted hover:text-text-primary"
      )}
    >
      {children}
    </button>
  );
}
