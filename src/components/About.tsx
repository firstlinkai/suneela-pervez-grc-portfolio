import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-[#111]/30 border-y border-white/5 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
         <Terminal className="w-64 h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase block">01 // The "Guard" Perspective</h2>
          <div className="h-px w-12 bg-white/10" />
          <h3 className="font-light text-4xl text-white leading-tight">
            "I don't just find problems; I build the systems that prevent them."
          </h3>
          <p className="text-slate-400 leading-relaxed font-light">
            With over 15+ years of experience in "Zero-Fail" environments, maintaining operations isn't enough. It's about engineering a culture of compliance that scales with revenue.
          </p>
          <div className="p-6 border border-white/5 bg-[#111] rounded-sm mt-6 relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 transition-colors" />
            <h4 className="font-mono text-[10px] tracking-widest text-white mb-2 uppercase">The Bridge</h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Combining deep technical literacy with strategic business acumen. Delivering the unique capability to govern complex technical systems while protecting P&L and ensuring boardroom alignment.
            </p>
          </div>
        </motion.div>
        
        <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px]">
          <div className="absolute inset-0 border border-white/5 bg-[#111]/50 flex flex-col justify-between p-8 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]"></div>
            <div className="relative flex justify-between items-start z-10">
              <div className="font-mono text-[10px] text-indigo-400/60 leading-tight uppercase tracking-widest">
                SEQ: 091-A <br/>
                SYSTEM: SECURE <br/>
                LAT/LON: OMAX
              </div>
              <ShieldCheck className="w-6 h-6 text-indigo-500/40" />
            </div>
            
            <div className="relative h-48 w-full border-b border-white/5 z-10">
              <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q20,60 40,70 T80,40 T100,20" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="0.5" />
                <path d="M0,90 Q20,80 40,85 T80,50 T100,30" fill="none" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="0.5" />
                <path d="M0,95 Q20,95 40,90 T80,60 T100,40" fill="none" className="stroke-white/10" strokeWidth="0.5" strokeDasharray="2,2" />
              </svg>
              <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/80 px-2 py-1 border border-white/5 font-mono text-[10px] text-indigo-300 backdrop-blur-md">
                INCIDENT_RATE: 0.00%
              </div>
            </div>
            
            <div className="relative grid grid-cols-3 gap-4 pt-4 border-t border-white/5 z-10">
              <div>
                <div className="font-mono text-[10px] text-slate-500 mb-1">AUDIT SUCCESS</div>
                <div className="font-light text-xl text-white">100%</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 mb-1">SECTORS</div>
                <div className="font-light text-xl text-white">4+</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 mb-1">YEARS</div>
                <div className="font-light text-xl text-white">15+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
