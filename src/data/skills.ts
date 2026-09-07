export interface SkillGroup {
  title: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core programming and markup languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: "js", level: "Core", highlight: true },
      { name: "TypeScript", icon: "ts", level: "Core", highlight: true },
      { name: "Python", icon: "py", level: "Proficient" },
      { name: "Java", icon: "java", level: "Proficient" },
      { name: "HTML5", icon: "html", level: "Core" },
      { name: "CSS3", icon: "css", level: "Core" }
    ]
  },
  {
    title: "Frontend Architecture",
    description: "Modern UI frameworks, styling, and state management",
    skills: [
      { name: "React", icon: "react", level: "Core", highlight: true },
      { name: "Next.js (App Router)", icon: "next", level: "Core", highlight: true },
      { name: "Vue.js", icon: "vue", level: "Proficient" },
      { name: "Tailwind CSS", icon: "tailwind", level: "Core", highlight: true },
      { name: "MUI (Material UI)", icon: "mui", level: "Advanced" },
      { name: "Shadcn / UI", icon: "shadcn", level: "Advanced" },
      { name: "Vite", icon: "vite", level: "Advanced" }
    ]
  },
  {
    title: "Backend Engineering",
    description: "Server runtimes, microservices, and REST API development",
    skills: [
      { name: "Node.js", icon: "node", level: "Core", highlight: true },
      { name: "Express.js", icon: "express", level: "Core", highlight: true },
      { name: "RESTful APIs", icon: "api", level: "Core", highlight: true },
      { name: "JWT & Auth", icon: "auth", level: "Advanced", highlight: true },
      { name: "Role-Based Access (RBAC)", icon: "rbac", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "Database & ORM",
    description: "Relational database design, ORMs, and cloud data stores",
    skills: [
      { name: "MySQL", icon: "mysql", level: "Core", highlight: true },
      { name: "Prisma ORM", icon: "prisma", level: "Core", highlight: true },
      { name: "TiDB Cloud", icon: "tidb", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "Infrastructure & Services",
    description: "Media storage, email servers, version control, and production builds",
    skills: [
      { name: "Cloudinary CDN", icon: "cloudinary", level: "Advanced" },
      { name: "Nodemailer / SMTP", icon: "mail", level: "Advanced" },
      { name: "Git", icon: "git", level: "Core" },
      { name: "GitHub", icon: "github", level: "Core" },
      { name: "Production Deployment", icon: "deploy", level: "Advanced" }
    ]
  }
];
