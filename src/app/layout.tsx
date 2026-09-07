import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roushan Kumar Verma — Full-Stack Developer",
  description: "Full-Stack Developer specializing in modern web applications, multi-tier Role-Based Access Control (RBAC), RESTful APIs, and cloud database architectures (MySQL, Prisma, TiDB Cloud). MCA Student (2024–2026).",
  keywords: [
    "Roushan Kumar Verma",
    "Full-Stack Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "TypeScript",
    "MySQL",
    "Prisma ORM",
    "TiDB Cloud",
    "RBAC Architecture",
    "REST APIs",
    "Operations Management System",
    "Backbone Academy",
    "Zyvora",
    "Snapclass"
  ],
  authors: [{ name: "Roushan Kumar Verma" }],
  creator: "Roushan Kumar Verma",
  openGraph: {
    title: "Roushan Kumar Verma — Full-Stack Developer",
    description: "Full-Stack Developer building scalable, production-ready web applications with modern frontend architectures, robust backend APIs, and efficient database designs.",
    url: "https://roushanverma.dev",
    siteName: "Roushan Kumar Verma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roushan Kumar Verma — Full-Stack Developer",
    description: "Full-Stack Developer building scalable, production-ready web applications with modern frontend architectures, robust backend APIs, and efficient database designs.",
    creator: "@roushanverma",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roushan Kumar Verma",
    jobTitle: "Full-Stack Developer",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Master of Computer Applications (MCA 2024–2026)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Bachelor of Science (B.Sc.) — Mathematics",
      },
    ],
    knowsAbout: [
      "Full-Stack Web Engineering",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "Prisma ORM",
      "TiDB Cloud",
      "Role-Based Access Control (RBAC)",
      "REST APIs",
    ],
    url: "https://roushanverma.dev",
    sameAs: [
      "https://github.com/roushanverma",
      "https://linkedin.com/in/roushanverma",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-sky-500/30 selection:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
