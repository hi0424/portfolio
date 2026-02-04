"use client";

import { Section } from "../types/section";

type Props = {
    active: Section;
    setActive: (section: Section) => void;
};

export default function Navbar({ active, setActive }: Props) {
    const tabs: Section[] = ["About", "Projects", "Tech Stack", "Contact"];

    return (
        <nav
            className="
                fixed top-4 left-1/2 -translate-x-1/2 z-50
                flex flex-wrap justify-center gap-2 px-4 py-2
                md:gap-3 md:px-6 md:py-3
                bg-white/10 backdrop-blur-md
                rounded-full
                border border-white/20
                shadow-lg
            "
        >
            {tabs.map((tab) => {
                const isActive = active === tab;

                return (
                    <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                        className={`
                            px-4 py-2 md:px-6 md:py-2.5
                            rounded-full
                            text-xs md:text-sm
                            font-semibold
                            tracking-wide
                            transition-all duration-300
                            ${isActive
                                ? "bg-[#2E4AA1]/80 text-white ring-2 ring-[#FFD84D] shadow-md"
                                : "bg-white/10 text-white hover:bg-[#3B5EDB]/50 hover:shadow-sm"
                            }
                        `}
                    >
                        {tab}
                    </button>
                );
            })}
        </nav>
    );
}
