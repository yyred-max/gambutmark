import React, { useState } from 'react';
import { RestorationScene } from '@/components/illustrations/Scenes';
import { restorationStories } from '@/data/mockData';
import { ArrowLeftRight } from 'lucide-react';

export default function RestorationSection() {
  const [activeStory, setActiveStory] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const story = restorationStories[activeStory];

  return (
    <section id="restoration" className="relative py-20 px-4" style={{ background: 'linear-gradient(180deg, #f5ead7 0%, #e8d4a8 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#d94c2a' }}>
            Pemulihan dalam Aksi
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#1a3c2e' }}>
            Cerita Restorasi
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#234d3a' }}>
            Lihat bagaimana komunitas dan konservasionis menghidupkan kembali lahan gambut yang rusak.
          </p>
        </div>

        {/* Story tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {restorationStories.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setActiveStory(i); setShowAfter(false); }}
              className="px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-all border-2.5"
              style={{
                background: activeStory === i ? '#4a8c5a' : 'transparent',
                color: activeStory === i ? '#fff' : '#1a3c2e',
                borderColor: '#4a8c5a',
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Story display */}
        <div
          key={story.id}
          className="comic-panel bg-white p-6 md:p-8 scale-in"
          style={{ borderColor: '#1a3c2e' }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Before/After illustration */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border-2 border-[#1a3c2e] bg-white">
                <RestorationScene type={showAfter ? story.afterImage : story.beforeImage} className="w-full h-auto" />
                {/* Label */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full font-display font-semibold text-xs text-white border-2 border-[#1a3c2e]"
                  style={{ background: showAfter ? '#4a8c5a' : '#d94c2a' }}
                >
                  {showAfter ? 'Sesudah' : 'Sebelum'}
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="btn-cartoon w-full py-2.5 font-display font-semibold flex items-center justify-center gap-2 text-white"
                style={{ background: showAfter ? '#4a8c5a' : '#d94c2a', border: '2.5px solid #1a3c2e' }}
              >
                <ArrowLeftRight size={18} />
                {showAfter ? 'Tampilkan Sebelum' : 'Tampilkan Sesudah'}
              </button>
            </div>

            {/* Story text */}
            <div>
              <h3 className="font-display font-bold text-2xl mb-1" style={{ color: '#1a3c2e' }}>
                {story.title}
              </h3>
              <p className="font-body text-sm mb-4" style={{ color: '#7a6353' }}>
                {story.location}
              </p>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#234d3a' }}>
                {story.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {story.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center rounded-xl p-3 border-2 scale-in"
                    style={{ borderColor: '#4a8c5a40', background: '#f5ead7', animationDelay: `${i * 0.1}s` }}
                  >
                    <p className="font-display font-bold text-lg" style={{ color: '#4a8c5a' }}>
                      {stat.value}
                    </p>
                    <p className="font-body text-xs mt-1" style={{ color: '#7a6353' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
