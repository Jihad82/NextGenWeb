import React from 'react';
import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseDetailOverlayProps {
  selectedExpertise: ExpertiseItem;
  onClose: () => void;
  onStartProject: (id: string) => void;
}

export const ExpertiseDetailOverlay: React.FC<ExpertiseDetailOverlayProps> = ({
  selectedExpertise,
  onClose,
  onStartProject,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 z-40 bg-neutral-950/95 backdrop-blur-2xl flex flex-col p-5 sm:p-8 justify-between overflow-y-auto"
      id="expertise-detail-overlay"
    >
      {/* Overlay Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 shrink-0" id="expertise-detail-header">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">Expertise Area</span>
          <span className="text-neutral-600">/</span>
          <span className="text-xs font-mono text-blue-400 uppercase">
            {selectedExpertise.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          id="expertise-detail-close"
          aria-label="Close details"
        >
          <X size={18} />
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:items-start" id="expertise-detail-body">
        {/* Left Side: Main content */}
        <div className="flex-1 flex flex-col gap-6" id="expertise-detail-left">
          {/* Title & Category Badge */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400">{selectedExpertise.num} . </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{selectedExpertise.category} SPECIALTY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-white tracking-tight leading-tight mt-1">
              {selectedExpertise.title}
            </h2>
          </div>

          {/* Curated Narrative Section */}
          <div className="flex flex-col gap-5 max-w-3xl" id="expertise-narrative">
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
              {selectedExpertise.introduction}
            </p>

            {/* Methodology Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3.5" id="expertise-methodology">
              <h4 className="text-xs font-mono text-blue-300 uppercase tracking-wider">Our Methodology</h4>
              <div className="flex flex-col gap-3.5">
                {selectedExpertise.methodology.map((step, idx) => {
                  const [title, desc] = step.split(': ');
                  return (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <h5 className="text-white text-xs sm:text-sm font-semibold font-mono tracking-wide">{title}</h5>
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans mt-0.5">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deep Dive Section */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Strategic Focus</h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                {selectedExpertise.deepDive}
              </p>
            </div>

            {/* Key Takeaway Box */}
            <div className="border-l-2 border-blue-400 pl-4 py-1.5 my-1 bg-blue-400/5 rounded-r-xl">
              <h5 className="text-xs font-semibold text-blue-300 uppercase tracking-wider font-mono mb-1">Core Takeaway</h5>
              <p className="text-neutral-200 text-xs sm:text-sm italic leading-relaxed font-sans">
                {selectedExpertise.takeaway}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar Panel */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-5" id="expertise-detail-right">
          {/* Services/Deliverables Box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5" id="expertise-detail-deliverables">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">Key Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {selectedExpertise.deliverables.map((item: string) => (
                <span 
                  key={item} 
                  className="bg-white/5 border border-white/10 text-neutral-300 text-xs px-2.5 py-1 rounded-full font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Immediate Action CTA */}
          <div className="bg-gradient-to-br from-blue-400/10 to-transparent border border-blue-400/20 rounded-2xl p-5 flex flex-col gap-4" id="expertise-detail-cta">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-white">Deploy this to your business</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Let's engineer, launch, and optimize a tailored high-performance solution for your specific brand goals.
              </p>
            </div>
            <button
              onClick={() => onStartProject(selectedExpertise.id)}
              className="w-full bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              id="expertise-cta-submit"
            >
              Start a project <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-4 mt-6 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" id="expertise-detail-footer">
        <span className="text-xs text-neutral-500 font-mono">Forma Capabilities Archive</span>
        <button
          onClick={onClose}
          className="text-xs text-neutral-300 hover:text-white transition-colors underline decoration-dotted underline-offset-4 font-mono flex items-center gap-1.5 cursor-pointer"
        >
          Back to capabilities
        </button>
      </div>
    </motion.div>
  );
};
