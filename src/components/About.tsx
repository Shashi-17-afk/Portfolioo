import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-[#2C2824] bg-[#121110]">
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
            Engineering Background & Mindset
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-[#C4BEB5] leading-relaxed text-base"
          >
            <p>
              I am a Full-Stack Engineer pursuing a Bachelor's in Computer Science & Data Analytics at <strong className="text-[#F5F2EC]">IIT Patna</strong> and a 4-year CS & AI program at <strong className="text-[#F5F2EC]">PW Institute of Innovation</strong>.
            </p>
            <p>
              Currently, I am the <strong className="text-[#F5F2EC] font-semibold">Co-Founder of GoAutomate</strong>, building custom AI agents and full-stack n8n automation systems for businesses, and work as a <strong className="text-[#F5F2EC] font-semibold">Full Stack Engineer Intern at ULICA</strong>, developing e-commerce storefront interfaces, maintaining Node.js REST APIs, and automating operational workflows.
            </p>
            <p>
              My engineering focus centers on <span className="text-[#F39C7D] font-mono text-sm font-semibold">Edge AI Infrastructure</span>, <span className="text-[#F39C7D] font-mono text-sm font-semibold">Vector Search Systems</span>, and <span className="text-[#F39C7D] font-mono text-sm font-semibold">Real-Time Web Applications</span>. I built <strong className="text-[#F5F2EC]">HireSight</strong> — an AI hiring platform solo on 5 Cloudflare primitives — and <strong className="text-[#F5F2EC] font-semibold">TechVault</strong>, a full-stack e-commerce system with Razorpay signature verification and webhook receivers.
            </p>
            <p>
              I pair strong algorithmic foundations (200+ DSA problems solved) with an AI-accelerated engineering workflow (Cursor + Claude) to iterate fast from system design to deployed production backends.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#F5F2EC]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181614] border border-[#2C2824]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Stack & Edge Architectures</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181614] border border-[#2C2824]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vector Embeddings & RAG</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181614] border border-[#2C2824]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time WebSockets (Socket.IO)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181614] border border-[#2C2824]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Payment Gateways & Webhooks</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Technical Overview Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-[#181614] border border-[#2C2824] rounded-2xl p-6 space-y-6 shadow-xs"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2824]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F39C7D]">
                <Terminal className="w-4 h-4" />
                <span>PROFILE_METRICS</span>
              </div>
              <span className="text-[11px] font-mono text-[#7D7770]">BENGALURU, IN</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#7D7770] block mb-1">Current Position</span>
                <div className="text-[#F5F2EC] font-semibold text-sm">Co-Founder @ GoAutomate</div>
                <div className="text-[#A39E96] text-[11px] mt-0.5">Full Stack Engineer Intern @ ULICA</div>
              </div>

              <div>
                <span className="text-[#7D7770] block mb-1">Academic Background</span>
                <div className="text-[#F5F2EC] font-medium">IIT Patna — BS Computer Science & Data Analytics</div>
                <div className="text-[#A39E96] text-[11px]">PW Institute of Innovation — CS & AI</div>
              </div>

              <div>
                <span className="text-[#7D7770] block mb-1">Primary Development Environment</span>
                <div className="text-[#C4BEB5]">VS Code · Wrangler CLI · Cursor · Claude</div>
              </div>

              <div>
                <span className="text-[#7D7770] block mb-1">Hackathons & Honors</span>
                <div className="text-[#F39C7D] font-semibold">1st Rank Bug Hunt AZURA 2k25</div>
                <div className="text-emerald-400 font-semibold">Cloudflare IRL Bengaluru Rep (IIT Patna)</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
