'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/10 backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-ahsing text-2xl text-foreground tracking-[3px]">
                        <span className="text-primary text-4xl">M</span>usafir
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </a>
                    <a href="#trust" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Trust & Safety
                    </a>
                    {/* <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        About
                    </a> */}
                    <button className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105">
                        Join Waitlist
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden glassmorphic border-t border-border/50">
                    <div className="px-6 py-4 space-y-4">
                        <a href="#features" className="block text-sm text-muted-foreground hover:text-primary">
                            Features
                        </a>
                        <a href="#trust" className="block text-sm text-muted-foreground hover:text-primary">
                            Trust & Safety
                        </a>
                        {/* <a href="#about" className="block text-sm text-muted-foreground hover:text-primary">
                            About
                        </a> */}
                        <button className="w-full px-6 py-2 bg-primary text-white text-sm font-medium rounded-full">
                            Join Waitlist
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
