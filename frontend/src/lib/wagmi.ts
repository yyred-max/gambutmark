import { http, createConfig } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';
import { injected, metaMask } from 'wagmi/connectors';

/**
 * Wagmi config untuk GambutMark
 * Support: MetaMask, Rabby, dan wallet injected lainnya
 * Network: Polygon Amoy Testnet
 */
export const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [polygonAmoy.id]: http('https://polygon-amoy-bor-rpc.publicnode.com'),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}