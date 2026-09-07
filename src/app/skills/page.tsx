import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { CodeSuite } from "@/components/code-suite";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Technical Skills & Stack — Roushan Kumar Verma",
  description: "Explore Roushan Kumar Verma's production technical stack across React, Next.js, Node.js, Express, MySQL, Prisma ORM, TiDB Cloud, and REST API architecture.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-24">
        <Skills />
        <CodeSuite />
      </main>
      <Footer />
    </div>
  );
}
