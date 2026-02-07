"use client";

import { services } from "@/lib/constants";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="relative z-[1] py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeader
            label="Services"
            title="What I do best"
            description="Specialized in building end-to-end web solutions with modern tools and frameworks."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.1}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
