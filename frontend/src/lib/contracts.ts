import LandIDABI from './abis/LandID.json';
import CarbonCreditABI from './abis/CarbonCredit.json';
import MarketplaceABI from './abis/Marketplace.json';

/**
 * Contract addresses di Polygon Amoy Testnet
 * Deployed: 2026-10-12
 */
export const CONTRACTS = {
  LandID: {
    address: '0x458D4f242DF72bF19954Cd05fcB68C5541fd1577' as `0x${string}`,
    abi: LandIDABI.abi,
  },
  CarbonCredit: {
    address: '0xF218C00229C8B232718188E66aDe3777b4710079' as `0x${string}`,
    abi: CarbonCreditABI.abi,
  },
  Marketplace: {
    address: '0xdc63F83A06bdFFAF6b7b3a85C806FeF4c21a26Ce' as `0x${string}`,
    abi: MarketplaceABI.abi,
  },
} as const;

/**
 * Network info
 */
export const NETWORK = {
  name: 'Polygon Amoy Testnet',
  chainId: 80002,
  rpcUrl: 'https://polygon-amoy-bor-rpc.publicnode.com',
  explorer: 'https://amoy.polygonscan.com',
} as const;