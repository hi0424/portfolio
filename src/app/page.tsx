"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import CloudsBackground from "@/components/CloudsBackground";
import { Section } from "../types/section";

export default function Home() {
  const [active, setActive] = useState<Section>("About");

  return (
    <main className="relative min-h-screen w-screen overflow-auto">
      {/* Clouds always visible */}
      <CloudsBackground />

      {/* Navbar */}
      <Navbar active={active} setActive={setActive} />

      {/* ABOUT — mounted ONLY on About */}
      {active === "About" && (
        <div className="relative z-20 min-h-screen">
          <AboutSection />
        </div>
      )}

      {/* PROJECTS */}
      {active === "Projects" && (
        <div className="relative z-10 min-h-screen pt-20">
          <ProjectsSection />
        </div>
      )}

      {/* TECH STACK */}
      {active === "Tech Stack" && (
        <div className="absolute inset-0 z-10">
          <TechStackSection />
        </div>
      )}


      {/* CONTACT */}
      {active === "Contact" && (
        <div className="relative z-10 min-h-screen pt-20">
          <ContactSection />
        </div>
      )}
    </main>
  );
}
