import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuditClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/Firstlink%20Governance%20logo.jpeg" 
            alt="Firstlink Governance Logo" 
            className="w-8 h-8 object-contain rounded-sm"
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-white text-lg leading-none">FIRSTLINK</span>
            <span className="font-mono text-[10px] text-brand tracking-[0.2em] uppercase leading-none mt-1">Governance</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onAuditClick}
            className="text-[10px] font-mono text-brand hover:text-white transition-colors uppercase tracking-[0.15em]"
          >
            Risk Audit
          </button>
          <a href="#services" className="px-4 py-2 border border-white/10 text-slate-300 hover:bg-white/5 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all duration-300 focus:outline-none">
            Services
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={onAuditClick}
            className="text-[10px] font-mono text-brand uppercase tracking-widest"
          >
            Audit
          </button>
          <button onClick={toggleMenu} className="text-white p-1">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-slate-300 hover:text-white"
              >
                Services
              </a>
              <button 
                onClick={() => { onAuditClick(); setIsMenuOpen(false); }}
                className="text-sm font-mono uppercase tracking-widest text-brand text-left"
              >
                Schedule Audit
              </button>
              <div className="pt-4 border-t border-white/5 flex gap-6">
                <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-slate-500">LinkedIn</a>
                <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
