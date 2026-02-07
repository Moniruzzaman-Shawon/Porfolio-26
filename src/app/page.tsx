import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CustomCursor from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Certificates } from "@/components/sections/Certificates";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <GrainOverlay />
      <CustomCursor />
    </>
  );
}
