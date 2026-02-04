"use client";

export default function AboutSection() {
    return (
        <section className="relative h-screen w-screen">
            <img
                src="/about-hero.png"
                alt="About"
                className="w-full h-full object-cover"
            />

            {/* Tagline */}
            <p
                className="
          absolute
          top-[58%]
          left-1/2
          -translate-x-1/2
          text-lg
          text-[#2E3A8C]
          text-center
          max-w-xl
        "
            >
                <i>I build backend systems and think a lot about how data moves.</i>
            </p>

            {/* Resume */}
            <div className="absolute bottom-10 right-10 text-center cursor-pointer">
                <img src="/folder.png" className="w-16 mx-auto" />
                <p className="text-sm mt-2 text-white">Resume.pdf</p>
            </div>
        </section>
    );
}
