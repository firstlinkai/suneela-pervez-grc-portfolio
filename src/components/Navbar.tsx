import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuditClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
             <ShieldCheck className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white uppercase sm:text-base text-sm">SUNEELA PERVEZ</span>
          <span className="font-mono text-[9px] text-indigo-400/80 px-2 py-0.5 ml-2 border border-indigo-500/20 rounded-sm hidden lg:inline-flex uppercase tracking-widest">
            SYS_NODE: GRC
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onAuditClick}
            className="text-[10px] font-mono text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-[0.15em]"
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
            className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest"
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
                className="text-sm font-mono uppercase tracking-widest text-indigo-400 text-left"
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
