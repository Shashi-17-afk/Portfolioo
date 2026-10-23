import type { Project, WorkExperience, Achievement, Education, SkillCategory } from '../types/portfolio';

export const personalDetails = {
  name: 'Shashi Shanthan',
  title: 'Full-Stack & Edge AI Engineer',
  location: 'Bengaluru, India',
  email: 'shashishanthan2706@gmail.com',
  phone: '+91 6304380138',
  github: 'https://github.com/Shashi-17-afk',
  linkedin: 'https://linkedin.com/in/shashi-shanthan-6628a9412/',
  currentStatus: 'Co-Founder @ GoAutomate | Full Stack Intern @ ULICA',
  summary: `Full-stack developer focused on building and shipping AI-integrated web applications end-to-end — from rapid prototyping to deployed backend. Comfortable working across React, Node.js, and edge/cloud infrastructure, with growing depth in applying LLMs and vector search inside production tools. Pairs strong CS fundamentals with an AI-accelerated workflow (Cursor + Claude) to move from idea to deployed product fast, without skipping on code quality or system design.`
};

export const projectsData: Project[] = [
  {
    id: 'hiresight',
    title: 'HireSight',
    subtitle: 'Edge AI Resume Screener & Real-Time Ranking System',
    tagline: 'Full-stack AI hiring screener built on Cloudflare edge primitives with vector search and live leaderboard synchronization.',
    category: 'ai-edge',
    badge: 'Featured AI Architecture',
    featured: true,
    overview: 'Built and deployed a full-stack AI hiring screener solo, from zero to a live product. Recruiters input job descriptions, candidates upload resumes, and the tool evaluates each candidate on a 0–100 scale with a clear, generated reasoning breakdown, updating live as new applicants apply.',
    problem: 'Traditional HR resume screening is slow, manual, and relies on simple keyword matching that fails to understand context or technical depth across varying resume formats.',
    solution: 'Engineered an end-to-end serverless system using 5 Cloudflare edge primitives. Resumes are converted into vector embeddings, matched semantically against JD vectors using Vectorize, scored by Workers AI (Llama 3.1 8B), and stored in D1, while real-time leaderboards update via Durable Objects.',
    architectureComponents: [
      'Cloudflare Workers — Routing, API orchestration, & serverless edge logic',
      'Workers AI (Llama 3.1 8B) — Automated candidate scoring & reasoned feedback generation',
      'Vectorize + bge-base-en-v1.5 — Semantic resume-to-JD vector embedding & similarity matching',
      'Cloudflare D1 — High-performance relational SQL storage at the edge',
      'Durable Objects — Stateful, low-latency WebSocket connection & live leaderboard updates'
    ],
    architectureSummary: 'A unified single-vendor edge architecture eliminating traditional server bottlenecks, achieving sub-second vector matching and real-time updates directly from edge nodes worldwide.',
    engineeringDecisions: [
      {
        decision: 'Used Cloudflare Workers as Edge Runtime',
        rationale: 'Kept API handling and vector computation adjacent to users worldwide, avoiding cold starts and traditional server overhead.'
      },
      {
        decision: 'Leveraged Vectorize + bge-base-en-v1.5 Embeddings',
        rationale: 'Replaced brittle keyword searches with semantic vector search to compare candidate experience against job requirements accurately.'
      },
      {
        decision: 'Stateful Real-Time Sync with Durable Objects',
        rationale: 'Provided instantaneous leaderboard state propagation without polling external databases or running separate WebSocket server fleets.'
      }
    ],
    stack: ['Cloudflare Workers', 'Workers AI (Llama 3.1)', 'Vectorize', 'Cloudflare D1', 'Durable Objects', 'React', 'TypeScript'],
    highlights: [
      'Integrated 5 Cloudflare edge primitives in a single production architecture',
      'Scores candidates 0–100 with LLM-backed qualitative feedback',
      'Live updating leaderboard driven by Durable Objects WebSocket sync',
      'Rebuilding toward a production two-sided HR & candidate platform'
    ],
    githubUrl: 'https://github.com/Shashi-17-afk/HireSight',
    liveUrl: 'https://hiresight.shashishanthan2706.workers.dev/'
  },
  {
    id: 'techvault',
    title: 'TechVault',
    subtitle: 'Full-Stack E-Commerce Platform with Webhooks & Razorpay Integration',
    tagline: 'Production-grade e-commerce storefront for tech gadgets with HMAC payment verification and async order lifecycle handling.',
    category: 'fullstack',
    badge: 'Full-Stack E-Commerce',
    featured: true,
    overview: 'TechVault is a full-stack e-commerce web application for selling tech gadgets — including laptops, smartphones, wearables, and audio gear. Features persistent shopping carts, user authentication, a REST API-driven product catalog, and end-to-end Razorpay checkout.',
    problem: 'Unreliable checkout flows in custom e-commerce apps often lead to unverified orders, race conditions, or dropped payment state updates.',
    solution: 'Architected a secure payment flow utilizing Razorpay Orders API, frontend checkout integration, and server-side HMAC signature verification alongside a webhook listener that guarantees atomic order state synchronization in MongoDB.',
    architectureComponents: [
      'React.js Frontend — State-managed UI with optimized re-render prevention',
      'Node.js & Express API — REST endpoints for authentication, cart, & catalog',
      'Razorpay Orders API — Order token creation & secure checkout interface',
      'MongoDB — Persistent document storage for products, users, & orders',
      'Webhook Receiver — Async handling for payment success, failure, & refund events'
    ],
    architectureSummary: 'Decoupled REST API backend paired with a resilient webhook listener to ensure strict financial auditability and accurate MongoDB order state sync.',
    engineeringDecisions: [
      {
        decision: 'HMAC Signature Verification on Backend',
        rationale: 'Prevented spoofed checkout responses by verifying Razorpay cryptographic payment signatures before updating order status.'
      },
      {
        decision: 'Asynchronous Webhook Event Receiver',
        rationale: 'Handled edge cases like user tab closure during payment by capturing server-to-server Razorpay webhooks for success/refunds.'
      },
      {
        decision: 'API-Driven UI State Optimization',
        rationale: 'Optimized React cart and product listing components to eliminate redundant network requests and improve perceived load performance.'
      }
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay API', 'REST APIs', 'Tailwind CSS'],
    highlights: [
      'End-to-end Razorpay integration with Orders API & signature verification',
      'Asynchronous payment event Webhook endpoint for order state sync',
      'Persistent cart state and JWT user authentication',
      'Optimized API-driven UI rendering for fluid user experience'
    ],
    githubUrl: 'https://github.com/Shashi-17-afk/TechVault',
    liveUrl: 'https://techvault-chi.vercel.app/'
  },
  {
    id: 'uno-multiplayer',
    title: 'UNO Multiplayer',
    subtitle: 'Real-Time 4-Player Card Game Engine',
    tagline: 'Low-latency multiplayer card game frontend built with Socket.IO state synchronization and session disconnect recovery.',
    category: 'realtime',
    badge: 'Real-Time WebSockets',
    featured: true,
    overview: 'Built the client interface and state management for a real-time 4-player UNO card game. Consumes live Socket.IO events to synchronize turn transitions, deck draws, card plays, and lobby room states across all connected players.',
    problem: 'Real-time card games face challenges with state desynchronization, turn lag, and abrupt session failures when players disconnect mid-match.',
    solution: 'Designed a resilient event-driven client architecture using Socket.IO that updates UI state in lockstep with the game server while implementing client-side state recovery for rejoining players.',
    architectureComponents: [
      'React UI Engine — Dynamic turn rendering & player card hand management',
      'Socket.IO Client — Bi-directional event communication & state listener',
      'Room-Based Lobby System — Matchmaking room management & lobby state',
      'Disconnect Recovery Handler — Session state restoration on network drop'
    ],
    architectureSummary: 'An event-driven frontend synchronized via Socket.IO events, delivering instant feedback and turn state clarity across 4 concurrent clients.',
    engineeringDecisions: [
      {
        decision: 'Event-Driven Socket.IO State Sync',
        rationale: 'Eliminated HTTP polling in favor of bi-directional WebSockets, keeping turn indicators and card stacks updated with minimal lag.'
      },
      {
        decision: 'Disconnect & Reconnect Session Guard',
        rationale: 'Handled edge cases around temporary player disconnections, restoring player state and turn indicators without breaking active sessions.'
      },
      {
        decision: 'Client-Side Action Validation',
        rationale: 'Enforced initial game rule checks on the frontend to provide immediate visual feedback before server payload confirmation.'
      }
    ],
    stack: ['JavaScript ES6+', 'React', 'Socket.IO', 'Node.js', 'Real-Time Systems', 'Tailwind CSS'],
    highlights: [
      'Supports 4 concurrent players in synchronized room-based lobbies',
      'Real-time turn indicators and action state feedback via WebSockets',
      'Handles player disconnects/reconnects with UI state restoration',
      'Optimized event handling to minimize client-side rendering lag'
    ],
    githubUrl: 'https://github.com/Shashi-17-afk/UNO_GAME',
    liveUrl: 'https://uno-multiplayer-lbt9.onrender.com/'
  }
];

export const workExperiences: WorkExperience[] = [
  {
    company: 'GoAutomate',
    website: 'https://www.goautomate.studio',
    role: 'Co-Founder',
    location: 'Bengaluru, India',
    period: 'Dec 2025 – Present',
    current: true,
    description: [
      'Co-founded an AI automation agency delivering custom full-stack automation systems, intelligent voice & chat agents, and workflow integrations for startups and SaaS businesses.',
      'Architect production-grade custom n8n workflows, Vapi conversational voice agents, and Twilio SMS bots powered by OpenAI models.',
      'Engineer custom Next.js dashboards for monitoring and orchestration alongside resilient API integrations with Stripe, HubSpot, Slack, and WhatsApp.',
      'Drive client strategy and technical implementation to automate manual operations end-to-end with high-availability, scalable systems.'
    ],
    technologies: ['n8n', 'Next.js', 'AI Agents', 'OpenAI', 'Vapi', 'Twilio', 'REST APIs', 'Node.js']
  },
  {
    company: 'ULICA',
    website: 'https://ulica.in',
    role: 'Full Stack Engineer Intern',
    location: 'Bengaluru, India',
    period: 'Aug 2026 – Present',
    current: true,
    description: [
      'Build responsive frontend storefront interfaces and maintain Node.js REST API endpoints connected to product databases for ULICA.',
      'Integrate AI-powered solutions to automate repetitive workflows and improve development and business processes.',
      'Maintain UI/UX component consistency across mobile and desktop viewports.',
      'Debug, test, and ship production code via Git and GitHub under code review from senior engineers.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'AI Automation', 'Git', 'GitHub']
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'bug-hunt-1st',
    title: '1st Place — Bug Hunt Champion',
    context: 'AZURA 2k25 National Technical Symposium',
    date: '2025',
    description: 'Secured 1st rank out of 150+ participants across India by identifying, reproducing, and patching critical bugs under timed competition conditions.',
    highlightBadge: '1st Rank National'
  },
  {
    id: 'cloudflare-irl',
    title: 'Cloudflare IRL Bengaluru Hackathon',
    context: 'Represented IIT Patna (Jun 2026)',
    date: 'Jun 2026',
    description: 'Selected to represent IIT Patna in Bengaluru, building and demoing a live AI application engineered using Cloudflare Workers, Vectorize, and Workers AI.',
    highlightBadge: 'IIT Patna Representative'
  },
  {
    id: 'dsa-200',
    title: '200+ DSA Problems Solved',
    context: 'LeetCode & GeeksforGeeks',
    date: 'Ongoing',
    description: 'Demonstrated strong algorithmic foundations by solving 200+ data structure and algorithm challenges spanning arrays, trees, graphs, and dynamic programming.',
    highlightBadge: 'Data Structures & Algorithms'
  },
  {
    id: 'namaste-react',
    title: 'Namaste Dev React Certification',
    context: 'NamasteDev Course Completion',
    date: '2025',
    description: 'Mastered advanced React concepts including custom hooks, reconciliation, memoization, performance profiling, and production design patterns.',
    highlightBadge: 'Advanced React'
  }
];

export const educationData: Education[] = [
  {
    institution: 'Indian Institute of Technology, Patna',
    degree: 'Bachelors in Computer Science and Data Analytics',
    period: '2024 – 2028',
    notes: [
      'Core focus on Computer Science fundamentals, Algorithms, Data Analytics, and Systems Engineering.',
      'Represented institution at regional AI & Cloud hackathons.'
    ]
  },
  {
    institution: 'PW Institute of Innovation',
    degree: '4-Year Program in Computer Science & Artificial Intelligence',
    period: '2024 – 2028',
    notes: [
      'Intensive practical program covering Full-Stack Web Architecture, Distributed Systems, and AI Integration.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', note: 'Core Language' },
      { name: 'TypeScript', note: 'Strict Type System' },
      { name: 'Python', note: 'Data & Scripting' },
      { name: 'Java', note: 'OOP Fundamentals' }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', note: 'Primary Framework' },
      { name: 'React Hooks', note: 'State & Custom Hooks' },
      { name: 'Tailwind CSS', note: 'Utility Design System' },
      { name: 'HTML5 / CSS3', note: 'Semantic Web' },
      { name: 'Responsive Design', note: 'Mobile-First UIs' }
    ]
  },
  {
    category: 'Backend & Real-Time',
    skills: [
      { name: 'Node.js', note: 'Runtime Server Environment' },
      { name: 'Express.js', note: 'RESTful Routing' },
      { name: 'Socket.IO', note: 'WebSocket Real-Time Events' },
      { name: 'REST API Architecture', note: 'API Design & Integration' }
    ]
  },
  {
    category: 'Cloud, Edge & AI Primitives',
    skills: [
      { name: 'Cloudflare Workers', note: 'Edge Serverless Execution' },
      { name: 'Workers AI (Llama 3.1)', note: 'On-Edge Inference' },
      { name: 'Vectorize', note: 'Vector Embeddings & Search' },
      { name: 'Cloudflare D1', note: 'Edge SQL Database' },
      { name: 'Durable Objects', note: 'Stateful Edge Storage' },
      { name: 'Vercel', note: 'Continuous Deployment' }
    ]
  },
  {
    category: 'AI Integration & Workflows',
    skills: [
      { name: 'Vector Embeddings (bge-base)', note: 'Semantic Matching' },
      { name: 'RAG Architecture', note: 'Retrieval Augmented Generation' },
      { name: 'Prompt Engineering', note: 'Structured Output Prompts' },
      { name: 'AI Agents & Voice', note: 'Vapi, Twilio & OpenAI' },
      { name: 'Workflow Automation', note: 'n8n & Custom Integrations' },
      { name: 'Cursor + Claude', note: 'AI-Accelerated Dev Flow' }
    ]
  },
  {
    category: 'Databases & Payment Tools',
    skills: [
      { name: 'MongoDB', note: 'NoSQL Document Store' },
      { name: 'Cloudflare D1', note: 'SQL Edge Storage' },
      { name: 'MySQL', note: 'Relational Database' },
      { name: 'Supabase', note: 'PostgreSQL Platform' },
      { name: 'Razorpay API', note: 'Payments & Webhooks' }
    ]
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', note: 'Version Control & Reviews' },
      { name: 'VS Code', note: 'Primary IDE' },
      { name: 'Wrangler CLI', note: 'Cloudflare Deployments' }
    ]
  }
];
