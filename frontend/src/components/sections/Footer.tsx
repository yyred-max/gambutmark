import React from 'react';
import { Heart } from 'lucide-react';
import { FooterForest } from '@/components/illustrations/Scenes';

export default function Footer() {
  const links = {
    Jelajah: [
      { label: 'Komik Edukatif', href: '#comic' },
      { label: 'Kategori Topik', href: '#topics' },
      { label: 'Penjelas Interaktif', href: '#' },
      { label: 'Statistik', href: '#stats' },
    ],
    Pasar: [
      { label: 'Jelajahi Proyek', href: '#marketplace' },
      { label: 'Cara Kerja', href: '#marketplace' },
      { label: 'Verifikasi', href: '#marketplace' },
      { label: 'Harga', href: '#marketplace' },
    ],
    Tentang: [
      { label: 'Misi Kami', href: '#hero' },
      { label: 'Cerita Restorasi', href: '#restoration' },
      { label: 'Berita', href: '#news' },
      { label: 'Newsletter', href: '#' },
    ],
  };

  return (
    <footer className="relative" style={{ background: '#1a3c2e' }}>
      {/* Panoramic forest illustration */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <FooterForest className="w-full h-full" />
        {/* Fireflies */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle-dot absolute rounded-full"
              style={{
                left: `${(i * 12) % 95}%`,
                bottom: '40%',
                width: '4px',
                height: '4px',
                background: '#ffd54a',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="relative px-4 py-12" style={{ background: '#1a3c2e' }}>
        <div className="max-w-6xl mx-auto">
          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 40 40" className="w-9 h-9">
                  <ellipse cx="20" cy="22" rx="16" ry="14" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
                  <ellipse cx="14" cy="17" rx="8" ry="7" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
                  <ellipse cx="26" cy="18" rx="7" ry="6" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
                  <path d="M20 22 L20 36" fill="none" stroke="#5c4632" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span className="font-display font-bold text-lg" style={{ color: '#f5ead7' }}>
                  GambutMark
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#9ccc9a' }}>
                Platform edukatif bergambar dan pasar karbon yang berdedikasi untuk melindungi
                hutan lahan gambut Indonesia.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: '#f5a623' }}>
                  {heading}
                </h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-body text-sm transition-colors hover:underline"
                        style={{ color: '#9ccc9a' }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
            style={{ borderTop: '2px solid rgba(245, 234, 215, 0.15)' }}
          >
            <p className="font-body text-xs" style={{ color: '#9ccc9a' }}>
              &copy; 2026 GambutMark. Semua data untuk tujuan demonstrasi.
            </p>
            <p className="font-body text-xs flex items-center gap-1.5" style={{ color: '#9ccc9a' }}>
              Dibuat dengan <Heart size={12} fill="#d94c2a" style={{ color: '#d94c2a' }} /> untuk lahan gambut Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
