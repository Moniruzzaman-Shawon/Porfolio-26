"use client";

import { platformStats } from "@/lib/constants";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import PlatformCard from "@/components/ui/PlatformCard";
import { Trophy, Code2, Award } from "lucide-react";

export function Leaderboard() {
  const totalSolved = platformStats.reduce((sum, p) => sum + p.problemsSolved, 0);
  const totalBadges = platformStats.reduce((sum, p) => sum + (p.badges?.length ?? 0), 0);

  return (
    <section id="leaderboard" className="relative z-[1] py-16 sm:py-20 lg:py-[100px] bg-deep">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Leaderboard"
            title="Competitive coding profiles"
            description="Staying sharp through algorithmic challenges and competitive programming across multiple platforms."
          />
        </ScrollReveal>

        {/* Platform cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {platformStats.map((stats, i) => (
            <ScrollReveal key={stats.platform} delay={i * 0.12}>
              <PlatformCard stats={stats} />
            </ScrollReveal>
          ))}
        </div>

        {/* Summary bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 sm:mt-10 bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-accent-glow flex items-center justify-center shrink-0">
                <Trophy size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-text-primary text-lg">{totalSolved}+</p>
                <p className="font-mono text-xs text-text-muted">Total Solved</p>
              </div>
            </div>

            <div className="h-8 w-px bg-border-subtle hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-accent-glow flex items-center justify-center shrink-0">
                <Code2 size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-text-primary text-lg">{platformStats.length}</p>
                <p className="font-mono text-xs text-text-muted">Platforms</p>
              </div>
            </div>

            <div className="h-8 w-px bg-border-subtle hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-accent-glow flex items-center justify-center shrink-0">
                <Award size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-text-primary text-lg">{totalBadges}</p>
                <p className="font-mono text-xs text-text-muted">Badges Earned</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
