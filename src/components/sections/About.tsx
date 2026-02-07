"use client";

import Image from "next/image";
import { Layers, Zap, Shield, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  { icon: <Layers size={18} />, text: "Full Stack Development" },
  { icon: <Zap size={18} />, text: "Performance Focused" },
  { icon: <Shield size={18} />, text: "Clean & Secure Code" },
  { icon: <CheckCircle size={18} />, text: "Problem Solver" },
];

export function About() {
  return (
    <section id="about" className="relative z-[1] py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-10 lg:gap-[60px] items-stretch">
          {/* Image */}
          <ScrollReveal>
            <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden h-full min-h-[320px] bg-card border border-border-subtle mx-auto md:mx-0">
              <Image
                src="/images/p2.png"
                alt="Moniruzzaman Shawon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-2 border border-accent/10 rounded-[12px] sm:rounded-[16px] pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <SectionHeader
                label="About Me"
                title="Crafting digital experiences with code"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-2 space-y-4 sm:space-y-5">
                <p className="text-text-secondary text-[0.95rem] sm:text-base leading-[1.85]">
                  I&apos;m{" "}
                  <strong className="text-text-primary font-semibold">
                    Moniruzzaman Shawon
                  </strong>
                  , a Software Engineer building fast, scalable web applications.
                  I specialize in{" "}
                  <strong className="text-text-primary font-semibold">frontend engineering</strong>,{" "}
                  <strong className="text-text-primary font-semibold">backend APIs</strong>,
                  and{" "}
                  <strong className="text-text-primary font-semibold">database-driven systems</strong>.
                </p>
                <p className="text-text-secondary text-[0.95rem] sm:text-base leading-[1.85]">
                  I design and build modern, high-performing websites and web applications.
                  With a B.Sc. in Computer Science & Engineering from North South University,
                  I work across React, Next.js, Django, Node/Express, and machine learning
                  to deliver products that make a real impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {highlights.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 px-3.5 py-3 sm:px-[18px] sm:py-3.5 bg-card border border-border-subtle rounded-[12px] sm:rounded-[14px] transition-all duration-300 hover:border-border-glow hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-accent-glow flex items-center justify-center shrink-0 text-accent">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
