"use client";

import React from "react";
import { Building2, ShoppingBag, GraduationCap, Server, Shield, Database, ArrowRight } from "lucide-react";

export function WhatIBuild() {
  const capabilities = [
    {
      title: "Business & ERP Systems",
      icon: Building2,
      badge: "Enterprise",
      description: "Operations management platforms (OMS) handling multi-level corporate hierarchies, attendance tracking, EOD updates, leave pipelines, and payroll reporting.",
      tech: "Node.js • Express • React • MySQL • Prisma",
      link: "#projects"
    },
    {
      title: "E-Commerce Marketplaces",
      icon: ShoppingBag,
      badge: "Marketplace",
      description: "Full-stack shopping applications (Zyvora) featuring fast product filtering, cart state management, user session persistence, and image CDN transformations.",
      tech: "Next.js • React • Tailwind • Cloudinary",
      link: "#projects"
    },
    {
      title: "EdTech & Academic Portals",
      icon: GraduationCap,
      badge: "Education",
      description: "Dual-engine educational systems (Backbone Academy & Snapclass) separating public marketing from internal student/teacher dashboards, OTP auth, and gradebooks.",
      tech: "React • Node.js • TiDB Cloud • SMTP",
      link: "#projects"
    },
    {
      title: "RESTful API Architecture",
      icon: Server,
      badge: "Backend",
      description: "Structured backend micro-endpoints engineered with input payload validation, JSON Web Token (JWT) bearer authorization, and central exception logging.",
      tech: "Express.js • Node.js • REST • JWT",
      link: "#projects"
    },
    {
      title: "Role-Based Access Systems",
      icon: Shield,
      badge: "Security",
      description: "Granular authorization middleware (5-tier RBAC) controlling UI route access and database query mutation based on authenticated user claims.",
      tech: "RBAC • HTTP-Only Cookies • JWT",
      link: "#projects"
    },
    {
      title: "Database-Driven Applications",
      icon: Database,
      badge: "Data",
      description: "Relational database modeling, entity relationships, transactional query execution, and ORM abstractions using MySQL, Prisma, and TiDB Cloud.",
      tech: "MySQL • Prisma ORM • TiDB Cloud",
      link: "#projects"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 font-mono text-xs font-semibold uppercase tracking-wider">
            Software Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What I Build & Architect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world software domains supported by production-tested projects in my portfolio.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all duration-300 space-y-4 group hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{item.tech}</span>
                  <a
                    href={item.link}
                    className="p-1 rounded text-sky-500 hover:text-sky-400 transition-colors"
                    aria-label={`View ${item.title} projects`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
