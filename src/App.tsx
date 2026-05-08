import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { CaseStudies } from './components/CaseStudies';
import { Services } from './components/Services';
import { RiskCalculator } from './components/RiskCalculator';
import { MarketIcons } from './components/MarketIcons';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans relative overflow-x-hidden">
      {/* Background radial gradient to give it depth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.15),transparent_70%)] opacity-80" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_100%_100%,rgba(79,70,229,0.08),transparent_50%)] opacity-60" />

      <Navbar onAuditClick={openModal} />

      <main className="relative z-10 pt-24 pb-20">
        <Hero onAuditClick={openModal} />
        <About />
        <Expertise />
        <CaseStudies />
        <RiskCalculator />
        <Services />
        <MarketIcons />
      </main>

      <Footer />

      <AuditModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
