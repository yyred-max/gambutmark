interface Panel {
    title: string;
    content: string;
    icon?: string;
  }
  
  interface ComicTopic {
    id: string;
    title: string;
    panels: Panel[];
  }
  
  export const sainsGambut: ComicTopic = {
    id: 'sains-gambut',
    title: 'Sains di Balik Lahan Gambut',
    panels: [
      {
        title: 'Apa Itu Gambut?',
        content: 'Lahan gambut adalah ekosistem lahan basah yang terbentuk dari akumulasi bahan organik (tumbuhan mati) selama ribuan tahun.\n\nIndonesia memiliki 20,6 juta hektar gambut tropis—terluas ketiga di dunia setelah Kanada dan Rusia.',
        icon: '🌿',
      },
      {
        title: 'Pembentukan Gambut',
        content: 'Gambut terbentuk ketika tumbuhan mati terdekomposisi sangat lambat dalam kondisi tergenang air (anaerobic).\n\nProses ini memakan waktu 1.000-10.000 tahun untuk membentuk lapisan setebal 1 meter.',
        icon: '⏳',
      },
      {
        title: 'Komposisi Kimiawi',
        content: 'Gambut tersusun dari 90-95% air dan 5-10% bahan organik (selulosa, lignin, tanin).\n\nKandungan karbon organiknya mencapai 50-60% dari berat kering, menjadikannya "sponge karbon" raksasa.',
        icon: '⚗️',
      },
      {
        title: 'Fungsi Hidrologis',
        content: 'Gambut bertindak sebagai spons alami yang dapat menyimpan air hingga 13 kali beratnya.\n\nEkosistem ini mengatur aliran air, mencegah banjir di musim hujan, dan kekeringan di musim kemarau.',
        icon: '💧',
      },
      {
        title: 'Penyimpan Karbon Global',
        content: 'Gambut Indonesia menyimpan 57 miliar ton karbon—setara dengan emisi global selama 6 tahun.\n\nSatu hektar gambut tropis menyimpan 10x lebih banyak karbon daripada hutan hujan biasa.',
        icon: '🌍',
      },
    ],
  };
  
  export const apiEkologi: ComicTopic = {
    id: 'api-ekologi',
    title: 'Api yang Membakar Harapan',
    panels: [
      {
        title: 'Ancaman Terbesar',
        content: 'Kebakaran lahan gambut adalah bencana ekologi terbesar di Indonesia.\n\nBerbeda dengan kebakaran hutan biasa, api gambut membakar lapisan bawah tanah dan bisa bertahan berbulan-bulan.',
        icon: '🔥',
      },
      {
        title: 'Emisi Karbon Masif',
        content: 'Kebakaran gambut 2015 melepaskan 1,75 miliar ton CO₂—lebih besar dari emisi tahunan Jepang.\n\nAsap kebakaran menyebar hingga Malaysia dan Singapura, mengakibatkan 500.000 kasus ISPA.',
        icon: '☁️',
      },
      {
        title: 'Penyebab Utama',
        content: 'Kebakaran gambut 99% disebabkan aktivitas manusia:\n• Pembukaan lahan untuk perkebunan (palm oil, akasia)\n• Drainase (pengeringan) gambut untuk pertanian\n• Pembuangan puntung rokok dan api pembersihan lahan.',
        icon: '⚠️',
      },
      {
        title: 'Dampak Kesehatan',
        content: 'Asap kebakaran gambut mengandung partikel PM2.5, CO, formaldehida, dan benzena.\n\nPaparan jangka pendek meningkatkan risiko ISPA, asma, dan penyakit kardiovaskular hingga 60%.',
        icon: '😷',
      },
      {
        title: 'Kerugian Ekonomi',
        content: 'Kebakaran gambut 2015 menyebabkan kerugian ekonomi Indonesia mencapai Rp 221 triliun (US$ 16 miliar).\n\nBiaya ini setara dengan 1,9% GDP nasional—belum termasuk dampak kesehatan jangka panjang.',
        icon: '💸',
      },
    ],
  };
  
  // === TOPIK 3: RESTORASI ===
  export const restorasi: ComicTopic = {
    id: 'restorasi',
    title: 'Memulihkan Ekosistem Gambut',
    panels: [
      {
        title: 'Apa Itu Restorasi?',
        content: 'Restorasi gambut adalah upaya mengembalikan fungsi ekosistem gambut yang rusak akibat drainase dan kebakaran.\n\nTujuannya: mengembalikan hidrologi, menanam kembali vegetasi, dan mencegah kebakaran di masa depan.',
        icon: '🌱',
      },
      {
        title: 'Pembasahan Kembali (Rewetting)',
        content: 'Langkah pertama: membasahi kembali lahan gambut dengan menutup kanal-kanal drainase.\n\nSekat kanal (canal blocking) menjaga air tetap tinggi, mencegah gambut mengering dan teroksidasi.',
        icon: '💧',
      },
      {
        title: 'Revegetasi',
        content: 'Menanam kembali spesies asli seperti jelutung, ramin, dan meranti.\n\nPohon-pohon ini membantu menyerap karbon dan menyediakan habitat bagi satwa liar.',
        icon: '🌳',
      },
      {
        title: 'Pemberdayaan Masyarakat',
        content: 'Restorasi berhasil jika melibatkan masyarakat lokal.\n\nMereka dilatih untuk mengelola lahan, mencegah kebakaran, dan mendapatkan penghasilan dari hasil hutan non-kayu.',
        icon: '👥',
      },
      {
        title: 'Hasil Restorasi',
        content: 'Gambut yang sehat kembali menyimpan karbon, mencegah kebakaran, dan menyediakan air bersih.\n\nRestorasi adalah investasi jangka panjang untuk iklim dan keanekaragaman hayati.',
        icon: '✅',
      },
    ],
  };
  
  // === TOPIK 4: PASAR KARBON ===
  export const pasarKarbon: ComicTopic = {
    id: 'pasar-karbon',
    title: 'Pasar Karbon untuk Gambut',
    panels: [
      {
        title: 'Apa Itu Kredit Karbon?',
        content: 'Kredit karbon adalah sertifikat yang mewakili 1 ton CO₂ yang diserap atau dihindari.\n\nKredit ini dapat diperjualbelikan di pasar karbon nasional maupun internasional.',
        icon: '💰',
      },
      {
        title: 'Bagaimana Gambut Menghasilkan Kredit?',
        content: 'Proyek restorasi gambut yang berhasil mencegah emisi dapat menghasilkan kredit karbon.\n\nContoh: 1 hektar gambut yang dibasahi kembali dapat mencegah 10-15 ton CO₂ per tahun.',
        icon: '🌍',
      },
      {
        title: 'Peran GambutMark',
        content: 'GambutMark menghubungkan proyek restorasi gambut dengan pembeli kredit karbon global.\n\nSetiap kredit terikat dengan lahan tertentu—memastikan transparansi dan mencegah double counting.',
        icon: '🔗',
      },
      {
        title: 'Mengapa Penting?',
        content: 'Pasar karbon memberikan insentif ekonomi untuk restorasi gambut.\n\nDana dari penjualan kredit dapat digunakan untuk membiayai pembasahan kembali, penanaman, dan patroli kebakaran.',
        icon: '💡',
      },
      {
        title: 'Masa Depan Pasar Karbon',
        content: 'Indonesia memiliki potensi besar dalam pasar karbon global.\n\nDengan regulasi yang tepat (SRUK), gambut dapat menjadi sumber pendanaan iklim yang berkelanjutan.',
        icon: '🚀',
      },
    ],
  };
  
  // === TOPIK 5: SATWA LIAR ===
  export const satwaLiar: ComicTopic = {
    id: 'satwa-liar',
    title: 'Satwa Liar Penghuni Gambut',
    panels: [
      {
        title: 'Rumah bagi Satwa Langka',
        content: 'Hutan rawa gambut adalah rumah bagi spesies langka seperti orangutan, harimau sumatra, dan burung enggang.\n\nEkosistem ini menyediakan makanan, tempat berlindung, dan jalur migrasi.',
        icon: '🦧',
      },
      {
        title: 'Orangutan: Ikon Gambut',
        content: 'Orangutan Kalimantan (Pongo pygmaeus) sangat bergantung pada hutan gambut.\n\nPopulasinya menurun drastis akibat deforestasi dan kebakaran. Restorasi gambut adalah kunci penyelamatan mereka.',
        icon: '🐒',
      },
      {
        title: 'Burung Enggang',
        content: 'Burung enggang (hornbill) memainkan peran penting dalam penyebaran biji tanaman.\n\nMereka membutuhkan pohon-pohon besar di hutan gambut untuk bersarang.',
        icon: '🦜',
      },
      {
        title: 'Ikan & Ekosistem Air',
        content: 'Perairan gambut adalah habitat bagi ikan gabus, betok, dan udang.\n\nMasyarakat lokal bergantung pada perairan ini untuk mata pencaharian.',
        icon: '🐟',
      },
      {
        title: 'Ancaman Terhadap Satwa',
        content: 'Deforestasi, kebakaran, dan perburuan liar mengancam satwa gambut.\n\nKonservasi dan restorasi gambut adalah upaya menyelamatkan keanekaragaman hayati Indonesia.',
        icon: '⚠️',
      },
    ],
  };
  
  // === TOPIK 6: KOMUNITAS ===
  export const komunitas: ComicTopic = {
    id: 'komunitas',
    title: 'Masyarakat Penjaga Gambut',
    panels: [
      {
        title: 'Masyarakat Adat & Lokal',
        content: 'Masyarakat adat seperti Dayak, Melayu, dan Suku Anak Dalam telah hidup berdampingan dengan gambut selama berabad-abad.\n\nMereka memiliki pengetahuan tradisional tentang pengelolaan lahan gambut.',
        icon: '👥',
      },
      {
        title: 'Kearifan Lokal',
        content: 'Masyarakat lokal mengenal sistem "beje" (kolam ikan alami) dan "handil" (saluran air tradisional).\n\nPengetahuan ini membantu menjaga keseimbangan ekosistem gambut.',
        icon: '📜',
      },
      {
        title: 'Peran dalam Restorasi',
        content: 'Masyarakat lokal adalah ujung tombak restorasi gambut.\n\nMereka membangun sekat kanal, menanam pohon, dan melakukan patroli kebakaran.',
        icon: '🤝',
      },
      {
        title: 'Tantangan',
        content: 'Masyarakat lokal menghadapi tantangan: konflik lahan, keterbatasan akses pasar, dan perubahan iklim.\n\nPemberdayaan ekonomi adalah kunci keberhasilan restorasi.',
        icon: '⚡',
      },
      {
        title: 'Masa Depan Bersama',
        content: 'Masa depan gambut Indonesia bergantung pada kolaborasi antara pemerintah, masyarakat, dan sektor swasta.\n\nGambutMark mendukung masyarakat lokal melalui pendanaan kredit karbon yang adil.',
        icon: '🌟',
      },
    ],
  };