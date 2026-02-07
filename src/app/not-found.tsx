import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-6 text-center">
      <div>
        <div className="font-display text-[8rem] font-extrabold leading-none bg-gradient-to-b from-text-primary to-text-muted bg-clip-text text-transparent">
          404
        </div>
        <p className="text-text-secondary text-lg mt-4 mb-8">
          This page doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-void font-display font-bold text-sm rounded-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)]"
        >
          <Home size={16} />
          Go Home
        </a>
      </div>
    </div>
  );
}
