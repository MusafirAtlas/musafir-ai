'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles, Globe, Rocket, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Share Your Vision",
        description: "Tell us where you want to go, your interests, and travel style. Our AI analyzes thousands of experiences to craft your perfect itinerary.",
        Icon: Sparkles,
    },
    {
        number: "02",
        title: "Meet Your Tribe",
        description: "Get matched with verified travelers who share your destination and vibe. Every connection is background-checked and trust-scored.",
        Icon: Globe,
    },
    {
        number: "03",
        title: "Journey Together",
        description: "Coordinate in real-time, split costs seamlessly, and explore with confidence. Your adventure, amplified by community.",
        Icon: Rocket,
    }
];

const STEP_DURATION = 3500; // ms per step

// Drop your demo video URL here when ready
const DEMO_VIDEO_SRC = "";

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const intervalRef = useRef(null);
    const progressRef = useRef(null);

    const step = steps[activeStep];

    // Auto-advance steps
    useEffect(() => {
        if (isPaused) return;

        setProgress(0);
        const start = Date.now();

        progressRef.current = setInterval(() => {
            const elapsed = Date.now() - start;
            setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100));
        }, 30);

        intervalRef.current = setTimeout(() => {
            setActiveStep(prev => (prev + 1) % steps.length);
        }, STEP_DURATION);

        return () => {
            clearTimeout(intervalRef.current);
            clearInterval(progressRef.current);
        };
    }, [activeStep, isPaused]);

    const handleStepClick = (i) => {
        clearTimeout(intervalRef.current);
        clearInterval(progressRef.current);
        setActiveStep(i);
        setProgress(0);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <section id="how-it-works" className="relative flex min-h-screen items-center justify-center px-6 md:px-12 py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            <div className="z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── LEFT: heading + steps ── */}
                <div>
                    <div className="mb-10">
                        <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                            How <span className="text-primary">Musafir</span> Works
                        </h2>
                        <p className="font-bricolage text-base sm:text-lg text-muted-foreground mt-3 max-w-md">
                            Three simple steps to transform your solo journey into an unforgettable shared experience.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative">
                        {/* Vertical connector */}
                        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

                        <div className="space-y-10">
                            {steps.map((s, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    className="flex gap-6 group cursor-pointer"
                                >
                                    {/* Dot */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-500 z-10 ${activeStep === i
                                            ? 'bg-primary border-primary text-primary-foreground scale-110'
                                            : 'bg-background border-primary/25 text-primary/50'
                                        }`}>
                                        <s.Icon size={16} strokeWidth={1.5} />
                                    </div>

                                    {/* Text */}
                                    <div className={`flex-1 pb-2 transition-all duration-500 ${activeStep === i ? 'translate-x-1 opacity-100' : 'opacity-40'}`}>
                                        <div className="flex items-baseline gap-3 mb-1">
                                            <span className={`font-ahsing text-3xl leading-none transition-colors duration-500 ${activeStep === i ? 'text-primary/40' : 'text-muted-foreground/20'}`}>
                                                {s.number}
                                            </span>
                                            <h3 className="font-bricolage font-bold text-lg sm:text-xl text-foreground">{s.title}</h3>
                                        </div>
                                        <p className="font-bricolage text-sm text-muted-foreground leading-relaxed max-w-md">
                                            {s.description}
                                        </p>

                                        {/* Per-step progress bar */}
                                        {activeStep === i && !isPaused && (
                                            <div className="mt-3 h-0.5 w-full max-w-xs rounded-full bg-primary/15 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-primary transition-none"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Video panel ── */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Ambient glow */}
                    {/* <div className="absolute -inset-10 rounded-3xl blur-3xl opacity-10 bg-primary pointer-events-none" /> */}

                    <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-primary/10 shadow-2xl bg-background/80 backdrop-blur-sm">

                        {/* Step badge */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bricolage font-semibold bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm transition-all duration-500">
                            <step.Icon size={12} strokeWidth={2} />
                            Step {step.number}
                        </div>

                        {/* Pause/Resume button */}
                        <button
                            onClick={() => setIsPaused(p => !p)}
                            className="absolute top-4 right-4 z-20 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors"
                        >
                            {isPaused
                                ? <Play size={11} className="text-primary ml-0.5" />
                                : <Pause size={11} className="text-primary" />
                            }
                        </button>

                        {/* Video / Placeholder */}
                        <div className="relative aspect-[9/16] w-full">
                            {DEMO_VIDEO_SRC ? (
                                <video
                                    ref={videoRef}
                                    src={DEMO_VIDEO_SRC}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                /* ── Placeholder — on-theme ── */
                                <div className="w-full h-full bg-gradient-to-br from-primary/8 via-background to-primary/5 flex flex-col items-center justify-center gap-6 p-8 transition-all duration-700">
                                    {/* Mock UI skeleton */}
                                    <div className="w-full space-y-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-primary/20" />
                                            <div className="flex-1 space-y-1.5">
                                                <div className="h-2 rounded-full bg-primary/25 w-20" />
                                                <div className="h-1.5 rounded-full bg-primary/10 w-14" />
                                            </div>
                                        </div>
                                        {[1, 0.6, 0.35].map((op, j) => (
                                            <div
                                                key={j}
                                                className="w-full h-11 rounded-xl"
                                                style={{ background: `oklch(from var(--primary) l c h / ${op * 0.12})` }}
                                            />
                                        ))}
                                    </div>

                                    {/* Central icon */}
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20">
                                        <step.Icon size={28} className="text-primary" strokeWidth={1.5} />
                                    </div>

                                    <p className="font-bricolage text-xs text-center font-medium text-primary/70">
                                        {step.title}
                                    </p>

                                    {/* Animated shimmer */}
                                    <div className="w-full h-1 rounded-full bg-primary/10 overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-primary"
                                            style={{ width: `${progress}%`, transition: 'width 30ms linear' }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Bottom gradient overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" /> */}

                            {/* Mute toggle (only when real video) */}
                            {DEMO_VIDEO_SRC && (
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-14 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
                                >
                                    {isMuted
                                        ? <VolumeX size={13} className="text-white" />
                                        : <Volume2 size={13} className="text-white" />
                                    }
                                </button>
                            )}
                        </div>

                        {/* Step dot nav */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                            {steps.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: activeStep === i ? 20 : 6,
                                        height: 6,
                                        background: activeStep === i
                                            ? 'var(--primary)'
                                            : 'oklch(from var(--primary) l c h / 0.25)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
