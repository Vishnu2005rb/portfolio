import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, Terminal, Radio } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" }
  ];

  // Update telemetry clock
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      setCurrentTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Listen to scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.slice(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glassmorphism border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & HUD status */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-9 h-9 border border-cyber-cyan/30 rounded bg-cyber-dark box-glow-cyan">
              <Terminal className="w-5 h-5 text-cyber-cyan" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-green rounded-full animate-ping" />
            </div>
            <div>
              <a href="#home" className="font-mono text-sm tracking-widest text-white font-bold hover:text-cyber-cyan transition-colors">
                VRB<span className="text-cyber-purple">.AI</span>
              </a>
              <div className="hidden md:flex items-center space-x-1.5 text-[9px] text-gray-500 font-mono">
                <Radio className="w-2.5 h-2.5 text-cyber-cyan animate-pulse" />
                <span>SYS_STATUS: ONLINE</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1 font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive 
                      ? "text-cyber-cyan text-glow-cyan" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-16px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple shadow-[0_0_8px_#00f0ff]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Telemetry Clock (Desktop only) */}
          <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6 font-mono text-xs text-gray-400">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-cyber-cyan">SYS_TIME</span>
              <span className="text-white tracking-wider font-semibold">{currentTime || "00:00:00"}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-white/5 border border-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-5 h-5" /> : <Menu className="h-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism-cyber border-b border-cyber-cyan/20 px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded font-mono text-sm tracking-widest ${
                  isActive 
                    ? "text-cyber-cyan bg-cyber-cyan/5 border-l-2 border-cyber-cyan" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          
          <div className="pt-4 pb-2 border-t border-white/10 px-3 flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>SYS_STATUS: ONLINE</span>
            <span className="text-cyber-cyan">{currentTime}</span>
          </div>
        </div>
      )}
    </nav>
  );
}
