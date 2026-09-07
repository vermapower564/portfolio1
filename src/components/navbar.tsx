"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, Terminal, Code2, Search } from "lucide-react";
import { useTheme } from "./theme-provider";
import { CommandPalette } from "./command-palette";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-stone-50/90 dark:bg-[#0f0a0d]/90 backdrop-blur-md border-b border-stone-200 dark:border-rose-950/60 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-rose-800 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-950 border border-rose-800/40 p-0.5 shadow-sm group-hover:border-rose-700 transition-all duration-300">
                <div className="w-full h-full bg-[#18090e] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-rose-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-stone-900 dark:text-stone-100 tracking-tight text-base leading-none">
                  Roushan<span className="text-rose-900 dark:text-rose-400">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 tracking-wider">
                  FULL-STACK ARCHITECT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-stone-200/60 dark:bg-stone-900/60 p-1.5 rounded-full border border-stone-300/60 dark:border-rose-950/60 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-800 ${
                      isActive
                        ? "bg-rose-900 text-white shadow-sm shadow-rose-950/30"
                        : "text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-white hover:bg-stone-300/50 dark:hover:bg-rose-950/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Command Palette Trigger Button */}
              <button
                onClick={() => setCommandPaletteOpen(true)}
                title="Search Command Palette (Ctrl+K)"
                className="px-3 py-1.5 rounded-xl border border-stone-300/70 dark:border-rose-950/60 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 hover:border-rose-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-800 flex items-center gap-2 text-xs font-mono"
              >
                <Search className="w-3.5 h-3.5 text-rose-800 dark:text-rose-400" />
                <span className="hidden sm:inline-block text-[11px] text-stone-500 dark:text-stone-400">Search</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-800 rounded border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300">
                  Ctrl+K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className="p-2 rounded-xl border border-stone-300/70 dark:border-rose-950/60 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-mono text-xs font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Hire Roushan</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="md:hidden p-2 rounded-xl border border-stone-300 dark:border-rose-950/60 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-[#0f0a0d]/95 backdrop-blur-xl z-40 border-b border-rose-950/60 animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col justify-between p-6">
            <div className="space-y-3">
              <p className="text-xs font-mono text-stone-400 tracking-wider uppercase mb-4">
                Navigation Menu
              </p>
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl font-mono text-sm transition-all ${
                      isActive
                        ? "bg-rose-900/20 border border-rose-800/40 text-rose-300 font-semibold"
                        : "text-stone-300 hover:bg-rose-950/30 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-rose-500"></span>}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-rose-950/60 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCommandPaletteOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-900 border border-rose-950/60 text-stone-300 font-mono text-xs"
              >
                <Search className="w-3.5 h-3.5 text-rose-400" />
                <span>Search Command Palette (Ctrl+K)</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-900 text-white font-mono text-sm font-semibold hover:bg-rose-950 transition-colors shadow-sm"
              >
                <Code2 className="w-4 h-4" />
                <span>Let's Connect</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
