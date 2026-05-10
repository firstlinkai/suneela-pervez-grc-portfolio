import React from 'react';
import { Plane, Train, Building2, Landmark } from 'lucide-react';

const sectors = [
  {
    icon: Plane,
    title: "Aviation & Air Traffic Services",
    desc: "GCAA-regulated environments and safety-critical operations requiring 100% compliance."
  },
  {
    icon: Train,
    title: "Transportation (Metro & Rail)",
    desc: "Large-scale, 24/7 automated transport networks with high-reliability governance."
  },
  {
    icon: Building2,
    title: "Critical Infrastructure & FM",
    desc: "Multi-site service operations requiring ISO 55001 and high-stakes asset management."
  },
  {
    icon: Landmark,
    title: "Government Entities",
    desc: "Public sector bodies requiring advanced ethics, compliance, and internal control frameworks."
  }
];

export const Sectors: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <div key={idx} className="group">
              <div className="w-12 h-12 flex items-center justify-center bg-[#111] border border-white/5 rounded-sm mb-6 group-hover:border-indigo-500/50 transition-colors">
                <sector.icon className="w-5 h-5 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-medium text-white mb-3 text-lg">{sector.title}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
