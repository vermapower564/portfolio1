import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Roushan Kumar Verma — Full-Stack Developer",
  description: "Get in touch with Roushan Kumar Verma for full-stack engineering opportunities, web development projects, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
