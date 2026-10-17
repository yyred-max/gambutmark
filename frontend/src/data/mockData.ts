export interface NewsItem {
    id: string;
    headline: string;
    date: string;
    location: string;
    source: string;
    sourceUrl: string;
    excerpt: string;
    category: string;
    illustration: string;
    imageUrl?: string;
  }
  
  export const newsItems: NewsItem[] = [
    {
      id: 'n1',
      headline: 'BRGM Dibubarkan, Nasib Restorasi Gambut Indonesia Dipertanyakan',
      date: '2025-05-08',
      location: 'Jakarta',
      source: 'Mongabay Indonesia',
      sourceUrl: 'https://mongabay.co.id/2025/05/09/brgm-bubar-restorasi-gambut-dan-mangrove-makin-gelap/',
      excerpt: 'Pembubaran Badan Restorasi Gambut dan Mangrove (BRGM) menimbulkan kekhawatiran terhadap keberlanjutan program restorasi gambut yang telah berjalan selama 10 tahun, termasuk infrastruktur pembasahan dan pemberdayaan masyarakat.',
      category: 'Kebijakan',
      illustration: 'policy',
      imageUrl: 'https://picsum.photos/seed/kebijakan1/800/600',
    },
    {
      id: 'n2',
      headline: 'Lima Daerah di Riau Kembali Dilanda Karhutla',
      date: '2025-10-31',
      location: 'Provinsi Riau',
      source: 'RRI',
      sourceUrl: 'https://rri.co.id/pekanbaru/regional/1943969/lima-daerah-di-riau-kembali-dilanda-karhutla',
      excerpt: 'Kebakaran hutan dan lahan kembali melanda lima daerah di Riau seiring meningkatnya suhu panas. Empat helikopter water bombing dan tim darat dikerahkan untuk memadamkan titik api di lahan gambut.',
      category: 'Siaga Api',
      illustration: 'fire',
      imageUrl: 'https://picsum.photos/seed/karhutla2/800/600',
    },
    {
      id: 'n3',
      headline: 'Delapan Orangutan Lahir Alami di Kawasan TNBBBR Kalimantan Barat',
      date: '2025-08-18',
      location: 'Kalimantan Barat',
      source: 'ANTARA News',
      sourceUrl: 'https://www.antaranews.com/berita/5048565/bksda-kalbar-delapan-orang-utan-lahir-alami-di-kawasan-tnbbbr',
      excerpt: 'BKSDA Kalimantan Barat mencatat delapan kelahiran alami orangutan dari induk yang sebelumnya menjalani rehabilitasi. Sejak 2016, 82 orangutan telah dilepasliarkan ke TNBBBR, menunjukkan keberhasilan program konservasi.',
      category: 'Satwa Liar',
      illustration: 'wildlife',
      imageUrl: 'https://picsum.photos/seed/orangutan3/800/600',
    },
    {
      id: 'n4',
      headline: 'Wamen LH Dorong Suplai Kredit Karbon dari Solusi Berbasis Alam',
      date: '2025-02-19',
      location: 'Jakarta',
      source: 'ANTARA News',
      sourceUrl: 'https://www.antaranews.com/berita/4662565/wamen-lh-ri-dorong-suplai-kredit-karbon-dari-solusi-berbasis-alam',
      excerpt: 'Wakil Menteri Lingkungan Hidup mendorong suplai kredit karbon dari solusi berbasis alam (NBS), termasuk dari ekosistem gambut. Pasar dinilai lebih mencari NBS karena harga yang lebih baik dan sellable.',
      category: 'Pasar',
      illustration: 'market',
      imageUrl: 'https://picsum.photos/seed/pasar4/800/600',
    },
    {
      id: 'n5',
      headline: 'Masyarakat Lokal di Ketapang Memulai Restorasi Gambut Lewat Penutupan Kanal',
      date: '2025-08-25',
      location: 'Kalimantan Barat',
      source: 'Tropenbos International',
      sourceUrl: 'https://www.tropenbos.org/news/peatland-restoration-indonesia/',
      excerpt: 'Setelah bertahun-tahun persiapan, restorasi gambut di Ketapang mulai menunjukkan hasil. Masyarakat lokal memblokir kanal dengan beton dan tanah, memulihkan tinggi muka air, dan menanam spesies asli.',
      category: 'Komunitas',
      illustration: 'community',
      imageUrl: 'https://picsum.photos/seed/komunitas5/800/600',
    },
    {
      id: 'n6',
      headline: 'IDXCarbon Catat Transaksi 2,75 Juta Ton Karbon di COP30',
      date: '2025-11-30',
      location: 'Jakarta',
      source: 'Katadata',
      sourceUrl: 'https://katadata.co.id/finansial/bursa/692d7aa32aee6/idxcarbon-catat-transaksi-2-75-juta-ton-karbon-di-cop30-ada-toba-dan-bmri',
      excerpt: 'Bursa Karbon Indonesia (IDXCarbon) mencatat transaksi dan minat beli kredit karbon setara 2,75 juta ton CO2 di COP30 Brasil. Proyek restorasi lahan gambut dan mangrove termasuk yang ditawarkan.',
      category: 'Pasar',
      illustration: 'market',
      imageUrl: 'https://picsum.photos/seed/pasar6/800/600',
    },
  ];
  
  export interface TopicCategory {
    id: string;
    title: string;
    description: string;
    color: string;
    iconKey: string;
  }
  
  export const topicCategories: TopicCategory[] = [
    {
      id: 't1',
      title: 'Sains Gambut',
      description: 'Bagaimana lahan gambut terbentuk, menyimpan karbon, dan mengatur air',
      color: '#4a8c5a',
      iconKey: 'science',
    },
    {
      id: 't2',
      title: 'Api & Ekologi',
      description: 'Memahami kebakaran gambut, penyebab, dan pencegahannya',
      color: '#d94c2a',
      iconKey: 'fire',
    },
    {
      id: 't3',
      title: 'Restorasi',
      description: 'Pembasahan kembali, penanaman ulang, dan pemulihan lahan gambut rusak',
      color: '#4a8aa8',
      iconKey: 'restoration',
    },
    {
      id: 't4',
      title: 'Pasar Karbon',
      description: 'Bagaimana kredit karbon mendanai konservasi dan restorasi',
      color: '#f5a623',
      iconKey: 'carbon',
    },
    {
      id: 't5',
      title: 'Satwa Liar',
      description: 'Spesies luar biasa yang menjadikan rawa gambut sebagai rumah',
      color: '#7ba868',
      iconKey: 'wildlife',
    },
    {
      id: 't6',
      title: 'Komunitas',
      description: 'Perlindungan ekosistem gambut oleh masyarakat adat dan lokal',
      color: '#5c4632',
      iconKey: 'community',
    },
  ];
  
  export interface RestorationStory {
    id: string;
    title: string;
    location: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    stats: { label: string; value: string }[];
  }
  
  export const restorationStories: RestorationStory[] = [
    {
      id: 'r1',
      title: 'Restorasi Gambut Nasional',
      location: 'Indonesia',
      description: 'Sejak 2016 hingga 2024, Badan Restorasi Gambut dan Mangrove (BRGM) berhasil merestorasi 1,6 juta hektar lahan gambut di seluruh Indonesia melalui pembasahan kembali dan penanaman ulang.',
      beforeImage: 'dry-peat',
      afterImage: 'wet-peat',
      stats: [
        { label: 'Luas Direstorasi', value: '1,6M ha' },
        { label: 'Sekat Kanal', value: '6.357' },
        { label: 'Desa DMPG', value: '1.100' },
      ],
    },
    {
      id: 'r2',
      title: 'Pembasahan Gambut Skala Nasional',
      location: 'Indonesia',
      description: 'Kementerian Lingkungan Hidup mencatat lebih dari 4,16 juta hektar lahan gambut telah dibasahi kembali dalam satu dekade terakhir untuk mencegah kebakaran dan mengurangi emisi karbon.',
      beforeImage: 'burned-peat',
      afterImage: 'planted-peat',
      stats: [
        { label: 'Luas Dibasahi', value: '4,16M ha' },
        { label: 'Sekat Kanal', value: '45.000' },
        { label: 'Program Berjalan', value: '10 Thn' },
      ],
    },
    {
      id: 'r3',
      title: 'Kegagalan Proyek Lahan Pangan',
      location: 'Kalimantan Tengah',
      description: 'Proyek Lahan Pangan (Food Estate) seluas 31.000 hektar di Kalimantan Tengah gagal dan meninggalkan lahan gambut terdegradasi yang kini menjadi fokus upaya pemulihan.',
      beforeImage: 'fire-damaged',
      afterImage: 'recovering-peat',
      stats: [
        { label: 'Luas Terdampak', value: '31K ha' },
        { label: 'Status', value: 'Gagal' },
        { label: 'Fokus', value: 'Pemulihan' },
      ],
    },
  ];
  
  export interface CarbonProject {
    id: string;
    name: string;
    location: string;
    area: string;
    creditsAvailable: number;
    pricePerTon: number;
    co2Reduction: number;
    verified: string;
    status: 'available' | 'limited' | 'sold-out';
    description: string;
    color: string;
  }
  
  export const carbonProjects: CarbonProject[] = [
    {
      id: 'p1',
      name: 'Cagar Gambut Sebangau',
      location: 'Kalimantan Tengah',
      area: '500.000 ha',
      creditsAvailable: 125000,
      pricePerTon: 14.50,
      co2Reduction: 8000000,
      verified: 'Verra VCS',
      status: 'available',
      description: 'Salah satu hutan rawa gambut tak terfragmentasi terbesar di Indonesia, melindungi habitat kritikal orangutan.',
      color: '#2d6149',
    },
    {
      id: 'p2',
      name: 'Hutan Biru Riau',
      location: 'Riau, Sumatra',
      area: '180.000 ha',
      creditsAvailable: 42000,
      pricePerTon: 12.80,
      co2Reduction: 2400000,
      verified: 'Gold Standard',
      status: 'limited',
      description: 'Restorasi gambut terdegradasi yang dipimpin komunitas dengan ko-manfaat keanekaragaman hayati yang kuat.',
      color: '#4a8aa8',
    },
    {
      id: 'p3',
      name: 'Inisiatif Iklim Berbak',
      location: 'Jambi, Sumatra',
      area: '220.000 ha',
      creditsAvailable: 68000,
      pricePerTon: 15.20,
      co2Reduction: 3100000,
      verified: 'Verra VCS',
      status: 'available',
      description: 'Memulihkan hidrologi kubah gambut taman nasional dan mencegah bencana kebakaran di masa depan.',
      color: '#5c4a3a',
    },
    {
      id: 'p4',
      name: 'Proyek Jantung Kapuas',
      location: 'Kalimantan Barat',
      area: '310.000 ha',
      creditsAvailable: 0,
      pricePerTon: 13.00,
      co2Reduction: 5200000,
      verified: 'Gold Standard',
      status: 'sold-out',
      description: 'Melindungi hutan kubah gambut utuh dan mendukung komunitas Dayak asli.',
      color: '#7ba868',
    },
  ];
  
  export interface StatItem {
    label: string;
    value: number;
    unit: string;
    suffix: string;
    iconKey: string;
    color: string;
  }
  
  export const statItems: StatItem[] = [
    {
      label: 'Hektar Lahan Gambut di Indonesia',
      value: 15,
      unit: 'juta',
      suffix: 'ha',
      iconKey: 'map',
      color: '#2d6149',
    },
    {
      label: 'Karbon Tersimpan di Tanah Gambut',
      value: 55,
      unit: 'gigaton',
      suffix: 'Gt',
      iconKey: 'carbon',
      color: '#5c4a3a',
    },
    {
      label: 'Orang yang Tinggal di Dekat Gambut',
      value: 40,
      unit: 'juta',
      suffix: '',
      iconKey: 'people',
      color: '#4a8c5a',
    },
    {
      label: 'Spesies yang Bergantung pada Rawa Gambut',
      value: 800,
      unit: '+',
      suffix: '',
      iconKey: 'wildlife',
      color: '#d94c2a',
    },
  ];
  
  export interface ComicPanel {
    id: string;
    title: string;
    text: string;
    characterSpeech?: string;
    scene: string;
  }
  
  export const comicPanels: ComicPanel[] = [
    {
      id: 'c1',
      title: 'Apa itu Gambut?',
      text: 'Gambut adalah sisa tanaman yang membusuk sebagian, menumpuk selama ribuan tahun di rawa yang tergenang air. Ketebalannya bisa mencapai beberapa meter!',
      characterSpeech: 'Gambut itu seperti spons raksasa dari tanaman tua!',
      scene: 'peat-intro',
    },
    {
      id: 'c2',
      title: 'Brankas Karbon',
      text: 'Karena gambut tergenang air, tanaman tidak terurai sepenuhnya. Semua karbon itu tetap terkunci di bawah tanah alih-alih masuk ke atmosfer.',
      characterSpeech: 'Satu hektar gambut menyimpan lebih banyak karbon daripada hutan hujan!',
      scene: 'carbon-vault',
    },
    {
      id: 'c3',
      title: 'Saat Gambut Mengering',
      text: 'Ketika kanal mengeringkan rawa, gambut mengering dan mulai terurai. Semua karbon yang tersimpan dilepaskan sebagai CO₂.',
      characterSpeech: 'Oh tidak... sponsnya sedang mengering!',
      scene: 'dry-peat',
    },
    {
      id: 'c4',
      title: 'Kebakaran Bawah Tanah',
      text: 'Gambut kering bisa terbakar di bawah tanah selama berbulan-bulan! Kebakaran tersembunyi ini sulit dipadamkan dan melepaskan asap serta karbon dalam jumlah besar.',
      characterSpeech: 'Api tidak hanya di atas tanah lagi...',
      scene: 'underground-fire',
    },
    {
      id: 'c5',
      title: 'Solusinya',
      text: 'Dengan menutup kanal dan membasahi kembali lahan gambut, kita bisa menghentikan kebakaran, menyimpan karbon, dan mengembalikan satwa liar. Itulah yang didanai oleh kredit karbon!',
      characterSpeech: 'Kita bisa memperbaikinya! Mari kembalikan airnya!',
      scene: 'solution',
    },
  ];
  
  export interface MarketplaceData {
    totalCredits: number;
    avgPrice: number;
    activeProjects: number;
    co2Offset: number;
  }
  
  export const marketplaceData: MarketplaceData = {
    totalCredits: 235000,
    avgPrice: 13.88,
    activeProjects: 3,
    co2Offset: 18700000,
  };
  
  export const monthlyVolume = [
    { month: 'Jan', volume: 18000, price: 11.2 },
    { month: 'Feb', volume: 22000, price: 11.8 },
    { month: 'Mar', volume: 19000, price: 12.1 },
    { month: 'Apr', volume: 28000, price: 12.5 },
    { month: 'Mei', volume: 31000, price: 13.0 },
    { month: 'Jun', volume: 25000, price: 13.2 },
    { month: 'Jul', volume: 35000, price: 13.5 },
    { month: 'Agu', volume: 32000, price: 13.9 },
    { month: 'Sep', volume: 38000, price: 13.88 },
  ];
  