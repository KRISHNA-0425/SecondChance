import React from 'react';
import { ProjectItem, ActiveScreen } from '../types';
import {
  X,
  GraduationCap,
  PhoneCall,
  Library,
  LockKeyholeOpen,
  Users,
  MessageSquareText,
  ExternalLink,
  CheckCircle2,
  Building2,
  ArrowRight,
} from 'lucide-react';

interface ProjectDossierModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (screen: ActiveScreen) => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  if (!project) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#111111]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#b02f00]" />;
      case 'Library':
        return <Library className="w-6 h-6 text-[#0053db]" />;
      case 'LockKeyholeOpen':
        return <LockKeyholeOpen className="w-6 h-6 text-[#111111]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#111111]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#111111]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#111111]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-[3px] border-[#111111] max-w-3xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_#ffe600] relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-[#111111] text-white hover:bg-[#ff5722] transition-colors border-[2px] border-[#111111] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header Banner */}
          <div className="flex items-start gap-4 border-b-[2.5px] border-[#111111] pb-4">
            <div className="p-3 bg-[#ffe600] border-[2.5px] border-[#111111] shadow-[3px_3px_0px_#111111] shrink-0">
              {renderIcon(project.iconName)}
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-extrabold bg-[#111111] text-[#ffe600] px-2 py-0.5 inline-block mb-1">
                {project.badge}
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#111111]">
                {project.title}
              </h2>
              <div className="text-sm font-['Inter'] text-[#4b4731] font-semibold">
                {project.subtitle}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-['Inter'] text-base text-[#1c1b1b] leading-relaxed">
            {project.description}
          </p>

          {/* Impact Stats */}
          {project.stats && (
            <div>
              <div className="font-mono text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                MEASURED IMPACT BENCHMARKS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#f6f3f2] border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]"
                  >
                    <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#b02f00]">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[11px] uppercase font-bold text-[#4b4731] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curriculum / Modules */}
          {project.curriculum && (
            <div>
              <div className="font-mono text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                CORE CURRICULAR MODULES & FIELDWORK
              </div>
              <div className="space-y-2">
                {project.curriculum.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-white border-[2px] border-[#111111] flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0053db] shrink-0" />
                    <span className="font-['Inter'] text-sm text-[#1c1b1b] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Partner Institution */}
          {project.partnerGovt && (
            <div className="p-3 bg-[#ffe600] border-[2px] border-[#111111] flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#111111] shrink-0" />
              <div className="font-mono text-xs text-[#111111]">
                <strong className="font-extrabold uppercase">Government/Judicial Partner: </strong>
                <span>{project.partnerGovt}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.id === 'fellowship' ? (
              <button
                onClick={() => {
                  onClose();
                  onNavigate('fellowship');
                }}
                className="flex-1 bg-[#ff5722] text-white py-3 px-4 font-mono text-xs uppercase font-extrabold border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#ffe600] hover:text-[#111111] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Complete Fellowship Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onNavigate('contact');
                }}
                className="flex-1 bg-[#ffe600] text-[#111111] py-3 px-4 font-mono text-xs uppercase font-extrabold border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:bg-[#ff5722] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire About {project.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="bg-white text-[#111111] py-3 px-5 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
