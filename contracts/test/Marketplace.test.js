const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", function () {
  let landID, carbonCredit, marketplace;
  let owner, seller, buyer;

  const PRICE = ethers.parseEther("0.01");

  beforeEach(async function () {
    [owner, seller, buyer] = await ethers.getSigners();

    const LandID = await ethers.getContractFactory("LandID");
    landID = await LandID.deploy();
    await landID.waitForDeployment();

    const CarbonCredit = await ethers.getContractFactory("CarbonCredit");
    carbonCredit = await CarbonCredit.deploy(await landID.getAddress());
    await carbonCredit.waitForDeployment();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    marketplace = await Marketplace.deploy(await carbonCredit.getAddress());
    await marketplace.waitForDeployment();

    // Setup: seller punya 1 land + 1 credit
    await landID.connect(seller).registerLand(
      "Lahan Seller", "Riau", "Pekanbaru", 100, "desc", "cid"
    );
    await carbonCredit.connect(seller).issueCredit(1, 2024, 500, "QmMeta");
    // Approve marketplace untuk transfer NFT
    await carbonCredit.connect(seller).setApprovalForAll(await marketplace.getAddress(), true);
  });

  describe("Deployment", function () {
    it("Should set correct platform fee (1%)", async function () {
      expect(await marketplace.platformFeeBps()).to.equal(100);
    });
  });

  describe("List Credit", function () {
    it("Should list credit and escrow NFT", async function () {
      await marketplace.connect(seller).listCredit(1, PRICE);
      expect(await marketplace.isListed(1)).to.equal(true);
      expect(await carbonCredit.ownerOf(1)).to.equal(await marketplace.getAddress());
    });

    it("Should emit CreditListed event", async function () {
      await expect(marketplace.connect(seller).listCredit(1, PRICE))
        .to.emit(marketplace, "CreditListed");
    });

    it("Should revert if price is 0", async function () {
      await expect(
        marketplace.connect(seller).listCredit(1, 0)
      ).to.be.revertedWith("Marketplace: price must be > 0");
    });

    it("Should revert if not owner", async function () {
      await expect(
        marketplace.connect(buyer).listCredit(1, PRICE)
      ).to.be.reverted;
    });

    it("Should revert if already listed", async function () {
      await marketplace.connect(seller).listCredit(1, PRICE);
      await expect(
        marketplace.connect(seller).listCredit(1, PRICE)
      ).to.be.revertedWith("Marketplace: already listed");
    });
  });

  describe("Buy Credit", function () {
    beforeEach(async function () {
      await marketplace.connect(seller).listCredit(1, PRICE);
    });

    it("Should transfer NFT and payment correctly", async function () {
      const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);

      await marketplace.connect(buyer).buyCredit(1, { value: PRICE });

      expect(await carbonCredit.ownerOf(1)).to.equal(buyer.address);
      expect(await marketplace.isListed(1)).to.equal(false);

      // Seller terima 99% (fee 1%)
      const expectedSellerAmount = (PRICE * 9900n) / 10000n;
      const sellerBalanceAfter = await ethers.provider.getBalance(seller.address);
      expect(sellerBalanceAfter - sellerBalanceBefore).to.equal(expectedSellerAmount);
    });

    it("Should revert if incorrect price", async function () {
      await expect(
        marketplace.connect(buyer).buyCredit(1, { value: ethers.parseEther("0.005") })
      ).to.be.revertedWith("Marketplace: incorrect price");
    });

    it("Should revert if seller tries to buy own credit", async function () {
      await expect(
        marketplace.connect(seller).buyCredit(1, { value: PRICE })
      ).to.be.revertedWith("Marketplace: cannot buy own credit");
    });

    it("Should emit CreditSold event", async function () {
      await expect(marketplace.connect(buyer).buyCredit(1, { value: PRICE }))
        .to.emit(marketplace, "CreditSold");
    });
  });

  describe("Cancel Listing", function () {
    beforeEach(async function () {
      await marketplace.connect(seller).listCredit(1, PRICE);
    });

    it("Should return NFT to seller", async function () {
      await marketplace.connect(seller).cancelListing(1);
      expect(await carbonCredit.ownerOf(1)).to.equal(seller.address);
      expect(await marketplace.isListed(1)).to.equal(false);
    });

    it("Should revert if not seller", async function () {
      await expect(
        marketplace.connect(buyer).cancelListing(1)
      ).to.be.revertedWith("Marketplace: not seller");
    });
  });

  describe("Platform Fee", function () {
    it("Should allow owner to update fee", async function () {
      await marketplace.connect(owner).setPlatformFee(200);
      expect(await marketplace.platformFeeBps()).to.equal(200);
    });

    it("Should revert if fee too high", async function () {
      await expect(
        marketplace.connect(owner).setPlatformFee(600)
      ).to.be.revertedWith("Marketplace: fee too high");
    });

    it("Should revert if non-owner tries to update fee", async function () {
      await expect(
        marketplace.connect(seller).setPlatformFee(200)
      ).to.be.reverted;
    });
  });

  describe("Withdraw Fees", function () {
    beforeEach(async function () {
      await marketplace.connect(seller).listCredit(1, PRICE);
      await marketplace.connect(buyer).buyCredit(1, { value: PRICE });
    });

    it("Should allow owner to withdraw accumulated fees", async function () {
      const ownerBalanceBefore = await ethers.provider.getBalance(owner.address);
      const tx = await marketplace.connect(owner).withdrawFees(owner.address);
      const receipt = await tx.wait();
      const gasCost = receipt.gasUsed * receipt.gasPrice;

      const ownerBalanceAfter = await ethers.provider.getBalance(owner.address);
      const expectedFee = (PRICE * 100n) / 10000n; // 1%
      expect(ownerBalanceAfter - ownerBalanceBefore + gasCost).to.equal(expectedFee);
    });

    it("Should revert if no fees", async function () {
      await marketplace.connect(owner).withdrawFees(owner.address);
      await expect(
        marketplace.connect(owner).withdrawFees(owner.address)
      ).to.be.revertedWith("Marketplace: no fees");
    });
  });
});