"use client";

import { ExternalLink, Star } from "lucide-react";
import type { PlatformStats, PlatformId } from "@/types";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ProgressRing from "@/components/ui/ProgressRing";

const platformConfig: Record<PlatformId, { color: string; label: string }> = {
  hackerrank: { color: "#00ea64", label: "HackerRank" },
  leetcode: { color: "#ffa116", label: "LeetCode" },
  codeforces: { color: "#1890ff", label: "Codeforces" },
};

function PlatformIcon({ platform }: { platform: PlatformId }) {
  if (platform === "hackerrank") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14h-1.75l-.87-2.5H11.1L10.25 16H8.5l3.5-8h.01L15.5 16zm-4.12-3.75h1.24L12 10.5l-.62 1.75z" />
      </svg>
    );
  }
  if (platform === "leetcode") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    );
  }
  // codeforces
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  );
}

function ProblemBreakdownBar({ breakdown }: { breakdown: NonNullable<PlatformStats["breakdown"]> }) {
  const { easy, medium, hard, total } = breakdown;
  const easyPct = (easy / total) * 100;
  const medPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2">
        <span className="text-[#00b8a3]">Easy {easy}</span>
        <span className="text-[#ffc01e]">Medium {medium}</span>
        <span className="text-[#ff375f]">Hard {hard}</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden flex">
        <div className="h-full bg-[#00b8a3] transition-all duration-700" style={{ width: `${easyPct}%` }} />
        <div className="h-full bg-[#ffc01e] transition-all duration-700" style={{ width: `${medPct}%` }} />
        <div className="h-full bg-[#ff375f] transition-all duration-700" style={{ width: `${hardPct}%` }} />
      </div>
    </div>
  );
}

function BadgeList({ badges }: { badges: NonNullable<PlatformStats["badges"]> }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge.name}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#00ea64]/10 border border-[#00ea64]/20 text-[#00ea64]"
        >
          {badge.name}
          <span className="flex items-center gap-0.5">
            {Array.from({ length: badge.stars }).map((_, i) => (
              <Star key={i} size={9} fill="currentColor" />
            ))}
          </span>
        </span>
      ))}
    </div>
  );
}

function StatsRow({ stats }: { stats: PlatformStats }) {
  const items: { label: string; value: string | number }[] = [];

  if (stats.rating != null) items.push({ label: "Rating", value: stats.rating });
  if (stats.rankTitle) items.push({ label: "Rank", value: stats.rankTitle });
  if (stats.contestRating != null) items.push({ label: "Contest", value: stats.contestRating });
  if (stats.globalRanking != null) items.push({ label: "Global", value: `#${stats.globalRanking.toLocaleString()}` });

  if (items.length === 0) return null;

  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.label} className="bg-white/[0.03] rounded-lg px-3 py-2">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{item.label}</p>
          <p className="font-display font-bold text-text-primary text-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

interface PlatformCardProps {
  stats: PlatformStats;
}

export default function PlatformCard({ stats }: PlatformCardProps) {
  const config = platformConfig[stats.platform];
  const solvedPct = stats.breakdown
    ? Math.round((stats.problemsSolved / Math.max(stats.breakdown.total, 1)) * 100)
    : null;

  return (
    <div className="group relative bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 overflow-hidden transition-all duration-400 hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]">
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${config.color}, transparent)` }}
      />

      {/* Header: icon + platform + username + link */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${config.color}15`, color: config.color }}
          >
            <PlatformIcon platform={stats.platform} />
          </div>
          <div>
            <h3 className="font-display font-bold text-text-primary text-base">{config.label}</h3>
            <p className="font-mono text-[11px] text-text-muted">@{stats.username}</p>
          </div>
        </div>
        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
          aria-label={`View ${config.label} profile`}
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Main stat: problems solved */}
      <div className="flex items-center gap-4 mb-1">
        {solvedPct != null && (
          <ProgressRing percentage={solvedPct} size={56} strokeWidth={4} color={config.color} />
        )}
        <div>
          <div className="flex items-baseline gap-1">
            <AnimatedCounter
              value={stats.problemsSolved}
              className="font-display text-3xl sm:text-4xl font-bold text-text-primary"
            />
          </div>
          <p className="font-mono text-xs text-text-muted mt-0.5">Problems Solved</p>
        </div>
      </div>

      {/* Conditional sections */}
      {stats.breakdown && <ProblemBreakdownBar breakdown={stats.breakdown} />}
      {stats.badges && stats.badges.length > 0 && <BadgeList badges={stats.badges} />}
      {(stats.rating != null || stats.rankTitle || stats.contestRating != null || stats.globalRanking != null) && (
        <StatsRow stats={stats} />
      )}
    </div>
  );
}
