"use client";

import React, { useState } from "react";
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from "lucide-react";
import { ResumeModal } from "./resume-modal";

export function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Profile Document
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Want the Complete Technical Profile?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Review my verified educational qualifications, project architecture summaries, role-based access control implementations, and database stack capabilities in a single formatted document.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-sm font-semibold border border-slate-700 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <Eye className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </button>

            <a
              href="/resume.pdf"
              download="Roushan_Kumar_Verma_Resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm font-semibold transition-all shadow-lg shadow-sky-600/25 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
