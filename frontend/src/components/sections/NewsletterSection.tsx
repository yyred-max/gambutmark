import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ExplorerCharacter, HornbillCharacter } from '@/components/illustrations/Characters';
import { FloatingLeaf, CartoonCloud, CartoonTree, CartoonBush } from '@/components/illustrations/Environment';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Mohon masukkan alamat email yang valid.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setErrorMessage('Anda sudah berlangganan!');
        } else {
          setStatus('error');
          setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
        }
        return;
      }
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Kesalahan jaringan. Silakan coba lagi.');
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f5ead7 0%, #f0e0c4 50%, #e8d4a8 100%)' }}>
      {/* Illustrated forest environment background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clouds */}
        <div className="absolute top-8 left-0 right-0">
          <div className="cloud-drift" style={{ animationDuration: '55s' }}>
            <CartoonCloud className="w-28 opacity-50" />
          </div>
        </div>
        <div className="absolute top-16 left-0 right-0">
          <div className="cloud-drift-slow" style={{ animationDuration: '70s', animationDelay: '20s' }}>
            <CartoonCloud className="w-20 opacity-40" color="#fff" />
          </div>
        </div>

        {/* Trees on the sides */}
        <div className="absolute bottom-0 left-0 anim-sway" style={{ animationDelay: '0.5s' }}>
          <CartoonTree className="w-32 h-auto opacity-70" />
        </div>
        <div className="absolute bottom-0 right-0 anim-sway" style={{ animationDelay: '1s' }}>
          <CartoonTree className="w-32 h-auto opacity-70" />
        </div>
        <div className="absolute bottom-0 left-20 anim-sway" style={{ animationDelay: '1.5s' }}>
          <CartoonTree className="w-24 h-auto opacity-50" />
        </div>
        <div className="absolute bottom-0 right-20 anim-sway" style={{ animationDelay: '0.8s' }}>
          <CartoonTree className="w-24 h-auto opacity-50" />
        </div>

        {/* Bushes */}
        <div className="absolute bottom-2 left-10">
          <CartoonBush className="w-28 h-auto opacity-60" />
        </div>
        <div className="absolute bottom-2 right-10">
          <CartoonBush className="w-28 h-auto opacity-60" />
        </div>

        {/* Floating leaves */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="leaf-float absolute"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${20 + (i * 12) % 50}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${7 + (i % 3)}s`,
            }}
          >
            <FloatingLeaf className="w-4 h-4" color={i % 2 === 0 ? '#6bb077' : '#f5a623'} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">
        {/* Mascot characters */}
        <div className="relative flex items-end justify-center gap-4 mb-6 h-32">
          <div className="anim-idle">
            <ExplorerCharacter className="w-20 h-auto" />
          </div>
          <div className="anim-bob" style={{ animationDelay: '0.5s' }}>
            <HornbillCharacter className="w-24 h-auto" />
          </div>
        </div>

        {/* Speech bubble */}
        <div className="speech-bubble inline-block mb-6 mx-auto">
          <p className="font-display font-semibold text-base" style={{ color: '#1a3c2e' }}>
            Bergabunglah dengan patroli hutan! Dapatkan berita gambut setiap bulan.
          </p>
        </div>

        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3" style={{ color: '#1a3c2e' }}>
          Tetap Terhubung
        </h2>
        <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: '#234d3a' }}>
          Dapatkan berita gambut terbaru, cerita restorasi, dan pembaruan pasar karbon langsung ke kotak masuk Anda.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div
            className="comic-panel p-6 max-w-md mx-auto scale-in"
            style={{ borderColor: '#4a8c5a', background: '#fff' }}
          >
            <CheckCircle2 size={40} className="mx-auto mb-3" style={{ color: '#4a8c5a' }} />
            <h3 className="font-display font-bold text-xl mb-1" style={{ color: '#1a3c2e' }}>
              Anda berlangganan!
            </h3>
            <p className="font-body text-sm" style={{ color: '#5c4a3a' }}>
              Selamat datang di patroli hutan. Kami akan segera menghubungi Anda.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-cartoon mt-4 px-5 py-2 font-display font-semibold text-sm"
              style={{ background: '#f5ead7', color: '#1a3c2e', border: '2px solid #1a3c2e' }}
            >
              Langganan email lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: '#7a6353' }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="email@anda.com"
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2.5 font-body text-base focus:outline-none transition-all"
                  style={{
                    borderColor: status === 'error' ? '#d94c2a' : '#1a3c2e',
                    background: '#fff',
                    color: '#1a3c2e',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-cartoon px-6 py-3 font-display font-semibold text-white flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ background: '#d94c2a', border: '2.5px solid #1a3c2e' }}
              >
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> Berlangganan...</>
                ) : (
                  'Berlangganan'
                )}
              </button>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 mt-3 font-body text-sm scale-in" style={{ color: '#d94c2a' }}>
                <AlertCircle size={16} />
                {errorMessage}
              </div>
            )}
          </form>
        )}

        <p className="font-body text-xs mt-4" style={{ color: '#7a6353' }}>
          Kami menghormati privasi Anda. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  );
}
