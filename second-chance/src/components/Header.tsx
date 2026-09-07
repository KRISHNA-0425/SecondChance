import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { ArrowRight, User, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveScreen; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'key-findings', label: 'Key Findings' },
    { id: 'projects', label: 'Projects' },
    { id: 'impact', label: 'Impact' },
    { id: 'stories', label: 'Stories' },
    { id: 'fellowship', label: 'Fellowship' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (screen: ActiveScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="h-20 bg-white border-b-[2.5px] border-[#111111] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center min-w-0">
          <motion.button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0"
            id="brand-home-btn"
            whileTap={{ scale: 0.97 }}
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkE2CBWerlIjG5Q5ilsnekCfFMde6WM1hw4ZRCIWFxA&s=10" 
              alt="Project Second Chance logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 lg:size-19 object-contain shrink-0"
            />
            <div className="bg-white border-[2px] sm:border-[2.5px] border-[#111111] px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_#111111] sm:shadow-[3px_3px_0px_#111111] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_#111111] transition-all">
              <span className="font-['Space_Grotesk'] text-sm sm:text-base md:text-xl uppercase text-[#111111] tracking-tight font-extrabold block leading-none truncate">
                PROJECT SECOND CHANCE
              </span>
            </div>
            <span className="hidden 2xl:inline-block bg-[#deb04a] text-[#111111] font-mono text-[11px] uppercase px-2 py-0.5 border-[2px] border-[#111111] font-extrabold -rotate-2 select-none">
              TYCIA FOUNDATION
            </span>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 border-[2px] border-[#111111] bg-[#f6f3f2] p-1 shadow-[3px_3px_0px_#111111]"
          id="main-nav-bar"
        >
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider cursor-pointer relative ${
                  isActive
                    ? 'bg-[#111111] text-white font-extrabold shadow-[1px_1px_0px_#111111]'
                    : 'text-[#4b4731] hover:bg-[#deb04a] hover:text-[#111111] font-bold'
                }`}
                id={`nav-link-${item.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Dropdown (Desktop only) */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 border-[2px] border-[#111111] bg-[#f6f3f2] shadow-[2px_2px_0px_#111111] cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
            whileTap={{ scale: 0.9, rotate: 10 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer — animated slide-down with staggered items */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-[#fcf9f8] dark:bg-[#141414] border-b-[3px] border-[#111111] dark:border-white/40 p-4 shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#deb04a] space-y-3.5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="grid grid-cols-2 gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
            >
              {navItems.map((item) => {
                const isActive = activeScreen === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-2.5 font-mono text-xs uppercase tracking-wider font-bold border-[2px] border-[#111111] dark:border-white/40 text-left ${
                      isActive
                        ? 'bg-[#111111] text-white shadow-[2px_2px_0px_#111111] dark:bg-[#deb04a] dark:text-[#111111]'
                        : 'bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-[#f3f3f3] hover:bg-[#deb04a] dark:hover:bg-[#deb04a] dark:hover:text-[#111111]'
                    }`}
                    variants={{
                      hidden: { opacity: 0, y: -10, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Mobile Theme Preference Selector - Fully visible options */}
            <motion.div
              className="pt-3 border-t-[2px] border-[#111111]/20 dark:border-white/20 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase font-extrabold text-[#4b4731] dark:text-[#c2bead] flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#deb04a] border border-[#111111] inline-block" />
                  DISPLAY THEME:
                </span>
              </div>
              <ThemeToggle variant="segmented" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
