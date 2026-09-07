import Link from "next/link";
import { Terminal, Home, Folder, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-20">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 mx-auto flex items-center justify-center font-mono text-2xl font-bold">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed">
              The requested route does not exist on this server. Please check the URL or navigate back.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold transition-colors shadow-lg shadow-sky-600/20 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-mono text-xs font-medium border border-slate-800 transition-colors flex items-center gap-2"
            >
              <Folder className="w-4 h-4 text-sky-400" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
