import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * Base Modal Component
 * Modal muncul di TENGAH layar dengan overlay gelap di belakangnya.
 * Tutup dengan: klik overlay, klik X, atau tekan ESC.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-xl',
}: ModalProps) {
  // Tutup dengan ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll saat modal terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
      style={{
        background: 'rgba(26, 60, 46, 0.7)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto relative my-8`}
        style={{
          border: '3px solid #1a3c2e',
          boxShadow: '8px 8px 0 rgba(26, 60, 46, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b-2"
          style={{ background: '#f5ead7', borderColor: '#1a3c2e' }}
        >
          <h2
            className="font-display font-bold text-xl"
            style={{ color: '#1a3c2e' }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg transition-all hover:bg-[#1a3c2e]/10"
            style={{ color: '#1a3c2e' }}
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}