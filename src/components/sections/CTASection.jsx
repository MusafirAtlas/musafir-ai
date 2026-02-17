'use client';

import { useState } from 'react';

export default function CTASection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative flex min-h-screen items-center justify-center px-8 py-20">
            <div className="z-10 max-w-2xl text-center">
                <div className="glassmorphic rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground leading-tight">
                        Begin Your Journey
                    </h2>

                    <p className="text-base sm:text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
                        Join the future of solo travel
                    </p>

                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group relative px-8 md:px-10 py-3 md:py-4 bg-primary hover:bg-primary/90 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Early Access
                            <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                                →
                            </span>
                        </span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-5 font-normal">
                        Currently in private beta
                    </p>

                    {/* Additional interactive elements */}
                    <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors duration-300 text-xs sm:text-sm font-medium">
                            Learn More
                        </a>
                        <span className="text-muted-foreground/30">•</span>
                        <a href="#" className="hover:text-primary transition-colors duration-300 text-xs sm:text-sm font-medium">
                            Watch Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
