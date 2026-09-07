"use client";

import React, { useState } from "react";
import { Server, Play, CheckCircle2, ShieldAlert, Code2, Copy, Check } from "lucide-react";

interface ApiEndpoint {
  id: string;
  name: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  headers: Record<string, string>;
  requestBody?: Record<string, any>;
  responseStatus: number;
  responseStatusText: string;
  responseBody: Record<string, any>;
}

export function ApiPlayground() {
  const endpoints: ApiEndpoint[] = [
    {
      id: "auth-login",
      name: "Authentication & Role Claim Generator",
      method: "POST",
      path: "/api/v1/auth/login",
      description: "Authenticates credentials and signs an encrypted JWT session cookie containing user RBAC role claims.",
      headers: { "Content-Type": "application/json" },
      requestBody: { email: "pm.roushan@company.com", password: "••••••••••••" },
      responseStatus: 200,
      responseStatusText: "OK",
      responseBody: {
        success: true,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload.sig...",
        user: {
          id: "usr_94820",
          name: "Roushan Kumar Verma",
          email: "pm.roushan@company.com",
          role: "PROJECT_MANAGER",
          permissions: ["PROJECT_WRITE", "TEAM_MANAGE", "EOD_APPROVE", "PAYROLL_VIEW"]
        }
      }
    },
    {
      id: "oms-tree",
      name: "OMS Hierarchical Tree (RBAC Guarded)",
      method: "GET",
      path: "/api/v1/oms/projects/tree",
      description: "Fetches nested project hierarchy tree for Admin → Project Manager → Team Leader → Employees.",
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1Ni..." },
      responseStatus: 200,
      responseStatusText: "OK",
      responseBody: {
        success: true,
        hierarchy: {
          project: "Zyvora & OMS Enterprise Suite",
          manager: "Roushan Kumar Verma",
          teams: [
            {
              teamLeader: "TL_Backend_Engineers",
              members: 6,
              activeEODsToday: 6,
              status: "ON_TRACK"
            }
          ]
        }
      }
    },
    {
      id: "backbone-otp",
      name: "Backbone Academy OTP Dispatcher",
      method: "POST",
      path: "/api/v1/backbone/otp/verify",
      description: "Verifies 6-digit email OTP dispatched via Nodemailer / SMTP for student registration.",
      headers: { "Content-Type": "application/json" },
      requestBody: { email: "student@backbone.edu", otpCode: "749201" },
      responseStatus: 200,
      responseStatusText: "OK",
      responseBody: {
        success: true,
        verified: true,
        message: "Email verified successfully via Nodemailer SMTP. Student account activated."
      }
    },
    {
      id: "contact-form",
      name: "Portfolio Contact Dispatch API",
      method: "POST",
      path: "/api/contact",
      description: "Direct contact endpoint processing incoming inquiries via Nodemailer SMTP server.",
      headers: { "Content-Type": "application/json" },
      requestBody: { name: "Recruiter / Hiring Lead", email: "lead@company.com", message: "Discussing Full-Stack Developer position." },
      responseStatus: 200,
      responseStatusText: "OK",
      responseBody: {
        success: true,
        message: "Your message has been sent successfully to Roushan's developer inbox!"
      }
    }
  ];

  const [activeEndpoint, setActiveEndpoint] = useState<ApiEndpoint>(endpoints[0]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executed, setExecuted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExecute = () => {
    setIsExecuting(true);
    setExecuted(false);
    setTimeout(() => {
      setIsExecuting(false);
      setExecuted(true);
    }, 450);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(activeEndpoint.responseBody, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl space-y-6 font-mono">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <Server className="w-5 h-5 text-sky-400" />
          <div>
            <h3 className="text-lg font-bold text-white font-mono">REST API Contract Playground</h3>
            <p className="text-xs text-slate-400 font-sans">Simulate real production API endpoints designed by Roushan.</p>
          </div>
        </div>

        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-sky-600/20 disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5" />
          <span>{isExecuting ? "Executing..." : "Execute Test Request"}</span>
        </button>
      </div>

      {/* Endpoint Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin text-xs">
        {endpoints.map((ep) => (
          <button
            key={ep.id}
            onClick={() => {
              setActiveEndpoint(ep);
              setExecuted(false);
            }}
            className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap flex items-center gap-2 ${
              activeEndpoint.id === ep.id
                ? "bg-sky-500/15 border-sky-500/40 text-sky-300 font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
              ep.method === "GET" ? "bg-emerald-500/20 text-emerald-400" : "bg-sky-500/20 text-sky-400"
            }`}>
              {ep.method}
            </span>
            <span>{ep.name}</span>
          </button>
        ))}
      </div>

      {/* Endpoint Request Bar */}
      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5 overflow-x-auto">
          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold">
            {activeEndpoint.method}
          </span>
          <span className="text-slate-100 font-bold">{activeEndpoint.path}</span>
        </div>
        <span className="text-[11px] text-slate-500 hidden sm:inline-block">200 OK</span>
      </div>

      <p className="text-xs text-slate-400 font-sans leading-relaxed">
        {activeEndpoint.description}
      </p>

      {/* Request & Response Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Request Side */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
            Request Body & Headers
          </div>
          <pre className="p-3 rounded-lg bg-slate-950 text-sky-300 overflow-x-auto max-h-48 text-[11px]">
            {JSON.stringify(activeEndpoint.requestBody || activeEndpoint.headers, null, 2)}
          </pre>
        </div>

        {/* Response Side */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs relative">
          <div className="flex items-center justify-between">
            <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Response 200 OK</span>
            </div>
            <button
              onClick={copyResponse}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>Copy</span>
            </button>
          </div>
          <pre className="p-3 rounded-lg bg-slate-950 text-emerald-300 overflow-x-auto max-h-48 text-[11px]">
            {JSON.stringify(activeEndpoint.responseBody, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
