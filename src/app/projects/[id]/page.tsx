import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Layers, Share2 } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ProjectShare } from "@/components/project-share";
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
      title: `${project.name} — Full-Stack Case Study`,
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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation */}
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-sky-400" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500">
                Category: {project.category}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {project.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-sky-400 font-medium">
                {project.tagline}
              </p>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {project.overview}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-sky-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Problem & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                The Real-World Problem
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-3">
              <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                The Technical Solution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Visual Flow */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-400" />
              Multi-Tier System Architecture
            </h3>
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* Core Features */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              System Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="p-6 sm:p-8 rounded-3xl bg-indigo-950/40 border border-indigo-500/30 space-y-4">
            <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              Engineering Highlights & Design Decisions
            </h3>
            <ul className="space-y-3">
              {project.engineeringHighlights.map((hl, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <span className="text-indigo-400 font-mono font-bold">•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Sharing Bar */}
          <ProjectShare title={project.name} url={`/projects/${project.id}`} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
