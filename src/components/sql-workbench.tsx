"use client";

import React, { useState } from "react";
import { Database, Table, Key, HardDrive, Cpu, Terminal, CheckCircle2 } from "lucide-react";

interface DatabaseSchema {
  id: string;
  name: string;
  engine: string;
  tablesCount: number;
  tables: {
    name: string;
    columns: { name: string; type: string; key?: string }[];
  }[];
  sampleQuery: string;
}

export function SqlWorkbench() {
  const schemas: DatabaseSchema[] = [
    {
      id: "oms-db",
      name: "OMS Corporate DB Schema",
      engine: "MySQL / Prisma ORM",
      tablesCount: 8,
      tables: [
        {
          name: "users",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "email", type: "VARCHAR(255)", key: "UNIQUE" },
            { name: "role", type: "ENUM('ADMIN','PM','TL','EMP')" },
            { name: "manager_id", type: "UUID", key: "FK" }
          ]
        },
        {
          name: "projects",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "name", type: "VARCHAR(255)" },
            { name: "pm_id", type: "UUID", key: "FK" },
            { name: "status", type: "VARCHAR(50)" }
          ]
        },
        {
          name: "eod_reports",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "employee_id", type: "UUID", key: "FK" },
            { name: "hours_worked", type: "DECIMAL(4,2)" },
            { name: "report_date", type: "DATE" }
          ]
        }
      ],
      sampleQuery: `SELECT u.name, u.role, p.name AS project_name, COUNT(e.id) AS eods_this_month
FROM users u
LEFT JOIN projects p ON u.manager_id = p.pm_id
LEFT JOIN eod_reports e ON u.id = e.employee_id
WHERE u.role IN ('TEAM_LEADER', 'EMPLOYEE')
GROUP BY u.id, p.id;`
    },
    {
      id: "zyvora-db",
      name: "Zyvora E-Commerce DB Schema",
      engine: "MySQL / Prisma",
      tablesCount: 6,
      tables: [
        {
          name: "products",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "title", type: "VARCHAR(255)" },
            { name: "price", type: "DECIMAL(10,2)" },
            { name: "stock", type: "INT" }
          ]
        },
        {
          name: "orders",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "user_id", type: "UUID", key: "FK" },
            { name: "total_amount", type: "DECIMAL(10,2)" }
          ]
        }
      ],
      sampleQuery: `SELECT p.id, p.title, p.price, SUM(oi.quantity) AS total_units_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.id
ORDER BY total_units_sold DESC
LIMIT 10;`
    },
    {
      id: "backbone-db",
      name: "Backbone Academy Distributed DB",
      engine: "TiDB Cloud (Distributed MySQL)",
      tablesCount: 10,
      tables: [
        {
          name: "students",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "student_id_num", type: "VARCHAR(50)", key: "UNIQUE" },
            { name: "verified", type: "BOOLEAN" }
          ]
        },
        {
          name: "attendance_records",
          columns: [
            { name: "id", type: "UUID", key: "PK" },
            { name: "student_id", type: "UUID", key: "FK" },
            { name: "date", type: "DATE" },
            { name: "status", type: "ENUM('PRESENT','ABSENT')" }
          ]
        }
      ],
      sampleQuery: `SELECT s.student_id_num, s.verified,
  ROUND(SUM(CASE WHEN a.status = 'PRESENT' THEN 1 ELSE 0 END) * 100.0 / COUNT(a.id), 2) AS attendance_percentage
FROM students s
JOIN attendance_records a ON s.id = a.student_id
GROUP BY s.id;`
    }
  ];

  const [activeSchema, setActiveSchema] = useState<DatabaseSchema>(schemas[0]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl space-y-6 font-mono">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <Database className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="text-lg font-bold text-white font-mono">Relational Database & SQL Schema Workbench</h3>
            <p className="text-xs text-slate-400 font-sans">Inspect normalized relational tables & query optimization logic.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-xl">
          <HardDrive className="w-3.5 h-3.5" />
          <span>{activeSchema.engine}</span>
        </div>
      </div>

      {/* Schema Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin text-xs">
        {schemas.map((sch) => (
          <button
            key={sch.id}
            onClick={() => setActiveSchema(sch)}
            className={`px-3.5 py-2 rounded-xl border transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSchema.id === sch.id
                ? "bg-amber-500/15 border-amber-500/40 text-amber-300 font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Table className="w-3.5 h-3.5 text-amber-400" />
            <span>{sch.name}</span>
          </button>
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {activeSchema.tables.map((table, tIdx) => (
          <div key={tIdx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-slate-100 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-amber-400" />
                <span>{table.name}</span>
              </span>
              <span className="text-[10px] text-slate-500">{table.columns.length} cols</span>
            </div>

            <div className="space-y-1.5">
              {table.columns.map((col, cIdx) => (
                <div key={cIdx} className="flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    {col.key && (
                      <span className={`text-[9px] font-bold px-1 rounded ${
                        col.key === "PK" ? "bg-amber-500/20 text-amber-400" : "bg-sky-500/20 text-sky-400"
                      }`}>
                        {col.key}
                      </span>
                    )}
                    <span>{col.name}</span>
                  </div>
                  <span className="text-slate-500 text-[10px]">{col.type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sample Query Code Window */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span>Production SQL Query & Aggregation Benchmark</span>
        </div>
        <pre className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-amber-300 text-xs overflow-x-auto leading-relaxed max-h-40">
          <code>{activeSchema.sampleQuery}</code>
        </pre>
      </div>
    </div>
  );
}
