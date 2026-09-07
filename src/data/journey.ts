export interface JourneyMilestone {
  year: string;
  title: string;
  category: "Education" | "Full-Stack" | "Enterprise" | "Engineering";
  subtitle: string;
  description: string;
  highlights: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2024 – 2026",
    title: "Master of Computer Applications (MCA)",
    category: "Education",
    subtitle: "Advanced Software Engineering & Distributed Systems",
    description: "Pursuing MCA with a focus on advanced full-stack web development, database management systems, software architecture patterns, and algorithm optimization.",
    highlights: [
      "Specialization in Full-Stack Web Technologies & REST APIs",
      "Deep study of Relational DB Schemas, Query Optimization & Prisma ORM",
      "Building scalable multi-tier web software architectures"
    ]
  },
  {
    year: "Foundation",
    title: "Bachelor of Science (B.Sc.) — Mathematics",
    category: "Education",
    subtitle: "Analytical Rigor & Mathematical Logic",
    description: "Graduated with a B.Sc. in Mathematics, building strong analytical skills, discrete mathematics fundamentals, and algorithmic problem-solving capabilities.",
    highlights: [
      "Mathematical logic, graph theory, and quantitative analysis",
      "Foundation for complex state logic, algorithms, and computational efficiency"
    ]
  },
  {
    year: "Production Architecture",
    title: "Enterprise Platform Engineering (OMS)",
    category: "Enterprise",
    subtitle: "Multi-Tier Role-Based Access Control (RBAC)",
    description: "Engineered OMS (Operations Management System), a comprehensive ERP/CRM platform managing organizational hierarchies (Admin → PM → TL → Employee), project teams, attendance, EOD updates, and payroll analytics.",
    highlights: [
      "Architected 5-tier role-based access control middleware",
      "Designed normalized MySQL schemas mapped via Prisma & TiDB Cloud"
    ]
  },
  {
    year: "Real-World Platforms",
    title: "EdTech & E-Commerce Applications",
    category: "Full-Stack",
    subtitle: "Backbone Academy, Zyvora & Snapclass",
    description: "Developed production-ready web applications combining modern frontend experiences (React/Next.js/Tailwind) with robust backend engines (Node/Express/REST APIs/Cloudinary/SMTP).",
    highlights: [
      "Built Backbone Academy: Dual public academy portal & internal management system with SMTP OTP verification",
      "Built Zyvora: Scalable full-stack e-commerce store with product architecture",
      "Built Snapclass: Smart classroom & attendance platform in TypeScript & Next.js"
    ]
  }
];
