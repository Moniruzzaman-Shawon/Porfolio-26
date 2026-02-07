import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border-subtle rounded-[20px] overflow-hidden transition-all duration-400",
        hover &&
          "hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
