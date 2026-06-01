import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network } from "lucide-react";

export default function LearningJourney() {
  const learningTopics = [
    { name: "Transformers", progress: 85, depth: "High", icon: Brain, status: "Active training" },
    { name: "BERT", progress: 75, depth: "Medium", icon: Network, status: "Fine-tuning node" },
    { name: "Semantic Search", progress: 90, depth: "High", icon: Database, status: "Retrieval matrix optimized" },
    { name: "AI Agents", progress: 95, depth: "Production", icon: Cpu, status: "Deploying multi-agent nodes" },
    { name: "Multi-Agent Architectures", progress: 88, depth: "High", icon: Cpu, status: "Testing orchestration layers" },
    { name: "Production AI Systems", progress: 80, depth: "Medium", icon: Database, status: "Scaling inference gateways" },
    { name: "DevOps & MLOps AI Systems", progress: 70, depth: "Medium", icon: Network, status: "Integrating CI/CD nodes" }
  ];

  return (
    <section id="journey" className="relative py-24 z-10 border-t border-white/5 bg-black/40">
      
      {/* Background purple glow */}
      <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] bg-cyber-purple/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-cyber-purple tracking-[0.3em] uppercase mb-2">
            // MODULE_05: COGNITIVE_UPGRADES
          </h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Journey</span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mt-4" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={topic.name}
                className="border border-white/10 rounded p-6 bg-cyber-card relative clip-cyber-corner hover:border-cyber-purple/40 duration-300 group hover:box-glow-purple"
              >
                {/* Visual Telemetry */}
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5 font-mono text-[9px] text-gray-500">
                  <span>NODE: 0{index + 1}</span>
                  <span className="text-cyber-purple uppercase">In_Training</span>
                </div>

                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded border border-cyber-purple/35 flex items-center justify-center bg-cyber-purple/5 text-cyber-purple group-hover:text-cyber-cyan group-hover:border-cyber-cyan duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-sans font-bold text-sm tracking-wide">
                        {topic.name}
                      </h4>
                      <p className="text-[9px] text-gray-500 font-mono mt-0.5 uppercase">
                        {topic.status}
                      </p>
                    </div>
                  </div>

                  {/* Tech details bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                      <span>COMPILING</span>
                      <span className="text-cyber-cyan">{topic.progress}%</span>
                    </div>
                    <div className="h-1 bg-black rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyber-purple rounded-full shadow-[0_0_8px_#bd00ff] group-hover:bg-cyber-cyan group-hover:shadow-[0_0_8px_#00f0ff] duration-500" 
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Cyber corner marks */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
