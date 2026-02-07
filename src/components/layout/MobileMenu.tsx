"use client";

import { Github, Linkedin, Youtube, Bot } from "lucide-react";
import { navItems, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Youtube,
  Bot,
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed top-16 sm:top-[72px] left-0 right-0 bottom-0 z-[999]",
        "bg-void/97 backdrop-blur-[30px]",
        "flex-col items-center justify-center gap-7",
        "transition-all duration-400",
        open ? "flex" : "hidden"
      )}
    >
      <nav className="flex flex-col items-center gap-7">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "font-display text-2xl font-semibold text-text-secondary",
              "transition-colors duration-300",
              "hover:text-accent"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 mt-4">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          if (!Icon) return null;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "border border-border-subtle text-text-secondary",
                "transition-all duration-300",
                "hover:border-accent hover:text-accent"
              )}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
