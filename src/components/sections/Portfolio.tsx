"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, Category } from "@/types";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import FilterButton from "@/components/ui/FilterButton";

const categories: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web Applications", value: "webapp" },
  { label: "System & API", value: "api" },
  { label: "AI & Data Science", value: "ai" },
  { label: "Utilities & Tools", value: "tools" },
  { label: "Game & Experiments", value: "experiments" },
];

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative z-[1] py-16 sm:py-20 lg:py-[100px] bg-deep">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Portfolio"
            title="Selected works"
            description="A curated collection of projects that showcase my skills and approach to problem-solving."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center gap-2 mb-8 mt-6 sm:mb-10 sm:mt-8 flex-wrap">
            {categories.map((cat) => (
              <FilterButton
                key={cat.value}
                active={activeFilter === cat.value}
                onClick={() => setActiveFilter(cat.value)}
              >
                {cat.label}
              </FilterButton>
            ))}
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-card border border-border-subtle rounded-[20px] h-[360px] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={project.featured ? "col-span-full" : ""}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
