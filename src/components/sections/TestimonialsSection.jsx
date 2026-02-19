'use client';

import { useState, useEffect, useRef } from 'react';
import { User, MapPin, Star } from 'lucide-react';

const STEP_DURATION = 4000;

const AVATAR_COLORS = [
    'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Digital Nomad",
        location: "Bali, Indonesia",
        quote: "Musafir transformed my solo trip to Japan. I met incredible people, discovered hidden gems, and felt safe every step of the way.",
    },
    {
        name: "Marcus Rivera",
        role: "Adventure Photographer",
        location: "Patagonia, Chile",
        quote: "The AI itinerary was spot-on, but the real magic was the community. I found my travel tribe and we're planning our next adventure together.",
    },
    {
        name: "Priya Sharma",
        role: "Software Engineer",
        location: "Iceland",
        quote: "As a solo female traveler, safety is everything. The verification system gave me peace of mind, and I made friends for life.",
    }
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef(null);
    const progressRef = useRef(null);
    const featured = testimonials[active];

    useEffect(() => {
        setProgress(0);
        const start = Date.now();

        progressRef.current = setInterval(() => {
            const elapsed = Date.now() - start;
            setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100));
        }, 30);

        timerRef.current = setTimeout(() => {
            setActive(prev => (prev + 1) % testimonials.length);
        }, STEP_DURATION);

        return () => {
            clearTimeout(timerRef.current);
            clearInterval(progressRef.current);
        };
    }, [active]);

    const handleSelect = (i) => {
        clearTimeout(timerRef.current);
        clearInterval(progressRef.current);
        setProgress(0);
        setActive(i);
    };

    return (
        <section id="testimonials" className="relative flex min-h-screen items-center justify-center px-8 py-16">
            <div className="absolute inset-0 gradient-radial-primary opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="z-10 max-w-5xl w-full">
                <div className="mb-12">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                        Traveler <span className="text-primary">Stories</span>
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground mt-4 max-w-xl">
                        Real experiences from our global community of explorers.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
                    {/* Featured quote — large, open */}
                    <div className="relative">
                        {/* Big decorative quote */}
                        <div className="font-ahsing text-[8rem] leading-none text-primary/10 absolute -top-8 -left-4 select-none pointer-events-none">"</div>

                        <div className="relative pt-8">
                            <p className="font-bricolage text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed mb-8 transition-all duration-500">
                                {featured.quote}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${AVATAR_COLORS[active]}`}>
                                    <User size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="font-bricolage font-bold text-foreground">{featured.name}</div>
                                    <div className="font-bricolage text-sm text-muted-foreground">{featured.role}</div>
                                    <div className="flex items-center gap-1 text-xs text-primary mt-0.5">
                                        <MapPin size={11} />
                                        {featured.location}
                                    </div>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-0.5 ml-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-primary fill-primary" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Selector list — minimal, no cards */}
                    <div className="space-y-1 pt-8">
                        {testimonials.map((t, i) => (
                            <button
                                key={i}
                                onClick={() => handleSelect(i)}
                                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${active === i ? 'bg-primary/10 border border-primary/20' : 'hover:bg-primary/5 border border-transparent'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${AVATAR_COLORS[i]} ${active === i ? 'scale-110' : ''}`}>
                                        <User size={14} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-bricolage font-semibold text-sm transition-colors duration-300 ${active === i ? 'text-primary' : 'text-foreground'}`}>
                                            {t.name}
                                        </div>
                                        <div className="font-bricolage text-xs text-muted-foreground">{t.role}</div>
                                        {/* Progress bar for active item */}
                                        {active === i && (
                                            <div className="mt-2 h-0.5 w-full rounded-full bg-primary/15 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-primary transition-none"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
