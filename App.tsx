
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AIGenerator from './components/AIGenerator';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <section id="features" className="py-24 bg-white">
          <Features />
        </section>

        <section id="ai-demo" className="py-24 bg-slate-50">
          <AIGenerator />
        </section>

        <section id="pricing" className="py-24 bg-white">
          <Pricing />
        </section>

        <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
          <Testimonials />
        </section>

        <section id="faq" className="py-24 bg-white">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
