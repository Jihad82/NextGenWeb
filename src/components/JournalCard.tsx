import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock } from 'lucide-react';
import { JournalItem } from '../types';

interface JournalCardProps {
  article: JournalItem;
  onClick: () => void;
  index: number;
}

export const JournalCard: React.FC<JournalCardProps> = ({ article, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-4 items-stretch sm:items-center" 
      id={`article-card-${index + 1}`}
    >
      {/* Article Thumbnail Image */}
      <div className="w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 relative bg-neutral-900" id={`article-card-image-container-${article.id}`}>
        <img 
          src={article.thumbnail} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          id={`article-card-image-${article.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400" id={`article-meta-${index + 1}`}>
          <span className="flex items-center gap-1"><BookOpen size={10} /> {article.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
        </div>
        <h3 className="text-white text-base font-semibold group-hover:text-amber-300 transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
          {article.summary}
        </p>
      </div>
    </motion.div>
  );
};
