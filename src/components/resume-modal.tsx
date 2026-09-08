"use client";

import React, { useEffect } from "react";
import { X, Download, FileText, Mail, Phone, MapPin, Globe, GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups, SkillCategoryGroup, SkillItem } from "@/data/skills";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white text-slate-900 rounded-3xl shadow-2xl overflow-y-auto flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-900 text-white backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2 font-mono text-sm font-bold">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>ROUSHAN_KUMAR_VERMA_RESUME.pdf</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Roushan_Kumar_Verma_Resume.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-900">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                {profile.name}
              </h1>
              <p className="text-base font-mono text-sky-700 font-semibold mt-1">
                {profile.role}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right">
              <div>Email: {profile.email}</div>
              <div>GitHub: github.com/vermapower564</div>
              <div>LinkedIn: linkedin.com/in/roushanverma</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Full-Stack Developer currently pursuing Master of Computer Applications (MCA 2024–2026) with a B.Sc. in Mathematics. Specializing in modern web applications, multi-tier Role-Based Access Control (RBAC) systems, RESTful API architecture, cloud database integration (MySQL, Prisma, TiDB Cloud), and third-party media and email workflows.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-bold">
                <span>Master of Computer Applications (MCA)</span>
                <span className="font-mono text-slate-500">2024 – 2026</span>
              </div>
              <p className="text-slate-600">Focus on Full-Stack Software Engineering, Distributed Systems & Database Schemas</p>
              
              <div className="flex justify-between font-bold pt-2">
                <span>Bachelor of Science (B.Sc.) — Mathematics</span>
                <span className="font-mono text-slate-500">Graduated</span>
              </div>
              <p className="text-slate-600">Foundation in discrete logic, algorithmic analysis, and quantitative problem solving</p>
            </div>
          </div>

          {/* Core Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Featured Software Engineering Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span className="text-sm">{proj.name}</span>
                    <span className="font-mono text-sky-700">{proj.badge}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{proj.overview}</p>
                  <div className="font-mono text-[11px] text-slate-500">
                    <strong>Tech:</strong> {proj.stack.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillGroups.map((g: SkillCategoryGroup, idx: number) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold font-mono text-slate-900">{g.title}:</span>
                  <p className="text-slate-600">{g.skills.map((s: SkillItem) => s.name).join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
