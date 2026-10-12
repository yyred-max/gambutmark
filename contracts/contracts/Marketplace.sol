// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/ICarbonCredit.sol";

/**
 * @title Marketplace
 * @dev Marketplace untuk jual-beli Carbon Credit NFT
 * @notice Menggunakan escrow sederhana: NFT ditransfer ke contract saat listing
 */
contract Marketplace is Ownable, ReentrancyGuard {
    struct Listing {
        uint256 creditId;
        address seller;
        uint256 price;          // dalam wei
        bool active;
    }

    ICarbonCredit public carbonCreditContract;

    /// @notice Mapping creditId => Listing
    mapping(uint256 => Listing) public listings;

    /// @notice Platform fee dalam basis points (100 = 1%)
    uint256 public platformFeeBps = 100; // 1%
    uint256 public constant MAX_FEE_BPS = 500; // max 5%

    /// @notice Akumulasi fee yang belum di-withdraw
    uint256 public accumulatedFees;

    event CreditListed(uint256 indexed creditId, address indexed seller, uint256 price);
    event CreditSold(uint256 indexed creditId, address indexed buyer, address indexed seller, uint256 price);
    event ListingCancelled(uint256 indexed creditId, address indexed seller);
    event FeeWithdrawn(address indexed to, uint256 amount);
    event PlatformFeeUpdated(uint256 newFeeBps);

    constructor(address _carbonCreditContract) Ownable(msg.sender) {
        require(_carbonCreditContract != address(0), "Marketplace: invalid address");
        carbonCreditContract = ICarbonCredit(_carbonCreditContract);
    }

    /// @notice List kredit untuk dijual
    function listCredit(uint256 creditId, uint256 price) external nonReentrant {
        require(price > 0, "Marketplace: price must be > 0");
        require(!listings[creditId].active, "Marketplace: already listed");
        require(carbonCreditContract.isActive(creditId), "Marketplace: credit not active");
        require(
            IERC721(address(carbonCreditContract)).ownerOf(creditId) == msg.sender,
            "Marketplace: not credit owner"
        );
        

        // Escrow: transfer NFT ke marketplace
        IERC721(address(carbonCreditContract)).transferFrom(msg.sender, address(this), creditId);

        listings[creditId] = Listing({
            creditId: creditId,
            seller: msg.sender,
            price: price,
            active: true
        });

        emit CreditListed(creditId, msg.sender, price);
    }

    /// @notice Beli kredit yang sedang listed
    function buyCredit(uint256 creditId) external payable nonReentrant {
        Listing memory listing = listings[creditId];
        require(listing.active, "Marketplace: not listed");
        require(msg.value == listing.price, "Marketplace: incorrect price");
        require(msg.sender != listing.seller, "Marketplace: cannot buy own credit");

        // Cek kredit masih aktif
        require(carbonCreditContract.isActive(creditId), "Marketplace: credit not active");

        // Hapus listing
        delete listings[creditId];

        // Hitung fee
        uint256 fee = (listing.price * platformFeeBps) / 10000;
        uint256 sellerAmount = listing.price - fee;
        accumulatedFees += fee;

        // Transfer NFT ke buyer
        IERC721(address(carbonCreditContract)).transferFrom(address(this), msg.sender, creditId);

        // Transfer payment ke seller
        (bool success, ) = payable(listing.seller).call{value: sellerAmount}("");
        require(success, "Marketplace: payment to seller failed");

        emit CreditSold(creditId, msg.sender, listing.seller, listing.price);
    }

    /// @notice Batalkan listing
    function cancelListing(uint256 creditId) external nonReentrant {
        Listing memory listing = listings[creditId];
        require(listing.active, "Marketplace: not listed");
        require(listing.seller == msg.sender, "Marketplace: not seller");

        delete listings[creditId];

        // Kembalikan NFT ke seller
        IERC721(address(carbonCreditContract)).transferFrom(address(this), msg.sender, creditId);

        emit ListingCancelled(creditId, msg.sender);
    }

    /// @notice Update platform fee (hanya owner)
    function setPlatformFee(uint256 newFeeBps) external onlyOwner {
        require(newFeeBps <= MAX_FEE_BPS, "Marketplace: fee too high");
        platformFeeBps = newFeeBps;
        emit PlatformFeeUpdated(newFeeBps);
    }

    /// @notice Withdraw akumulasi fee (hanya owner)
    function withdrawFees(address to) external onlyOwner nonReentrant {
        require(to != address(0), "Marketplace: invalid address");
        uint256 amount = accumulatedFees;
        require(amount > 0, "Marketplace: no fees");
        accumulatedFees = 0;

        (bool success, ) = payable(to).call{value: amount}("");
        require(success, "Marketplace: withdraw failed");

        emit FeeWithdrawn(to, amount);
    }

    /// @notice Cek apakah creditId sedang listed
    function isListed(uint256 creditId) external view returns (bool) {
        return listings[creditId].active;
    }
}