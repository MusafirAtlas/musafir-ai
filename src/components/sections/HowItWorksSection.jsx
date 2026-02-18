'use client';

import { useState } from 'react';
import { Sparkles, Globe, Rocket } from 'lucide-react';

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

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section id="how-it-works" className="relative flex min-h-screen items-center justify-center px-8 py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            <div className="z-10 max-w-5xl w-full">
                <div className="mb-12">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                        How <span className="text-primary">Musafir</span> Works
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground mt-4 max-w-xl">
                        Three simple steps to transform your solo journey into an unforgettable shared experience.
                    </p>
                </div>

                {/* Steps with connecting line */}
                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

                    <div className="space-y-10">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveStep(i)}
                                onMouseLeave={() => setActiveStep(null)}
                                className="flex gap-6 group cursor-pointer"
                            >
                                {/* Step dot */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 z-10 ${activeStep === i ? 'bg-primary border-primary text-white scale-110' : 'bg-background border-primary/30 text-primary'}`}>
                                    <step.Icon size={16} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <div className={`flex-1 pb-2 transition-all duration-300 ${activeStep === i ? 'translate-x-1' : ''}`}>
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="font-ahsing text-3xl text-primary/20 group-hover:text-primary/40 transition-colors duration-300 leading-none">
                                            {step.number}
                                        </span>
                                        <h3 className="font-bricolage font-bold text-lg sm:text-xl text-foreground">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="font-bricolage text-sm text-muted-foreground leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
