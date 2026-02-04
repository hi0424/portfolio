"use client";

import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    x: string;
    y: string;
};

const projects: Project[] = [
    {
        title: "UPI Sahayak",
        description: "Voice-first backend system for merchant UPI interactions",
        x: "12%",
        y: "38%",
    },
    {
        title: "Return Intelligence",
        description: "Return data processing and root cause analysis backend",
        x: "38%",
        y: "62%",
    },
    {
        title: "EarlyShield",
        description: "Campus intelligence and early-warning system",
        x: "62%",
        y: "38%",
    },
    {
        title: "Auto AI",
        description: "Predictive backend system for vehicle maintenance",
        x: "78%",
        y: "62%",
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative h-screen w-screen">
            {projects.map((project) => (
                <motion.div
                    key={project.title}
                    className="absolute text-center cursor-pointer"
                    style={{ left: project.x, top: project.y }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                    {/* Folder Icon */}
                    <img
                        src="/folder.png"
                        alt={project.title}
                        className="w-20 mx-auto select-none"
                    />

                    {/* Project Title */}
                    <p className="mt-2 font-semibold text-white">
                        {project.title}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/80 max-w-[200px] mx-auto">
                        {project.description}
                    </p>
                </motion.div>
            ))}
        </section>
    );
}
