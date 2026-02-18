'use client';

import { useState } from 'react';
import { User, MapPin } from 'lucide-react';

// Distinct accent colors per testimonial avatar
const AVATAR_COLORS = [
    'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
];

export default function TestimonialsSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(1);

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

    return (
        <section id="testimonials" className="relative flex min-h-screen items-center justify-center px-8 py-20">
            {/* Radial gradient background */}
            <div className="absolute inset-0 gradient-radial-primary opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="z-10 max-w-5xl w-full">
                <h2 className="font-ahsing text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground text-center leading-tight">
                    Traveler <span className="text-primary">Stories</span>
                </h2>
                <p className="text-center text-base sm:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Real experiences from our global community of explorers
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveTestimonial(i)}
                            onMouseLeave={() => setActiveTestimonial(1)}
                            className={`relative glassmorphic rounded-3xl p-8 transition-all duration-500 cursor-pointer ${activeTestimonial === i
                                    ? 'scale-105 shadow-2xl shadow-primary/20 border-primary/30'
                                    : ''
                                }`}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 ${activeTestimonial === i ? 'opacity-100' : ''
                                }`} />

                            <div className="relative z-10">
                                {/* Avatar icon */}
                                <div className={`w-14 h-14 rounded-full border flex items-center justify-center mb-4 ${AVATAR_COLORS[i]}`}>
                                    <User size={26} strokeWidth={1.5} />
                                </div>

                                <p className="text-sm sm:text-base text-muted-foreground italic mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-semibold text-foreground text-sm sm:text-base">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-primary mt-1">
                                        <MapPin size={12} />
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 gradient-section-divider" />
        </section>
    );
}
