import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="p-8 border border-white/5 bg-[#111]/30 rounded-sm">
          <h4 className="font-mono text-[10px] tracking-widest text-indigo-400 mb-6 uppercase">Trusted By Leaders</h4>
          <p className="text-slate-400 font-light text-sm leading-relaxed max-w-3xl mb-8">
            Recognized by Serco Middle East CEOs and RTA (Dubai) for outstanding commitment and measurable impact on operational assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <a href="mailto:Suneelapervez@gmail.com" className="group">
              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">Email</div>
              <div className="text-white group-hover:text-indigo-400 transition-colors">Suneelapervez@gmail.com</div>
            </a>
            <a href="tel:+971555381859" className="group">
              <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">Phone</div>
              <div className="text-white group-hover:text-indigo-400 transition-colors">+971 55 5381859</div>
            </a>
          </div>
        </div>
      </div>
      
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
