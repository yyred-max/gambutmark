import React from 'react';

// === ENVIRONMENT ILLUSTRATION PRIMITIVES ===

export function CartoonTree({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Trunk */}
      <path d="M50 200 Q48 160 52 120 Q50 100 55 80 L65 80 Q70 100 68 120 Q72 160 70 200 Z" fill="#5c4632" stroke="#3d2e1f" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Trunk texture */}
      <path d="M54 150 Q56 145 55 140" fill="none" stroke="#3d2e1f" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M62 170 Q60 165 61 160" fill="none" stroke="#3d2e1f" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Roots */}
      <path d="M52 195 Q45 198 38 200" fill="none" stroke="#5c4632" strokeWidth="4" strokeLinecap="round"/>
      <path d="M68 195 Q75 198 82 200" fill="none" stroke="#5c4632" strokeWidth="4" strokeLinecap="round"/>
      {/* Canopy layers */}
      <ellipse cx="60" cy="60" rx="45" ry="40" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2.5"/>
      <ellipse cx="42" cy="50" rx="25" ry="22" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <ellipse cx="78" cy="48" rx="22" ry="20" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <ellipse cx="60" cy="38" rx="20" ry="18" fill="#6bb077" stroke="#1a3c2e" strokeWidth="2"/>
      {/* Highlights */}
      <ellipse cx="48" cy="45" rx="8" ry="6" fill="#9ccc9a" opacity="0.6"/>
      <ellipse cx="72" cy="42" rx="6" ry="5" fill="#9ccc9a" opacity="0.5"/>
    </svg>
  );
}

export function CartoonBush({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="25" cy="40" rx="20" ry="18" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <ellipse cx="55" cy="35" rx="25" ry="22" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
      <ellipse cx="80" cy="42" rx="18" ry="16" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <ellipse cx="50" cy="28" rx="15" ry="12" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
      <circle cx="30" cy="35" r="3" fill="#9ccc9a" opacity="0.7"/>
      <circle cx="65" cy="30" r="3" fill="#9ccc9a" opacity="0.7"/>
    </svg>
  );
}

export function CartoonCloud({ className = '', style, color = '#f8e8c8' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="35" rx="22" ry="18" fill={color} stroke="#d4c4a0" strokeWidth="2"/>
      <ellipse cx="55" cy="28" rx="28" ry="22" fill={color} stroke="#d4c4a0" strokeWidth="2"/>
      <ellipse cx="85" cy="35" rx="22" ry="18" fill={color} stroke="#d4c4a0" strokeWidth="2"/>
      <ellipse cx="55" cy="40" rx="35" ry="15" fill={color} stroke="#d4c4a0" strokeWidth="2"/>
      <ellipse cx="40" cy="28" rx="10" ry="6" fill="#fff" opacity="0.5"/>
    </svg>
  );
}

export function CartoonWater({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 20 Q25 12 50 20 T100 20 T150 20 T200 20 V40 H0 Z" fill="#4a8aa8" stroke="#2d6149" strokeWidth="2"/>
      <path d="M0 15 Q25 8 50 15 T100 15 T150 15 T200 15" fill="none" stroke="#6bb5d1" strokeWidth="2" opacity="0.7" className="anim-shimmer"/>
      <path d="M10 25 Q20 22 30 25" fill="none" stroke="#a8d4e8" strokeWidth="1.5" opacity="0.6"/>
      <path d="M80 28 Q90 25 100 28" fill="none" stroke="#a8d4e8" strokeWidth="1.5" opacity="0.6"/>
      <path d="M140 24 Q150 21 160 24" fill="none" stroke="#a8d4e8" strokeWidth="1.5" opacity="0.6"/>
    </svg>
  );
}

export function FloatingLeaf({ className = '', style, delay = '0s', color = '#6bb077' }: { className?: string; style?: React.CSSProperties; delay?: string; color?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className} style={{ ...style, animationDelay: delay }} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2 Q25 10 22 20 Q15 28 8 22 Q3 12 15 2 Z" fill={color} stroke="#1a3c2e" strokeWidth="1.5"/>
      <path d="M15 4 L15 24" fill="none" stroke="#1a3c2e" strokeWidth="1"/>
    </svg>
  );
}

export function CartoonMountain({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" className={className} style={style} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 100 L40 50 L60 70 L100 20 L140 60 L170 40 L200 100 Z" fill="#7a6353" stroke="#3d2e1f" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M30 60 L40 50 L50 58" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M90 30 L100 20 L110 28" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
      <path d="M160 48 L170 40 L178 48" fill="#a08770" stroke="#3d2e1f" strokeWidth="2"/>
    </svg>
  );
}

export function CartoonSun({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="22" fill="#f5a623" stroke="#d94c2a" strokeWidth="2.5"/>
      <circle cx="40" cy="40" r="16" fill="#ffd54a" opacity="0.8"/>
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 40 + Math.cos(angle) * 28;
        const y1 = 40 + Math.sin(angle) * 28;
        const x2 = 40 + Math.cos(angle) * 36;
        const y2 = 40 + Math.sin(angle) * 36;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f5a623" strokeWidth="3" strokeLinecap="round"/>;
      })}
    </svg>
  );
}

export function CartoonLilyPad({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 30" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="15" rx="25" ry="10" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="2"/>
      <path d="M30 15 L48 10" fill="none" stroke="#1a3c2e" strokeWidth="1.5"/>
      <circle cx="38" cy="12" r="4" fill="#ffd54a" stroke="#1a3c2e" strokeWidth="1.5"/>
      <circle cx="38" cy="12" r="2" fill="#fff" opacity="0.6"/>
    </svg>
  );
}

export function CartoonFern({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 100" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 100 Q38 70 42 40 Q40 20 45 5" fill="none" stroke="#5a8c4a" strokeWidth="3" strokeLinecap="round"/>
      {[...Array(6)].map((_, i) => {
        const y = 90 - i * 15;
        return (
          <g key={i}>
            <ellipse cx={30 - i * 2} cy={y} rx="12" ry="4" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1.5" transform={`rotate(-20 ${30 - i * 2} ${y})`}/>
            <ellipse cx={50 + i * 2} cy={y} rx="12" ry="4" fill="#5a8c4a" stroke="#1a3c2e" strokeWidth="1.5" transform={`rotate(20 ${50 + i * 2} ${y})`}/>
          </g>
        );
      })}
    </svg>
  );
}

export function CartoonMushroom({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 50 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M18 35 Q15 55 20 58 L30 58 Q35 55 32 35 Z" fill="#f5ead7" stroke="#3d2e1f" strokeWidth="2"/>
      <ellipse cx="25" cy="30" rx="22" ry="14" fill="#d94c2a" stroke="#3d2e1f" strokeWidth="2.5"/>
      <circle cx="18" cy="26" r="3" fill="#f5ead7" stroke="#3d2e1f" strokeWidth="1"/>
      <circle cx="28" cy="23" r="2.5" fill="#f5ead7" stroke="#3d2e1f" strokeWidth="1"/>
      <circle cx="33" cy="30" r="2" fill="#f5ead7" stroke="#3d2e1f" strokeWidth="1"/>
    </svg>
  );
}

export function CartoonDragonfly({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 50 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="25" cy="20" rx="3" ry="14" fill="#4a8aa8" stroke="#1a3c2e" strokeWidth="1.5"/>
      <ellipse cx="25" cy="10" rx="4" ry="5" fill="#6bb5d1" stroke="#1a3c2e" strokeWidth="1.5"/>
      <ellipse cx="15" cy="15" rx="12" ry="3" fill="#a8d4e8" opacity="0.7" stroke="#1a3c2e" strokeWidth="1"/>
      <ellipse cx="35" cy="15" rx="12" ry="3" fill="#a8d4e8" opacity="0.7" stroke="#1a3c2e" strokeWidth="1"/>
      <ellipse cx="15" cy="22" rx="10" ry="2.5" fill="#a8d4e8" opacity="0.5" stroke="#1a3c2e" strokeWidth="1"/>
      <ellipse cx="35" cy="22" rx="10" ry="2.5" fill="#a8d4e8" opacity="0.5" stroke="#1a3c2e" strokeWidth="1"/>
    </svg>
  );
}

export function ParticleDots({ count = 8, area = '200px' }: { count?: number; area?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ width: area, height: area }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="particle-dot absolute rounded-full"
          style={{
            left: `${(i * 37) % 90 + 5}%`,
            bottom: '0',
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            background: i % 2 === 0 ? '#ffd54a' : '#f5a623',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SmokeWisps({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="smoke-wisp absolute rounded-full bg-gray-400"
          style={{
            left: `${i * 15}px`,
            bottom: '0',
            width: '12px',
            height: '12px',
            opacity: 0.4,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
