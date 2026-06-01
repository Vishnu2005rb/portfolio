import React from "react";
import { motion } from "framer-motion";
import { Terminal, Server, Link, Cpu } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "AiOps Intern",
      company: "Tarcin Robotics",
      duration: "Present / Recent",
      details: [
        "Built AI-powered candidate onboarding workflows, streamlining HR operations and reducing manual document processing.",
        "Developed comprehensive hackathon automation systems including participant team matching and progress monitors.",
        "Created LLM scoring systems to automate assessment validations and submission vetting.",
        "Integrated Groq API, Google Sheets API, Gmail API, and Google Drive API into continuous automated pipelines.",
        "Built an Event Management System from scratch featuring automated review validations and digital certificate issuance."
      ],
      tech: ["n8n", "Python", "Groq API", "Google APIs", "OAuth2", "AI Agents", "Event Automation"]
    }
  ];

  return (
    <section id="experience" className="relative py-24 z-10 border-t border-white/5 bg-black/30">
      
      {/* Radial accent shadow */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-cyber-purple/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase mb-2">
            // MODULE_03: OPERATIONAL_LOGS
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Experience</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central cybernetic wire line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent opacity-30" />

          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              key={exp.role + exp.company}
              className="relative mb-12 flex flex-col md:flex-row items-stretch"
            >
              {/* Core interactive Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-[9px] top-6 w-4.5 h-4.5 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center z-20 box-glow-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
              </div>

              {/* Mobile layout spacing */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-10 text-left md:text-right flex flex-col justify-center">
                <div className="mb-2 md:mb-0">
                  <span className="font-mono text-xs text-cyber-cyan border border-cyber-cyan/35 px-2 py-0.5 rounded bg-cyber-cyan/5">
                    {exp.duration}
                  </span>
                  <h4 className="text-white font-sans font-bold text-xl mt-2">
                    {exp.role}
                  </h4>
                  <p className="text-cyber-purple font-mono text-sm uppercase">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="pl-12 md:pl-10 md:w-1/2 text-left">
                {/* The Experience Details Panel */}
                <div className="border border-white/10 rounded bg-cyber-card p-6 relative overflow-hidden group hover:border-cyber-purple/40 duration-300 clip-cyber-corner">
                  {/* Subtle terminal-like details */}
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5 font-mono text-[9px] text-gray-500">
                    <span>// LOG_ID: 00{idx + 1}_OPS</span>
                    <span>SECURITY: VERIFIED</span>
                  </div>

                  <ul className="space-y-3 text-gray-300 text-xs sm:text-sm leading-relaxed list-none pl-0">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="relative pl-5">
                        {/* Custom bullet point (cyber bracket) */}
                        <span className="absolute left-0 text-cyber-cyan font-bold font-mono select-none">&gt;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badge list */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/5 font-mono text-[10px] text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
