import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalDetails } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#2C2824] bg-[#121110]">
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
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Main Contact Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-[#181614] border border-[#2C2824] rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2EC] tracking-tight">
                Have an opportunity or technical query?
              </h3>
              <p className="text-sm text-[#C4BEB5] leading-relaxed">
                I am open to software engineering internships, full-stack roles, edge AI development, and technical collaboration. Feel free to send an email or reach out via LinkedIn.
              </p>

              {/* Email Copy Card */}
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-[#121110] border border-[#282522] flex items-center justify-between gap-4 font-mono text-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#F39C7D] shrink-0" />
                    <span className="text-[#F5F2EC] truncate">{personalDetails.email}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1C1A18] hover:bg-[#272421] text-xs font-medium text-[#F5F2EC] border border-[#2C2824] transition-all shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A39E96]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Direct Mailto Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#DA7757] hover:bg-[#C26547] text-white font-semibold text-sm transition-all shadow-lg shadow-[#DA7757]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1C1A18] hover:bg-[#272421] text-[#F5F2EC] font-mono text-xs font-semibold border border-[#2C2824] transition-all cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4 text-[#F39C7D]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A39E96]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Contact Information Box (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-[#141211] border border-[#282522] rounded-2xl p-8 space-y-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs font-mono text-[#F39C7D] uppercase tracking-wider mb-4 border-b border-[#282522] pb-2">
                DIRECT CHANNELS
              </h4>

              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[#7D7770] block">Phone Number</span>
                  <a href={`tel:${personalDetails.phone}`} className="text-[#F5F2EC] hover:text-[#F39C7D] font-semibold text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#F39C7D]" />
                    {personalDetails.phone}
                  </a>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#282522]">
                  <span className="text-[#7D7770] block">Location</span>
                  <div className="text-[#F5F2EC] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F39C7D]" />
                    {personalDetails.location}
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#282522]">
                  <span className="text-[#7D7770] block">GitHub Profile</span>
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F39C7D] hover:text-white font-semibold flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    github.com/Shashi-17-afk
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#1C1A18] border border-[#2C2824] text-[11px] font-mono text-[#A39E96] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for engineering discussions.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
