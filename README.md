# GPP On-Chain Governance Voting Platform

A fully containerized decentralized on-chain governance platform built
using Solidity, Hardhat, OpenZeppelin Governor, Next.js, Wagmi, and
Docker.

------------------------------------------------------------------------

## 🚀 Project Overview

This project implements a DAO-style governance system with:

-   ERC20 governance token (ERC20Votes)
-   Proposal lifecycle management
-   Delegation of voting power
-   Snapshot-based voting power
-   Standard (1 Token = 1 Vote) voting
-   Quadratic voting mechanism
-   Quorum enforcement
-   Fully containerized development environment

------------------------------------------------------------------------

## 🧱 Tech Stack

### Smart Contracts

-   Solidity \^0.8.20
-   OpenZeppelin Contracts
-   Hardhat
-   TypeScript

### Frontend

-   Next.js 14
-   React 18
-   Wagmi v2
-   Viem
-   Tailwind CSS
-   Recharts

### DevOps

-   Docker
-   Docker Compose

------------------------------------------------------------------------

## 📁 Project Structure

    contracts/         -> Solidity smart contracts
    scripts/           -> Deployment scripts
    test/              -> Hardhat test suite
    frontend/          -> Next.js frontend application
    Dockerfile.*       -> Container configurations
    docker-compose.yml -> Orchestration file
    .env.example       -> Environment variables template

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

    git clone <your-repo-url>
    cd gpp-on-chain-gov-voting-platform

### 2️⃣ Install Dependencies

    npm install
    cd frontend
    npm install

------------------------------------------------------------------------

## 🧪 Run Hardhat Tests

    npx hardhat test

------------------------------------------------------------------------

## 🚀 Run Locally (Without Docker)

### Start Hardhat Node

    npx hardhat node

### Deploy Contracts

    npx hardhat run scripts/deploy.ts --network localhost

### Start Frontend

    cd frontend
    npm run dev

------------------------------------------------------------------------

## 🐳 Run with Docker

    docker-compose up --build

Services: - Hardhat node: http://localhost:8545 - Frontend:
http://localhost:3000

------------------------------------------------------------------------

## 🗳 Governance Features

### GovernanceToken.sol

-   ERC20Votes extension
-   Snapshot voting power
-   Delegation support

### MyGovernor.sol

-   Proposal threshold enforcement
-   Configurable voting delay & period
-   Standard voting mechanism
-   Quadratic voting mechanism
-   Quorum enforcement
-   Governor lifecycle management

------------------------------------------------------------------------

## 📊 Voting Mechanisms

### Standard Voting

1 Token = 1 Vote

### Quadratic Voting

Voting Power = sqrt(tokens committed)\
Cost Formula = votes²

Example: 9 votes cost 81 tokens.

------------------------------------------------------------------------

## 🛡 Security Considerations

-   Snapshot voting prevents token manipulation
-   Quorum enforcement
-   Proposal threshold
-   OpenZeppelin audited contracts
-   Checks-Effects-Interactions pattern

------------------------------------------------------------------------

## 📌 Core Requirements Covered

-   ERC20Votes token implementation
-   Delegation functionality
-   Snapshot-based voting power
-   Proposal lifecycle management
-   Standard and quadratic voting
-   Quorum enforcement
-   Wallet connection with data-testid attributes
-   Proposal listing
-   Voting interface buttons
-   Full Docker containerization

------------------------------------------------------------------------

## 👨‍💻 Author

J.G. Krishna

------------------------------------------------------------------------

## 📜 License

MIT
