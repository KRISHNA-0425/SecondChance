import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface EntryAnimationProps {
  onComplete: () => void;
}

const TIMELINE_POINTS = [
  { id: 'ty', label: 'TY', detail: 'Turn Your' },
  { id: 'cia', label: 'CIA', detail: 'Concern Into Action' },
  { id: 'field', label: 'FIELD', detail: 'Tihar Jail No. 5 Ground' },
  { id: 'reality', label: 'REALITY', detail: 'Youth Incarceration Diagnostics' },
  { id: 'proven', label: 'PROVEN', detail: 'Data-Backed Methodologies' },
  { id: 'impact', label: 'IMPACT', detail: 'Systemic Recidivism Reduction' },
  { id: 'transformation', label: 'TRANSFORM', detail: 'Restorative Justice' },
  { id: 'stories', label: 'STORIES', detail: 'Voices of Reclaimed Lives' },
  { id: 'fellowship', label: 'FELLOWSHIP', detail: 'On-Ground Frontline Leaders' },
  { id: 'flagship', label: 'FLAGSHIP', detail: 'Model Youth Prison Reform' },
  { id: 'perform', label: 'PERFORM', detail: 'Reformation in Action' },
];

export const EntryAnimation: React.FC<EntryAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const mobileActiveNodeRef = useRef<HTMLDivElement>(null);

  // Total animation duration in ms (approx 3.8s)
  const TOTAL_DURATION = 3800;

  useEffect(() => {
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, (elapsed / TOTAL_DURATION) * 100);
      setProgress(rawProgress);

      if (rawProgress < 100) {
        requestAnimationFrame(frame);
      } else {
        // Complete animation with brief pause
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 350);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // Current milestone based on progress (safeguarded against NaN and out of bounds)
  const safeProgress = Number.isFinite(progress) ? Math.max(0, Math.min(100, progress)) : 0;
  const rawIndex = Math.floor((safeProgress / 100) * TIMELINE_POINTS.length);
  const activeIndex = Math.max(
    0,
    Math.min(TIMELINE_POINTS.length - 1, Number.isFinite(rawIndex) ? rawIndex : 0)
  );

  const currentPoint = TIMELINE_POINTS[activeIndex] || TIMELINE_POINTS[0];

  // Auto-scroll desktop timeline container to keep active node centered
  useEffect(() => {
    if (activeNodeRef.current && timelineRef.current) {
      const container = timelineRef.current;
      const node = activeNodeRef.current;
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const targetLeft =
        container.scrollLeft +
        (nodeRect.left - containerRect.left) -
        container.clientWidth / 2 +
        nodeRect.width / 2;
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  }, [activeIndex]);

  // Auto-scroll mobile timeline container to keep active node centered
  useEffect(() => {
    if (mobileActiveNodeRef.current && mobileTimelineRef.current) {
      const container = mobileTimelineRef.current;
      const node = mobileActiveNodeRef.current;
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const targetLeft =
        container.scrollLeft +
        (nodeRect.left - containerRect.left) -
        container.clientWidth / 2 +
        nodeRect.width / 2;
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#111111] text-white overflow-hidden transition-all duration-500 ease-in-out select-none ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      aria-label="Loading animation"
    >
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] pointer-events-none" />

      {/* Top Bar with Ticker & Skip Action */}
      <div className="relative z-20 w-full shrink-0 border-b-[2px] border-white/20 bg-[#161616]/95 px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs tracking-wider text-[#deb04a] min-w-0">
          <span className="inline-block w-2 h-2 rounded-full bg-[#deb04a] animate-ping shrink-0" />
          <span className="font-bold uppercase truncate sm:inline hidden">
            SYSTEM INITIALIZATION // REHABILITATION MATRIX
          </span>
          <span className="font-bold uppercase truncate sm:hidden inline">
            PSC // INIT
          </span>
        </div>
        <button
          onClick={handleSkip}
          className="shrink-0 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#deb04a] text-white hover:text-[#111111] border border-white/40 px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer shadow-[2px_2px_0px_#ffffff] active:translate-y-0.5"
        >
          <span>Skip</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Center Stage: Logo Pop-Up & Active Point Callout */}
      <div className="relative z-10 flex-1 min-h-0 overflow-y-auto px-4 sm:px-4 py-2 sm:py-6 flex flex-col items-center justify-center max-w-4xl mx-auto w-full text-center">
        {/* Logo Pop-Up Badge */}
        <div className="animate-in fade-in zoom-in-75 duration-700 ease-out flex flex-col items-center w-full">
          <div className="relative group p-2 sm:p-4 md:p-5 bg-[#ECE0C6] border-[2.5px] sm:border-[3px] border-[#111111] shadow-[4px_4px_0px_#deb04a] sm:shadow-[6px_6px_0px_#deb04a] mb-2 sm:mb-4 transform transition-transform">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkE2CBWerlIjG5Q5ilsnekCfFMde6WM1hw4ZRCIWFxA&s=10"
              alt="Project Second Chance"
              className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-sm"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#c05a3e] text-white font-mono text-[8px] sm:text-xs font-black uppercase px-1 sm:px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
              TYCIA
            </div>
          </div>

          <div className="space-y-1 w-full px-1">
            <h1 className="font-['Space_Grotesk'] text-base sm:text-3xl md:text-5xl uppercase font-extrabold tracking-tight text-white flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <span>PROJECT</span>
              <span className="bg-[#deb04a] text-[#111111] px-1.5 sm:px-2 py-0.5 border border-white">
                SECOND CHANCE
              </span>
            </h1>
            <p className="font-mono text-[8px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest text-neutral-400 font-bold max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
              Turn Your Concern Into Action (TYCIA) Foundation
            </p>
          </div>
        </div>

        {/* Current Active Milestone Callout */}
        <div className="mt-2 sm:mt-5 md:mt-7 w-full max-w-[260px] sm:max-w-md md:max-w-lg px-1">
          <div className="bg-[#1a1a1a] border-[2px] border-[#deb04a] p-2 sm:p-3.5 md:p-4 shadow-[3px_3px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff] flex flex-col items-center gap-0.5 sm:gap-1">
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[8px] sm:text-xs uppercase text-[#deb04a] font-bold">
              <span className="w-1.5 h-1.5 bg-[#deb04a] rounded-full animate-pulse" />
              <span>STAGE {activeIndex + 1} OF {TIMELINE_POINTS.length}</span>
            </div>
            <div className="font-['Space_Grotesk'] text-sm sm:text-2xl md:text-3xl font-extrabold uppercase text-white tracking-wide max-w-full px-1">
              {currentPoint?.label ?? ''}
            </div>
            <div className="font-mono text-[9px] sm:text-xs text-neutral-300 max-w-full px-1 leading-snug">
              {currentPoint?.detail ?? ''}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stage: Moving Timeline Animation */}
      <div className="relative z-20 w-full shrink-0 bg-[#161616] border-t-[2px] border-white/20 px-3 py-2 sm:p-5 md:p-6">
        <div className="max-w-6xl mx-auto space-y-1.5 sm:space-y-4">
          {/* Progress Percent Bar */}
          <div className="flex items-center justify-between font-mono text-[9px] sm:text-xs text-neutral-400">
            <span className="text-[#deb04a] font-bold truncate mr-2">
              {progress >= 100 ? 'INITIALIZED' : 'PROCESSING'}
            </span>
            <span className="font-bold text-white shrink-0">{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-white/10 h-1 sm:h-2 border border-white/30 overflow-hidden relative">
            <div
              className="h-full bg-[#deb04a] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* MOBILE VIEW (< sm): Scrollable compact timeline with auto-centering */}
          <div className="block sm:hidden w-full pt-1 pb-0.5">
            <div
              ref={mobileTimelineRef}
              className="overflow-x-auto scroll-smooth w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.mobile-timeline-scroll::-webkit-scrollbar { display: none; }`}</style>
              <div className="mobile-timeline-scroll relative flex items-center w-max min-w-full px-2 py-0.5">
                {/* Connecting Line Track */}
                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[2px] bg-white/20 z-0">
                  <div
                    className="h-full bg-[#deb04a] transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step Nodes with proper spacing */}
                <div className="relative z-10 flex items-center gap-[6px] mx-auto">
                  {TIMELINE_POINTS.map((pt, idx) => {
                    const isPast = idx < activeIndex;
                    const isCurrent = idx === activeIndex;

                    return (
                      <div
                        key={pt.id}
                        ref={isCurrent ? mobileActiveNodeRef : null}
                        className={`shrink-0 flex items-center justify-center font-mono font-black transition-all duration-200 ${
                          isCurrent
                            ? 'w-7 h-7 text-[9px] bg-[#deb04a] text-[#111111] border-[2px] border-white shadow-[1px_1px_0px_#ffffff] scale-110'
                            : isPast
                            ? 'w-5 h-5 text-[8px] bg-white text-[#111111] border border-white'
                            : 'w-5 h-5 text-[8px] bg-[#222222] text-neutral-500 border border-white/20'
                        }`}
                      >
                        {isPast ? (
                          <Check className="w-2.5 h-2.5 text-[#111111] stroke-[3.5]" />
                        ) : (
                          <span>{idx + 1}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Active Stage Callout Bar */}
            <div className="flex items-center justify-between font-mono text-[9px] text-neutral-400 uppercase mt-1.5 pt-1 border-t border-white/10 px-0.5">
              <span className="text-[#deb04a] font-bold truncate max-w-[40%]">
                [{activeIndex + 1}/{TIMELINE_POINTS.length}] {currentPoint?.label}
              </span>
              <span className="text-neutral-300 truncate max-w-[55%] text-right font-medium">
                {currentPoint?.detail}
              </span>
            </div>
          </div>

          {/* DESKTOP/TABLET VIEW (>= sm): Full alternating nodes with extended labels */}
          <div
            ref={timelineRef}
            className="hidden sm:flex overflow-x-auto pb-2 pt-1 scrollbar-none items-center scroll-smooth w-full touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative flex items-center min-w-max mx-auto px-4 py-1">
              {/* Horizontal Connecting Track passing through center of all nodes */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/20 z-0">
                <div
                  className="h-full bg-[#deb04a] transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Milestone Nodes */}
              <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                {TIMELINE_POINTS.map((pt, idx) => {
                  const isPast = idx < activeIndex;
                  const isCurrent = idx === activeIndex;
                  const isTop = idx % 2 === 0;

                  return (
                    <div
                      key={pt.id}
                      ref={isCurrent ? activeNodeRef : null}
                      className={`shrink-0 flex flex-col items-center justify-center w-18 sm:w-22 md:w-24 transition-all duration-300 ${
                        isCurrent
                          ? 'scale-105'
                          : isPast
                          ? 'opacity-85'
                          : 'opacity-35'
                      }`}
                    >
                      {/* TOP SECTION: Label if isTop, else Spacer */}
                      <div className="h-8 sm:h-9 flex flex-col items-center justify-end w-full">
                        {isTop ? (
                          <>
                            <span
                              className={`font-mono text-[8px] sm:text-[10px] md:text-[11px] uppercase font-extrabold px-1.5 py-0.5 border transition-colors max-w-full truncate text-center block ${
                                isCurrent
                                  ? 'bg-[#deb04a] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                                  : isPast
                                  ? 'bg-white/10 text-white border-white/40'
                                  : 'bg-transparent text-neutral-500 border-transparent'
                              }`}
                              title={pt?.label}
                            >
                              {pt?.label ?? ''}
                            </span>
                            <div
                              className={`w-[2px] h-1.5 sm:h-2 transition-colors ${
                                isCurrent || isPast ? 'bg-[#deb04a]' : 'bg-white/20'
                              }`}
                            />
                          </>
                        ) : null}
                      </div>

                      {/* CENTER SECTION: Node Indicator Box */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center font-mono text-[10px] sm:text-xs font-extrabold border-[2px] transition-colors relative z-10 ${
                          isCurrent
                            ? 'bg-[#deb04a] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                            : isPast
                            ? 'bg-white text-[#111111] border-white'
                            : 'bg-[#222222] text-neutral-400 border-white/20'
                        }`}
                      >
                        {isPast ? (
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#111111] stroke-[3]" />
                        ) : (
                          <span>{idx + 1}</span>
                        )}
                      </div>

                      {/* BOTTOM SECTION: Label if !isTop, else Spacer */}
                      <div className="h-8 sm:h-9 flex flex-col items-center justify-start w-full">
                        {!isTop ? (
                          <>
                            <div
                              className={`w-[2px] h-1.5 sm:h-2 transition-colors ${
                                isCurrent || isPast ? 'bg-[#deb04a]' : 'bg-white/20'
                              }`}
                            />
                            <span
                              className={`font-mono text-[8px] sm:text-[10px] md:text-[11px] uppercase font-extrabold px-1.5 py-0.5 border transition-colors max-w-full truncate text-center block ${
                                isCurrent
                                  ? 'bg-[#deb04a] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                                  : isPast
                                  ? 'bg-white/10 text-white border-white/40'
                                  : 'bg-transparent text-neutral-500 border-transparent'
                              }`}
                              title={pt?.label}
                            >
                              {pt?.label ?? ''}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
