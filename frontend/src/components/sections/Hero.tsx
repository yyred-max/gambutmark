import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { HeroForest } from '@/components/illustrations/Scenes';
import { ExplorerCharacter, HornbillCharacter, PeatCharacter } from '@/components/illustrations/Characters';
import { FloatingLeaf, CartoonCloud, ParticleDots } from '@/components/illustrations/Environment';

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Illustrated forest background */}
      <div className="absolute inset-0">
        <HeroForest className="w-full h-full" />
      </div>

      {/* Drifting clouds */}
      <div className="absolute top-8 left-0 right-0 pointer-events-none">
        <div className="cloud-drift" style={{ animationDuration: '50s' }}>
          <CartoonCloud className="w-32 opacity-70" />
        </div>
      </div>
      <div className="absolute top-20 left-0 right-0 pointer-events-none">
        <div className="cloud-drift-slow" style={{ animationDuration: '70s', animationDelay: '15s' }}>
          <CartoonCloud className="w-24 opacity-50" color="#f5ead7" />
        </div>
      </div>
      <div className="absolute top-4 left-0 right-0 pointer-events-none">
        <div className="cloud-drift" style={{ animationDuration: '60s', animationDelay: '30s' }}>
          <CartoonCloud className="w-40 opacity-40" color="#fff" />
        </div>
      </div>

      {/* Floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="leaf-float absolute"
            style={{
              left: `${(i * 11) % 95}%`,
              top: `${(i * 17) % 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          >
            <FloatingLeaf className="w-4 h-4" color={i % 3 === 0 ? '#6bb077' : i % 3 === 1 ? '#4a8c5a' : '#f5a623'} />
          </div>
        ))}
      </div>

      {/* Firefly particles */}
      <ParticleDots count={12} area="100%" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 reveal-up"
            style={{
              background: 'rgba(245, 234, 215, 0.9)',
              border: '2px solid #2d6149',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Sparkles size={16} style={{ color: '#d94c2a' }} />
            <span className="font-display font-semibold text-sm" style={{ color: '#1a3c2e' }}>
              Pasar Karbon Lahan Gambut Indonesia
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-shadow-forest reveal-up"
            style={{ color: '#1a3c2e', animationDelay: '0.1s' }}
          >
            Lindungkan Gambut.
            <br />
            <span style={{ color: '#d94c2a' }}>Dinginkan Bumi.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-shadow-forest reveal-up"
            style={{ color: '#234d3a', animationDelay: '0.2s' }}
          >
            Jelajahi hutan rawa gambut Indonesia melalui cerita interaktif, pelajari bagaimana mereka
            menyimpan miliaran ton karbon, dan danai restorasi nyata melalui kredit karbon terverifikasi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#marketplace"
              className="btn-cartoon px-8 py-3.5 text-white text-lg flex items-center justify-center gap-2"
              style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
            >
              Jelajahi Pasar
            </a>
            <a
              href="#comic"
              className="btn-cartoon px-8 py-3.5 text-lg flex items-center justify-center gap-2"
              style={{ background: '#f5ead7', color: '#1a3c2e', border: '2.5px solid #1a3c2e' }}
            >
              Mulai Cerita
            </a>
          </div>
        </div>

        {/* Characters */}
        <div className="relative w-full max-w-3xl mt-12 h-48 flex items-end justify-center gap-8">
          {/* Explorer */}
          <div
            className="parallax-layer relative z-20"
            style={{ transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.3}px)` }}
          >
            <ExplorerCharacter className="w-24 md:w-28 h-auto" />
            <div className="speech-bubble absolute -top-12 -left-8 whitespace-nowrap text-sm font-display font-semibold" style={{ color: '#1a3c2e' }}>
              Selamat datang di rawa!
            </div>
          </div>

          {/* Hornbill */}
          <div
            className="parallax-layer relative z-10 anim-bob"
            style={{ transform: `translate(${parallax.x * 0.8}px, ${parallax.y * 0.5}px)`, animationDelay: '0.5s' }}
          >
            <HornbillCharacter className="w-28 md:w-32 h-auto" />
          </div>

          {/* Peat character */}
          <div
            className="parallax-layer relative z-20"
            style={{ transform: `translate(${parallax.x * 0.3}px, ${parallax.y * 0.2}px)` }}
          >
            <PeatCharacter className="w-20 md:w-24 h-auto" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
        <span className="font-display text-sm" style={{ color: '#1a3c2e' }}>Gulir untuk menjelajah</span>
        <ChevronDown size={24} className="anim-bob" style={{ color: '#1a3c2e' }} />
      </div>
    </section>
  );
}
