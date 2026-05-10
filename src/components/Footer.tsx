import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
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
