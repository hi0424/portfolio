"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "UPI Sahayak",
        desc: "Voice-first backend for merchant UPI interactions",
    },
    {
        title: "Return Intelligence",
        desc: "Return data processing and root cause analysis",
    },
    {
        title: "EarlyShield",
        desc: "Campus intelligence and early-warning system",
    },
    {
        title: "Auto AI",
        desc: "Predictive backend system for vehicle maintenance",
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative h-screen w-screen flex items-center justify-center">
            {/* Centered grid of project folders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-6">
                {projects.map((p) => (
                    <motion.div
                        key={p.title}
                        className="text-center cursor-pointer"
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    >
                        <img
                            src="/folder.png"
                            alt={p.title}
                            className="w-16 md:w-20 mx-auto select-none"
                        />
                        <p className="mt-2 font-semibold text-white text-sm md:text-base">
                            {p.title}
                        </p>
                        <p className="text-xs md:text-sm text-white/80 max-w-[150px] mx-auto">
                            {p.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
