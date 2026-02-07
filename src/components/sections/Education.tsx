"use client";

import { education } from "@/lib/constants";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";

export function Education() {
  return (
    <section id="education" className="relative z-[1] py-[100px] bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Education"
            title="Academic background"
            description="A strong theoretical foundation combined with hands-on practical experience."
          />
        </ScrollReveal>

        <div className="relative max-w-[700px] mt-12">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-accent to-border-subtle" />

          {education.map((item, i) => (
            <ScrollReveal key={item.degree} delay={i * 0.1}>
              <TimelineItem {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
