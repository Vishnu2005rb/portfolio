import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, Send, Layers } from "lucide-react";
import profileImg from "../assets/profile.png";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Background neon orb effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-cyan/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyber-purple/10 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Cyberpunk horizontal grid distortion effect */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-xs font-mono tracking-widest box-glow-cyan"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
              <span>CORE_AGENT_ACTIVE_V1.8</span>
            </motion.div>

            {/* Title with cyberpunk neon glow */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sans text-white leading-none"
              >
                Hi, I'm <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent hover:brightness-110 duration-300">Vishnu R B</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-mono text-gray-300 font-semibold uppercase flex items-center gap-2"
              >
                <ChevronRight className="text-cyber-cyan animate-pulse" />
                <span className="text-glow-purple">AI & Automation Engineer</span>
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl font-sans leading-relaxed"
            >
              Aspiring AI Engineer building intelligent AI agents, workflow automation systems, and production-ready AI applications.
            </motion.p>

            {/* Hero CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="relative group px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded text-black font-semibold font-mono text-sm tracking-wider flex items-center space-x-2 transition-transform active:scale-95 duration-200 box-glow-cyan-strong"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                <Layers className="w-4 h-4" />
                <span>VIEW PROJECTS</span>
              </a>

              {/* Contact button */}
              <a
                href="#contact"
                className="px-6 py-3 rounded border border-cyber-purple/50 bg-cyber-purple/10 hover:bg-cyber-purple/20 text-white font-mono text-sm tracking-widest flex items-center space-x-2 transition-all duration-300 hover:border-cyber-purple hover:box-glow-purple"
              >
                <Send className="w-4 h-4 text-cyber-purple" />
                <span>CONTACT ME</span>
              </a>

              {/* Resume download */}
              <a
                href="#contact"
                className="px-6 py-3 rounded border border-white/10 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 text-gray-300 hover:text-white font-mono text-sm tracking-widest flex items-center space-x-2 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyber-cyan" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>
          </div>

          {/* Profile Photo (Desktop / Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 flex justify-center items-center relative w-full"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Rotating outer cyber ring as background layer */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/40 p-2"
              />
              {/* Rotating secondary cyber ring (opposite direction) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-double border-cyber-purple/30"
              />
              
              {/* Glowing background behind the avatar */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyber-cyan/20 to-cyber-purple/20 blur-xl animate-pulse-slow pointer-events-none" />
              
              {/* Main avatar container with gradient border and circular shape */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple p-1 box-glow-cyan-strong flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#8b8a8e] to-[#5f6064] overflow-hidden flex items-center justify-center relative group">
                  {/* Cyber Grid background */}
                  <div className="absolute inset-0 cyber-grid opacity-15 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
                  
                  {/* Scanner overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent h-1/3 w-full -translate-y-full animate-scanline pointer-events-none" />

                  <img
                    src={profileImg}
                    alt="Vishnu R B"
                    className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 rounded-full"
                  />

                </div>
              </div>

              {/* Cyber-status indicator badge */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full border border-cyber-cyan/40 bg-cyber-dark/95 text-[10px] font-mono tracking-widest text-cyber-cyan flex items-center space-x-2 shadow-lg backdrop-blur-md z-20">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                <span>AGENT_STATUS: ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
