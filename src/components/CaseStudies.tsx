import React from 'react';
import { Plane, BarChart, Activity } from 'lucide-react';

const cases = [
  {
    icon: BarChart,
    sector: "Governance",
    title: "Assurance Transformation",
    challenge: "Redesigned a fragmented divisional audit programme across 24 contracts in 3 countries, operating in safety-critical aviation, rail and FM environments.",
    action: "As divisional lead, harmonised risk registers, embedded the 'Three Lines of Defence' model, and led ~30 embedded Quality & HSE focal points.",
    result: "Reduced non-conformities by 55% and maintained 100% on-time audit closure for 5+ years."
  },
  {
    icon: Plane,
    sector: "Aviation (GCAA)",
    title: "Air Traffic Control Quality",
    challenge: "Safety-critical ATC operations at RAK Airport requiring strict GCAA regulatory alignment and post-holder readiness.",
    action: "Established audit frameworks, briefed CEO/Accountable Managers on regulatory risks, and managed vendor evaluations.",
    result: "Moved from 'conditional' to 'fully compliant' in client vendor assessments, supporting multi-year contract renewals."
  },
  {
    icon: Activity,
    sector: "Infrastructure",
    title: "Enterprise Risk Mitigation",
    challenge: "Fragmented risk frameworks across major business units in a two-year period of rapid operational shifts.",
    action: "Introduced harmonised risk registers and Quarterly Compliance Assurance (RCAG) forums to eliminate 'red' control ratings.",
    result: "30% reduction in high-rated operational risks and institutionalised reliability across automated rail systems."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-y border-white/5 bg-[#111]/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">03 // Proof of Work</h2>
        <h3 className="font-light text-3xl md:text-4xl text-white mb-12 md:mb-16">High-Stakes Case Studies</h3>

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
                  <h5 className="font-mono text-[9px] tracking-widest text-indigo-400 uppercase">Result</h5>
                  <p className="text-sm text-white">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
