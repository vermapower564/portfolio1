import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Journey } from "@/components/journey";
import { ResumeSection } from "@/components/resume-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Education & Development Journey — Roushan Kumar Verma",
  description: "Academic qualification timeline of Roushan Kumar Verma: Master of Computer Applications (MCA 2024-2026 Ranchi University) and B.Sc. Mathematics.",
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-24">
        <Journey />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
