import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { ArrowRight, User, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0"
            id="brand-home-btn"
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
            <span className="hidden 2xl:inline-block bg-[#ffe600] text-[#111111] font-mono text-[11px] uppercase px-2 py-0.5 border-[2px] border-[#111111] font-extrabold -rotate-2 select-none">
              TYCIA FOUNDATION
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 border-[2px] border-[#111111] bg-[#f6f3f2] p-1 shadow-[3px_3px_0px_#111111]"
          id="main-nav-bar"
        >
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white font-extrabold shadow-[1px_1px_0px_#111111]'
                    : 'text-[#4b4731] hover:bg-[#ffe600] hover:text-[#111111] font-bold'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 border-[2px] border-[#111111] bg-[#f6f3f2] shadow-[2px_2px_0px_#111111] cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcf9f8] border-b-[3px] border-[#111111] p-4 shadow-[4px_4px_0px_#111111] space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 font-mono text-xs uppercase tracking-wider font-bold border-[2px] border-[#111111] text-left ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-[2px_2px_0px_#111111]'
                      : 'bg-white text-[#111111] hover:bg-[#ffe600]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Theme Preference Selector */}
          <div className="pt-2 border-t border-black/15 flex items-center justify-between">
            <span className="font-mono text-xs uppercase font-extrabold text-[#4b4731]">
              DISPLAY THEME:
            </span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};
