import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-[#2C2824] bg-[#121110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F2EC] tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#181614] border border-[#2C2824] rounded-2xl p-6 relative overflow-hidden group hover:border-[#38332E] shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-[#DA7757]/15 border border-[#DA7757]/30 text-[#F39C7D]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#F39C7D] bg-[#121110] px-2.5 py-1 rounded-lg border border-[#282522]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F5F2EC] group-hover:text-[#F39C7D] transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-xs font-mono text-[#F39C7D] mt-1 font-medium">{edu.degree}</p>
                </div>

                {edu.notes && edu.notes.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#2C2824] text-xs text-[#C4BEB5]">
                    {edu.notes.map((note, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F39C7D] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-[#2C2824] flex items-center justify-between text-[11px] font-mono text-[#7D7770]">
                <span>DEGREE PROGRAM</span>
                <span className="text-[#A39E96]">2024 – 2028</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
