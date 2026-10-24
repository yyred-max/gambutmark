import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Wallet, AlertTriangle } from 'lucide-react';
import { useChainId, useSwitchChain } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';
import Modal from './Modal';
import { useWallet } from '@/hooks/useWallet';
import { useLandID } from '@/hooks/useLandID';

interface RegisterLandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterLandModal({ isOpen, onClose }: RegisterLandModalProps) {
  const { isConnected } = useWallet();
  const {
    registerNewLand,
    isRegisterPending,
    isRegisterConfirming,
    isRegisterSuccess,
    registerError,
    resetRegister,
  } = useLandID();

  // Network check
  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const isCorrectNetwork = chainId === polygonAmoy.id;

  const [formData, setFormData] = useState({
    name: '',
    province: '',
    regency: '',
    areaHectares: '',
    description: '',
    documentCID: '',
  });

  // Reset form saat modal ditutup
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        province: '',
        regency: '',
        areaHectares: '',
        description: '',
        documentCID: '',
      });
      resetRegister();
    }
  }, [isOpen, resetRegister]);

  // Auto close saat sukses (setelah 2.5 detik)
  useEffect(() => {
    if (isRegisterSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isRegisterSuccess, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    // Kalau network salah, minta switch dulu
    if (!isCorrectNetwork) {
      switchChain({ chainId: polygonAmoy.id });
      return;
    }

    registerNewLand(
      {
        name: formData.name,
        province: formData.province,
        regency: formData.regency,
        areaHectares: Number(formData.areaHectares),
        description: formData.description,
        documentCID: formData.documentCID || '',
      },
      {
        // ✅ FIX: Batas gas dinaikkan menjadi 1.000.000 agar tidak "out of gas"
        gas: BigInt(1000000),
        maxFeePerGas: BigInt(30000000000),       // 30 Gwei
        maxPriorityFeePerGas: BigInt(30000000000), // 30 Gwei
      }
    );
  };

  const handleSwitchNetwork = () => {
    switchChain({ chainId: polygonAmoy.id });
  };

  const isLoading = isRegisterPending || isRegisterConfirming || isSwitching;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Daftar Lahan Gambut"
      maxWidth="max-w-xl"
    >
      {/* Kalau wallet belum connect */}
      {!isConnected ? (
        <div className="text-center py-8">
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
            style={{ background: '#fee', border: '2.5px solid #d94c2a' }}
          >
            <Wallet size={32} style={{ color: '#d94c2a' }} />
          </div>
          <p
            className="font-display font-bold text-lg mb-2"
            style={{ color: '#1a3c2e' }}
          >
            Wallet Belum Terhubung
          </p>
          <p className="font-body text-sm" style={{ color: '#7a6353' }}>
            Silakan connect wallet dulu di navbar untuk mendaftarkan lahan.
          </p>
        </div>
      ) : isRegisterSuccess ? (
        /* Kalau sukses */
        <div className="text-center py-8">
          <CheckCircle2
            size={56}
            className="mx-auto mb-4"
            style={{ color: '#4a8c5a' }}
          />
          <h3
            className="font-display font-bold text-xl mb-2"
            style={{ color: '#1a3c2e' }}
          >
            Lahan Berhasil Didaftarkan! 🎉
          </h3>
          <p className="font-body text-sm" style={{ color: '#7a6353' }}>
            Land ID NFT sudah dikirim ke wallet Anda.
          </p>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Warning: Network Salah */}
          {!isCorrectNetwork && (
            <div
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{ background: '#fef3c7', border: '2px solid #f59e0b' }}
            >
              <AlertTriangle
                size={20}
                style={{ color: '#f59e0b', flexShrink: 0, marginTop: 2 }}
              />
              <div className="flex-1">
                <p
                  className="font-display font-semibold text-sm mb-1"
                  style={{ color: '#92400e' }}
                >
                  Network Salah
                </p>
                <p className="font-body text-xs mb-2" style={{ color: '#92400e' }}>
                  Wallet Anda terhubung ke network lain. Silakan ganti ke Polygon Amoy Testnet.
                </p>
                <button
                  type="button"
                  onClick={handleSwitchNetwork}
                  disabled={isSwitching}
                  className="px-3 py-1.5 rounded-lg font-display font-semibold text-xs text-white disabled:opacity-50"
                  style={{ background: '#f59e0b', border: '1.5px solid #92400e' }}
                >
                  {isSwitching ? 'Beralih Network...' : 'Ganti ke Polygon Amoy'}
                </button>
              </div>
            </div>
          )}

          {/* Nama Lahan */}
          <div>
            <label
              className="block font-display font-semibold text-sm mb-1.5"
              style={{ color: '#1a3c2e' }}
            >
              Nama Lahan *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Contoh: Lahan Gambut Kalimantan"
              className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
              style={{ borderColor: '#1a3c2e', background: '#fff' }}
            />
          </div>

          {/* Provinsi + Kabupaten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                className="block font-display font-semibold text-sm mb-1.5"
                style={{ color: '#1a3c2e' }}
              >
                Provinsi *
              </label>
              <input
                type="text"
                required
                value={formData.province}
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
                placeholder="Kalimantan Tengah"
                className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
                style={{ borderColor: '#1a3c2e', background: '#fff' }}
              />
            </div>
            <div>
              <label
                className="block font-display font-semibold text-sm mb-1.5"
                style={{ color: '#1a3c2e' }}
              >
                Kabupaten
              </label>
              <input
                type="text"
                value={formData.regency}
                onChange={(e) =>
                  setFormData({ ...formData, regency: e.target.value })
                }
                placeholder="Palangka Raya"
                className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
                style={{ borderColor: '#1a3c2e', background: '#fff' }}
              />
            </div>
          </div>

          {/* Luas */}
          <div>
            <label
              className="block font-display font-semibold text-sm mb-1.5"
              style={{ color: '#1a3c2e' }}
            >
              Luas (hektar) *
            </label>
            <input
              type="number"
              required
              min="1"
              value={formData.areaHectares}
              onChange={(e) =>
                setFormData({ ...formData, areaHectares: e.target.value })
              }
              placeholder="100"
              className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none"
              style={{ borderColor: '#1a3c2e', background: '#fff' }}
            />
            <p
              className="font-body text-xs mt-1"
              style={{ color: '#7a6353' }}
            >
              💡 Maks kredit per vintage = luas × 10 ton CO₂e
            </p>
          </div>

          {/* Deskripsi */}
          <div>
            <label
              className="block font-display font-semibold text-sm mb-1.5"
              style={{ color: '#1a3c2e' }}
            >
              Deskripsi
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Deskripsi singkat tentang lahan dan kegiatan restorasi..."
              className="w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm focus:outline-none resize-none"
              style={{ borderColor: '#1a3c2e', background: '#fff' }}
            />
          </div>

          {/* Error */}
          {registerError && (
            <div
              className="flex items-start gap-2 p-3 rounded-lg"
              style={{ background: '#fee', border: '1px solid #d94c2a' }}
            >
              <AlertCircle
                size={18}
                style={{ color: '#d94c2a', flexShrink: 0, marginTop: 2 }}
              />
              <p
                className="font-body text-xs break-words"
                style={{ color: '#d94c2a' }}
              >
                {registerError.message.slice(0, 200)}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-lg font-display font-semibold text-sm disabled:opacity-50 transition-all hover:opacity-90"
              style={{
                background: '#f5ead7',
                color: '#1a3c2e',
                border: '2.5px solid #1a3c2e',
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-lg font-display font-semibold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:opacity-90"
              style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {isSwitching
                    ? 'Beralih Network...'
                    : isRegisterPending
                    ? 'Menunggu Wallet...'
                    : 'Memproses...'}
                </>
              ) : !isCorrectNetwork ? (
                'Ganti Network Dulu'
              ) : (
                'Daftarkan Lahan'
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}