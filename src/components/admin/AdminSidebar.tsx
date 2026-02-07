"use client";

import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, ExternalLink, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Projects", href: "/admin", icon: FolderKanban },
];

export function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="w-64 bg-deep border-r border-border-subtle flex flex-col min-h-screen shrink-0">
      <div className="px-6 h-16 flex items-center border-b border-border-subtle">
        <Logo size="sm" />
        <span className="ml-2 text-[0.65rem] font-mono text-text-muted uppercase tracking-wider bg-card px-2 py-0.5 rounded">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent-glow text-accent"
                  : "text-text-secondary hover:text-text-primary hover:bg-card"
              )}
            >
              <Icon size={18} />
              {item.label}
            </a>
          );
        })}

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-card transition-colors"
        >
          <ExternalLink size={18} />
          View Site
        </a>
      </nav>

      <div className="px-3 py-4 border-t border-border-subtle">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium text-text-secondary hover:text-red-400 hover:bg-red-500/10 transition-colors w-full"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
