import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, AlertCircle, ShoppingCart, AlertTriangle } from 'lucide-react';
import { useChainId, useSwitchChain } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';
import Modal from './Modal';
import { useWallet } from '@/hooks/useWallet';
import { useMarketplace } from '@/hooks/useMarketplace';

interface BuyCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuyCreditModal({ isOpen, onClose }: BuyCreditModalProps) {
  const { isConnected } = useWallet();
  const {
    buyCredit,
    isBuyPending,
    isBuyConfirming,
    isBuySuccess,
    buyError,
  } = useMarketplace();

  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const isCorrectNetwork = chainId === polygonAmoy.id;

  const [formData, setFormData] = useState({
    creditId: '',
    price: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setFormData({ creditId: '', price: '' });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isBuySuccess) {
      const timer = setTimeout(() => onClose(), 2500);
      return () => clearTimeout(timer);
    }
  }, [isBuySuccess, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;
    if (!isCorrectNetwork) {
      switchChain({ chainId: polygonAmoy.id });
      return;
    }

    buyCredit(Number(formData.creditId), formData.price);
  };

  const isLoading = isBuyPending || isBuyConfirming || isSwitching;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Beli Kredit Karbon" maxWidth="max-w-lg">
      {!isConnected ? (
        <div className="text-center py-6">
          <ShoppingCart size={40} className="mx-auto mb-3" style={{ color: '#d94c2a' }} />
          <p className="font-display font-bold text-lg mb-2">Wallet Belum Terhubung</p>
          <p className="font-body text-sm" style={{ color: '#7a6353' }}>
            Silakan connect wallet dulu di navbar.
          </p>
        </div>
      ) : isBuySuccess ? (
        <div className="text-center py-6">
          <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: '#4a8c5a' }} />
          <h3 className="font-display font-bold text-xl mb-2">Pembelian Berhasil! 🎉</h3>
          <p className="font-body text-sm" style={{ color: '#7a6353' }}>
            Kredit kini menjadi milik Anda.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isCorrectNetwork && (
            <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: '#fef3c7', border: '2px solid #f59e0b' }}>
              <AlertTriangle size={20} style={{ color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
              <div className="flex-1">
                <p className="font-display font-semibold text-sm mb-1" style={{ color: '#92400e' }}>Network Salah</p>
                <button
                  type="button"
                  onClick={() => switchChain({ chainId: polygonAmoy.id })}
                  disabled={isSwitching}
                  className="px-3 py-1.5 rounded-lg font-display font-semibold text-xs text-white disabled:opacity-50"
                  style={{ background: '#f59e0b' }}
                >
                  {isSwitching ? 'Beralih...' : 'Ganti ke Amoy'}
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block font-display font-semibold text-sm mb-1.5">ID Kredit (Credit ID) *</label>
            <input
              type="number"
              required
              min="1"
              value={formData.creditId}
              onChange={(e) => setFormData({ ...formData, creditId: e.target.value })}
              placeholder="Contoh: 1"
              className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
              style={{ borderColor: '#1a3c2e' }}
            />
          </div>

          <div>
            <label className="block font-display font-semibold text-sm mb-1.5">Harga (POL) *</label>
            <input
              type="number"
              step="0.0001"
              required
              min="0.0001"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="Contoh: 0.01"
              className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
              style={{ borderColor: '#1a3c2e' }}
            />
            <p className="font-body text-xs mt-1" style={{ color: '#7a6353' }}>
              ⚠️ Harga harus sama persis dengan yang dipasang oleh penjual.
            </p>
          </div>

          {buyError && (
            <div className="flex items-start gap-2 p-3 rounded-lg" style={{ background: '#fee', border: '1px solid #d94c2a' }}>
              <AlertCircle size={18} style={{ color: '#d94c2a', flexShrink: 0, marginTop: 2 }} />
              <p className="font-body text-xs break-words" style={{ color: '#d94c2a' }}>
                {buyError.message.slice(0, 150)}
              </p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-lg font-display font-semibold text-sm disabled:opacity-50"
              style={{ background: '#f5ead7', color: '#1a3c2e', border: '2.5px solid #1a3c2e' }}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-lg font-display font-semibold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
            >
              {isLoading ? (
                <><Loader2 size={16} className="animate-spin" /> {isBuyPending ? 'Menunggu Wallet...' : 'Memproses...'}</>
              ) : (
                'Beli Kredit'
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}