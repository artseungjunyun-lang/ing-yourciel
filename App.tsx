
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StyleSection from './components/StyleSection';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import AudioToggle from './components/AudioToggle';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <StyleSection />
        <Packages />
        <Gallery />
        <AIConsultant />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AudioToggle />
    </div>
  );
};

export default App;
