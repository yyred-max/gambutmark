import React, { useState } from 'react';
import { Droplets, Sun, Flame, Info } from 'lucide-react';
import { PeatCrossSection } from '@/components/illustrations/Scenes';
import { PeatCharacter } from '@/components/illustrations/Characters';

type PeatState = 'healthy' | 'dry' | 'burning';

const stateData: Record<PeatState, {
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  facts: { label: string; value: string }[];
}> = {
  healthy: {
    label: 'Gambut Basah Sehat',
    icon: <Droplets size={20} />,
    color: '#4a8aa8',
    description:
      'Gambut yang tergenang air bekerja seperti spons raksasa. Sisa tanaman tidak terurai sepenuhnya, sehingga karbon tetap terkunci di bawah tanah. Muka air tinggi, vegetasi subur, dan ekosistem menyimpan CO₂ dalam jumlah besar.',
    facts: [
      { label: 'Muka Air', value: 'Di dekat permukaan' },
      { label: 'Karbon Tersimpan', value: '~55 Gt nasional' },
      { label: 'Risiko Kebakaran', value: 'Sangat Rendah' },
      { label: 'Keanekaragaman', value: 'Kaya & beragam' },
    ],
  },
  dry: {
    label: 'Gambut Kering Terdrainase',
    icon: <Sun size={20} />,
    color: '#f5a623',
    description:
      'Saat kanal drainase menurunkan muka air, gambut mengering dan mulai terurai. Karbon tersimpan dilepaskan sebagai CO₂. Tanah retak, turun, dan menjadi sangat rentan terhadap kebakaran.',
    facts: [
      { label: 'Muka Air', value: 'Jauh di bawah permukaan' },
      { label: 'CO₂ Dilepaskan', value: 'Ton per hektar/th' },
      { label: 'Risiko Kebakaran', value: 'Sangat Tinggi' },
      { label: 'Penurunan Tanah', value: 'Hingga 5 cm/th' },
    ],
  },
  burning: {
    label: 'Kebakaran Gambut Membara',
    icon: <Flame size={20} />,
    color: '#d94c2a',
    description:
      'Gambut kering bisa terbakar di bawah tanah selama berbulan-bulan. Kebakaran ini sangat sulit dipadamkan, melepaskan asap dan CO₂ dalam jumlah besar, dan dapat menghancurkan penyimpanan karbon berabad-abad dalam hitungan hari.',
    facts: [
      { label: 'Durasi Terbakar', value: 'Minggu hingga bulan' },
      { label: 'Emisi CO₂', value: 'Sangat besar' },
      { label: 'Dampak Asap', value: 'Kabut asap regional' },
      { label: 'Pemadaman', value: 'Sangat sulit' },
    ],
  },
};

export default function InteractiveExplainer() {
  const [state, setState] = useState<PeatState>('healthy');
  const data = stateData[state];

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f5ead7 0%, #f0e0c4 100%)' }}>
      {/* Decorative leaves */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg viewBox="0 0 60 60" className="w-20 h-20 anim-sway">
          <path d="M30 5 Q50 20 45 40 Q30 55 15 40 Q10 20 30 5 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
          <path d="M30 8 L30 50" fill="none" stroke="#1a3c2e" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#d94c2a' }}>
            Penjelas Interaktif
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#1a3c2e' }}>
            Lihat ke Dalam Lahan Gambut
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#234d3a' }}>
            Beralih antara tiga keadaan untuk memahami apa yang terjadi di bawah permukaan rawa gambut Indonesia.
          </p>
        </div>

        {/* State selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.keys(stateData) as PeatState[]).map((key) => (
            <button
              key={key}
              onClick={() => setState(key)}
              className="btn-cartoon px-5 py-2.5 font-display font-semibold flex items-center gap-2 transition-all"
              style={{
                background: state === key ? data.color : '#f5ead7',
                color: state === key ? '#fff' : '#1a3c2e',
                border: `2.5px solid ${state === key ? data.color : '#1a3c2e'}`,
                opacity: state === key ? 1 : 0.7,
              }}
            >
              {stateData[key].icon}
              {stateData[key].label}
            </button>
          ))}
        </div>

        {/* Cross-section + explanation */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Illustration */}
          <div
            className="comic-panel overflow-hidden bg-white"
            style={{ borderColor: data.color }}
          >
            <PeatCrossSection state={state} className="w-full h-auto" />
            {/* Label */}
            <div className="px-4 py-2 border-t-2" style={{ borderColor: data.color, background: `${data.color}15` }}>
              <p className="font-display font-semibold text-sm text-center" style={{ color: '#1a3c2e' }}>
                {data.label} — Tampilan Penampang
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            {/* Peat character speech */}
            <div className="flex items-start gap-3">
              <PeatCharacter
                mood={state === 'healthy' ? 'happy' : state === 'dry' ? 'dry' : 'burning'}
                className="w-16 h-16 flex-shrink-0"
                animate={false}
              />
              <div className="speech-bubble flex-1">
                <p className="font-body text-sm" style={{ color: '#1a3c2e' }}>
                  {state === 'healthy' && "Aku penuh air dan karbon! Semua berfungsi sempurna."}
                  {state === 'dry' && "Oh tidak... aku sedang mengering. Karbonku lepas ke udara!"}
                  {state === 'burning' && "Tolong! Aku terbakar di bawah tanah dan tidak bisa berhenti!"}
                </p>
              </div>
            </div>

            {/* Description */}
            <div
              className="rounded-2xl p-5 border-2"
              style={{ borderColor: data.color, background: `${data.color}10` }}
            >
              <p className="font-body text-base leading-relaxed" style={{ color: '#234d3a' }}>
                {data.description}
              </p>
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {data.facts.map((fact, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 border-2 scale-in"
                  style={{
                    borderColor: `${data.color}40`,
                    background: '#fff',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <p className="font-body text-xs uppercase tracking-wide mb-1" style={{ color: '#7a6353' }}>
                    {fact.label}
                  </p>
                  <p className="font-display font-bold text-base" style={{ color: data.color }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Info note */}
            <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: '#f5ead7' }}>
              <Info size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#4a8aa8' }} />
              <p className="font-body text-xs" style={{ color: '#5c4a3a' }}>
                Ini adalah ilustrasi pendidikan yang disederhanakan. Lahan gambut sungguhan adalah ekosistem
                kompleks dengan lapisan yang bisa mencapai beberapa meter, terbentuk selama ribuan tahun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
