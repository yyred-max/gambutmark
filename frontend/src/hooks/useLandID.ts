import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';

/**
 * Hook untuk interact dengan LandID contract
 */
export function useLandID() {
  // === READ: Total lands ===
  const { data: totalLands, refetch: refetchTotalLands } = useReadContract({
    address: CONTRACTS.LandID.address,
    abi: CONTRACTS.LandID.abi,
    functionName: 'totalLands',
  });

  // === WRITE: Register land ===
  const {
    writeContract: writeRegister,
    data: registerTxHash,
    isPending: isRegisterPending,
    error: registerError,
    reset: resetRegister,
  } = useWriteContract();

  const {
    isLoading: isRegisterConfirming,
    isSuccess: isRegisterSuccess,
  } = useWaitForTransactionReceipt({ hash: registerTxHash });

  const registerNewLand = (params: {
    name: string;
    province: string;
    regency: string;
    areaHectares: number;
    description: string;
    documentCID: string;
  }, txOptions?: any) => { // <-- Tambahan txOptions
    writeRegister({
      address: CONTRACTS.LandID.address,
      abi: CONTRACTS.LandID.abi,
      functionName: 'registerLand',
      args: [
        params.name,
        params.province,
        params.regency,
        BigInt(params.areaHectares),
        params.description,
        params.documentCID,
      ],
      ...txOptions, // <-- Masukkan opsi gas (maxFeePerGas, dll) di sini
    });
  };

  return {
    // Read
    totalLands: totalLands ? Number(totalLands) : 0,
    refetchTotalLands,
    // Write
    registerNewLand,
    isRegisterPending,
    isRegisterConfirming,
    isRegisterSuccess,
    registerError,
    registerTxHash,
    resetRegister,
  };
}

/**
 * Hook untuk baca data satu land
 */
export function useLandData(landId: number | undefined) {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.LandID.address,
    abi: CONTRACTS.LandID.abi,
    functionName: 'getLandData',
    args: landId !== undefined ? [BigInt(landId)] : undefined,
    query: {
      enabled: landId !== undefined,
    },
  });

  return {
    landData: data,
    isLoading,
    refetch,
  };
}