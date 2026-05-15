import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. Connecting with Firstlink Governance advisory...");
    // Future integration with info@firstlinkai.com
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mb-4">05 // Strategic Intake</h2>
          <h3 className="font-bold text-3xl md:text-4xl text-white italic uppercase tracking-tighter mb-6">
            Initiate a <span className="text-brand">Discovery Call</span>
          </h3>
          <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-md text-sm md:text-base">
            Ready to institutionalize excellence? Our advisory team is available for high-stakes GRC diagnostic sessions. Let's bridge the gap between regulatory mandates and organizational reliability.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                <Mail className="w-4 h-4 text-brand" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">General Enquiries</div>
                <div className="text-white font-medium">info@firstlinkai.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black border border-white/10 p-8 md:p-10 rounded-sm relative group">
          <div className="absolute top-0 left-0 w-1 h-0 bg-brand group-hover:h-full transition-all duration-700" />
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                <User className="w-3 h-3" /> Full Name
              </label>
              <input 
                type="text" 
                required
                placeholder="Executive Name"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors rounded-none placeholder:text-slate-600"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                <Mail className="w-3 h-3" /> Corporate Email
              </label>
              <input 
                type="email" 
                required
                placeholder="executive@company.com"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors rounded-none placeholder:text-slate-600"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                <MessageSquare className="w-3 h-3" /> Strategic Context / Inquiry
              </label>
              <textarea 
                required
                rows={4}
                placeholder="Briefly describe your regulatory context or governance challenge..."
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors rounded-none placeholder:text-slate-600 resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand hover:bg-white text-black font-bold py-4 transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px] mt-4"
            >
              Submit Inquiry <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
