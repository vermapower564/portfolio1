"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FolderKanban, Mail } from "lucide-react";

interface PortfolioCTAProps {
  className?: string;
}

export function PortfolioCTA({ className = "" }: PortfolioCTAProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
          
          {/* Top Subtle Maroon Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-900 via-rose-600 to-rose-900" />

          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/50 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold uppercase tracking-wider border border-rose-900/20">
            <Mail className="w-3.5 h-3.5 text-rose-900 dark:text-rose-400" />
            <span>Let&apos;s Build Together</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Have a project in mind?
          </h2>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
            Looking for a modern website, web application, or full-stack solution? Let&apos;s discuss your project and build something practical and scalable.
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-mono text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-800"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-mono text-sm font-semibold flex items-center justify-center gap-2 border border-stone-300 dark:border-stone-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-800"
            >
              <FolderKanban className="w-4 h-4 text-rose-900 dark:text-rose-400" />
              <span>View Projects</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
