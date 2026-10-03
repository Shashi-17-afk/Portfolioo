import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle, Lightbulb, AlertTriangle, ShieldCheck, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#070706]/85 backdrop-blur-md transition-opacity"
            onClick={onClose}
          />

          {/* Modal Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl bg-[#171513] border border-[#2C2824] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col text-[#F5F2EC]"
          >
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#2C2824] bg-[#1C1A18]/90 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-[#DA7757]/15 text-[#F39C7D] border border-[#DA7757]/30 font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-[#635E59]">•</span>
                  <span className="text-[#A39E96] uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2EC] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-[#F39C7D]">{project.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[#A39E96] hover:text-[#F5F2EC] bg-[#23201D] border border-[#332F2A] hover:bg-[#2A2724] transition-all shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#C4BEB5] text-sm leading-relaxed bg-[#141211]">
              
              {/* Highlighted Primary Live Demo Action */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-[#1C1A18] border border-[#2C2824]">
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#DA7757] hover:bg-[#C26547] text-white font-mono text-xs font-bold transition-all shadow-lg shadow-[#DA7757]/25 border border-[#DA7757] cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Open Live Application Demo</span>
                    <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                  </motion.a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#23201D] hover:bg-[#2B2723] text-[#F5F2EC] font-mono text-xs font-semibold border border-[#332F2A] transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>

              {/* Problem Statement & Architecture Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-5 rounded-xl bg-[#181614] border border-[#2C2824]">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>ENGINEERING CHALLENGE</span>
                  </div>
                  <p className="text-xs text-[#C4BEB5] leading-relaxed">{project.problem}</p>
                </div>

                <div className="space-y-2 p-5 rounded-xl bg-[#181614] border border-[#2C2824]">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ARCHITECTURAL SOLUTION</span>
                  </div>
                  <p className="text-xs text-[#C4BEB5] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Engineering Trade-offs / Decisions */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#F5F2EC] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#F39C7D]" />
                  <span>Technical Trade-offs & Implementation Rationale</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {project.engineeringDecisions.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#181614] border border-[#2C2824] space-y-1">
                      <div className="font-mono text-xs text-[#F39C7D] font-semibold">{item.decision}</div>
                      <p className="text-xs text-[#A39E96]">{item.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Matrix */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#F5F2EC] flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#F39C7D]" />
                  <span>Core System Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181614] border border-[#2C2824] text-xs font-mono text-[#F5F2EC]">
                      <CheckCircle className="w-4 h-4 text-[#DA7757] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-4 border-t border-[#2C2824]">
                <div className="text-xs font-mono text-[#7D7770]">COMPLETE STACK & INTEGRATIONS</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#23201D] text-[#F5F2EC] border border-[#332F2A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
