import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10 border-t border-white/5 bg-black/40">
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-cyber-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase mb-2">
            // MODULE_01: SYSTEM_IDENTITY
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Me & Education</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Identity/Profile Card (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between border border-cyber-cyan/20 rounded bg-cyber-card p-8 relative clip-cyber-corner box-glow-cyan"
          >
            {/* Corner cybernetic details */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-cyan" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-cyan" />

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Cpu className="text-cyber-cyan w-6 h-6 animate-pulse" />
                <span className="font-mono text-sm tracking-wider text-cyber-cyan uppercase font-bold">
                  BIOLOGICAL_CORE_INFO
                </span>
              </div>

              <div className="text-left font-mono text-xs text-gray-500 space-y-1.5 border-b border-white/5 pb-4">
                <p>NAME: <span className="text-white">Vishnu R B</span></p>
                <p>CLASS: <span className="text-white">AI & Automation Architect</span></p>
                <p>LOCATION: <span className="text-white">Tamil Nadu, India</span></p>
                <p>STATUS: <span className="text-cyber-green">ACTIVE_DEVELOPER</span></p>
              </div>

              <div className="text-left space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  I am a Computer Science Engineering student at KLN College of Engineering with hands-on experience in AI agents, workflow automation, NLP, RAG systems, and scalable AI applications.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  Passionate about building intelligent automation systems using modern AI technologies, APIs, and production-ready workflows. I focus on developing modular multi-agent software pipelines that eliminate repetitive operations and speed up deployment velocity.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>// ARCHITECTURE: MULTI-AGENT_RAG</span>
              <span className="text-cyber-cyan">KLNCE // 2022 - 2026</span>
            </div>
          </motion.div>

          {/* Academic Card (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 border border-cyber-purple/20 rounded bg-cyber-card p-8 flex flex-col justify-between relative clip-cyber-corner box-glow-purple"
          >
            {/* Corner cybernetic details */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-purple" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-purple" />

            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-cyber-purple w-6 h-6" />
                <span className="font-mono text-sm tracking-wider text-cyber-purple uppercase font-bold">
                  ACADEMIC_REGISTRY
                </span>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-cyber-purple pl-4 space-y-1">
                  <h4 className="text-white text-base font-bold font-sans">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-xs text-cyber-purple font-mono">
                    Computer Science & Engineering
                  </p>
                  <p className="text-xs text-gray-400 font-sans">
                    KLN College of Engineering
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-xs font-mono text-gray-500 pt-2">
                  <div className="flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-cyber-cyan" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-cyber-green" />
                    <span>CGPA: 7.3 / 10.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded p-4 border border-white/5 space-y-2 text-xs font-mono text-gray-400">
                <div className="flex justify-between">
                  <span>CORE_MODULES:</span>
                  <span className="text-cyber-purple">COMPILATION_PASS</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">Data Structures</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">Algorithms</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">OOPs</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">DBMS</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">ML Foundations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[10px] text-gray-500 font-mono text-right">
              <span>SYS_ENCRYPT: HASH_PASSED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
