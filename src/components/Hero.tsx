import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Zap, Award, Download } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalDetails } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#2A2724] overflow-hidden bg-[#121110]">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Warm Ambient Terracotta Radial Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-[#DA7757]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-6"
        >
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1A18] border border-[#2A2724] text-xs font-mono text-[#F5F2EC] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">Full Stack Intern @ ULICA</span>
            <span className="text-[#635E59]">•</span>
            <span className="text-[#F39C7D] font-semibold">IIT Patna '28</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F2EC] leading-[1.08]">
              Shashi Shanthan
            </h1>
            <h2 className="text-xl sm:text-2xl font-mono font-medium text-[#F39C7D] tracking-tight">
              Full-Stack & Edge AI Engineer
            </h2>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg text-[#C4BEB5] leading-relaxed font-normal"
          >
            Full-stack developer focused on building and shipping AI-integrated web applications end-to-end — from rapid prototyping to edge-deployed backends. Comfortable across React, Node.js, and Cloudflare serverless primitives (Workers AI, Vectorize, D1, Durable Objects).
          </motion.p>

          {/* Technical Metadata Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-[#A39E96]"
          >
            <span className="text-[#635E59]">Core Stack:</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC]">React.js</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC]">Node.js</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#DA7757]/40 text-[#F39C7D] font-semibold">Cloudflare Workers</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#DA7757]/40 text-[#F39C7D] font-semibold">Workers AI & Vectorize</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC]">Socket.IO</span>
            <span className="px-2.5 py-1 rounded bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC]">MongoDB</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-3 flex flex-wrap items-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#DA7757] hover:bg-[#C26547] text-white font-semibold text-sm transition-all shadow-md shadow-[#DA7757]/20 cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Shashi_Shanthan_Resume.pdf"
              download="Shashi_Shanthan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC] font-mono text-sm font-medium hover:bg-[#272421] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#F39C7D]" />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1A18] border border-[#2A2724] text-[#F5F2EC] font-medium text-sm hover:bg-[#272421] transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* Verified Achievements Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-8 border-t border-[#2A2724] grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1A18]/80 border border-[#2A2724] hover:border-[#383430] transition-all">
              <Award className="w-5 h-5 text-[#F39C7D] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono font-semibold text-[#F39C7D]">1st Place Winner</div>
                <div className="text-xs text-[#A39E96]">Bug Hunt @ AZURA 2k25 National Tech Symposium</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1A18]/80 border border-[#2A2724] hover:border-[#383430] transition-all">
              <Zap className="w-5 h-5 text-[#F39C7D] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono font-semibold text-[#F39C7D]">Cloudflare Hackathon</div>
                <div className="text-xs text-[#A39E96]">Represented IIT Patna at Bengaluru IRL Demo</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1A18]/80 border border-[#2A2724] hover:border-[#383430] transition-all">
              <Cpu className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono font-semibold text-emerald-300">200+ DSA Solved</div>
                <div className="text-xs text-[#A39E96]">LeetCode & GFG Data Structures Foundations</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
