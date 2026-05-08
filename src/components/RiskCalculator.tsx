import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ShieldCheck, ChevronRight, RefreshCw, BarChart3 } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "What is your primary industry sector?",
    options: [
      { label: "Aviation (GCAA/FAA)", value: 10 },
      { label: "Rail & Infrastructure", value: 8 },
      { label: "Energy & Utilities", value: 7 },
      { label: "Financial Services / Other", value: 5 }
    ]
  },
  {
    id: 2,
    text: "How would you describe your current Audit Readiness?",
    options: [
      { label: "100% Closure - Always ready", value: 10 },
      { label: "Mostly compliant, minor gaps", value: 7 },
      { label: "Significant historical findings", value: 4 },
      { label: "Not currently tracking", value: 2 }
    ]
  },
  {
    id: 3,
    text: "What is your primary Governance tool?",
    options: [
      { label: "Integrated Management Systems (IMS)", value: 10 },
      { label: "Dedicated GRC Software", value: 8 },
      { label: "Spreadsheets & Manual Tracking", value: 4 },
      { label: "Ad-hoc / Paper-based", value: 1 }
    ]
  },
  {
    id: 4,
    text: "How engaged is the Board in GRC strategy?",
    options: [
      { label: "Strategic priority with quarterly reviews", value: 10 },
      { label: "Informed but reactive", value: 6 },
      { label: "Limited visibility of GRC risks", value: 3 },
      { label: "Compliance is handled at lower levels", value: 1 }
    ]
  }
];

export const RiskCalculator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (value: number) => {
    const newScores = [...scores, value];
    setScores(newScores);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setScores([]);
    setShowResult(false);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const maxPossible = questions.length * 10;
  const percentage = (totalScore / maxPossible) * 100;

  const getRecommendation = () => {
    if (percentage > 80) return { tier: "Tier 3: Fractional CCO", desc: "You have a solid foundation. You now need strategic board-level advisory to optimize and lead digital governance." };
    if (percentage > 50) return { tier: "Tier 2: Strategic Resilience", desc: "You are operational but have critical gaps. You need integrated management systems and GCAA/Rail readiness programs." };
    return { tier: "Tier 1: Compliance Foundation", desc: "Your governance framework needs an urgent baseline audit. We recommend starting with ISO roadmaps and SOP development." };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-16 md:py-24 max-w-4xl mx-auto px-6">
      <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 w-full" />
        
        <div className="p-6 md:p-12">
          {!showResult ? (
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <h2 className="font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-2">Diagnostic Tool</h2>
                  <h3 className="text-2xl md:text-3xl font-light text-white">Resilience Calculator</h3>
                </div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  Step {step + 1} of {questions.length}
                </div>
              </div>

              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="py-4 md:py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg md:text-xl text-slate-200 mb-6 md:mb-8 font-light leading-relaxed">
                      {questions[step].text}
                    </h4>
                    <div className="grid gap-3">
                      {questions[step].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionSelect(opt.value)}
                          className="w-full text-left p-4 border border-white/5 bg-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group flex items-center justify-between rounded-sm"
                        >
                          <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 md:space-y-8 py-4"
            >
              <div className="flex justify-center">
                <div className="relative">
                   <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
                   {percentage > 70 ? (
                     <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-indigo-400 relative z-10" />
                   ) : (
                     <ShieldAlert className="w-16 h-16 md:w-20 md:h-20 text-indigo-500/60 relative z-10" />
                   )}
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-2">Score: {Math.round(percentage)}%</h3>
                <p className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Maturity Quotient</p>
              </div>

              <div className="max-w-md mx-auto p-5 md:p-6 border border-white/10 bg-[#0a0a0a] rounded-lg">
                <h4 className="text-indigo-400 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3">Recommended Path</h4>
                <p className="text-white font-medium text-base md:text-lg mb-4">{recommendation.tier}</p>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  {recommendation.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
                 <button 
                  onClick={() => {
                    const el = document.getElementById('services');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-[#0a0a0a] px-6 md:px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors text-sm md:text-base"
                 >
                   View Solutions <BarChart3 className="w-4 h-4" />
                 </button>
                 <button 
                  onClick={reset}
                  className="border border-white/10 text-slate-400 px-6 md:px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm md:text-base"
                 >
                   Retake Diagnostic <RefreshCw className="w-4 h-4" />
                 </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
