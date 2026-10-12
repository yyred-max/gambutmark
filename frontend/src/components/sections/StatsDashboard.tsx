import React, { useEffect, useRef, useState } from 'react';
import { TopicIcon } from '@/components/illustrations/Scenes';
import { statItems } from '@/data/mockData';
import { useStats } from '@/hooks/useStats';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(interval);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsDashboard() {
  const { totalLands, totalCredits, totalRetired, activeCredits, isLoading } = useStats();
  return (
    <section id="stats" className="relative py-20 px-4" style={{ background: '#1a3c2e' }}>
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={`${(i * 37) % 100}%`}
            cy={`${(i * 53) % 100}%`}
            r="3"
            fill="#6bb077"
            className="particle-dot"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#f5a623' }}>
            Dalam Angka
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#f5ead7' }}>
            Statistik Lahan Gambut
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#9ccc9a' }}>
            Skala lahan gambut Indonesia dan mengapa melindunginya penting secara global.
          </p>
        </div>

        {/* === BLOCKCHAIN PLATFORM STATS (NEW) === */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#6bb077' }}>
              Live dari Blockchain
            </span>
            <h3 className="font-display font-bold text-2xl mt-2" style={{ color: '#f5ead7' }}>
              Statistik Platform GambutMark
            </h3>
            <p className="font-body text-sm mt-1" style={{ color: '#9ccc9a' }}>
              Data real-time dari Polygon Amoy Testnet
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Lands */}
            <div
              className="rounded-2xl p-5 text-center border-2.5"
              style={{ borderColor: '#4a8c5a', background: 'rgba(74, 140, 90, 0.15)' }}
            >
              <p className="font-display font-bold text-4xl mb-1" style={{ color: '#f5ead7' }}>
                {isLoading ? '...' : totalLands}
              </p>
              <p className="font-body text-xs uppercase tracking-wider" style={{ color: '#9ccc9a' }}>
                Lahan Terdaftar
              </p>
            </div>

            {/* Total Credits */}
            <div
              className="rounded-2xl p-5 text-center border-2.5"
              style={{ borderColor: '#f5a623', background: 'rgba(245, 166, 35, 0.15)' }}
            >
              <p className="font-display font-bold text-4xl mb-1" style={{ color: '#f5ead7' }}>
                {isLoading ? '...' : totalCredits}
              </p>
              <p className="font-body text-xs uppercase tracking-wider" style={{ color: '#9ccc9a' }}>
                Total Kredit Diterbitkan
              </p>
            </div>

            {/* Active Credits */}
            <div
              className="rounded-2xl p-5 text-center border-2.5"
              style={{ borderColor: '#6bb077', background: 'rgba(107, 176, 119, 0.15)' }}
            >
              <p className="font-display font-bold text-4xl mb-1" style={{ color: '#f5ead7' }}>
                {isLoading ? '...' : activeCredits}
              </p>
              <p className="font-body text-xs uppercase tracking-wider" style={{ color: '#9ccc9a' }}>
                Kredit Aktif
              </p>
            </div>

            {/* Retired Credits */}
            <div
              className="rounded-2xl p-5 text-center border-2.5"
              style={{ borderColor: '#d94c2a', background: 'rgba(217, 76, 42, 0.15)' }}
            >
              <p className="font-display font-bold text-4xl mb-1" style={{ color: '#f5ead7' }}>
                {isLoading ? '...' : totalRetired}
              </p>
              <p className="font-body text-xs uppercase tracking-wider" style={{ color: '#9ccc9a' }}>
                Kredit Di-Retire
              </p>
            </div>
          </div>
        </div>


        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statItems.map((stat, i) => (
            <div
              key={i}
              className="reveal-on-scroll rounded-2xl p-6 text-center border-2.5"
              style={{
                borderColor: stat.color,
                background: 'rgba(245, 234, 215, 0.08)',
                backdropFilter: 'blur(8px)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3"
                style={{ background: `${stat.color}30` }}
              >
                <TopicIcon iconKey={stat.iconKey} size={36} />
              </div>

              {/* Value */}
              <p className="font-display font-bold text-3xl md:text-4xl mb-1" style={{ color: '#f5ead7' }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>

              {/* Unit */}
              <p className="font-body text-sm mb-2" style={{ color: stat.color }}>
                {stat.unit}
              </p>

              {/* Label */}
              <p className="font-body text-sm leading-snug" style={{ color: '#9ccc9a' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional data bars */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Carbon storage comparison */}
          <div className="rounded-2xl p-6 border-2.5" style={{ borderColor: '#4a8c5a', background: 'rgba(245, 234, 215, 0.08)' }}>
            <h3 className="font-display font-bold text-lg mb-4" style={{ color: '#f5ead7' }}>
              Perbandingan Kepadatan Karbon
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Gambut Tropis', value: 2800, max: 2800, color: '#4a8c5a', unit: 'tC/ha' },
                { label: 'Hutan Hujan Tropis', value: 240, max: 2800, color: '#6bb077', unit: 'tC/ha' },
                { label: 'Hutan Boreal', value: 180, max: 2800, color: '#f5a623', unit: 'tC/ha' },
                { label: 'Padang Rumput Iklim Sedang', value: 100, max: 2800, color: '#d94c2a', unit: 'tC/ha' },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between font-body text-sm mb-1">
                    <span style={{ color: '#f5ead7' }}>{bar.label}</span>
                    <span className="font-semibold" style={{ color: bar.color }}>{bar.value} {bar.unit}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(245, 234, 215, 0.1)' }}>
                    <div
                      className="h-full rounded-full bar-grow"
                      style={{
                        width: `${(bar.value / bar.max) * 100}%`,
                        background: bar.color,
                        border: `1px solid #1a3c2e`,
                        ['--bar-width' as string]: `${(bar.value / bar.max) * 100}%`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fire impact chart */}
          <div className="rounded-2xl p-6 border-2.5" style={{ borderColor: '#d94c2a', background: 'rgba(245, 234, 215, 0.08)' }}>
            <h3 className="font-display font-bold text-lg mb-4" style={{ color: '#f5ead7' }}>
              Insiden Kebakaran Gambut Tahunan (2019-2025)
            </h3>
            <div className="flex items-end justify-between gap-3 h-40">
              {[
                { year: '2019', count: 85, label: 'Parah' },
                { year: '2020', count: 42, label: 'Sedang' },
                { year: '2021', count: 68, label: 'Tinggi' },
                { year: '2022', count: 35, label: 'Lebih Rendah' },
                { year: '2023', count: 72, label: 'Tinggi' },
                { year: '2024', count: 48, label: 'Sedang' },
                { year: '2025', count: 28, label: 'Rendah' },
              ].map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="font-body text-xs font-semibold" style={{ color: '#f5a623' }}>{d.count}</span>
                  <div
                    className="w-full rounded-t-lg bar-grow"
                    style={{
                      height: `${(d.count / 85) * 100}%`,
                      background: d.count > 60 ? '#d94c2a' : d.count > 40 ? '#f5a623' : '#4a8c5a',
                      border: '1.5px solid #1a3c2e',
                      ['--bar-width' as string]: '100%',
                      minHeight: '4px',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                  <span className="font-body text-xs" style={{ color: '#9ccc9a' }}>{d.year}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs mt-3 text-center" style={{ color: '#9ccc9a' }}>
              Insiden kebakaran berkorelasi dengan intensitas musim kemarau dan drainase gambut
            </p>
          </div>
        </div>

        {/* Data source note */}
        <p className="text-center mt-6 font-body text-xs" style={{ color: '#9ccc9a' }}>
          Statistik adalah angka ilustratif berdasarkan penelitian publik. Angka sebenarnya dapat bervariasi berdasarkan sumber dan tahun.
        </p>
      </div>
    </section>
  );
}
