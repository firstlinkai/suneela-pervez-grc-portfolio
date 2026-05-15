import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    tier: "Tier 1",
    title: "Institutional Capability & Special Projects",
    focus: "Design and delivery of high-impact training and technical internal control systems.",
    bestFor: "Entities looking to resolve operational bottlenecks or train staff in specialized Root Cause Analysis.",
    features: [
      "Bespoke Corporate Training",
      "ISO 55001 Asset Management Strategy",
      "Technical Process Optimization",
      "Internal Control Systems Design"
    ],
    engagement: "Fixed-Fee Project / Milestone-Based",
    investment: "$2,500+",
    unit: "Typical Investment",
    outcome: "Eliminate repeat findings in core processes."
  },
  {
    tier: "Tier 2",
    title: "Leadership Coaching & Transformation",
    focus: "Coaching for Compliance/Quality heads and embedding a 'Quality-First' culture.",
    bestFor: "Organizations needing to strengthen leadership capability in safety-critical operations.",
    features: [
      "Regulatory Leadership Coaching",
      "Change Management Support",
      "Audit Readiness Mentoring",
      "Leadership Quality Culture Setup"
    ],
    engagement: "Structured Program / Monthly Blocks",
    investment: "$3,500+",
    unit: "Typical Investment",
    recommended: true,
    outcome: "Embed resilient governance across leadership layers."
  },
  {
    tier: "Tier 3",
    title: "Executive Advisory & GRC Transformation",
    focus: "Board-level risk oversight, GRC framework architecture, and implementation.",
    bestFor: "Organizations undergoing rapid scaling or facing high-stakes regulatory shifts.",
    features: [
      "Enterprise Quality Strategy",
      "ISO Certification Readiness Roadmaps",
      "Audit Governance Frameworks",
      "Three Lines of Defence Model"
    ],
    engagement: "Monthly Strategic Retainer",
    investment: "$5,000+",
    unit: "Typical Investment",
    outcome: "Reduce non-conformities by ~55% in critical areas."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">04 // Service Architecture</h2>
        <h3 className="font-light text-3xl md:text-4xl text-white">Strategic Engagement & Advisory Models</h3>
        <p className="text-slate-400 mt-4 max-w-3xl font-light text-sm md:text-base leading-relaxed">
          To ensure the highest level of impact, all engagements are bespoke and customized to the client's specific regulatory complexity and organizational scale. Strategic partnerships are structured around high-value outcomes rather than billable hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <div key={idx} className={`border p-6 md:p-8 flex flex-col h-full relative ${tier.recommended ? 'border-indigo-500/20 bg-[#111] shadow-2xl shadow-indigo-500/5' : 'border-white/5 bg-[#111]/30'}`}>
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-indigo-500 text-white font-mono text-[9px] font-medium px-3 py-1 uppercase tracking-widest">
                Most Requested
              </div>
            )}
            <div className={`font-mono text-[10px] tracking-widest mb-2 uppercase ${tier.recommended ? 'text-indigo-400' : 'text-slate-500'}`}>{tier.tier}</div>
            <h4 className="font-medium text-xl md:text-2xl text-white mb-4 leading-tight">{tier.title}</h4>
            
            <p className="text-xs text-slate-500 font-mono mb-6 uppercase tracking-wider">{tier.engagement}</p>

            <div className="space-y-4 mb-8 flex-1">
              <div className="pb-4 border-b border-white/5">
                <div className="font-mono text-[8px] text-slate-500 uppercase mb-2">Primary Focus</div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{tier.focus}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.recommended ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <span className={`text-xs font-light leading-relaxed ${tier.recommended ? 'text-slate-300' : 'text-slate-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.outcome && (
                <div className="pt-4 border-t border-white/5">
                  <div className="font-mono text-[8px] text-indigo-400 uppercase mb-2">Target Outcome</div>
                  <p className="text-[10px] text-slate-400 italic font-light leading-relaxed">{tier.outcome}</p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-white/5 mt-auto">
              <div className="font-mono text-[9px] tracking-widest text-slate-500 mb-1 uppercase">Investment</div>
              <div className="font-light text-xl text-white">{tier.investment} <span className="text-[10px] text-slate-500 uppercase ml-1 tracking-tighter">{tier.unit}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
