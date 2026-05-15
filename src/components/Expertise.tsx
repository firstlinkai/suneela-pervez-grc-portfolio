import React from 'react';
import { Layers, TowerControl, Activity, Server } from 'lucide-react';

const pillars = [
  { icon: Layers, title: "Integrated Management Architecture", desc: "Developing 'Zero-Fail' systems for ISO 9001, 14001, 45001, and 55001.", tags: "ISO Frameworks • Governance Architecture" },
  { icon: TowerControl, title: "Regulatory Shielding", desc: "Expert oversight for GCAA (Aviation) and RTA (Rail) compliance. We act as the bridge between the entity and the regulator.", tags: "GCAA • RTA • Global Compliance" },
  { icon: Activity, title: "Risk-Based Assurance", desc: "Implementing risk-based assurance models that protect the Board and the P&L from operational shocks.", tags: "3 Lines of Defence • RCA" },
  { icon: Server, title: "Institutional Reliability", desc: "Digital risk architecture and data-driven dashboards to track compliance and incident trends.", tags: "GRC Tech • Digital Assurance" }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">02 // The Firstlink Standard</h2>
          <h3 className="font-bold text-3xl md:text-4xl text-white italic">Governing Excellence.</h3>
        </div>
        <div className="max-w-sm border-l border-brand/30 pl-6 py-2">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">Institutional Reach</div>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Firstlink Governance provides executive-level oversight for the world’s most regulated industries.
          </p>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="p-6 border border-white/5 bg-black hover:border-brand/30 transition-all group relative">
            <pillar.icon className="w-5 h-5 text-brand mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h4 className="font-bold text-white mb-2 uppercase tracking-tight">{pillar.title}</h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
              {pillar.desc}
            </p>
            {pillar.tags && (
              <div className="font-mono text-[9px] md:text-[10px] text-brand/80 tracking-wider pt-4 border-t border-white/5">
                {pillar.tags}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
