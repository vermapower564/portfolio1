"use client";

import React, { useState } from "react";
import { Terminal, Server, Database, Code2 } from "lucide-react";
import { CodeShowcase } from "./code-showcase";
import { ApiPlayground } from "./api-playground";
import { SqlWorkbench } from "./sql-workbench";

export function CodeSuite() {
  const [activeTab, setActiveTab] = useState<"code" | "api" | "sql">("code");

  return (
    <section id="code-suite" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
            Developer Depth Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Depth & Code Quality
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Inspect real production TypeScript middleware, test REST API endpoints interactively, and examine normalized database schemas.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 flex-wrap font-mono text-xs">
          <button
            onClick={() => setActiveTab("code")}
            className={`px-5 py-2.5 rounded-xl border transition-all flex items-center gap-2 ${
              activeTab === "code"
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Production Code Snippets</span>
          </button>

          <button
            onClick={() => setActiveTab("api")}
            className={`px-5 py-2.5 rounded-xl border transition-all flex items-center gap-2 ${
              activeTab === "api"
                ? "bg-sky-500/20 border-sky-500/50 text-sky-300 font-bold shadow-lg shadow-sky-500/10"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Server className="w-4 h-4 text-sky-400" />
            <span>REST API Playground</span>
          </button>

          <button
            onClick={() => setActiveTab("sql")}
            className={`px-5 py-2.5 rounded-xl border transition-all flex items-center gap-2 ${
              activeTab === "sql"
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold shadow-lg shadow-amber-500/10"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Database className="w-4 h-4 text-amber-400" />
            <span>SQL & Schema Workbench</span>
          </button>
        </div>

        {/* Tab View Container */}
        <div>
          {activeTab === "code" && <CodeShowcase />}
          {activeTab === "api" && <ApiPlayground />}
          {activeTab === "sql" && <SqlWorkbench />}
        </div>

      </div>
    </section>
  );
}
