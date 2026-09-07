"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Layers, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ArchitectureDiagram } from "./architecture-diagram";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 font-mono text-xs font-semibold">
              {project.badge}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              Technical Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-base sm:text-lg font-mono text-sky-600 dark:text-sky-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">
                The Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20 space-y-2">
              <h3 className="text-xs font-mono font-bold text-sky-500 uppercase tracking-wider">
                The Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Visualization */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-500" />
              System Architecture & Flow
            </h3>
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* Detailed Features */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-500" />
              Core Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="p-5 rounded-2xl bg-indigo-950/20 dark:bg-indigo-950/30 border border-indigo-500/30 space-y-3">
            <h3 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.engineeringHighlights.map((hl, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-indigo-400 font-mono font-bold">•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-medium border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-sky-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-mono text-xs hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
