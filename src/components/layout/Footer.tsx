import { Github, Linkedin, Youtube, Bot, ArrowUp, Heart } from "lucide-react";
import { navItems, socialLinks } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Youtube,
  Bot,
};

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border-subtle">
      {/* Accent glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-8 items-start">
          {/* Left — Logo + tagline */}
          <div className="max-md:text-center">
            <Logo />
            <p className="text-text-muted text-sm mt-3 max-w-[260px] max-md:mx-auto leading-relaxed">
              Designing and building modern, high-performing web applications.
            </p>
          </div>

          {/* Center — Quick nav */}
          <div className="max-md:text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
              Navigate
            </p>
            <ul className="flex flex-wrap justify-center md:flex-col gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Socials */}
          <div className="max-md:text-center md:text-right">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
              Connect
            </p>
            <div className="flex items-center gap-3 max-md:justify-center md:justify-end">
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
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-card text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_16px_rgba(0,255,136,0.12)]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle" />

        {/* Bottom row */}
        <div className="py-5 sm:py-6 flex items-center justify-between flex-wrap gap-3 max-sm:flex-col max-sm:text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Moniruzzaman Shawon. Made with{" "}
            <Heart size={11} className="inline text-accent -mt-px" />{" "}
            in Bangladesh
          </p>

          <p className="text-text-muted/50 text-[11px] font-mono">
            Next.js &middot; Tailwind &middot; Prisma &middot; Framer Motion
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors duration-300 hover:text-accent"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
