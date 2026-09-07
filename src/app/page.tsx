import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { WhatIBuild } from "@/components/what-i-build";
import { Skills } from "@/components/skills";
import { EngineeringApproach } from "@/components/engineering-approach";
import { Journey } from "@/components/journey";
import { ResumeSection } from "@/components/resume-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-white">
      {/* 1. Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust & Technology Strip */}
        <TrustStrip />

        {/* 4. Selected Production Projects */}
        <Projects />

        {/* 5. Engineering Profile / About */}
        <About />

        {/* 6. What I Build Section */}
        <WhatIBuild />

        {/* 7. Technical Skills & Skill-to-Project Cross Filtering */}
        <Skills />

        {/* 8. Engineering Principles & Standards */}
        <EngineeringApproach />

        {/* 9. Development Journey & Academic History */}
        <Journey />

        {/* 10. Technical Profile & Resume CTA */}
        <ResumeSection />

        {/* 11. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
