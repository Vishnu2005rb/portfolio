import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldAlert, BadgeCheck } from "lucide-react";

export default function Certificates() {
  const certs = [
    { title: "Google Cloud Generative AI Course", authority: "Google Cloud", code: "GC-GENAI-198" },
    { title: "No Code AI Agent Builder", authority: "AI Academy", code: "NC-AGENT-402" },
    { title: "Automate Everything with n8n", authority: "n8n.io Academic", code: "N8N-AUTO-910" },
    { title: "Python Programming Core", authority: "KLNCE CSE", code: "PY-CORE-105" },
    { title: "24-Hour Hackathon Participation", authority: "Tarcin Robotics", code: "HK-TARCIN-02" }
  ];

  return (
    <section id="certificates" className="relative py-24 z-10 border-t border-white/5 bg-[#020205]/60">
      
      {/* Cyan background glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyber-cyan/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-cyan tracking-[0.3em] uppercase mb-2">
            // MODULE_06: SYSTEM_CREDENTIALS
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Badges</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Badges Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certs.map((c, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={c.title}
              className="border border-white/10 rounded p-6 bg-cyber-card flex flex-col justify-between group hover:border-cyber-cyan/40 duration-300 relative box-glow-cyan clip-cyber-corner"
            >
              <div className="flex items-start justify-between">
                {/* Badge Icon */}
                <div className="w-10 h-10 border border-cyber-cyan/30 rounded flex items-center justify-center bg-cyber-cyan/5 text-cyber-cyan group-hover:box-glow-cyan group-hover:border-cyber-cyan duration-300">
                  <Award className="w-5 h-5" />
                </div>

                <div className="flex items-center space-x-1.5 font-mono text-[9px] text-cyber-green bg-cyber-green/5 border border-cyber-green/30 px-2 py-0.5 rounded">
                  <BadgeCheck className="w-3 h-3 text-cyber-green animate-pulse" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Cert Details */}
              <div className="text-left mt-6">
                <h4 className="text-white font-sans font-bold text-sm tracking-wide group-hover:text-cyber-cyan duration-300">
                  {c.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-mono mt-1 uppercase">
                  ISSUER: {c.authority}
                </p>
              </div>

              {/* Holographic Verification Stamp */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-gray-500">
                <span>HASH: {c.code}</span>
                <span className="text-[8px] text-gray-600">SYS_PASS</span>
              </div>

              {/* Corner decor */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-white/5 group-hover:border-cyber-cyan/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-white/5 group-hover:border-cyber-cyan/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
