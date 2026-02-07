"use client";

import Image from "next/image";
import { Github, Linkedin, Youtube, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { stats, socialLinks, roles } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";
import TypingEffect from "@/components/ui/TypingEffect";

const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Youtube: <Youtube size={20} />,
  Bot: <Bot size={20} />,
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 pt-[80px] pb-14 sm:pt-[88px] sm:pb-16 lg:pt-[96px] lg:pb-20 overflow-hidden"
    >
      {/* Glow orb */}
      <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,136,0.08)_0%,transparent_70%)] animate-hero-glow pointer-events-none" />

      <div className="relative z-[2]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] mx-auto mt-4 sm:mt-5 lg:mt-6 mb-7 sm:mb-9 relative"
        >
          <div className="w-full h-full rounded-full bg-card border-2 border-border-subtle overflow-hidden">
            <Image
              src="/images/p1.png"
              alt="Moniruzzaman Shawon"
              width={200}
              height={200}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          {/* Rotating ring */}
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-accent/20 animate-spin-slow" />
          {/* Status dot */}
          <div className="absolute bottom-1.5 right-1.5 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-accent border-[3px] border-void rounded-full z-[3]">
            <span className="absolute -inset-[3px] rounded-full bg-accent opacity-40 animate-pulse-green" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-2 bg-gradient-to-b from-white via-white to-text-secondary bg-clip-text text-transparent"
        >
          Moniruzzaman
          <br />
          Shawon
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="font-mono text-[clamp(0.95rem,2vw,1.15rem)] text-accent mb-8 sm:mb-10 flex items-center justify-center gap-2"
        >
          <TypingEffect strings={roles} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-11"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="flex items-center justify-center gap-3 sm:gap-3.5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border-subtle bg-card flex items-center justify-center text-text-secondary transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent hover:text-accent hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(0,255,136,0.15)]"
            >
              {socialIcons[link.icon]}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-[0.72rem] tracking-[0.12em] uppercase font-mono animate-float-down">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
