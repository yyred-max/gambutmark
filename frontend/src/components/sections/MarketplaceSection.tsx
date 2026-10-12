import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, MapPin, BadgeCheck, Lock } from 'lucide-react';
import { carbonProjects, marketplaceData, monthlyVolume } from '@/data/mockData';

export default function MarketplaceSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [creditsInput, setCreditsInput] = useState('1000');

  const maxVolume = Math.max(...monthlyVolume.map((m) => m.volume));

  const selected = carbonProjects.find((p) => p.id === selectedProject);
  const totalCost = selected && creditsInput ? selected.pricePerTon * parseInt(creditsInput) : 0;

  const statusConfig = {
    available: { label: 'Tersedia', color: '#4a8c5a', bg: '#4a8c5a20' },
    limited: { label: 'Terbatas', color: '#f5a623', bg: '#f5a62320' },
    'sold-out': { label: 'Habis', color: '#d94c2a', bg: '#d94c2a20' },
  };

  return (
    <section id="marketplace" className="relative py-20 px-4" style={{ background: 'linear-gradient(180deg, #e8d4a8 0%, #f5ead7 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#d94c2a' }}>
            Pasar Demonstrasi
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#1a3c2e' }}>
            Pasar Kredit Karbon
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#234d3a' }}>
            Dukung proyek restorasi lahan gambut terverifikasi dengan membeli kredit karbon.
            Semua data yang ditampilkan untuk tujuan demonstrasi.
          </p>
        </div>

        {/* Marketplace summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Kredit Tersedia', value: marketplaceData.totalCredits.toLocaleString(), unit: 'tCO₂e', icon: <TrendingUp size={18} />, color: '#4a8c5a' },
            { label: 'Harga Rata-rata', value: `${marketplaceData.avgPrice}`, unit: '/ton', icon: <ShoppingCart size={18} />, color: '#f5a623' },
            { label: 'Proyek Aktif', value: marketplaceData.activeProjects.toString(), unit: 'proyek', icon: <MapPin size={18} />, color: '#4a8aa8' },
            { label: 'Potensi Offset CO₂', value: (marketplaceData.co2Offset / 1000000).toFixed(1) + 'M', unit: 'ton/th', icon: <BadgeCheck size={18} />, color: '#d94c2a' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 border-2.5 bg-white scale-in"
              style={{ borderColor: `${stat.color}50`, boxShadow: '3px 4px 0 rgba(26, 60, 46, 0.1)', animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: stat.color }}>
                {stat.icon}
                <span className="font-body text-xs uppercase tracking-wide" style={{ color: '#7a6353' }}>
                  {stat.label}
                </span>
              </div>
              <p className="font-display font-bold text-2xl" style={{ color: '#1a3c2e' }}>
                {stat.value}
              </p>
              <p className="font-body text-xs" style={{ color: '#7a6353' }}>
                {stat.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Volume chart */}
        <div className="comic-panel bg-white p-6 mb-8" style={{ borderColor: '#1a3c2e' }}>
          <h3 className="font-display font-bold text-lg mb-4" style={{ color: '#1a3c2e' }}>
            Volume Perdagangan Bulanan
          </h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {monthlyVolume.map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                {/* Bar */}
                <div className="w-full flex flex-col items-center justify-end h-full">
                  <span className="font-body text-xs mb-1" style={{ color: '#5c4a3a' }}>
                    {m.volume > 30000 ? `${(m.volume / 1000).toFixed(0)}K` : ''}
                  </span>
                  <div
                    className="w-full rounded-t-lg bar-grow"
                    style={{
                      height: `${(m.volume / maxVolume) * 100}%`,
                      background: i > 5 ? '#4a8c5a' : '#6bb077',
                      border: '1.5px solid #1a3c2e',
                      ['--bar-width' as string]: `${(m.volume / maxVolume) * 100}%`,
                    }}
                  />
                </div>
                {/* Month label */}
                <span className="font-body text-xs" style={{ color: '#7a6353' }}>
                  {m.month}
                </span>
              </div>
            ))}
          </div>
          {/* Price line */}
          <div className="mt-4 pt-4 border-t-2 border-dashed border-[#1a3c2e]/20">
            <p className="font-body text-xs mb-2" style={{ color: '#7a6353' }}>
              Harga Rata-rata per Ton ($)
            </p>
            <div className="flex items-end justify-between gap-2 h-16">
              {monthlyVolume.map((m, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-2 rounded-full"
                    style={{
                      height: `${(m.price / 15) * 100}%`,
                      background: '#d94c2a',
                      border: '1px solid #1a3c2e',
                    }}
                  />
                  <span className="font-body text-xs mt-1" style={{ color: '#d94c2a' }}>
                    ${m.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {carbonProjects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <div
                key={project.id}
                className="cartoon-card reveal-on-scroll rounded-2xl overflow-hidden bg-white border-2.5"
                style={{ borderColor: '#1a3c2e', boxShadow: '4px 6px 0 rgba(26, 60, 46, 0.12)', transitionDelay: `${i * 0.08}s` }}
              >
                {/* Stylized map header */}
                <div
                  className="relative h-32 border-b-2 border-[#1a3c2e] overflow-hidden"
                  style={{ background: project.color }}
                >
                  {/* Stylized map shapes */}
                  <svg viewBox="0 0 300 120" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                    {/* Water */}
                    <rect width="300" height="120" fill={project.color} opacity="0.8"/>
                    {/* Land masses — Indonesian islands abstract shapes */}
                    <path d="M40 60 Q60 40 90 50 Q110 45 130 60 Q140 75 120 85 Q90 90 60 80 Q35 75 40 60 Z"
                      fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2" opacity="0.7"/>
                    <path d="M160 50 Q190 35 220 45 Q250 40 270 60 Q280 75 260 80 Q230 85 200 75 Q170 70 160 50 Z"
                      fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2" opacity="0.7"/>
                    {/* Project location marker */}
                    <circle cx={project.id === 'p1' ? 85 : project.id === 'p2' ? 190 : project.id === 'p3' ? 200 : 100}
                      cy={project.id === 'p1' ? 65 : project.id === 'p2' ? 55 : project.id === 'p3' ? 60 : 55}
                      r="8" fill="#d94c2a" stroke="#fff" strokeWidth="2"/>
                    <circle cx={project.id === 'p1' ? 85 : project.id === 'p2' ? 190 : project.id === 'p3' ? 200 : 100}
                      cy={project.id === 'p1' ? 65 : project.id === 'p2' ? 55 : project.id === 'p3' ? 60 : 55}
                      r="4" fill="#ffd54a"/>
                    {/* Grid lines for map feel */}
                    <line x1="0" y1="30" x2="300" y2="30" stroke="#fff" strokeWidth="0.5" opacity="0.2"/>
                    <line x1="0" y1="90" x2="300" y2="90" stroke="#fff" strokeWidth="0.5" opacity="0.2"/>
                    <line x1="100" y1="0" x2="100" y2="120" stroke="#fff" strokeWidth="0.5" opacity="0.2"/>
                    <line x1="200" y1="0" x2="200" y2="120" stroke="#fff" strokeWidth="0.5" opacity="0.2"/>
                  </svg>
                  {/* Status badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full font-display font-semibold text-xs text-white border-2 border-[#1a3c2e]"
                    style={{ background: status.color }}
                  >
                    {status.label}
                  </div>
                  {/* Project name */}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="font-display font-bold text-lg text-white text-shadow-forest">
                      {project.name}
                    </h3>
                    <p className="font-body text-xs text-white text-shadow-forest flex items-center gap-1">
                      <MapPin size={11} /> {project.location}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#5c4a3a' }}>
                    {project.description}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center rounded-xl p-2 border border-[#1a3c2e]/15" style={{ background: '#f5ead7' }}>
                      <p className="font-display font-bold text-sm" style={{ color: '#1a3c2e' }}>{project.area}</p>
                      <p className="font-body text-xs" style={{ color: '#7a6353' }}>Luas</p>
                    </div>
                    <div className="text-center rounded-xl p-2 border border-[#1a3c2e]/15" style={{ background: '#f5ead7' }}>
                      <p className="font-display font-bold text-sm" style={{ color: '#1a3c2e' }}>
                        ${(project.pricePerTon).toFixed(2)}
                      </p>
                      <p className="font-body text-xs" style={{ color: '#7a6353' }}>/ton</p>
                    </div>
                    <div className="text-center rounded-xl p-2 border border-[#1a3c2e]/15" style={{ background: '#f5ead7' }}>
                      <p className="font-display font-bold text-sm" style={{ color: '#1a3c2e' }}>
                        {(project.co2Reduction / 1000000).toFixed(1)}M
                      </p>
                      <p className="font-body text-xs" style={{ color: '#7a6353' }}>tCO₂e/yr</p>
                    </div>
                  </div>

                  {/* Verification + Credits */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 font-body text-xs" style={{ color: '#4a8c5a' }}>
                      <BadgeCheck size={16} />
                      {project.verified}
                    </div>
                    <div className="font-body text-xs" style={{ color: '#7a6353' }}>
                      <span className="font-display font-bold" style={{ color: '#1a3c2e' }}>
                        {project.creditsAvailable.toLocaleString()}
                      </span> kredit tersedia
                    </div>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => project.status !== 'sold-out' && setSelectedProject(project.id)}
                    disabled={project.status === 'sold-out'}
                    className="btn-cartoon w-full py-2.5 font-display font-semibold flex items-center justify-center gap-2 text-white"
                    style={{
                      background: project.status === 'sold-out' ? '#7a6353' : '#d94c2a',
                      border: '2.5px solid #1a3c2e',
                      opacity: project.status === 'sold-out' ? 0.6 : 1,
                      cursor: project.status === 'sold-out' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {project.status === 'sold-out' ? (
                      <><Lock size={16} /> Habis</>
                    ) : (
                      <><ShoppingCart size={16} /> Beli Kredit</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Purchase modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(26, 60, 46, 0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="comic-panel bg-white p-6 max-w-md w-full scale-in"
              style={{ borderColor: '#1a3c2e' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display font-bold text-xl mb-1" style={{ color: '#1a3c2e' }}>
                {selected.name}
              </h3>
              <p className="font-body text-sm mb-4" style={{ color: '#7a6353' }}>
                {selected.location} — ${selected.pricePerTon}/ton
              </p>

              <label className="block font-body text-sm font-semibold mb-2" style={{ color: '#1a3c2e' }}>
                Jumlah Kredit (ton CO₂e)
              </label>
              <input
                type="number"
                value={creditsInput}
                onChange={(e) => setCreditsInput(e.target.value)}
                min="1"
                max={selected.creditsAvailable}
                className="w-full px-4 py-3 rounded-xl border-2.5 mb-4 font-body text-base focus:outline-none"
                style={{ borderColor: '#1a3c2e', background: '#f5ead7' }}
              />

              <div className="rounded-xl p-4 mb-4" style={{ background: '#f5ead7', border: '2px solid #4a8c5a40' }}>
                <div className="flex justify-between font-body text-sm mb-1">
                  <span style={{ color: '#5c4a3a' }}>Kredit</span>
                  <span className="font-semibold" style={{ color: '#1a3c2e' }}>{parseInt(creditsInput) || 0} tCO₂e</span>
                </div>
                <div className="flex justify-between font-body text-sm mb-1">
                  <span style={{ color: '#5c4a3a' }}>Harga per ton</span>
                  <span className="font-semibold" style={{ color: '#1a3c2e' }}>${selected.pricePerTon}</span>
                </div>
                <div className="border-t-2 border-dashed border-[#1a3c2e]/20 my-2"></div>
                <div className="flex justify-between font-display font-bold">
                  <span style={{ color: '#1a3c2e' }}>Total Biaya</span>
                  <span style={{ color: '#d94c2a' }}>${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-cartoon flex-1 py-2.5 font-display font-semibold"
                  style={{ background: '#f5ead7', color: '#1a3c2e', border: '2.5px solid #1a3c2e' }}
                >
                  Batal
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-cartoon flex-1 py-2.5 font-display font-semibold text-white"
                  style={{ background: '#4a8c5a', border: '2.5px solid #1a3c2e' }}
                >
                  Konfirmasi (Demo)
                </button>
              </div>
              <p className="text-center mt-3 font-body text-xs" style={{ color: '#7a6353' }}>
                Hanya demonstrasi — tidak ada transaksi nyata yang terjadi.
              </p>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-center font-body text-xs" style={{ color: '#7a6353' }}>
          Semua data pasar adalah data demonstrasi tiruan. Tidak ada kredit karbon nyata yang diperdagangkan di sini.
        </p>
      </div>
    </section>
  );
}
