// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title ILandID
 * @dev Interface for LandID contract (Digital Land Identity NFT)
 * @notice Setiap token mewakili satu lahan gambut dengan metadata unik
 */
interface ILandID {
    /// @notice Struct menyimpan data lahan gambut
    struct LandData {
        string name;            // Nama lahan
        string province;        // Provinsi
        string regency;         // Kabupaten
        uint256 areaHectares;   // Luas dalam hektar (tanpa desimal)
        string description;     // Deskripsi
        string documentCID;     // IPFS CID dokumen pendukung
        uint256 registeredAt;   // Timestamp registrasi
        address owner;          // Pemilik saat ini
    }

    /// @notice Event ketika lahan baru didaftarkan
    event LandRegistered(
        uint256 indexed landId,
        address indexed owner,
        string name,
        uint256 registeredAt
    );

    /// @notice Event ketika metadata lahan diupdate
    event LandUpdated(uint256 indexed landId, string documentCID);

    /// @notice Register lahan baru, returns landId
    function registerLand(
        string calldata name,
        string calldata province,
        string calldata regency,
        uint256 areaHectares,
        string calldata description,
        string calldata documentCID
    ) external returns (uint256);

    /// @notice Update dokumen CID lahan
    function updateDocument(uint256 landId, string calldata newDocumentCID) external;

    /// @notice Ambil data lahan berdasarkan landId
    function getLandData(uint256 landId) external view returns (LandData memory);

    /// @notice Cek apakah wallet adalah pemilik landId
    function isLandOwner(uint256 landId, address wallet) external view returns (bool);

    /// @notice Total lahan yang terdaftar
    function totalLands() external view returns (uint256);
}