import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuditClick }) => {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
             <ShieldCheck className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white">SUNEELA PERVEZ</span>
          <span className="font-mono text-[10px] text-indigo-400/80 px-2 py-0.5 ml-2 border border-indigo-500/20 rounded-sm hidden sm:inline-flex uppercase tracking-widest">
            SYS_NODE: GRC
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={onAuditClick}
            className="text-[10px] font-mono text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-[0.15em] hidden sm:block"
          >
            Risk Audit
          </button>
          <a href="#services" className="px-4 py-2 border border-white/10 text-slate-300 hover:bg-white/5 text-[10px] font-mono uppercase tracking-widest rounded-sm transition-all duration-300 focus:outline-none">
            Services
          </a>
        </div>
      </div>
    </nav>
  );
};
