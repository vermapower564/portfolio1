import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { GithubSection } from "@/components/github-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Software Engineering Projects — Roushan Kumar Verma",
  description: "Production software applications engineered by Roushan Kumar Verma: OMS Enterprise ERP, Zyvora E-Commerce, Backbone Academy EdTech, and Snapclass Classroom Platform.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-24">
        <Projects />
        <GithubSection />
      </main>
      <Footer />
    </div>
  );
}
