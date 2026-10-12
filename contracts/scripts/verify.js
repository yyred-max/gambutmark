const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const network = hre.network.name;
  const deploymentPath = path.join(__dirname, "..", "deployments", `${network}.json`);

  if (!fs.existsSync(deploymentPath)) {
    console.error(`❌ Deployment file not found: ${deploymentPath}`);
    console.error("   Run deploy first: npm run deploy:amoy");
    process.exit(1);
  }

  const addresses = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

  console.log(`🔍 Verifying contracts on ${network}...\n`);

  // 1. Verify LandID
  console.log("1️⃣  Verifying LandID...");
  try {
    await hre.run("verify:verify", {
      address: addresses.LandID,
      constructorArguments: [],
    });
    console.log("   ✅ LandID verified");
  } catch (error) {
    console.log("   ⚠️  LandID:", error.message);
  }

  // 2. Verify CarbonCredit
  console.log("\n2️⃣  Verifying CarbonCredit...");
  try {
    await hre.run("verify:verify", {
      address: addresses.CarbonCredit,
      constructorArguments: [addresses.LandID],
    });
    console.log("   ✅ CarbonCredit verified");
  } catch (error) {
    console.log("   ⚠️  CarbonCredit:", error.message);
  }

  // 3. Verify Marketplace
  console.log("\n3️⃣  Verifying Marketplace...");
  try {
    await hre.run("verify:verify", {
      address: addresses.Marketplace,
      constructorArguments: [addresses.CarbonCredit],
    });
    console.log("   ✅ Marketplace verified");
  } catch (error) {
    console.log("   ⚠️  Marketplace:", error.message);
  }

  console.log("\n🎉 Verification process completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Verification failed:", error);
    process.exit(1);
  });