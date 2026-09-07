import React, { useState } from 'react';
import { FINDINGS_DATA } from '../data/mockData';
import { FindingItem } from '../types';
import {
  Briefcase,
  BookOpen,
  Brain,
  Repeat,
  AlertTriangle,
  Info,
  X,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

interface FindingsSectionProps {
  id?: string;
}

export const FindingsSection: React.FC<FindingsSectionProps> = ({ id = 'findings' }) => {
  const [selectedFinding, setSelectedFinding] = useState<FindingItem | null>(null);

  const renderIcon = (name: string, colorClass = '') => {
    switch (name) {
      case 'BriefcaseOff':
        return <Briefcase className={`w-5 h-5 ${colorClass}`} />;
      case 'BookOpen':
        return <BookOpen className={`w-5 h-5 ${colorClass}`} />;
      case 'Brain':
        return <Brain className={`w-5 h-5 ${colorClass}`} />;
      case 'RefreshCw':
        return <Repeat className={`w-5 h-5 ${colorClass}`} />;
      case 'AlertOctagon':
        return <AlertTriangle className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Info className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section
      className="w-full bg-[#ECE0C6] py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]"
      id={id}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-[#111111] pb-4">
            <div>
              <div className="inline-block bg-[#111111] text-[#deb04a] px-3 py-1 font-mono text-xs uppercase font-extrabold mb-2">
                EMPIRICAL FIELDWORK • TIHAR JAIL NO. 5
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight font-bold">
                KEY FINDINGS: 600 YOUTH INMATES
              </h2>
            </div>
            <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] max-w-md leading-relaxed">
              Direct quantitative and qualitative baseline survey conducted with 600 young incarcerated
              males (ages 18-21). Click any data card to inspect methodology and action protocols.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid of Brutalist Statistics — staggered */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {FINDINGS_DATA.map((finding) => {
            const isCoralCard = finding.id === 'gender-crime';

            return (
              <StaggerItem key={finding.id} className={finding.colSpan || ''}>
                <motion.div
                  onClick={() => setSelectedFinding(finding)}
                  className={`${finding.bgClass} border-[2.5px] border-[#111111] p-6 shadow-[6px_6px_0px_#111111] transition-all cursor-pointer flex flex-col justify-between group h-full`}
                  id={`finding-card-${finding.id}`}
                  whileHover={{
                    translateX: 2,
                    translateY: 2,
                    boxShadow: '3px 3px 0px #111111',
                    transition: { type: 'spring', stiffness: 400, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-xs font-extrabold px-2 py-0.5 uppercase tracking-wider border border-[#111111]"
                        style={{ backgroundColor: finding.tagBg, color: finding.tagText }}
                      >
                        {finding.tag}
                      </span>
                      <motion.div
                        className="p-1 border border-[#111111] bg-[#ECE0C6] text-[#111111] shadow-[2px_2px_0px_#111111]"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {renderIcon(finding.iconName)}
                      </motion.div>
                    </div>

                    {isCoralCard ? (
                      <div>
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                          <div className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-extrabold text-[#111111] tracking-tighter">
                            {finding.stat}
                          </div>
                          <div className="font-['Space_Grotesk'] text-xl sm:text-2xl uppercase text-[#111111] font-bold">
                            {finding.title}
                          </div>
                        </div>
                        <p className="font-['Inter'] text-base text-[#111111] font-medium max-w-2xl leading-relaxed">
                          Of this cohort, <strong className="font-bold underline">78% are charged under Rape or POCSO</strong> statutes. This demanded our creation of bespoke gender-sensitization curricula inside prison blocks.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div
                          className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-extrabold tracking-tighter mb-2"
                          style={{ color: finding.statColor }}
                        >
                          {finding.stat}
                        </div>
                        <p className="font-['Space_Grotesk'] text-lg uppercase text-[#111111] leading-tight font-bold mb-3">
                          {finding.title}
                        </p>
                        <p className="font-['Inter'] text-sm sm:text-base text-[#1c1b1b] leading-relaxed">
                          {finding.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-3 border-t-[2px] border-[#111111] flex items-center justify-between font-mono text-xs font-bold uppercase text-[#111111]">
                    <span>{finding.footer}</span>
                    <motion.span
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Assessment Baseline Footer Note */}
        <AnimatedSection delay={0.3}>
          <div className="p-3.5 bg-[#e5e2e1] border-[2px] border-[#111111] text-center font-mono text-xs text-[#4b4731] uppercase font-bold tracking-wider">
            * Statistics above are from an intensive need assessment study conducted inside Youth Prison Jail No. 5 with 600 inmates by TYCIA Foundation.
          </div>
        </AnimatedSection>
      </div>

      {/* Detail Modal for Selected Finding — animated */}
      <AnimatePresence>
        {selectedFinding && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-xs flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedFinding(null)}
          >
            <motion.div
              className="bg-[#ECE0C6] border-[3px] border-[#111111] max-w-2xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_#deb04a] relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedFinding(null)}
                className="absolute top-4 right-4 p-1.5 bg-[#111111] text-white hover:bg-[#c05a3e] transition-colors border-[2px] border-[#111111] cursor-pointer"
                aria-label="Close modal"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="space-y-4">
                <div className="inline-block bg-[#111111] text-[#deb04a] px-2.5 py-0.5 font-mono text-xs font-bold uppercase">
                  DETAILED EMPIRICAL DOSSIER // {selectedFinding.tag}
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="font-['Space_Grotesk'] text-5xl font-extrabold text-[#913b28]">
                    {selectedFinding.stat}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                    {selectedFinding.title}
                  </h3>
                </div>

                <p className="font-['Inter'] text-base text-[#1c1b1b] leading-relaxed">
                  {selectedFinding.description}
                </p>

                {selectedFinding.details && (
                  <div className="space-y-3 pt-3 border-t-[2.5px] border-[#111111]">
                    <motion.div
                      className="p-3 bg-[#dfd2b5] border-[2px] border-[#111111]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="font-mono text-xs uppercase font-bold text-[#913b28]">
                        Survey Methodology (Sample: {selectedFinding.details.sampleSize} Inmates)
                      </div>
                      <div className="text-sm font-['Inter'] text-[#1c1b1b] mt-1">
                        {selectedFinding.details.methodology}
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-3 bg-[#deb04a] border-[2px] border-[#111111]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <div className="font-mono text-xs uppercase font-bold text-[#111111]">
                        Intervention Initiated by TYCIA
                      </div>
                      <div className="text-sm font-['Inter'] text-[#111111] font-medium mt-1">
                        {selectedFinding.details.actionTaken}
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-3 bg-[#e8edf3] border-[2px] border-[#111111]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="font-mono text-xs uppercase font-bold text-[#3f5670]">
                        Strategic Policy Takeaway
                      </div>
                      <div className="text-sm font-['Inter'] text-[#1c1b1b] mt-1">
                        {selectedFinding.details.keyTakeaway}
                      </div>
                    </motion.div>
                  </div>
                )}

                <div className="pt-2">
                  <motion.button
                    onClick={() => setSelectedFinding(null)}
                    className="w-full bg-[#111111] text-white py-3 font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#deb04a] hover:text-[#111111] border-[2px] border-[#111111] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Dossier
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
