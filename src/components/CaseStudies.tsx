import React from 'react';
import { Plane, BarChart, Activity } from 'lucide-react';

const cases = [
  {
    icon: BarChart,
    sector: "Infrastructure",
    title: "Global Rail Governance",
    challenge: "Transformation of fragmented assurance frameworks across 24 contracts in 3 countries.",
    action: "Harmonized risk registers and implemented the Three Lines of Defence model across safety-critical operations.",
    result: "55% reduction in non-conformities and 5 years of zero repeat findings."
  },
  {
    icon: Plane,
    sector: "Aviation (GCAA)",
    title: "Aviation Assurance Engagement",
    challenge: "Safety-critical ATC operations at RAK Airport requiring strict GCAA regulatory alignment.",
    action: "Acted as Head of Quality (GCAA Post Holder equivalent), established audit frameworks, and managed vendor evaluations.",
    result: "100% audit closure and transition from 'conditional' to 'fully compliant' standing."
  },
  {
    icon: Activity,
    sector: "Corporate GRC",
    title: "Enterprise Risk Shielding",
    challenge: "Developing a 'Zero-Fail' system for a large-scale regulated entity facing rapid operational shifts.",
    action: "Designed an Integrated Management System (IMS) for ISO 9001 and 55001 alignment.",
    result: "30% reduction in high-rated operational risks and institutionalized quality culture."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-y border-white/5 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">03 // Proof of Work</h2>
        <h3 className="font-bold text-3xl md:text-4xl text-white mb-12 md:mb-16 uppercase tracking-tighter">Strategic <span className="text-brand">Engagements</span></h3>

        <div className="space-y-6">
          {cases.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 border-l border-white/10 bg-[#0a0a0a]/50 p-6 md:p-8 hover:bg-[#111] transition-colors">
              <div className="border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6 flex flex-row md:flex-col items-center md:items-start gap-4">
                <item.icon className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <div className="font-mono text-[9px] md:text-[10px] text-slate-500 mb-1 tracking-widest uppercase">{item.sector}</div>
                  <div className="font-medium text-base md:text-lg text-white">{item.title}</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 font-light">
                <div className="space-y-2">
                  <h5 className="font-mono text-[9px] tracking-widest text-slate-500 uppercase">Challenge</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-mono text-[9px] tracking-widest text-slate-500 uppercase">Action</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.action}</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-mono text-[9px] tracking-widest text-brand uppercase">Result</h5>
                  <p className="text-sm text-white font-bold">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
