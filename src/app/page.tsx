"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CloudsBackground from "@/components/CloudsBackground";
import { Section } from "../types/section";

export default function Home() {
  const [active, setActive] = useState<Section>("About");

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Clouds always visible */}
      <CloudsBackground />

      {/* Navbar */}
      <Navbar active={active} setActive={setActive} />

      {/* ABOUT — mounted ONLY on About */}
      {active === "About" && (
        <div className="absolute inset-0 z-20">
          <AboutSection />
        </div>
      )}

      {/* PROJECTS */}
      {active === "Projects" && (
        <div className="absolute inset-0 z-10">
          <ProjectsSection />
        </div>
      )}

      {/* TECH STACK */}
      {active === "Tech Stack" && (
        <div className="absolute inset-0 z-10" />
      )}

      {/* CONTACT */}
      {active === "Contact" && (
        <div className="absolute inset-0 z-10" />
      )}
    </main>
  );
}
