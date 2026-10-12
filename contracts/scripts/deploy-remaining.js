const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

// ✅ LandID yang sudah ter-deploy
const EXISTING_LAND_ID = "0x458D4f242DF72bF19954Cd05fcB68C5541fd1577";

async function main() {
  console.log("🚀 Deploying remaining contracts (CarbonCredit + Marketplace)...\n");

  const [deployer] = await hre.ethers.getSigners();
  console.log("📍 Deployer:", deployer.address);
  console.log("💰 Balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "POL\n");

  // 1. Deploy CarbonCredit
  console.log("1️⃣  Deploying CarbonCredit...");
  const CarbonCredit = await hre.ethers.getContractFactory("CarbonCredit");
  const carbonCredit = await CarbonCredit.deploy(EXISTING_LAND_ID);
  await carbonCredit.waitForDeployment();
  const carbonCreditAddress = await carbonCredit.getAddress();
  console.log("   ✅ CarbonCredit:", carbonCreditAddress);

  // 2. Deploy Marketplace
  console.log("\n2️⃣  Deploying Marketplace...");
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(carbonCreditAddress);
  await marketplace.waitForDeployment();
  const marketplaceAddress = await marketplace.getAddress();
  console.log("   ✅ Marketplace:", marketplaceAddress);

  // Simpan ke file
  const addresses = {
    network: hre.network.name,
    chainId: (await hre.ethers.provider.getNetwork()).chainId.toString(),
    LandID: EXISTING_LAND_ID,
    CarbonCredit: carbonCreditAddress,
    Marketplace: marketplaceAddress,
    deployedAt: new Date().toISOString(),
  };

  const outputDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, `${hre.network.name}.json`), JSON.stringify(addresses, null, 2));

  console.log("\n🎉 Deploy selesai!");
  console.log("\n📋 Summary:");
  console.log("   LandID:        ", EXISTING_LAND_ID);
  console.log("   CarbonCredit:  ", carbonCreditAddress);
  console.log("   Marketplace:   ", marketplaceAddress);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });