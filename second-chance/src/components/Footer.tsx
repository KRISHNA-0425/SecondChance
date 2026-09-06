import React from 'react';
import { ActiveScreen } from '../types';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa6';
import { motion } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

// Social media handles - replace '#' with actual URLs when provided
const SOCIAL_HANDLES = [
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    url: 'https://in.linkedin.com/company/project-second-chance-india', 
    ariaLabel: 'Follow TYCIA Foundation on LinkedIn',
  },
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/PSC__India', 
    ariaLabel: 'Follow TYCIA Foundation on X (Twitter)',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/projectsecondchance.in/?hl=en',
    ariaLabel: 'Follow TYCIA Foundation on Instagram',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://www.facebook.com/2ndChanceIN/', 
    ariaLabel: 'Follow TYCIA Foundation on Facebook',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/watch?v=BL8Xtx25LgA&t=65s', 
    ariaLabel: 'Subscribe to TYCIA Foundation on YouTube',
  },
];

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white border-t-[3px] border-[#111111] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/20 pb-8">
          {/* Brand Column */}
          <AnimatedSection className="md:col-span-6 space-y-4" direction="up" duration={0.6}>
            <div className="flex flex-wrap items-center gap-2">
              <motion.span
                className="font-['Space_Grotesk'] text-2xl uppercase tracking-tighter font-extrabold bg-[#ffe600] text-[#111111] px-3 py-1 border-[2px] border-white"
                whileHover={{ rotate: -1, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
              >
                PROJECT SECOND CHANCE
              </motion.span>
              <span className="font-mono text-xs uppercase bg-[#ff5722] text-white px-2 py-1 font-bold border border-white">
                TYCIA FOUNDATION
              </span>
            </div>
            <p className="font-['Inter'] text-sm text-neutral-300 max-w-md leading-relaxed">
              Pioneering restorative justice, functional literacy, and holistic rehabilitation inside
              Delhi Prisons Tihar Jail No. 5 (Youth Jail) for youth aged 18 to 21 years.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffe600]">
              <ShieldCheck className="w-4 h-4 text-[#ffe600]" />
              <span>Authorized under Directorate General of Delhi Prisons</span>
            </div>

            {/* Social Handles — staggered pop-in */}
            <div className="pt-2">
              <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider mb-2.5">
                CONNECT & SOCIAL HANDLES:
              </div>
              <StaggerContainer className="flex flex-wrap items-center gap-2.5" staggerDelay={0.08}>
                {SOCIAL_HANDLES.map((item) => {
                  const Icon = item.icon as React.ComponentType<{ className?: string }>;
                  return (
                    <StaggerItem key={item.name}>
                      <motion.a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.name}
                        aria-label={item.ariaLabel}
                        onClick={(e) => {
                          if (item.url === '#' || !item.url) {
                            e.preventDefault();
                          }
                        }}
                        className="w-9 h-9 flex items-center justify-center bg-[#1a1a1a] text-white border-[1.5px] border-white/80 hover:bg-[#ffe600] hover:text-[#111111] hover:border-[#ffe600] shadow-[2px_2px_0px_#ffffff] active:translate-y-0 active:shadow-none transition-all duration-150 cursor-pointer"
                        whileHover={{
                          translateY: -4,
                          boxShadow: '3px 3px 0px #ffe600',
                          transition: { type: 'spring', stiffness: 400, damping: 15 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Quick Nav Links */}
          <AnimatedSection className="md:col-span-3 space-y-3" direction="up" delay={0.15} duration={0.6}>
            <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider">
              PORTAL NAVIGATION:
            </div>
            <ul className="space-y-1.5 font-mono text-xs">
              {[
                { id: 'about' as const, label: '// 01. About Manifesto' },
                { id: 'key-findings' as const, label: '// 02. Key Findings (600 Inmates)' },
                { id: 'projects' as const, label: '// 03. 6 Reform Projects' },
                { id: 'impact' as const, label: '// 04. Proven Impact Record' },
                { id: 'stories' as const, label: '// 05. Inmate Stories & Letters' },
                { id: 'fellowship' as const, label: '// 06. 12-Month Fellowship' },
                { id: 'contact' as const, label: '// 07. Field Coordinates' },
              ].map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => onNavigate(item.id)}
                    className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                    whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300 } }}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Compliance & Audit */}
          <AnimatedSection className="md:col-span-3 space-y-3" direction="up" delay={0.3} duration={0.6}>
            <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider">
              REGISTRATION & AUDIT:
            </div>
            <div className="space-y-2 font-mono text-xs text-neutral-300">
              <motion.div
                className="p-2 bg-white/5 border border-white/20"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', transition: { duration: 0.2 } }}
              >
                <span className="text-[#ffe600] font-bold">SECTION 8 NON-PROFIT:</span> CIN
                U85300DL2018NPL334182
              </motion.div>
              <motion.div
                className="p-2 bg-white/5 border border-white/20"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', transition: { duration: 0.2 } }}
              >
                <span className="text-[#ffe600] font-bold">TAX EXEMPTION:</span> 80G & 12A Certified
              </motion.div>
              <motion.div
                className="p-2 bg-white/5 border border-white/20"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', transition: { duration: 0.2 } }}
              >
                <span className="text-[#ffe600] font-bold">DARPAN ID:</span> DL/2018/0192931
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection direction="up" delay={0.1} duration={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <div>
              © {new Date().getFullYear()} TYCIA Foundation (Turn Your Concern Into Action). All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              {onReplayIntro && (
                <motion.button
                  onClick={onReplayIntro}
                  className="bg-white/10 text-white hover:bg-[#ffe600] hover:text-[#111111] px-3 py-1 font-mono text-xs uppercase font-bold border border-white/60 transition-colors cursor-pointer"
                  title="Replay intro animation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Replay Intro</span>
                </motion.button>
              )}
              <motion.button
                onClick={scrollToTop}
                className="bg-white text-[#111111] px-3 py-1 font-mono text-xs uppercase font-bold border border-white flex items-center gap-1 hover:bg-[#ffe600] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};
