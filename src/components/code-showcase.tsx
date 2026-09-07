"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, FileCode, ShieldCheck, Database, Mail } from "lucide-react";

interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  category: string;
  icon: any;
  code: string;
}

export function CodeShowcase() {
  const snippets: CodeSnippet[] = [
    {
      id: "rbac",
      filename: "rbac-middleware.ts",
      language: "typescript",
      category: "Security & Authorization",
      icon: ShieldCheck,
      code: `import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export type Role = "ADMIN" | "PROJECT_MANAGER" | "TEAM_LEADER" | "EMPLOYEE";

const ROLE_HIERARCHY: Record<Role, number> = {
  ADMIN: 4,
  PROJECT_MANAGER: 3,
  TEAM_LEADER: 2,
  EMPLOYEE: 1,
};

export const requireRole = (minimumRole: Role) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, error: "Unauthorized access token missing." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: Role };
      const userLevel = ROLE_HIERARCHY[decoded.role] || 0;
      const requiredLevel = ROLE_HIERARCHY[minimumRole];

      if (userLevel < requiredLevel) {
        return res.status(403).json({ success: false, error: "Forbidden: Insufficient RBAC permission level." });
      }

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ success: false, error: "Invalid or expired session token." });
    }
  };
};`
    },
    {
      id: "prisma",
      filename: "schema.prisma",
      language: "prisma",
      category: "Database Relational Models",
      icon: Database,
      code: `datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  ADMIN
  PROJECT_MANAGER
  TEAM_LEADER
  EMPLOYEE
}

model User {
  id           String       @id @default(uuid())
  email        String       @unique
  passwordHash String
  name         String
  role         Role         @default(EMPLOYEE)
  projects     Project[]    @relation("UserProjects")
  attendance   Attendance[]
  createdEODs  EODReport[]
  createdAt    DateTime     @default(now())
  updatedAt    DateTime     @updatedAt
}

model Project {
  id          String   @id @default(uuid())
  name        String
  description String?  @db.Text
  managerId   String
  members     User[]   @relation("UserProjects")
  createdAt   DateTime @default(now())
}`
    },
    {
      id: "otp",
      filename: "otp-service.ts",
      language: "typescript",
      category: "Nodemailer SMTP Integration",
      icon: Mail,
      code: `import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const generateAndSendOTP = async (recipientEmail: string): Promise<string> => {
  const otpCode = crypto.randomInt(100000, 999999).toString();

  await transporter.sendMail({
    from: '"Backbone Academy" <noreply@backbone-academy.edu>',
    to: recipientEmail,
    subject: "Verification OTP Code — Backbone Academy Account Activation",
    html: \`
      <div style="font-family: monospace; padding: 20px;">
        <h2>Backbone Academy OTP Verification</h2>
        <p>Your one-time authentication code is:</p>
        <h1 style="color: #0284c7; letter-spacing: 4px;">\${otpCode}</h1>
        <p>This code expires in 10 minutes.</p>
      </div>
    \`,
  });

  return otpCode;
};`
    }
  ];

  const [activeSnippet, setActiveSnippet] = useState<CodeSnippet>(snippets[0]);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl space-y-6 font-mono">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <Code2 className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-lg font-bold text-white font-mono">Production Architecture Code Patterns</h3>
            <p className="text-xs text-slate-400 font-sans">Inspect actual TypeScript & Prisma implementations written by Roushan.</p>
          </div>
        </div>

        <button
          onClick={copyCode}
          className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied to Clipboard" : "Copy Code"}</span>
        </button>
      </div>

      {/* Code File Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin text-xs">
        {snippets.map((snip) => {
          const Icon = snip.icon;
          return (
            <button
              key={snip.id}
              onClick={() => setActiveSnippet(snip)}
              className={`px-3 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-2 ${
                activeSnippet.id === snip.id
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{snip.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Window */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden">
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <FileCode className="w-3.5 h-3.5 text-sky-400" />
            <span>{activeSnippet.filename}</span>
          </div>
          <span className="text-[11px] text-slate-500">{activeSnippet.category}</span>
        </div>

        <pre className="p-4 sm:p-6 overflow-x-auto text-xs text-slate-200 leading-relaxed max-h-96 font-mono scrollbar-thin scrollbar-thumb-slate-800">
          <code>{activeSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
