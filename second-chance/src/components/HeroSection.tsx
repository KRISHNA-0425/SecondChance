import React from 'react';
import { HERO_IMAGE_URL } from '../data/mockData';
import { ActiveScreen } from '../types';
import { ArrowDown, BarChart3, ShieldCheck, Gavel } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Secondary Top Marquee Ticker */}
      <div className="w-full bg-[#111111] text-[#ffe600] border-b-[2.5px] border-[#111111] py-2 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono uppercase font-bold tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#ff5722] rounded-full inline-block animate-ping"></span>
            <span className="text-[#ffe600]">
              FIELD REPORT: JAIL NO. 5 (YOUTH JAIL) • TIHAR PRISONS COMPLEX
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs">
            <span>COHORT: 18-21 YEARS</span>
            <span>RECIDIVISM REDUCTION: ACTIVE</span>
            <span className="bg-[#ffe600] text-[#111111] px-2 py-0.5 border border-[#111111] font-extrabold">
              DOSSIER PSC-2025
            </span>
          </div>
        </div>
      </div>

      {/* 1. HERO MAIN SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-10 lg:py-16 bg-[#fcf9f8] border-b-[2.5px] border-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Manifesto & Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="bg-[#ff5722] text-white font-mono text-[11px] sm:text-xs uppercase px-3 py-1 font-extrabold border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]">
                DIRECT INTERVENTION
              </span>
              <span className="bg-[#111111] text-[#ffe600] font-mono text-[11px] sm:text-xs uppercase px-3 py-1 font-extrabold">
                REFORMATION • REHABILITATION • REINTEGRATION
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[68px] text-[#111111] uppercase tracking-tighter leading-none font-bold">
                PROJECT <br />
                <span className="inline-block bg-[#ffe600] text-[#111111] px-3 sm:px-4 py-1 border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] -rotate-1 mt-2">
                  SECOND CHANCE
                </span>
              </h1>
            </div>

            <p className="font-['Inter'] text-base sm:text-lg text-[#1c1b1b] leading-relaxed max-w-2xl">
              Conceptualised by{' '}
              <strong className="underline decoration-[#b02f00] decoration-2 font-bold">
                Turn Your Concern Into Action (TYCIA) Foundation
              </strong>
              , aims to reform, rehabilitate and reintegrate at-risk youth between ages{' '}
              <strong className="font-bold">18–21 years</strong> through an impact-oriented 360-degree
              radical intervention.
            </p>

            {/* Authority Callout Box */}
            <div className="p-5 bg-[#f6f3f2] border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] relative mt-2">
              <div className="absolute -top-3.5 left-4 bg-[#111111] text-white px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider">
                OPERATIONAL AUTHORIZATION
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] pt-1 leading-relaxed">
                "Under the leadership of <strong className="font-bold text-[#111111]">Mr. Sudhir Yadav</strong> (Ex DG, Delhi Prison), TYCIA Foundation gained deep understanding inside{' '}
                <strong className="font-bold text-[#111111]">Jail No. 5 (Youth Jail)</strong> in Tihar Prisons."
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-xs text-[#b02f00] font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-[#b02f00]" />
                <span>Accredited Correctional Facility Intervention Protocol</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="bg-[#ffe600] text-[#111111] border-[2.5px] border-[#111111] px-6 py-3.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[4px_4px_0px_#111111] hover:bg-[#ff5722] hover:text-[#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#111111] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2 cursor-pointer"
                id="hero-explore-initiatives-btn"
              >
                <span>Explore Our Initiatives</span>
                <ArrowDown className="w-4 h-4 text-[#111111]" />
              </button>
              <button
                onClick={() => onNavigate('key-findings')}
                className="bg-white text-[#111111] border-[2.5px] border-[#111111] px-6 py-3.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-[4px_4px_0px_#111111] hover:bg-[#111111] hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#111111] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2 cursor-pointer"
                id="hero-read-findings-btn"
              >
                <span>Read Impact Data</span>
                <BarChart3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full relative">
              {/* Physical Badge Sticker */}
              <div className="absolute -top-4 -right-2 z-10 bg-[#ff5722] text-white px-3 py-1 border-[2.5px] border-[#111111] font-mono text-xs uppercase font-extrabold shadow-[3px_3px_0px_#111111] rotate-3 select-none">
                JAIL NO. 5 TIHAR PRISONS
              </div>

              {/* Hero Image Frame */}
              <div className="w-full bg-white border-[3px] border-[#111111] shadow-[8px_8px_0px_#111111] overflow-hidden">
                <div className="bg-[#111111] px-3 py-1.5 flex items-center justify-between text-white font-mono text-xs uppercase font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
                    <span>ARCHIVE DOCUMENTATION</span>
                  </span>
                  <span>RESTRICTED ARCHIVES // 05</span>
                </div>
                <img
                  alt="Inside youth jail reform project at Tihar Prisons Jail 5"
                  className="w-full aspect-[1.55] object-cover filter contrast-105"
                  src={HERO_IMAGE_URL}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-[#f0edec] border-t-[2.5px] border-[#111111] flex items-center justify-between font-mono text-xs">
                  <span className="font-extrabold text-[#111111]">INMATE YOUTH ENGAGEMENT</span>
                  <span className="text-[#4b4731] font-mono font-bold">DELHI PRISONS DEPT.</span>
                </div>
              </div>

              {/* Decorative Sub-badge under image */}
              <div className="mt-4 p-3.5 bg-[#dbe1ff] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center gap-3">
                <Gavel className="w-6 h-6 text-[#0053db] shrink-0" />
                <p className="font-['Inter'] text-xs sm:text-sm text-[#1c1b1b] leading-tight font-medium">
                  Transforming penal holding cells into transitional educational launchpads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
