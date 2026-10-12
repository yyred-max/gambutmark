const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LandID", function () {
  let landID;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const LandID = await ethers.getContractFactory("LandID");
    landID = await LandID.deploy();
    await landID.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      expect(await landID.name()).to.equal("GambutMark Land ID");
      expect(await landID.symbol()).to.equal("GMLAND");
    });

    it("Should start with 0 total lands", async function () {
      expect(await landID.totalLands()).to.equal(0);
    });
  });

  describe("Register Land", function () {
    it("Should register a new land and mint NFT", async function () {
      const tx = await landID.connect(addr1).registerLand(
        "Lahan Gambut Kalimantan",
        "Kalimantan Tengah",
        "Palangka Raya",
        100,
        "Lahan restorasi gambut",
        "QmTestCID123"
      );
      await tx.wait();

      expect(await landID.totalLands()).to.equal(1);
      expect(await landID.ownerOf(1)).to.equal(addr1.address);

      const landData = await landID.getLandData(1);
      expect(landData.name).to.equal("Lahan Gambut Kalimantan");
      expect(landData.province).to.equal("Kalimantan Tengah");
      expect(landData.areaHectares).to.equal(100);
      expect(landData.owner).to.equal(addr1.address);
    });

    it("Should emit LandRegistered event", async function () {
      await expect(
        landID.connect(addr1).registerLand(
          "Lahan Test",
          "Riau",
          "Pekanbaru",
          50,
          "Deskripsi",
          "QmCID"
        )
      ).to.emit(landID, "LandRegistered");
    });

    it("Should revert if name is empty", async function () {
      await expect(
        landID.connect(addr1).registerLand("", "Riau", "Pekanbaru", 50, "desc", "cid")
      ).to.be.revertedWith("LandID: name required");
    });

    it("Should revert if area is 0", async function () {
      await expect(
        landID.connect(addr1).registerLand("Lahan", "Riau", "Pekanbaru", 0, "desc", "cid")
      ).to.be.revertedWith("LandID: area must be > 0");
    });
  });

  describe("Update Document", function () {
    beforeEach(async function () {
      await landID.connect(addr1).registerLand(
        "Lahan Test", "Riau", "Pekanbaru", 50, "desc", "QmOldCID"
      );
    });

    it("Should allow owner to update document", async function () {
      await landID.connect(addr1).updateDocument(1, "QmNewCID");
      const landData = await landID.getLandData(1);
      expect(landData.documentCID).to.equal("QmNewCID");
    });

    it("Should revert if not owner", async function () {
      await expect(
        landID.connect(addr2).updateDocument(1, "QmHack")
      ).to.be.revertedWith("LandID: not owner");
    });
  });

  describe("isLandOwner", function () {
    it("Should return true for owner", async function () {
      await landID.connect(addr1).registerLand(
        "Lahan Test", "Riau", "Pekanbaru", 50, "desc", "cid"
      );
      expect(await landID.isLandOwner(1, addr1.address)).to.equal(true);
      expect(await landID.isLandOwner(1, addr2.address)).to.equal(false);
    });
  });
});