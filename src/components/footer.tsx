"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0a0d] text-stone-400 border-t border-rose-950/60 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded-lg bg-rose-900 flex items-center justify-center text-white font-bold">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono font-bold text-white text-base">
                Roushan Kumar Verma
              </span>
              <span className="text-xs font-mono text-rose-400">
                ({profile.displayName})
              </span>
            </div>
            <p className="text-stone-400 max-w-md">
              Full-Stack Developer • MCA (2024–2026 Ranchi University) & B.Sc. Mathematics • Building enterprise RBAC platforms, REST APIs, and modern responsive UIs.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex items-center gap-6 font-mono text-xs text-stone-300">
            <Link href="/" className="hover:text-rose-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-rose-400 transition-colors">About</Link>
            <Link href="/skills" className="hover:text-rose-400 transition-colors">Skills</Link>
            <Link href="/projects" className="hover:text-rose-400 transition-colors">Projects</Link>
            <Link href="/journey" className="hover:text-rose-400 transition-colors">Journey</Link>
            <Link href="/contact" className="hover:text-rose-400 transition-colors">Contact</Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-stone-900 border border-rose-950/60 text-stone-300 hover:text-rose-400 hover:border-rose-800/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-stone-900 border border-rose-950/60 text-stone-300 hover:text-rose-400 hover:border-rose-800/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Roushan"
              className="p-2 rounded-xl bg-stone-900 border border-rose-950/60 text-stone-300 hover:text-rose-400 hover:border-rose-800/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.phoneTel}
              aria-label="Call Roushan"
              className="p-2 rounded-xl bg-stone-900 border border-rose-950/60 text-stone-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rose-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Roushan Kumar Verma ({profile.displayName}). Email: <a href={`mailto:${profile.email}`} className="hover:text-rose-400 transition-colors">{profile.email}</a> • Phone: <a href={profile.phoneTel} className="hover:text-emerald-400 transition-colors">{profile.phone}</a>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-rose-950/60 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
