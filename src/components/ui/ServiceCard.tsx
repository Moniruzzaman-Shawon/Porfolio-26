import {
  Monitor,
  Code2,
  Layers,
  Webhook,
  Database,
  CloudUpload,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Code2,
  Layers,
  Webhook,
  Database,
  CloudUpload,
};

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  className?: string;
}

export default function ServiceCard({
  name,
  description,
  icon,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Monitor;

  return (
    <div
      className={cn(
        "group relative bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 overflow-hidden transition-all duration-400",
        "hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.15)]",
        className
      )}
    >
      {/* Green gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Icon */}
      <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-[12px] sm:rounded-[14px] bg-accent-glow flex items-center justify-center mb-4 sm:mb-5">
        <Icon size={24} className="text-accent" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-text-primary mb-2">
        {name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
