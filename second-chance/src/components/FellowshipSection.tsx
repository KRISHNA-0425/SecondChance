import React, { useState } from 'react';
import { FellowshipApplication } from '../types';
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  Send,
  Building,
  Sparkles,
  Download,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export const FellowshipSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FellowshipApplication>({
    fullName: '',
    email: '',
    phone: '',
    city: 'New Delhi',
    education: 'Postgraduate / Masters',
    statementOfPurpose: '',
    priorVolunteerExperience: '',
    availabilityMonths: 12,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>('');

  const roadmapPhases = [
    {
      phase: 'PHASE 01',
      duration: 'MONTHS 01 - 02',
      title: 'FOUNDATION & PRISON JURISPRUDENCE',
      description:
        'Intensive orientation on the Model Prison Manual, human rights standards, criminological frameworks, and trauma-informed psychosocial safety.',
      badgeBg: 'bg-[#deb04a]',
    },
    {
      phase: 'PHASE 02',
      duration: 'MONTHS 03 - 07',
      title: 'IN-PRISON IMMERSION & TEACHING',
      description:
        'Daily entry into Jail No. 5 to facilitate foundational literacy, arithmetic bootcamps, and life skills circles directly with youth inmates.',
      badgeBg: 'bg-[#e8edf3]',
    },
    {
      phase: 'PHASE 03',
      duration: 'MONTHS 08 - 10',
      title: 'PROJECT INCUBATION & RESEARCH',
      description:
        'Design, pilot, and test a bespoke intervention module (e.g. anti-violence unlearning, digital bail registry, or trade certification track).',
      badgeBg: 'bg-[#f2e8e3]',
    },
    {
      phase: 'PHASE 04',
      duration: 'MONTHS 11 - 12',
      title: 'REINTEGRATION & POLICY HANDOVER',
      description:
        'Institutionalize student records into NIOS/IGNOU, transition peer leaders, and publish an empirical fieldwork whitepaper for correctional reform.',
      badgeBg: 'bg-[#c05a3e]',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required coordinates.');
      return;
    }
    const newId = `SCF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(newId);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#fcf9f8] py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]" id="fellowship">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-[#111111] pb-4">
            <div>
              <span className="bg-[#deb04a] text-[#111111] px-3 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2 border border-[#111111]">
                12-MONTH LEADERSHIP FELLOWSHIP
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight font-bold">
                SECOND CHANCE FELLOWSHIP
              </h2>
            </div>
            <motion.div
              className="font-mono text-xs text-[#913b28] font-bold uppercase bg-[#f2e8e3] px-3 py-1.5 border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              COHORT 2025-2026 // ADMISSIONS OPEN
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Overview Banner */}
        <AnimatedSection direction="up" delay={0.15} duration={0.7}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border-[3px] border-[#111111] p-6 lg:p-8 shadow-[8px_8px_0px_#111111]">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl uppercase text-[#111111] font-bold">
              TRANSFORM CORRECTIONAL SPACES FROM WITHIN
            </h3>
            <p className="font-['Inter'] text-base text-[#4b4731] leading-relaxed">
              The Second Chance Fellowship recruits exceptional graduates, social workers, legal minds,
              and educators to work directly inside Delhi Prisons Tihar Jail No. 5 for one transformative year.
              Fellows bridge the chasm between penal isolation and social reintegration.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-[#f6f3f2] border-[2px] border-[#111111]">
                <div className="font-mono text-xs text-[#4b4731] uppercase font-bold">Stipend</div>
                <div className="font-['Space_Grotesk'] text-xl font-bold text-[#111111] mt-0.5">
                  ₹35,000/mo
                </div>
              </div>
              <div className="p-3 bg-[#deb04a] border-[2px] border-[#111111]">
                <div className="font-mono text-xs text-[#111111] uppercase font-bold">Duration</div>
                <div className="font-['Space_Grotesk'] text-xl font-bold text-[#111111] mt-0.5">
                  12 Months
                </div>
              </div>
              <div className="p-3 bg-[#e8edf3] border-[2px] border-[#111111]">
                <div className="font-mono text-xs text-[#3f5670] uppercase font-bold">Location</div>
                <div className="font-['Space_Grotesk'] text-xl font-bold text-[#3f5670] mt-0.5">
                  Tihar Jail 5
                </div>
              </div>
              <div className="p-3 bg-[#f2e8e3] border-[2px] border-[#111111]">
                <div className="font-mono text-xs text-[#913b28] uppercase font-bold">Seats</div>
                <div className="font-['Space_Grotesk'] text-xl font-bold text-[#913b28] mt-0.5">
                  15 Fellows
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#111111] text-white p-6 border-[2px] border-[#111111] space-y-4">
            <div className="font-mono text-xs uppercase text-[#deb04a] font-bold">
              ELIGIBILITY CRITERIA:
            </div>
            <ul className="space-y-2 text-xs font-['Inter']">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#deb04a] shrink-0 mt-0.5" />
                <span>Indian citizen aged 21–32 years</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#deb04a] shrink-0 mt-0.5" />
                <span>Bachelor's degree in any discipline (Law, Social Work, Psychology preferred)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#deb04a] shrink-0 mt-0.5" />
                <span>Demonstrated commitment to restorative justice & civil liberties</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#deb04a] shrink-0 mt-0.5" />
                <span>Full-time in-person residency in New Delhi NCR</span>
              </li>
            </ul>
          </div>
        </div>
        </AnimatedSection>

        {/* 12-Month Program Architecture Roadmap */}
        <div className="space-y-4">
          <AnimatedSection direction="up" duration={0.5}>
            <div className="font-mono text-xs uppercase font-extrabold text-[#111111] tracking-wider">
              THE 12-MONTH FELLOWSHIP JOURNEY:
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.15}>
            {roadmapPhases.map((phase, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-white border-[2.5px] border-[#111111] p-5 shadow-[4px_4px_0px_#111111] flex flex-col justify-between space-y-3 h-full"
                  whileHover={{
                    translateY: -4,
                    boxShadow: '6px 6px 0px #111111',
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`${phase.badgeBg} text-[#111111] font-mono text-xs uppercase font-extrabold px-2 py-0.5 border border-[#111111]`}
                      >
                        {phase.phase}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-[#4b4731]">
                        {phase.duration}
                      </span>
                    </div>
                    <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#111111] mb-2 leading-tight">
                      {phase.title}
                    </h4>
                    <p className="font-['Inter'] text-xs sm:text-sm text-[#4b4731] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Interactive Application Portal */}
        <AnimatedSection direction="up" delay={0.2} duration={0.7}>
        <div className="bg-[#f6f3f2] border-[3px] border-[#111111] p-6 sm:p-10 shadow-[8px_8px_0px_#111111] max-w-4xl mx-auto">
          <div className="border-b-[2.5px] border-[#111111] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="bg-[#111111] text-[#deb04a] px-2.5 py-0.5 font-mono text-xs font-bold uppercase inline-block mb-1">
                ONLINE CANDIDATE PORTAL
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#111111]">
                FELLOWSHIP APPLICATION (COHORT 2025)
              </h3>
            </div>
            {!submitted && (
              <div className="font-mono text-xs font-bold text-[#111111] bg-white border border-[#111111] px-3 py-1">
                STEP {currentStep} OF 2
              </div>
            )}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:bg-[#faf6ee] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:bg-[#faf6ee] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:bg-[#faf6ee] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                        Highest Qualification
                      </label>
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:outline-none cursor-pointer"
                      >
                        <option>Bachelors Degree (B.A., B.Sc., B.Tech, etc.)</option>
                        <option>Law Degree (LL.B. / B.A. LL.B.)</option>
                        <option>Postgraduate / Masters (MSW, M.A., etc.)</option>
                        <option>Doctorate / Ph.D.</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.fullName || !formData.email || !formData.phone) {
                          alert('Please complete required fields to proceed.');
                          return;
                        }
                        setCurrentStep(2);
                      }}
                      className="bg-[#111111] text-[#deb04a] px-6 py-3 font-mono text-xs uppercase font-extrabold border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#deb04a] hover:text-[#111111] transition-all cursor-pointer"
                    >
                      Proceed to Motivation & Statement →
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                      Statement of Purpose: Why do you want to work inside Tihar Jail? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.statementOfPurpose}
                      onChange={(e) =>
                        setFormData({ ...formData, statementOfPurpose: e.target.value })
                      }
                      placeholder="Discuss your values, personal orientation, and what drew you to correctional reform..."
                      className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:bg-[#faf6ee] focus:outline-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                      Prior Volunteer, Community, or Grassroots Experience
                    </label>
                    <textarea
                      rows={3}
                      value={formData.priorVolunteerExperience}
                      onChange={(e) =>
                        setFormData({ ...formData, priorVolunteerExperience: e.target.value })
                      }
                      placeholder="Details of any previous work with youth, marginalized populations, teaching, or civil rights..."
                      className="w-full p-3 bg-white border-[2px] border-[#111111] font-['Inter'] text-sm focus:bg-[#faf6ee] focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="bg-white text-[#111111] px-5 py-2.5 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                    >
                      ← Back to Coordinates
                    </button>

                    <button
                      type="submit"
                      className="bg-[#c05a3e] text-white px-7 py-3 font-mono text-xs uppercase font-extrabold border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#deb04a] hover:text-[#111111] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Fellowship Application</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="bg-white border-[3px] border-[#111111] p-6 sm:p-8 space-y-4 text-center">
              <div className="w-16 h-16 bg-[#deb04a] border-[2.5px] border-[#111111] rounded-full mx-auto flex items-center justify-center shadow-[3px_3px_0px_#111111]">
                <Sparkles className="w-8 h-8 text-[#111111]" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
                APPLICATION RECEIVED // COHORT 2025
              </h4>
              <div className="inline-block bg-[#111111] text-[#deb04a] px-3 py-1 font-mono text-xs font-bold uppercase">
                APPLICATION ID: {applicationId}
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] max-w-lg mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your dossier has been logged into the TYCIA
                Fellowship Selection System. Shortlisted candidates will be notified within 7 business days
                for Phase 1 telephonic panel interviews.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="bg-white text-[#111111] px-5 py-2.5 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          )}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
