"use client";

import { motion } from "framer-motion";

type ContactLink = {
    name: string;
    icon: string;
    url: string;
    label: string;
};

const contacts: ContactLink[] = [
    {
        name: "LinkedIn",
        icon: "💼",
        url: "https://www.linkedin.com/in/hitanshi-nahar-173a9a229/",
        label: "Let's connect professionally",
    },
    {
        name: "GitHub",
        icon: "🐙",
        url: "https://github.com/hi0424",
        label: "Check out my code",
    },
    {
        name: "Email",
        icon: "✉️",
        url: "mailto:[EMAIL_ADDRESS]",
        label: "Drop me a message",
    },
];

export default function ContactSection() {
    return (
        <section className="relative min-h-screen w-screen flex flex-col items-center justify-center px-6 py-24">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2
                    className="text-[#281c80] text-4xl md:text-5xl font-bold mb-4"
                    style={{
                        fontFamily: "'Times New Roman MT Condensed', 'Times New Roman', Times, serif",
                    }}
                >
                    Let&apos;s Connect
                </h2>
                <p className="text-[#2E3A8C] text-lg md:text-xl max-w-md mx-auto">
                    I&apos;m always open to new opportunities and collaborations
                </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full justify-center">
                {contacts.map((contact, index) => (
                    <motion.a
                        key={contact.name}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{
                            scale: 1.05,
                            y: -8,
                            boxShadow: "0 20px 40px rgba(40, 28, 128, 0.2)"
                        }}
                        className="
                            flex-1
                            bg-white/20
                            backdrop-blur-md
                            rounded-2xl
                            p-8
                            border border-white/30
                            shadow-lg
                            cursor-pointer
                            text-center
                            group
                            transition-all duration-300
                            hover:bg-white/30
                            hover:border-[#281c80]/30
                        "
                    >
                        {/* Icon */}
                        <motion.div
                            className="text-5xl md:text-6xl mb-4"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {contact.icon}
                        </motion.div>

                        {/* Name */}
                        <h3
                            className="text-[#281c80] text-xl md:text-2xl font-bold mb-2 group-hover:text-[#3B5EDB] transition-colors"
                            style={{
                                fontFamily: "'Times New Roman MT Condensed', 'Times New Roman', Times, serif",
                            }}
                        >
                            {contact.name}
                        </h3>

                        {/* Label */}
                        <p className="text-[#2E3A8C]/80 text-sm md:text-base">
                            {contact.label}
                        </p>

                        {/* Hover indicator */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#281c80] text-sm font-medium">
                                Click to visit →
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Footer text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16 text-[#2E3A8C]/70 text-sm text-center"
            >
                Built with 💙 and Next.js
            </motion.p>
        </section>
    );
}
