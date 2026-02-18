'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

const STATS = [
    { icon: TrendingUp, value: '94%', label: 'of solo travelers feel lonely at some point' },
    { icon: Users, value: '2.3B', label: 'solo trips taken globally each year' },
    { icon: Globe, value: '78%', label: 'want to meet like-minded travelers' },
    { icon: Zap, value: '10x', label: 'faster planning with AI assistance' },
];

function useInView(ref) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return inView;
}

export default function SolutionSection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <section
            id="solution"
            ref={sectionRef}
            className="relative flex min-h-screen items-center justify-center px-8 py-20"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-radial-primary opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/8" />

            <div className="z-10 max-w-5xl w-full">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight">
                        One <span className="text-primary hover:scale-110 inline-block transition-transform duration-300 cursor-pointer">Insight</span>
                    </h2>
                    <p className="font-bricolage text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-2xl">
                        Solo travelers crave shared experiences, not solitude.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {STATS.map((stat, i) => (
                        <div
                            key={i}
                            className={`glassmorphic rounded-2xl p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${i * 120}ms` }}
                        >
                            <stat.icon size={20} className="text-primary mb-3" strokeWidth={1.5} />
                            <div className="font-ahsing text-3xl sm:text-4xl text-primary mb-2">{stat.value}</div>
                            <p className="font-bricolage text-xs sm:text-sm text-muted-foreground leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Pull quote */}
                <div className={`relative glassmorphic rounded-3xl p-8 md:p-10 border-l-4 border-primary transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-ahsing leading-none select-none">"</div>
                    <p className="font-bricolage text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                        Musafir transforms individual journeys into trusted, community-centric adventures
                        through intelligent matching and verified connections.
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <p className="font-bricolage text-sm sm:text-base text-primary font-semibold">
                            AI meets human connection. Safety meets spontaneity.
                        </p>
                        {/* Decorative dots */}
                        <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-primary/40" style={{ animationDelay: `${i * 200}ms` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
