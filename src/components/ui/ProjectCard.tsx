"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] overflow-hidden transition-all duration-400",
        "hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.15)]",
        project.featured && "md:col-span-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-deep to-elevated overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {project.thumbnailUrl && (
          <img
            src={project.thumbnailUrl}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-void/70 flex items-center justify-center gap-3 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-subtle bg-card/80 flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] transition-all duration-300"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-subtle bg-card/80 flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] transition-all duration-300"
              aria-label="View source on GitHub"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6">
        <h3 className="font-display font-bold text-text-primary mb-2">
          {project.name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
