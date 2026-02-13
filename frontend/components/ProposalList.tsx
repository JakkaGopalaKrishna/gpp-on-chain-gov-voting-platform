"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useGovernor } from "../hooks/useGovernor";

export default function ProposalList() {
  const [proposals, setProposals] = useState<any[]>([]);
  const { getProposalState } = useGovernor();

  useEffect(() => {
    async function fetchProposals() {
      // For demo, mock proposal IDs
      const ids = [1n, 2n];

      const data = await Promise.all(
        ids.map(async (id) => {
          const state = await getProposalState(id);
          return { id, state };
        })
      );

      setProposals(data);
    }

    fetchProposals();
  }, []);

  return (
    <div className="space-y-4 mt-6">
      {proposals.map((proposal) => (
        <div
          key={proposal.id.toString()}
          data-testid="proposal-list-item"
          className="p-4 border rounded"
        >
          <Link href={`/proposal/${proposal.id}`}>
            <h3>Proposal #{proposal.id.toString()}</h3>
          </Link>
          <p>Status: {proposal.state}</p>
        </div>
      ))}
    </div>
  );
}
