import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F8F5EE] min-h-screen text-brand-dark overflow-x-hidden selection:bg-brand-secondary/35 selection:text-brand-primary">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Grid */}
      <Features />

      {/* Pipeline / Process Timeline */}
      <HowItWorks />

      {/* App Showcase & composition */}
      <Showcase />

      {/* Launch Info & Coming Soon CTA */}
      <ComingSoon />

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;
