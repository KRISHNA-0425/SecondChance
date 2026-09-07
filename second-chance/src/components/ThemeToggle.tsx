import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Sun, Moon, ChevronDown, Check } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'dropdown' | 'segmented';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'dropdown',
}) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: { id: ThemeMode; label: string; shortLabel: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'light', label: 'Light Theme', shortLabel: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark Theme', shortLabel: 'Dark', icon: Moon },
    { id: 'system', label: 'System Theme', shortLabel: 'System', icon: Monitor },
  ];

  const currentOption = options.find((opt) => opt.id === theme) || options[0];
  const CurrentIcon = currentOption.icon;

  // Close when clicking outside for dropdown
  useEffect(() => {
    if (variant !== 'dropdown') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, variant]);

  const handleSelect = (mode: ThemeMode) => {
    setTheme(mode);
    setIsOpen(false);
  };

  // Segmented control variant (ideal for mobile menu drawer)
  if (variant === 'segmented') {
    return (
      <div className={`w-full grid grid-cols-3 gap-2 ${className}`} role="group" aria-label="Select color theme">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = theme === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt.id)}
              aria-pressed={isSelected}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 border-[2px] font-mono text-xs uppercase font-extrabold transition-all cursor-pointer select-none active:translate-y-0.5 ${
                isSelected
                  ? 'bg-[#deb04a] text-[#111111] border-[#111111] shadow-[2px_2px_0px_#111111] dark:border-white dark:shadow-[2px_2px_0px_#deb04a]'
                  : 'bg-[#ECE0C6] dark:bg-[#1a1a1a] text-[#4b4731] dark:text-[#c2bead] border-[#111111]/40 dark:border-white/30 hover:border-[#111111] dark:hover:border-white hover:bg-[#dfd2b5] dark:hover:bg-[#252525]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'stroke-[2.5]' : ''}`} />
              <span className="truncate">{opt.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Dropdown variant (ideal for desktop header)
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        title={`Theme: ${currentOption.label}`}
        className="flex items-center gap-1.5 bg-[#dfd2b5] dark:bg-[#1a1a1a] text-[#111111] dark:text-[#f3f3f3] border-[2px] border-[#111111] dark:border-white/50 px-2.5 py-1.5 shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#deb04a] hover:bg-[#deb04a] hover:text-[#111111] transition-all cursor-pointer font-mono text-xs uppercase font-extrabold select-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        <CurrentIcon className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:inline">{currentOption.shortLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-1.5 w-44 bg-[#ECE0C6] dark:bg-[#161616] border-[2px] border-[#111111] dark:border-white/50 shadow-[3px_3px_0px_#111111] dark:shadow-[3px_3px_0px_#deb04a] z-50 py-1 font-mono text-xs uppercase select-none animate-in fade-in zoom-in-95 duration-100"
          role="menu"
          aria-orientation="vertical"
        >
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = theme === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                role="menuitem"
                className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer font-bold ${
                  isSelected
                    ? 'bg-[#deb04a] text-[#111111]'
                    : 'text-[#111111] dark:text-[#f3f3f3] hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] text-[#111111]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

