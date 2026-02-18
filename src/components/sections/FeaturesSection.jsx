'use client';

import { useState } from 'react';
import { Map, Handshake, Zap } from 'lucide-react';

const features = [
    {
        title: "AI Itinerary Engine",
        description: "Personalized travel plans that adapt in real-time to your preferences and circumstances.",
        Icon: Map,
        tag: "Powered by AI"
    },
    {
        title: "Social Matching",
        description: "Connect with verified travelers who share your interests, pace, and destination.",
        Icon: Handshake,
        tag: "Verified Profiles"
    },
    {
        title: "Live Coordination",
        description: "Seamlessly sync plans, split costs, and navigate together—all in one place.",
        Icon: Zap,
        tag: "Real-time"
    }
];

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(null);

    return (
        <section id="features" className="relative flex min-h-screen items-center justify-center px-8 py-16">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />

            <div className="z-10 max-w-5xl w-full">
                <div className="mb-12">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                        Intelligent <span className="text-primary">Orchestration</span>
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground mt-4 max-w-xl">
                        Three core systems working in harmony to make every journey exceptional.
                    </p>
                </div>

                {/* Open list layout — no cards */}
                <div className="space-y-0 divide-y divide-border/30">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveFeature(i)}
                            onMouseLeave={() => setActiveFeature(null)}
                            className={`flex items-start gap-6 py-8 transition-all duration-300 cursor-pointer group ${activeFeature === i ? 'pl-2' : ''}`}
                        >
                            {/* Number */}
                            <span className="font-ahsing text-4xl text-primary/20 w-10 flex-shrink-0 leading-none mt-1 group-hover:text-primary/40 transition-colors duration-300">
                                0{i + 1}
                            </span>

                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeFeature === i ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                <feature.Icon size={18} strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-bricolage font-bold text-lg sm:text-xl text-foreground">
                                        {feature.title}
                                    </h3>
                                    <span className="font-bricolage text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full hidden sm:inline">
                                        {feature.tag}
                                    </span>
                                </div>
                                <p className="font-bricolage text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <span className={`text-primary/30 text-xl flex-shrink-0 mt-1 transition-all duration-300 ${activeFeature === i ? 'text-primary translate-x-1' : ''}`}>
                                →
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
