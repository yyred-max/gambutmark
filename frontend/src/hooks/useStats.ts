import { useReadContract } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';

/**
 * Hook untuk baca statistik global dari smart contract
 * Dipakai di Dashboard Stats
 */
export function useStats() {
  // Total lahan terdaftar
  const { data: totalLands, isLoading: isLoadingLands } = useReadContract({
    address: CONTRACTS.LandID.address,
    abi: CONTRACTS.LandID.abi,
    functionName: 'totalLands',
  });

  // Total kredit yang pernah diterbitkan
  const { data: totalCredits, isLoading: isLoadingCredits } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'totalCredits',
  });

  // Total kredit yang sudah di-retire
  const { data: totalRetired, isLoading: isLoadingRetired } = useReadContract({
    address: CONTRACTS.CarbonCredit.address,
    abi: CONTRACTS.CarbonCredit.abi,
    functionName: 'totalRetired',
  });

  const lands = totalLands ? Number(totalLands) : 0;
  const credits = totalCredits ? Number(totalCredits) : 0;
  const retired = totalRetired ? Number(totalRetired) : 0;

  return {
    totalLands: lands,
    totalCredits: credits,
    totalRetired: retired,
    activeCredits: credits - retired,
    isLoading: isLoadingLands || isLoadingCredits || isLoadingRetired,
  };
}