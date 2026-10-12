import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';

/**
 * Hook untuk interact dengan CarbonCredit contract
 */
export function useCarbonCredit() {
  // === READ: Stats ===
  const { data: totalCredits, refetch: refetchTotalCredits } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'totalCredits',
  });

  const { data: totalRetired, refetch: refetchTotalRetired } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'totalRetired',
  });

  // === WRITE: Issue credit ===
  const {
    writeContract: writeIssue,
    data: issueTxHash,
    isPending: isIssuePending,
    error: issueError,
  } = useWriteContract();

  const {
    isLoading: isIssueConfirming,
    isSuccess: isIssueSuccess,
  } = useWaitForTransactionReceipt({ hash: issueTxHash });

  const issueNewCredit = (params: {
    landId: number;
    vintage: number;
    amount: number;
    metadataCID: string;
  }) => {
    writeIssue({
      address: CONTRACTS.CarbonCredit.address,
      abi: CONTRACTS.CarbonCredit.abi,
      functionName: 'issueCredit',
      args: [
        BigInt(params.landId),
        BigInt(params.vintage),
        BigInt(params.amount),
        params.metadataCID,
      ],
    });
  };

  // === WRITE: Retire credit ===
  const {
    writeContract: writeRetire,
    data: retireTxHash,
    isPending: isRetirePending,
    error: retireError,
  } = useWriteContract();

  const {
    isLoading: isRetireConfirming,
    isSuccess: isRetireSuccess,
  } = useWaitForTransactionReceipt({ hash: retireTxHash });

  const retireCredit = (creditId: number) => {
    writeRetire({
      address: CONTRACTS.CarbonCredit.address,
      abi: CONTRACTS.CarbonCredit.abi,
      functionName: 'retireCredit',
      args: [BigInt(creditId)],
    });
  };

  return {
    // Read
    totalCredits: totalCredits ? Number(totalCredits) : 0,
    totalRetired: totalRetired ? Number(totalRetired) : 0,
    refetchTotalCredits,
    refetchTotalRetired,
    // Write: issue
    issueNewCredit,
    isIssuePending,
    isIssueConfirming,
    isIssueSuccess,
    issueError,
    issueTxHash,
    // Write: retire
    retireCredit,
    isRetirePending,
    isRetireConfirming,
    isRetireSuccess,
    retireError,
    retireTxHash,
  };
}

/**
 * Hook untuk baca data satu credit
 */
export function useCreditData(creditId: number | undefined) {
  const { data, isLoading, refetch } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'getCreditData',
    args: creditId !== undefined ? [BigInt(creditId)] : undefined,
    query: {
      enabled: creditId !== undefined,
    },
  });

  const { data: isActive } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'isActive',
    args: creditId !== undefined ? [BigInt(creditId)] : undefined,
    query: {
      enabled: creditId !== undefined,
    },
  });

  return {
    creditData: data,
    isActive: isActive ?? false,
    isLoading,
    refetch,
  };
}