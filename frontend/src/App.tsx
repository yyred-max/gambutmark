import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import InteractiveExplainer from '@/components/sections/InteractiveExplainer';
import ComicSection from '@/components/sections/ComicSections';
import TopicCategories from '@/components/sections/TopicCategories';
import NewsSection from '@/components/sections/NewsSection';
import RestorationSection from '@/components/sections/RestorationSection';
import MarketplaceSection from '@/components/sections/MarketplaceSection';
import StatsDashboard from '@/components/sections/StatsDashboard';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';
import RegisterLandModal from '@/components/modals/RegisterLandModal';
import IssueCreditModal from '@/components/modals/IssueCreditModal';
import ListCreditModal from '@/components/modals/ListCreditModal';
import BuyCreditModal from '@/components/modals/BuyCreditModal';
import RetireCreditModal from '@/components/modals/RetireCreditModal';

// Import Halaman Topik
import SainsGambut from '@/pages/SainsGambut';
import ApiEkologi from '@/pages/ApiEkologi';
import Restorasi from '@/pages/Restorasi';
import PasarKarbon from '@/pages/PasarKarbon';
import SatwaLiar from '@/pages/SatwaLiar';
import Komunitas from '@/pages/Komunitas';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isRetireModalOpen, setIsRetireModalOpen] = useState(false);
  
  // State untuk navigasi topik
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Fungsi untuk menampilkan halaman topik yang dipilih
  const renderTopicPage = () => {
    const handleBack = () => setSelectedTopic(null);
    
    switch (selectedTopic) {
      case 't1': return <SainsGambut onBack={handleBack} />;
      case 't2': return <ApiEkologi onBack={handleBack} />;
      case 't3': return <Restorasi onBack={handleBack} />;
      case 't4': return <PasarKarbon onBack={handleBack} />;
      case 't5': return <SatwaLiar onBack={handleBack} />;
      case 't6': return <Komunitas onBack={handleBack} />;
      default: return null;
    }
  };

  // Komponen Navbar yang dipakai di semua halaman
  const navbar = (
    <Navbar 
      onOpenRegisterModal={() => setIsRegisterModalOpen(true)} 
      onOpenIssueModal={() => setIsIssueModalOpen(true)} 
      onOpenListModal={() => setIsListModalOpen(true)}
      onOpenBuyModal={() => setIsBuyModalOpen(true)}
      onOpenRetireModal={() => setIsRetireModalOpen(true)}
    />
  );

  // Komponen Modal yang dipakai di semua halaman
  const modals = (
    <>
      <RegisterLandModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
      <IssueCreditModal isOpen={isIssueModalOpen} onClose={() => setIsIssueModalOpen(false)} />
      <ListCreditModal isOpen={isListModalOpen} onClose={() => setIsListModalOpen(false)} />
      <BuyCreditModal isOpen={isBuyModalOpen} onClose={() => setIsBuyModalOpen(false)} />
      <RetireCreditModal isOpen={isRetireModalOpen} onClose={() => setIsRetireModalOpen(false)} />
    </>
  );

  // Jika ada topik yang dipilih, tampilkan Halaman Topik
  if (selectedTopic) {
    return (
      <div className="min-h-screen" style={{ background: '#f5ead7' }}>
        {navbar}
        {renderTopicPage()}
        <Footer />
        {modals}
      </div>
    );
  }

  // Halaman Utama
  return (
    <div className="min-h-screen" style={{ background: '#f5ead7' }}>
      {navbar}
      <main>
        <Hero />
        <InteractiveExplainer />
        <ComicSection />
        <TopicCategories onSelectTopic={(id) => setSelectedTopic(id)} />
        <NewsSection />
        <RestorationSection />
        <MarketplaceSection />
        <StatsDashboard />
        <NewsletterSection />
      </main>
      <Footer />
      {modals}
    </div>
  );
}

export default App;