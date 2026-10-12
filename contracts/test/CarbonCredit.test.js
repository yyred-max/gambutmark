const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonCredit", function () {
  let landID, carbonCredit;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const LandID = await ethers.getContractFactory("LandID");
    landID = await LandID.deploy();
    await landID.waitForDeployment();

    const CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    carbonCredit = await CarbonCredit.deploy(await landID.getAddress());
    await carbonCredit.waitForDeployment();

    // Register land untuk addr1 (100 hektar, max 1000 kredit per vintage)
    await landID.connect(addr1).registerLand(
      "Lahan Gambut Test", "Kalimantan", "Palangka Raya", 100, "desc", "cid"
    );
  });

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      expect(await carbonCredit.name()).to.equal("GambutMark Carbon Credit");
      expect(await carbonCredit.symbol()).to.equal("GMCREDIT");
    });

    it("Should set correct CREDITS_PER_HECTARE", async function () {
      expect(await carbonCredit.CREDITS_PER_HECTARE()).to.equal(10);
    });
  });

  describe("Issue Credit", function () {
    it("Should issue credit from owned land", async function () {
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 500, "QmMetadata");
      expect(await carbonCredit.totalCredits()).to.equal(1);
      expect(await carbonCredit.ownerOf(1)).to.equal(addr1.address);

      const creditData = await carbonCredit.getCreditData(1);
      expect(creditData.landId).to.equal(1);
      expect(creditData.vintage).to.equal(2024);
      expect(creditData.amount).to.equal(500);
    });

    it("Should revert if not land owner", async function () {
      await expect(
        carbonCredit.connect(addr2).issueCredit(1, 2024, 100, "QmMeta")
      ).to.be.revertedWith("CarbonCredit: not land owner");
    });

    it("Should revert if amount is 0", async function () {
      await expect(
        carbonCredit.connect(addr1).issueCredit(1, 2024, 0, "QmMeta")
      ).to.be.revertedWith("CarbonCredit: amount must be > 0");
    });

    it("Should revert if exceeds max credits (anti double counting)", async function () {
      // 100 hektar × 10 = max 1000 kredit per vintage
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 1000, "QmMeta");

      await expect(
        carbonCredit.connect(addr1).issueCredit(1, 2024, 1, "QmMeta")
      ).to.be.revertedWith("CarbonCredit: exceeds max credits for this land & vintage (anti double counting)");
    });

    it("Should allow different vintages independently", async function () {
      await carbonCredit.connect(addr1).issueCredit(1, 2023, 1000, "QmMeta");
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 1000, "QmMeta");
      expect(await carbonCredit.totalCredits()).to.equal(2);
    });

    it("Should emit CreditIssued event", async function () {
      await expect(
        carbonCredit.connect(addr1).issueCredit(1, 2024, 500, "QmMeta")
      ).to.emit(carbonCredit, "CreditIssued");
    });
  });

  describe("Retire Credit", function () {
    beforeEach(async function () {
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 500, "QmMeta");
    });

    it("Should allow owner to retire credit", async function () {
      await carbonCredit.connect(addr1).retireCredit(1);
      expect(await carbonCredit.isActive(1)).to.equal(false);
      expect(await carbonCredit.totalRetired()).to.equal(1);
    });

    it("Should revert if not owner", async function () {
      await expect(
        carbonCredit.connect(addr2).retireCredit(1)
      ).to.be.revertedWith("CarbonCredit: not owner");
    });

    it("Should revert if already retired", async function () {
      await carbonCredit.connect(addr1).retireCredit(1);
      await expect(
        carbonCredit.connect(addr1).retireCredit(1)
      ).to.be.revertedWith("CarbonCredit: already retired");
    });

    it("Should emit CreditRetired event", async function () {
      await expect(carbonCredit.connect(addr1).retireCredit(1))
        .to.emit(carbonCredit, "CreditRetired");
    });
  });

  describe("issuedPerLandVintage", function () {
    it("Should track issuance correctly", async function () {
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 300, "QmMeta");
      await carbonCredit.connect(addr1).issueCredit(1, 2024, 200, "QmMeta");
      expect(await carbonCredit.issuedPerLandVintage(1, 2024)).to.equal(500);
    });
  });
});