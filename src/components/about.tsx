"use client";

import React from "react";
import { GraduationCap, Code2, Server, Database, Lock, Layers, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 font-mono text-xs font-semibold uppercase tracking-wider">
            Engineering Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Architecting Robust Full-Stack Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Combining mathematical precision with modern web technologies to engineer clean, maintainable, and high-performance software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-sky-500" />
                Technical Identity & Philosophy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <strong className="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</strong> currently pursuing my <strong className="text-slate-900 dark:text-white font-semibold">Master of Computer Applications (MCA 2024–2026)</strong>. My educational journey began with a <strong className="text-slate-900 dark:text-white font-semibold">Bachelor of Science in Mathematics</strong>, which instilled a deep appreciation for logical structuring, discrete patterns, and efficient problem solving.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Rather than building simple superficial websites, I specialize in engineering multi-tier business management platforms, dual-portal education systems, and complex web applications requiring strict <strong className="text-slate-900 dark:text-white font-semibold">Role-Based Access Control (RBAC)</strong>, transactional database state, REST API authorization, and media pipelines.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Full-Stack Web Engineering", desc: "React, Next.js, Node.js, Express.js" },
                { title: "Multi-Tier RBAC & Auth", desc: "Granular permissions, JWT middleware" },
                { title: "Database Architecture", desc: "MySQL, Prisma ORM, TiDB Cloud" },
                { title: "Third-Party Integrations", desc: "Cloudinary CDN, Nodemailer SMTP" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white font-mono">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-mono">Academic Qualifications</h3>
                  <p className="text-xs text-slate-400 font-mono">Verified Educational Background</p>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1">
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-500 border-2 border-slate-900"></div>
                    <div className="inline-block px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[11px] font-medium">
                      {edu.period}
                    </div>
                    <h4 className="text-base font-bold text-white leading-snug">{edu.degree}</h4>
                    <p className="text-xs text-slate-300 font-mono">{edu.specialization}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 leading-relaxed">
                Focused on production architecture, system maintainability, clean REST API schemas, and robust database design.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
