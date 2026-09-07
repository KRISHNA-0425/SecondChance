import React, { useState, useEffect } from 'react';
import { ActiveScreen } from './types';
import { TopTicker } from './components/TopTicker';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GlobalEvidenceSection } from './components/GlobalEvidenceSection';
import { FindingsSection } from './components/FindingsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ImpactSection } from './components/ImpactSection';
import { StoriesSection } from './components/StoriesSection';
import { FellowshipSection } from './components/FellowshipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EntryAnimation } from './components/EntryAnimation';
import { ScrollProgress } from './components/animations/ScrollProgress';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, LayoutGrid } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('about');
  const [viewMode, setViewMode] = useState<'all' | 'focused'>('all');
  const [showSplash, setShowSplash] = useState(() => {
    try {
      if (new URLSearchParams(window.location.search).has('intro')) {
        return true;
      }
      return !sessionStorage.getItem('psc_intro_completed');
    } catch {
      return true;
    }
  });

  const handleSplashComplete = () => {
    try {
      sessionStorage.setItem('psc_intro_completed', 'true');
    } catch {
      // ignore
    }
    setShowSplash(false);
  };

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  const handleNavigate = (screen: ActiveScreen) => {
    setActiveScreen(screen);

    if (viewMode === 'all') {
      if (screen === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(screen);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scrollspy to automatically update activeScreen when scrolling in 'all' view
  useEffect(() => {
    if (viewMode !== 'all') return;

    const sectionIds: ActiveScreen[] = [
      'about',
      'key-findings',
      'projects',
      'impact',
      'stories',
      'fellowship',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'about') {
          if (scrollPosition < 500) {
            setActiveScreen('about');
            break;
          }
        } else {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveScreen(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#ECE0C6] text-[#1c1b1b] selection:bg-[#deb04a] selection:text-[#111111] font-['Inter']">
      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Entry Splash Loading Animation */}
      {showSplash && <EntryAnimation onComplete={handleSplashComplete} />}

      {/* Top Banner Ticker */}
      <TopTicker />

      {/* Primary Neo-brutalist Header */}
      <Header activeScreen={activeScreen} onNavigate={handleNavigate} />

      {/* Optional Mode Switcher Floating Pill */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-1 bg-[#111111] text-white p-1 border-[2px] border-white shadow-[4px_4px_0px_#deb04a]">
        <button
          onClick={() => setViewMode('all')}
          className={`px-3 py-1.5 font-mono text-[11px] uppercase font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
            viewMode === 'all' ? 'bg-[#deb04a] text-[#111111]' : 'text-neutral-300 hover:text-white'
          }`}
          title="Browse continuous full report"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Full Report</span>
        </button>
        <button
          onClick={() => setViewMode('focused')}
          className={`px-3 py-1.5 font-mono text-[11px] uppercase font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
            viewMode === 'focused'
              ? 'bg-[#c05a3e] text-white'
              : 'text-neutral-300 hover:text-white'
          }`}
          title="View one section at a time"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Screen by Screen</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {viewMode === 'all' ? (
          <>
            <div id="about">
              <HeroSection onNavigate={handleNavigate} />
              <GlobalEvidenceSection />
            </div>

            <div id="key-findings">
              <FindingsSection id="findings" />
            </div>

            <div id="projects">
              <ProjectsSection onNavigate={handleNavigate} id="projects" />
            </div>

            <div id="impact">
              <ImpactSection onNavigate={handleNavigate} id="impact" />
            </div>

            <div id="stories">
              <StoriesSection id="stories" />
            </div>

            <div id="fellowship">
              <FellowshipSection />
            </div>

            <div id="contact">
              <ContactSection />
            </div>
          </>
        ) : (
          /* Focused Single Screen View with AnimatePresence Transitions */
          <div className="w-full">
            <div className="bg-[#111111] text-[#deb04a] py-2 px-4 border-b border-black">
              <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs uppercase font-bold">
                <span>VIEWING SCREEN: {activeScreen.replace('-', ' ')}</span>
                <button
                  onClick={() => setViewMode('all')}
                  className="underline hover:text-white cursor-pointer"
                >
                  Switch to Continuous Full Report
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {activeScreen === 'about' && (
                  <>
                    <HeroSection onNavigate={handleNavigate} />
                    <GlobalEvidenceSection />
                  </>
                )}

                {activeScreen === 'key-findings' && <FindingsSection />}

                {activeScreen === 'projects' && (
                  <ProjectsSection onNavigate={handleNavigate} />
                )}

                {activeScreen === 'impact' && (
                  <ImpactSection onNavigate={handleNavigate} />
                )}

                {activeScreen === 'stories' && <StoriesSection />}

                {activeScreen === 'fellowship' && <FellowshipSection />}

                {activeScreen === 'contact' && <ContactSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Neo-brutalist Footer */}
      <Footer onNavigate={handleNavigate} onReplayIntro={() => setShowSplash(true)} />
    </div>
  );
}
