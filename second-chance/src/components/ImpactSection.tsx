import React, { useState } from 'react';
import { IMPACT_METRICS } from '../data/mockData';
import { ActiveScreen } from '../types';
import {
  Award,
  CheckCircle,
  FileCheck2,
  Calendar,
  ArrowRight,
  TrendingDown,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';
import { AnimatedCounter } from './animations/AnimatedCounter';

interface ImpactSectionProps {
  onNavigate: (screen: ActiveScreen) => void;
  id?: string;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onNavigate, id = 'impact' }) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'timeline'>('metrics');

  const milestones = [
    {
      quarter: 'Q1 2023',
      title: 'MOU & Operational Clearance',
      description:
        'Formal partnership ratified with Directorate General of Delhi Prisons under Mr. Sudhir Yadav for Jail No. 5 intervention.',
    },
    {
      quarter: 'Q2 2023',
      title: '600 Inmate Baseline Census',
      description:
        'Completion of comprehensive diagnostic screening discovering 93% unemployability and 63% foundational literacy deficits.',
    },
    {
      quarter: 'Q4 2023',
      title: 'Better-Life School Commissioning',
      description:
        'Daily operational academy inside prison walls launched; 180 youth enrolled into NIOS board examination batches.',
    },
    {
      quarter: 'Q2 2024',
      title: 'Kunji Helpline & Re-entry Linkage',
      description:
        'Establishment of post-release phone navigation grid partnering with 450+ verified community NGOs across NCR.',
    },
    {
      quarter: 'Q4 2024',
      title: '3% Recidivism Drop Verified',
      description:
        'Independent 18-month audit documents drop in repeat offense rates and 20+ trained inmate peer facilitators.',
    },
  ];

  // Impact cards data
  const impactCards = [
    {
      tag: 'RECIDIVISM RATE',
      tagBg: 'bg-[#ff5722]',
      tagText: 'text-white',
      stat: '-3%',
      statColor: 'text-[#b02f00]',
      counterTarget: 3,
      counterPrefix: '-',
      counterSuffix: '%',
      title: 'Drop in Repeat Offenses',
      description: 'Lowered the rate of recidivism by 3% in past 18 months, registering direct impact across the high-density repeaters ward.',
      bg: 'bg-white text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#dec800]',
    },
    {
      tag: 'REALISATION & ACTUALISATION',
      tagBg: 'bg-[#111111]',
      tagText: 'text-[#ffe600]',
      stat: '1,800+',
      statColor: 'text-[#111111]',
      counterTarget: 1800,
      counterPrefix: '',
      counterSuffix: '+',
      title: 'Inmates Engaged',
      description: 'Taken through a structured life skills journey of recognizing the long-term impact of their actions on themselves and society.',
      bg: 'bg-[#ffe600] text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#ffffff]',
    },
    {
      tag: 'FORMAL EDUCATION',
      tagBg: 'bg-[#0053db]',
      tagText: 'text-white',
      stat: '250+',
      statColor: 'text-[#0053db]',
      counterTarget: 250,
      counterPrefix: '',
      counterSuffix: '+',
      title: 'Board & Degree Aspirants',
      description: '150+ students motivated to clear NIOS board exams; 100+ youth inmates enrolled and appeared for IGNOU degree examinations.',
      bg: 'bg-white text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#ff5722]',
    },
    {
      tag: 'INTERNAL VOCATION',
      tagBg: 'bg-[#111111]',
      tagText: 'text-white',
      stat: '60+',
      statColor: 'text-[#111111]',
      counterTarget: 60,
      counterPrefix: '',
      counterSuffix: '+',
      title: 'Employed Inside Prison',
      description: 'Inmates formally employed part-time within the prison premises following graduation from our functional skill bootcamps.',
      bg: 'bg-white text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#ffe600]',
    },
    {
      tag: 'PROGRAM SUSTAINABILITY',
      tagBg: 'bg-[#0053db]',
      tagText: 'text-white',
      stat: '20+',
      statColor: 'text-[#0053db]',
      counterTarget: 20,
      counterPrefix: '',
      counterSuffix: '+',
      title: 'Trained Peer Leaders',
      description: 'Self-sustaining model: created a core cadre of inmate leaders capable of running cohorts and life-skills workshops independently.',
      bg: 'bg-[#dbe1ff] text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#ffffff]',
    },
    {
      tag: 'INTENSIVE FIELDWORK',
      tagBg: 'bg-[#111111]',
      tagText: 'text-[#ff5722]',
      stat: '2,500+',
      statColor: 'text-[#111111]',
      counterTarget: 2500,
      counterPrefix: '',
      counterSuffix: '+',
      title: 'Hours Spent Inside',
      description: 'Directly delivered classes and workshops by fellows, driving a 60% documented growth in language and arithmetic proficiency.',
      bg: 'bg-[#ff5722] text-[#111111]',
      shadow: 'shadow-[6px_6px_0px_#ffe600]',
    },
  ];

  return (
    <section
      className="w-full bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]"
      id={id}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <span className="bg-[#ffe600] text-[#111111] px-3 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2">
                MEASURABLE TRANSFORMATION
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-white tracking-tight font-bold">
                PROVEN IMPACT RECORD
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setActiveTab('metrics')}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border-[2px] transition-colors cursor-pointer ${
                  activeTab === 'metrics'
                    ? 'bg-[#ffe600] text-[#111111] border-[#ffe600]'
                    : 'bg-transparent text-white border-white/40 hover:border-white'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Impact Cards
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border-[2px] transition-colors cursor-pointer ${
                  activeTab === 'timeline'
                    ? 'bg-[#ffe600] text-[#111111] border-[#ffe600]'
                    : 'bg-transparent text-white border-white/40 hover:border-white'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Field Timeline
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {activeTab === 'metrics' ? (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Impact Cards Grid — staggered */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {impactCards.map((card, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      className={`${card.bg} border-[2.5px] border-white p-6 ${card.shadow} flex flex-col justify-between space-y-4 h-full`}
                      whileHover={{
                        translateY: -4,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                      }}
                    >
                      <div className="space-y-2">
                        <span className={`${card.tagBg} ${card.tagText} font-mono text-xs uppercase px-2 py-0.5 font-extrabold`}>
                          {card.tag}
                        </span>
                        <div className={`font-['Space_Grotesk'] text-6xl font-extrabold ${card.statColor} tracking-tighter`}>
                          <AnimatedCounter
                            target={card.counterTarget}
                            prefix={card.counterPrefix}
                            suffix={card.counterSuffix}
                            duration={2}
                          />
                        </div>
                        <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold">
                          {card.title}
                        </h3>
                      </div>
                      <p className="font-['Inter'] text-sm sm:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Field Timeline View — sequential reveal */}
              <StaggerContainer className="space-y-4 max-w-4xl mx-auto" staggerDelay={0.15}>
                {milestones.map((m, idx) => (
                  <StaggerItem key={idx} direction="left">
                    <motion.div
                      className="p-5 bg-white text-[#111111] border-[2.5px] border-white shadow-[4px_4px_0px_#ffe600] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      whileHover={{
                        translateX: 4,
                        boxShadow: '6px 6px 0px #ffe600',
                        transition: { type: 'spring', stiffness: 300 },
                      }}
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-xs font-bold uppercase bg-[#ff5722] text-white px-2 py-0.5">
                          {m.quarter}
                        </span>
                        <h4 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#111111] mt-1">
                          {m.title}
                        </h4>
                        <p className="font-['Inter'] text-sm text-[#4b4731] leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center gap-2 font-mono text-xs font-bold text-[#0053db] uppercase">
                        <CheckCircle className="w-4 h-4 text-[#0053db]" /> Verified Audit
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Bar */}
        <AnimatedSection direction="up" delay={0.2} duration={0.6}>
          <motion.div
            className="p-6 bg-[#ffe600] text-[#111111] border-[3px] border-white shadow-[6px_6px_0px_#ffffff] flex flex-col sm:flex-row items-center justify-between gap-4"
            whileHover={{
              boxShadow: '8px 8px 0px #ffffff',
              transition: { type: 'spring', stiffness: 200 },
            }}
          >
            <div className="space-y-1">
              <h4 className="font-['Space_Grotesk'] text-2xl uppercase font-extrabold">
                READY TO ACCELERATE SYSTEM REFORM?
              </h4>
              <p className="font-['Inter'] text-sm font-medium">
                Join the next fellowship cohort or collaborate as an institutional donor.
              </p>
            </div>
            <motion.button
              onClick={() => onNavigate('fellowship')}
              className="bg-[#111111] text-white py-3 px-6 font-mono text-xs uppercase font-extrabold border-[2px] border-[#111111] hover:bg-[#ff5722] hover:text-[#111111] transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-[3px_3px_0px_#111111]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
