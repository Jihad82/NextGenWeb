import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeView: string;
  handleNavigate: (view: 'home' | 'story' | 'expertise' | 'work' | 'journal') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  handleNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <>
      <header className="w-full flex justify-start items-center sticky top-0 z-30 bg-transparent py-1" id="app-header">
        <div 
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-6 border border-white/20 transition-all duration-300"
          id="navbar-pill"
        >
          {/* Logo (Forma Custom Image) */}
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 focus:outline-none hover:opacity-80 active:scale-95 transition-all cursor-pointer"
            id="logo-wrapper"
          >
            <img 
              src="https://i.postimg.cc/7YZsrw0v/logo.png" 
              alt="Forma Logo" 
              className="h-8 w-auto select-none shrink-0" 
              referrerPolicy="no-referrer"
              id="forma-logo"
            />
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
              onClick={() => {
                handleNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
              id="drawer-logo"
            >
              <img 
                src="https://i.postimg.cc/jqQQjmtJ/logo.png" 
                alt="Forma Logo" 
                className="h-8 w-auto select-none shrink-0 invert brightness-200" 
                referrerPolicy="no-referrer"
              />
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
              onClick={() => {
                handleNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-2xl font-medium transition-all ${
                activeView === 'home' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
              id="drawer-link-home"
            >
              Home & Project Form
            </button>
            <button
              onClick={() => {
                handleNavigate('story');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-2xl font-medium transition-all ${
                activeView === 'story' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
              id="drawer-link-story"
            >
              Our story
            </button>
            <button
              onClick={() => {
                handleNavigate('expertise');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-2xl font-medium transition-all ${
                activeView === 'expertise' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
              id="drawer-link-expertise"
            >
              Expertise
            </button>
            <button
              onClick={() => {
                handleNavigate('work');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-2xl font-medium transition-all ${
                activeView === 'work' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
              id="drawer-link-work"
            >
              Our work
            </button>
            <button
              onClick={() => {
                handleNavigate('journal');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-2xl font-medium transition-all ${
                activeView === 'journal' ? 'text-white pl-2 border-l-2 border-white' : 'text-neutral-400 hover:text-white'
              }`}
              id="drawer-link-journal"
            >
              Journal
            </button>
          </nav>

          {/* Drawer Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4" id="drawer-footer">
            <span className="text-xs text-neutral-500 font-mono">GET IN TOUCH</span>
            <a 
              href="mailto:partner@forma.vision" 
              className="text-white text-lg font-medium hover:underline decoration-white/30 decoration-1 underline-offset-4"
              id="drawer-email-link"
            >
              partner@forma.vision
            </a>
          </div>
        </div>
      )}
    </>
  );
};
