'use client';

import { useEffect, useRef, useState } from 'react';
import { BadgeCheck, ShieldCheck, Star, ScanFace, Users, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

const TRUST_PILLARS = [
    {
        Icon: ScanFace,
        title: "Identity Verified",
        description: "Government ID + liveness check ensures every profile is a real person.",
        stat: "100%",
        statLabel: "real profiles"
    },
    {
        Icon: ShieldCheck,
        title: "Background Checked",
        description: "Third-party background screening on every traveler before they can connect.",
        stat: "0",
        statLabel: "unverified matches"
    },
    {
        Icon: Star,
        title: "Community Rated",
        description: "Peer reviews and trust scores build a transparent reputation system.",
        stat: "4.9★",
        statLabel: "avg trust score"
    },
    {
        Icon: Lock,
        title: "Data Protected",
        description: "End-to-end encrypted messaging. Your data is never sold or shared.",
        stat: "256-bit",
        statLabel: "encryption"
    },
];

const PROCESS_STEPS = [
    { Icon: ScanFace, label: "Scan ID" },
    { Icon: ShieldCheck, label: "Background Check" },
    { Icon: Users, label: "Community Review" },
    { Icon: BadgeCheck, label: "Verified Badge" },
];

function useInView(ref) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return inView;
}

export default function TrustSection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section
            id="trust"
            ref={sectionRef}
            className="relative flex min-h-screen items-center justify-center px-8 py-20"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 gradient-radial-primary opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/8" />

            <div className="z-10 max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-bricolage inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                        Safety First
                    </span>
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground leading-tight">
                        Trust by <span className="text-primary">Design</span>
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every connection on Musafir goes through a rigorous multi-layer verification process — so you can explore with confidence.
                    </p>
                </div>

                {/* Verification process flow */}
                <div className={`glassmorphic rounded-3xl p-6 md:p-8 mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <p className="font-bricolage text-xs text-muted-foreground uppercase tracking-widest mb-6 text-center">Verification Process</p>
                    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-0">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="flex items-center">
                                <button
                                    onMouseEnter={() => setActiveStep(i)}
                                    onMouseLeave={() => setActiveStep(null)}
                                    className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer ${activeStep === i ? 'bg-primary/15 scale-105' : 'hover:bg-primary/8'}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === i ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}`}>
                                        <step.Icon size={18} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bricolage text-xs text-muted-foreground whitespace-nowrap">{step.label}</span>
                                </button>
                                {i < PROCESS_STEPS.length - 1 && (
                                    <ArrowRight size={16} className="text-primary/30 mx-1 hidden sm:block flex-shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Completion bar */}
                    <div className="mt-6 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000"
                            style={{ width: inView ? '100%' : '0%' }}
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <CheckCircle2 size={14} className="text-primary" />
                        <span className="font-bricolage text-xs text-primary font-medium">All checks passed — fully verified</span>
                    </div>
                </div>

                {/* Trust pillars grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {TRUST_PILLARS.map((pillar, i) => (
                        <div
                            key={i}
                            className={`glassmorphic rounded-2xl p-6 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${200 + i * 100}ms` }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                                <pillar.Icon size={20} className="text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="font-ahsing text-2xl text-primary mb-0.5">{pillar.stat}</div>
                            <div className="font-bricolage text-xs text-muted-foreground mb-3">{pillar.statLabel}</div>
                            <h3 className="font-bricolage font-bold text-sm text-foreground mb-1">{pillar.title}</h3>
                            <p className="font-bricolage text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <p className="font-bricolage text-center text-sm text-muted-foreground italic">
                    Every connection is verified. Every journey is safer together.
                </p>
            </div>
        </section>
    );
}
