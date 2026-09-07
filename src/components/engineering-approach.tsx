"use client";

import React from "react";
import { Layers, ShieldCheck, Server, Database, Layout, Code2, CheckCircle2 } from "lucide-react";

export function EngineeringApproach() {
  const principles = [
    {
      title: "Architecture First",
      icon: Layers,
      description: "Enforce strict separation of concerns across presentation components, API controllers, authorization middleware, and database ORMs."
    },
    {
      title: "Security & RBAC",
      icon: ShieldCheck,
      description: "Implement role-based access control (RBAC) with HTTP-only cookies and JWT bearer tokens to secure APIs and restrict UI views."
    },
    {
      title: "Predictable REST APIs",
      icon: Server,
      description: "Design intuitive API endpoints with structured request payload validation, clear HTTP status codes, and centralized error handlers."
    },
    {
      title: "Relational Data Modeling",
      icon: Database,
      description: "Construct normalized relational schemas using MySQL, Prisma ORM, and TiDB Cloud with transactional consistency."
    },
    {
      title: "User-Centric UX",
      icon: Layout,
      description: "Build clean, high-contrast, responsive interfaces that perform smoothly across mobile (320px) up to 4K displays."
    },
    {
      title: "Type Safety & Maintainability",
      icon: Code2,
      description: "Leverage end-to-end TypeScript types and reusable component abstractions to ensure maintainability without tech debt."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 font-mono text-xs font-semibold uppercase tracking-wider">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering Mindset & Standards
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            How I approach software design, code architecture, security, and production delivery.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
