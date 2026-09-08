"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "./project-modal";

export function Projects() {
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Enterprise / ERP", "EdTech", "E-Commerce", "Full-Stack"];

  const filteredProjects = filterCategory === "All"
    ? projects
    : projects.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 bg-stone-50 dark:bg-[#0f0a0d] border-y border-stone-200 dark:border-rose-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold uppercase tracking-wider border border-rose-900/20">
            Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
            Production Software & Architecture
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg">
            Real-world systems engineered with role-based access control, REST APIs, cloud databases, and clean frontend UX.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-800 ${
                filterCategory === cat
                  ? "bg-rose-900 text-white shadow-sm"
                  : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-rose-950/60 hover:bg-stone-100 dark:hover:bg-stone-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-rose-950/60 p-6 sm:p-8 flex flex-col justify-between hover:border-rose-800/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border border-rose-900/20 font-mono text-xs font-semibold">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono text-[11px]">
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title & Short Desc */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white tracking-tight group-hover:text-rose-900 dark:group-hover:text-rose-400 transition-colors">
                    <Link href={`/projects/${project.id}`}>
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Highlight Features */}
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950/80 border border-stone-200 dark:border-rose-950/60 space-y-2">
                  <div className="text-[11px] font-mono font-semibold text-stone-400 uppercase tracking-wider">
                    Key Highlight
                  </div>
                  <div className="text-xs text-stone-700 dark:text-stone-300 font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-900 dark:text-rose-400 shrink-0" />
                    <span>{project.features[0]}</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.slice(0, 6).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 font-mono text-[11px]">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-stone-200 dark:border-rose-950/60 flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="px-4 py-2 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>View Case Study Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 text-xs font-mono transition-colors"
                    title="Quick Preview Modal"
                  >
                    Modal
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub Repository`}
                      className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} Live Demo`}
                      className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick Case Study Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
