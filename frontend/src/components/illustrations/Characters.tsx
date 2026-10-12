import React from 'react';

// === ORIGINAL MASCOT CHARACTERS ===

// 1. Peatland Explorer — a young adventurer with a hat, vest, and boots
export function ExplorerCharacter({ className = '', style, animate = true }: { className?: string; style?: React.CSSProperties; animate?: boolean }) {
  return (
    <svg viewBox="0 0 120 200" className={`${className} ${animate ? 'anim-idle' : ''}`} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="60" cy="195" rx="30" ry="5" fill="#1a3c2e" opacity="0.2"/>
      {/* Legs */}
      <path d="M48 165 L45 190 L52 192 L54 165 Z" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M66 165 L68 192 L75 190 L72 165 Z" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2"/>
      {/* Boots */}
      <ellipse cx="48" cy="192" rx="8" ry="4" fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
      <ellipse cx="72" cy="192" rx="8" ry="4" fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
      {/* Body / Vest */}
      <path d="M42 90 Q38 100 40 120 L42 165 L78 165 L80 120 Q82 100 78 90 Z" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2.5"/>
      {/* Vest pocket */}
      <rect x="48" y="110" width="12" height="10" rx="2" fill="#2d6149" stroke="#1a3c2e" strokeWidth="1.5"/>
      {/* Belt */}
      <rect x="40" y="130" width="40" height="6" fill="#5c4632" stroke="#3d2e1f" strokeWidth="1.5"/>
      <rect x="56" y="129" width="8" height="8" rx="1" fill="#f5a623" stroke="#3d2e1f" strokeWidth="1.5"/>
      {/* Arms */}
      <path d="M42 95 Q30 110 28 130 Q30 135 35 133 Q37 115 44 100" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <path d="M78 95 Q90 110 92 130 Q90 135 85 133 Q83 115 76 100" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      {/* Hands */}
      <circle cx="31" cy="132" r="5" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="1.5"/>
      <circle cx="89" cy="132" r="5" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="1.5"/>
      {/* Neck */}
      <rect x="54" y="82" width="12" height="12" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="1.5"/>
      {/* Head */}
      <circle cx="60" cy="65" r="22" fill="#f5d99c" stroke="#3d2e1f" strokeWidth="2.5"/>
      {/* Hair */}
      <path d="M40 58 Q42 42 60 40 Q78 42 80 58 Q78 50 60 48 Q42 50 40 58" fill="#3d2e1f" stroke="#2a1f15" strokeWidth="1.5"/>
      {/* Hat — explorer hat */}
      <ellipse cx="60" cy="45" rx="32" ry="8" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M48 42 Q50 30 60 28 Q70 30 72 42" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M52 35 Q60 32 68 35" fill="none" stroke="#3d2e1f" strokeWidth="1.5"/>
      {/* Band on hat */}
      <path d="M48 44 Q60 42 72 44" fill="none" stroke="#4a8c5a" strokeWidth="3"/>
      {/* Eyes */}
      <circle cx="52" cy="65" r="4" fill="#fff" stroke="#1a3c2e" strokeWidth="1.5"/>
      <circle cx="68" cy="65" r="4" fill="#fff" stroke="#1a3c2e" strokeWidth="1.5"/>
      <circle cx="53" cy="66" r="2.5" fill="#1a3c2e"/>
      <circle cx="69" cy="66" r="2.5" fill="#1a3c2e"/>
      <circle cx="53.5" cy="65" r="1" fill="#fff"/>
      <circle cx="69.5" cy="65" r="1" fill="#fff"/>
      {/* Smile */}
      <path d="M53 74 Q60 80 67 74" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      {/* Cheeks */}
      <circle cx="48" cy="72" r="3" fill="#e8654a" opacity="0.4"/>
      <circle cx="72" cy="72" r="3" fill="#e8654a" opacity="0.4"/>
      {/* Nose */}
      <circle cx="60" cy="70" r="2" fill="#e8654a" opacity="0.5"/>
    </svg>
  );
}

// 2. Hornbill — friendly Indonesian wildlife character
export function HornbillCharacter({ className = '', style, animate = true }: { className?: string; style?: React.CSSProperties; animate?: boolean }) {
  return (
    <svg viewBox="0 0 140 160" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Tail feathers */}
      <path d="M20 100 Q5 95 8 120 Q15 115 22 105" fill="#1a3c2e" stroke="#0d1e16" strokeWidth="2"/>
      <path d="M15 95 Q0 90 5 110 Q12 108 18 100" fill="#2d6149" stroke="#0d1e16" strokeWidth="2"/>
      {/* Body */}
      <ellipse cx="55" cy="95" rx="35" ry="30" fill="#1a3c2e" stroke="#0d1e16" strokeWidth="2.5"/>
      {/* Belly */}
      <ellipse cx="55" cy="105" rx="22" ry="18" fill="#f5ead7" stroke="#0d1e16" strokeWidth="1.5"/>
      {/* Wing */}
      <path d="M40 80 Q30 90 35 115 Q45 110 55 100 Q48 88 40 80" fill="#2d6149" stroke="#0d1e16" strokeWidth="2" className={animate ? 'anim-wing' : ''}/>
      {/* Head */}
      <circle cx="85" cy="60" r="25" fill="#1a3c2e" stroke="#0d1e16" strokeWidth="2.5"/>
      {/* Neck */}
      <path d="M70 75 Q65 85 68 95 L80 95 Q82 85 78 75" fill="#2d6149" stroke="#0d1e16" strokeWidth="2"/>
      {/* Horn — signature casque */}
      <path d="M88 38 Q95 25 100 35 Q102 42 96 45 Z" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M88 38 Q92 33 96 40" fill="none" stroke="#d94c2a" strokeWidth="2"/>
      {/* Beak — large curved hornbill beak */}
      <path d="M95 58 Q120 52 118 65 Q115 72 95 68 Z" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2.5"/>
      <path d="M95 65 Q115 62 115 67" fill="none" stroke="#d94c2a" strokeWidth="2"/>
      <path d="M98 58 Q110 56 110 62" fill="#e8654a" stroke="#3d2e1f" strokeWidth="1.5"/>
      {/* Eye */}
      <circle cx="82" cy="56" r="6" fill="#f5ead7" stroke="#0d1e16" strokeWidth="1.5"/>
      <circle cx="83" cy="57" r="3.5" fill="#1a3c2e"/>
      <circle cx="84" cy="56" r="1.5" fill="#fff"/>
      {/* Eyebrow ridge */}
      <path d="M75 48 Q82 45 90 48" fill="none" stroke="#0d1e16" strokeWidth="2.5"/>
      {/* Legs */}
      <path d="M48 122 L46 140 L52 140 L52 122" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M62 122 L62 140 L68 140 L66 122" fill="#f5a623" stroke="#3d2e1f" strokeWidth="2"/>
      {/* Feet */}
      <path d="M44 140 L42 145 M49 140 L49 146 M54 140 L56 145" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 140 L58 145 M65 140 L65 146 M70 140 L72 145" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// 3. Peat-Soil Character — a friendly chunk of peat that explains carbon storage
export function PeatCharacter({ className = '', style, animate = true, mood = 'happy' }: { className?: string; style?: React.CSSProperties; animate?: boolean; mood?: 'happy' | 'dry' | 'burning' }) {
  const bodyColor = mood === 'burning' ? '#d94c2a' : mood === 'dry' ? '#7a6353' : '#5c4a3a';
  const accentColor = mood === 'burning' ? '#e8654a' : mood === 'dry' ? '#a08770' : '#7a6353';

  return (
    <svg viewBox="0 0 120 120" className={`${className} ${animate ? 'anim-idle' : ''}`} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="60" cy="112" rx="35" ry="5" fill="#1a3c2e" opacity="0.2"/>
      {/* Body — irregular peat chunk shape */}
      <path d="M25 60 Q20 45 30 35 Q35 25 50 28 Q65 22 80 30 Q95 35 95 55 Q98 70 88 85 Q80 100 60 98 Q40 100 30 85 Q22 75 25 60 Z"
        fill={bodyColor} stroke="#3d2e1f" strokeWidth="2.5"/>
      {/* Texture lines */}
      <path d="M35 50 Q40 48 48 52" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.6"/>
      <path d="M55 45 Q62 43 70 48" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.6"/>
      <path d="M40 70 Q48 68 55 72" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.6"/>
      <path d="M65 75 Q72 73 80 77" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.6"/>
      {/* Small plant sprout on top */}
      {mood === 'happy' && (
        <>
          <path d="M55 30 Q55 22 58 18" fill="none" stroke="#5a8c4a" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="60" cy="16" rx="6" ry="4" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5" transform="rotate(-20 60 16)"/>
          <ellipse cx="55" cy="14" rx="5" ry="3" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5" transform="rotate(20 55 14)"/>
        </>
      )}
      {/* Cracks for dry mood */}
      {mood === 'dry' && (
        <>
          <path d="M35 45 L42 55 L38 65" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
          <path d="M70 40 L75 50 L72 60" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
        </>
      )}
      {/* Fire for burning mood */}
      {mood === 'burning' && (
        <>
          <path d="M40 30 Q35 20 42 15 Q45 22 40 30" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker"/>
          <path d="M65 28 Q60 18 67 13 Q70 20 65 28" fill="#ffd54a" stroke="#d94c2a" strokeWidth="1.5" className="anim-flicker" style={{ animationDelay: '0.2s' }}/>
        </>
      )}
      {/* Eyes */}
      <circle cx="45" cy="58" r="7" fill="#fff" stroke="#3d2e1f" strokeWidth="2"/>
      <circle cx="72" cy="58" r="7" fill="#fff" stroke="#3d2e1f" strokeWidth="2"/>
      <circle cx="46" cy="59" r="4" fill="#1a3c2e"/>
      <circle cx="73" cy="59" r="4" fill="#1a3c2e"/>
      <circle cx="47" cy="58" r="1.5" fill="#fff"/>
      <circle cx="74" cy="58" r="1.5" fill="#fff"/>
      {/* Mouth */}
      {mood === 'happy' && <path d="M48 75 Q58 82 68 75" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>}
      {mood === 'dry' && <path d="M48 78 Q58 74 68 78" fill="none" stroke="#3d2e1f" strokeWidth="2.5" strokeLinecap="round"/>}
      {mood === 'burning' && <ellipse cx="58" cy="78" rx="6" ry="8" fill="#3d2e1f" stroke="#1a1a1a" strokeWidth="1.5"/>}
      {/* Cheeks */}
      <circle cx="38" cy="68" r="4" fill="#e8654a" opacity={mood === 'happy' ? '0.3' : '0.5'}/>
      <circle cx="80" cy="68" r="4" fill="#e8654a" opacity={mood === 'happy' ? '0.3' : '0.5'}/>
    </svg>
  );
}

// 4. Fire Character — expressive but educational representation of fire
export function FireCharacter({ className = '', style, animate = true }: { className?: string; style?: React.CSSProperties; animate?: boolean }) {
  return (
    <svg viewBox="0 0 100 140" className={`${className} ${animate ? 'anim-flicker' : ''}`} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Glow */}
      <ellipse cx="50" cy="100" rx="35" ry="10" fill="#ffd54a" opacity="0.3" className="glow-fire"/>
      {/* Outer flame body */}
      <path d="M50 10 Q30 30 25 50 Q18 70 22 90 Q28 115 50 120 Q72 115 78 90 Q82 70 75 50 Q70 30 50 10 Z"
        fill="#d94c2a" stroke="#a83520" strokeWidth="2.5"/>
      {/* Inner flame */}
      <path d="M50 25 Q38 40 35 55 Q30 75 35 90 Q40 108 50 112 Q60 108 65 90 Q70 75 65 55 Q62 40 50 25 Z"
        fill="#e8654a" stroke="#d94c2a" strokeWidth="2"/>
      {/* Core */}
      <path d="M50 40 Q44 50 42 65 Q40 80 44 92 Q47 102 50 105 Q53 102 56 92 Q60 80 58 65 Q56 50 50 40 Z"
        fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5"/>
      {/* Yellow tip */}
      <path d="M50 48 Q47 55 46 65 Q45 75 48 82 Q50 88 52 82 Q55 75 54 65 Q53 55 50 48 Z"
        fill="#ffd54a" opacity="0.8"/>
      {/* Eyes — mischievous but not evil */}
      <ellipse cx="42" cy="65" rx="5" ry="6" fill="#fff" stroke="#3d2e1f" strokeWidth="1.5"/>
      <ellipse cx="58" cy="65" rx="5" ry="6" fill="#fff" stroke="#3d2e1f" strokeWidth="1.5"/>
      <circle cx="43" cy="66" r="3" fill="#1a3c2e"/>
      <circle cx="59" cy="66" r="3" fill="#1a3c2e"/>
      <circle cx="44" cy="65" r="1" fill="#fff"/>
      <circle cx="60" cy="65" r="1" fill="#fff"/>
      {/* Mouth — sly grin */}
      <path d="M42 80 Q50 85 58 80" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      {/* Eyebrows */}
      <path d="M37 59 Q42 57 47 59" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M53 59 Q58 57 63 59" fill="none" stroke="#3d2e1f" strokeWidth="2" strokeLinecap="round"/>
      {/* Small flames on top */}
      <path d="M45 15 Q42 8 46 5 Q48 10 45 15" fill="#ffd54a" stroke="#d94c2a" strokeWidth="1.5"/>
      <path d="M55 18 Q52 10 56 8 Q58 13 55 18" fill="#f5a623" stroke="#d94c2a" strokeWidth="1.5"/>
    </svg>
  );
}
