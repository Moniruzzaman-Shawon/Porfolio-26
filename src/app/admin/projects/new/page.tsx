import { ProjectForm } from "@/components/admin/ProjectForm";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  return (
    <div>
      <a
        href="/admin"
        className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </a>
      <h1 className="font-display text-2xl font-bold mb-8">Create New Project</h1>
      <ProjectForm mode="create" />
    </div>
  );
}
