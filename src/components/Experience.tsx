import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { workExperiences, achievementsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-[#2C2824] bg-[#121110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F2EC] tracking-tight">
            Work Experience & Hackathons
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Work Experience Timeline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xs font-mono text-[#7D7770] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#F39C7D]" />
              <span>Professional Experience</span>
            </h3>

            {workExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#DDD6CB] rounded-2xl p-6 relative overflow-hidden group hover:border-[#C5BCAB] shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-bold text-[#151311] group-hover:text-[#C2410C] transition-colors">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-800/10 text-emerald-800 border border-emerald-700/30">
                        {exp.current ? 'Current Role' : exp.period}
                      </span>
                    </div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-[#C2410C] hover:text-[#9A3412] mt-0.5"
                    >
                      <span>{exp.company}</span>
                      <span className="text-[#6B655D] text-xs font-normal">({exp.website.replace(/^https?:\/\//, '').replace(/\/$/, '')})</span>
                      <ExternalLink className="w-3 h-3 text-[#C2410C]" />
                    </a>
                  </div>

                  <div className="flex flex-col items-end text-xs font-mono text-[#5C564E]">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#7A746B]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#7A746B] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#7A746B]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-[#2D2824] my-4 pl-4 list-disc marker:text-[#C2410C]">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#DED7CD] flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#E8E2D8] text-[#1F1B18] border border-[#D5CDC1] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Achievements & Competitions Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xs font-mono text-[#7D7770] uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F39C7D]" />
              <span>Competitions & Certifications</span>
            </h3>

            <div className="space-y-4">
              {achievementsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181614] border border-[#2C2824] hover:border-[#38332E] rounded-xl p-4 shadow-xs transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-[#F5F2EC] flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#F39C7D] shrink-0" />
                      {item.title}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#DA7757]/15 text-[#F39C7D] border border-[#DA7757]/30 shrink-0">
                      {item.highlightBadge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#F39C7D] mb-2">{item.context}</div>
                  <p className="text-xs text-[#A39E96] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
