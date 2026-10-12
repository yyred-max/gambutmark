import React from 'react';
import { ComicScene } from '@/components/illustrations/Scenes';
import { ExplorerCharacter, PeatCharacter, FireCharacter } from '@/components/illustrations/Characters';
import { comicPanels } from '@/data/mockData';

export default function ComicSection() {
  return (
    <section id="comic" className="relative py-20 px-4 overflow-hidden" style={{ background: '#1a3c2e' }}>
      {/* Decorative background leaves */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="leaf-float absolute"
            style={{
              left: `${(i * 13) % 90}%`,
              top: `${(i * 19) % 80}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${8 + (i % 3)}s`,
            }}
          >
            <svg viewBox="0 0 30 30" className="w-6 h-6">
              <path d="M15 2 Q25 10 22 20 Q15 28 8 22 Q3 12 15 2 Z" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#f5a623' }}>
            Webtoon Edukatif
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#f5ead7' }}>
            Cerita Tentang Gambut
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#9ccc9a' }}>
            Ikuti penjelajah kami melalui rawa gambut untuk menemukan bagaimana ekosistem ini bekerja,
            apa yang mengancamnya, dan bagaimana kita bisa menyelamatkannya.
          </p>
        </div>

        {/* Vertical comic panels */}
        <div className="space-y-6">
          {comicPanels.map((panel, index) => {
            const isEven = index % 2 === 0;
            const character = panel.scene === 'underground-fire' || panel.scene === 'dry-peat'
              ? <FireCharacter className="w-20 h-24" />
              : panel.scene === 'solution'
              ? <ExplorerCharacter className="w-20 h-28" />
              : <PeatCharacter className="w-16 h-16" mood={panel.scene === 'dry-peat' ? 'dry' : 'happy'} />;

            return (
              <div
                key={panel.id}
                className={`reveal-on-scroll comic-panel bg-[#f5ead7] p-5 md:p-6 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5 items-center`}
                style={{ borderColor: '#1a3c2e' }}
              >
                {/* Scene illustration */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden border-2 border-[#1a3c2e] bg-white">
                    <ComicScene scene={panel.scene} className="w-full h-auto" />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 w-full md:w-1/2">
                  {/* Panel number */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white"
                      style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl" style={{ color: '#1a3c2e' }}>
                      {panel.title}
                    </h3>
                  </div>

                  {/* Character speech bubble */}
                  <div className="flex items-start gap-2 mb-3">
                    <div className="flex-shrink-0">{character}</div>
                    <div className="speech-bubble flex-1">
                      <p className="font-display font-semibold text-sm" style={{ color: '#d94c2a' }}>
                        {panel.characterSpeech}
                      </p>
                    </div>
                  </div>

                  {/* Narration */}
                  <p className="font-body text-base leading-relaxed" style={{ color: '#234d3a' }}>
                    {panel.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* End badge */}
        <div className="text-center mt-10">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold"
            style={{ background: '#f5a623', color: '#1a3c2e', border: '2.5px solid #f5ead7' }}
          >
            <span>Sekarang kamu tahu cara kerja gambut!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
