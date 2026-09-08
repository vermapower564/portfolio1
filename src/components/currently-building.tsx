"use client";

import React from "react";
import Link from "next/link";
import { Hammer, ArrowRight, Layers, Cpu } from "lucide-react";
import { projects } from "@/data/projects";

export function CurrentlyBuilding() {
  const activeProjects = projects.filter((p) => p.currentlyBuilding);

  if (activeProjects.length === 0) return null;

  return (
    <section id="currently-building" className="py-24 bg-white dark:bg-[#0f0a0d] border-y border-stone-200 dark:border-rose-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold uppercase tracking-wider border border-rose-900/20">
            <Hammer className="w-3.5 h-3.5 text-rose-900 dark:text-rose-400" />
            <span>Active Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
            Currently Building & Refining
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg font-sans">
            A real-time look at active full-stack systems currently under continuous development, feature expansion, and production deployment preparation.
          </p>
        </div>

        {/* Editorial Grid of Active Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-3xl bg-stone-50 dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 p-6 sm:p-8 flex flex-col justify-between hover:border-rose-800/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Header Badge & Status */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-300 font-mono text-[11px]">
                    {project.category}
                  </span>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/50 text-rose-900 dark:text-rose-300 border border-rose-900/20 font-mono text-[11px] font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-900 dark:bg-rose-400"></span>
                    </span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Title */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-rose-900 dark:text-rose-400">
                    {project.badge}
                  </p>
                </div>

                {/* Current Active Work Description */}
                <div className="p-4 rounded-2xl bg-white dark:bg-stone-900/90 border border-stone-200 dark:border-rose-950/60 space-y-2">
                  <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-rose-900 dark:text-rose-400" />
                    <span>Current Focus</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                    {project.currentlyBuildingNote || project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-2 py-1 rounded-md bg-stone-200/60 dark:bg-stone-800/80 text-stone-500 font-mono text-[11px]">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* View Details Action */}
              <div className="pt-6 mt-6 border-t border-stone-200 dark:border-rose-950/60">
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-stone-900 hover:bg-rose-900 hover:text-white dark:hover:bg-rose-900 text-stone-800 dark:text-stone-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 border border-stone-300 dark:border-rose-950/60 transition-all duration-200 shadow-sm"
                >
                  <Layers className="w-3.5 h-3.5 text-rose-900 dark:text-rose-400 group-hover:text-white" />
                  <span>View Details & Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
