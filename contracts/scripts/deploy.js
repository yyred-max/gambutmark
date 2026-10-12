const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Deploying GambutMark contracts...\n");

  const [deployer] = await hre.ethers.getSigners();
  console.log("📍 Deployer address:", deployer.address);
  console.log("💰 Deployer balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "MATIC\n");

  // 1. Deploy LandID
  console.log("1️⃣  Deploying LandID...");
  const LandID = await hre.ethers.getContractFactory("LandID");
  const landID = await LandID.deploy();
  await landID.waitForDeployment();
  const landIDAddress = await landID.getAddress();
  console.log("   ✅ LandID deployed to:", landIDAddress);

  // 2. Deploy CarbonCredit (butuh address LandID)
  console.log("\n2️⃣  Deploying CarbonCredit...");
  const CarbonCredit = await hre.ethers.getContractFactory("CarbonCredit");
  const carbonCredit = await CarbonCredit.deploy(landIDAddress);
  await carbonCredit.waitForDeployment();
  const carbonCreditAddress = await carbonCredit.getAddress();
  console.log("   ✅ CarbonCredit deployed to:", carbonCreditAddress);

  // 3. Deploy Marketplace (butuh address CarbonCredit)
  console.log("\n3️⃣  Deploying Marketplace...");
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(carbonCreditAddress);
  await marketplace.waitForDeployment();
  const marketplaceAddress = await marketplace.getAddress();
  console.log("   ✅ Marketplace deployed to:", marketplaceAddress);

  // Simpan alamat ke file untuk frontend
  const addresses = {
    network: hre.network.name,
    chainId: (await hre.ethers.provider.getNetwork()).chainId.toString(),
    LandID: landIDAddress,
    CarbonCredit: carbonCreditAddress,
    Marketplace: marketplaceAddress,
    deployedAt: new Date().toISOString(),
  };

  const outputDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(outputDir, `${hre.network.name}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(addresses, null, 2));

  console.log("\n📄 Deployment info saved to:", outputPath);
  console.log("\n🎉 All contracts deployed successfully!");
  console.log("\n📋 Summary:");
  console.log("   LandID:        ", landIDAddress);
  console.log("   CarbonCredit:  ", carbonCreditAddress);
  console.log("   Marketplace:   ", marketplaceAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });