"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Star } from "lucide-react";
import type { Project } from "@/types";
import { categoryLabels } from "@/lib/constants";

export function ProjectTable({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (deleting) return;
    setDeleting(id);

    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      }
    } catch {
      // silently fail
    } finally {
      setDeleting(null);
    }
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16 text-text-muted">
        <p className="text-lg mb-2">No projects yet</p>
        <p className="text-sm">Create your first project to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border-subtle rounded-[20px] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border-subtle">
            <th className="text-left px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider">
              #
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider">
              Name
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider hidden sm:table-cell">
              Category
            </th>
            <th className="text-left px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider hidden md:table-cell">
              Tags
            </th>
            <th className="text-right px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b border-border-subtle last:border-b-0 hover:bg-card-hover transition-colors"
            >
              <td className="px-6 py-4 text-sm text-text-muted">{project.order}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-primary">
                    {project.name}
                  </span>
                  {project.featured && (
                    <Star size={14} className="text-accent fill-accent" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-glow text-accent">
                  {categoryLabels[project.category] || project.category}
                </span>
              </td>
              <td className="px-6 py-4 hidden md:table-cell">
                <div className="flex gap-1.5 flex-wrap">
                  {project.techTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-elevated text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.techTags.length > 3 && (
                    <span className="text-[0.65rem] text-text-muted">
                      +{project.techTags.length - 3}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <a
                    href={`/admin/projects/${project.id}/edit`}
                    className="w-8 h-8 rounded-[8px] border border-border-subtle flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
                  >
                    <Pencil size={14} />
                  </a>
                  <button
                    onClick={() => {
                      if (confirm(`Delete "${project.name}"?`)) {
                        handleDelete(project.id);
                      }
                    }}
                    disabled={deleting === project.id}
                    className="w-8 h-8 rounded-[8px] border border-border-subtle flex items-center justify-center text-text-secondary hover:border-red-500 hover:text-red-400 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
