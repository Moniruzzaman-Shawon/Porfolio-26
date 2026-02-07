"use client";

import { skillBlocks, education } from "@/lib/constants";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap } from "lucide-react";

const blockMeta: { key: keyof typeof skillBlocks; label: string; accent: boolean }[] = [
  { key: "expertise", label: "Expertise", accent: true },
  { key: "frameworks", label: "Frameworks & Platforms", accent: false },
  { key: "familiar", label: "Familiar With", accent: false },
  { key: "tools", label: "Tools & Environment", accent: false },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-[1] py-16 sm:py-20 lg:py-[100px] bg-deep">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Skills"
            title="Tech stack & tools"
            description="Technologies I work with to build modern, scalable applications."
          />
        </ScrollReveal>

        {/* Skill blocks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-12">
          {blockMeta.map((block, i) => (
            <ScrollReveal key={block.key} delay={i * 0.1}>
              <div className="group bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 transition-all duration-400 hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <h3 className="font-display font-bold text-text-primary text-lg mb-4">
                  {block.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillBlocks[block.key].map((skill) => (
                    <span
                      key={skill}
                      className={
                        block.accent
                          ? "font-mono text-xs px-3 py-1.5 rounded-full bg-accent-glow text-accent border border-accent/20 transition-colors duration-300 hover:bg-accent/20"
                          : "font-mono text-xs px-3 py-1.5 rounded-full bg-void/60 text-text-secondary border border-border-subtle transition-colors duration-300 hover:text-text-primary hover:border-text-muted"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education — compact row */}
        {education.length > 0 && (
          <ScrollReveal delay={0.4}>
            <div className="mt-8 sm:mt-10 bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 flex items-start gap-4 sm:gap-5">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-accent-glow flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono mb-1">{education[0].date}</p>
                <h3 className="font-display font-bold text-text-primary">
                  {education[0].degree}
                </h3>
                <p className="text-text-secondary text-sm mt-1">{education[0].school}</p>
                <p className="text-text-muted text-sm mt-1">{education[0].description}</p>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
