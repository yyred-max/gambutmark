// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/ICarbonCredit.sol";
import "./interfaces/ILandID.sol";

/**
 * @title CarbonCredit
 * @dev Carbon Credit NFT yang terikat dengan LandID
 * @notice Anti double counting: setiap (landId, vintage) punya batas maksimum
 */
contract CarbonCredit is ERC721, ERC721URIStorage, Ownable, ICarbonCredit {
    uint256 private _nextCreditId;
    uint256 private _totalCredits;
    uint256 private _totalRetired;

    ILandID public landIDContract;

    mapping(uint256 => CreditData) private _credits;

    /// @notice Batas maksimum kredit per hektar per vintage (ton CO2e)
    /// @dev Untuk MVP: 1 hektar = 10 ton CO2e per tahun (angka ilustratif)
    uint256 public constant CREDITS_PER_HECTARE = 10;

    /// @notice Tracking total kredit yang sudah diterbitkan per (landId, vintage)
    /// @dev Ini yang mencegah double counting
    mapping(uint256 => mapping(uint256 => uint256)) private _issuedPerLandVintage;

    event LandIDContractUpdated(address indexed newAddress);

    constructor(address _landIDContract) ERC721("GambutMark Carbon Credit", "GMCREDIT") Ownable(msg.sender) {
        require(_landIDContract != address(0), "CarbonCredit: invalid LandID address");
        landIDContract = ILandID(_landIDContract);
        _nextCreditId = 1;
    }

    /// @notice Update alamat LandID contract (hanya owner)
    function setLandIDContract(address _landIDContract) external onlyOwner {
        require(_landIDContract != address(0), "CarbonCredit: invalid address");
        landIDContract = ILandID(_landIDContract);
        emit LandIDContractUpdated(_landIDContract);
    }

    /// @inheritdoc ICarbonCredit
    function issueCredit(
        uint256 landId,
        uint256 vintage,
        uint256 amount,
        string calldata metadataCID
    ) external override returns (uint256) {
        require(amount > 0, "CarbonCredit: amount must be > 0");
        require(vintage > 0 && vintage <= block.timestamp / 365 days + 1970, "CarbonCredit: invalid vintage");

        // Cek pemilik lahan
        require(landIDContract.isLandOwner(landId, msg.sender), "CarbonCredit: not land owner");

        // Anti double counting: cek batas maksimum
        ILandID.LandData memory land = landIDContract.getLandData(landId);
        uint256 maxCredits = land.areaHectares * CREDITS_PER_HECTARE;
        uint256 alreadyIssued = _issuedPerLandVintage[landId][vintage];

        require(
            alreadyIssued + amount <= maxCredits,
            "CarbonCredit: exceeds max credits for this land & vintage (anti double counting)"
        );

        uint256 creditId = _nextCreditId++;
        _totalCredits++;

        _credits[creditId] = CreditData({
            landId: landId,
            vintage: vintage,
            amount: amount,
            metadataCID: metadataCID,
            issuedAt: block.timestamp,
            status: CreditStatus.Active,
            currentOwner: msg.sender
        });

        _issuedPerLandVintage[landId][vintage] = alreadyIssued + amount;

        _safeMint(msg.sender, creditId);

        emit CreditIssued(creditId, landId, vintage, amount, msg.sender);
        return creditId;
    }

    /// @inheritdoc ICarbonCredit
    function retireCredit(uint256 creditId) external override {
        require(_ownerOf(creditId) == msg.sender, "CarbonCredit: not owner");
        require(_credits[creditId].status == CreditStatus.Active, "CarbonCredit: already retired");

        _credits[creditId].status = CreditStatus.Retired;
        _totalRetired++;

        emit CreditRetired(creditId, msg.sender, block.timestamp);
    }

    /// @inheritdoc ICarbonCredit
    function getCreditData(uint256 creditId) external view override returns (CreditData memory) {
        require(_ownerOf(creditId) != address(0), "CarbonCredit: nonexistent credit");
        return _credits[creditId];
    }

    /// @inheritdoc ICarbonCredit
    function isActive(uint256 creditId) external view override returns (bool) {
        return _credits[creditId].status == CreditStatus.Active;
    }

    /// @inheritdoc ICarbonCredit
    function totalCredits() external view override returns (uint256) {
        return _totalCredits;
    }

    /// @inheritdoc ICarbonCredit
    function totalRetired() external view override returns (uint256) {
        return _totalRetired;
    }

    /// @inheritdoc ICarbonCredit
    function issuedPerLandVintage(uint256 landId, uint256 vintage) external view override returns (uint256) {
        return _issuedPerLandVintage[landId][vintage];
    }

    // === Override required by Solidity ===

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}