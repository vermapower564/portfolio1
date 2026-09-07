"use client";

import React from "react";
import { Github, ExternalLink, GitBranch, Star, Code2, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function GithubSection() {
  return (
    <section id="github" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            Source Control & Repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            GitHub Engineering Activity
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Direct repositories, open-source codebases, and technical commit history on GitHub.
          </p>
        </div>

        {/* Profile Card & Repositories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Overview Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">vermapower564</h3>
                <p className="text-xs text-slate-400 font-mono">Roushan Kumar Verma</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Full-Stack Developer building enterprise RBAC systems, REST APIs, and database-driven applications.
            </p>

            <div className="space-y-2 font-mono text-xs text-slate-400 pt-2 border-t border-slate-900">
              <div className="flex justify-between">
                <span>Public Repositories:</span>
                <span className="text-sky-400 font-bold">Featured Projects</span>
              </div>
              <div className="flex justify-between">
                <span>Primary Language:</span>
                <span className="text-emerald-400 font-bold">TypeScript / JS</span>
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>

          {/* Featured Repositories Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      {repo.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {repo.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {repo.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.stack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
                  <a
                    href={repo.githubUrl || profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-300 hover:text-sky-400 flex items-center gap-1 transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
