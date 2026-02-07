"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, X } from "lucide-react";
import type { Project, Category } from "@/types";

interface ProjectFormProps {
  project?: Project;
  mode: "create" | "edit";
}

export function ProjectForm({ project, mode }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tagInput, setTagInput] = useState("");

  const [form, setForm] = useState({
    name: project?.name || "",
    description: project?.description || "",
    category: project?.category || "fullstack",
    techTags: project?.techTags || [] as string[],
    thumbnailUrl: project?.thumbnailUrl || "",
    liveUrl: project?.liveUrl || "",
    githubUrl: project?.githubUrl || "",
    featured: project?.featured || false,
    order: project?.order || 0,
  });

  function addTag() {
    const tag = tagInput.trim();
    if (tag && !form.techTags.includes(tag)) {
      setForm((f) => ({ ...f, techTags: [...f.techTags, tag] }));
      setTagInput("");
    }
  }

  function removeTag(tag: string) {
    setForm((f) => ({ ...f, techTags: f.techTags.filter((t) => t !== tag) }));
  }

  function handleTagKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url =
      mode === "create" ? "/api/projects" : `/api/projects/${project?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          thumbnailUrl: form.thumbnailUrl || null,
          liveUrl: form.liveUrl || null,
          githubUrl: form.githubUrl || null,
        }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Failed to save project");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-deep border border-border-subtle rounded-[14px] text-text-primary outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] placeholder:text-text-muted text-sm";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {error && (
        <div className="mb-6 px-4 py-3 rounded-[10px] bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Project Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="My Awesome Project"
            className={inputClass}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Description *
          </label>
          <textarea
            required
            rows={3}
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            placeholder="A brief description of the project..."
            className={`${inputClass} resize-y min-h-[100px]`}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Category *
          </label>
          <select
            value={form.category}
            onChange={(e) =>
              setForm((f) => ({ ...f, category: e.target.value as Category }))
            }
            className={inputClass}
          >
            <option value="webapp">Web Applications</option>
            <option value="api">System & API</option>
            <option value="ai">AI & Data Science</option>
            <option value="tools">Utilities & Tools</option>
            <option value="experiments">Game & Experiments</option>
          </select>
        </div>

        {/* Tech Tags */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Tech Tags *
          </label>
          <div className="flex gap-2 mb-2 flex-wrap">
            {form.techTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 font-mono text-xs px-3 py-1 rounded-full bg-accent-glow text-accent"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-white transition-colors"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            onBlur={addTag}
            placeholder="Type a tag and press Enter"
            className={inputClass}
          />
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              value={form.thumbnailUrl}
              onChange={(e) =>
                setForm((f) => ({ ...f, thumbnailUrl: e.target.value }))
              }
              placeholder="https://..."
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Live URL
            </label>
            <input
              type="url"
              value={form.liveUrl}
              onChange={(e) =>
                setForm((f) => ({ ...f, liveUrl: e.target.value }))
              }
              placeholder="https://..."
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            value={form.githubUrl}
            onChange={(e) =>
              setForm((f) => ({ ...f, githubUrl: e.target.value }))
            }
            placeholder="https://github.com/..."
            className={inputClass}
          />
        </div>

        {/* Featured + Order */}
        <div className="flex items-center gap-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm((f) => ({ ...f, featured: e.target.checked }))
              }
              className="w-4 h-4 rounded accent-accent"
            />
            <span className="text-sm text-text-secondary">Featured project</span>
          </label>

          <div className="flex items-center gap-2">
            <label className="text-sm text-text-secondary">Order:</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) =>
                setForm((f) => ({ ...f, order: parseInt(e.target.value) || 0 }))
              }
              className="w-20 px-3 py-2 bg-deep border border-border-subtle rounded-[10px] text-text-primary outline-none text-sm text-center focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-8">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-display font-bold text-sm rounded-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)] disabled:opacity-60"
        >
          <Save size={16} />
          {loading
            ? "Saving..."
            : mode === "create"
              ? "Create Project"
              : "Update Project"}
        </button>
        <a
          href="/admin"
          className="px-6 py-3 border border-border-subtle text-text-secondary text-sm font-medium rounded-full hover:border-text-muted hover:text-text-primary transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
