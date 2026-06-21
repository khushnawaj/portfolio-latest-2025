import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { projectsData } from "../data/projects";
import SEO from "../components/SEO";
import { FiTerminal, FiArrowLeft, FiCornerDownLeft } from "react-icons/fi";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: "Welcome to Khushnawaj's interactive terminal. Type 'help' to see available commands.", type: "system" },
    { text: "Tip: Try running 'neofetch' or 'theme dark'.", type: "info" }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [startTime] = useState(Date.now());

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.theme.mode);

  // Focus input automatically
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom on output change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory = [...history, { text: `khush-shell$ ${trimmed}`, type: "command" }];
    
    // Save to command history for up/down arrow usage
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    switch (command) {
      case "help":
        newHistory.push({
          text: `Available commands:
  about           - Short bio of Khushnawaj
  skills          - Core technologies and skills list
  projects        - List all portfolio projects
  project <slug>  - View detailed case study for a specific project
  neofetch        - Display system parameters and developer ASCII art
  theme <mode>    - Change site theme ('light' or 'dark')
  contact         - Display contact channels
  gui             - Return to the graphical interface
  clear           - Clear the terminal screen`,
          type: "output"
        });
        break;

      case "about":
        newHistory.push({
          text: `Khushnawaj — Full Stack Engineer & Systems Designer
Based in Gurugram, India.
~2 years of professional experience building enterprise systems, APIs, and low-latency client integrations.
Passionate about system architecture, database optimization, and high-performance UI engineering.`,
          type: "output"
        });
        break;

      case "skills":
        newHistory.push({
          text: `[Frontend]
  - React, Next.js, Vue.js, TypeScript, Tailwind CSS, GSAP
[Backend & Services]
  - Node.js, Express, NestJS, REST APIs, GraphQL, Socket.io
[Databases & Infrastructure]
  - MongoDB, PostgreSQL, Redis, Docker, AWS, Git`,
          type: "output"
        });
        break;

      case "projects":
        const projList = projectsData.map(p => `  • ${p.slug.padEnd(20)} - ${p.title}`).join("\n");
        newHistory.push({
          text: `To view details, run: project <slug>\n\nProjects:\n${projList}`,
          type: "output"
        });
        break;

      case "project":
        if (!args[0]) {
          newHistory.push({ text: "Error: Please specify a project slug. Usage: project <slug>", type: "error" });
        } else {
          const project = projectsData.find(p => p.slug.toLowerCase() === args[0].toLowerCase());
          if (!project) {
            newHistory.push({ text: `Error: Project '${args[0]}' not found. Type 'projects' to list all.`, type: "error" });
          } else {
            newHistory.push({
              text: `==================================================
Project: ${project.title}
Date:    ${project.date}
Tech:    ${project.tech.join(", ")}
==================================================
Problem:
  ${project.details.problem}

Solution:
  ${project.details.solution}

Architecture:
${project.details.architecture.map(a => `  - ${a}`).join("\n")}

Outcomes:
${project.details.outcomes.map(o => `  - ${o}`).join("\n")}`,
              type: "output"
            });
          }
        }
        break;

      case "neofetch":
        const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
        const uptimeString = uptimeSeconds > 60 
          ? `${Math.floor(uptimeSeconds / 60)}m ${uptimeSeconds % 60}s` 
          : `${uptimeSeconds}s`;

        const asciiArt = `      .---.
     /     \\
     \\   o  /
      '---'
     /|   |\\
    / |   | \\
   /  |   |  \\
  /   |   |   \\
  _\\  |   |  /_
  
  KHUSHNAWAJ`;

        const neofetchOutput = `
${asciiArt}
----------------------------
OS:       Portfolio OS (React 19 / Vite)
Shell:    khush-shell-v1.0.0
Uptime:   ${uptimeString}
Theme:    ${theme.toUpperCase()}
Engine:   V8 (Chrome / Node)
Version:  v19.0.0-latest
Memory:   Stable (Client Sandbox)
GitHub:   github.com/khushnawaj`;

        newHistory.push({ text: neofetchOutput, type: "output" });
        break;

      case "theme":
        if (!args[0] || (args[0] !== "light" && args[0] !== "dark")) {
          newHistory.push({ text: "Usage: theme light | theme dark", type: "error" });
        } else {
          if (args[0] !== theme) {
            dispatch(toggleTheme());
            newHistory.push({ text: `System theme changed to ${args[0]}.`, type: "success" });
          } else {
            newHistory.push({ text: `System theme is already ${args[0]}.`, type: "info" });
          }
        }
        break;

      case "contact":
        newHistory.push({
          text: `Contact Info:
  Email:    khushnawaj14@gmail.com
  Phone:    +91 84178 58734
  GitHub:   https://github.com/khushnawaj
  LinkedIn: https://www.linkedin.com/in/17-khushnawaj/`,
          type: "output"
        });
        break;

      case "gui":
        navigate("/");
        return;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({ text: `bash: ${command}: command not found. Type 'help' to see list.`, type: "error" });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0D] text-gray-200 font-mono flex flex-col pt-20 px-4 md:px-6">
      <SEO title="Terminal Playground" description="Interactive terminal developer portfolio tool for Khushnawaj." />
      
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col my-6">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-[#1C1C1E] border border-white/5 rounded-t-xl px-4 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate("/")}
              className="p-1 rounded hover:bg-white/5 text-gray-400 hover:text-white transition"
              title="Return to Graphical Site"
            >
              <FiArrowLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-xs text-gray-400 font-medium ml-3 flex items-center gap-1.5">
              <FiTerminal size={12} /> interactive-shell (khush-shell)
            </span>
          </div>
          <span className="text-[10px] text-gray-500">Ctrl + K for commands</span>
        </div>

        {/* Terminal Window Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 bg-[#09090A] border-x border-b border-white/5 rounded-b-xl p-6 overflow-y-auto min-h-[60vh] max-h-[70vh] shadow-inner cursor-text no-scrollbar"
        >
          <div className="space-y-3.5 leading-relaxed text-sm whitespace-pre-wrap">
            {history.map((h, i) => (
              <div 
                key={i} 
                className={`
                  ${h.type === "command" ? "text-cyan-400 font-bold" : ""}
                  ${h.type === "error" ? "text-red-400" : ""}
                  ${h.type === "success" ? "text-emerald-400" : ""}
                  ${h.type === "info" ? "text-purple-400" : ""}
                  ${h.type === "system" ? "text-cyan-500/80 font-bold" : ""}
                `}
              >
                {h.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt input */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="flex items-center mt-4 text-cyan-400 font-bold text-sm"
          >
            <span className="mr-2">khush-shell$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-gray-200 caret-cyan-400 font-mono w-full"
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
            />
            <button type="submit" className="hidden">Submit</button>
            <span className="text-[10px] text-gray-600 flex items-center gap-1 font-sans">
              <FiCornerDownLeft size={10} /> Enter
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
