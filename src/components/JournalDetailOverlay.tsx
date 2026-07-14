import React from 'react';
import { motion } from 'motion/react';
import { X, Clock, Heart, ArrowRight } from 'lucide-react';
import { JournalItem } from '../types';

interface JournalDetailOverlayProps {
  article: JournalItem;
  onClose: () => void;
  liked: boolean;
  onToggleLike: () => void;
  onStartProject: (category: string) => void;
}

export const JournalDetailOverlay: React.FC<JournalDetailOverlayProps> = ({
  article,
  onClose,
  liked,
  onToggleLike,
  onStartProject,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 z-40 bg-neutral-950/95 backdrop-blur-2xl flex flex-col p-5 sm:p-8 justify-between overflow-y-auto"
      id="article-detail-overlay"
    >
      {/* Overlay Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 shrink-0" id="article-detail-header">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">Journal Entry</span>
          <span className="text-neutral-600">/</span>
          <span className="text-xs font-mono text-amber-400 uppercase">
            {article.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          id="article-detail-close"
          aria-label="Close article"
        >
          <X size={18} />
        </button>
      </div>

      {/* Hero Header Image Banner */}
      <div className="w-full h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl mb-6 shrink-0" id={`article-detail-banner-${article.id}`}>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
          id={`article-detail-banner-img-${article.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-black/40 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-white/60 tracking-wider uppercase">{article.category} RESEARCH</span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-white tracking-tight leading-none">
              {article.title}
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-neutral-300">
            <span>{article.publishDate}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:items-start" id="article-detail-body">
        {/* Left Side: Article Content */}
        <div className="flex-1 flex flex-col gap-6" id="article-detail-left">
          {/* Mobile Metadata */}
          <div className="flex sm:hidden items-center justify-between bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-neutral-400 font-mono">
            <span>{article.publishDate}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
          </div>

          {/* Curated Narrative Section */}
          <div className="flex flex-col gap-5 max-w-3xl" id="article-narrative">
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
              {article.introduction}
            </p>

            {/* Key Insights Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3.5" id="article-key-insights">
              <h4 className="text-xs font-mono text-amber-300 uppercase tracking-wider">Tactical Insights</h4>
              <div className="flex flex-col gap-3">
                {article.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Deep Dive</h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                {article.deepDive}
              </p>
            </div>

            <div className="border-l-2 border-amber-400 pl-4 py-1.5 my-1 bg-amber-400/5 rounded-r-xl">
              <h5 className="text-xs font-semibold text-amber-300 uppercase tracking-wider font-mono mb-1">Key Takeaway</h5>
              <p className="text-neutral-200 text-xs sm:text-sm italic leading-relaxed font-sans">
                {article.takeaway}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar Panel */}
        <div className="w-full lg:w-80 shrink-0 flex flex-col gap-5" id="article-detail-right">
          {/* Share or Like block */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4" id="article-interaction-card">
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Reader tools</h4>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-300 font-sans">Did you find this valuable?</span>
              <button 
                onClick={onToggleLike}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-sm ${
                  liked
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-amber-400 text-black hover:bg-amber-300'
                }`}
              >
                <Heart size={12} fill={liked ? "white" : "none"} />
                {liked ? 'Liked!' : 'Like'}
              </button>
            </div>
          </div>

          {/* Immediate Action CTA */}
          <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-2xl p-5 flex flex-col gap-4" id="article-detail-cta">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-white">Need help implementing this?</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We build high-converting brands and scale them with custom code, premium SEO, and conversion optimization.
              </p>
            </div>
            <button
              onClick={() => onStartProject(article.category)}
              className="w-full bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              id="article-cta-submit"
            >
              Start a project <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-4 mt-6 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" id="article-detail-footer">
        <span className="text-xs text-neutral-500 font-mono">Forma Journal & Insights</span>
        <button
          onClick={onClose}
          className="text-xs text-neutral-300 hover:text-white transition-colors underline decoration-dotted underline-offset-4 font-mono flex items-center gap-1.5 cursor-pointer"
        >
          Back to insights
        </button>
      </div>
    </motion.div>
  );
};
