import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "font-mono text-[0.7rem] px-3 py-1 rounded-full bg-accent-glow text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
