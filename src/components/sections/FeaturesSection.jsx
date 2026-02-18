'use client';

import { useState } from 'react';
import { Map, Handshake, Zap } from 'lucide-react';

const FEATURE_ICONS = [Map, Handshake, Zap];

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        {
            title: "AI Itinerary Engine",
            description: "Personalized travel plans that adapt in real-time to your preferences and circumstances.",
            Icon: Map
        },
        {
            title: "Social Matching",
            description: "Connect with verified travelers who share your interests, pace, and destination.",
            Icon: Handshake
        },
        {
            title: "Live Coordination",
            description: "Seamlessly sync plans, split costs, and navigate together—all in one place.",
            Icon: Zap
        }
    ];

    return (
        <section id="features" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Gradient backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />
            <div className="absolute top-1/4 right-0 w-96 h-96 gradient-radial-primary blur-3xl opacity-30" />

            <div className="z-10 max-w-6xl w-full">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-foreground text-center leading-tight">
                    Intelligent <span className="text-primary">Orchestration</span>
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveFeature(i)}
                            onMouseLeave={() => setActiveFeature(null)}
                            className={`glassmorphic rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-pointer ${activeFeature === i
                                    ? 'scale-105 shadow-2xl shadow-primary/20 border-primary/30'
                                    : 'hover:scale-102'
                                }`}
                        >
                            <div
                                className="mb-3 text-primary transition-transform duration-300"
                                style={{
                                    transform: activeFeature === i ? 'scale(1.2) rotate(10deg)' : 'scale(1)'
                                }}
                            >
                                <feature.Icon size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-ahsing text-lg sm:text-xl mb-3 text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 gradient-section-divider" />
        </section>
    );
}
