import { prisma } from "@/lib/prisma";
import { ProjectTable } from "@/components/admin/ProjectTable";
import { FolderKanban, Plus } from "lucide-react";
import type { Project } from "@/types";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const rawProjects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  const projects = rawProjects.map((p) => ({
    ...p,
    category: p.category as Project["category"],
    techTags: JSON.parse(p.techTags) as string[],
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold flex items-center gap-3">
            <FolderKanban size={24} className="text-accent" />
            Projects
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            {projects.length} project{projects.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <a
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-void font-display font-bold text-sm rounded-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)]"
        >
          <Plus size={16} />
          New Project
        </a>
      </div>

      <ProjectTable projects={projects} />
    </div>
  );
}
