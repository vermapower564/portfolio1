"use client";

import React, { useState } from "react";
import { Terminal, Sparkles, Filter } from "lucide-react";
import { skillGroups } from "@/data/skills";

interface SkillsProps {
  onSelectSkill?: (skillName: string) => void;
}

export function Skills({ onSelectSkill }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillGroups.map((g) => g.title)];

  const filteredGroups = activeCategory === "All"
    ? skillGroups
    : skillGroups.filter((g) => g.title === activeCategory);

  const handleSkillClick = (skillName: string) => {
    if (onSelectSkill) {
      onSelectSkill(skillName);
    } else {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Production-Tested Technologies & Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Categorized skills across the full-stack web engineering spectrum. <span className="text-sky-500 font-medium">Click any skill to highlight projects using that technology.</span>
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                activeCategory === cat
                  ? "bg-slate-900 dark:bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 space-y-5 group hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-500" />
                  {group.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {group.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSkillClick(skill.name)}
                    title={`Highlight projects built with ${skill.name}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 hover:scale-105 cursor-pointer text-left ${
                      skill.highlight
                        ? "bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300 border border-sky-500/30 font-semibold hover:bg-sky-500 hover:text-white"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] opacity-60 font-sans">({skill.level})</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
