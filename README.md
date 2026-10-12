# 🌱 GambutMark

### Transparent Peatland Carbon Marketplace for Indonesia

**GambutMark** is a blockchain-based marketplace designed to improve transparency, traceability, and accountability in Indonesia's peatland carbon market.

The platform connects carbon credits to their originating peatland plots through on-chain records, helping prevent duplicate credit issuance and enabling transparent carbon credit trading.

> **Built for the IEEE ClimateChain Global Hackathon 2026**  
> Track: Carbon Markets & Emissions Transparency

---

## 🌍 The Problem

Peatland restoration and conservation play an important role in mitigating climate change. However, carbon markets need reliable mechanisms to establish the origin, ownership, and lifecycle of carbon credits.

Key challenges include:

- **Limited traceability:** Difficulty verifying the connection between carbon credits and their originating land.
- **Double counting:** The risk of issuing or claiming the same carbon reduction more than once.
- **Lack of transparency:** Limited visibility into credit ownership, transfers, and retirement history.
- **Trust and accountability:** The need for auditable records throughout the carbon credit lifecycle.

## 💡 Our Solution

GambutMark uses blockchain technology and NFTs to establish a transparent record of peatland identities and carbon credits.

Each registered peatland plot receives a unique digital identity, while carbon credits are linked to their originating land. Smart contracts manage credit issuance, ownership transfers, marketplace transactions, and retirement records.

Our goal is to make carbon credit transactions easier to trace and independently audit.

## ✨ Key Features

### 🗺️ Digital Land ID
Assign a unique NFT-based digital identity to each registered peatland plot, providing an on-chain reference for its identity and associated records.

### 🌿 Land-Bound Carbon Credits
Represent carbon credits as NFTs linked to their originating land ID, making their recorded provenance traceable on-chain.

### 🛡️ Anti-Double-Counting Mechanism
Use smart contract validation to prevent duplicate issuance against the same registered issuance record or claim identifier.

### 🔍 Full Traceability
Record relevant issuance, ownership transfer, marketplace, and retirement events on-chain for public verification.

### 🛒 Carbon Credit Marketplace
Enable users to list, purchase, and transfer eligible carbon credits through smart contract-powered transactions.

### ♻️ Credit Retirement
Allow credit holders to permanently retire eligible credits for offsetting claims, preventing retired credits from being transferred or reused within the platform.

> **Important:** Blockchain records support traceability and transaction integrity, but they do not independently prove real-world carbon reductions. Environmental claims require reliable monitoring, reporting, verification (MRV), and appropriate independent validation.

## 🏗️ Technology Stack

| Layer | Technology |
|---|---|
| Smart Contracts | Solidity 0.8.24 |
| Contract Libraries | OpenZeppelin Contracts v5 |
| Blockchain | Polygon Amoy Testnet |
| Frontend Framework | Next.js 14 |
| Programming Language | TypeScript |
| Styling | Tailwind CSS |
| Web3 Integration | wagmi + viem |
| Metadata & File Storage | IPFS |
| Frontend Deployment | Vercel |
| Development Environment | Hardhat |

## 🏛️ System Architecture

```text
                ┌──────────────────────┐
                │        User          │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │   Next.js Frontend   │
                │ TypeScript + Tailwind│
                └──────────┬───────────┘
                           │
                    wagmi + viem
                           │
                           ▼
                ┌──────────────────────┐
                │  Polygon Amoy        │
                │  Smart Contracts     │
                ├──────────────────────┤
                │ LandID               │
                │ CarbonCredit         │
                │ Marketplace          │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │   IPFS Metadata      │
                │ Documents & Records  │
                └──────────────────────┘
```

The blockchain stores contract state and transaction records, while IPFS can store supporting metadata and documents. The contracts should reference content using content identifiers (CIDs).

## 📁 Project Structure

```text
gambutmark/
├── contracts/
│   ├── contracts/
│   │   ├── LandID.sol
│   │   ├── CarbonCredit.sol
│   │   └── Marketplace.sol
│   ├── test/
│   ├── scripts/
│   ├── hardhat.config.ts
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── docs/
│   └── architecture.md
│
├── subgraph/              # Optional: The Graph integration
│
├── .gitignore
└── README.md
```

*The structure above is the proposed project layout. Update it to match the actual files in the repository.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [Git](https://git-scm.com/)
- A Web3-compatible wallet, such as MetaMask
- A Polygon Amoy RPC endpoint
- Testnet POL for transaction fees
- An IPFS storage provider, if using IPFS uploads

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd gambutmark
```

Replace `<YOUR_REPOSITORY_URL>` with your GitHub repository URL.

### 2. Install Contract Dependencies

```bash
cd contracts
npm install
```

### 3. Configure Environment Variables

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows Command Prompt, you can use:

```cmd
copy .env.example .env
```

Configure the required variables in `contracts/.env`:

```dotenv
PRIVATE_KEY=your_deployer_private_key
AMOY_RPC_URL=your_polygon_amoy_rpc_url
POLYGONSCAN_API_KEY=your_polygonscan_api_key
```

Add other variables only if required by your implementation.

**Security notice:**
- Never commit your `.env` file or expose your private key.
- Use a dedicated test wallet with no valuable assets.
- Never use a mainnet wallet's private key for testnet development.

### 4. Compile and Test Smart Contracts

From the `contracts/` directory, run:

```bash
npm run compile
npm run test
```

These commands assume the corresponding scripts are configured in `contracts/package.json`.

### 5. Deploy to Polygon Amoy

Ensure your RPC endpoint, deployer account, and testnet funds are configured correctly.

```bash
npm run deploy:amoy
```

After deployment, save the contract addresses and update the frontend configuration.

The deployment command assumes that `deploy:amoy` is defined in `contracts/package.json`.

### 6. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 7. Configure the Frontend

Create `frontend/.env.local` and configure the variables required by your application. For example:

```dotenv
NEXT_PUBLIC_CHAIN_ID=80002
NEXT_PUBLIC_LAND_ID_ADDRESS=your_land_id_contract_address
NEXT_PUBLIC_CARBON_CREDIT_ADDRESS=your_carbon_credit_contract_address
NEXT_PUBLIC_MARKETPLACE_ADDRESS=your_marketplace_contract_address
```

Add your wallet connector and IPFS configuration as required by the implementation. Never expose private keys or server-side secrets through `NEXT_PUBLIC_` variables.

### 8. Run the Frontend

From the `frontend/` directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 Network Information

| Property | Value |
|---|---|
| Network | Polygon Amoy Testnet |
| Chain ID | `80002` |
| Native Gas Token | Testnet POL |
| Block Explorer | [PolygonScan Amoy](https://amoy.polygonscan.com/) |

Contract addresses and verified source-code links will be added after deployment.

## 🧪 Testing Strategy

The smart contract test suite should cover the following scenarios:

- Land ID creation and uniqueness.
- Carbon credit issuance and land provenance.
- Duplicate issuance prevention.
- Authorization and ownership validation.
- Marketplace listing, purchase, and transfer.
- Prevention of transfers after retirement.
- Permanent retirement and retirement history.
- Invalid inputs, unauthorized calls, and edge cases.

All critical smart contract functions should be tested before deployment.

## 📋 Development Roadmap

- [x] Initial project concept and folder structure
- [ ] Implement `LandID` smart contract
- [ ] Implement `CarbonCredit` smart contract
- [ ] Implement `Marketplace` smart contract
- [ ] Write and pass unit tests
- [ ] Deploy contracts to Polygon Amoy
- [ ] Build frontend pages and components
- [ ] Integrate wallet connection
- [ ] Connect frontend to deployed contracts
- [ ] Integrate IPFS metadata storage
- [ ] Test the complete user journey
- [ ] Record the project demo video
- [ ] Prepare and submit the hackathon submission

*Checklist items should reflect the actual implementation and testing status.*

## 🔐 Transparency & Environmental Integrity

GambutMark is designed to provide verifiable on-chain records for carbon credit provenance and lifecycle management.

However, tokenization alone does not establish that a carbon credit represents a real, additional, or permanent reduction in greenhouse gas emissions.

A production-ready implementation should incorporate:

- Reliable land registration and ownership verification.
- Independent carbon measurement and verification.
- Clear issuance rules and unique claim identifiers.
- Monitoring of reversal risks, including peatland fires and emissions.
- Applicable carbon standards, regulatory requirements, and safeguards for local communities.

These mechanisms are essential for connecting digital records with credible real-world climate impact.

## 🚀 Future Development

Potential improvements include:

- The Graph integration for efficient on-chain data indexing.
- Verifiable links to monitoring, reporting, and verification (MRV) records.
- Land boundary visualization using geospatial data.
- Carbon credit quality and verification status indicators.
- A dedicated dashboard for project developers, buyers, and auditors.
- Integration with recognized carbon standards and registries where appropriate.

## 🏆 Hackathon

**Event:** IEEE ClimateChain Global Hackathon 2026  
**Track:** Carbon Markets & Emissions Transparency  
**Project:** GambutMark  
**Focus:** Transparent and traceable carbon credit management for Indonesian peatland restoration and conservation.

## 📄 License

This project has not yet specified a license. A license will be added once the project maintainers decide how the code may be used, modified, and distributed.

---

**GambutMark — Bringing transparency and traceability to Indonesia's peatland carbon market.**#   g a m b u t m a r k  
 