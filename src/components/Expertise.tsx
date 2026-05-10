import React from 'react';
import { Layers, TowerControl, Activity, Server } from 'lucide-react';

const pillars = [
  { icon: Layers, title: "Strategic Quality Governance", desc: "Design and implementation of enterprise quality strategies aligned with corporate risk appetite and performance outcomes." },
  { icon: TowerControl, title: "Regulatory Mastery", desc: "Deep expertise in GCAA (Aviation) and Road/Transport (Rail) regulatory environments, managing certification readiness.", tags: "GCAA • RTA • ISO 55001" },
  { icon: Activity, title: "Operational Excellence", desc: "Utilizing Lean Six Sigma and Root Cause Analysis (RCA) to eliminate process waste and improve service delivery." },
  { icon: Server, title: "Risk Architecture", desc: "Implementing the 'Three Lines of Defence' model and enterprise-wide risk management (ERM) frameworks." }
];

export const Expertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">02 // Expertise Framework</h2>
        <h3 className="font-light text-3xl md:text-4xl text-white">The Core Pillars of Governance</h3>
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
