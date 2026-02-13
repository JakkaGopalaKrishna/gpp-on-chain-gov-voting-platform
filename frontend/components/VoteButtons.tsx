"use client";

import { useWriteContract } from "wagmi";
import { GOVERNOR_ADDRESS, governorAbi } from "../lib/contracts";

export default function VoteButtons({ proposalId }: { proposalId: bigint }) {
  const { writeContract } = useWriteContract();

  const castVote = (support: number) => {
    writeContract({
      address: GOVERNOR_ADDRESS as `0x${string}`,
      abi: governorAbi,
      functionName: "castVote",
      args: [proposalId, support],
    });
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        data-testid="vote-for-button"
        onClick={() => castVote(1)}
        className="bg-green-600 px-4 py-2 rounded text-white"
      >
        For
      </button>

      <button
        data-testid="vote-against-button"
        onClick={() => castVote(0)}
        className="bg-red-600 px-4 py-2 rounded text-white"
      >
        Against
      </button>

      <button
        data-testid="vote-abstain-button"
        onClick={() => castVote(2)}
        className="bg-gray-600 px-4 py-2 rounded text-white"
      >
        Abstain
      </button>
    </div>
  );
}
