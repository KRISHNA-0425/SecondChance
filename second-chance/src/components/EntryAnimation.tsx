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
  { id: 'transformation', label: 'TRANSFORMATION', detail: 'Restorative Justice' },
  { id: 'stories', label: 'STORIES', detail: 'Voices of Reclaimed Lives' },
  { id: 'fellowship', label: 'FELLOWSHIP PROGRAM', detail: 'On-Ground Frontline Leaders' },
  { id: 'flagship', label: 'FLAGSHIP', detail: 'Model Youth Prison Reform' },
  { id: 'perform', label: 'PERFORM', detail: 'Reformation in Action' },
];

export const EntryAnimation: React.FC<EntryAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll timeline container on mobile to keep active node in view
  useEffect(() => {
    if (activeNodeRef.current && timelineRef.current) {
      const container = timelineRef.current;
      const node = activeNodeRef.current;
      const scrollLeft =
        node.offsetLeft - container.offsetWidth / 2 + node.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Top Bar with Ticker & Skip Action */}
      <div className="relative z-10 w-full border-b-[2px] border-white/20 bg-[#161616]/90 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-wider text-[#ffe600]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ffe600] animate-ping" />
          <span className="font-bold uppercase">
            SYSTEM INITIALIZATION // REHABILITATION MATRIX
          </span>
        </div>
        <button
          onClick={handleSkip}
          className="font-mono text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#ffe600] text-white hover:text-[#111111] border border-white/40 px-3 py-1.5 flex items-center gap-1.5 transition-all cursor-pointer shadow-[2px_2px_0px_#ffffff] active:translate-y-0.5"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Stage: Logo Pop-Up & Active Point Callout */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-6 max-w-4xl mx-auto w-full text-center">
        {/* Logo Pop-Up Badge */}
        <div className="animate-in fade-in zoom-in-75 duration-700 ease-out flex flex-col items-center">
          <div className="relative group p-4 sm:p-6 bg-white border-[3px] border-[#111111] shadow-[6px_6px_0px_#ffe600] mb-5 transform transition-transform">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkE2CBWerlIjG5Q5ilsnekCfFMde6WM1hw4ZRCIWFxA&s=10"
              alt="Project Second Chance"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain drop-shadow-sm"
            />
            <div className="absolute -top-3 -right-3 bg-[#ff5722] text-white font-mono text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
              TYCIA
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-['Space_Grotesk'] text-2xl sm:text-4xl md:text-5xl uppercase font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
              PROJECT <span className="bg-[#ffe600] text-[#111111] px-2 py-0.5 border border-white">SECOND CHANCE</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-bold">
              Turn Your Concern Into Action (TYCIA) Foundation
            </p>
          </div>
        </div>

        {/* Current Active Milestone Callout */}
        <div className="mt-8 sm:mt-10 w-full max-w-lg">
          <div className="bg-[#1a1a1a] border-[2px] border-[#ffe600] p-3 sm:p-4 shadow-[4px_4px_0px_#ffffff] flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase text-[#ffe600] font-bold">
              <span className="w-1.5 h-1.5 bg-[#ffe600] rounded-full animate-pulse" />
              <span>STAGE {activeIndex + 1} OF {TIMELINE_POINTS.length}</span>
            </div>
            <div className="font-['Space_Grotesk'] text-xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              {currentPoint?.label ?? ''}
            </div>
            <div className="font-mono text-xs text-neutral-300">
              {currentPoint?.detail ?? ''}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stage: Moving Timeline Animation */}
      <div className="relative z-10 w-full bg-[#161616] border-t-[2px] border-white/20 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Progress Percent Bar */}
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
            <span className="text-[#ffe600] font-bold">
              TIMELINE TRAJECTORY: {progress >= 100 ? 'INITIALIZED' : 'PROCESSING'}
            </span>
            <span className="font-bold text-white">{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-white/10 h-2 border border-white/30 overflow-hidden relative">
            <div
              className="h-full bg-[#ffe600] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Centered Alternating Timeline Points (One Top, One Bottom) */}
          <div
            ref={timelineRef}
            className="overflow-x-auto pb-3 pt-2 scrollbar-none flex justify-start lg:justify-center items-center scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative flex items-center justify-center min-w-max mx-auto px-4">
              {/* Horizontal Connecting Track passing through center of all nodes */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/20 z-0">
                <div
                  className="h-full bg-[#ffe600] transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Milestone Nodes */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-5 md:gap-6">
                {TIMELINE_POINTS.map((pt, idx) => {
                  const isPast = idx < activeIndex;
                  const isCurrent = idx === activeIndex;
                  const isTop = idx % 2 === 0;

                  return (
                    <div
                      key={pt.id}
                      ref={isCurrent ? activeNodeRef : null}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-16 sm:w-20 md:w-22 transition-all duration-300 ${
                        isCurrent
                          ? 'scale-105'
                          : isPast
                          ? 'opacity-85'
                          : 'opacity-35'
                      }`}
                    >
                      {/* TOP SECTION: Label if isTop, else Spacer */}
                      <div className="h-9 sm:h-10 flex flex-col items-center justify-end w-full">
                        {isTop ? (
                          <>
                            <span
                              className={`font-mono text-[9px] sm:text-[11px] uppercase font-extrabold whitespace-nowrap px-1.5 py-0.5 border transition-colors ${
                                isCurrent
                                  ? 'bg-[#ffe600] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                                  : isPast
                                  ? 'bg-white/10 text-white border-white/40'
                                  : 'bg-transparent text-neutral-500 border-transparent'
                              }`}
                            >
                              {pt?.label ?? ''}
                            </span>
                            <div
                              className={`w-[2px] h-2 transition-colors ${
                                isCurrent || isPast ? 'bg-[#ffe600]' : 'bg-white/20'
                              }`}
                            />
                          </>
                        ) : null}
                      </div>

                      {/* CENTER SECTION: Node Indicator Box */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-mono text-xs font-extrabold border-[2px] transition-colors relative z-10 ${
                          isCurrent
                            ? 'bg-[#ffe600] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                            : isPast
                            ? 'bg-white text-[#111111] border-white'
                            : 'bg-[#222222] text-neutral-400 border-white/20'
                        }`}
                      >
                        {isPast ? (
                          <Check className="w-3.5 h-3.5 text-[#111111] stroke-[3]" />
                        ) : (
                          <span>{idx + 1}</span>
                        )}
                      </div>

                      {/* BOTTOM SECTION: Label if !isTop, else Spacer */}
                      <div className="h-9 sm:h-10 flex flex-col items-center justify-start w-full">
                        {!isTop ? (
                          <>
                            <div
                              className={`w-[2px] h-2 transition-colors ${
                                isCurrent || isPast ? 'bg-[#ffe600]' : 'bg-white/20'
                              }`}
                            />
                            <span
                              className={`font-mono text-[9px] sm:text-[11px] uppercase font-extrabold whitespace-nowrap px-1.5 py-0.5 border transition-colors ${
                                isCurrent
                                  ? 'bg-[#ffe600] text-[#111111] border-white shadow-[2px_2px_0px_#ffffff]'
                                  : isPast
                                  ? 'bg-white/10 text-white border-white/40'
                                  : 'bg-transparent text-neutral-500 border-transparent'
                              }`}
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
