import React from 'react';
import { Plane, Train, Zap, ShieldCheck } from 'lucide-react';

const markets = [
  { icon: Plane, label: "Aviation" },
  { icon: Train, label: "Rail Transit" },
  { icon: Zap, label: "Energy" },
  { icon: ShieldCheck, label: "Government" }
];

export const MarketIcons: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Trusted By High-Stakes Industries</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
         {markets.map((market, idx) => (
           <div key={idx} className="flex flex-col items-center gap-4 group">
             <market.icon className="w-8 h-8 text-slate-500 group-hover:text-indigo-400 transition-colors" />
             <span className="font-light text-[10px] tracking-widest uppercase text-slate-400 group-hover:text-white">{market.label}</span>
           </div>
         ))}
      </div>
    </section>
  );
};
