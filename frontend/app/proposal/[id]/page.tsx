"use client";

import { useParams } from "next/navigation";
import VoteButtons from "../../../components/VoteButtons";

export default function ProposalPage() {
  const params = useParams();
  const proposalId = BigInt(params.id as string);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Proposal #{proposalId.toString()}
      </h1>

      <VoteButtons proposalId={proposalId} />
    </div>
  );
}
