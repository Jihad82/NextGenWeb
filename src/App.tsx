import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data & Types
import { ProjectItem, JournalItem, ExpertiseItem } from './types';
import { 
  VIDEO_URL, 
  SERVICES, 
  PROJECTS_DATA, 
  JOURNAL_DATA, 
  EXPERTISE_DATA 
} from './data';

// Components
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailOverlay } from './components/ProjectDetailOverlay';
import { JournalCard } from './components/JournalCard';
import { JournalDetailOverlay } from './components/JournalDetailOverlay';
import { ExpertiseCard } from './components/ExpertiseCard';
import { ExpertiseDetailOverlay } from './components/ExpertiseDetailOverlay';
import { ContactForm } from './components/ContactForm';

export default function App() {
  // Navigation & View states
  const [activeView, setActiveView] = useState<'home' | 'story' | 'expertise' | 'work' | 'journal'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Overlay states
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalItem | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  // Interaction/Form states
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Pagination states (2 items per view slice)
  const [projectPage, setProjectPage] = useState(1);
  const [journalPage, setJournalPage] = useState(1);
  const [expertisePage, setExpertisePage] = useState(1);

  // View navigation handler
  const handleNavigate = (view: 'home' | 'story' | 'expertise' | 'work' | 'journal') => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setSelectedProject(null);
    setSelectedArticle(null);
    setSelectedExpertise(null);
    setProjectPage(1);
    setJournalPage(1);
    setExpertisePage(1);
  };

  // Pre-select service tags from overlays
  const handleStartProjectFromProject = (services: string[]) => {
    setSelectedProject(null);
    handleNavigate('home');
    const matchingServices = services.filter((s) => SERVICES.includes(s));
    if (matchingServices.length > 0) {
      setSelectedServices(matchingServices);
    }
  };

  const handleStartProjectFromArticle = (category: string) => {
    setSelectedArticle(null);
    handleNavigate('home');
    if (category.includes('SEO')) {
      setSelectedServices(['SEO & Optimization', 'Web Development']);
    } else if (category.includes('Ads')) {
      setSelectedServices(['Paid Ads Campaign', 'Digital Marketing']);
    } else {
      setSelectedServices(['Brand & UI Design']);
    }
  };

  const handleStartProjectFromExpertise = (id: string) => {
    setSelectedExpertise(null);
    handleNavigate('home');
    if (id === 'web-dev') {
      setSelectedServices(['Web Development', 'Brand & UI Design']);
    } else if (id === 'paid-ads') {
      setSelectedServices(['Paid Ads Campaign', 'Digital Marketing', 'Lead Generation']);
    } else if (id === 'seo-growth') {
      setSelectedServices(['SEO & Optimization', 'Lead Generation']);
    }
  };

  const toggleArticleLike = (id: string) => {
    setLikedArticles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center" id="app-root">
      {/* Outer Card with Background Video */}
      <div 
        className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-neutral-900 transition-all duration-300"
        id="hero-container-card"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URL}
          id="hero-bg-video"
        />

        {/* Cinematic gradient overlay for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 mix-blend-multiply pointer-events-none z-0" />

        {/* Content Layer */}
        <div 
          className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full lg:min-h-0 p-4 sm:p-6 md:p-8 gap-6 justify-between overflow-y-auto"
          id="content-layer"
        >
          {/* Header & Navbar */}
          <Header 
            activeView={activeView}
            handleNavigate={handleNavigate}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Dynamic Content Sections */}
          <main className="flex-1 flex flex-col justify-end lg:justify-normal" id="main-content-section">
            <AnimatePresence mode="wait">
              {/* 1. HOME VIEW (Headline + Form) */}
              {activeView === 'home' && (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 w-full pb-4"
                  id="view-home"
                >
                  {/* Headline (left) */}
                  <div className="flex flex-col gap-2" id="headline-wrapper">
                    <p 
                      className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-xl xl:max-w-3xl shrink-0"
                      id="headline-text"
                    >
                      Build a Brand People Trust. <br />
                      Grow Faster with{' '}
                      <span 
                        style={{ 
                          fontFamily: "'Instrument Serif', serif", 
                          fontStyle: 'italic', 
                          fontWeight: 400 
                        }}
                        className="text-neutral-100"
                      >
                        Smart Marketing & Custom Digital Solutions.
                      </span>
                    </p>
                  </div>

                  {/* Contact Form Card (right) */}
                  <div className="w-full lg:w-[min(440px,42%)] shrink-0" id="contact-form-card">
                    <ContactForm 
                      selectedServices={selectedServices}
                      setSelectedServices={setSelectedServices}
                    />
                  </div>
                </motion.div>
              )}

              {/* 2. OUR STORY VIEW */}
              {activeView === 'story' && (
                <motion.div 
                  key="story"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full pb-4"
                  id="view-story"
                >
                  {/* Left Intro Panel */}
                  <div className="flex flex-col gap-3 lg:max-w-lg xl:max-w-xl shrink-0" id="story-intro">
                    <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">01 / Behind the Studio</span>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-white leading-tight">
                      Our story
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                      Forma was founded in 2024 to fuse two powerful forces that are too often kept separate: high-end web engineering and conversion-driven performance marketing. We replace bloated agency layers with directly accessible lead builders and growth strategists.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We believe your website should be your highest-performing sales asset, not just a digital placeholder. Every interface we ship combines premium brand aesthetic, technical SEO, and rapid-loading React architecture.
                    </p>
                  </div>

                  {/* Right Philosophy Cards Panel */}
                  <div className="w-full lg:w-[min(500px,48%)] shrink-0 flex flex-col gap-4" id="story-philosophy-scroll">
                    {/* Philosophy 1 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4" id="philosophy-card-1">
                      <span className="font-mono text-xs text-neutral-300 font-bold shrink-0">01</span>
                      <div className="flex flex-col">
                        <h3 className="text-white text-base font-semibold mb-1">Brand Authority</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We formulate high-end brand identities and design systems. We build immersive aesthetics that instantly command authority and earn customer trust.
                        </p>
                      </div>
                    </div>

                    {/* Philosophy 2 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4" id="philosophy-card-2">
                      <span className="font-mono text-xs text-neutral-300 font-bold shrink-0">02</span>
                      <div className="flex flex-col">
                        <h3 className="text-white text-base font-semibold mb-1">Performance-First Code</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          We build custom, lightning-fast web architectures. Speed is the ultimate SEO factor: faster loads lead to higher rankings and lower customer acquisition costs.
                        </p>
                      </div>
                    </div>

                    {/* Philosophy 3 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4" id="philosophy-card-3">
                      <span className="font-mono text-xs text-neutral-300 font-bold shrink-0">03</span>
                      <div className="flex flex-col">
                        <h3 className="text-white text-base font-semibold mb-1">Data-Driven Growth</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          No vanity metrics. We deploy automated marketing funnels, semantic SEO mappings, and precise paid campaigns optimized purely for conversion and ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 3. EXPERTISE VIEW */}
              {activeView === 'expertise' && (
                <motion.div 
                  key="expertise"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full pb-4"
                  id="view-expertise"
                >
                  {/* Left Panel */}
                  <div className="flex flex-col gap-3 lg:max-w-lg xl:max-w-xl shrink-0" id="expertise-intro">
                    <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">02 / What We Do</span>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-white leading-tight">
                      Expertise
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                      We deliver holistic growth. By aligning brand identity and web development with targeted search optimization and paid traffic pipelines, we build high-converting customer acquisition systems.
                    </p>
                    
                    {/* Bullet badges */}
                    <div className="flex flex-wrap gap-2 mt-2" id="tech-stack-badges">
                      {['React / NextJS', 'Tailwind CSS', 'TypeScript', 'Technical SEO', 'Google Ads', 'Meta Campaigns', 'Conversion Tuning'].map((tech) => (
                        <span key={tech} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-neutral-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Panel: Capability Grid with Pagination */}
                  <div className="w-full lg:w-[min(500px,48%)] shrink-0 flex flex-col gap-3" id="expertise-capabilities-list">
                    <div className="flex flex-col gap-3">
                      {EXPERTISE_DATA.slice((expertisePage - 1) * 2, expertisePage * 2).map((cap, idx) => {
                        return (
                          <ExpertiseCard 
                            key={cap.id}
                            cap={cap}
                            index={(expertisePage - 1) * 2 + idx}
                            onClick={() => setSelectedExpertise(cap)}
                          />
                        );
                      })}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between mt-1 px-1 text-xs text-neutral-400 font-mono border-t border-white/5 pt-3" id="expertise-pagination">
                      <div>
                        Page {expertisePage} of {Math.ceil(EXPERTISE_DATA.length / 2)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setExpertisePage(prev => Math.max(prev - 1, 1))}
                          disabled={expertisePage === 1}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            expertisePage === 1 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Previous page"
                          id="btn-expertise-prev"
                        >
                          <ChevronLeft size={13} />
                        </button>

                        {Array.from({ length: Math.ceil(EXPERTISE_DATA.length / 2) }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setExpertisePage(page)}
                            className={`w-7 h-7 rounded-lg text-xs font-semibold font-mono flex items-center justify-center transition-all ${
                              expertisePage === page
                                ? 'bg-white text-black font-bold scale-105 shadow'
                                : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-neutral-300 cursor-pointer'
                            }`}
                            id={`btn-expertise-page-${page}`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setExpertisePage(prev => Math.min(prev + 1, Math.ceil(EXPERTISE_DATA.length / 2)))}
                          disabled={expertisePage === Math.ceil(EXPERTISE_DATA.length / 2)}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            expertisePage === Math.ceil(EXPERTISE_DATA.length / 2) 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Next page"
                          id="btn-expertise-next"
                        >
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 4. OUR WORK VIEW */}
              {activeView === 'work' && (
                <motion.div 
                  key="work"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full pb-4"
                  id="view-work"
                >
                  {/* Left Panel */}
                  <div className="flex flex-col gap-3 lg:max-w-lg xl:max-w-xl shrink-0" id="work-intro">
                    <span className="text-xs font-semibold tracking-wider text-pink-400 uppercase">03 / Case Studies</span>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-white leading-tight">
                      Our work
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                      A highly curated gallery of high-performing web platforms and targeted campaign conversions we have delivered. We build the robust infrastructure and supply the precise growth channels to scale your brand.
                    </p>
                  </div>

                  {/* Right Panel: Work Items */}
                  <div className="w-full lg:w-[min(520px,50%)] shrink-0 flex flex-col gap-4" id="work-case-studies">
                    <div className="flex flex-col gap-4">
                      {PROJECTS_DATA.slice((projectPage - 1) * 2, projectPage * 2).map((project, idx) => {
                        return (
                          <ProjectCard 
                            key={project.id}
                            project={project}
                            index={(projectPage - 1) * 2 + idx}
                            onClick={() => setSelectedProject(project)}
                          />
                        );
                      })}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between mt-1 px-1 text-xs text-neutral-400 font-mono border-t border-white/5 pt-3" id="project-pagination">
                      <div>
                        Page {projectPage} of {Math.ceil(PROJECTS_DATA.length / 2)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setProjectPage(prev => Math.max(prev - 1, 1))}
                          disabled={projectPage === 1}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            projectPage === 1 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Previous page"
                          id="btn-project-prev"
                        >
                          <ChevronLeft size={13} />
                        </button>

                        {Array.from({ length: Math.ceil(PROJECTS_DATA.length / 2) }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setProjectPage(page)}
                            className={`w-7 h-7 rounded-lg text-xs font-semibold font-mono flex items-center justify-center transition-all ${
                              projectPage === page
                                ? 'bg-white text-black font-bold scale-105 shadow'
                                : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-neutral-300 cursor-pointer'
                            }`}
                            id={`btn-project-page-${page}`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setProjectPage(prev => Math.min(prev + 1, Math.ceil(PROJECTS_DATA.length / 2)))}
                          disabled={projectPage === Math.ceil(PROJECTS_DATA.length / 2)}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            projectPage === Math.ceil(PROJECTS_DATA.length / 2) 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Next page"
                          id="btn-project-next"
                        >
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 5. JOURNAL VIEW */}
              {activeView === 'journal' && (
                <motion.div 
                  key="journal"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full pb-4"
                  id="view-journal"
                >
                  {/* Left Panel */}
                  <div className="flex flex-col gap-3 lg:max-w-lg xl:max-w-xl shrink-0" id="journal-intro">
                    <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">04 / Our Journal</span>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-white leading-tight">
                      Journal
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                      A compilation of technical guides, optimization methodologies, and performance-marketing breakdowns. No fluff, just real tactical insights to help you build sustainable brand authority.
                    </p>
                  </div>

                  {/* Right Panel: Articles */}
                  <div className="w-full lg:w-[min(520px,50%)] shrink-0 flex flex-col gap-3" id="journal-articles">
                    <div className="flex flex-col gap-3">
                      {JOURNAL_DATA.slice((journalPage - 1) * 2, journalPage * 2).map((article, idx) => {
                        return (
                          <JournalCard 
                            key={article.id}
                            article={article}
                            index={(journalPage - 1) * 2 + idx}
                            onClick={() => setSelectedArticle(article)}
                          />
                        );
                      })}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between mt-1 px-1 text-xs text-neutral-400 font-mono border-t border-white/5 pt-3" id="journal-pagination">
                      <div>
                        Page {journalPage} of {Math.ceil(JOURNAL_DATA.length / 2)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setJournalPage(prev => Math.max(prev - 1, 1))}
                          disabled={journalPage === 1}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            journalPage === 1 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Previous page"
                          id="btn-journal-prev"
                        >
                          <ChevronLeft size={13} />
                        </button>

                        {Array.from({ length: Math.ceil(JOURNAL_DATA.length / 2) }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setJournalPage(page)}
                            className={`w-7 h-7 rounded-lg text-xs font-semibold font-mono flex items-center justify-center transition-all ${
                              journalPage === page
                                ? 'bg-white text-black font-bold scale-105 shadow'
                                : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-neutral-300 cursor-pointer'
                            }`}
                            id={`btn-journal-page-${page}`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setJournalPage(prev => Math.min(prev + 1, Math.ceil(JOURNAL_DATA.length / 2)))}
                          disabled={journalPage === Math.ceil(JOURNAL_DATA.length / 2)}
                          className={`p-1.5 rounded-lg border border-white/10 flex items-center justify-center transition-all ${
                            journalPage === Math.ceil(JOURNAL_DATA.length / 2) 
                              ? 'opacity-30 cursor-not-allowed text-neutral-600' 
                              : 'bg-white/5 hover:bg-white/15 hover:border-white/20 active:scale-95 cursor-pointer text-white'
                          }`}
                          aria-label="Next page"
                          id="btn-journal-next"
                        >
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>

        {/* Project detail overlay card */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailOverlay 
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onStartProject={handleStartProjectFromProject}
            />
          )}
        </AnimatePresence>

        {/* Journal detail overlay card */}
        <AnimatePresence>
          {selectedArticle && (
            <JournalDetailOverlay 
              article={selectedArticle}
              onClose={() => setSelectedArticle(null)}
              liked={!!likedArticles[selectedArticle.id]}
              onToggleLike={() => toggleArticleLike(selectedArticle.id)}
              onStartProject={handleStartProjectFromArticle}
            />
          )}
        </AnimatePresence>

        {/* Expertise detail overlay card */}
        <AnimatePresence>
          {selectedExpertise && (
            <ExpertiseDetailOverlay 
              selectedExpertise={selectedExpertise}
              onClose={() => setSelectedExpertise(null)}
              onStartProject={handleStartProjectFromExpertise}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
