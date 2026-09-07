"use client";

import React from "react";
import { Cpu, Server, Database, ShieldCheck, Layers, Code, Globe, Lock } from "lucide-react";

export function TrustStrip() {
  const techPills = [
    { name: "Next.js", category: "Frontend Framework", icon: Globe },
    { name: "React", category: "UI Library", icon: Code },
    { name: "TypeScript", category: "Type Safety", icon: Cpu },
    { name: "Node.js", category: "Backend Runtime", icon: Server },
    { name: "Express.js", category: "API Framework", icon: Layers },
    { name: "MySQL", category: "Relational DB", icon: Database },
    { name: "Prisma ORM", category: "Database Client", icon: Database },
    { name: "TiDB Cloud", category: "Distributed DB", icon: Database },
    { name: "REST APIs", category: "Architecture", icon: Server },
    { name: "RBAC Security", category: "Authorization", icon: Lock },
    { name: "Cloudinary", category: "Media CDN", icon: Globe },
  ];

  return (
    <section className="py-6 bg-slate-900/90 text-slate-300 border-y border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
              Core Tech Stack:
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full scrollbar-none font-mono text-xs">
            {techPills.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
