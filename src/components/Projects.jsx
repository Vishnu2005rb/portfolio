import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Send, Award, ExternalLink } from "lucide-react";

// Custom SVG Icons for GitHub and LinkedIn matching the style of Contact.jsx
const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Automated Resume Shortlisting System",
      description: "Built an AI-powered recruitment automation system using AI agents and workflow automation for candidate evaluation, resume analysis, and automated shortlisting.",
      tags: ["Python", "n8n", "Gemini AI", "AI Agents", "Gmail API", "Google Drive"],
      svgType: "resume",
      gitLink: "https://github.com/Vishnu2005rb/RESUME_SHORTLISTING_SYSTEM",
      linkedInLink: "https://www.linkedin.com/posts/vishnurb18062005_ai-automation-n8n-activity-7394250179203215360--pRD?utm_source=share&utm_medium=member_android&rcm=ACoAAExZWJcBYvRb2bfHY1wXv3QcoZCB6_QSMrk"
    },
    {
      title: "Agentic RAG-Based Study Assistant",
      description: "Developed a context-aware RAG-based study assistant with retrieval, planner, and tutor AI agents for DevOps and MLOps learning support.",
      tags: ["RAG", "LangChain", "NLP", "AI Agents", "LLMs"],
      svgType: "rag",
      gitLink: "https://github.com/Vishnu2005rb/RAG-PROJECT"
    },
    {
      title: "AI-Based Investment Generator using ML [LR]",
      description: "Developed a machine learning-based investment recommendation system using Logistic Regression to generate personalized investment suggestions based on user financial profiles.",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Logistic Regression", "Evaluation Metrics"],
      svgType: "investment",
      gitLink: "https://drive.google.com/drive/folders/1AEaY1Jw6xSZvxnGS30a0D76dkexppaCp"
    },
    {
      title: "Multi-AI Agent Telegram Workflow Assistant",
      description: "Built a multi-agent Telegram assistant for conversational AI, contextual memory, scheduling, task management, and productivity automation.",
      tags: ["Telegram API", "n8n", "Todoist API", "Google Calendar", "Automation"],
      svgType: "telegram",
      gitLink: "https://github.com/Vishnu2005rb/MULTI_AGENT",
      linkedInLink: "https://www.linkedin.com/posts/vishnurb18062005_ai-automation-n8n-activity-7383730931397906432-33Dj?utm_source=share&utm_medium=member_android&rcm=ACoAAExZWJcBYvRb2bfHY1wXv3QcoZCB6_QSMrk"
    },
    {
      title: "Event Management Automation System",
      description: "Developed an event automation platform with certificate generation, review validation, participant management, and workflow automation.",
      tags: ["Workflow Automation", "APIs", "AI", "Certificate System"],
      svgType: "event",
      gitLink: "https://github.com/Vishnu2005rb"
    }
  ];


  // Renders the sleek minimal black/neon SVG representations of the architectures
  const renderProjectSVG = (type) => {
    switch (type) {
      case "resume":
        return (
          <svg className="w-full h-40 bg-black" viewBox="0 0 400 160">
            {/* Grid background */}
            <defs>
              <pattern id="svg-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svg-grid)" />
            
            {/* Scanned Resume Node */}
            <rect x="20" y="55" width="90" height="40" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="65" y="80" fill="#00f0ff" fontSize="9" fontFamily="monospace" textAnchor="middle">RESUME_IN</text>
            
            {/* Parsing/scoring Node */}
            <rect x="150" y="55" width="100" height="40" rx="3" fill="#030308" stroke="#bd00ff" strokeWidth="1" />
            <text x="200" y="80" fill="#bd00ff" fontSize="9" fontFamily="monospace" textAnchor="middle">GEMINI_AI_PARSER</text>
            
            {/* Shortlisted Output Node */}
            <rect x="290" y="55" width="90" height="40" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="335" y="80" fill="#00ff66" fontSize="9" fontFamily="monospace" textAnchor="middle">SHORTLIST_OUT</text>

            {/* Connecting vectors */}
            <path d="M 110 75 L 150 75" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 250 75 L 290 75" fill="none" stroke="#bd00ff" strokeWidth="1" strokeDasharray="4 4" />

            {/* Neural network lines behind */}
            <circle cx="200" cy="30" r="1.5" fill="#bd00ff" />
            <circle cx="210" cy="120" r="1.5" fill="#00f0ff" />
            <line x1="200" y1="30" x2="200" y2="55" stroke="rgba(189,0,255,0.2)" strokeWidth="0.5" />
            <line x1="210" y1="120" x2="210" y2="95" stroke="rgba(0,240,255,0.2)" strokeWidth="0.5" />
          </svg>
        );
      case "rag":
        return (
          <svg className="w-full h-40 bg-black" viewBox="0 0 400 160">
            <rect width="100%" height="100%" fill="url(#svg-grid)" />
            {/* Input doc */}
            <rect x="20" y="30" width="70" height="30" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="55" y="48" fill="#00f0ff" fontSize="8" fontFamily="monospace" textAnchor="middle">DOCS_STORE</text>

            {/* Embedding node */}
            <rect x="110" y="30" width="80" height="30" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="150" y="48" fill="#00f0ff" fontSize="8" fontFamily="monospace" textAnchor="middle">EMBEDDING</text>

            {/* Vector DB */}
            <rect x="210" y="30" width="80" height="30" rx="3" fill="#030308" stroke="#bd00ff" strokeWidth="1" />
            <text x="250" y="48" fill="#bd00ff" fontSize="8" fontFamily="monospace" textAnchor="middle">VECTOR_STORE</text>

            {/* RAG Core node */}
            <rect x="115" y="100" width="170" height="35" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="200" y="122" fill="#00ff66" fontSize="9" fontFamily="monospace" textAnchor="middle">AGENTIC_RETRIEVER_LLM</text>

            {/* Flow Paths */}
            <path d="M 90 45 L 110 45" fill="none" stroke="#00f0ff" strokeWidth="1" />
            <path d="M 190 45 L 210 45" fill="none" stroke="#00f0ff" strokeWidth="1" />
            
            {/* Query flow down */}
            <path d="M 250 60 L 250 100" fill="none" stroke="#bd00ff" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 55 60 L 55 115 L 115 115" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        );
      case "telegram":
        return (
          <svg className="w-full h-40 bg-black" viewBox="0 0 400 160">
            <rect width="100%" height="100%" fill="url(#svg-grid)" />
            {/* Telegram client mock */}
            <rect x="20" y="60" width="80" height="40" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="60" y="85" fill="#00f0ff" fontSize="9" fontFamily="monospace" textAnchor="middle">TELEGRAM_UI</text>

            {/* n8n backend router */}
            <rect x="150" y="40" width="100" height="80" rx="3" fill="#030308" stroke="#bd00ff" strokeWidth="1" />
            <text x="200" y="75" fill="#bd00ff" fontSize="9" fontFamily="monospace" textAnchor="middle">N8N_AUTOMATION</text>
            <text x="200" y="90" fill="#a855f7" fontSize="7" fontFamily="monospace" textAnchor="middle">MULTIPLE_AGENTS</text>

            {/* External APIs integration */}
            <rect x="300" y="30" width="80" height="25" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="340" y="46" fill="#00ff66" fontSize="8" fontFamily="monospace" textAnchor="middle">TODOIST_API</text>

            <rect x="300" y="70" width="80" height="25" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="340" y="86" fill="#00ff66" fontSize="8" fontFamily="monospace" textAnchor="middle">CALENDAR_API</text>

            <rect x="300" y="110" width="80" height="25" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="340" y="126" fill="#00ff66" fontSize="8" fontFamily="monospace" textAnchor="middle">MEMORY_SQL</text>

            {/* Flow paths */}
            <path d="M 100 80 L 150 80" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 250 60 L 300 42" fill="none" stroke="#bd00ff" strokeWidth="1" />
            <path d="M 250 80 L 300 82" fill="none" stroke="#bd00ff" strokeWidth="1" />
            <path d="M 250 100 L 300 122" fill="none" stroke="#bd00ff" strokeWidth="1" />
          </svg>
        );
      case "event":
        return (
          <svg className="w-full h-40 bg-black" viewBox="0 0 400 160">
            <rect width="100%" height="100%" fill="url(#svg-grid)" />
            {/* Event Register node */}
            <rect x="25" y="60" width="80" height="40" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="65" y="84" fill="#00f0ff" fontSize="9" fontFamily="monospace" textAnchor="middle">PARTICIPANT</text>

            {/* Validation gate */}
            <rect x="150" y="60" width="100" height="40" rx="3" fill="#030308" stroke="#bd00ff" strokeWidth="1" />
            <text x="200" y="84" fill="#bd00ff" fontSize="9" fontFamily="monospace" textAnchor="middle">REVIEW_VALIDATOR</text>

            {/* PDF generator Badging */}
            <rect x="295" y="60" width="80" height="40" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="335" y="84" fill="#00ff66" fontSize="9" fontFamily="monospace" textAnchor="middle">CERT_AUTO_PDF</text>

            {/* Connectors */}
            <path d="M 105 80 L 150 80" fill="none" stroke="#00f0ff" strokeWidth="1" />
            <path d="M 250 80 L 295 80" fill="none" stroke="#bd00ff" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        );
      case "investment":
        return (
          <svg className="w-full h-40 bg-black" viewBox="0 0 400 160">
            <rect width="100%" height="100%" fill="url(#svg-grid)" />
            {/* Trend/Regression line */}
            <line x1="50" y1="120" x2="350" y2="40" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M 50 120 L 150 95 L 250 65 L 350 40" fill="none" stroke="#bd00ff" strokeWidth="2" />
            
            {/* Data points */}
            <circle cx="80" cy="115" r="3" fill="#00f0ff" />
            <circle cx="120" cy="90" r="3" fill="#00ff66" />
            <circle cx="160" cy="105" r="3" fill="#bd00ff" />
            <circle cx="200" cy="70" r="3" fill="#00f0ff" />
            <circle cx="240" cy="80" r="3" fill="#00ff66" />
            <circle cx="280" cy="50" r="3" fill="#bd00ff" />
            <circle cx="320" cy="45" r="3" fill="#00f0ff" />
            
            {/* Input features node */}
            <rect x="35" y="20" width="80" height="25" rx="3" fill="#030308" stroke="#00f0ff" strokeWidth="1" />
            <text x="75" y="36" fill="#00f0ff" fontSize="8" fontFamily="monospace" textAnchor="middle">USER_PROFILE</text>
            
            {/* ML Logistic Regression model node */}
            <rect x="150" y="20" width="100" height="25" rx="3" fill="#030308" stroke="#bd00ff" strokeWidth="1" />
            <text x="200" y="36" fill="#bd00ff" fontSize="8" fontFamily="monospace" textAnchor="middle">LR_MODEL_FIT</text>
            
            {/* Output investment recommendation node */}
            <rect x="285" y="20" width="80" height="25" rx="3" fill="#030308" stroke="#00ff66" strokeWidth="1" />
            <text x="325" y="36" fill="#00ff66" fontSize="8" fontFamily="monospace" textAnchor="middle">RECOMMEND_OUT</text>

            {/* Connecting dashed paths */}
            <path d="M 75 45 L 75 70 L 150 32" fill="none" stroke="rgba(0,240,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 250 32 L 285 32" fill="none" stroke="rgba(189,0,255,0.3)" strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 z-10 border-t border-white/5 bg-[#020205]/70">
      
      {/* Cyan overlay orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase mb-2">
            // MODULE_04: PRODUCTION_DEPLOYMENTS
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            AI & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Projects</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((proj, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              key={proj.title}
              className="border border-white/10 rounded-lg overflow-hidden bg-cyber-card flex flex-col justify-between group hover:border-cyber-cyan/40 duration-300 relative box-glow-cyan"
            >
              {/* Top Custom Black SVG Visual representation */}
              <div className="relative border-b border-white/10 overflow-hidden bg-black flex items-center justify-center">
                {renderProjectSVG(proj.svgType)}
                
                {/* Tech overlay scanner line */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none opacity-40" />
              </div>

              {/* Body */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h4 className="text-white font-sans font-bold text-lg leading-tight group-hover:text-cyber-cyan transition-colors flex-1">
                      {proj.title}
                    </h4>
                    <div className="flex items-center space-x-2 shrink-0">
                      {proj.gitLink && (
                        <a
                          href={proj.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-cyan p-1 rounded hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                          title={proj.gitLink.includes("drive.google.com") ? "View Google Drive Folder" : "View GitHub Repository"}
                        >
                          {proj.gitLink.includes("drive.google.com") ? (
                            <ExternalLink className="w-4 h-4" />
                          ) : (
                            <GithubIcon className="w-4 h-4" />
                          )}
                        </a>
                      )}
                      {proj.linkedInLink && (
                        <a
                          href={proj.linkedInLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-purple p-1 rounded hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                          title="View LinkedIn Post"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Badge Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/5 font-mono text-[10px] text-gray-500 hover:text-cyber-cyan hover:border-cyber-cyan/30 duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Tabs */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
