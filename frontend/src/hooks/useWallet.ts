import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';

/**
 * Hook untuk mengelola koneksi wallet
 */
export function useWallet() {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const chainId = useChainId();

  const isCorrectNetwork = chainId === polygonAmoy.id;

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return {
    address,
    isConnected,
    connector,
    shortAddress,
    balance: balance?.formatted,
    balanceSymbol: balance?.symbol,
    chainId,
    isCorrectNetwork,
    connect,
    connectors,
    isPending,
    error,
    disconnect,
  };
}