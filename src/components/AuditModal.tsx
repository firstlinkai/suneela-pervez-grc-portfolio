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
            className="bg-[#111] border border-white/10 w-full max-w-lg shadow-2xl overflow-hidden relative rounded-xl"
          >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 w-full absolute top-0 left-0" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="p-8 mt-2">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-4 h-4 text-indigo-400" />
                <h3 className="font-light text-2xl text-white">Compliance Maturity Audit</h3>
              </div>
              
              <p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                Get a comprehensive health check of your governance frameworks. Fill out your details below to schedule a 30-minute strategic diagnostic directly with Suneela.
              </p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Lead capture simulated for prototype. Connect forms to backend."); onClose(); }}>
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="executive@company.com" 
                    className="w-full bg-[#0a0a0a] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors rounded-none placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-2">Primary Challenge</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 text-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors appearance-none rounded-none">
                    <option>Regulatory Compliance (ISO / GCAA)</option>
                    <option>Operational Inefficiency</option>
                    <option>Risk Management Restructuring</option>
                    <option>Digital Governance Strategy</option>
                    <option>Other / Advisory</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-white hover:bg-slate-200 text-[#0a0a0a] font-medium py-3 rounded-none transition-colors mt-6 flex items-center justify-center gap-2">
                  Request Diagnostic <ChevronRight className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-6 text-center">
                 <p className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">100% Confidential. Zero Obligation.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
