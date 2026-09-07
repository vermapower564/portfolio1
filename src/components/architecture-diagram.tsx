"use client";

import React from "react";
import { Server, Database, Shield, Globe, Mail, Cloud, Cpu, ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "oms") {
    return (
      <div className="p-6 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-6 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-bold text-sky-400 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            OMS System Architecture & RBAC Flow
          </span>
          <span className="text-[10px] text-slate-500">Tier 5 Security Pattern</span>
        </div>

        {/* Visual Tier Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
          {/* User Tier */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <Globe className="w-4 h-4 text-sky-400 mx-auto" />
            <div className="font-semibold text-slate-100">CLIENT LAYER</div>
            <div className="text-[10px] text-slate-400">React / Next.js UI</div>
          </div>

          {/* API Tier */}
          <div className="p-3 rounded-xl bg-slate-900 border border-sky-900/40 text-sky-300 space-y-1">
            <Server className="w-4 h-4 text-sky-400 mx-auto" />
            <div className="font-semibold">RESTful API</div>
            <div className="text-[10px] text-sky-400/80">Express.js Endpoints</div>
          </div>

          {/* RBAC Guard Tier */}
          <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 space-y-1">
            <Shield className="w-4 h-4 text-indigo-400 mx-auto" />
            <div className="font-semibold">5-TIER RBAC</div>
            <div className="text-[10px] text-indigo-300">Admin ➔ PM ➔ TL ➔ Emp</div>
          </div>

          {/* Database Tier */}
          <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-200 space-y-1">
            <Database className="w-4 h-4 text-amber-400 mx-auto" />
            <div className="font-semibold">DATABASE</div>
            <div className="text-[10px] text-amber-300">MySQL via Prisma</div>
          </div>

          {/* External Tier */}
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 space-y-1">
            <Cloud className="w-4 h-4 text-emerald-400 mx-auto" />
            <div className="font-semibold">SERVICES</div>
            <div className="text-[10px] text-emerald-300">Cloudinary & Storage</div>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <strong className="text-sky-400 font-semibold">Hierarchy Guard:</strong> Access token carries user role claim. Middleware verifies target resource ownership against the organizational tree before executing service methods.
        </div>
      </div>
    );
  }

  if (projectId === "backbone-academy") {
    return (
      <div className="p-6 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-6 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-bold text-emerald-400 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Backbone Academy Dual-Engine Architecture
          </span>
          <span className="text-[10px] text-slate-500">Public + Managed Engine</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <Globe className="w-4 h-4 text-sky-400 mx-auto" />
            <div className="font-semibold text-slate-100">DUAL FRONTEND</div>
            <div className="text-[10px] text-slate-400">Public Site & Admin Portal</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-emerald-900/40 text-emerald-300 space-y-1">
            <Server className="w-4 h-4 text-emerald-400 mx-auto" />
            <div className="font-semibold">EXPRESS API</div>
            <div className="text-[10px] text-emerald-400/80">Node Server Microservice</div>
          </div>

          <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 space-y-1">
            <Mail className="w-4 h-4 text-purple-400 mx-auto" />
            <div className="font-semibold">SMTP / NODEMAILER</div>
            <div className="text-[10px] text-purple-300">OTP Auth & Mail Dispatch</div>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-200 space-y-1">
            <Database className="w-4 h-4 text-amber-400 mx-auto" />
            <div className="font-semibold">TiDB CLOUD</div>
            <div className="text-[10px] text-amber-300">Distributed MySQL Cluster</div>
          </div>
        </div>
      </div>
    );
  }

  // Default / Zyvora / Snapclass
  return (
    <div className="p-6 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-6 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <span className="font-bold text-sky-400 flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          Full-Stack Web Architecture
        </span>
        <span className="text-[10px] text-slate-500">Client-Server Pattern</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <Globe className="w-4 h-4 text-sky-400 mx-auto" />
          <div className="font-semibold text-slate-100">CLIENT UI</div>
          <div className="text-[10px] text-slate-400">Next.js / React / Tailwind</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900 border border-sky-900/40 text-sky-300 space-y-1">
          <Server className="w-4 h-4 text-sky-400 mx-auto" />
          <div className="font-semibold">BACKEND API</div>
          <div className="text-[10px] text-sky-400/80">Node.js Express / Actions</div>
        </div>

        <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-200 space-y-1">
          <Database className="w-4 h-4 text-amber-400 mx-auto" />
          <div className="font-semibold">MYSQL / PRISMA</div>
          <div className="text-[10px] text-amber-300">Relational Database Schemas</div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 space-y-1">
          <Cloud className="w-4 h-4 text-emerald-400 mx-auto" />
          <div className="font-semibold">MEDIA & CDN</div>
          <div className="text-[10px] text-emerald-300">Cloudinary CDN</div>
        </div>
      </div>
    </div>
  );
}
