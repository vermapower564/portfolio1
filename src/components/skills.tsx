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
    <section id="skills" className="py-20 bg-stone-50 dark:bg-[#0f0a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold uppercase tracking-wider border border-rose-900/20">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
            Production-Tested Technologies & Tools
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg">
            Categorized skills across the full-stack web engineering spectrum. <span className="text-rose-900 dark:text-rose-400 font-medium">Click any skill to highlight projects using that technology.</span>
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-rose-950/60 hover:border-rose-800/40 transition-all duration-300 space-y-5 group hover:shadow-lg"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                  {group.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
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
                        ? "bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border border-rose-900/20 dark:border-rose-800/30 font-semibold hover:bg-rose-900 hover:text-white"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700/60 hover:bg-stone-200 dark:hover:bg-stone-700"
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
