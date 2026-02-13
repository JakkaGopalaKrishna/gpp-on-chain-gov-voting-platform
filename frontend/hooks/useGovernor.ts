import { usePublicClient } from "wagmi";
import { GOVERNOR_ADDRESS, governorAbi } from "../lib/contracts";

export function useGovernor() {
  const publicClient = usePublicClient();

  const getProposalState = async (proposalId: bigint) => {
    return await publicClient.readContract({
      address: GOVERNOR_ADDRESS as `0x${string}`,
      abi: governorAbi,
      functionName: "state",
      args: [proposalId],
    });
  };

  return { getProposalState };
}
