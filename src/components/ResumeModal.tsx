import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { personalDetails, workExperiences, educationData, achievementsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0908]/80 backdrop-blur-md transition-opacity"
            onClick={onClose}
          />

          {/* Modal Dialog Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl bg-[#1C1A18] border border-[#2A2724] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col text-[#F5F2EC]"
          >
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#2A2724] bg-[#161513]/90 flex items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#DA7757]/10 border border-[#DA7757]/20 text-[#F39C7D]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F2EC] tracking-tight">
                    Shashi Shanthan — Resume
                  </h3>
                  <p className="text-xs font-mono text-[#A39E96]">Official Curriculum Vitae</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Shashi_Shanthan_Resume.pdf"
                  download="Shashi_Shanthan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#DA7757] hover:bg-[#C26547] text-white font-mono text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-[#A39E96] hover:text-[#F5F2EC] bg-[#211F1D] border border-[#2A2724] hover:bg-[#272421] transition-all cursor-pointer"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Paper Styled View */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#161513] text-[#C4BEB5] text-xs leading-relaxed font-sans">
              
              {/* Header Info */}
              <div className="border-b border-[#2A2724] pb-6 space-y-2">
                <h1 className="text-3xl font-bold text-[#F5F2EC]">{personalDetails.name}</h1>
                <div className="text-sm font-mono text-[#F39C7D] font-semibold">{personalDetails.title}</div>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A39E96] pt-1">
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#F39C7D]" />{personalDetails.email}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#F39C7D]" />{personalDetails.phone}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#F39C7D]" />{personalDetails.location}</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <span>SUMMARY</span>
                </h2>
                <p className="text-[#F5F2EC] text-xs leading-relaxed">
                  {personalDetails.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>TECHNICAL SKILLS</span>
                </h2>
                <div className="space-y-1 font-mono text-[11px]">
                  <div><strong className="text-[#F5F2EC]">Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java</div>
                  <div><strong className="text-[#F5F2EC]">Frontend:</strong> React.js, React Hooks, Tailwind CSS, HTML5, CSS3, Responsive Design</div>
                  <div><strong className="text-[#F5F2EC]">Backend & Real-Time:</strong> Node.js, Express.js, REST API Development, WebSockets (Socket.IO)</div>
                  <div><strong className="text-[#F5F2EC]">Cloud & Edge:</strong> Cloudflare Workers, Workers AI, Vectorize, D1, Durable Objects, Vercel</div>
                  <div><strong className="text-[#F5F2EC]">AI Integration:</strong> LLM Integration, Prompt Engineering, RAG, Vector Embeddings, Cursor + Claude</div>
                  <div><strong className="text-[#F5F2EC]">Databases:</strong> MongoDB, MySQL, Cloudflare D1, Supabase</div>
                  <div><strong className="text-[#F5F2EC]">Tools:</strong> Git, GitHub, VS Code, Wrangler CLI, Razorpay Integration</div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>EXPERIENCE</span>
                </h2>
                {workExperiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-[#F5F2EC] text-sm">
                      <span>{exp.role} — <span className="text-[#F39C7D]">{exp.company}</span></span>
                      <span className="font-mono text-xs text-[#A39E96]">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-[#C4BEB5]">
                      {exp.description.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>KEY PROJECTS</span>
                </h2>

                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-[#F5F2EC] text-xs">
                      HireSight <span className="font-mono text-[11px] text-[#F39C7D] font-normal">| Cloudflare Workers · Workers AI · Vectorize · D1 · Durable Objects · React</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-[#C4BEB5] text-[11px] mt-1">
                      <li>Built and deployed a full-stack AI hiring screener solo, from zero to a live product.</li>
                      <li>HR pastes job description, candidates upload resumes, scores 0–100 with reason — leaderboard updates live as new applicants come in.</li>
                      <li>Integrated 5 Cloudflare primitives: Workers (routing/API), Workers AI (Llama 3.1 8B), Vectorize + bge-base-en-v1.5 (resume–JD matching), D1 (persistence), Durable Objects (real-time leaderboard).</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#F5F2EC] text-xs">
                      TechVault <span className="font-mono text-[11px] text-[#F39C7D] font-normal">| React.js · Node.js · MongoDB · REST APIs · Razorpay</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-[#C4BEB5] text-[11px] mt-1">
                      <li>Full-stack e-commerce site for tech gadgets with persistent cart state, user auth, and REST API product catalog.</li>
                      <li>Implemented Razorpay payment integration — order creation via Orders API, checkout flow, and HMAC backend signature verification.</li>
                      <li>Built webhook endpoint handling asynchronous payment events (success, failure, refund) and syncing order status in MongoDB.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#F5F2EC] text-xs">
                      UNO Multiplayer Card Game <span className="font-mono text-[11px] text-[#F39C7D] font-normal">| JavaScript ES6+ · Socket.IO · React · Real-Time Systems</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-[#C4BEB5] text-[11px] mt-1">
                      <li>Frontend for real-time 4-player card game, consuming Socket.IO events to keep UI synchronized across clients.</li>
                      <li>Real-time turn indicators, player action states, and disconnect/reconnect UI recovery.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>EDUCATION</span>
                </h2>
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div>
                      <strong className="text-[#F5F2EC]">{edu.institution}</strong> — {edu.degree}
                    </div>
                    <span className="font-mono text-[#A39E96] text-[11px]">{edu.period}</span>
                  </div>
                ))}
              </div>

              {/* Achievements & Certifications */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#F39C7D] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#2A2724] pb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>ACHIEVEMENTS & CERTIFICATIONS</span>
                </h2>
                <ul className="list-disc pl-4 space-y-1 text-[#C4BEB5] text-xs">
                  {achievementsData.map((ach) => (
                    <li key={ach.id}>
                      <strong className="text-[#F5F2EC]">{ach.title}:</strong> {ach.description}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#2A2724] bg-[#161513] flex items-center justify-between font-mono text-xs text-[#A39E96]">
              <span>Curriculum Vitae View</span>
              <a
                href="/Shashi_Shanthan_Resume.pdf"
                download="Shashi_Shanthan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F39C7D] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF Copy
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
