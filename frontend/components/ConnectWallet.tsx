"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        <button
          data-testid="connect-wallet-button"
          onClick={() => connect({ connector: connectors[0] })}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <span data-testid="user-address">{address}</span>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
    </div>
  );
}
