export type ProjectCategory = 'all' | 'ai-edge' | 'fullstack' | 'realtime';

export interface EngineeringDecision {
  decision: string;
  rationale: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: Exclude<ProjectCategory, 'all'>;
  badge: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  architectureComponents?: string[];
  architectureSummary?: string;
  engineeringDecisions: EngineeringDecision[];
  stack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface WorkExperience {
  company: string;
  website: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  date: string;
  description: string;
  highlightBadge: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  notes?: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    note?: string;
  }[];
}
