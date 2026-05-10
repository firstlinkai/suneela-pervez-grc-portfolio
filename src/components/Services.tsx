import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    tier: "Tier 1",
    title: "Executive Advisory",
    features: [
      "GRC Transformation Strategy",
      "ISO Certification Readiness",
      "Audit Governance Strategy",
      "Board-Level Risk Reporting"
    ],
    investment: "$800 – $2,200",
    unit: "Daily"
  },
  {
    tier: "Tier 2",
    title: "Leadership Coaching",
    features: [
      "Change Leadership Frameworks",
      "Regulatory Coaching for Heads",
      "Building Quality Culture",
      "Functional Governance Setup"
    ],
    investment: "$950 – $1,500",
    unit: "Session",
    recommended: true
  },
  {
    tier: "Tier 3",
    title: "Capability Development",
    features: [
      "Bespoke Corporate Training",
      "Root Cause Analysis Workshops",
      "ISO Standards Training",
      "Risk Management Seminars"
    ],
    investment: "$700 – $1,200",
    unit: "Daily"
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
