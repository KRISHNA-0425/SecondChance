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
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-['Space_Grotesk'] text-2xl uppercase tracking-tighter font-extrabold bg-[#ffe600] text-[#111111] px-3 py-1 border-[2px] border-white">
                PROJECT SECOND CHANCE
              </span>
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

            {/* Social Handles */}
            <div className="pt-2">
              <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider mb-2.5">
                CONNECT & SOCIAL HANDLES:
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_HANDLES.map((item) => {
                  const Icon = item.icon as React.ComponentType<{ className?: string }>;
                  return (
                    <a
                      key={item.name}
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
                      className="w-9 h-9 flex items-center justify-center bg-[#1a1a1a] text-white border-[1.5px] border-white/80 hover:bg-[#ffe600] hover:text-[#111111] hover:border-[#ffe600] shadow-[2px_2px_0px_#ffffff] hover:shadow-[3px_3px_0px_#ffe600] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider">
              PORTAL NAVIGATION:
            </div>
            <ul className="space-y-1.5 font-mono text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 01. About Manifesto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('key-findings')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 02. Key Findings (600 Inmates)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 03. 6 Reform Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 04. Proven Impact Record
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stories')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 05. Inmate Stories & Letters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fellowship')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 06. 12-Month Fellowship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-neutral-300 hover:text-[#ffe600] uppercase transition-colors cursor-pointer"
                >
                  // 07. Field Coordinates
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Audit */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase font-extrabold text-[#ffe600] tracking-wider">
              REGISTRATION & AUDIT:
            </div>
            <div className="space-y-2 font-mono text-xs text-neutral-300">
              <div className="p-2 bg-white/5 border border-white/20">
                <span className="text-[#ffe600] font-bold">SECTION 8 NON-PROFIT:</span> CIN
                U85300DL2018NPL334182
              </div>
              <div className="p-2 bg-white/5 border border-white/20">
                <span className="text-[#ffe600] font-bold">TAX EXEMPTION:</span> 80G & 12A Certified
              </div>
              <div className="p-2 bg-white/5 border border-white/20">
                <span className="text-[#ffe600] font-bold">DARPAN ID:</span> DL/2018/0192931
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} TYCIA Foundation (Turn Your Concern Into Action). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="bg-white/10 text-white hover:bg-[#ffe600] hover:text-[#111111] px-3 py-1 font-mono text-xs uppercase font-bold border border-white/60 transition-colors cursor-pointer"
                title="Replay intro animation"
              >
                <span>Replay Intro</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="bg-white text-[#111111] px-3 py-1 font-mono text-xs uppercase font-bold border border-white flex items-center gap-1 hover:bg-[#ffe600] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
