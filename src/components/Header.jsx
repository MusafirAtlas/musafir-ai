'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ModeToggle } from '@/components/ThemeToggle';

const NAV_LINKS = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Trust & Safety", href: "#trust" },
    { label: "Stories", href: "#testimonials" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
        const observers = ids.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.35 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    return (
        <>
            {/* Floating island nav */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
                <div className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ${scrolled
                    ? 'rounded-2xl border border-border/50 bg-background/10 backdrop-blur-lg shadow-xl shadow-black/10'
                    : 'rounded-none border-transparent bg-transparent'
                    }`}>
                    <nav className="flex items-center justify-between px-5 py-3 font-bricolage">

                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
                            <span className="font-ahsing text-xl text-foreground tracking-[3px] group-hover:opacity-80 transition-opacity">
                                <span className="text-primary text-3xl">M</span>usafir
                            </span>
                        </a>

                        {/* Desktop nav links */}
                        <div className="hidden lg:flex items-center gap-0.5">
                            {NAV_LINKS.map((link) => {
                                const id = link.href.replace('#', '');
                                const isActive = activeSection === id;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${isActive
                                            ? 'text-primary bg-primary/8'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-primary" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Right: CTA */}
                        <div className="hidden md:flex items-center gap-2">
                            <ModeToggle />
                            <a
                                href="#benefits"
                                className="group flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                            >
                                Join Waitlist
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-foreground hover:bg-primary/10 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </nav>

                    {/* Mobile dropdown — inside the island */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-border/30 px-4 py-4 space-y-1">
                            {NAV_LINKS.map((link) => {
                                const id = link.href.replace('#', '');
                                const isActive = activeSection === id;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${isActive
                                            ? 'text-primary bg-primary/8'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                                            }`}
                                    >
                                        {link.label}
                                        <ArrowRight size={13} className="opacity-30" />
                                    </a>
                                );
                            })}
                            <div className="pt-2 flex flex-col gap-2">
                                <div className="flex justify-end px-2">
                                    <ModeToggle />
                                </div>
                                <a
                                    href="#benefits"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all active:scale-95"
                                >
                                    Join Waitlist <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Spacer so content doesn't hide under header */}
            <div className="h-16" />
        </>
    );
}
