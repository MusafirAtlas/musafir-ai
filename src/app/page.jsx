'use client';

import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import Scene3D from '@/components/Scene3D';
import ParticleField from '@/components/ParticleField';
import ConnectionNetwork from '@/components/ConnectionNetwork';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TrustSection from '@/components/sections/TrustSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [networkProgress, setNetworkProgress] = useState(0);

  // Initialize smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle scroll progress
    lenis.on('scroll', ({ scroll, limit }) => {
      const progress = scroll / limit;
      setScrollProgress(progress);

      // Network appears in solution section (around 40-60% scroll)
      if (progress > 0.3 && progress < 0.7) {
        setNetworkProgress(Math.min(1, (progress - 0.3) / 0.2));
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative w-full bg-background min-h-screen">
      {/* Header */}
      <Header />

      {/* 3D Background - optimized particle count */}
      <Scene3D scrollProgress={scrollProgress} mousePosition={mousePosition}>
        <ParticleField scrollProgress={scrollProgress} count={600} />
        <FloatingElements scrollProgress={scrollProgress} />
        <ConnectionNetwork scrollProgress={scrollProgress} sectionProgress={networkProgress} />
      </Scene3D>

      {/* Content Overlay */}
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <TrustSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
