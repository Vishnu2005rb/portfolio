import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Share2, Database, Brain, Wrench, Layers } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "ALL_SYSTEMS", icon: Layers },
    { id: "programming", label: "PROGRAMMING", icon: Code },
    { id: "automation", label: "AUTOMATION_FW", icon: Share2 },
    { id: "databases", label: "DATABASE_CORES", icon: Database },
    { id: "ai", label: "AI_COGNITION", icon: Brain },
    { id: "tools", label: "DEV_UTILITIES", icon: Wrench }
  ];

  const skillData = [
    // Programming
    { name: "Python", category: "programming", type: "core", val: 92, glow: "cyan" },
    { name: "JavaScript", category: "programming", type: "core", val: 85, glow: "purple" },
    { name: "SQL", category: "programming", type: "core", val: 88, glow: "cyan" },
    
    // Frameworks & Automation
    { name: "n8n", category: "automation", type: "framework", val: 95, glow: "cyan" },
    { name: "FastAPI", category: "automation", type: "framework", val: 88, glow: "purple" },
    { name: "Streamlit", category: "automation", type: "framework", val: 82, glow: "purple" },
    { name: "LangChain", category: "automation", type: "framework", val: 90, glow: "cyan" },
    { name: "Zapier", category: "automation", type: "framework", val: 85, glow: "cyan" },
    { name: "Activepieces", category: "automation", type: "framework", val: 80, glow: "purple" },
    { name: "REST APIs", category: "automation", type: "framework", val: 86, glow: "purple" },
    
    // Databases
    { name: "MySQL", category: "databases", type: "db", val: 84, glow: "purple" },
    { name: "PostgreSQL", category: "databases", type: "db", val: 86, glow: "cyan" },
    { name: "FAISS", category: "databases", type: "db", val: 80, glow: "cyan" },
    { name: "ChromaDB", category: "databases", type: "db", val: 82, glow: "cyan" },
    
    // AI & Concepts
    { name: "AI Agents", category: "ai", type: "concept", val: 95, glow: "cyan" },
    { name: "NLP", category: "ai", type: "concept", val: 88, glow: "cyan" },
    { name: "MCP", category: "ai", type: "concept", val: 90, glow: "cyan" },
    { name: "RAG", category: "ai", type: "concept", val: 92, glow: "cyan" },
    { name: "Machine Learning", category: "ai", type: "concept", val: 82, glow: "purple" },
    { name: "Deep Learning", category: "ai", type: "concept", val: 78, glow: "purple" },
    { name: "Prompt Engineering", category: "ai", type: "concept", val: 94, glow: "cyan" },
    { name: "Semantic Search", category: "ai", type: "concept", val: 87, glow: "purple" },
    { name: "Multi-Agent Systems", category: "ai", type: "concept", val: 90, glow: "cyan" },
    { name: "Scikit-learn", category: "ai", type: "concept", val: 88, glow: "purple" },
    { name: "TensorFlow", category: "ai", type: "concept", val: 80, glow: "purple" },
    { name: "PyTorch", category: "ai", type: "concept", val: 82, glow: "purple" },
    { name: "NumPy & Pandas", category: "ai", type: "concept", val: 86, glow: "purple" },
    { name: "XGBoost", category: "ai", type: "concept", val: 78, glow: "purple" },
    { name: "OpenCV", category: "ai", type: "concept", val: 76, glow: "purple" },
    { name: "LLMs", category: "ai", type: "concept", val: 94, glow: "cyan" },
    { name: "Fine-tuning", category: "ai", type: "concept", val: 85, glow: "cyan" },
    { name: "Embeddings", category: "ai", type: "concept", val: 88, glow: "cyan" },
    { name: "LangGraph", category: "ai", type: "concept", val: 90, glow: "cyan" },
    { name: "Hugging Face (Transformers)", category: "ai", type: "concept", val: 84, glow: "cyan" },
    
    // Tools
    { name: "Git", category: "tools", type: "tool", val: 88, glow: "purple" },
    { name: "GitHub", category: "tools", type: "tool", val: 90, glow: "cyan" },
    { name: "Cursor", category: "tools", type: "tool", val: 92, glow: "cyan" },
    { name: "Antigravity", category: "tools", type: "tool", val: 85, glow: "purple" },
    { name: "Kiro", category: "tools", type: "tool", val: 80, glow: "purple" },
    { name: "Docker", category: "tools", type: "tool", val: 82, glow: "purple" }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillData 
    : skillData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 z-10 border-t border-white/5 bg-[#020205]/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-cyber-cyan/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-purple tracking-[0.3em] uppercase mb-2">
            // MODULE_02: CAPABILITY_MATRIX
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Skills & Cores</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 border rounded font-mono text-xs tracking-wider transition-all duration-300 clip-cyber-corner-sm cursor-pointer ${
                  isActive
                    ? "bg-white/5 text-white border-cyber-cyan box-glow-cyan"
                    : "bg-black/40 text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyber-cyan" : "text-gray-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const isCyan = skill.glow === "cyan";
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className={`border rounded p-5 relative overflow-hidden bg-cyber-card transition-all duration-300 group hover:-translate-y-1 ${
                    isCyan 
                      ? "border-cyber-cyan/20 hover:border-cyber-cyan/50 hover:box-glow-cyan" 
                      : "border-cyber-purple/20 hover:border-cyber-purple/50 hover:box-glow-purple"
                  }`}
                >
                  {/* Subtle sweep overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Skill name & category identifier */}
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <span className="font-sans font-bold text-white text-base tracking-wide group-hover:text-glow-cyan duration-300">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[9px] text-gray-500 uppercase px-1.5 py-0.5 border border-white/5 rounded bg-black/40">
                      {skill.type}
                    </span>
                  </div>

                  {/* Cyber Bar Indicator */}
                  <div className="space-y-1.5 relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                      <span>POWER_LVL</span>
                      <span className={isCyan ? "text-cyber-cyan" : "text-cyber-purple"}>
                        {skill.val}%
                      </span>
                    </div>
                    
                    {/* The glowing progress line */}
                    <div className="h-1.5 bg-black/50 border border-white/5 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCyan 
                            ? "bg-cyber-cyan box-glow-cyan shadow-[0_0_8px_#00f0ff]" 
                            : "bg-cyber-purple box-glow-purple shadow-[0_0_8px_#bd00ff]"
                        }`} 
                        style={{ width: `${skill.val}%` }}
                      />
                    </div>
                  </div>

                  {/* Decorative digital layout grid corners */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-white/35 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-white/35 transition-colors" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
