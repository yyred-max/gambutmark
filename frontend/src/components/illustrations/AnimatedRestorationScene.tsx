import React from 'react';

/**
 * Adegan kartun Sebelum/Sesudah restorasi gambut.
 * Satu SVG, dua keadaan: perpindahan dianimasikan (bukan ganti gambar),
 * jadi pohon tumbuh, air naik, retakan menutup, asap hilang.
 */
type Props = {
  after: boolean;
  className?: string;
};

const INK = '#1a3c2e';

const css = `
.ps { display:block; width:100%; height:auto; }
.ps * { vector-effect: non-scaling-stroke; }
.ps .t { transition: opacity .9s ease, transform .9s ease; }

/* ---------- langit & tanah: crossfade ---------- */
.ps .sky-after, .ps .ground-after, .ps .wet, .ps .clouds { opacity:0; }
.ps[data-after="true"] .sky-after,
.ps[data-after="true"] .ground-after,
.ps[data-after="true"] .wet,
.ps[data-after="true"] .clouds { opacity:1; }
.ps[data-after="true"] .dry { opacity:0; }

/* ---------- matahari ---------- */
.ps .sun-rays { transform-box:fill-box; transform-origin:center; animation: spin 24s linear infinite; }
.ps .sun-core { transition: fill .9s ease; fill:#e8742a; }
.ps[data-after="true"] .sun-core { fill:#ffd45c; }
.ps .sun-haze { transition: opacity .9s; opacity:.55; }
.ps[data-after="true"] .sun-haze { opacity:0; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ---------- asap ---------- */
.ps .smoke { transition: opacity .7s ease; }
.ps[data-after="true"] .smoke { opacity:0; }
.ps .puff { transform-box:fill-box; transform-origin:center; animation: rise 5s ease-in infinite; opacity:0; }
.ps .puff:nth-child(2){ animation-delay:1.6s; }
.ps .puff:nth-child(3){ animation-delay:3.2s; }
@keyframes rise {
  0%   { transform: translate(0,30px) scale(.5); opacity:0; }
  25%  { opacity:.75; }
  100% { transform: translate(12px,-90px) scale(1.5); opacity:0; }
}

/* ---------- retakan ---------- */
.ps .crack { stroke-dasharray:1; stroke-dashoffset:0; transition: stroke-dashoffset 1s ease .1s; }
.ps[data-after="true"] .crack { stroke-dashoffset:1; }

/* ---------- pohon mati ---------- */
.ps .dead { transform-box:fill-box; transform-origin:50% 100%; transition: transform .6s ease-in, opacity .6s; }
.ps[data-after="true"] .dead { transform: rotate(18deg) scale(.2); opacity:0; }
.ps .dead-sway { transform-box:fill-box; transform-origin:50% 100%; animation: creak 3.5s ease-in-out infinite; }
@keyframes creak { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.5deg)} }

/* ---------- pohon hidup ---------- */
.ps .grow {
  transform-box:fill-box; transform-origin:50% 100%;
  transform: scale(0);
  transition: transform .5s ease-in;
}
.ps[data-after="true"] .grow {
  transform: scale(1);
  transition: transform 1.1s cubic-bezier(.34,1.56,.64,1) var(--d, .6s);
}
.ps .sway { transform-box:fill-box; transform-origin:50% 100%; animation: sway 4s ease-in-out infinite; animation-delay: var(--d, 0s); }
@keyframes sway { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }
.ps .leaf-pop { transform-box:fill-box; transform-origin:center; animation: breathe 3s ease-in-out infinite; }
@keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }

/* ---------- air ---------- */
.ps .water {
  transform-box:fill-box; transform-origin:50% 100%;
  transform: scaleY(0);
  transition: transform 1.2s cubic-bezier(.3,.9,.4,1) .15s;
}
.ps[data-after="true"] .water { transform: scaleY(1); }
.ps .wave { animation: drift 6s linear infinite; }
.ps .wave2 { animation: drift 9s linear infinite reverse; opacity:.6; }
@keyframes drift { from{transform:translateX(0)} to{transform:translateX(-80px)} }
.ps .bubble { transform-box:fill-box; transform-origin:center; animation: bub 3.4s ease-in infinite; }
.ps .bubble:nth-of-type(2){ animation-delay:1.1s; }
.ps .bubble:nth-of-type(3){ animation-delay:2.2s; }
@keyframes bub { 0%{transform:translateY(8px);opacity:0} 30%{opacity:.9} 100%{transform:translateY(-18px);opacity:0} }

/* ---------- sekat kanal ---------- */
.ps .dam {
  transform-box:fill-box; transform-origin:50% 100%;
  transform: translateY(40px); opacity:0;
  transition: transform .7s cubic-bezier(.3,1.4,.5,1) .2s, opacity .4s .2s;
}
.ps[data-after="true"] .dam { transform: translateY(0); opacity:1; }

/* ---------- awan & burung ---------- */
.ps .cloud { animation: float 14s ease-in-out infinite alternate; }
.ps .cloud.b { animation-duration: 18s; animation-delay:-6s; }
@keyframes float { from{transform:translateX(-14px)} to{transform:translateX(18px)} }
.ps .bird { opacity:0; transition: opacity .6s ease 1.3s; }
.ps[data-after="true"] .bird { opacity:1; }
.ps .bird-fly { animation: fly 9s linear infinite; }
.ps .flap { transform-box:fill-box; transform-origin:center; animation: flap .5s ease-in-out infinite alternate; }
@keyframes fly { from{transform:translateX(-40px)} to{transform:translateX(440px)} }
@keyframes flap { from{transform:scaleY(1)} to{transform:scaleY(.4)} }

@media (prefers-reduced-motion: reduce) {
  .ps *, .ps *::before { animation: none !important; transition-duration: .01s !important; transition-delay: 0s !important; }
}
`;

function Tree({ x, scale = 1, delay, sway }: { x: number; scale?: number; delay: string; sway: string }) {
  return (
    <g transform={`translate(${x} 150) scale(${scale})`}>
      <g className="grow" style={{ ['--d' as any]: delay }}>
        <g className="sway" style={{ ['--d' as any]: sway }}>
          {/* batang */}
          <path d="M-6 0 L-4 -48 L4 -48 L6 0 Z" fill="#5a3d2a" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M-1 -10 L-1 -40" stroke="#7a5a42" strokeWidth="2" strokeLinecap="round" />
          {/* tajuk */}
          <g className="leaf-pop">
            <circle cx="0" cy="-70" r="28" fill="#2d6a4a" stroke={INK} strokeWidth="2.5" />
            <circle cx="-9" cy="-80" r="12" fill="#6fb07a" stroke={INK} strokeWidth="2" />
            <circle cx="12" cy="-62" r="3" fill="#8fd09a" />
            <circle cx="-14" cy="-58" r="2.5" fill="#8fd09a" />
          </g>
        </g>
      </g>
    </g>
  );
}

export default function AnimatedRestorationScene({ after, className }: Props) {
  return (
    <svg
      className={`ps ${className ?? ''}`}
      data-after={after}
      viewBox="0 0 400 240"
      role="img"
      aria-label={after ? 'Lahan gambut setelah restorasi: pohon tumbuh dan tanah tergenang air' : 'Lahan gambut sebelum restorasi: tanah kering dan retak'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{css}</style>
      <defs>
        <linearGradient id="skyDry" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c070" />
          <stop offset="1" stopColor="#f7dca0" />
        </linearGradient>
        <linearGradient id="skyWet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfe3e8" />
          <stop offset="1" stopColor="#fbeccb" />
        </linearGradient>
        <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8cc4d4" />
          <stop offset="1" stopColor="#5f9bb0" />
        </linearGradient>
        <clipPath id="frame"><rect width="400" height="240" /></clipPath>
      </defs>

      <g clipPath="url(#frame)">
        {/* ===== LANGIT ===== */}
        <rect width="400" height="160" fill="url(#skyDry)" />
        <rect className="t sky-after" width="400" height="160" fill="url(#skyWet)" />

        {/* matahari */}
        <g transform="translate(335 52)">
          <circle className="sun-haze" r="40" fill="#e8742a" />
          <g className="sun-rays">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i} x1="0" y1="-26" x2="0" y2="-34" stroke={INK} strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 36})`} />
            ))}
          </g>
          <circle className="sun-core" r="19" stroke={INK} strokeWidth="2.5" />
          {/* wajah ceria saat sesudah */}
          <g className="t" style={{ opacity: after ? 1 : 0 }}>
            <circle cx="-6" cy="-3" r="1.8" fill={INK} />
            <circle cx="6" cy="-3" r="1.8" fill={INK} />
            <path d="M-6 5 Q0 11 6 5" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* awan */}
        <g className="t clouds">
          <g transform="translate(70 40)"><g className="cloud">
            <path d="M0 18 Q-2 6 10 6 Q14 -6 28 -2 Q40 -8 48 4 Q60 4 58 18 Z" fill="#fff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          </g></g>
          <g transform="translate(190 22) scale(.75)"><g className="cloud b">
            <path d="M0 18 Q-2 6 10 6 Q14 -6 28 -2 Q40 -8 48 4 Q60 4 58 18 Z" fill="#fff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          </g></g>
        </g>

        {/* burung */}
        <g className="bird">
          <g transform="translate(0 34)"><g className="bird-fly">
            <g className="flap">
              <path d="M0 0 Q6 -8 12 0 Q18 -8 24 0" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g></g>
        </g>

        {/* asap kebakaran lahan */}
        <g className="smoke">
          <g>
            <ellipse className="puff" cx="205" cy="140" rx="16" ry="11" fill="#a9a08a" stroke={INK} strokeWidth="2" />
            <ellipse className="puff" cx="195" cy="140" rx="14" ry="10" fill="#b8b09b" stroke={INK} strokeWidth="2" />
            <ellipse className="puff" cx="212" cy="140" rx="12" ry="9" fill="#c4bca8" stroke={INK} strokeWidth="2" />
          </g>
        </g>

        {/* ===== TANAH ===== */}
        <rect y="150" width="400" height="90" fill="#7b6355" />
        <rect className="t ground-after" y="150" width="400" height="90" fill="#5c4a3b" />
        <line x1="0" y1="150" x2="400" y2="150" stroke={INK} strokeWidth="2.5" />

        {/* tekstur tanah */}
        <g fill="#000" opacity=".12">
          <ellipse cx="60" cy="215" rx="10" ry="3" />
          <ellipse cx="170" cy="225" rx="14" ry="3.5" />
          <ellipse cx="290" cy="210" rx="9" ry="3" />
          <ellipse cx="350" cy="228" rx="12" ry="3" />
        </g>

        {/* retakan tanah kering */}
        <g stroke="#3a2a1f" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path className="crack" pathLength={1} d="M40 154 L48 180 L38 205 L46 232" />
          <path className="crack" pathLength={1} d="M300 154 L306 176 L298 198 L304 228" />
          <path className="crack" pathLength={1} d="M165 190 L180 198 L172 214" />
          <path className="crack" pathLength={1} d="M345 188 L358 196 L352 212" />
        </g>

        {/* pohon mati */}
        <g transform="translate(95 152)"><g className="dead">
          <g className="dead-sway">
            <path d="M-5 0 L-3 -58 L3 -58 L5 0 Z" fill="#4a3426" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M0 -42 L-18 -62" stroke="#4a3426" strokeWidth="5" strokeLinecap="round" />
            <path d="M1 -50 L20 -72" stroke="#4a3426" strokeWidth="5" strokeLinecap="round" />
            <path d="M-18 -62 L-24 -62 M20 -72 L25 -80" stroke="#4a3426" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g></g>
        <g transform="translate(290 152)"><g className="dead">
          <path d="M-7 0 L-5 -14 L5 -14 L7 0 Z" fill="#4a3426" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        </g></g>

        {/* ===== AIR (muncul saat sesudah) ===== */}
        <g className="water">
          <rect x="0" y="140" width="400" height="30" fill="url(#waterG)" />
        </g>
        <g className="t wet">
          <g clipPath="url(#frame)">
            <g className="wave">
              <path d="M-80 140 Q-60 134 -40 140 T0 140 T40 140 T80 140 T120 140 T160 140 T200 140 T240 140 T280 140 T320 140 T360 140 T400 140 T440 140 V146 H-80 Z" fill="#a9d6e2" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
            </g>
            <g className="wave2">
              <path d="M-80 150 Q-60 145 -40 150 T0 150 T40 150 T80 150 T120 150 T160 150 T200 150 T240 150 T280 150 T320 150 T360 150 T400 150 T440 150" fill="none" stroke="#e8f6f8" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
          {/* gelembung & sekat kanal di tanah gambut */}
          <g>
            <circle className="bubble" cx="95" cy="195" r="6" fill="#7fb2c4" stroke="#4a7d90" strokeWidth="2" />
            <circle className="bubble" cx="200" cy="210" r="6" fill="#7fb2c4" stroke="#4a7d90" strokeWidth="2" />
            <circle className="bubble" cx="320" cy="190" r="6" fill="#7fb2c4" stroke="#4a7d90" strokeWidth="2" />
          </g>
        </g>

        {/* sekat kanal (papan kayu) */}
        <g transform="translate(236 140)"><g className="dam">
          <rect x="-4" y="-6" width="8" height="30" rx="2" fill="#b98a55" stroke={INK} strokeWidth="2.5" />
          <rect x="22" y="-6" width="8" height="30" rx="2" fill="#b98a55" stroke={INK} strokeWidth="2.5" />
          <rect x="-4" y="2" width="34" height="6" rx="2" fill="#d4a56a" stroke={INK} strokeWidth="2" />
          <rect x="-4" y="12" width="34" height="6" rx="2" fill="#d4a56a" stroke={INK} strokeWidth="2" />
        </g></g>

        {/* ===== POHON HIDUP (di depan air) ===== */}
        <Tree x={70} delay=".5s" sway="0s" />
        <Tree x={170} scale={0.9} delay=".8s" sway="-1.3s" />
        <Tree x={335} delay="1.1s" sway="-2.4s" />
      </g>

      {/* bingkai kartun */}
      <rect x="1.25" y="1.25" width="397.5" height="237.5" rx="0" fill="none" stroke={INK} strokeWidth="2.5" />
    </svg>
  );
}
