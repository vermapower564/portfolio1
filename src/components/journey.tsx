"use client";

import React from "react";
import { GraduationCap, Award, Rocket, Code2, Briefcase } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export function Journey() {
  return (
    <section id="journey" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-mono text-xs font-semibold uppercase tracking-wider">
            Development Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Academic & Engineering Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From mathematical logic foundations to building enterprise RBAC systems and full-stack cloud applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-emerald-500">
          {journeyMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0`}
              >
                {/* Timeline Icon Badge */}
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-sky-400 border-4 border-white dark:border-slate-950 shadow-md absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 font-mono text-xs">
                  {item.category === "Education" ? (
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                  ) : item.category === "Enterprise" ? (
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <Rocket className="w-4 h-4 text-emerald-400" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-500 font-mono text-xs font-semibold">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="pt-2 space-y-1.5 border-t border-slate-200 dark:border-slate-800">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                        <span className="text-sky-500 font-mono font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
