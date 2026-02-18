'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Users, MapPin, Sparkles, Clock } from 'lucide-react';

const PERKS = [
    { Icon: Sparkles, text: "AI-crafted itinerary on signup" },
    { Icon: Users, text: "Matched with your travel tribe" },
    { Icon: MapPin, text: "Discover hidden local gems" },
    { Icon: Clock, text: "Early access — limited spots" },
];

const SOCIAL_PROOF = [
    { initials: "SC", color: "bg-blue-500" },
    { initials: "MR", color: "bg-amber-500" },
    { initials: "PS", color: "bg-emerald-500" },
    { initials: "AK", color: "bg-violet-500" },
    { initials: "LT", color: "bg-rose-500" },
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

export default function CTASection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);
    const [isHovered, setIsHovered] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
    };

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-screen items-center justify-center px-8 py-20"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
            <div className="absolute inset-0 gradient-radial-primary opacity-30" />

            <div className="z-10 w-full max-w-5xl">
                {/* Main CTA card */}
                <div className={`glassmorphic rounded-3xl p-8 md:p-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left: copy */}
                        <div>
                            <span className="font-bricolage inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-5">
                                Private Beta — Limited Access
                            </span>
                            <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground leading-tight">
                                Begin Your<br />
                                <span className="text-primary">Journey</span>
                            </h2>
                            <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
                                Join thousands of solo explorers already on the waitlist. Be the first to experience AI-powered travel with a community that has your back.
                            </p>

                            {/* Perks list */}
                            <ul className="space-y-3 mb-8">
                                {PERKS.map((perk, i) => (
                                    <li
                                        key={i}
                                        className={`flex items-center gap-3 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                        style={{ transitionDelay: `${300 + i * 100}ms` }}
                                    >
                                        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                                            <perk.Icon size={14} className="text-primary" strokeWidth={1.5} />
                                        </div>
                                        <span className="font-bricolage text-sm text-muted-foreground">{perk.text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Social proof avatars */}
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {SOCIAL_PROOF.map((p, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 rounded-full ${p.color} border-2 border-background flex items-center justify-center`}
                                        >
                                            <span className="font-bricolage text-white text-[9px] font-bold">{p.initials}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="font-bricolage text-xs text-muted-foreground">
                                    <span className="text-foreground font-semibold">2,400+</span> explorers already joined
                                </p>
                            </div>
                        </div>

                        {/* Right: form */}
                        <div className="flex flex-col gap-5">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
                                        <CheckCircle2 size={32} className="text-primary" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-ahsing text-2xl text-foreground">You're on the list!</h3>
                                    <p className="font-bricolage text-sm text-muted-foreground">We'll reach out as soon as your spot is ready. Get ready to explore.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="glassmorphic rounded-2xl p-6 border border-primary/10">
                                        <p className="font-bricolage text-xs text-muted-foreground uppercase tracking-widest mb-4">Get Early Access</p>
                                        <form onSubmit={handleSubmit} className="space-y-3">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                                className="font-bricolage w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                                            />
                                            <button
                                                type="submit"
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                className="font-bricolage group relative w-full py-3 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 active:scale-95 overflow-hidden"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    Join the Waitlist
                                                    <ArrowRight
                                                        size={16}
                                                        className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                                                    />
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </button>
                                        </form>
                                        <p className="font-bricolage text-xs text-muted-foreground mt-3 text-center">
                                            No spam. Unsubscribe anytime.
                                        </p>
                                    </div>

                                    {/* Secondary links */}
                                    <div className="flex justify-center gap-6">
                                        <a href="#features" className="font-bricolage hover:text-primary transition-colors duration-300 text-xs text-muted-foreground font-medium">
                                            Learn More
                                        </a>
                                        <span className="text-muted-foreground/30">•</span>
                                        <a href="#how-it-works" className="font-bricolage hover:text-primary transition-colors duration-300 text-xs text-muted-foreground font-medium">
                                            How it Works
                                        </a>
                                        <span className="text-muted-foreground/30">•</span>
                                        <a href="#trust" className="font-bricolage hover:text-primary transition-colors duration-300 text-xs text-muted-foreground font-medium">
                                            Trust &amp; Safety
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
