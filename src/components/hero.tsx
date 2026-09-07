"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Code2, Database, ShieldCheck, Cpu, ChevronDown, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { DeveloperConsole } from "./developer-console";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-stone-50 dark:bg-[#0f0a0d]">
      {/* Restrained Background Ambient Layer */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(136,19,55,0.08),rgba(250,250,249,0))] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(136,19,55,0.18),rgba(15,10,13,1))]"></div>
      
      {/* Subtle Editorial Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#78716c10_1px,transparent_1px),linear-gradient(to_bottom,#78716c10_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#88133715_1px,transparent_1px),linear-gradient(to_bottom,#88133715_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Display Name Badge & Status Pill & Profile Avatar Group */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Profile Image Frame */}
              <div className="relative group shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-900 border border-stone-700/60 dark:border-rose-950/80 overflow-hidden shadow-sm flex items-center justify-center">
                  {!imageError ? (
                    <Image
                      src="/images/roushan-profile.jpg"
                      alt="Roushan Kumar Verma — Full-Stack Developer"
                      width={120}
                      height={120}
                      priority
                      unoptimized
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-800 flex flex-col items-center justify-center text-white font-mono">
                      <span className="text-base font-bold">RV</span>
                    </div>
                  )}

                  {/* Status Indicator */}
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-stone-950 shadow-sm"></span>
                </div>
              </div>

              <div className="space-y-1.5">
                {/* Stylized Display Identity */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-900/10 dark:bg-rose-950/40 border border-rose-900/20 dark:border-rose-800/30 text-rose-900 dark:text-rose-300 font-mono text-xs font-bold tracking-wider">
                  <Sparkles className="w-3 h-3 text-rose-800 dark:text-rose-400" />
                  <span>{profile.displayName}</span>
                </div>

                {/* Status Pill */}
                <div className="flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for Engineering Roles</span>
                </div>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-[1.1]">
                Roushan Kumar Verma
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-rose-900 dark:text-rose-400 font-semibold tracking-tight">
                Full-Stack Developer
              </p>
            </div>

            {/* High quality statement */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed max-w-2xl font-sans">
              Building production-ready web applications with scalable frontend architecture, secure REST APIs, databases, and Role-Based Access Control (RBAC).
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-stone-700 dark:text-stone-300">
              <span className="px-3 py-1 rounded-lg bg-stone-200/70 dark:bg-stone-900/80 border border-stone-300/80 dark:border-rose-950/60 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-rose-800 dark:text-rose-400" />
                MCA (2024–2026) Ranchi Univ.
              </span>
              <span className="px-3 py-1 rounded-lg bg-stone-200/70 dark:bg-stone-900/80 border border-stone-300/80 dark:border-rose-950/60 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                RBAC & Security
              </span>
              <span className="px-3 py-1 rounded-lg bg-stone-200/70 dark:bg-stone-900/80 border border-stone-300/80 dark:border-rose-950/60 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-500" />
                MySQL & Prisma
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-mono text-sm font-semibold transition-colors shadow-sm flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-stone-200/80 dark:bg-stone-900 hover:bg-stone-300 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono text-sm font-medium border border-stone-300 dark:border-rose-950/60 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <Code2 className="w-4 h-4 text-rose-800 dark:text-rose-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Highlight Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-300/80 dark:border-rose-950/60">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">{stat.label}</div>
                  <div className="text-sm font-mono font-semibold text-stone-900 dark:text-stone-200">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column — Developer Console */}
          <div className="lg:col-span-5 relative">
            <DeveloperConsole />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-stone-400 hover:text-rose-900 dark:hover:text-rose-400 transition-colors group"
          >
            <span>Explore Technical Profile</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-rose-800 dark:text-rose-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
