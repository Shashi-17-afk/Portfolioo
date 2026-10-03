import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalDetails } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#F4F0E8] border-t border-[#E8E2D8] text-[#635E59] font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-serif font-bold text-[#211F1C] text-sm">{personalDetails.name}</span>
          <span className="hidden sm:inline text-[#9E978F]">•</span>
          <span className="text-[#635E59]">
            © {new Date().getFullYear()} Shashi Shanthan. Built with React, TypeScript & Tailwind CSS.
          </span>
        </div>

        {/* Links & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#211F1C] transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#211F1C] transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResume}
            className="hover:text-[#C26547] transition-colors flex items-center gap-1 text-[#DA7757] font-semibold cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white border border-[#E8E2D8] hover:border-[#DFD8CC] text-[#211F1C] transition-all ml-2 cursor-pointer shadow-xs"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
