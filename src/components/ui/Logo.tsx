export default function Logo({ size = "default" }: { size?: "default" | "sm" }) {
  const isSmall = size === "sm";

  return (
    <span
      className={`
        relative inline-flex items-center group
        ${isSmall ? "px-3 py-1.5" : "px-3.5 py-2"}
        rounded-lg
        bg-gradient-to-br from-accent/[0.08] to-transparent
        border border-accent/[0.12]
        transition-all duration-400
        hover:border-accent/30
        hover:from-accent/[0.12] hover:to-accent/[0.03]
        hover:shadow-[0_0_20px_rgba(0,255,136,0.08),inset_0_1px_0_rgba(0,255,136,0.06)]
      `}
    >
      {/* Subtle corner accent — top left */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/30 rounded-tl-lg transition-all duration-400 group-hover:border-accent/60 group-hover:w-3 group-hover:h-3" />
      {/* Subtle corner accent — bottom right */}
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/30 rounded-br-lg transition-all duration-400 group-hover:border-accent/60 group-hover:w-3 group-hover:h-3" />

      <span
        className={`
          font-mono font-bold
          ${isSmall ? "text-sm tracking-normal" : "text-base tracking-wide"}
          select-none
        `}
      >
        <span className="text-accent/70 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
          &lt;
        </span>
        <span className="text-text-primary transition-colors duration-300 group-hover:text-white">
          Shawon
        </span>
        <span className="text-accent/50 transition-all duration-300 group-hover:text-accent/80 group-hover:drop-shadow-[0_0_6px_rgba(0,255,136,0.3)]">
          /
        </span>
        <span className="text-accent/70 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
          &gt;
        </span>
      </span>
    </span>
  );
}
