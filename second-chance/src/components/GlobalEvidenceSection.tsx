import React, { useState } from 'react';
import { RAND_STUDY_METRICS } from '../data/mockData';
import { Calculator, Sparkles, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { AnimatedCounter } from './animations/AnimatedCounter';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export const GlobalEvidenceSection: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [studentCohort, setStudentCohort] = useState<number>(100);

  // RAND Corp formula: Each $1 spent saves ~$5 on reincarceration.
  // Average correctional education investment per youth inmate: ₹25,000 (~$300)
  // Total cost per reincarceration (police, judicial trial, incarceration over 2 yrs): ~₹1,25,000
  const totalInvestment = studentCohort * 25000;
  const estimatedSavings = totalInvestment * 4.8;
  const preventedReincarcerations = Math.round(studentCohort * 0.43);

  return (
    <section className="w-full bg-[#111111] text-white py-12 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]">
      <div className="max-w-7xl mx-auto space-y-6">
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <span className="bg-[#deb04a] text-[#111111] px-2.5 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2">
                GLOBAL EVIDENCE BENCHMARK
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl uppercase text-white tracking-tight font-bold">
                WHY CORRECTIONAL EDUCATION WORKS
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <motion.button
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-[#ECE0C6] text-[#111111] border-[2px] border-[#ECE0C6] px-3 py-1.5 font-mono text-xs uppercase font-bold flex items-center gap-1.5 hover:bg-[#deb04a] transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calculator className="w-3.5 h-3.5 text-[#c05a3e]" />
                <span>{showCalculator ? 'Hide Fiscal Calculator' : 'Try Savings Calculator'}</span>
              </motion.button>
              <div className="font-mono text-xs text-[#deb04a] border border-[#deb04a] px-3 py-1 max-w-xs text-left sm:text-right">
                *Statistics part of a 36 year study done by RAND Corp, Netherlands
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Evidence Cards Grid — staggered with counters */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2" staggerDelay={0.15}>
          {/* Evidence Card 1 */}
          <StaggerItem>
            <motion.div
              className="bg-[#ECE0C6] text-[#111111] border-[2.5px] border-[#ECE0C6] p-6 shadow-[5px_5px_0px_#deb04a] flex flex-col justify-between space-y-4 h-full"
              whileHover={{
                translateY: -4,
                boxShadow: '8px 8px 0px #deb04a',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <div className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-extrabold text-[#913b28] leading-none">
                +<AnimatedCounter target={13} duration={1.5} />%
              </div>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl uppercase text-[#111111] leading-snug font-bold">
                Correctional education improves 13% chances of inmates not returning to prison.
              </p>
              <div className="font-mono text-xs uppercase text-[#4b4731] font-extrabold border-t-[2px] border-[#111111] pt-2">
                INDEX: NON-RECIDIVISM PROBABILITY
              </div>
            </motion.div>
          </StaggerItem>

          {/* Evidence Card 2 */}
          <StaggerItem>
            <motion.div
              className="bg-[#deb04a] text-[#111111] border-[2.5px] border-white p-6 shadow-[5px_5px_0px_#ffffff] flex flex-col justify-between space-y-4 h-full"
              whileHover={{
                translateY: -4,
                boxShadow: '8px 8px 0px #ffffff',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <div className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-extrabold text-[#111111] leading-none">
                $<AnimatedCounter target={1} duration={1} /> : $<AnimatedCounter target={5} duration={1.5} />
              </div>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl uppercase text-[#111111] leading-snug font-bold">
                Every dollar spent on prison education saves four to five dollars on the cost of reincarceration.
              </p>
              <div className="font-mono text-xs uppercase text-[#111111] font-extrabold border-t-[2px] border-[#111111] pt-2">
                FISCAL COST BENEFIT MULTIPLIER
              </div>
            </motion.div>
          </StaggerItem>

          {/* Evidence Card 3 */}
          <StaggerItem>
            <motion.div
              className="bg-[#ECE0C6] text-[#111111] border-[2.5px] border-[#ECE0C6] p-6 shadow-[5px_5px_0px_#c05a3e] flex flex-col justify-between space-y-4 h-full"
              whileHover={{
                translateY: -4,
                boxShadow: '8px 8px 0px #c05a3e',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
            >
              <div className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-extrabold text-[#3f5670] leading-none">
                -<AnimatedCounter target={43} duration={1.8} />%
              </div>
              <p className="font-['Space_Grotesk'] text-lg sm:text-xl uppercase text-[#111111] leading-snug font-bold">
                Inmates who participate in correctional education programs had a 43 percent lower odds of committing crime.
              </p>
              <div className="font-mono text-xs uppercase text-[#4b4731] font-extrabold border-t-[2px] border-[#111111] pt-2">
                CRIME REDUCTION PROBABILITY RATIO
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Interactive Fiscal Savings Simulator */}
        <AnimatePresence>
          {showCalculator && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="mt-6 bg-[#ECE0C6] text-[#111111] border-[3px] border-[#deb04a] p-6 shadow-[6px_6px_0px_#deb04a]">
                <div className="flex items-center justify-between border-b-[2px] border-[#111111] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#c05a3e]" />
                    <span className="font-['Space_Grotesk'] text-lg uppercase font-bold text-[#111111]">
                      RAND CORP FISCAL IMPACT SIMULATOR (TIHAR COHORT)
                    </span>
                  </div>
                  <motion.span
                    className="font-mono text-xs bg-[#111111] text-[#deb04a] px-2 py-0.5 font-bold uppercase"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    ACTIVE MODEL
                  </motion.span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 space-y-3">
                    <label className="block font-mono text-xs uppercase font-bold text-[#111111]">
                      Simulated Inmate Cohort Size (Ages 18-21):{' '}
                      <span className="text-[#913b28] text-sm font-extrabold">
                        {studentCohort} Youth Inmates
                      </span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="600"
                      step="20"
                      value={studentCohort}
                      onChange={(e) => setStudentCohort(Number(e.target.value))}
                      className="w-full h-3 bg-[#dfd2b5] border-[2px] border-[#111111] rounded-none accent-[#c05a3e] cursor-pointer"
                    />
                    <div className="flex justify-between font-mono text-[11px] text-[#4b4731]">
                      <span>Min: 20 Inmates</span>
                      <span>Jail No. 5 Capacity: 600</span>
                    </div>
                  </div>

                  <StaggerContainer className="lg:col-span-6 grid grid-cols-3 gap-3" staggerDelay={0.1}>
                    <StaggerItem>
                      <motion.div
                        className="bg-[#dfd2b5] border-[2px] border-[#111111] p-3 text-center shadow-[3px_3px_0px_#111111]"
                        whileHover={{ translateY: -2, boxShadow: '5px 5px 0px #111111' }}
                      >
                        <div className="font-mono text-[11px] uppercase text-[#4b4731] font-bold">
                          Education Cost
                        </div>
                        <div className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[#111111] mt-1">
                          ₹{(totalInvestment / 100000).toFixed(1)} Lakh
                        </div>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div
                        className="bg-[#deb04a] border-[2px] border-[#111111] p-3 text-center shadow-[3px_3px_0px_#111111]"
                        whileHover={{ translateY: -2, boxShadow: '5px 5px 0px #111111' }}
                      >
                        <div className="font-mono text-[11px] uppercase text-[#111111] font-bold">
                          Public Savings
                        </div>
                        <div className="font-['Space_Grotesk'] text-lg sm:text-xl font-extrabold text-[#111111] mt-1">
                          ₹{(estimatedSavings / 100000).toFixed(1)} Lakh
                        </div>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div
                        className="bg-[#e8edf3] border-[2px] border-[#111111] p-3 text-center shadow-[3px_3px_0px_#111111]"
                        whileHover={{ translateY: -2, boxShadow: '5px 5px 0px #111111' }}
                      >
                        <div className="font-mono text-[11px] uppercase text-[#3f5670] font-bold">
                          Saved from Crime
                        </div>
                        <div className="font-['Space_Grotesk'] text-lg sm:text-xl font-extrabold text-[#3f5670] mt-1">
                          ~{preventedReincarcerations} Youth
                        </div>
                      </motion.div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
