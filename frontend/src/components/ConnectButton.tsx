import React, { useState } from 'react';
import { Wallet, LogOut, AlertTriangle } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';

export default function ConnectButton() {
  const {
    isConnected,
    shortAddress,
    balance,
    balanceSymbol,
    isCorrectNetwork,
    connectors,
    connect,
    isPending,
    disconnect,
  } = useWallet();

  const [showModal, setShowModal] = useState(false);

  const handleConnect = (connector: (typeof connectors)[number]) => {
    connect({ connector });
    setShowModal(false);
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-1.5">
        {!isCorrectNetwork && (
          <div
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-display font-semibold"
            style={{ background: '#f5d99c', color: '#d94c2a', border: '2px solid #d94c2a' }}
            title="Silakan ganti ke Polygon Amoy Testnet"
          >
            <AlertTriangle size={14} />
            Wrong Network
          </div>
        )}
        <div
          className="btn-cartoon flex items-center gap-1.5 px-5 py-2 text-sm font-display font-semibold"
          style={{ background: '#f5ead7', color: '#1a3c2e', border: '2.5px solid #1a3c2e' }}
        >
          <Wallet size={16} />
          <span>{shortAddress}</span>
          {balance && (
            <span className="text-xs opacity-70">
              {parseFloat(balance).toFixed(3)} {balanceSymbol}
            </span>
          )}
        </div>
        <button
          onClick={() => disconnect()}
          className="btn-cartoon p-2 rounded-lg transition-all hover:opacity-90"
          style={{ background: '#d94c2a', color: '#fff', border: '2.5px solid #1a3c2e' }}
          title="Disconnect"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  
  return (
    <>
      <button
          onClick={() => setShowModal(true)}
          className="btn-cartoon flex items-center gap-1.5 px-5 py-2 text-sm text-white"
          style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
        >
          <Wallet size={16} />
          Connect Wallet
        </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
            style={{ border: '3px solid #1a3c2e' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display font-bold text-xl mb-4" style={{ color: '#1a3c2e' }}>
              Pilih Wallet
            </h3>
            <div className="space-y-2">
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => handleConnect(connector)}
                  disabled={isPending}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-display font-semibold transition-all hover:opacity-80 disabled:opacity-50"
                  style={{ background: '#f5ead7', color: '#1a3c2e', border: '2px solid #1a3c2e' }}
                >
                  <span>{connector.name}</span>
                  {isPending && <span className="text-xs">Connecting...</span>}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full px-4 py-2 rounded-lg font-body text-sm"
              style={{ color: '#7a6353' }}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </>
  );
}