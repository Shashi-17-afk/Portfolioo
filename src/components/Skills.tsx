import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Cpu, Database, Wrench, Terminal, Bot } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code2 className="w-4 h-4 text-[#F39C7D]" />,
    'Frontend Development': <Terminal className="w-4 h-4 text-emerald-400" />,
    'Backend & Real-Time': <Server className="w-4 h-4 text-indigo-400" />,
    'Cloud, Edge & AI Primitives': <Cloud className="w-4 h-4 text-[#F39C7D]" />,
    'AI Integration & Workflows': <Bot className="w-4 h-4 text-[#F39C7D]" />,
    'Databases & Payment Tools': <Database className="w-4 h-4 text-rose-400" />,
    'Developer Tools': <Wrench className="w-4 h-4 text-[#A39E96]" />,
  };

  return (
    <section id="skills" className="py-20 border-b border-[#2C2824] bg-[#121110]">
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
            Languages, Infrastructure & Tools
          </h2>
        </motion.div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#181614] border border-[#2C2824] rounded-xl p-5 space-y-4 hover:border-[#38332E] shadow-xs transition-all"
            >
              <div className="flex items-center gap-2.5 border-b border-[#2C2824] pb-3">
                {categoryIcons[cat.category] || <Cpu className="w-4 h-4 text-[#F39C7D]" />}
                <h3 className="text-sm font-bold text-[#F5F2EC]">{cat.category}</h3>
              </div>

              <div className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#121110] border border-[#282522] text-xs font-mono"
                  >
                    <span className="text-[#F5F2EC] font-medium">{skill.name}</span>
                    {skill.note && (
                      <span className="text-[11px] text-[#7D7770] font-normal">
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Philosophy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 rounded-xl bg-[#181614] border border-[#2C2824] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#A39E96]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DA7757]"></span>
            <span>Focusing on Edge RAG, WebSockets, & Type-Safe Microservices.</span>
          </div>
          <span className="text-[#7D7770] text-[11px]">No inflated skill percentage bars. Real production code.</span>
        </motion.div>

      </div>
    </section>
  );
};
