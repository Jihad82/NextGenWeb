import React from 'react';
import { motion } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailOverlayProps {
  project: ProjectItem;
  onClose: () => void;
  onStartProject: (services: string[]) => void;
}

export const ProjectDetailOverlay: React.FC<ProjectDetailOverlayProps> = ({
  project,
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
      id="project-detail-overlay"
    >
      {/* Overlay Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 shrink-0" id="project-detail-header">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">Case Study</span>
          <span className="text-neutral-600">/</span>
          <span className={`text-xs font-mono uppercase ${project.badgeColor}`}>
            {project.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          id="project-detail-close"
          aria-label="Close details"
        >
          <X size={18} />
        </button>
      </div>

      {/* Hero Project Image Banner */}
      <div className="w-full h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl mb-6 shrink-0" id={`project-detail-banner-${project.id}`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
          id={`project-detail-banner-img-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-black/40 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-white/60 tracking-wider uppercase">{project.category} CASE STUDY</span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-white tracking-tight leading-none">
              {project.title}
            </h1>
          </div>
          <div className="hidden sm:flex items-baseline gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`text-lg sm:text-xl font-mono font-bold tracking-tight ${project.badgeColor}`}>
              {project.badge}
            </span>
            <span className="text-[10px] text-neutral-300 font-sans uppercase">outcome</span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:items-start" id="project-detail-body">
        {/* Left Side: Info */}
        <div className="flex-1 flex flex-col gap-6" id="project-detail-left">
          {/* Mobile Outcome Stat */}
          <div className="flex sm:hidden items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl">
            <span className="text-xs text-neutral-400 font-sans uppercase">Delivered Outcome</span>
            <span className={`text-xl font-mono font-bold tracking-tight ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>

          {/* Curated Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="project-narrative">
            <div className="flex flex-col gap-1.5" id="narrative-challenge">
              <h4 className="text-neutral-400 text-xs font-semibold uppercase font-mono tracking-wider">The Challenge</h4>
              <p className="text-neutral-200 text-sm leading-relaxed font-sans font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="flex flex-col gap-1.5" id="narrative-solution">
              <h4 className="text-neutral-400 text-xs font-semibold uppercase font-mono tracking-wider">Our Solution</h4>
              <p className="text-neutral-200 text-sm leading-relaxed font-sans font-normal">
                {project.solution}
              </p>
            </div>

            <div className="flex flex-col gap-1.5" id="narrative-results">
              <h4 className="text-neutral-400 text-xs font-semibold uppercase font-mono tracking-wider">The Results</h4>
              <p className="text-neutral-200 text-sm leading-relaxed font-sans font-normal">
                {project.results}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar Panel */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-5" id="project-detail-right">
          {/* Delivered Services */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5" id="project-detail-services">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">Services Delivered</h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service: string) => (
                <span 
                  key={service} 
                  className="bg-white/5 border border-white/10 text-neutral-300 text-xs px-2.5 py-1 rounded-full font-mono"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Immediate Action CTA */}
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-5 flex flex-col gap-4" id="project-detail-cta">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-white">Ready for similar growth?</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Let's customize custom code, advanced SEO, and high-conversion strategy to scale your brand.
              </p>
            </div>
            <button
              onClick={() => onStartProject(project.services)}
              className="w-full bg-white text-black hover:bg-neutral-200 active:scale-95 transition-all py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              id="project-cta-submit"
            >
              Start a project <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-4 mt-6 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" id="project-detail-footer">
        <span className="text-xs text-neutral-500 font-mono">Forma Case Study Archive</span>
        <button
          onClick={onClose}
          className="text-xs text-neutral-300 hover:text-white transition-colors underline decoration-dotted underline-offset-4 font-mono flex items-center gap-1.5 cursor-pointer"
        >
          Back to case studies
        </button>
      </div>
    </motion.div>
  );
};
