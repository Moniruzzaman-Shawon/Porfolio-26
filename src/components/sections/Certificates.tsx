"use client";

import { useState } from "react";
import Image from "next/image";
import { certificates } from "@/lib/constants";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ExternalLink, Award, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const issuerColors: Record<string, { bg: string; border: string; text: string }> = {
  hackerrank: {
    bg: "bg-[#00ea64]/10",
    border: "border-[#00ea64]/20",
    text: "text-[#00ea64]",
  },
  phitron: {
    bg: "bg-[#7c3aed]/10",
    border: "border-[#7c3aed]/20",
    text: "text-[#a78bfa]",
  },
};

export function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative z-[1] py-16 sm:py-20 lg:py-[100px] bg-void">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Certifications"
            title="Courses & Certificates"
            description="Professional certifications and courses that validate my technical expertise."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {certificates.map((cert, i) => {
            const colors = issuerColors[cert.issuerLogo];
            return (
              <ScrollReveal key={cert.credentialId} delay={i * 0.12}>
                <div className="group bg-card border border-border-subtle rounded-[16px] sm:rounded-[20px] overflow-hidden transition-all duration-400 hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,255,136,0.08)]">
                  {/* Thumbnail — click to enlarge */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                    onClick={() => setSelected(i)}
                  >
                    <Image
                      src={cert.thumbnailUrl}
                      alt={cert.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-mono text-xs text-accent border border-accent/30 bg-accent-glow px-3 py-1.5 rounded-full">
                        Click to preview
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 sm:p-6">
                    {/* Issuer badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full border ${colors.bg} ${colors.border} ${colors.text}`}
                      >
                        <Award size={12} />
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-text-primary text-base mb-2 group-hover:text-white transition-colors duration-300">
                      {cert.name}
                    </h3>

                    {/* Credential ID */}
                    <p className="font-mono text-[11px] text-text-muted mb-4 truncate">
                      ID: {cert.credentialId}
                    </p>

                    {/* Verify link */}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent/80 hover:text-accent transition-colors duration-300"
                    >
                      Verify Credential
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox popup */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9000] flex items-center justify-center bg-void/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[800px] rounded-2xl overflow-hidden border border-border-subtle shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_60px_rgba(0,255,136,0.06)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={certificates[selected].thumbnailUrl}
                alt={certificates[selected].name}
                width={800}
                height={500}
                className="w-full h-auto"
              />
              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void/95 to-transparent px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-text-primary text-sm">
                    {certificates[selected].name}
                  </p>
                  <p className="font-mono text-[11px] text-text-muted">
                    {certificates[selected].issuer} &middot; {certificates[selected].credentialId}
                  </p>
                </div>
                <a
                  href={certificates[selected].verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent border border-accent/25 bg-accent-glow px-3 py-1.5 rounded-full hover:bg-accent/20 transition-colors duration-300"
                >
                  Verify
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
