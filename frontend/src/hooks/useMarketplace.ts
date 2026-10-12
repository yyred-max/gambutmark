import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACTS } from '@/lib/contracts';

/**
 * Hook untuk interact dengan Marketplace contract
 */
export function useMarketplace() {
  // === READ: Platform fee ===
  const { data: platformFeeBps } = useReadContract({
    address: CONTRACTS.Marketplace.address,
    abi: CONTRACTS.Marketplace.abi,
    functionName: 'platformFeeBps',
  });

  // === WRITE: List credit ===
  const {
    writeContract: writeList,
    data: listTxHash,
    isPending: isListPending,
    error: listError,
  } = useWriteContract();

  const {
    isLoading: isListConfirming,
    isSuccess: isListSuccess,
  } = useWaitForTransactionReceipt({ hash: listTxHash });

  const listCredit = (creditId: number, priceInEther: string) => {
    writeList({
      address: CONTRACTS.Marketplace.address,
      abi: CONTRACTS.Marketplace.abi,
      functionName: 'listCredit',
      args: [BigInt(creditId), parseEther(priceInEther)],
    });
  };

  // === WRITE: Buy credit ===
  const {
    writeContract: writeBuy,
    data: buyTxHash,
    isPending: isBuyPending,
    error: buyError,
  } = useWriteContract();

  const {
    isLoading: isBuyConfirming,
    isSuccess: isBuySuccess,
  } = useWaitForTransactionReceipt({ hash: buyTxHash });

  const buyCredit = (creditId: number, priceInEther: string) => {
    writeBuy({
      address: CONTRACTS.Marketplace.address,
      abi: CONTRACTS.Marketplace.abi,
      functionName: 'buyCredit',
      args: [BigInt(creditId)],
      value: parseEther(priceInEther),
    });
  };

  // === WRITE: Cancel listing ===
  const {
    writeContract: writeCancel,
    data: cancelTxHash,
    isPending: isCancelPending,
    error: cancelError,
  } = useWriteContract();

  const {
    isLoading: isCancelConfirming,
    isSuccess: isCancelSuccess,
  } = useWaitForTransactionReceipt({ hash: cancelTxHash });

  const cancelListing = (creditId: number) => {
    writeCancel({
      address: CONTRACTS.Marketplace.address,
      abi: CONTRACTS.Marketplace.abi,
      functionName: 'cancelListing',
      args: [BigInt(creditId)],
    });
  };

  return {
    // Read
    platformFeeBps: platformFeeBps ? Number(platformFeeBps) : 0,
    // Write: list
    listCredit,
    isListPending,
    isListConfirming,
    isListSuccess,
    listError,
    listTxHash,
    // Write: buy
    buyCredit,
    isBuyPending,
    isBuyConfirming,
    isBuySuccess,
    buyError,
    buyTxHash,
    // Write: cancel
    cancelListing,
    isCancelPending,
    isCancelConfirming,
    isCancelSuccess,
    cancelError,
    cancelTxHash,
  };
}

/**
 * Hook untuk baca listing satu credit
 */
export function useListing(creditId: number | undefined) {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.Marketplace.address,
    abi: CONTRACTS.Marketplace.abi,
    functionName: 'listings',
    args: creditId !== undefined ? [BigInt(creditId)] : undefined,
    query: {
      enabled: creditId !== undefined,
    },
  });

  const { data: isListed } = useReadContract({
    address: CONTRACTS.Marketplace.address,
    abi: CONTRACTS.Marketplace.abi,
    functionName: 'isListed',
    args: creditId !== undefined ? [BigInt(creditId)] : undefined,
    query: {
      enabled: creditId !== undefined,
    },
  });

  return {
    listing: data,
    isListed: isListed ?? false,
    isLoading,
    refetch,
  };
}