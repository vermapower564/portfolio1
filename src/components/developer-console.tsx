"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Play, RefreshCw } from "lucide-react";
import { profile } from "@/data/profile";

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export function DeveloperConsole() {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "whoami",
      response: `${profile.name} — Full-Stack Developer (MCA 2024–2026)`,
    },
    {
      command: "stack",
      response: "Next.js · React · Node.js · Express · MySQL · Prisma · TiDB Cloud · REST APIs",
    },
    {
      command: "focus",
      response: "Building production-ready web applications, RBAC systems & RESTful APIs.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let res: React.ReactNode = "";

    switch (cleanCmd) {
      case "whoami":
        res = `${profile.name} — Full-Stack Web Developer. MCA student (2024-2026) & B.Sc. Mathematics graduate.`;
        break;
      case "role":
        res = "Full-Stack Developer / Software Developer focusing on modern frontend architectures, REST APIs, RBAC, and relational database systems.";
        break;
      case "stack":
        res = "Next.js · React · Vue.js · Node.js · Express · TypeScript · MySQL · Prisma · TiDB Cloud";
        break;
      case "focus":
        res = "Scalable web applications · REST API architecture · Role-Based Access Control (RBAC) · Relational Data Modeling";
        break;
      case "projects":
        res = "Featured Projects: 1) OMS (Enterprise ERP/RBAC), 2) Zyvora (E-Commerce Store), 3) Backbone Academy (EdTech Platform), 4) Snapclass (Classroom Manager).";
        break;
      case "contact":
        res = `Email: ${profile.email} · GitHub: github.com/roushanverma · LinkedIn: linkedin.com/in/roushanverma`;
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "help":
        res = "Available commands: whoami, role, stack, focus, projects, contact, clear";
        break;
      default:
        res = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, response: res }]);
    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      handleCommand(inputVal);
    }
  };

  const copyConsoleContent = () => {
    const text = history.map((item) => `$ ${item.command}\n${typeof item.response === "string" ? item.response : "Stack Details"}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 text-slate-200 shadow-xl backdrop-blur-md overflow-hidden font-mono text-xs">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
          </div>
          <span className="ml-2 text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            roushan@dev-workstation:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            title="Reset Terminal"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={copyConsoleContent}
            title="Copy Output"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 text-[11px]"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Console Content */}
      <div className="p-4 max-h-[280px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
        <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800/60 font-sans">
          Developer Workstation Shell — Type <span className="text-sky-400 font-semibold font-mono">help</span> to explore.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-sky-400">
              <span className="text-emerald-400">$</span>
              <span className="font-semibold">{item.command}</span>
            </div>
            <div className="text-slate-300 pl-4 border-l border-slate-800 leading-relaxed text-xs">
              {item.response}
            </div>
          </div>
        ))}

        {/* Input prompt */}
        <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'stack', 'role', 'focus', or 'help'..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
          />
          <button type="submit" className="text-slate-500 hover:text-sky-400 transition-colors">
            <Play className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Quick Command Buttons */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
        <span className="text-slate-500 whitespace-nowrap">Quick run:</span>
        {["whoami", "role", "stack", "focus", "help"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors whitespace-nowrap font-mono text-[11px]"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
