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
      headline: 'Indonesia Memulihkan 2,5 Juta Hektar Lahan Gambut',
      date: '2026-09-18',
      location: 'Kalimantan Tengah',
      source: 'Mongabay',
      sourceUrl: 'https://mongabay.com',
      excerpt: 'Inisiatif pemulihan besar-besaran telah melakukan pembasahan kembali lahan gambut yang terdegradasi, mengembalikan keanekaragaman hayati dan mengurangi risiko kebakaran.',
      category: 'Restorasi',
      illustration: 'rewetting',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
    },
    {
      id: 'n2',
      headline: 'Kebakaran Gambut Berkobar di Riau Saat Musim Kemarau Meningkat',
      date: '2026-09-10',
      location: 'Provinsi Riau',
      source: 'The Jakarta Post',
      sourceUrl: 'https://thejakartapost.com',
      excerpt: 'Pemadam kebakaran berjuang melawan kebakaran gambut bawah tanah yang membara saat kondisi kekeringan memburuk di lahan gambut Sumatra.',
      category: 'Siaga Api',
      illustration: 'fire',
      imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=800&q=80',
    },
    {
      id: 'n3',
      headline: 'Populasi Orangutan Kalimantan Meningkat di Hutan Gambut Terlindungi',
      date: '2026-08-28',
      location: 'Kalimantan Barat',
      source: 'WWF Indonesia',
      sourceUrl: 'https://wwf.id',
      excerpt: 'Survei satwa liar menunjukkan peningkatan 15% dalam pemantauan orangutan di habitat rawa gambut yang telah dipulihkan.',
      category: 'Satwa Liar',
      illustration: 'wildlife',
      imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800&q=80',
    },
    {
      id: 'n4',
      headline: 'Metodologi Kredit Karbon Baru Disetujui untuk Proyek Lahan Gambut',
      date: '2026-08-15',
      location: 'Jakarta',
      source: 'Reuters',
      sourceUrl: 'https://reuters.com',
      excerpt: 'Pemerintah Indonesia menyetujui metodologi yang direvisi untuk mengukur pengurangan emisi dari pembasahan kembali lahan gambut.',
      category: 'Kebijakan',
      illustration: 'policy',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
      id: 'n5',
      headline: 'Masyarakat Lokal Memimpin Upaya Penutupan Kanal',
      date: '2026-07-30',
      location: 'Sumatra Selatan',
      source: 'Antara News',
      sourceUrl: 'https://antaranews.com',
      excerpt: 'Koperasi desa membangun ribuan sekat kanal untuk memulihkan tinggi muka air dan melindungi lahan gambut mereka.',
      category: 'Komunitas',
      illustration: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    },
    {
      id: 'n6',
      headline: 'Permintaan Kredit Karbon Tertinggi untuk Proyek Gambut Indonesia',
      date: '2026-07-12',
      location: 'Jakarta',
      source: 'Bloomberg',
      sourceUrl: 'https://bloomberg.com',
      excerpt: 'Pembeli korporasi menunjukkan minat tak preseden terhadap kredit karbon berbasis alam dari restorasi lahan gambut yang terverifikasi.',
      category: 'Pasar',
      illustration: 'market',
      imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
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
      title: 'Pembalikan Proyek Lahan Pangan',
      location: 'Kalimantan Tengah',
      description: 'Upaya ambisius untuk membasahi kembali kanal yang digali saat Proyek Lahan Pangan yang gagal, memulihkan hidrologi di 500.000 hektar lahan.',
      beforeImage: 'dry-peat',
      afterImage: 'wet-peat',
      stats: [
        { label: 'Luas Dipulihkan', value: '500K ha' },
        { label: 'Kanal Ditutup', value: '2.400' },
        { label: 'CO₂ Dihindari', value: '8M ton/th' },
      ],
    },
    {
      id: 'r2',
      title: 'Pembasahan Komunitas Riau',
      location: 'Riau, Sumatra',
      description: 'Desa-desa lokal membangun sekat kanal dan menanam spesies asli, secara dramatis mengurangi kejadian kebakaran di distrik mereka.',
      beforeImage: 'burned-peat',
      afterImage: 'planted-peat',
      stats: [
        { label: 'Desa Terlibat', value: '47' },
        { label: 'Pohon Ditanam', value: '1,2Jt' },
        { label: 'Penurunan Kebakaran', value: '78%' },
      ],
    },
    {
      id: 'r3',
      title: 'Pemulihan Taman Nasional Berbak',
      location: 'Jambi, Sumatra',
      description: 'Setelah kebakaran dahsyat, program pembasahan dan penanaman ulang yang terkoordinasi mengembalikan salah satu rawa gambut terkaya di Indonesia.',
      beforeImage: 'fire-damaged',
      afterImage: 'recovering-peat',
      stats: [
        { label: 'Luas Dibasahi', value: '180K ha' },
        { label: 'Spesies Kembali', value: '340+' },
        { label: 'Tahun Berjalan', value: '8' },
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
  