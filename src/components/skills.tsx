"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Code2, Database, Wrench, Layers, ExternalLink, ShieldCheck } from "lucide-react";
import { skillCategoryGroups, SkillItem } from "@/data/skills";

interface SkillsProps {
  onSelectSkill?: (skillName: string) => void;
}

export function Skills({ onSelectSkill }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategoryGroups.map((g) => g.title)];

  const filteredGroups = activeCategory === "All"
    ? skillCategoryGroups
    : skillCategoryGroups.filter((g) => g.title === activeCategory);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Frontend Engineering":
        return <Code2 className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
      case "Backend & API Architecture":
        return <Terminal className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
      case "Database Architecture & Data Modeling":
        return <Database className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
      case "Development Tools & Environment":
        return <Wrench className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
      case "Architecture & Systems Engineering":
        return <Layers className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
      default:
        return <Terminal className="w-4 h-4 text-rose-900 dark:text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-stone-50 dark:bg-[#0f0a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold uppercase tracking-wider border border-rose-900/20">
            Verified Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
            Evidence-Based Technologies & Tools
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg">
            Every technology listed below is actively implemented and verified across my portfolio project and case studies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-800 ${
                activeCategory === cat
                  ? "bg-rose-900 text-white shadow-sm"
                  : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-rose-950/60 hover:bg-stone-200/70 dark:hover:bg-stone-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Groups */}
        <div className="space-y-10">
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="space-y-6">
              {/* Category Group Title */}
              <div className="flex items-center gap-3 border-b border-stone-200 dark:border-rose-950/60 pb-3">
                {getCategoryIcon(group.title)}
                <div>
                  <h3 className="text-xl font-bold font-mono text-stone-900 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="text-xs font-sans text-stone-500 dark:text-stone-400">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.skills.map((skill: SkillItem, sIdx: number) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-rose-950/60 hover:border-rose-800/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold font-mono text-stone-900 dark:text-white group-hover:text-rose-900 dark:group-hover:text-rose-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold shrink-0 border ${
                          skill.proficiency === "Core Technology"
                            ? "bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border-rose-900/20"
                            : "bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>

                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                        {skill.description}
                      </p>
                    </div>

                    {/* Evidence / Used In Projects Section */}
                    <div className="pt-3 border-t border-stone-200 dark:border-rose-950/60 space-y-1.5 font-mono text-xs">
                      <div className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        <span>Used In Projects:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.usedInProjects.map((proj, pIdx) => (
                          <Link
                            key={pIdx}
                            href={proj.href}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-300 hover:bg-stone-200 dark:hover:bg-rose-950/60 transition-colors text-[11px]"
                          >
                            <span>{proj.name}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
