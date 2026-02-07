import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-12 lg:mb-16", className)}>
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent mb-4">
        <span className="inline-block w-4 h-px bg-accent" />
        {label}
      </p>
      <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[560px] text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
