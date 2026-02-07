"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-accent-glow flex items-center justify-center mx-auto mb-4">
            <Lock size={28} className="text-accent" />
          </div>
          <h1 className="font-display text-2xl font-bold">Admin Login</h1>
          <p className="text-text-secondary text-sm mt-2">
            Enter your admin password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border-subtle rounded-[20px] p-8">
          {error && (
            <div className="mb-4 px-4 py-3 rounded-[10px] bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              autoFocus
              className="w-full px-4 py-3 bg-deep border border-border-subtle rounded-[14px] text-text-primary outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] placeholder:text-text-muted"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-accent text-void font-display font-bold rounded-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
