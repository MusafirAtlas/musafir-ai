'use client';

const benefits = [
    { title: "Save Time", stat: "10x", description: "Faster planning with AI" },
    { title: "Save Money", stat: "40%", description: "Average cost savings" },
    { title: "Stay Safe", stat: "100%", description: "Verified travelers only" },
    { title: "Make Friends", stat: "∞", description: "Lifelong connections" },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="relative flex min-h-screen items-center justify-center px-8 py-16">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-primary/5" />

            <div className="z-10 max-w-5xl w-full">
                <div className="mb-12">
                    <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                        Why Choose <span className="text-primary">Musafir</span>
                    </h2>
                    <p className="font-bricolage text-base sm:text-lg text-muted-foreground mt-4 max-w-xl">
                        Experience the benefits that thousands of solo travelers are already enjoying.
                    </p>
                </div>

                {/* Stat row — no cards, just clean numbers */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 rounded-2xl overflow-hidden mb-12">
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className="bg-background/40 backdrop-blur-sm px-6 py-8 hover:bg-primary/5 transition-colors duration-300 group"
                        >
                            <div className="font-ahsing text-4xl sm:text-5xl text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                                {benefit.stat}
                            </div>
                            <div className="font-bricolage font-bold text-sm text-foreground mb-1">{benefit.title}</div>
                            <div className="font-bricolage text-xs text-muted-foreground">{benefit.description}</div>
                        </div>
                    ))}
                </div>

                {/* Supporting copy */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <p className="font-bricolage text-sm text-muted-foreground leading-relaxed max-w-sm">
                        Musafir isn't just an app — it's a movement toward more connected, more meaningful travel experiences for solo explorers worldwide.
                    </p>
                    <p className="font-bricolage text-sm text-muted-foreground leading-relaxed max-w-sm">
                        From AI-powered planning to real human connections, every feature is designed to make your journey safer, richer, and more memorable.
                    </p>
                </div>
            </div>
        </section>
    );
}
