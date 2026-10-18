import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Plus, Tag, Flame } from 'lucide-react';
import ConnectButton from './ConnectButton';

interface NavbarProps {
  onOpenRegisterModal: () => void;
  onOpenIssueModal: () => void;
  onOpenListModal: () => void;
  onOpenBuyModal: () => void;
  onOpenRetireModal: () => void;
}

export default function Navbar({ onOpenRegisterModal, onOpenIssueModal, onOpenListModal, onOpenBuyModal, onOpenRetireModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Belajar', href: '#comic' },
    { label: 'Topik', href: '#topics' },
    { label: 'Berita', href: '#news' },
    { label: 'Restorasi', href: '#restoration' },
    { label: 'Pasar', href: '#marketplace' },
    { label: 'Data', href: '#stats' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245, 234, 215, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 12px rgba(26, 60, 46, 0.1)' : 'none',
        borderBottom: scrolled ? '2px solid rgba(45, 97, 73, 0.15)' : '2px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8 anim-sway">
                <ellipse cx="20" cy="22" rx="16" ry="14" fill="#2d6149" stroke="#1a3c2e" strokeWidth="2"/>
                <ellipse cx="14" cy="17" rx="8" ry="7" fill="#4a8c5a" stroke="#1a3c2e" strokeWidth="1.5"/>
                <ellipse cx="26" cy="18" rx="7" ry="6" fill="#6bb077" stroke="#1a3c2e" strokeWidth="1.5"/>
                <path d="M20 22 L20 36" fill="none" stroke="#5c4632" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span
              className="font-display font-bold text-base transition-colors"
              style={{ color: '#1a3c2e' }}
            >
              GambutMark
            </span>
          </a>

          {/* Desktop nav - DIPERKECIL & MENGGUNAKAN LG: FLEX */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg font-body font-semibold text-xs transition-all hover:bg-[#2d6149]/10"
                style={{ color: '#1a3c2e' }}
              >
                {link.label}
              </a>
            ))}
            
            <button onClick={onOpenBuyModal} className="btn-cartoon ml-2 px-3 py-1.5 text-xs text-white flex items-center gap-1" style={{ background: '#d94c2a', border: '2px solid #1a3c2e' }}>
              <Leaf size={14} /> Beli
            </button>
            <button onClick={onOpenRegisterModal} className="btn-cartoon ml-1.5 px-3 py-1.5 text-xs text-white flex items-center gap-1" style={{ background: '#4a8c5a', border: '2px solid #1a3c2e' }}>
              <Plus size={14} /> Lahan
            </button>
            <button onClick={onOpenIssueModal} className="btn-cartoon ml-1.5 px-3 py-1.5 text-xs text-white flex items-center gap-1" style={{ background: '#f5a623', border: '2px solid #1a3c2e' }}>
              <Leaf size={14} /> Terbitkan
            </button>
            <button onClick={onOpenListModal} className="btn-cartoon ml-1.5 px-3 py-1.5 text-xs text-white flex items-center gap-1" style={{ background: '#4a8aa8', border: '2px solid #1a3c2e' }}>
              <Tag size={14} /> Jual
            </button>
            <button onClick={onOpenRetireModal} className="btn-cartoon ml-1.5 px-3 py-1.5 text-xs text-white flex items-center gap-1" style={{ background: '#5c4632', border: '2px solid #1a3c2e' }}>
              <Flame size={14} /> Retire
            </button>
            
            <div className="ml-2">
              <ConnectButton />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: '#1a3c2e' }}
            aria-label="Buka menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 right-0 border-t-2 border-[#2d6149]/15 shadow-lg"
          style={{ background: 'rgba(245, 234, 215, 0.98)', backdropFilter: 'blur(10px)' }}
        >
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg font-body font-semibold transition-all hover:bg-[#2d6149]/10"
                style={{ color: '#1a3c2e' }}
              >
                {link.label}
              </a>
            ))}
            
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#2d6149]/20">
              <button onClick={() => { setIsOpen(false); onOpenBuyModal(); }} className="btn-cartoon px-3 py-2 text-xs text-white flex items-center justify-center gap-1" style={{ background: '#d94c2a', border: '2px solid #1a3c2e' }}>
                <Leaf size={14} /> Beli Kredit
              </button>
              <button onClick={() => { setIsOpen(false); onOpenRegisterModal(); }} className="btn-cartoon px-3 py-2 text-xs text-white flex items-center justify-center gap-1" style={{ background: '#4a8c5a', border: '2px solid #1a3c2e' }}>
                <Plus size={14} /> Daftar Lahan
              </button>
              <button onClick={() => { setIsOpen(false); onOpenIssueModal(); }} className="btn-cartoon px-3 py-2 text-xs text-white flex items-center justify-center gap-1" style={{ background: '#f5a623', border: '2px solid #1a3c2e' }}>
                <Leaf size={14} /> Terbitkan
              </button>
              <button onClick={() => { setIsOpen(false); onOpenListModal(); }} className="btn-cartoon px-3 py-2 text-xs text-white flex items-center justify-center gap-1" style={{ background: '#4a8aa8', border: '2px solid #1a3c2e' }}>
                <Tag size={14} /> Jual Kredit
              </button>
              <button onClick={() => { setIsOpen(false); onOpenRetireModal(); }} className="btn-cartoon px-3 py-2 text-xs text-white flex items-center justify-center gap-1 col-span-2" style={{ background: '#5c4632', border: '2px solid #1a3c2e' }}>
                <Flame size={14} /> Retire Kredit
              </button>
            </div>
            
            <div className="mt-4 flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}