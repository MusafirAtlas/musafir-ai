'use client';

import { useState } from 'react';
import { ArrowRight, MapPin, Twitter, Github, Linkedin, Instagram, Mail, CheckCircle2 } from 'lucide-react';

const NAV_LINKS = [
    { label: "The Problem", href: "#problem" },
    { label: "Our Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "Trust & Safety", href: "#trust" },
    { label: "Stories", href: "#testimonials" },
];

const SOCIAL = [
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

const LEGAL = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
    };

    return (
        <footer className="relative z-10 border-t border-border/40 bg-background/90 backdrop-blur-md font-bricolage overflow-hidden">
            {/* Subtle top gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-20 bg-primary/5 blur-2xl" />

            <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

                {/* Top section: Brand + Waitlist */}
                <div className="grid md:grid-cols-2 gap-10 mb-12 pb-12 border-b border-border/30">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="font-ahsing text-2xl text-foreground tracking-[3px]">
                                <span className="text-primary text-4xl">M</span>usafir
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">
                            AI-powered travel companion for solo explorers seeking authentic connections and unforgettable adventures.
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin size={12} className="text-primary" />
                            <span>Built for explorers, everywhere</span>
                        </div>
                    </div>

                    {/* Waitlist mini-form */}
                    <div className="flex flex-col justify-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Join the Waitlist</p>
                        <p className="text-sm text-foreground font-medium mb-4">
                            Be first to explore. Limited early access spots available.
                        </p>
                        {submitted ? (
                            <div className="flex items-center gap-2 text-primary text-sm">
                                <CheckCircle2 size={16} />
                                <span>You're on the list — we'll be in touch!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                                <div className="relative flex-1">
                                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-background/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                                >
                                    Join
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Middle: Nav links + Social */}
                <div className="flex flex-col sm:flex-row justify-between gap-8 mb-10">
                    {/* Page links */}
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Explore</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex-shrink-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Follow Us</p>
                        <div className="flex gap-3">
                            {SOCIAL.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl bg-primary/8 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/15 transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Musafir. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {LEGAL.map((item, i) => (
                            <span key={item.label} className="flex items-center gap-4">
                                <a href={item.href} className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                                    {item.label}
                                </a>
                                {i < LEGAL.length - 1 && <span className="text-border/60">·</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
