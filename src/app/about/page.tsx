import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { EngineeringApproach } from "@/components/engineering-approach";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Roushan Kumar Verma — Full-Stack Developer",
  description: "Learn about Roushan Kumar Verma's educational qualifications (MCA 2024-2026 Ranchi University, B.Sc. Mathematics), full-stack development philosophy, and software engineering capabilities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-24">
        <About />
        <EngineeringApproach />
      </main>
      <Footer />
    </div>
  );
}
