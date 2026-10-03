import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowRight, Cpu, Server, Radio, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

  const filterTabs: { label: string; value: ProjectCategory; icon?: React.ReactNode }[] = [
    { label: 'All Work', value: 'all' },
    { label: 'AI & Edge Primitives', value: 'ai-edge', icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: 'Full-Stack Systems', value: 'fullstack', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Real-Time WebSockets', value: 'realtime', icon: <Radio className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-20 border-b border-[#2C2824] bg-[#121110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F2EC] tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-sm text-[#A39E96] max-w-xl">
              Production backends, AI vector search applications, e-commerce payment flows, and real-time game engines built with modern engineering decisions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1C1A18] border border-[#2C2824] rounded-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? 'text-[#F39C7D] font-semibold'
                    : 'text-[#A39E96] hover:text-[#F5F2EC] hover:bg-white/5'
                }`}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-[#DA7757]/20 border border-[#DA7757]/40 rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-[#181614] border rounded-2xl p-6 sm:p-8 transition-all hover:border-[#38332E] ${
                  project.featured
                    ? 'border-[#2C2824] shadow-xl shadow-black/40'
                    : 'border-[#2A2724]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Overview & Description (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#DA7757]/15 text-[#F39C7D] border border-[#DA7757]/30">
                        {project.badge}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Primary Showcase
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#F5F2EC] tracking-tight hover:text-[#F39C7D] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#F39C7D] mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-sm text-[#C4BEB5] leading-relaxed font-normal">
                      {project.overview}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-xs font-mono text-[#7D7770] uppercase tracking-wider">Key Capabilities</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#C4BEB5]">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 bg-[#121110] p-2 rounded-lg border border-[#25221F]">
                            <span className="text-[#DA7757] font-bold">•</span>
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Side: Architecture & Action Callouts (5 cols) */}
                  <div className="lg:col-span-5 bg-[#141211] border border-[#282522] rounded-xl p-5 space-y-5 flex flex-col justify-between">
                    
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-[#A39E96] uppercase tracking-wider flex items-center gap-1.5 border-b border-[#282522] pb-2">
                        <Layers className="w-3.5 h-3.5 text-[#F39C7D]" />
                        <span>Architecture Highlights</span>
                      </div>

                      <div className="space-y-2">
                        {project.engineeringDecisions.slice(0, 2).map((dec, dIdx) => (
                          <div key={dIdx} className="text-xs space-y-0.5">
                            <div className="font-mono text-[#F39C7D] font-semibold">{dec.decision}</div>
                            <div className="text-[#A39E96] text-[11px] leading-tight line-clamp-2">{dec.rationale}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack Pills */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#7D7770]">TECHNOLOGY STACK</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1C1A18] text-[#F5F2EC] border border-[#2C2824]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions — Highlighted Live Demo + Secondary Case Study & GitHub */}
                    <div className="pt-3 border-t border-[#282522] flex flex-wrap items-center justify-between gap-3">
                      {/* HIGHLIGHTED LIVE DEMO BUTTON (Primary CTA) */}
                      {project.liveUrl ? (
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#DA7757] hover:bg-[#C26547] text-white font-mono text-xs font-bold transition-all shadow-lg shadow-[#DA7757]/25 border border-[#DA7757] cursor-pointer"
                          title="Open Live Application"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                        </motion.a>
                      ) : (
                        <div />
                      )}

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1A18] hover:bg-[#272421] text-[#F5F2EC] border border-[#2C2824] text-xs font-mono font-medium transition-all cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>

                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-[#A39E96] hover:text-[#F5F2EC] bg-[#1C1A18] border border-[#2C2824] hover:border-[#383430] transition-all"
                            title="GitHub Repository"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
