"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "UPI Sahayak",
        desc: "Voice-first backend for merchant UPI interactions",
        x: "12%",
        y: "38%",
    },
    {
        title: "Return Intelligence",
        desc: "Return data processing and root cause analysis",
        x: "38%",
        y: "62%",
    },
    {
        title: "EarlyShield",
        desc: "Campus intelligence and early-warning system",
        x: "62%",
        y: "38%",
    },
    {
        title: "Auto AI",
        desc: "Predictive backend system for vehicle maintenance",
        x: "78%",
        y: "62%",
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative h-screen w-screen">
            {projects.map((p) => (
                <motion.div
                    key={p.title}
                    className="absolute text-center cursor-pointer"
                    style={{ left: p.x, top: p.y }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                    <img
                        src="/folder.png"
                        className="w-16 md:w-20 mx-auto select-none"
                    />
                    <p className="mt-2 font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-white/80 max-w-[200px] mx-auto">
                        {p.desc}
                    </p>
                </motion.div>
            ))}
        </section>
    );
}
