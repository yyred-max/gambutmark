import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import InteractiveExplainer from '@/components/sections/InteractiveExplainer';
import ComicSection from '@/components/sections/ComicSection';
import TopicCategories from '@/components/sections/TopicCategories';
import NewsSection from '@/components/sections/NewsSection';
import RestorationSection from '@/components/sections/RestorationSection';
import MarketplaceSection from '@/components/sections/MarketplaceSection';
import StatsDashboard from '@/components/sections/StatsDashboard';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/sections/Footer';

function App() {
  // Scroll reveal — adds .visible to .reveal-on-scroll elements when they enter the viewport
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
      <Navbar />
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
    </div>
  );
}

export default App;
