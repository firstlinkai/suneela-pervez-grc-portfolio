import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    tier: "Tier 1",
    title: "Compliance Foundation",
    features: [
      "ISO 9001 Readiness Roadmaps",
      "SOP Development & Audits",
      "Regulatory Health Checks"
    ],
    investment: "$5k - $8k",
    unit: "USD"
  },
  {
    tier: "Tier 2",
    title: "Strategic Resilience",
    features: [
      "GCAA/Rail Aviation Readiness",
      "Integrated Management Systems (IMS)",
      "Enterprise Risk Management (ERM) Frameworks"
    ],
    investment: "$15k - $25k",
    unit: "USD",
    recommended: true
  },
  {
    tier: "Tier 3",
    title: "Fractional CCO",
    features: [
      "Executive Board Advisory",
      "Digital Governance & Strategy Integration",
      "ISO 55001 Advanced Policy"
    ],
    investment: "$7k - $12k",
    unit: "/mo USD"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">04 // Service Architecture</h2>
        <h3 className="font-light text-3xl md:text-4xl text-white">The 3-Tier Model</h3>
        <p className="text-slate-400 mt-4 max-w-2xl font-light text-sm md:text-base">Scalable governance structures designed for different maturity stages of enterprise risk.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <div key={idx} className={`border p-6 md:p-8 flex flex-col h-full relative ${tier.recommended ? 'border-indigo-500/20 bg-[#111] shadow-2xl shadow-indigo-500/5' : 'border-white/5 bg-[#111]/30'}`}>
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-indigo-500 text-white font-mono text-[9px] font-medium px-3 py-1 uppercase tracking-widest">
                Recommended
              </div>
            )}
            <div className={`font-mono text-[10px] tracking-widest mb-2 uppercase ${tier.recommended ? 'text-indigo-400' : 'text-slate-500'}`}>{tier.tier}</div>
            <h4 className="font-medium text-xl md:text-2xl text-white mb-6">{tier.title}</h4>
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.recommended ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span className={`text-xs md:text-sm font-light leading-relaxed ${tier.recommended ? 'text-slate-300' : 'text-slate-400'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/5 mt-auto">
              <div className="font-mono text-[9px] tracking-widest text-slate-500 mb-1 uppercase">Investment</div>
              <div className="font-light text-xl text-white">{tier.investment} <span className="text-sm text-slate-500">{tier.unit}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
