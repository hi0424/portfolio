"use client";

import { motion } from "framer-motion";

type StackItem = {
    name: string;
    icon: string;
};

type StackGroup = {
    title: string;
    items: StackItem[];
};

const stack: StackGroup[] = [
    {
        title: "Backend & Data",
        items: [
            { name: "Python", icon: "/stack/python.svg" },
            { name: "FastAPI", icon: "/stack/fastapi.svg" },
            { name: "Firebase", icon: "/stack/firebase.svg" },
            { name: "MongoDB", icon: "/stack/mongodb.svg" },
        ],
    },
    {
        title: "AI & Intelligent Systems",
        items: [
            { name: "OpenAI", icon: "/stack/openai.svg" },
            { name: "Azure AI", icon: "/stack/azure.svg" },
            { name: "LangGraph", icon: "/stack/langgraph.svg" },
        ],
    },
    {
        title: "Deployment & Infrastructure",
        items: [
            { name: "Vercel", icon: "/stack/vercel.svg" },
            { name: "Render", icon: "/stack/render.svg" },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "Next.js", icon: "/stack/nextjs.svg" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative min-h-screen w-screen flex items-center justify-center px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {stack.map((group, groupIndex) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                        className="
                            bg-white/15
                            backdrop-blur-md
                            rounded-2xl
                            p-6
                            border border-white/20
                            shadow-lg
                            hover:bg-white/20
                            transition-all duration-300
                        "
                    >
                        <h3
                            className="text-[#281c80] font-semibold text-lg md:text-xl mb-5 pb-3 border-b border-white/20"
                            style={{
                                fontFamily: "'Times New Roman MT Condensed', 'Times New Roman', Times, serif",
                            }}
                        >
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-4 justify-start">
                            {group.items.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="flex flex-col items-center w-14 md:w-16 cursor-pointer"
                                >
                                    <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                        />
                                    </div>
                                    <p
                                        className="text-xs text-black mt-2 text-center font-medium"
                                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                                    >
                                        {item.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
