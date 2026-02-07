"use client";

import { useState } from "react";
import { Github, Linkedin, Youtube, Bot } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navItems, socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import Logo from "@/components/ui/Logo";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Youtube,
  Bot,
};

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = scrollY > 40;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 transition-all duration-400",
          scrolled
            ? "bg-void/85 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-border-subtle"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <a href="#" className="inline-flex">
            <Logo />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-text-secondary transition-colors duration-300",
                    "hover:text-text-primary",
                    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent",
                    "after:transition-all after:duration-300 after:ease-[var(--ease-out-expo)]",
                    "hover:after:w-full"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-2">
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
                    "flex items-center justify-center w-9 h-9 rounded-full",
                    "border border-border-subtle text-text-secondary",
                    "transition-all duration-300",
                    "hover:border-accent hover:text-accent"
                  )}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden flex-col items-center justify-center gap-[5px] w-10 h-10"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={cn(
                "block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300",
                mobileOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
