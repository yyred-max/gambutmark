import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { NewsIllustration } from '@/components/illustrations/Scenes';
import { newsItems } from '@/data/mockData';

const categories = ['Semua', 'Restorasi', 'Siaga Api', 'Satwa Liar', 'Kebijakan', 'Komunitas', 'Pasar'];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? newsItems
    : newsItems.filter((n) => n.category === activeCategory);

  return (
    <section id="news" className="relative py-20 px-4" style={{ background: 'linear-gradient(180deg, #f0e0c4 0%, #f5ead7 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#d94c2a' }}>
            Berita Terbaru
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#1a3c2e' }}>
            Berita Lahan Gambut
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#234d3a' }}>
            Berita dan perkembangan terkini dari garis depan lahan gambut Indonesia.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full font-display font-semibold text-sm transition-all border-2"
              style={{
                background: activeCategory === cat ? '#2d6149' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#1a3c2e',
                borderColor: '#2d6149',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <article
              key={item.id}
              className="cartoon-card reveal-on-scroll rounded-2xl overflow-hidden bg-white border-2.5"
              style={{
                borderColor: '#1a3c2e',
                boxShadow: '4px 6px 0 rgba(26, 60, 46, 0.12)',
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {/* Illustrated thumbnail */}
              <div className="relative h-44 overflow-hidden border-b-2 border-[#1a3c2e]">
                <NewsIllustration type={item.illustration} className="w-full h-full" />
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full font-display font-semibold text-xs text-white border-2 border-[#1a3c2e]"
                  style={{
                    background: item.category === 'Siaga Api' ? '#d94c2a'
                      : item.category === 'Restorasi' ? '#4a8c5a'
                      : item.category === 'Satwa Liar' ? '#7ba868'
                      : item.category === 'Kebijakan' ? '#4a8aa8'
                      : item.category === 'Komunitas' ? '#5c4632'
                      : '#f5a623',
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-2 text-xs font-body" style={{ color: '#7a6353' }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(item.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display font-bold text-base mb-2 leading-snug" style={{ color: '#1a3c2e' }}>
                  {item.headline}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: '#5c4a3a' }}>
                  {item.excerpt}
                </p>

                {/* Source link */}
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-display font-semibold text-sm transition-colors hover:underline"
                  style={{ color: '#d94c2a' }}
                >
                  {item.source}
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-8 font-body text-xs" style={{ color: '#7a6353' }}>
          Berita ditampilkan untuk tujuan demonstrasi. Tautan sumber mengarah ke outlet berita aktual.
        </p>
      </div>
    </section>
  );
}
