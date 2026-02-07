import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const raw = await prisma.project.findUnique({ where: { id } });

  if (!raw) {
    notFound();
  }

  const project = {
    ...raw,
    category: raw.category as Project["category"],
    techTags: JSON.parse(raw.techTags) as string[],
    createdAt: raw.createdAt.toISOString(),
    updatedAt: raw.updatedAt.toISOString(),
  };

  return (
    <div>
      <a
        href="/admin"
        className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </a>
      <h1 className="font-display text-2xl font-bold mb-8">
        Edit: {project.name}
      </h1>
      <ProjectForm project={project} mode="edit" />
    </div>
  );
}
