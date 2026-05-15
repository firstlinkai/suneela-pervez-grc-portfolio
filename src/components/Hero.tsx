import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

interface HeroProps {
  onAuditClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAuditClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-40 grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-8 border border-brand/30 bg-brand/5 rounded-full font-mono text-[9px] md:text-[10px] text-brand uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Firstlink Governance Framework
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
          Strategic <span className="text-brand">Resilience</span><br className="hidden sm:block"/>
          for High-Stakes Operations.
        </h1>
        
        <p className="text-base md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8 md:mb-10 border-l px-4 border-brand/50">
          Firstlink Governance provides executive-level GRC oversight for the world’s most regulated industries. From Aviation to Rail, we bridge the gap between regulatory mandates and institutional excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => {
              const el = document.getElementById('expertise');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center justify-center gap-3 bg-brand hover:bg-white text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-sm transition-all duration-300"
          >
            View Our Frameworks
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onAuditClick}
            className="flex items-center justify-center gap-3 border border-white/20 hover:bg-white/5 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-sm transition-all duration-300"
          >
            Book a Strategic Consultation
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-5 relative"
      >
        <div className="aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 relative group bg-[#111]">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
          
          <img 
            src="/profile.png" 
            alt="Suneela Pervez" 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
};
