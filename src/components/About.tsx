import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-[#111]/30 border-y border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
         <Terminal className="w-48 h-48 md:w-64 md:h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase block">01 // The Firstlink Standard</h2>
          <div className="h-px w-12 bg-brand/30" />
          <h3 className="font-bold text-3xl md:text-4xl text-white leading-tight">
            We don't just manage compliance; <span className="text-brand">we institutionalize quality.</span>
          </h3>
          <p className="text-slate-300 leading-relaxed font-light text-sm md:text-base">
            Firstlink Governance is a boutique consultancy specializing in the architecture of high-trust management systems. We serve organizations where operational failure is not an option.
          </p>
          <p className="text-slate-300 leading-relaxed font-light text-sm md:text-base">
            Led by Principal Consultant Suneela Pervez—a recognized authority in GCAA and Rail safety—our firm delivers a dual-edge advantage: technical precision combined with strategic foresight.
          </p>
          
          {/* Three Lines of Defence Diagram */}
          <div className="mt-8 p-6 bg-black border border-white/5 rounded-sm">
            <h4 className="font-mono text-[10px] tracking-widest text-brand mb-6 uppercase text-center">Three Lines of Defence Model</h4>
            <div className="grid grid-cols-3 gap-2 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
              {[
                { l: "1st", t: "Business Operations", d: "Management Controls" },
                { l: "2nd", t: "Risk & Compliance", d: "Monitoring & Oversight" },
                { l: "3rd", t: "Internal Audit", d: "Independent Assurance" }
              ].map((line, i) => (
                <div key={i} className="relative z-10 bg-black border border-white/10 p-3 text-center group hover:border-brand transition-colors">
                  <div className="font-mono text-[10px] text-brand mb-1">{line.l}</div>
                  <div className="text-[9px] text-white font-bold uppercase mb-1 leading-tight">{line.t}</div>
                  <div className="text-[8px] text-slate-500 leading-tight">{line.d}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0 border border-white/5 bg-[#050505] flex flex-col justify-between p-6 md:p-8 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.05),transparent_70%)]"></div>
            <div className="relative flex justify-between items-start z-10">
              <div className="font-mono text-[9px] md:text-[10px] text-brand/60 leading-tight uppercase tracking-widest">
                UNIT: FL_GOV <br/>
                STATUS: SECURE <br/>
                LOC: GLOBAL
              </div>
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-brand/40" />
            </div>
            
            <div className="relative h-32 md:h-48 w-full border-b border-white/5 z-10">
              <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q20,60 40,70 T80,40 T100,20" fill="none" stroke="#facc15" strokeOpacity="0.4" strokeWidth="0.5" />
                <path d="M0,90 Q20,80 40,85 T80,50 T100,30" fill="none" stroke="#facc15" strokeOpacity="0.2" strokeWidth="0.5" />
              </svg>
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 border border-brand/20 font-mono text-[9px] md:text-[10px] text-brand backdrop-blur-md">
                REPEAT_FINDINGS: NEAR 0%
              </div>
            </div>
            
            <div className="relative grid grid-cols-3 gap-4 pt-4 border-t border-white/5 z-10">
              <div>
                <div className="font-mono text-[8px] md:text-[10px] text-slate-500 mb-1 tracking-tighter">AUDIT CLOSURE</div>
                <div className="font-bold text-lg md:text-xl text-white">100%</div>
              </div>
              <div>
                <div className="font-mono text-[8px] md:text-[10px] text-slate-500 mb-1 tracking-tighter">COUNTRIES</div>
                <div className="font-bold text-lg md:text-xl text-white">3</div>
              </div>
              <div>
                <div className="font-mono text-[8px] md:text-[10px] text-slate-500 mb-1 tracking-tighter">CONTRACTS</div>
                <div className="font-bold text-lg md:text-xl text-white">24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
