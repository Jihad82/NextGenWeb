import React, { useState } from 'react';
import { Twitter, Circle, Instagram, Linkedin, Menu, X, ArrowRight, Compass, Layers, Monitor, TrendingUp, BookOpen, Clock, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// Constants
const VIDEO_URL = "https://res.cloudinary.com/ddhdxfmzf/video/upload/v1783791088/16129133_1920_1080_30fps_mrukkr.mp4";

const SERVICES = [
  'Web Development',
  'Digital Marketing',
  'SEO & Optimization',
  'Brand & UI Design',
  'E-Commerce Scaling',
  'Lead Generation',
  'Paid Ads Campaign',
  'Other'
];

// Helper Component for Social Buttons
interface SocialBtnProps {
  href: string;
  icon: React.ReactNode;
  className: string;
  label: string;
}

function SocialBtn({ href, icon, className, label }: SocialBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 active:scale-95 transition-all duration-200 ${className}`}
      aria-label={label}
      id={`social-btn-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {icon}
    </a>
  );
}

export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<'home' | 'story' | 'expertise' | 'work' | 'journal'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact Form State
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Toggle service selection (multi-select)
  const toggleService = (service: string) => {
    setSelected(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  // Submit handler with fake delay
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSending(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSent(true);
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setSending(false);
    }
  };

  // Navigate to view & close drawer
  const handleNavigate = (view: 'home' | 'story' | 'expertise' | 'work' | 'journal') => {
    setActiveView(view);
    setMobileMenuOpen(false);
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
          <header className="w-full flex justify-start items-center sticky top-0 z-30 bg-transparent py-1" id="app-header">
            <div 
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-6 border border-white/20 transition-all duration-300"
              id="navbar-pill"
            >
              {/* Logo (Forma) */}
              <button 
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-2 focus:outline-none hover:opacity-80 active:scale-95 transition-all cursor-pointer"
                id="logo-wrapper"
              >
                <svg 
                  viewBox="0 0 256 256" 
                  className="w-8 h-8 select-none shrink-0" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  id="forma-logo"
                >
                  <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
                  <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
                </svg>
              </button>

              {/* Nav Links (hidden on mobile, shown on sm) */}
              <nav className="hidden sm:flex items-center gap-6" id="desktop-nav">
                <button 
                  onClick={() => handleNavigate('story')}
                  className={`text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer ${
                    activeView === 'story' ? 'text-black font-semibold underline decoration-2 underline-offset-4' : 'text-gray-800'
                  }`}
                  id="nav-link-story"
                >
                  Our story
                </button>
                <button 
                  onClick={() => handleNavigate('expertise')}
                  className={`text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer ${
                    activeView === 'expertise' ? 'text-black font-semibold underline decoration-2 underline-offset-4' : 'text-gray-800'
                  }`}
                  id="nav-link-expertise"
                >
                  Expertise
                </button>
                <button 
                  onClick={() => handleNavigate('work')}
                  className={`text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer ${
                    activeView === 'work' ? 'text-black font-semibold underline decoration-2 underline-offset-4' : 'text-gray-800'
                  }`}
                  id="nav-link-work"
                >
                  Our work
                </button>
                <button 
                  onClick={() => handleNavigate('journal')}
                  className={`text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer ${
                    activeView === 'journal' ? 'text-black font-semibold underline decoration-2 underline-offset-4' : 'text-gray-800'
                  }`}
                  id="nav-link-journal"
                >
                  Journal
                </button>
              </nav>

              {/* CTA button or Hamburger */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0" id="header-actions">
                <button
                  onClick={() => handleNavigate('home')}
                  className={`bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer ${
                    activeView === 'home' ? 'ring-2 ring-offset-2 ring-black' : ''
                  }`}
                  id="start-project-btn"
                >
                  Start a project
                </button>

                {/* Minimalistic mobile drawer trigger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex sm:hidden w-9 h-9 items-center justify-center rounded-xl bg-white/80 hover:bg-white text-gray-800 active:scale-95 transition-all border border-white/25 cursor-pointer"
                  id="mobile-drawer-trigger"
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </button>
              </div>
            </div>
          </header>

          {/* Minimalistic Mobile Drawer Overlay */}
          {mobileMenuOpen && (
            <div 
              className="absolute inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl flex flex-col p-6 sm:p-8 justify-between animate-in fade-in zoom-in-95 duration-200"
              id="mobile-menu-drawer"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between" id="drawer-header">
                {/* Logo */}
                <div 
                  onClick={() => handleNavigate('home')}
                  className="flex items-center gap-2 cursor-pointer"
                  id="drawer-logo"
                >
                  <svg 
                    viewBox="0 0 256 256" 
                    className="w-8 h-8 select-none invert" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="black" />
                    <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="black" />
                  </svg>
                  <span className="text-white font-semibold text-lg font-sans tracking-tight">Forma</span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-95 transition-all cursor-pointer"
                  id="drawer-close-btn"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-6 py-8" id="drawer-nav-links">
                <button
                  onClick={() => handleNavigate('home')}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeView === 'home' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  id="drawer-link-home"
                >
                  Home & Project Form
                </button>
                <button
                  onClick={() => handleNavigate('story')}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeView === 'story' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  id="drawer-link-story"
                >
                  Our story
                </button>
                <button
                  onClick={() => handleNavigate('expertise')}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeView === 'expertise' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  id="drawer-link-expertise"
                >
                  Expertise
                </button>
                <button
                  onClick={() => handleNavigate('work')}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeView === 'work' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  id="drawer-link-work"
                >
                  Our work
                </button>
                <button
                  onClick={() => handleNavigate('journal')}
                  className={`text-left text-2xl font-medium transition-all ${
                    activeView === 'journal' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  id="drawer-link-journal"
                >
                  Journal
                </button>
              </nav>

              {/* Drawer Footer */}
              <div className="flex flex-col gap-4 border-t border-white/10 pt-6" id="drawer-footer">
                <div className="flex flex-col" id="drawer-email-block">
                  <span className="text-xs text-neutral-500 font-medium">Get in touch</span>
                  <a href="mailto:hello@forma.co" className="text-lg text-blue-400 font-semibold hover:underline">
                    hello@forma.co
                  </a>
                </div>

                <div className="flex items-center gap-3" id="drawer-socials">
                  <SocialBtn 
                    href="https://twitter.com" 
                    icon={<Twitter size={14} />} 
                    className="bg-white/10 text-white" 
                    label="Twitter" 
                  />
                  <SocialBtn 
                    href="https://circle.so" 
                    icon={<Circle size={14} />} 
                    className="bg-white/10 text-pink-400" 
                    label="Circle" 
                  />
                  <SocialBtn 
                    href="https://instagram.com" 
                    icon={<Instagram size={14} />} 
                    className="bg-white/10 text-orange-400" 
                    label="Instagram" 
                  />
                  <SocialBtn 
                    href="https://linkedin.com" 
                    icon={<Linkedin size={14} />} 
                    className="bg-white/10 text-blue-400" 
                    label="LinkedIn" 
                  />
                </div>
              </div>
            </div>
          )}

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
                <div 
                  className="w-full lg:w-[min(440px,42%)] shrink-0"
                  id="contact-form-card"
                >
                  <div 
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-3.5 sm:p-5 flex flex-col gap-3 border border-gray-100"
                    id="inner-contact-card"
                  >
                    {/* Heading */}
                    <div className="flex items-center justify-between" id="card-header">
                      <h2 className="text-lg sm:text-xl font-semibold text-black tracking-tight flex items-center gap-2" id="say-hello-heading">
                        Say hello! <img src="https://cdn-icons-png.flaticon.com/512/17895/17895310.png" alt="Waving hand" className="w-6 h-6 sm:w-7 sm:h-7 animate-wave object-contain select-none pointer-events-none" referrerPolicy="no-referrer" />
                      </h2>
                    </div>
 
                    {/* Email + Socials Row */}
                    <div 
                      className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-xl px-3 py-1.5"
                      id="email-socials-row"
                    >
                      <div className="flex flex-col min-w-0" id="drop-us-a-line-col">
                        <span className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Drop us a line</span>
                        <a 
                          href="mailto:hello@forma.co" 
                          className="text-xs text-blue-600 font-semibold hover:underline truncate"
                          id="mailto-link"
                        >
                          hello@forma.co
                        </a>
                      </div>
 
                      <div className="flex items-center gap-1 shrink-0" id="socials-container">
                        <SocialBtn 
                          href="https://twitter.com" 
                          icon={<Twitter size={11} />} 
                          className="bg-gray-100 text-gray-800" 
                          label="Twitter" 
                        />
                        <SocialBtn 
                          href="https://circle.so" 
                          icon={<Circle size={11} />} 
                          className="bg-pink-100 text-pink-500" 
                          label="Circle" 
                        />
                        <SocialBtn 
                          href="https://instagram.com" 
                          icon={<Instagram size={11} />} 
                          className="bg-orange-100 text-orange-400" 
                          label="Instagram" 
                        />
                        <SocialBtn 
                          href="https://linkedin.com" 
                          icon={<Linkedin size={11} />} 
                          className="bg-blue-100 text-blue-600" 
                          label="LinkedIn" 
                        />
                      </div>
                    </div>
 
                    {/* OR Divider */}
                    <div className="flex items-center gap-3" id="or-divider">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-gray-400 font-medium text-[10px] tracking-wider" id="or-text">OR</span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>
 
                    {/* Form fields & feedback wrapper */}
                    <div id="form-interactive-area">
                      {sent ? (
                        /* Success State */
                        <div 
                          className="flex flex-col items-center justify-center py-6 px-4 gap-2.5 text-center"
                          id="success-message"
                        >
                          <div 
                            className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-lg text-green-600 font-bold border border-green-200 shadow-sm"
                            id="success-check-pill"
                          >
                            ✓
                          </div>
                          <h3 className="text-sm font-semibold text-gray-900" id="success-heading">
                            You're all set!
                          </h3>
                          <p className="text-xs text-gray-500 max-w-xs" id="success-subtext">
                            Expect a reply within 24 hours.
                          </p>
                          
                          <button
                            type="button"
                            onClick={() => {
                              setSent(false);
                              setName('');
                              setEmail('');
                              setMessage('');
                              setSelected([]);
                            }}
                            className="mt-2 text-[10px] font-semibold text-gray-400 hover:text-black hover:underline transition-all cursor-pointer"
                            id="send-another-btn"
                          >
                            Send another message
                          </button>
                        </div>
                      ) : (
                        /* Actual Form */
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3" id="main-contact-form">
                          {/* Name / Email Block */}
                          <div className="flex flex-col gap-1.5" id="form-fields-container">
                            <label className="text-xs font-semibold text-gray-500" id="form-section-label">
                              Tell us about your vision
                            </label>
                            
                            <div className="flex flex-col sm:flex-row gap-1.5" id="name-email-row">
                              <input
                                type="text"
                                required
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={sending}
                                className="flex-1 min-w-0 text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                                id="input-full-name"
                              />
                              <input
                                type="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={sending}
                                className="flex-1 min-w-0 text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 disabled:opacity-60"
                                id="input-email"
                              />
                            </div>
 
                            {/* Textarea */}
                            <textarea
                              required
                              rows={2}
                              placeholder="What are you looking to build or improve..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              disabled={sending}
                              className="w-full text-xs px-2.5 py-2 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-1.5 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-60"
                              id="input-message"
                            />
                          </div>
 
                          {/* Service tags section */}
                          <div className="flex flex-col gap-1.5" id="services-section">
                            <span className="text-[11px] font-semibold text-gray-400" id="services-label">
                              I need help with...
                            </span>
                            
                            <div className="flex flex-wrap gap-1" id="services-tags-wrapper">
                              {SERVICES.map((service) => {
                                const active = selected.includes(service);
                                return (
                                  <button
                                    key={service}
                                    type="button"
                                    disabled={sending}
                                    onClick={() => toggleService(service)}
                                    className={`text-[10px] font-medium px-2 py-1 rounded-lg border transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                                      active
                                        ? 'bg-gray-100 text-black border-black shadow-sm'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                    }`}
                                    id={`service-tag-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {service}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
 
                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={sending || !name.trim() || !email.trim()}
                            className="w-full bg-black text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md cursor-pointer mt-0.5"
                            id="submit-form-btn"
                          >
                            {sending ? 'Sending...' : 'Send my message'}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
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
                <div 
                  className="w-full lg:w-[min(500px,48%)] shrink-0 flex flex-col gap-4"
                  id="story-philosophy-scroll"
                >
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
                    {['Brand Identity', 'React / NextJS', 'Tailwind CSS', 'TypeScript', 'Technical SEO', 'Google Ads', 'Meta Campaigns', 'Conversion Tuning'].map((tech) => (
                      <span key={tech} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-neutral-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Panel: Capability Grid */}
                <div 
                  className="w-full lg:w-[min(500px,48%)] shrink-0 flex flex-col gap-3"
                  id="expertise-capabilities-list"
                >
                  {/* Cap 1: Branding & UI/UX */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 items-start" id="cap-design">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Compass size={18} />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold mb-1">Branding & UI/UX Design</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        High-fidelity brand guidelines, responsive wireframing, interactive Figma designs, and unique typography palettes.
                      </p>
                    </div>
                  </div>

                  {/* Cap 2: Web Development */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 items-start" id="cap-engineering">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold mb-1">Web Development</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Custom-coded React & NextJS websites, fast page loads, API proxy setups, and secure, responsive container architecture.
                      </p>
                    </div>
                  </div>

                  {/* Cap 3: Digital Marketing */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 items-start" id="cap-motion">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold mb-1">Digital Marketing & Paid Ads</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Highly optimized Google and Meta ad campaigns, custom conversion tracking, landing page creation, and lead pipelines.
                      </p>
                    </div>
                  </div>

                  {/* Cap 4: Search Engine Optimization */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 items-start" id="cap-growth">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold mb-1">SEO & Organic Growth</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Technical SEO auditing, high-performance page scores, semantic site hierarchies, and high-impact keyword ranking campaigns.
                      </p>
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
                <div 
                  className="w-full lg:w-[min(520px,50%)] shrink-0 flex flex-col gap-4"
                  id="work-case-studies"
                >
                  {/* Case Study 1 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer" id="project-card-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-pink-400">01 / WEB + SEO</span>
                        <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full font-mono">+400%</span>
                      </div>
                      <h3 className="text-white text-lg font-semibold group-hover:text-pink-300 transition-colors">Vespera Skincare</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Premium e-commerce overhaul built with React. Leveraged targeted semantic SEO to achieve a 400% organic traffic surge.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Case Study 2 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer" id="project-card-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-blue-400">02 / DEV + CAMPAIGNS</span>
                        <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full font-mono">3.4x ROAS</span>
                      </div>
                      <h3 className="text-white text-lg font-semibold group-hover:text-blue-300 transition-colors">Apex SaaS</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        NextJS lead acquisition web app fused with structured Meta and Google Ads. Achieved a 3.4x return on ad spend.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Case Study 3 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer" id="project-card-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-400">03 / BRAND + CONVERSION</span>
                        <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full font-mono">-42% CAC</span>
                      </div>
                      <h3 className="text-white text-lg font-semibold group-hover:text-emerald-300 transition-colors">Kroma Interactive</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Comprehensive brand voice redesign and landing page speed audit that slashed customer acquisition costs by 42%.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
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
                  <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">04 / Insights & Craft</span>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-tight text-white leading-tight">
                    Journal
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
                    A raw, tactical repository of our insights on conversion rate optimization, technical search engine rankings, brand strategy, and state-of-the-art web performance.
                  </p>
                </div>

                {/* Right Panel: Articles */}
                <div 
                  className="w-full lg:w-[min(520px,50%)] shrink-0 flex flex-col gap-3"
                  id="journal-articles"
                >
                  {/* Article 1 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer flex flex-col gap-2" id="article-card-1">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400" id="article-meta-1">
                      <span className="flex items-center gap-1"><BookOpen size={10} /> SEO & Speed</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> 4 min read</span>
                    </div>
                    <h3 className="text-white text-base font-semibold group-hover:text-amber-300 transition-colors leading-snug">
                      How 100ms lag directly impacts search positions and checkout conversions
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                      Exploring Google's Core Web Vitals. Let's break down how sub-second speed boosts semantic search ranking weight and slashes card abandonment rates.
                    </p>
                  </div>

                  {/* Article 2 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer flex flex-col gap-2" id="article-card-2">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400" id="article-meta-2">
                      <span className="flex items-center gap-1"><BookOpen size={10} /> Performance Ads</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> 6 min read</span>
                    </div>
                    <h3 className="text-white text-base font-semibold group-hover:text-amber-300 transition-colors leading-snug">
                      Architecting custom landing pages for Meta & Google campaign success
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                      Forget standard generic builder page templates. How bespoke layouts with clean font pairing, precise loading buffers, and focused action steps scale return on ad spend.
                    </p>
                  </div>

                  {/* Article 3 */}
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer flex flex-col gap-2" id="article-card-3">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400" id="article-meta-3">
                      <span className="flex items-center gap-1"><BookOpen size={10} /> Brand Identity</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> 3 min read</span>
                    </div>
                    <h3 className="text-white text-base font-semibold group-hover:text-amber-300 transition-colors leading-snug">
                      Typography and user trust: why brand styling is the silent growth driver
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                      In crowded, saturated social feeds, modern visual clarity wins attention. Learn how premium custom letter-spacing and contrast elevate B2B sales authority.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
