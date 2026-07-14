import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 cursor-pointer" 
      id={`project-card-${index + 1}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
        {/* Project Thumbnail Image */}
        <div className="w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 relative bg-neutral-900" id={`project-card-image-container-${project.id}`}>
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            id={`project-card-image-${project.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono ${project.badgeColor}`}>{project.num} / {project.category}</span>
            <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full font-mono">{project.badge}</span>
          </div>
          <h3 className="text-white text-lg font-semibold group-hover:text-pink-300 transition-colors">{project.title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Action Arrow */}
      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 group-hover:bg-white/20 transition-all self-end sm:self-center">
        <ArrowRight size={16} />
      </div>
    </motion.div>
  );
};
