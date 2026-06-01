import React from "react";
import CyberBackground from "./components/CyberBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LearningJourney from "./components/LearningJourney";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#020205] text-white overflow-hidden scanlines">
      {/* Dynamic Interactive Node Background */}
      <CyberBackground />
      
      {/* Floating HUD Navbar */}
      <Navbar />
      
      {/* Content Layout wrapper */}
      <main className="relative z-10 w-full">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <LearningJourney />
        <Certificates />
        <Contact />
      </main>

      {/* Futuristic telemetry footer */}
      <footer className="relative z-20 py-8 border-t border-white/5 bg-black/80 font-mono text-[10px] text-gray-500 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>// VRB_SYSTEMS_GLOBAL_TERMINAL_V1.8 // SIGNATURE_PASSED</span>
          <span>© {new Date().getFullYear()} VISHNU R B. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
