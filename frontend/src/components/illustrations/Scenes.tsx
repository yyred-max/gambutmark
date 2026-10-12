import React from 'react';

// === SCENE ILLUSTRATIONS ===

// Hero Forest — Indonesian Peat Swamp Forest panorama
export function HeroForest({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 600" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8e8c8"/>
          <stop offset="40%" stopColor="#f5d99c"/>
          <stop offset="70%" stopColor="#f0e0c4"/>
          <stop offset="100%" stopColor="#e8d4a8"/>
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6bb5d1"/>
          <stop offset="100%" stopColor="#4a8aa8"/>
        </linearGradient>
        <linearGradient id="peatGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c4a3a"/>
          <stop offset="100%" stopColor="#3d2e1f"/>
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1200" height="380" fill="url(#skyGrad)"/>

      {/* Sun */}
      <circle cx="200" cy="120" r="40" fill="#f5a623" opacity="0.8"/>
      <circle cx="200" cy="120" r="28" fill="#ffd54a" opacity="0.7"/>

      {/* Distant mountains */}
      <path d="M0 340 L150 200 L280 280 L420 180 L580 260 L720 210 L880 280 L1050 220 L1200 300 L1200 380 L0 380 Z"
        fill="#7a6353" opacity="0.4" stroke="#5c4632" strokeWidth="1.5"/>
      <path d="M0 350 L120 260 L250 310 L400 240 L560 300 L700 260 L900 310 L1100 270 L1200 320 L1200 380 L0 380 Z"
        fill="#5c4a3a" opacity="0.5"/>

      {/* Far trees layer */}
      {[80, 180, 320, 460, 560, 700, 840, 960, 1080, 1160].map((x, i) => (
        <g key={i} opacity="0.45">
          <path d={`M${x} 350 Q${x-18} 300 ${x} 280 Q${x+18} 300 ${x} 350`} fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
          <ellipse cx={x} cy="285" rx="20" ry="22" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
        </g>
      ))}

      {/* Mid trees layer */}
      {[60, 220, 380, 520, 680, 820, 980, 1120].map((x, i) => (
        <g key={i} opacity="0.7">
          <path d={`M${x-3} 380 L${x-5} 320 L${x+5} 320 L${x+3} 380 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
          <ellipse cx={x} cy="310" rx="30" ry="28" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
          <ellipse cx={x-12} cy="302" rx="16" ry="14" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
          <ellipse cx={x+12} cy="304" rx="14" ry="12" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        </g>
      ))}

      {/* Water layer */}
      <rect y="360" width="1200" height="80" fill="url(#waterGrad)"/>
      {/* Water ripples */}
      {[370, 390, 410, 430].map((y, i) => (
        <path key={i}
          d={`M0 ${y} Q100 ${y-4} 200 ${y} T400 ${y} T600 ${y} T800 ${y} T1000 ${y} T1200 ${y}`}
          fill="none" stroke="#a8d4e8" strokeWidth="1.5" opacity={0.5 - i * 0.1}
          className="anim-shimmer" style={{ animationDelay: `${i * 0.3}s` }}/>
      ))}

      {/* Lily pads on water */}
      <g>
        <ellipse cx="120" cy="395" rx="22" ry="8" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        <ellipse cx="350" cy="400" rx="18" ry="6" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        <ellipse cx="700" cy="392" rx="25" ry="9" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        <ellipse cx="950" cy="405" rx="20" ry="7" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
      </g>

      {/* Foreground trees — big and detailed */}
      {[
        { x: 50, scale: 1.2 },
        { x: 280, scale: 0.9 },
        { x: 500, scale: 1.1 },
        { x: 780, scale: 1.0 },
        { x: 1050, scale: 1.15 },
      ].map((t, i) => {
        const s = t.scale;
        const cx = t.x;
        return (
          <g key={i} transform={`translate(${cx}, ${440 - 120 * s}) scale(${s})`}>
            {/* Trunk */}
            <path d="M38 380 Q35 280 40 200 L52 200 Q57 280 54 380 Z" fill="#5c4632" stroke="#3d2e1f" strokeWidth="3"/>
            {/* Roots into water */}
            <path d="M35 380 Q25 385 15 388" fill="none" stroke="#5c4632" strokeWidth="5" strokeLinecap="round"/>
            <path d="M57 380 Q67 385 77 388" fill="none" stroke="#5c4632" strokeWidth="5" strokeLinecap="round"/>
            {/* Canopy */}
            <ellipse cx="45" cy="160" rx="55" ry="50" fill="#2d6149" stroke="#1a3c2e" strokeWidth="3"/>
            <ellipse cx="25" cy="145" rx="30" ry="28" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
            <ellipse cx="65" cy="140" rx="28" ry="25" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
            <ellipse cx="45" cy="120" rx="25" ry="22" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx="32" cy="135" rx="10" ry="8" fill="#9ccc9a" opacity="0.6"/>
            <ellipse cx="58" cy="130" rx="8" ry="6" fill="#9ccc9a" opacity="0.5"/>
          </g>
        );
      })}

      {/* Peat ground / soil cross-section at bottom */}
      <rect y="440" width="1200" height="160" fill="url(#peatGrad)"/>
      {/* Peat layers */}
      <path d="M0 450 Q200 445 400 450 T800 450 T1200 450" fill="none" stroke="#7a6353" strokeWidth="2" opacity="0.5"/>
      <path d="M0 480 Q300 475 600 480 T1200 480" fill="none" stroke="#7a6353" strokeWidth="2" opacity="0.4"/>
      <path d="M0 520 Q200 515 500 520 T1000 520 T1200 520" fill="none" stroke="#3d2e1f" strokeWidth="2" opacity="0.3"/>
      {/* Plant fragments in peat */}
      {[100, 250, 400, 550, 700, 850, 1000, 1150].map((x, i) => (
        <ellipse key={i} cx={x} cy={460 + (i % 3) * 20} rx="6" ry="3" fill="#7a6353" opacity="0.4" transform={`rotate(${i * 30} ${x} ${460 + (i % 3) * 20})`}/>
      ))}

      {/* Foreground bushes */}
      <g>
        <ellipse cx="150" cy="500" rx="40" ry="22" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
        <ellipse cx="170" cy="490" rx="20" ry="15" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
      </g>
      <g>
        <ellipse cx="650" cy="510" rx="45" ry="25" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2.5"/>
        <ellipse cx="665" cy="495" rx="22" ry="16" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      </g>
      <g>
        <ellipse cx="1000" cy="505" rx="38" ry="20" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
        <ellipse cx="1015" cy="495" rx="18" ry="13" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
      </g>

      {/* Ferns */}
      <g transform="translate(380, 470) scale(0.6)">
        <path d="M40 100 Q38 70 42 40 Q40 20 45 5" fill="none" stroke="#5a8c4a" strokeWidth="3" strokeLinecap="round"/>
        {[...Array(5)].map((_, i) => {
          const y = 90 - i * 15;
          return (
            <g key={i}>
              <ellipse cx={30 - i * 2} cy={y} rx="12" ry="4" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1.5" transform={`rotate(-20 ${30 - i * 2} ${y})`}/>
              <ellipse cx={50 + i * 2} cy={y} rx="12" ry="4" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1.5" transform={`rotate(20 ${50 + i * 2} ${y})`}/>
            </g>
          );
        })}
      </g>

      {/* Dragonfly */}
      <g transform="translate(300, 180)">
        <ellipse cx="25" cy="20" rx="3" ry="10" fill="#4a8aa8" stroke="#1a3c2e" strokeWidth="1"/>
        <ellipse cx="15" cy="17" rx="10" ry="2.5" fill="#a8d4e8" opacity="0.7" stroke="#1a3c2e" strokeWidth="1"/>
        <ellipse cx="35" cy="17" rx="10" ry="2.5" fill="#a8d4e8" opacity="0.7" stroke="#1a3c2e" strokeWidth="1"/>
      </g>
    </svg>
  );
}

// Peat Cross-Section — three states: healthy, dry, burning
export function PeatCrossSection({ state = 'healthy', className = '' }: { state?: 'healthy' | 'dry' | 'burning'; className?: string }) {
  const waterColor = state === 'healthy' ? '#4a8aa8' : state === 'dry' ? '#a8d4e8' : '#a8d4e8';
  const waterOpacity = state === 'healthy' ? 1 : state === 'dry' ? 0.3 : 0.2;
  const peatColor = state === 'burning' ? '#3d2e1f' : state === 'dry' ? '#7a6353' : '#5c4a3a';
  const peatDark = state === 'burning' ? '#2a1f15' : state === 'dry' ? '#5c4632' : '#3d2e1f';
  const vegetationColor = state === 'healthy' ? '#4a8c5a' : state === 'dry' ? '#a08770' : '#3d2e1f';

  return (
    <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sky-${state}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={state === 'burning' ? '#d94c2a' : state === 'dry' ? '#f5d99c' : '#f8e8c8'}/>
          <stop offset="100%" stopColor={state === 'burning' ? '#e8654a' : state === 'dry' ? '#f0e0c4' : '#f5ead7'}/>
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="600" height="180" fill={`url(#sky-${state})`}/>

      {/* Sun/smoke */}
      {state !== 'burning' ? (
        <circle cx="80" cy="60" r="25" fill="#f5a623" opacity="0.7"/>
      ) : (
        <>
          <ellipse cx="80" cy="40" rx="30" ry="15" fill="#5c4632" opacity="0.5"/>
          <ellipse cx="90" cy="55" rx="25" ry="12" fill="#5c4632" opacity="0.4"/>
          <ellipse cx="70" cy="70" rx="20" ry="10" fill="#5c4632" opacity="0.3"/>
        </>
      )}

      {/* Trees — healthy/dry/burned */}
      {[100, 280, 480].map((x, i) => (
        <g key={i}>
          {/* Trunk */}
          <path d={`M${x-4} 180 L${x-6} 130 L${x+6} 130 L${x+4} 180 Z`}
            fill={state === 'burning' ? '#3d2e1f' : '#5c4632'} stroke="#3d2e1f" strokeWidth="2"/>
          {/* Canopy */}
          {state === 'healthy' && (
            <>
              <ellipse cx={x} cy="115" rx="28" ry="25" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2.5"/>
              <ellipse cx={x-10} cy="108" rx="16" ry="14" fill={vegetationColor} stroke="#1a3c2e" strokeWidth="2"/>
              <ellipse cx={x+10} cy="110" rx="14" ry="12" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
            </>
          )}
          {state === 'dry' && (
            <ellipse cx={x} cy="120" rx="20" ry="18" fill="#a08770" stroke="#5c4632" strokeWidth="2" opacity="0.7"/>
          )}
          {state === 'burning' && (
            <>
              <path d={`M${x-15} 130 Q${x-10} 115 ${x} 110 Q${x+10} 115 ${x+15} 130`} fill="none" stroke="#3d2e1f" strokeWidth="2"/>
              <path d={`M${x-8} 125 Q${x-5} 135 ${x-2} 128`} fill="#d94c2a" stroke="#a83520" strokeWidth="1" className="anim-flicker"/>
            </>
          )}
        </g>
      ))}

      {/* Water table line */}
      {state === 'healthy' && (
        <>
          <rect x="0" y="180" width="600" height="25" fill={waterColor} opacity={waterOpacity}/>
          <path d="M0 185 Q150 180 300 185 T600 185" fill="none" stroke="#6bb5d1" strokeWidth="2" className="anim-shimmer"/>
          <path d="M0 192 Q150 188 300 192 T600 192" fill="none" stroke="#a8d4e8" strokeWidth="1.5" opacity="0.7"/>
        </>
      )}
      {state === 'dry' && (
        <rect x="0" y="180" width="600" height="10" fill={waterColor} opacity={waterOpacity}/>
      )}

      {/* Peat soil cross-section */}
      <rect y="200" width="600" height="200" fill={peatColor}/>
      <rect y="200" width="600" height="200" fill={`url(#peat-${state})`} opacity="0.3"/>

      {/* Peat layers — stratification */}
      <path d="M0 210 Q150 205 300 210 T600 210" fill="none" stroke={peatDark} strokeWidth="1.5" opacity="0.4"/>
      <path d="M0 240 Q150 235 300 240 T600 240" fill="none" stroke={peatDark} strokeWidth="1.5" opacity="0.4"/>
      <path d="M0 280 Q150 275 300 280 T600 280" fill="none" stroke={peatDark} strokeWidth="1.5" opacity="0.3"/>
      <path d="M0 330 Q150 325 300 330 T600 330" fill="none" stroke={peatDark} strokeWidth="1.5" opacity="0.3"/>

      {/* Plant fragments in peat */}
      {[80, 180, 300, 420, 520].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy={225 + (i % 3) * 25} rx="8" ry="3" fill={peatDark} opacity="0.5" transform={`rotate(${i * 25} ${x} ${225 + (i % 3) * 25})`}/>
          <ellipse cx={x + 30} cy={240 + (i % 2) * 30} rx="6" ry="2.5" fill={peatDark} opacity="0.4" transform={`rotate(${i * 40 + 10} ${x + 30} ${240 + (i % 2) * 30})`}/>
        </g>
      ))}

      {/* Cracks in dry peat */}
      {state === 'dry' && (
        <>
          <path d="M50 210 L60 230 L55 260 L65 290" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M200 205 L210 235 L205 270" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M350 210 L355 240 L365 275" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M480 205 L490 230 L485 260" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
        </>
      )}

      {/* Underground fire for burning state */}
      {state === 'burning' && (
        <>
          {/* Glowing cracks */}
          <path d="M50 210 L60 230 L55 260 L65 290" fill="none" stroke="#ffd54a" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          <path d="M200 205 L210 235 L205 270" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          <path d="M350 210 L355 240 L365 275" fill="none" stroke="#ffd54a" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          <path d="M480 205 L490 230 L485 260" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
          {/* Fire glow patches */}
          <ellipse cx="150" cy="300" rx="40" ry="15" fill="#d94c2a" opacity="0.4" className="anim-flicker"/>
          <ellipse cx="350" cy="310" rx="50" ry="18" fill="#e8654a" opacity="0.3" className="anim-flicker" style={{ animationDelay: '0.3s' }}/>
          <ellipse cx="480" cy="295" rx="35" ry="12" fill="#d94c2a" opacity="0.4" className="anim-flicker" style={{ animationDelay: '0.5s' }}/>
          {/* Small flames emerging */}
          <path d="M120 280 Q115 270 122 265 Q125 272 120 280" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker"/>
          <path d="M380 285 Q375 275 382 270 Q385 277 380 285" fill="#ffd54a" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker" style={{ animationDelay: '0.2s' }}/>
          <path d="M460 275 Q455 265 462 260 Q465 267 460 275" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker" style={{ animationDelay: '0.4s' }}/>
        </>
      )}

      {/* Water droplets in healthy peat */}
      {state === 'healthy' && (
        <>
          {[120, 250, 380, 500].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={250 + (i % 2) * 30} r="5" fill="#6bb5d1" opacity="0.6" stroke="#4a8aa8" strokeWidth="1"/>
              <circle cx={x + 1} cy={249 + (i % 2) * 30} r="2" fill="#a8d4e8" opacity="0.8"/>
            </g>
          ))}
        </>
      )}

      {/* Roots going into peat */}
      {[100, 280, 480].map((x, i) => (
        <g key={i}>
          <path d={`M${x-3} 200 Q${x-8} 215 ${x-12} 230`} fill="none" stroke={state === 'burning' ? '#3d2e1f' : '#5c4632'} strokeWidth="2"/>
          <path d={`M${x+3} 200 Q${x+8} 220 ${x+10} 235`} fill="none" stroke={state === 'burning' ? '#3d2e1f' : '#5c4632'} strokeWidth="2"/>
        </g>
      ))}

      {/* Surface vegetation */}
      {[50, 150, 350, 450, 550].map((x, i) => (
        <g key={i}>
          {state === 'healthy' && (
            <>
              <path d={`M${x} 200 Q${x} 190 ${x+3} 185`} fill="none" stroke={vegetationColor} strokeWidth="2" strokeLinecap="round"/>
              <ellipse cx={x+5} cy="183" rx="5" ry="3" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1" transform={`rotate(-20 ${x+5} 183)`}/>
            </>
          )}
          {state === 'dry' && (
            <path d={`M${x} 200 Q${x} 195 ${x+2} 192`} fill="none" stroke="#a08770" strokeWidth="2" strokeLinecap="round"/>
          )}
        </g>
      ))}
    </svg>
  );
}

// Comic panel scenes
export function ComicScene({ scene, className = '' }: { scene: string; className?: string }) {
  const scenes: Record<string, React.ReactElement> = {
    'peat-intro': (
      <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5ead7"/>
        <rect y="120" width="300" height="80" fill="#5c4a3a"/>
        <rect y="120" width="300" height="80" fill="#7a6353" opacity="0.3"/>
        <path d="M0 125 Q150 120 300 125" fill="none" stroke="#3d2e1f" strokeWidth="1.5" opacity="0.4"/>
        <path d="M0 150 Q150 145 300 150" fill="none" stroke="#3d2e1f" strokeWidth="1.5" opacity="0.3"/>
        <path d="M0 175 Q150 170 300 175" fill="none" stroke="#3d2e1f" strokeWidth="1.5" opacity="0.3"/>
        {[60, 150, 240].map((x, i) => (
          <ellipse key={i} cx={x} cy={135 + (i%2)*25} rx="8" ry="3" fill="#3d2e1f" opacity="0.4" transform={`rotate(${i*30} ${x} ${135 + (i%2)*25})`}/>
        ))}
        <ellipse cx="150" cy="100" rx="35" ry="30" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2.5"/>
        <ellipse cx="135" cy="90" rx="18" ry="16" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
        <ellipse cx="165" cy="92" rx="16" ry="14" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
        <path d="M147 120 L143 150 M153 120 L157 150" fill="none" stroke="#5c4632" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    'carbon-vault': (
      <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5ead7"/>
        <rect y="100" width="300" height="100" fill="#5c4a3a"/>
        <rect y="100" width="300" height="100" fill="#3d2e1f" opacity="0.3"/>
        {/* CO2 locked in peat */}
        {[50, 150, 250].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={130 + (i%2)*20} r="12" fill="#4a8aa8" opacity="0.6" stroke="#2d6149" strokeWidth="1.5"/>
            <text x={x} y={134 + (i%2)*20} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold" fontFamily="Fredoka">CO₂</text>
          </g>
        ))}
        {[80, 200].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={160} r="10" fill="#4a8aa8" opacity="0.5" stroke="#2d6149" strokeWidth="1.5"/>
            <text x={x} y={163} textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="Fredoka">CO₂</text>
          </g>
        ))}
        {/* Lock symbol */}
        <rect x="130" y="60" width="40" height="30" rx="4" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M138 60 V52 Q138 42 150 42 Q162 42 162 52 V60" fill="none" stroke="#3d2e1f" strokeWidth="3"/>
        <circle cx="150" cy="73" r="4" fill="#3d2e1f"/>
        <rect x="148" y="73" width="4" height="10" fill="#3d2e1f"/>
        {/* Water layer */}
        <rect y="95" width="300" height="10" fill="#4a8aa8" opacity="0.7"/>
      </svg>
    ),
    'dry-peat': (
      <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5d99c"/>
        <rect y="100" width="300" height="100" fill="#7a6353"/>
        <rect y="100" width="300" height="100" fill="#5c4632" opacity="0.2"/>
        {/* Canal */}
        <path d="M140 0 L145 100 L155 100 L160 0 Z" fill="#a8d4e8" opacity="0.5"/>
        {/* Cracks */}
        <path d="M50 110 L55 130 L50 155 L55 180" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M220 105 L225 130 L220 160" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M100 120 L108 145" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
        {/* Dead tree */}
        <path d="M70 100 L68 60 L72 60 L74 100 Z" fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
        <path d="M70 70 L60 55 M70 65 L80 50" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
        {/* CO2 escaping */}
        <g opacity="0.7">
          <circle cx="120" cy="70" r="8" fill="#d94c2a" opacity="0.4"/>
          <text x="120" y="73" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold" fontFamily="Fredoka">CO₂</text>
          <circle cx="180" cy="50" r="7" fill="#d94c2a" opacity="0.3"/>
          <text x="180" y="53" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold" fontFamily="Fredoka">CO₂</text>
          <circle cx="200" cy="80" r="6" fill="#d94c2a" opacity="0.3"/>
        </g>
      </svg>
    ),
    'underground-fire': (
      <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#d94c2a" opacity="0.2"/>
        <rect width="300" height="60" fill="#e8654a" opacity="0.3"/>
        <rect y="60" width="300" height="140" fill="#3d2e1f"/>
        <rect y="60" width="300" height="140" fill="#2a1f15" opacity="0.5"/>
        {/* Glowing cracks */}
        <path d="M30 65 L40 90 L35 120 L45 150" fill="none" stroke="#ffd54a" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
        <path d="M120 62 L125 85 L120 110 L130 140" fill="none" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
        <path d="M220 65 L225 95 L220 125 L228 155" fill="none" stroke="#ffd54a" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
        {/* Fire glow underground */}
        <ellipse cx="80" cy="140" rx="40" ry="15" fill="#d94c2a" opacity="0.5" className="anim-flicker"/>
        <ellipse cx="200" cy="150" rx="45" ry="18" fill="#e8654a" opacity="0.4" className="anim-flicker" style={{animationDelay:'0.3s'}}/>
        {/* Flames emerging */}
        <path d="M40 60 Q35 50 42 45 Q45 52 40 60" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker"/>
        <path d="M125 58 Q120 48 127 43 Q130 50 125 58" fill="#ffd54a" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker" style={{animationDelay:'0.2s'}}/>
        <path d="M225 60 Q220 50 227 45 Q230 52 225 60" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker" style={{animationDelay:'0.4s'}}/>
        {/* Smoke */}
        <ellipse cx="42" cy="30" rx="15" ry="8" fill="#5c4632" opacity="0.4"/>
        <ellipse cx="127" cy="25" rx="12" ry="6" fill="#5c4632" opacity="0.3"/>
        <ellipse cx="227" cy="35" rx="14" ry="7" fill="#5c4632" opacity="0.4"/>
      </svg>
    ),
    'solution': (
      <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8e8c8"/>
        {/* Water returning */}
        <rect y="90" width="300" height="15" fill="#4a8aa8" opacity="0.7"/>
        <path d="M0 95 Q150 90 300 95" fill="none" stroke="#6bb5d1" strokeWidth="2" className="anim-shimmer"/>
        {/* Canal block */}
        <rect x="140" y="50" width="20" height="50" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M140 55 L160 55 M140 65 L160 65 M140 75 L160 75" fill="none" stroke="#3d2e1f" strokeWidth="1.5"/>
        {/* Happy trees */}
        {[50, 150, 250].map((x, i) => (
          <g key={i}>
            <path d={`M${x-3} 90 L${x-4} 60 L${x+4} 60 L${x+3} 90 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy="50" rx="22" ry="20" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-8} cy="44" rx="12" ry="10" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
            <ellipse cx={x+8} cy="46" rx="10" ry="9" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
        {/* Peat ground */}
        <rect y="105" width="300" height="95" fill="#5c4a3a"/>
        {/* Water droplets in peat */}
        {[60, 150, 240].map((x, i) => (
          <circle key={i} cx={x} cy={130 + (i%2)*25} r="5" fill="#6bb5d1" opacity="0.6" stroke="#4a8aa8" strokeWidth="1"/>
        ))}
        {/* New plants */}
        {[80, 220].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 105 Q${x} 95 ${x+2} 88`} fill="none" stroke="#5a8c4a" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx={x+4} cy="86" rx="5" ry="3" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1" transform={`rotate(-20 ${x+4} 86)`}/>
          </g>
        ))}
        {/* Sun */}
        <circle cx="270" cy="25" r="15" fill="#f5a623" opacity="0.8"/>
        <circle cx="270" cy="25" r="10" fill="#ffd54a" opacity="0.7"/>
      </svg>
    ),
    'rewetting': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="80" width="300" height="100" fill="#5c4a3a"/>
        <rect y="75" width="300" height="15" fill="#4a8aa8" opacity="0.7"/>
        <path d="M0 80 Q150 75 300 80" fill="none" stroke="#6bb5d1" strokeWidth="2" className="anim-shimmer"/>
        {[60, 150, 240].map((x, i) => (
          <g key={i}>
            <path d={`M${x-3} 75 L${x-4} 45 L${x+4} 45 L${x+3} 75 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy="38" rx="20" ry="18" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-7} cy="32" rx="10" ry="9" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
      </svg>
    ),
    'fire': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#d94c2a" opacity="0.15"/>
        <rect y="80" width="300" height="100" fill="#3d2e1f"/>
        {[60, 150, 240].map((x, i) => (
          <path key={i} d={`M${x-3} 80 L${x-5} 50 L${x+5} 50 L${x+3} 80 Z`} fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
        ))}
        {[60, 150, 240].map((x, i) => (
          <g key={i}>
            <path d={`M${x-10} 55 Q${x-5} 40 ${x} 35 Q${x+5} 40 ${x+10} 55 Z`} fill="#d94c2a" stroke="#a83520" strokeWidth="1.5" className="anim-flicker" style={{animationDelay: `${i*0.2}s`}}/>
            <path d={`M${x-6} 50 Q${x-3} 42 ${x} 40 Q${x+3} 42 ${x+6} 50 Z`} fill="#f5a623" className="anim-flicker" style={{animationDelay: `${i*0.2}s`}}/>
          </g>
        ))}
        <ellipse cx="60" cy="30" rx="15" ry="8" fill="#5c4632" opacity="0.4"/>
        <ellipse cx="150" cy="22" rx="18" ry="9" fill="#5c4632" opacity="0.4"/>
        <ellipse cx="240" cy="28" rx="14" ry="7" fill="#5c4632" opacity="0.4"/>
      </svg>
    ),
    'wildlife': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="90" width="300" height="90" fill="#2d6149"/>
        {/* Trees */}
        {[50, 250].map((x, i) => (
          <g key={i}>
            <path d={`M${x-3} 90 L${x-4} 50 L${x+4} 50 L${x+3} 90 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy="42" rx="22" ry="20" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-8} cy="36" rx="12" ry="10" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
        {/* Orangutan silhouette */}
        <ellipse cx="150" cy="95" rx="20" ry="15" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
        <circle cx="150" cy="80" r="12" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
        <circle cx="146" cy="78" r="2.5" fill="#1a3c2e"/>
        <circle cx="154" cy="78" r="2.5" fill="#1a3c2e"/>
        <path d="M145 85 Q150 88 155 85" fill="none" stroke="#3d2e1f" strokeWidth="1.5"/>
        <path d="M135 90 Q125 85 120 75" fill="none" stroke="#a08770" strokeWidth="5" strokeLinecap="round"/>
        {/* Hornbill flying */}
        <g transform="translate(200, 40) scale(0.5)">
          <ellipse cx="25" cy="20" rx="3" ry="10" fill="#1a3c2e"/>
          <ellipse cx="15" cy="17" rx="12" ry="3" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
          <ellipse cx="35" cy="17" rx="12" ry="3" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
        </g>
      </svg>
    ),
    'policy': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f5ead7"/>
        {/* Document */}
        <rect x="100" y="30" width="100" height="120" rx="6" fill="#fff" stroke="#3d2e1f" strokeWidth="2.5"/>
        <rect x="110" y="40" width="80" height="4" rx="2" fill="#4a8c5a"/>
        <rect x="110" y="50" width="70" height="3" rx="1.5" fill="#7a6353"/>
        <rect x="110" y="58" width="75" height="3" rx="1.5" fill="#7a6353"/>
        <rect x="110" y="66" width="60" height="3" rx="1.5" fill="#7a6353"/>
        <rect x="110" y="80" width="80" height="4" rx="2" fill="#4a8c5a"/>
        <rect x="110" y="90" width="65" height="3" rx="1.5" fill="#7a6353"/>
        <rect x="110" y="98" width="70" height="3" rx="1.5" fill="#7a6353"/>
        {/* Stamp */}
        <circle cx="160" cy="125" r="18" fill="none" stroke="#d94c2a" strokeWidth="3"/>
        <text x="160" y="130" textAnchor="middle" fontSize="10" fill="#d94c2a" fontWeight="bold" fontFamily="Fredoka">VCS</text>
        {/* Gavel */}
        <rect x="50" y="60" width="30" height="12" rx="3" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2" transform="rotate(-30 65 66)"/>
        <rect x="55" y="80" width="4" height="40" fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5" transform="rotate(-30 57 100)"/>
      </svg>
    ),
    'community': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="100" width="300" height="80" fill="#5c4a3a"/>
        {/* Houses */}
        {[60, 150, 240].map((x, i) => (
          <g key={i}>
            <path d={`M${x-20} 80 L${x} 55 L${x+20} 80 Z`} fill="#d94c2a" stroke="#3d2e1f" strokeWidth="2"/>
            <rect x={x-18} y="80" width="36" height="25" fill="#f5ead7" stroke="#3d2e1f" strokeWidth="2"/>
            <rect x={x-5} y="88" width="10" height="17" fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
          </g>
        ))}
        {/* People */}
        <g transform="translate(120, 110)">
          <circle cx="0" cy="-5" r="5" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="1.5"/>
          <path d="M-4 0 L4 0 L3 15 L-3 15 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        </g>
        <g transform="translate(190, 110)">
          <circle cx="0" cy="-5" r="5" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="1.5"/>
          <path d="M-4 0 L4 0 L3 15 L-3 15 Z" fill="#4a8aa8" stroke="#1a3c2e" strokeWidth="1.5"/>
        </g>
      </svg>
    ),
    'market': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f5ead7"/>
        {/* Chart bars */}
        {[50, 90, 130, 170, 210, 250].map((x, i) => (
          <g key={i}>
            <rect x={x-12} y={120 - i * 12} width="24" height={60 + i * 12} rx="3" fill={i > 3 ? '#4a8c5a' : '#6bb077'} stroke="#1a3c2e" strokeWidth="2"/>
            <rect x={x-10} y={120 - i * 12} width="20" height="6" rx="2" fill="#9ccc9a" opacity="0.6"/>
          </g>
        ))}
        <path d="M30 80 L70 70 L110 75 L150 55 L190 50 L230 30" fill="none" stroke="#d94c2a" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="230" cy="30" r="5" fill="#d94c2a" stroke="#3d2e1f" strokeWidth="2"/>
      </svg>
    ),
  };

  return scenes[scene] || scenes['peat-intro'];
}

// Topic category icons — hand-drawn cartoon icons
export function TopicIcon({ iconKey, className = '', size = 48 }: { iconKey: string; className?: string; size?: number }) {
  const icons: Record<string, React.ReactElement> = {
    science: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Magnifying glass over leaf */}
        <ellipse cx="25" cy="30" rx="18" ry="12" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
        <path d="M25 20 L25 38 M18 28 L32 28" fill="none" stroke="#1a3c2e" strokeWidth="1.5"/>
        <circle cx="38" cy="22" r="12" fill="none" stroke="#2d6149" strokeWidth="3"/>
        <line x1="46" y1="30" x2="54" y2="38" stroke="#2d6149" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    fire: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M30 8 Q18 22 16 35 Q15 48 30 52 Q45 48 44 35 Q42 22 30 8 Z" fill="#d94c2a" stroke="#a83520" strokeWidth="2.5"/>
        <path d="M30 18 Q24 28 23 36 Q23 44 30 48 Q37 44 37 36 Q36 28 30 18 Z" fill="#f5a623" stroke="#d94c2a" strokeWidth="2"/>
        <path d="M30 28 Q28 34 28 40 Q30 44 32 40 Q32 34 30 28 Z" fill="#ffd54a"/>
      </svg>
    ),
    restoration: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Water drop + plant */}
        <path d="M30 10 Q20 22 20 32 Q20 42 30 46 Q40 42 40 32 Q40 22 30 10 Z" fill="#4a8aa8" stroke="#2d6149" strokeWidth="2.5"/>
        <ellipse cx="27" cy="28" rx="4" ry="6" fill="#a8d4e8" opacity="0.6"/>
        <path d="M30 46 L30 55" fill="none" stroke="#5a8c4a" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="25" cy="52" rx="5" ry="3" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5" transform="rotate(-20 25 52)"/>
        <ellipse cx="35" cy="52" rx="5" ry="3" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5" transform="rotate(20 35 52)"/>
      </svg>
    ),
    carbon: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Coin with leaf */}
        <circle cx="30" cy="30" r="22" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2.5"/>
        <circle cx="30" cy="30" r="17" fill="#ffd54a" stroke="#d94c2a" strokeWidth="1.5"/>
        <path d="M30 18 Q22 25 22 32 Q22 38 30 40 Q38 38 38 32 Q38 25 30 18 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
        <path d="M30 20 L30 38 M26 28 L34 28" fill="none" stroke="#1a3c2e" strokeWidth="1.5"/>
      </svg>
    ),
    wildlife: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Hornbill head */}
        <circle cx="28" cy="28" r="18" fill="#1a3c2e" stroke="#0d1e16" strokeWidth="2.5"/>
        <path d="M30 14 Q36 6 40 12 Q42 18 36 20" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M28 26 Q48 22 46 32 Q44 38 28 34" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2.5"/>
        <circle cx="25" cy="26" r="4" fill="#f5ead7" stroke="#0d1e16" strokeWidth="1.5"/>
        <circle cx="26" cy="27" r="2.5" fill="#1a3c2e"/>
      </svg>
    ),
    community: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        {/* People group */}
        <circle cx="20" cy="22" r="8" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M12 38 Q12 30 20 30 Q28 30 28 38 L28 48 L12 48 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
        <circle cx="40" cy="20" r="7" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M34 36 Q34 28 40 28 Q46 28 46 36 L46 48 L34 48 Z" fill="#4a8aa8" stroke="#1a3c2e" strokeWidth="2"/>
      </svg>
    ),
    map: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="44" height="36" rx="4" fill="#a08770" stroke="#3d2e1f" strokeWidth="2.5"/>
        <path d="M8 24 L20 24 L20 20 L30 20 L30 30 L40 30 L40 26 L52 26" fill="none" stroke="#2d6149" strokeWidth="2.5"/>
        <ellipse cx="25" cy="38" rx="8" ry="5" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
        <circle cx="45" cy="38" r="4" fill="#d94c2a" stroke="#3d2e1f" strokeWidth="1.5"/>
      </svg>
    ),
    people: (
      <svg viewBox="0 0 60 60" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="7" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M10 35 Q10 27 18 27 Q26 27 26 35 L26 48 L10 48 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
        <circle cx="38" cy="18" r="6" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M32 32 Q32 25 38 25 Q44 25 44 32 L44 48 L32 48 Z" fill="#d94c2a" stroke="#1a3c2e" strokeWidth="2"/>
      </svg>
    ),
  };

  return icons[iconKey] || icons.science;
}

// News thumbnail illustrations
export function NewsIllustration({ type, className = '' }: { type: string; className?: string }) {
  return <ComicScene scene={type} className={className} />;
}

// Restoration before/after scenes
export function RestorationScene({ type, className = '' }: { type: string; className?: string }) {
  const scenes: Record<string, React.ReactElement> = {
    'dry-peat': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f5d99c"/>
        <rect y="80" width="300" height="100" fill="#7a6353"/>
        <path d="M50 85 L55 110 L50 140 L55 170" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M220 85 L225 115 L220 145" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M140 0 L145 80 L155 80 L160 0 Z" fill="#a8d4e8" opacity="0.4"/>
        <path d="M70 80 L66 50 L74 50 L70 80 Z" fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
        <path d="M70 55 L60 45 M70 50 L80 40" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'wet-peat': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="75" width="300" height="20" fill="#4a8aa8" opacity="0.7"/>
        <path d="M0 80 Q150 75 300 80" fill="none" stroke="#6bb5d1" strokeWidth="2" className="anim-shimmer"/>
        <rect y="95" width="300" height="85" fill="#5c4a3a"/>
        {[60, 150, 240].map((x, i) => (
          <g key={i}>
            <path d={`M${x-3} 75 L${x-4} 45 L${x+4} 45 L${x+3} 75 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy="38" rx="20" ry="18" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-7} cy="32" rx="10" ry="9" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
        {[60, 150, 240].map((x, i) => (
          <circle key={i} cx={x} cy={120 + (i%2)*20} r="5" fill="#6bb5d1" opacity="0.6" stroke="#4a8aa8" strokeWidth="1"/>
        ))}
      </svg>
    ),
    'burned-peat': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#d94c2a" opacity="0.1"/>
        <rect y="80" width="300" height="100" fill="#2a1f15"/>
        <path d="M70 80 L66 50 L74 50 L70 80 Z" fill="#3d2e1f" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M70 55 L60 40 M70 50 L80 38" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
        <path d="M150 80 L146 55 L154 55 L150 80 Z" fill="#3d2e1f" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M230 80 L226 45 L234 45 L230 80 Z" fill="#3d2e1f" stroke="#1a1a1a" strokeWidth="1.5"/>
        <ellipse cx="100" cy="150" rx="40" ry="15" fill="#d94c2a" opacity="0.3" className="anim-flicker"/>
        <ellipse cx="200" cy="140" rx="35" ry="12" fill="#e8654a" opacity="0.2" className="anim-flicker" style={{animationDelay:'0.3s'}}/>
      </svg>
    ),
    'planted-peat': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="85" width="300" height="95" fill="#5c4a3a"/>
        <rect y="80" width="300" height="12" fill="#4a8aa8" opacity="0.5"/>
        {/* Young trees */}
        {[50, 100, 150, 200, 250].map((x, i) => (
          <g key={i}>
            <path d={`M${x-2} 85 L${x-3} 65 L${x+3} 65 L${x+2} 85 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy="58" rx="12" ry="11" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-4} cy="54" rx="7" ry="6" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
        {/* Canal block */}
        <rect x="135" y="50" width="15" height="35" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2"/>
      </svg>
    ),
    'fire-damaged': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#d94c2a" opacity="0.15"/>
        <rect y="80" width="300" height="100" fill="#2a1f15"/>
        <path d="M60 80 L56 40 L64 40 L60 80 Z" fill="#3d2e1f"/>
        <path d="M60 50 L50 35 M60 45 L70 30" fill="none" stroke="#3d2e1f" strokeWidth="2"/>
        <path d="M140 80 L136 50 L144 50 L140 80 Z" fill="#3d2e1f"/>
        <path d="M240 80 L236 45 L244 45 L240 80 Z" fill="#3d2e1f"/>
        <path d="M50 90 L55 120 L50 150" fill="none" stroke="#ffd54a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M200 90 L205 125 L200 160" fill="none" stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    'recovering-peat': (
      <svg viewBox="0 0 300 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="180" fill="#f8e8c8"/>
        <rect y="80" width="300" height="100" fill="#5c4a3a"/>
        <rect y="75" width="300" height="12" fill="#4a8aa8" opacity="0.6"/>
        <path d="M0 80 Q150 76 300 80" fill="none" stroke="#6bb5d1" strokeWidth="2" className="anim-shimmer"/>
        {[50, 110, 170, 230].map((x, i) => (
          <g key={i}>
            <path d={`M${x-2} 78 L${x-3} ${60-i*3} L${x+3} ${60-i*3} L${x+2} 78 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
            <ellipse cx={x} cy={52-i*3} rx={10+i*2} ry={9+i*2} fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
            <ellipse cx={x-4} cy={48-i*3} rx={6+i} ry={5+i} fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
          </g>
        ))}
        {/* Wildlife returning - bird */}
        <g transform="translate(250, 30) scale(0.4)">
          <ellipse cx="25" cy="20" rx="3" ry="10" fill="#1a3c2e"/>
          <ellipse cx="15" cy="17" rx="12" ry="3" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
          <ellipse cx="35" cy="17" rx="12" ry="3" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1"/>
        </g>
      </svg>
    ),
  };

  return scenes[type] || scenes['dry-peat'];
}

// Panoramic footer forest illustration
export function FooterForest({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 200" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="footerSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5ead7" stopOpacity="0"/>
          <stop offset="100%" stopColor="#f0e0c4" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="200" fill="url(#footerSky)"/>

      {/* Far hills */}
      <path d="M0 120 L200 80 L400 100 L600 70 L800 95 L1000 75 L1200 100 L1200 200 L0 200 Z"
        fill="#7a6353" opacity="0.3"/>

      {/* Mid trees */}
      {[60, 200, 340, 480, 620, 760, 900, 1040, 1180].map((x, i) => (
        <g key={i} opacity="0.7">
          <path d={`M${x-3} 140 L${x-5} 100 L${x+5} 100 L${x+3} 140 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
          <ellipse cx={x} cy="95" rx="25" ry="23" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
          <ellipse cx={x-10} cy="88" rx="14" ry="12" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
          <ellipse cx={x+10} cy="90" rx="12" ry="10" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
        </g>
      ))}

      {/* Water */}
      <rect y="140" width="1200" height="60" fill="#4a8aa8" opacity="0.5"/>
      <path d="M0 150 Q200 146 400 150 T800 150 T1200 150" fill="none" stroke="#6bb5d1" strokeWidth="1.5" className="anim-shimmer"/>
      <path d="M0 160 Q300 156 600 160 T1200 160" fill="none" stroke="#a8d4e8" strokeWidth="1" opacity="0.5"/>

      {/* Foreground trees */}
      {[100, 350, 600, 850, 1100].map((x, i) => (
        <g key={i}>
          <path d={`M${x-4} 165 L${x-6} 110 L${x+6} 110 L${x+4} 165 Z`} fill="#5c4632" stroke="#3d2e1f" strokeWidth="2.5"/>
          <ellipse cx={x} cy="100" rx="30" ry="28" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2.5"/>
          <ellipse cx={x-12} cy="92" rx="16" ry="14" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
          <ellipse cx={x+12} cy="94" rx="14" ry="12" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
        </g>
      ))}

      {/* Bushes */}
      {[50, 250, 500, 750, 1000].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy="170" rx="25" ry="15" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
          <ellipse cx={x+10} cy="162" rx="12" ry="10" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
        </g>
      ))}

      {/* Small ferns */}
      {[180, 430, 680, 930].map((x, i) => (
        <g key={i} transform={`translate(${x}, 160) scale(0.4)`}>
          <path d="M40 40 Q38 20 42 5" fill="none" stroke="#5a8c4a" strokeWidth="3" strokeLinecap="round"/>
          <ellipse cx="30" cy="25" rx="10" ry="3" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1" transform="rotate(-20 30 25)"/>
          <ellipse cx="50" cy="25" rx="10" ry="3" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1" transform="rotate(20 50 25)"/>
          <ellipse cx="32" cy="10" rx="8" ry="2.5" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1" transform="rotate(-15 32 10)"/>
          <ellipse cx="48" cy="10" rx="8" ry="2.5" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1" transform="rotate(15 48 10)"/>
        </g>
      ))}

      {/* Fireflies / particles */}
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={`${(i * 97) % 1100 + 50}`}
          cy={`${60 + (i % 4) * 20}`}
          r="2"
          fill="#ffd54a"
          opacity="0.6"
          className="particle-dot"
          style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${3 + (i % 3)}s` }}
        />
      ))}
    </svg>
  );
}
