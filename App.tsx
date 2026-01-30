
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIGenerator from './components/AIGenerator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// The root component of the application organizing the main layout and sections
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle the sticky navbar transformation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation Bar */}
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* Main Sections */}
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="py-24 bg-white">
          <Features />
        </section>

        <section id="ai-demo" className="py-24">
          <AIGenerator />
        </section>

        <section id="pricing" className="py-24 bg-white">
          <Pricing />
        </section>

        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>

        <section id="faq" className="py-24 bg-white">
          <FAQ />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
