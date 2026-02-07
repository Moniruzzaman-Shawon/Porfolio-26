interface SectionDividerProps {
  color?: string;
}

export default function SectionDivider({ color = "#00ff88" }: SectionDividerProps) {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div
        className="absolute inset-0 animate-shimmer"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
}
