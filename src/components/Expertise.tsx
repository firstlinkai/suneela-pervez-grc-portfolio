import React from 'react';
import { Layers, TowerControl, Activity, Server } from 'lucide-react';

const pillars = [
  { icon: Layers, title: "Strategic Quality Governance", desc: "Enterprise quality strategies and 'Three Lines of Defence' models to reduce operational risk exposure.", tags: "ISO 9001 • ISO 55001 • ESG Reporting" },
  { icon: TowerControl, title: "Regulatory Mastery", desc: "GCAA-approved leadership for aviation and RTA-aligned governance for rail networks in the Middle East.", tags: "GCAA • RTA • EN Standards" },
  { icon: Activity, title: "Operational Excellence", desc: "Lean Six Sigma and RCA methodology to eliminate waste and optimize 24/7 safety-critical operations.", tags: "Six Sigma • RCA • Privacy Audits" },
  { icon: Server, title: "Digital Risk Architecture", desc: "Leveraging enterprise platforms and data-driven dashboards to track compliance and incident trends.", tags: "GRC Tech • Data Protection" }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">02 // Expertise Framework</h2>
          <h3 className="font-light text-3xl md:text-4xl text-white">The Core Pillars of Governance</h3>
        </div>
        <div className="max-w-sm border-l border-indigo-500/30 pl-6 py-2">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">By the Numbers</div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Led divisional quality across 24 contracts in 3 countries, managing ~30 Quality/HSE focal points in safety-critical operations.
          </p>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="p-6 border-l border-white/10 bg-[#111]/20 hover:bg-[#111]/60 transition-colors group relative">
            <pillar.icon className="w-5 h-5 text-indigo-400 mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h4 className="font-medium text-white mb-2">{pillar.title}</h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
              {pillar.desc}
            </p>
            {pillar.tags && (
              <div className="font-mono text-[9px] md:text-[10px] text-indigo-400/80 tracking-wider pt-4 border-t border-white/5">
                {pillar.tags}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
