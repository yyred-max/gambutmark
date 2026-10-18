import { useState } from 'react';

interface Panel {
  id: number;
  title: string;
  content: string;
  illustration: JSX.Element;
}

export default function ComicSections() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const panels: Panel[] = [
    {
      id: 1,
      title: 'Apa itu Lahan Gambut?',
      content: 'Lahan gambut adalah ekosistem lahan basah yang terbentuk dari timbunan bahan organik selama ribuan tahun. Indonesia memiliki 20 juta hektar gambut tropis, menyimpan 57 miliar ton karbon.',
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-auto">
          <rect x="0" y="100" width="200" height="60" fill="#6B4423" />
          <rect x="0" y="80" width="200" height="20" fill="#4A7C2F" />
          <circle cx="40" cy="60" r="15" fill="#2D5016" />
          <circle cx="80" cy="50" r="20" fill="#2D5016" />
          <circle cx="120" cy="55" r="18" fill="#2D5016" />
          <circle cx="160" cy="48" r="22" fill="#2D5016" />
          <path d="M 10 140 Q 50 120 90 140 Q 130 120 170 140 Q 190 130 200 140" fill="none" stroke="#8B4513" strokeWidth="2" />
          <text x="100" y="135" fontSize="12" fill="#F5E6D3" textAnchor="middle" fontWeight="bold">Lapisan Gambut</text>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Gambut: Brankas Karbon Alami',
      content: 'Gambut menyimpan karbon 10x lebih banyak dari hutan hujan biasa. Satu hektar gambut dapat menyimpan hingga 6.000 ton CO₂, menjadikannya penjaga iklim global terbesar.',
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-auto">
          <rect x="50" y="40" width="100" height="80" rx="8" fill="#6B4423" stroke="#8B4513" strokeWidth="3" />
          <rect x="85" y="70" width="30" height="35" rx="2" fill="#4A7C2F" />
          <circle cx="100" cy="87" r="4" fill="#F5E6D3" />
          <text x="100" y="110" fontSize="14" fill="#F5E6D3" textAnchor="middle" fontWeight="bold">CO₂</text>
          <path d="M 30 50 L 50 40" stroke="#2D5016" strokeWidth="2" />
          <path d="M 30 80 L 50 70" stroke="#2D5016" strokeWidth="2" />
          <path d="M 30 110 L 50 100" stroke="#2D5016" strokeWidth="2" />
          <path d="M 170 50 L 150 40" stroke="#2D5016" strokeWidth="2" />
          <path d="M 170 80 L 150 70" stroke="#2D5016" strokeWidth="2" />
          <path d="M 170 110 L 150 100" stroke="#2D5016" strokeWidth="2" />
          <text x="100" y="145" fontSize="11" fill="#8B4513" textAnchor="middle">🔒 57 Miliar Ton Karbon</text>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Bahaya Kebakaran & Degradasi',
      content: 'Ketika gambut terbakar atau dikeringkan, karbon yang tersimpan ribuan tahun dilepas ke atmosfer. Kebakaran gambut 2015 melepaskan emisi setara dengan emisi tahunan Jepang.',
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-auto">
          <rect x="0" y="100" width="200" height="60" fill="#6B4423" />
          <path d="M 80 100 L 70 70 L 75 100 L 65 75 L 70 100" fill="#FF6B35" />
          <path d="M 100 100 L 90 60 L 95 100 L 85 65 L 90 100" fill="#FF6B35" />
          <path d="M 120 100 L 110 70 L 115 100 L 105 75 L 110 100" fill="#FF6B35" />
          <ellipse cx="50" cy="30" rx="20" ry="10" fill="#8B8B8B" opacity="0.6" />
          <ellipse cx="100" cy="25" rx="25" ry="12" fill="#8B8B8B" opacity="0.6" />
          <ellipse cx="150" cy="30" rx="20" ry="10" fill="#8B8B8B" opacity="0.6" />
          <text x="100" y="145" fontSize="11" fill="#FF6B35" textAnchor="middle" fontWeight="bold">⚠️ Emisi CO₂ Masif</text>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Solusi: Restorasi Gambut',
      content: 'Restorasi gambut mengembalikan fungsi ekosistem dengan pembasahan kembali, revegetasi, dan pencegahan kebakaran. Gambut yang sehat kembali menyerap dan menyimpan karbon.',
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-auto">
          <rect x="0" y="100" width="200" height="60" fill="#6B4423" />
          <rect x="0" y="90" width="200" height="10" fill="#4A9BDC" opacity="0.7" />
          <circle cx="30" cy="70" r="12" fill="#2D5016" />
          <rect x="28" y="82" width="4" height="18" fill="#8B4513" />
          <circle cx="70" cy="65" r="15" fill="#2D5016" />
          <rect x="68" y="80" width="4" height="20" fill="#8B4513" />
          <circle cx="110" cy="68" r="13" fill="#2D5016" />
          <rect x="108" y="81" width="4" height="19" fill="#8B4513" />
          <circle cx="150" cy="63" r="16" fill="#2D5016" />
          <rect x="148" y="79" width="4" height="21" fill="#8B4513" />
          <path d="M 10 50 L 15 45 L 20 50" stroke="#4A7C2F" strokeWidth="2" fill="none" />
          <path d="M 50 55 L 55 50 L 60 55" stroke="#4A7C2F" strokeWidth="2" fill="none" />
          <path d="M 90 52 L 95 47 L 100 52" stroke="#4A7C2F" strokeWidth="2" fill="none" />
          <text x="100" y="145" fontSize="11" fill="#4A7C2F" textAnchor="middle" fontWeight="bold">♻️ Ekosistem Pulih</text>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Peran Kredit Karbon: GambutMark',
      content: 'GambutMark menghubungkan proyek restorasi gambut dengan pendanaan global melalui kredit karbon. Setiap ton CO₂ yang diserap dapat dijual, mendanai kelestarian gambut Indonesia.',
      illustration: (
        <svg viewBox="0 0 200 160" className="w-full h-auto">
          <rect x="20" y="60" width="70" height="60" rx="4" fill="#2D5016" opacity="0.8" />
          <text x="55" y="85" fontSize="10" fill="#F5E6D3" textAnchor="middle" fontWeight="bold">Restorasi</text>
          <text x="55" y="100" fontSize="10" fill="#F5E6D3" textAnchor="middle">Gambut</text>
          <rect x="110" y="60" width="70" height="60" rx="4" fill="#6B4423" opacity="0.8" />
          <text x="145" y="85" fontSize="10" fill="#F5E6D3" textAnchor="middle" fontWeight="bold">Kredit</text>
          <text x="145" y="100" fontSize="10" fill="#F5E6D3" textAnchor="middle">Karbon</text>
          <path d="M 90 90 L 110 90" stroke="#4A7C2F" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#4A7C2F" />
            </marker>
          </defs>
          <circle cx="100" cy="35" r="15" fill="#F5E6D3" stroke="#8B4513" strokeWidth="2" />
          <text x="100" y="40" fontSize="16" textAnchor="middle">💰</text>
          <text x="100" y="145" fontSize="11" fill="#8B4513" textAnchor="middle" fontWeight="bold">🌍 Marketplace Gambut Indonesia</text>
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    if (currentPanel < panels.length - 1) {
      setDirection('right');
      setCurrentPanel(currentPanel + 1);
    }
  };

  const handlePrev = () => {
    if (currentPanel > 0) {
      setDirection('left');
      setCurrentPanel(currentPanel - 1);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12">
          Cerita Gambut Indonesia
        </h2>

        {/* Comic Panel Container */}
        <div className="relative bg-amber-50 rounded-2xl shadow-2xl p-6 md:p-10 border-4 border-stone-700 overflow-hidden min-h-[500px]">
          {/* Panel Content with Transition */}
          <div className="relative">
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentPanel
                    ? 'opacity-100 translate-x-0 relative'
                    : index < currentPanel
                    ? 'opacity-0 -translate-x-full absolute inset-0'
                    : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                {/* Panel Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-stone-800 mb-2 leading-tight">
                    {panel.title}
                  </h3>
                  <div className="h-1 w-24 bg-emerald-700 mx-auto rounded-full"></div>
                </div>

                {/* Illustration */}
                <div className="mb-6 bg-stone-200 rounded-xl p-6 shadow-inner">
                  {panel.illustration}
                </div>

                {/* Panel Content Text */}
                <div className="text-center">
                  <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
                    {panel.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t-2 border-stone-300">
            <button
              onClick={handlePrev}
              disabled={currentPanel === 0}
              className={`px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 ${
                currentPanel === 0
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-stone-700 text-amber-50 hover:bg-stone-800 hover:scale-105 active:scale-95'
              }`}
            >
              ← Prev
            </button>

            {/* Panel Indicator */}
            <div className="flex flex-col items-center">
              <span className="text-sm text-stone-600 font-semibold mb-2">
                Panel {currentPanel + 1} dari {panels.length}
              </span>
              <div className="flex gap-2">
                {panels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentPanel ? 'right' : 'left');
                      setCurrentPanel(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPanel
                        ? 'bg-emerald-700 scale-125'
                        : 'bg-stone-400 hover:bg-stone-500'
                    }`}
                    aria-label={`Go to panel ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={currentPanel === panels.length - 1}
              className={`px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 ${
                currentPanel === panels.length - 1
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-emerald-700 text-amber-50 hover:bg-emerald-800 hover:scale-105 active:scale-95'
              }`}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-stone-600 text-sm md:text-base">
            Mulai berkontribusi dalam pelestarian gambut melalui{' '}
            <span className="font-bold text-emerald-700">GambutMark Marketplace</span>
          </p>
        </div>
      </div>
    </section>
  );
}
