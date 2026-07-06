import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

// Custom brand SVGs as Lucide exports are missing them in this package
const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 z-10 border-t border-white/5 bg-black/40">
      
      {/* Background orbs */}
      <div className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyber-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-purple tracking-[0.3em] uppercase mb-2">
            // MODULE_07: SECURE_COMMUNICATION
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Portal</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        <div className="flex justify-center items-center max-w-5xl mx-auto w-full">
          
          {/* Information & Links (Centered Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl flex flex-col justify-between border border-cyber-purple/20 rounded bg-cyber-card p-8 sm:p-10 relative clip-cyber-corner box-glow-purple"
          >
            {/* Corner cybernetic details */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-purple" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-purple" />

            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-3">
                <Mail className="text-cyber-purple w-6 h-6" />
                <span className="font-mono text-sm tracking-wider text-cyber-purple uppercase font-bold">
                  DIRECT_CONNECTS
                </span>
              </div>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
                Feel free to connect for freelance collaborations, workflow automation audits, research discussions, or potential job opportunities. I'll get back to you within 24 hours.
              </p>

              {/* Direct connections */}
              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:vishnu18062005@gmail.com" 
                  className="flex items-center space-x-4 p-4 rounded bg-black/40 border border-white/5 hover:border-cyber-cyan/35 hover:bg-cyber-cyan/5 group duration-300"
                >
                  <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyber-cyan group-hover:border-cyber-cyan duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="text-gray-500">EMAIL_ADDRESS</div>
                    <div className="text-white font-bold group-hover:text-glow-cyan">vishnu18062005@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/vishnurb18062005" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 p-4 rounded bg-black/40 border border-white/5 hover:border-cyber-purple/35 hover:bg-cyber-purple/5 group duration-300"
                >
                  <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyber-purple group-hover:border-cyber-purple duration-300">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="text-gray-500">LINKEDIN_CORE</div>
                    <div className="text-white font-bold group-hover:text-glow-purple">vishnurb18062005</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Vishnu2005rb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 p-4 rounded bg-black/40 border border-white/5 hover:border-cyber-cyan/35 hover:bg-cyber-cyan/5 group duration-300"
                >
                  <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyber-cyan group-hover:border-cyber-cyan duration-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-xs">
                    <div className="text-gray-500">GITHUB_REPOS</div>
                    <div className="text-white font-bold group-hover:text-glow-cyan">Vishnu2005rb</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a 
                href="/VISHNU_R_B_Resume.pdf"
                download="VISHNU_R_B_Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-3 border border-cyber-cyan rounded bg-cyber-cyan/5 text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-mono text-xs tracking-widest font-bold box-glow-cyan transition-all duration-300 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD_RESUME.PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
