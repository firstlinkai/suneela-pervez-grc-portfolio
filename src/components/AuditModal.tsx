import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, X, ChevronRight } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-black border border-white/10 w-full max-w-lg shadow-2xl overflow-hidden relative rounded-xl"
          >
            {/* Top accent bar */}
            <div className="h-1 bg-brand w-full absolute top-0 left-0" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="p-8 mt-2">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-4 h-4 text-brand" />
                <h3 className="font-bold text-2xl text-white uppercase tracking-tighter italic">Firstlink <span className="text-brand">Audit</span></h3>
              </div>
              
              <p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                Get a comprehensive health check of your governance frameworks. Fill out your details below to schedule a strategic diagnostic with our firm's advisory team.
              </p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Lead capture simulated. Connecting to Firstlink Group CRM."); onClose(); }}>
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="executive@company.com" 
                    className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors rounded-none placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Primary Challenge</label>
                  <select className="w-full bg-black border border-white/10 text-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors appearance-none rounded-none">
                    <option>Integrated Management Architecture</option>
                    <option>Regulatory Shielding (GCAA/RTA)</option>
                    <option>Three Lines of Defence Implementation</option>
                    <option>Digital Risk & ESG Strategy</option>
                    <option>Other Strategic Advisory</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-brand hover:bg-white text-black font-bold py-3 rounded-none transition-all mt-6 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]">
                  Request Diagnostic <ChevronRight className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-6 text-center">
                 <p className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">Global Executive Assurance. 100% Confidential.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
