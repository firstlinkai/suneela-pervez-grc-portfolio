import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">Experience With</h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
              Major government and commercial clients including transport authorities for Dubai Metro/Monorail/Tram, Mubadala (UAE), and Royal Commission Jubail & Yanbu (KSA).
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Connect for Strategic Advisory</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:suneelapervez@gmail.com" className="text-xs text-slate-400 hover:text-white transition-colors">Engagement Email</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full"></div>
          <span className="text-xs font-semibold tracking-widest text-white uppercase">Suneela Pervez Consulting</span>
        </div>
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Strategic GRC & Quality Transformation.
        </div>
        <div className="flex gap-8">
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors">LinkedIn</a>
           <a href="#services" className="font-mono text-[10px] uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">Engagement</a>
        </div>
      </div>
    </footer>
  );
};
