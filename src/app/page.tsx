import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Projects } from "@/components/projects";
import { CurrentlyBuilding } from "@/components/currently-building";
import { About } from "@/components/about";
import { WhatIBuild } from "@/components/what-i-build";
import { Skills } from "@/components/skills";
import { EngineeringApproach } from "@/components/engineering-approach";
import { CodeSuite } from "@/components/code-suite";
import { Journey } from "@/components/journey";
import { ResumeSection } from "@/components/resume-section";
import { PortfolioCTA } from "@/components/portfolio-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0a0d] text-stone-900 dark:text-stone-100 font-sans antialiased selection:bg-rose-900/30 selection:text-white">
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

        {/* 5. Feature 3: Currently Building & Active Engineering Work */}
        <CurrentlyBuilding />

        {/* 6. Engineering Profile / About */}
        <About />

        {/* 7. What I Build Section */}
        <WhatIBuild />

        {/* 8. Technical Skills & Cross Filtering */}
        <Skills />

        {/* 9. Engineering Principles & Standards */}
        <EngineeringApproach />

        {/* 10. Developer Depth Suite (Code, API Playground, SQL Workbench) */}
        <CodeSuite />

        {/* 11. Development Journey & Academic History */}
        <Journey />

        {/* 12. Technical Profile & Resume CTA */}
        <ResumeSection />

        {/* 13. Feature 4: Professional Call To Action */}
        <PortfolioCTA />

        {/* 14. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
