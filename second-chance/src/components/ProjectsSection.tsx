import React, { useState } from 'react';
import { PROJECTS_DATA, PEER_DIALOGUE_IMAGE_URL } from '../data/mockData';
import { ProjectItem, ActiveScreen } from '../types';
import { ProjectDossierModal } from './ProjectDossierModal';
import {
  GraduationCap,
  PhoneCall,
  Library,
  LockKeyholeOpen,
  Users,
  MessageSquareText,
  ExternalLink,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

interface ProjectsSectionProps {
  onNavigate: (screen: ActiveScreen) => void;
  id?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigate,
  id = 'projects',
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const renderIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#111111]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#913b28]" />;
      case 'Library':
        return <Library className="w-5 h-5 text-[#3f5670]" />;
      case 'LockKeyholeOpen':
        return <LockKeyholeOpen className="w-5 h-5 text-[#111111]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#111111]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-[#111111]" />;
      default:
        return <Users className="w-5 h-5 text-[#111111]" />;
    }
  };

  const filteredProjects =
    filterCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filterCategory);

  return (
    <section
      className="w-full bg-[#f8f6f2] py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]"
      id={id}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="bg-[#c05a3e] text-white px-3 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2">
                ACTIONABLE SOLUTIONS
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight font-bold">
                FLAGSHIP REFORM INITIATIVES
              </h2>
            </div>
            <div className="font-mono text-xs sm:text-sm text-[#4b4731] uppercase font-bold">
              [ 06 INTEGRATED PRISON INTERVENTIONS ]
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter Pills — layout animation for active indicator */}
        <AnimatedSection direction="left" delay={0.15} duration={0.5}>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="font-mono text-xs font-bold uppercase text-[#111111] flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <LayoutGroup>
              {[
                { id: 'all', label: 'All Initiatives (6)' },
                { id: 'fellowship', label: 'Fellowship' },
                { id: 'reentry', label: 'Re-entry & Helpline' },
                { id: 'education', label: 'Prison School' },
                { id: 'legal', label: 'Bail & Legal Aid' },
                { id: 'gender', label: 'Gender Justice' },
                { id: 'mental-health', label: 'Safe Dialogue' },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] shrink-0 cursor-pointer transition-all relative ${
                    filterCategory === tab.id
                      ? 'bg-[#111111] text-white shadow-[2px_2px_0px_#111111]'
                      : 'bg-white text-[#111111] hover:bg-[#deb04a]'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  layout
                >
                  {tab.label}
                </motion.button>
              ))}
            </LayoutGroup>
          </div>
        </AnimatedSection>

        {/* Grid of Projects — staggered entrance with layout animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="bg-white border-[2.5px] border-[#111111] shadow-[6px_6px_0px_#111111] flex flex-col justify-between h-full"
                  id={`project-card-${project.id}`}
                  whileHover={{
                    translateX: 2,
                    translateY: 2,
                    boxShadow: '3px 3px 0px #111111',
                    transition: { type: 'spring', stiffness: 400, damping: 20 },
                  }}
                >
                  <div>
                    <div
                      className={`${project.headerBg} p-4 border-b-[2.5px] border-[#111111] flex items-center justify-between`}
                    >
                      <span className="font-mono text-xs font-extrabold uppercase bg-[#111111] text-white px-2 py-0.5">
                        {project.badge}
                      </span>
                      <motion.div
                        className="p-1 bg-white border border-[#111111] shadow-[2px_2px_0px_#111111]"
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        {renderIcon(project.iconName)}
                      </motion.div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-['Space_Grotesk'] text-2xl uppercase text-[#111111] leading-tight font-bold">
                        {project.title}
                      </h3>
                      <p className="font-['Inter'] text-sm sm:text-base text-[#4b4731] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-[#111111] text-[#deb04a] py-2.5 font-mono text-xs uppercase font-extrabold border-[2px] border-[#111111] flex items-center justify-center gap-2 hover:bg-[#deb04a] hover:text-[#111111] transition-colors cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{project.footerTag}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {/* Feature Spotlight */}
        <AnimatedSection direction="up" delay={0.2} duration={0.7}>
          <div className="mt-8 bg-[#f6f3f2] border-[3px] border-[#111111] p-6 lg:p-8 shadow-[8px_8px_0px_#111111]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-block bg-[#111111] text-[#deb04a] px-2.5 py-1 font-mono text-xs uppercase font-extrabold">
                  FIELD REALITY IN ACTION
                </div>
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl uppercase text-[#111111] leading-tight font-bold">
                  COMMUNITY & PEER DIALOGUES
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base text-[#1c1b1b] leading-relaxed">
                  Every day inside Jail No. 5, barriers of hostility, social prejudice, and despair are
                  systematically dismantled. Peer leaders and fellows facilitate circle sessions where
                  critical reflection becomes the catalyst for life beyond bars.
                </p>
                <StaggerContainer className="grid grid-cols-2 gap-3 pt-2" staggerDelay={0.15}>
                  <StaggerItem>
                    <motion.div
                      className="p-3 bg-white border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]"
                      whileHover={{ translateY: -2, boxShadow: '4px 4px 0px #111111' }}
                    >
                      <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#913b28]">
                        DAILY
                      </div>
                      <div className="font-mono text-xs text-[#4b4731] uppercase font-bold">
                        Circle Sessions
                      </div>
                    </motion.div>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.div
                      className="p-3 bg-white border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]"
                      whileHover={{ translateY: -2, boxShadow: '4px 4px 0px #111111' }}
                    >
                      <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#3f5670]">
                        360°
                      </div>
                      <div className="font-mono text-xs text-[#4b4731] uppercase font-bold">
                        Rehab Spectrum
                      </div>
                    </motion.div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              <AnimatedSection className="lg:col-span-6" direction="right" delay={0.3} duration={0.7}>
                <div className="relative bg-white border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] overflow-hidden">
                  <div className="absolute top-2 left-2 bg-[#111111] text-white px-2 py-0.5 font-mono text-[11px] uppercase font-extrabold z-10">
                    TIHAR JAIL NO. 5 ARCHIVE
                  </div>
                  <img
                    alt="Daily life and peer dialogues in Tihar Jail No. 5"
                    className="w-full aspect-[1.97] object-cover"
                    src={PEER_DIALOGUE_IMAGE_URL}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-[#deb04a] border-t-[2.5px] border-[#111111] font-mono text-xs text-[#111111] font-extrabold uppercase flex items-center justify-between">
                    <span>Daily life and peer dialogues in Tihar Jail No. 5</span>
                    <Users className="w-4 h-4 text-[#111111]" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Dossier Modal */}
      <ProjectDossierModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={onNavigate}
      />
    </section>
  );
};
