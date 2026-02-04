"use client";

export default function AboutSection() {
    return (
        <section className="relative h-screen w-screen">
            {/* Hero image (name + background together) */}
            <img
                src="/about-hero.png"
                alt="About"
                className="
          w-full h-full
          object-cover
          sm:object-top
          md:object-center
        "
            />

            {/* Tagline */}
            <p
                className="
          absolute
          top-[62%] md:top-[58%]
          left-1/2 -translate-x-1/2
          text-sm md:text-lg
          text-[#2E3A8C]
          text-center
          max-w-xs md:max-w-xl
        "
            >
                I build backend systems and think a lot about how data moves.
            </p>

            {/* Resume shortcut */}
            <div className="absolute bottom-6 right-6 text-center cursor-pointer">
                <img src="/folder.png" className="w-14 md:w-16 mx-auto" />
                <p className="text-xs md:text-sm mt-1 text-white">Resume.pdf</p>
            </div>
        </section>
    );
}
