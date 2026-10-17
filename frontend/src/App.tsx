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

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen" style={{ background: '#f5ead7' }}>
      <Navbar 
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)} 
        onOpenIssueModal={() => setIsIssueModalOpen(true)} 
      />
      <main>
        <Hero />
        <InteractiveExplainer />
        <ComicSection />
        <TopicCategories />
        <NewsSection />
        <RestorationSection />
        <MarketplaceSection />
        <StatsDashboard />
        <NewsletterSection />
      </main>
      <Footer />

      {/* Modal Register Land */}
      <RegisterLandModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      {/* Modal Issue Credit */}
      <IssueCreditModal
        isOpen={isIssueModalOpen}
        onClose={() => setIsIssueModalOpen(false)}
      />
    </div>
  );
}

export default App;