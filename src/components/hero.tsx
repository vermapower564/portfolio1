"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Code2, Database, ShieldCheck, Cpu, ChevronDown, UserCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { DeveloperConsole } from "./developer-console";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Dark Technical Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.25),rgba(10,13,20,1))]"></div>
      
      {/* Subtle Technical Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill & Profile Avatar Group */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Profile Image / Avatar Badge */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-60 blur-sm group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border-2 border-slate-700/80 dark:border-slate-800 overflow-hidden shadow-xl shadow-sky-950/20 flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/images/roushan-profile.jpg"
                      alt="Roushan Kumar Verma — Full-Stack Developer"
                      width={120}
                      height={120}
                      priority
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sky-600 via-indigo-600 to-slate-900 flex flex-col items-center justify-center text-white font-mono">
                      <span className="text-lg font-extrabold tracking-tight">RV</span>
                      <span className="text-[9px] opacity-75">DEV</span>
                    </div>
                  )}

                  {/* Online / Active Badge Indicator */}
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-md"></span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/30 text-sky-600 dark:text-sky-400 font-mono text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Full-Stack & Engineering Roles</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Roushan Kumar <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400">Verma</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-sky-600 dark:text-sky-400 font-semibold tracking-tight flex items-center gap-2">
                <span>Full-Stack Developer</span>
              </p>
            </div>

            {/* High quality statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Building scalable, production-ready web applications with robust backend REST APIs, multi-tier Role-Based Access Control (RBAC), and high-performance frontend interfaces.
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                MCA (2024–2026)
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                RBAC & Security
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                MySQL & Prisma
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-600/25 hover:shadow-sky-500/40 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm font-medium border border-slate-300 dark:border-slate-800 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <Code2 className="w-4 h-4 text-sky-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Highlight Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{stat.label}</div>
                  <div className="text-sm font-mono font-semibold text-slate-800 dark:text-slate-200">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column — Interactive Developer Console */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-emerald-500/30 blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="relative">
              <DeveloperConsole />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
          >
            <span>Explore Technical Profile</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
