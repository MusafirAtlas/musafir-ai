'use client';

import { useState } from 'react';
import { Sparkles, Globe, Rocket } from 'lucide-react';

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            title: "Share Your Vision",
            description: "Tell us where you want to go, your interests, and travel style. Our AI analyzes thousands of experiences to craft your perfect itinerary.",
            Icon: Sparkles
        },
        {
            number: "02",
            title: "Meet Your Tribe",
            description: "Get matched with verified travelers who share your destination and vibe. Every connection is background-checked and trust-scored.",
            Icon: Globe
        },
        {
            number: "03",
            title: "Journey Together",
            description: "Coordinate in real-time, split costs seamlessly, and explore with confidence. Your adventure, amplified by community.",
            Icon: Rocket
        }
    ];

    return (
        <section id="how-it-works" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="absolute inset-0 gradient-radial-primary opacity-40" />

            <div className="z-10 max-w-6xl w-full">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground text-center leading-tight">
                    How <span className="text-primary">Musafir</span> Works
                </h2>
                <p className="text-center text-base sm:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Three simple steps to transform your solo journey into an unforgettable shared experience
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveStep(i)}
                            onMouseLeave={() => setActiveStep(-1)}
                            className={`relative glassmorphic rounded-3xl p-8 transition-all duration-500 cursor-pointer ${activeStep === i
                                    ? 'scale-105 shadow-2xl shadow-primary/30 border-primary/40'
                                    : 'hover:scale-102'
                                }`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 ${activeStep === i ? 'opacity-100' : ''
                                }`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-primary">
                                        <step.Icon size={40} strokeWidth={1.5} />
                                    </span>
                                    <span className="font-ahsing text-4xl text-primary/30">{step.number}</span>
                                </div>
                                <h3 className="font-ahsing text-xl sm:text-2xl mb-3 text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                                    {step.description}
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
