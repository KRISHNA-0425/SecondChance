import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';

export const TopTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] text-[#deb04a] border-b-[2.5px] border-[#111111] py-1 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-mono font-bold tracking-wider">
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
          <span className="bg-[#deb04a] text-[#111111] px-2 py-0.5 uppercase tracking-widest font-extrabold text-[11px]">
            INITIATIVE
          </span>
          <p className="text-[#deb04a] uppercase tracking-wider text-[11px] sm:text-xs">
            REFORMATION • REHABILITATION • REINTEGRATION // INITIATIVE BY TYCIA FOUNDATION
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#deb04a] text-xs shrink-0">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#c05a3e]" />
            DELHI PRISONS
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#deb04a]" />
            TIHAR COMPLEX
          </span>
        </div>
      </div>
    </div>
  );
};
