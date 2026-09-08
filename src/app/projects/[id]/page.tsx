import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Layers, AlertCircle, Wrench, Award } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ProjectShare } from "@/components/project-share";
import { PortfolioCTA } from "@/components/portfolio-cta";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} Case Study — Roushan Kumar Verma`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} — Full-Stack Technical Case Study`,
      description: project.overview,
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-[#0f0a0d] text-stone-900 dark:text-stone-100 font-sans antialiased">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation */}
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-rose-950/60 text-stone-700 dark:text-stone-300 hover:text-rose-900 dark:hover:text-rose-400 font-mono text-xs transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-rose-900 dark:text-rose-400" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 shadow-lg space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border border-rose-900/20 font-mono text-xs font-semibold">
                {project.badge}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-stone-500">
                  Category: {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono text-[11px]">
                  {project.status}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
                {project.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-rose-900 dark:text-rose-400 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Overview */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider">
                1. Project Overview
              </h2>
              <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                {project.overview}
              </p>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-stone-200 dark:border-rose-950/60">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-900 dark:text-white font-mono text-xs font-semibold flex items-center gap-2 border border-stone-300 dark:border-stone-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-rose-900 hover:bg-rose-950 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Problem & Solution Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 2. The Problem */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-4">
              <h3 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                2. The Problem Solved
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            {/* 3. The Solution */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-4">
              <h3 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                3. The System Solution
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>

          </div>

          {/* 4. Multi-Tier System Architecture (Feature 2) */}
          <div className="space-y-4">
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* 5. Key Features */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
              <Layers className="w-5 h-5 text-rose-900 dark:text-rose-400" />
              4. Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-rose-950/60">
                  <CheckCircle2 className="w-4 h-4 text-rose-900 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Technology Stack */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-4">
            <h3 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider">
              5. Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-mono text-xs border border-stone-200 dark:border-rose-950/60 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 7. Technical Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-4">
              <h3 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                6. Technical Challenges Solved
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-3">
                    <span className="text-rose-900 dark:text-rose-400 font-mono font-bold shrink-0 mt-0.5">•</span>
                    <span className="font-sans">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 8. What This Project Demonstrates */}
          {project.demonstrates && project.demonstrates.length > 0 && (
            <div className="p-8 rounded-3xl bg-white dark:bg-[#160d12] border border-stone-200 dark:border-rose-950/60 space-y-4">
              <h3 className="text-xs font-mono font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-900 dark:text-rose-400" />
                7. What This Project Demonstrates
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.demonstrates.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-rose-900/10 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 font-mono text-xs font-semibold border border-rose-900/20"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Sharing */}
          <ProjectShare title={project.name} url={`/projects/${project.id}`} />

          {/* Call To Action (Feature 4) */}
          <PortfolioCTA />

        </div>
      </main>

      <Footer />
    </div>
  );
}
