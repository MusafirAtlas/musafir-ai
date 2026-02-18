'use client';

import { useState } from 'react';
import { Map, AlertTriangle, Palmtree, UserX, Lightbulb } from 'lucide-react';

export default function ProblemSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const problems = [
        {
            Icon: Map,
            title: "Fragmented Planning",
            description: "Solo travelers juggle 10+ apps and platforms just to plan a single trip. Exhausting research, disconnected tools, no single source of truth.",
            color: "from-red-500/10 to-orange-500/10"
        },
        {
            Icon: AlertTriangle,
            title: "Safety Concerns",
            description: "Traveling alone means constant vigilance. Meeting strangers feels risky. No verification, no trust layer, no peace of mind.",
            color: "from-primary/10 to-pink-500/10"
        },
        {
            Icon: Palmtree,
            title: "Missing Authenticity",
            description: "Tourist traps dominate search results. Local gems remain hidden. Guidebooks are generic, social media is curated lies.",
            color: "from-purple-500/10 to-primary/10"
        },
        {
            Icon: UserX,
            title: "Isolated Experience",
            description: "The journey begins alone—and often stays that way. Shared moments become solo photos. Adventures lack the magic of community.",
            color: "from-primary/10 to-red-600/10"
        }
    ];

    return (
        <section id="problem" className="relative flex min-h-screen items-center justify-center px-8 py-16">
            {/* Enhanced gradient backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-transparent" />
            <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

            <div className="z-10 max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                            The Problem
                        </span>
                    </div>
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight">
                        Travel is{" "}
                        <span className="relative inline-block">
                            <span className="text-muted-foreground line-through decoration-primary decoration-2">
                                Fragmented
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        </span>
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Solo travelers face a broken ecosystem that wasn't built for them
                    </p>
                </div>

                {/* Problem Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className={`relative glassmorphic rounded-2xl p-6 transition-all duration-500 cursor-pointer h-full ${hoveredIndex === index ? 'scale-105 shadow-2xl shadow-primary/20' : ''
                                }`}>
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''
                                    }`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`text-primary mb-4 transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''
                                        }`}>
                                        <problem.Icon size={44} strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bricolage font-bold text-xl sm:text-2xl mb-3 text-foreground">
                                        {problem.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-bricolage text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {problem.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div className={`mt-6 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom insight */}
                <div className="mt-12 text-center">
                    <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground italic">
                        <Lightbulb size={16} className="text-primary flex-shrink-0" />
                        These aren't just inconveniences—they're barriers to the transformative experiences that make travel worthwhile
                    </p>
                </div>
            </div>
        </section>
    );
}
