// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title ICarbonCredit
 * @dev Interface for CarbonCredit contract (Carbon Credit NFT)
 * @notice Setiap token mewakili kredit karbon yang terikat dengan LandID
 */
interface ICarbonCredit {
    /// @notice Status kredit
    enum CreditStatus {
        Active,     // Masih bisa diperdagangkan
        Retired     // Sudah di-retire, tidak bisa diperdagangkan
    }

    /// @notice Struct data kredit karbon
    struct CreditData {
        uint256 landId;         // LandID asal kredit
        uint256 vintage;        // Tahun pengurangan emisi
        uint256 amount;         // Jumlah dalam ton CO2e
        string metadataCID;     // IPFS CID metadata tambahan
        uint256 issuedAt;       // Timestamp penerbitan
        CreditStatus status;    // Status kredit
        address currentOwner;   // Pemilik saat ini
    }

    /// @notice Event ketika kredit baru diterbitkan
    event CreditIssued(
        uint256 indexed creditId,
        uint256 indexed landId,
        uint256 vintage,
        uint256 amount,
        address indexed issuer
    );

    /// @notice Event ketika kredit di-retire
    event CreditRetired(
        uint256 indexed creditId,
        address indexed retiredBy,
        uint256 retiredAt
    );

    /// @notice Terbitkan kredit baru dari lahan tertentu
    function issueCredit(
        uint256 landId,
        uint256 vintage,
        uint256 amount,
        string calldata metadataCID
    ) external returns (uint256);

    /// @notice Retire kredit (permanen, tidak bisa diperdagangkan lagi)
    function retireCredit(uint256 creditId) external;

    /// @notice Ambil data kredit
    function getCreditData(uint256 creditId) external view returns (CreditData memory);

    /// @notice Cek apakah kredit masih aktif (belum di-retire)
    function isActive(uint256 creditId) external view returns (bool);

    /// @notice Total kredit yang pernah diterbitkan
    function totalCredits() external view returns (uint256);

    /// @notice Total kredit yang sudah di-retire
    function totalRetired() external view returns (uint256);

    /// @notice Cek total kredit yang sudah diterbitkan dari landId + vintage tertentu
    function issuedPerLandVintage(uint256 landId, uint256 vintage) external view returns (uint256);
}