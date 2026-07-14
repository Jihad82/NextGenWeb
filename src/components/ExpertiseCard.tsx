import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseCardProps {
  cap: ExpertiseItem;
  onClick: () => void;
  index: number;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ cap, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 flex gap-4 items-start cursor-pointer" 
      id={`cap-card-${cap.id}`}
    >
      <div className={`w-10 h-10 rounded-xl ${cap.bgIconColor} flex items-center justify-center shrink-0`}>
        {cap.iconName === 'Monitor' && <Monitor size={18} />}
        {cap.iconName === 'Layers' && <Layers size={18} />}
        {cap.iconName === 'TrendingUp' && <TrendingUp size={18} />}
      </div>
      <div className="flex-1">
        <h3 className="text-white text-base font-semibold mb-1 group-hover:text-blue-300 transition-colors">{cap.title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          {cap.summary}
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 shrink-0 group-hover:bg-white/15 group-hover:text-white group-hover:translate-x-1 transition-all self-center">
        <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};
