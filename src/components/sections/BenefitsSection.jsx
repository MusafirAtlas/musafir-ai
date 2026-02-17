'use client';

import { useState } from 'react';

export default function BenefitsSection() {
    const [hoveredBenefit, setHoveredBenefit] = useState(null);

    const benefits = [
        {
            title: "Save Time",
            stat: "10x",
            description: "Faster planning with AI-powered recommendations",
            gradient: "from-red-500/20 to-orange-500/20"
        },
        {
            title: "Save Money",
            stat: "40%",
            description: "Average savings through smart cost-splitting",
            gradient: "from-primary/20 to-pink-500/20"
        },
        {
            title: "Stay Safe",
            stat: "100%",
            description: "Verified travelers with background checks",
            gradient: "from-purple-500/20 to-primary/20"
        },
        {
            title: "Make Friends",
            stat: "∞",
            description: "Lifelong connections with like-minded explorers",
            gradient: "from-primary/20 to-red-600/20"
        }
    ];

    return (
        <section id="benefits" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-primary/5" />
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />

            <div className="z-10 max-w-6xl w-full">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground text-center leading-tight">
                    Why Choose <span className="text-primary">Musafir</span>
                </h2>
                <p className="text-center text-base sm:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Experience the benefits that thousands of solo travelers are already enjoying
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredBenefit(i)}
                            onMouseLeave={() => setHoveredBenefit(null)}
                            className="relative glassmorphic rounded-2xl p-6 text-center transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden"
                        >
                            {/* Animated gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 transition-opacity duration-500 ${hoveredBenefit === i ? 'opacity-100' : ''
                                }`} />

                            <div className="relative z-10">
                                <div className="text-5xl font-ahsing text-primary mb-2">
                                    {benefit.stat}
                                </div>
                                <h3 className="font-ahsing text-lg sm:text-xl mb-2 text-foreground">
                                    {benefit.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 gradient-section-divider" />
        </section>
    );
}
