import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">Strategic Synergy</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md mb-4">
              Firstlink Governance is a specialized consultancy within the Firstlink Group, dedicated to institutional excellence and regulatory resilience.
            </p>
            <a href="https://www.firstlinkai.com" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-brand uppercase tracking-widest hover:underline transition-all">
              A Division of the Firstlink Group →
            </a>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand rounded-full"></div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Connect for Strategic Advisory</span>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:suneelapervez@gmail.com" className="text-xs text-brand hover:text-white transition-colors">suneelapervez@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
        <div className="flex items-center gap-3">
          <img 
            src="/Firstlink%20Governance%20logo.jpeg" 
            alt="Firstlink Governance Logo" 
            className="w-8 h-8 object-contain rounded-sm"
          />
          <span className="text-xs font-bold tracking-widest text-white uppercase">Firstlink Governance</span>
        </div>
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Firstlink Governance. All Rights Reserved.
        </div>
        <div className="flex gap-8">
           <a href="#services" className="font-mono text-[10px] uppercase tracking-widest text-brand hover:text-white transition-colors">Services</a>
           <a href="#expertise" className="font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Frameworks</a>
        </div>
      </div>
    </footer>
  );
};
