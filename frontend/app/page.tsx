import ConnectWallet from "../components/ConnectWallet";
import ProposalList from "../components/ProposalList";

export default function Home() {
  return (
    <main className="p-6">
      <ConnectWallet />
      <ProposalList />
    </main>
  );
}
