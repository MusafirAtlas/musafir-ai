'use client';

import { BadgeCheck, ShieldCheck, Star } from 'lucide-react';

export default function TrustSection() {
    const badges = [
        { label: "ID Verification", Icon: BadgeCheck },
        { label: "Background Check", Icon: ShieldCheck },
        { label: "Trust Score", Icon: Star }
    ];

    return (
        <section id="trust" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-radial-primary opacity-40" />

            <div className="z-10 max-w-3xl text-center">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 text-foreground leading-tight">
                    Trust by <span className="text-primary">Design</span>
                </h2>

                <div className="space-y-6">
                    <div className="glassmorphic rounded-2xl p-8 md:p-10 hover:scale-105 transition-all duration-500">
                        <h3 className="text-xl sm:text-2xl text-foreground mb-4 font-ahsing">
                            Multi-Level Verification
                        </h3>
                        <p className="mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                            Identity verification, background checks, and community ratings create a secure ecosystem.
                        </p>
                        <div className="flex gap-3 justify-center flex-wrap text-xs sm:text-sm">
                            {badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-primary/20 rounded-full border border-primary/30 hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-pointer text-foreground font-medium"
                                >
                                    <badge.Icon size={14} className="text-primary" />
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground italic font-normal">
                        Every connection is verified. Every journey is safer together.
                    </p>
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 gradient-section-divider" />
        </section>
    );
}
