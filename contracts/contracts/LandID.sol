// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/ILandID.sol";

/**
 * @title LandID
 * @dev Digital Land Identity NFT untuk lahan gambut Indonesia
 * @notice Setiap NFT mewakili satu lahan gambut yang unik
 */
contract LandID is ERC721, ERC721URIStorage, Ownable, ILandID {
    uint256 private _nextLandId;
    uint256 private _totalLands;

    mapping(uint256 => LandData) private _lands;

    /// @notice Constructor: set nama & simbol NFT
    constructor() ERC721("GambutMark Land ID", "GMLAND") Ownable(msg.sender) {
        _nextLandId = 1;
    }

    /// @inheritdoc ILandID
    function registerLand(
        string calldata name,
        string calldata province,
        string calldata regency,
        uint256 areaHectares,
        string calldata description,
        string calldata documentCID
    ) external override returns (uint256) {
        require(bytes(name).length > 0, "LandID: name required");
        require(bytes(province).length > 0, "LandID: province required");
        require(areaHectares > 0, "LandID: area must be > 0");

        uint256 landId = _nextLandId++;
        _totalLands++;

        _lands[landId] = LandData({
            name: name,
            province: province,
            regency: regency,
            areaHectares: areaHectares,
            description: description,
            documentCID: documentCID,
            registeredAt: block.timestamp,
            owner: msg.sender
        });

        _safeMint(msg.sender, landId);

        emit LandRegistered(landId, msg.sender, name, block.timestamp);
        return landId;
    }

    /// @inheritdoc ILandID
    function updateDocument(uint256 landId, string calldata newDocumentCID) external override {
        require(_ownerOf(landId) == msg.sender, "LandID: not owner");
        _lands[landId].documentCID = newDocumentCID;
        emit LandUpdated(landId, newDocumentCID);
    }

    /// @inheritdoc ILandID
    function getLandData(uint256 landId) external view override returns (LandData memory) {
        require(_ownerOf(landId) != address(0), "LandID: nonexistent land");
        return _lands[landId];
    }

    /// @inheritdoc ILandID
    function isLandOwner(uint256 landId, address wallet) external view override returns (bool) {
        return _ownerOf(landId) == wallet;
    }

    /// @inheritdoc ILandID
    function totalLands() external view override returns (uint256) {
        return _totalLands;
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