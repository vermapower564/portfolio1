"use client";

import React, { useState, useEffect } from "react";
import { Search, Terminal, Code2, Database, Folder, User, Mail, FileText, X, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Project" | "Action";
  icon: any;
  href?: string;
  action?: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commandItems: CommandItem[] = [
    { id: "hero", title: "Home / Hero Section", category: "Navigation", icon: Terminal, href: "#hero" },
    { id: "projects", title: "All Projects & Architecture", category: "Navigation", icon: Folder, href: "#projects" },
    { id: "skills", title: "Technical Stack & Skills", category: "Navigation", icon: Code2, href: "#skills" },
    { id: "about", title: "About Roushan (MCA 2024–2026)", category: "Navigation", icon: User, href: "#about" },
    { id: "capabilities", title: "What I Build (Scope & Domains)", category: "Navigation", icon: Folder, href: "#capabilities" },
    { id: "approach", title: "Engineering Principles & RBAC", category: "Navigation", icon: Code2, href: "#approach" },
    { id: "code-suite", title: "Code Showcase & API Playground", category: "Navigation", icon: Terminal, href: "#code-suite" },
    { id: "journey", title: "Development Journey Timeline", category: "Navigation", icon: User, href: "#journey" },
    { id: "contact", title: "Contact Roushan", category: "Navigation", icon: Mail, href: "#contact" },
    { id: "resume", title: "View Resume Document", category: "Action", icon: FileText, href: "#resume" },
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      title: `${p.name} (${p.badge})`,
      category: "Project" as const,
      icon: Folder,
      href: "#projects",
    })),
  ];

  const filteredItems = commandItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or trigger
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredItems[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems, onClose]);

  const handleSelect = (item: CommandItem) => {
    onClose();
    if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-sans text-slate-200 space-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-4 h-4 text-sky-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, code, or jump to section..."
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-slate-500">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-xs font-mono transition-colors ${
                    isSelected
                      ? "bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold"
                      : "text-slate-300 hover:bg-slate-800/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-sky-400" : "text-slate-400"}`} />
                    <span>{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span>{item.category}</span>
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded">↵</kbd> Select</span>
          </div>
          <div>Antigravity Command Shell</div>
        </div>
      </div>
    </div>
  );
}
