"use client";

import React from "react";
import { Server, Database, Shield, Globe, Mail, Cloud, Cpu, ArrowRight, ArrowDown } from "lucide-react";
import { projects } from "@/data/projects";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  const arch = project.architecture;

  // Custom node structures per project
  const getArchitectureNodes = () => {
    if (projectId === "oms") {
      return [
        {
          step: "01",
          label: "CLIENT LAYER",
          sub: "Next.js / React UI",
          detail: "Dynamic Role-Based Dashboards",
          icon: Globe,
        },
        {
          step: "02",
          label: "API & RBAC GUARD",
          sub: "Express REST Endpoints",
          detail: "5-Tier RBAC & JWT Verification",
          icon: Shield,
        },
        {
          step: "03",
          label: "BUSINESS LOGIC",
          sub: "Node.js Application Server",
          detail: "EOD, Leaves & Payroll Ledger",
          icon: Server,
        },
        {
          step: "04",
          label: "DATABASE & STORAGE",
          sub: "MySQL / TiDB Cloud",
          detail: "Prisma ORM & Cloudinary File API",
          icon: Database,
        },
      ];
    }

    if (projectId === "backbone-academy") {
      return [
        {
          step: "01",
          label: "DUAL FRONTEND",
          sub: "React + Vite SPA",
          detail: "Public Portal + Admin Management",
          icon: Globe,
        },
        {
          step: "02",
          label: "API MICROSERVICES",
          sub: "Node / Express API",
          detail: "Rate-Limiting & Payload Security",
          icon: Server,
        },
        {
          step: "03",
          label: "AUTH & NOTIFICATION",
          sub: "JWT Session Handler",
          detail: "Nodemailer SMTP OTP Dispatcher",
          icon: Mail,
        },
        {
          step: "04",
          label: "DATA & MEDIA CDN",
          sub: "TiDB Cloud MySQL",
          detail: "Distributed Cluster & Cloudinary",
          icon: Database,
        },
      ];
    }

    if (projectId === "zyvora") {
      return [
        {
          step: "01",
          label: "STOREFRONT UI",
          sub: "Next.js App Router",
          detail: "Optimistic Cart & Responsive WebP",
          icon: Globe,
        },
        {
          step: "02",
          label: "RESTFUL API LAYER",
          sub: "Express.js Backend",
          detail: "Encrypted JWT Cookie Auth",
          icon: Server,
        },
        {
          step: "03",
          label: "DATABASE ORM",
          sub: "Prisma ORM Engine",
          detail: "Product & Order Transactions",
          icon: Database,
        },
        {
          step: "04",
          label: "CLOUD STORAGE",
          sub: "Cloudinary Media CDN",
          detail: "Image Optimization & CDN",
          icon: Cloud,
        },
      ];
    }

    // Snapclass & Default
    return [
      {
        step: "01",
        label: "CLIENT & SERVER UI",
        sub: "Next.js App Router",
        detail: "Type-safe React Components",
        icon: Globe,
      },
      {
        step: "02",
        label: "SERVER ACTIONS",
        sub: "Next.js API Handlers",
        detail: "Role-Based Session Verification",
        icon: Server,
      },
      {
        step: "03",
        label: "DATA MODELING",
        sub: "Prisma Client ORM",
        detail: "End-to-End Type Safety",
        icon: Shield,
      },
      {
        step: "04",
        label: "DATABASE LAYER",
        sub: "MySQL Relational DB",
        detail: "Batch Roster & Attendance Ledgers",
        icon: Database,
      },
    ];
  };

  const nodes = getArchitectureNodes();

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-rose-950/60 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-rose-900 dark:text-rose-400" />
          <span>Multi-Tier System Architecture</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-[10px] font-semibold border border-rose-900/20">
          Decoupled Full-Stack Pattern
        </span>
      </div>

      {/* Visual Flow Nodes (Responsive Desktop Grid & Mobile Stack) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {nodes.map((node, index) => {
          const IconComponent = node.icon;
          const isLast = index === nodes.length - 1;

          return (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 relative">
              <div className="w-full p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-rose-950/60 flex flex-col justify-between space-y-2 hover:border-rose-800/40 transition-colors shadow-sm">
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-rose-900 dark:text-rose-400 bg-rose-900/10 dark:bg-rose-950/50 px-2 py-0.5 rounded border border-rose-900/20">
                    TIER {node.step}
                  </span>
                  <IconComponent className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-stone-900 dark:text-white uppercase tracking-tight">
                    {node.label}
                  </h4>
                  <p className="text-xs font-semibold text-rose-900 dark:text-rose-300">
                    {node.sub}
                  </p>
                </div>

                <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400 pt-1">
                  {node.detail}
                </p>

              </div>

              {/* Arrow connectors */}
              {!isLast && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex shrink-0 -mx-2 z-10">
                    <ArrowRight className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className="flex md:hidden my-1">
                    <ArrowDown className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Data Flow Explanation Box */}
      {arch.dataFlowExplanation && (
        <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-rose-950/60 space-y-1.5">
          <div className="text-[11px] font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider">
            Data Flow & Execution Path
          </div>
          <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
            {arch.dataFlowExplanation}
          </p>
        </div>
      )}

    </div>
  );
}
