"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteMetadata } from "@/lib/constants";

const contactInfo = [
  { icon: <Mail size={20} />, label: "Email", value: siteMetadata.email },
  { icon: <MapPin size={20} />, label: "Location", value: siteMetadata.location },
  { icon: <Clock size={20} />, label: "Availability", value: "Open for opportunities" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative z-[1] py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Info side */}
          <div>
            <ScrollReveal>
              <SectionHeader
                label="Contact"
                title="Let's work together"
                description="Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-5 sm:gap-6 mt-6 sm:mt-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[14px] bg-card border border-border-subtle flex items-center justify-center shrink-0 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[0.78rem] text-text-muted uppercase tracking-[0.08em] mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-medium text-text-primary text-[0.95rem]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Form side */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border-subtle rounded-[28px] p-8 sm:p-10"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-[0.82rem] font-medium text-text-secondary mb-2 tracking-[0.02em]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full px-[18px] py-3.5 bg-deep border border-border-subtle rounded-[14px] text-text-primary font-body text-[0.95rem] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] placeholder:text-text-muted"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-[0.82rem] font-medium text-text-secondary mb-2 tracking-[0.02em]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full px-[18px] py-3.5 bg-deep border border-border-subtle rounded-[14px] text-text-primary font-body text-[0.95rem] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] placeholder:text-text-muted"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[0.82rem] font-medium text-text-secondary mb-2 tracking-[0.02em]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full px-[18px] py-3.5 bg-deep border border-border-subtle rounded-[14px] text-text-primary font-body text-[0.95rem] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,255,136,0.15)] placeholder:text-text-muted resize-y min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2.5 px-9 py-3.5 bg-accent text-void font-display font-bold text-[0.95rem] rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,255,136,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                      ? "Failed — Try Again"
                      : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
