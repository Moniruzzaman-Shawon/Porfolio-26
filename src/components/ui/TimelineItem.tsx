interface TimelineItemProps {
  date: string;
  degree: string;
  school: string;
  description: string;
}

export default function TimelineItem({
  date,
  degree,
  school,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border-subtle last:hidden" />

      {/* Green dot */}
      <div className="absolute left-[-4px] top-[6px] w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.4)]" />

      {/* Date */}
      <p className="font-mono text-xs text-accent tracking-wide mb-1">
        {date}
      </p>

      {/* Degree */}
      <h3 className="font-display font-bold text-text-primary mb-1">
        {degree}
      </h3>

      {/* School */}
      <p className="text-text-secondary text-sm mb-2">{school}</p>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
