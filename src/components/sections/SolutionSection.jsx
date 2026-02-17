'use client';

export default function SolutionSection() {
    return (
        <section id="solution" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-radial-primary opacity-30" />

            <div className="z-10 max-w-3xl">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 text-foreground leading-tight">
                    One <span className="text-primary hover:scale-110 inline-block transition-transform duration-300 cursor-pointer">Insight</span>
                </h2>

                <div className="space-y-6">
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed hover:text-primary transition-colors duration-300">
                        Solo travelers crave shared experiences, not solitude.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-normal leading-relaxed">
                        Musafir transforms individual journeys into trusted, community-centric adventures through intelligent matching and verified connections.
                    </p>
                    <p className="text-base sm:text-lg text-primary font-semibold hover:scale-105 inline-block transition-transform duration-300">
                        AI meets human connection. Safety meets spontaneity.
                    </p>
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 gradient-section-divider" />
        </section>
    );
}
