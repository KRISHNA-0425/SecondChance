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

  return (
    <section
      className="w-full bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]"
      id={id}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
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
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border-[2px] transition-colors cursor-pointer ${
                activeTab === 'metrics'
                  ? 'bg-[#ffe600] text-[#111111] border-[#ffe600]'
                  : 'bg-transparent text-white border-white/40 hover:border-white'
              }`}
            >
              Impact Cards
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border-[2px] transition-colors cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-[#ffe600] text-[#111111] border-[#ffe600]'
                  : 'bg-transparent text-white border-white/40 hover:border-white'
              }`}
            >
              Field Timeline
            </button>
          </div>
        </div>

        {activeTab === 'metrics' ? (
          /* The 6 Brutalist Impact Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Recidivism Rate Drop */}
            <div className="bg-white text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#dec800] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#ff5722] text-white font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  RECIDIVISM RATE
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#b02f00] tracking-tighter">
                  -3%
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Drop in Repeat Offenses
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] leading-relaxed">
                Lowered the rate of recidivism by 3% in past 18 months, registering direct impact
                across the high-density repeaters ward.
              </p>
            </div>

            {/* 2. Inmates Engaged */}
            <div className="bg-[#ffe600] text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#ffffff] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#111111] text-[#ffe600] font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  REALISATION & ACTUALISATION
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#111111] tracking-tighter">
                  1,800+
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Inmates Engaged
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#111111] leading-relaxed font-medium">
                Taken through a structured life skills journey of recognizing the long-term impact of
                their actions on themselves and society.
              </p>
            </div>

            {/* 3. Formal Education */}
            <div className="bg-white text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#ff5722] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#0053db] text-white font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  FORMAL EDUCATION
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#0053db] tracking-tighter">
                  250+
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Board & Degree Aspirants
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] leading-relaxed">
                150+ students motivated to clear NIOS board exams; 100+ youth inmates enrolled and
                appeared for IGNOU degree examinations.
              </p>
            </div>

            {/* 4. Internal Vocation */}
            <div className="bg-white text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#ffe600] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#111111] text-white font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  INTERNAL VOCATION
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#111111] tracking-tighter">
                  60+
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Employed Inside Prison
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] leading-relaxed">
                Inmates formally employed part-time within the prison premises following graduation
                from our functional skill bootcamps.
              </p>
            </div>

            {/* 5. Program Sustainability */}
            <div className="bg-[#dbe1ff] text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#ffffff] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#0053db] text-white font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  PROGRAM SUSTAINABILITY
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#0053db] tracking-tighter">
                  20+
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Trained Peer Leaders
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#1c1b1b] leading-relaxed">
                Self-sustaining model: created a core cadre of inmate leaders capable of running
                cohorts and life-skills workshops independently.
              </p>
            </div>

            {/* 6. Intensive Fieldwork */}
            <div className="bg-[#ff5722] text-[#111111] border-[2.5px] border-white p-6 shadow-[6px_6px_0px_#ffe600] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="bg-[#111111] text-[#ff5722] font-mono text-xs uppercase px-2 py-0.5 font-extrabold">
                  INTENSIVE FIELDWORK
                </span>
                <div className="font-['Space_Grotesk'] text-6xl font-extrabold text-[#111111] tracking-tighter">
                  2,500+
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111]">
                  Hours Spent Inside
                </h3>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#111111] leading-relaxed font-semibold">
                Directly delivered classes and workshops by fellows, driving a 60% documented
                growth in language and arithmetic proficiency.
              </p>
            </div>
          </div>
        ) : (
          /* Field Timeline View */
          <div className="space-y-4 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 bg-white text-[#111111] border-[2.5px] border-white shadow-[4px_4px_0px_#ffe600] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
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
              </div>
            ))}
          </div>
        )}

        {/* CTA Bar */}
        <div className="p-6 bg-[#ffe600] text-[#111111] border-[3px] border-white shadow-[6px_6px_0px_#ffffff] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-['Space_Grotesk'] text-2xl uppercase font-extrabold">
              READY TO ACCELERATE SYSTEM REFORM?
            </h4>
            <p className="font-['Inter'] text-sm font-medium">
              Join the next fellowship cohort or collaborate as an institutional donor.
            </p>
          </div>
          <button
            onClick={() => onNavigate('fellowship')}
            className="bg-[#111111] text-white py-3 px-6 font-mono text-xs uppercase font-extrabold border-[2px] border-[#111111] hover:bg-[#ff5722] hover:text-[#111111] transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-[3px_3px_0px_#111111]"
          >
            <span>Apply for Next Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
