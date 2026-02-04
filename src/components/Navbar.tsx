"use client";

import { Section } from "@/types/section";

type Props = {
    active: Section;
    setActive: (section: Section) => void;
};

export default function Navbar({ active, setActive }: Props) {
    const tabs: Section[] = ["About", "Projects", "Tech Stack", "Contact"];

    return (
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
            {tabs.map((tab) => {
                const isActive = active === tab;

                return (
                    <button
                        key={tab}
                        onClick={() => setActive(tab)}
                        className={`
              px-7 py-3 rounded-full text-sm font-medium
              transition-all duration-300
              ${isActive
                                ? "bg-[#2E4AA1] text-white ring-1 ring-[#FFD84D]"
                                : "bg-[#3B5EDB]/90 text-white hover:bg-[#2E4AA1]"
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
