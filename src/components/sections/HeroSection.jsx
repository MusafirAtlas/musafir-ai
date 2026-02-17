'use client';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-8 pt-20 overflow-hidden">
            {/* Base animated gradient background */}
            <div className="absolute inset-0 bg-gradient-animated" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

            {/* Optimized heart-forming gradient orbs - reduced blur for performance */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Reduced to 6 orbs with lighter blur for better performance */}

                {/* Left top circle */}
                <div
                    className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/30 rounded-full blur-2xl"
                    style={{ animation: 'orb-heart-1 18s ease-in-out infinite', willChange: 'transform' }}
                />

                {/* Right top circle */}
                <div
                    className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/30 rounded-full blur-2xl"
                    style={{ animation: 'orb-heart-2 18s ease-in-out infinite', willChange: 'transform' }}
                />

                {/* Bottom point - largest */}
                <div
                    className="absolute top-1/2 left-1/2 w-56 h-56 bg-primary/35 rounded-full blur-2xl"
                    style={{ animation: 'orb-heart-3 18s ease-in-out infinite', willChange: 'transform' }}
                />

                {/* Left upper curve */}
                <div
                    className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/28 rounded-full blur-xl"
                    style={{ animation: 'orb-heart-4 18s ease-in-out infinite 0.5s', willChange: 'transform' }}
                />

                {/* Right upper curve */}
                <div
                    className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/28 rounded-full blur-xl"
                    style={{ animation: 'orb-heart-5 18s ease-in-out infinite 0.5s', willChange: 'transform' }}
                />

                {/* Center dip between circles */}
                <div
                    className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/22 rounded-full blur-xl"
                    style={{ animation: 'orb-heart-8 18s ease-in-out infinite 1.5s', willChange: 'transform' }}
                />
            </div>

            <div className="z-10 max-w-4xl text-center space-y-6">
                <h1 className="font-ahsing text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-foreground tracking-tight leading-tight animate-fade-in">
                    Journey Alone.<br />
                    <span className="text-primary hover:scale-105 inline-block transition-transform duration-300">
                        Connect Together.
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
                    AI-powered travel companion for solo explorers seeking authentic connections
                </p>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2 hover:border-primary transition-colors">
                        <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Gradient fade to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </section>
    );
}
