export interface UsedInProject {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database & ORM" | "Development Tools" | "Architecture & Engineering";
  proficiency: "Core Technology" | "Used in Production" | "Project Experience" | "Working Knowledge";
  description: string;
  usedInProjects: UsedInProject[];
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  category: "Frontend" | "Backend" | "Database & ORM" | "Development Tools" | "Architecture & Engineering";
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    category: "Frontend",
    title: "Frontend Engineering",
    description: "Production UI frameworks, type safety, styling engines, and responsive layouts",
    skills: [
      {
        name: "React (v18)",
        category: "Frontend",
        proficiency: "Core Technology",
        description: "Component-based UI architecture with state hooks, custom context, and layout composition.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Next.js (v14 App Router)",
        category: "Frontend",
        proficiency: "Core Technology",
        description: "Static site generation (SSG), server-side rendering (SSR), and file-based dynamic App Router routing.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "TypeScript",
        category: "Frontend",
        proficiency: "Core Technology",
        description: "Strict static typing, custom interface models, end-to-end type safety, and generics.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Tailwind CSS (v3)",
        category: "Frontend",
        proficiency: "Core Technology",
        description: "Utility-first styling with responsive design tokens, dark/light theme systems, and custom UI components.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "HTML5 & CSS3",
        category: "Frontend",
        proficiency: "Core Technology",
        description: "Semantic document structure, flexbox, grid systems, custom scrollbars, and accessible markup.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ]
      },
      {
        name: "Framer Motion & Lucide Icons",
        category: "Frontend",
        proficiency: "Used in Production",
        description: "Smooth UI animations, modal overlays, interactive command palettes, and icon suites.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" }
        ]
      }
    ]
  },
  {
    category: "Backend",
    title: "Backend & API Architecture",
    description: "Server runtimes, RESTful API endpoints, request validation, and email dispatchers",
    skills: [
      {
        name: "Node.js",
        category: "Backend",
        proficiency: "Core Technology",
        description: "Server-side JavaScript runtime powering REST APIs, micro-endpoints, and build tooling.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "RESTful APIs & Next.js Serverless Routes",
        category: "Backend",
        proficiency: "Core Technology",
        description: "Structured HTTP methods (GET, POST), JSON request/response formats, payload validation, and status codes.",
        usedInProjects: [
          { name: "Portfolio (/api/contact)", href: "/contact" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Express.js",
        category: "Backend",
        proficiency: "Used in Production",
        description: "Application server framework handling API routing, middleware pipelines, and JWT session verification.",
        usedInProjects: [
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" }
        ]
      },
      {
        name: "Nodemailer / SMTP Services",
        category: "Backend",
        proficiency: "Used in Production",
        description: "Server-side email integration for contact form notifications, OTP verification, and email alerts.",
        usedInProjects: [
          { name: "Portfolio", href: "/contact" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" }
        ]
      }
    ]
  },
  {
    category: "Database & ORM",
    title: "Database Architecture & Data Modeling",
    description: "Relational data design, ORM schemas, transactional queries, and cloud data stores",
    skills: [
      {
        name: "Relational SQL & Schema Design",
        category: "Database & ORM",
        proficiency: "Core Technology",
        description: "Entity-relationship modeling, table normalization, primary/foreign keys, joins, and SQL query benchmarks.",
        usedInProjects: [
          { name: "Portfolio (SQL Workbench)", href: "#code-suite" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "MySQL",
        category: "Database & ORM",
        proficiency: "Core Technology",
        description: "Relational database management system storing structured user, corporate, inventory, and gradebook data.",
        usedInProjects: [
          { name: "Portfolio", href: "#code-suite" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Prisma ORM",
        category: "Database & ORM",
        proficiency: "Core Technology",
        description: "Type-safe database client, schema definitions, automated migrations, and transactional upsert operations.",
        usedInProjects: [
          { name: "Portfolio", href: "#code-suite" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "TiDB Cloud (Distributed MySQL)",
        category: "Database & ORM",
        proficiency: "Used in Production",
        description: "Cloud-native distributed MySQL database supporting elastic scaling and high-availability queries.",
        usedInProjects: [
          { name: "Portfolio (SQL Workbench)", href: "#code-suite" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" }
        ]
      }
    ]
  },
  {
    category: "Development Tools",
    title: "Development Tools & Environment",
    description: "Version control repositories, package managers, and production build tooling",
    skills: [
      {
        name: "Git & GitHub",
        category: "Development Tools",
        proficiency: "Core Technology",
        description: "Distributed version control, branch workflows, commit tracking, and remote origin synchronization (vermapower564/portfolio1).",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "npm Tooling & Package Control",
        category: "Development Tools",
        proficiency: "Core Technology",
        description: "Dependency management, package lockfile verification, environment scripts, and build execution.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ]
      },
      {
        name: "Vercel Build System",
        category: "Development Tools",
        proficiency: "Used in Production",
        description: "Next.js production static optimization, serverless function routing, and static page pre-rendering.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ]
      },
      {
        name: "VS Code Environment",
        category: "Development Tools",
        proficiency: "Core Technology",
        description: "Integrated development environment with TypeScript language server, ESLint, and terminal integration.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ]
      }
    ]
  },
  {
    category: "Architecture & Engineering",
    title: "Architecture & Systems Engineering",
    description: "Role-based authorization systems, App Router static generation, and form security",
    skills: [
      {
        name: "Multi-Tier Role-Based Access Control (RBAC)",
        category: "Architecture & Engineering",
        proficiency: "Used in Production",
        description: "5-level hierarchical authorization middleware (Admin → PM → TL → Employee) protecting routes and UI actions.",
        usedInProjects: [
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Next.js App Router Architecture",
        category: "Architecture & Engineering",
        proficiency: "Core Technology",
        description: "Multi-page prerendered routes, dynamic params (`/projects/[id]`), static generation (SSG), and layout trees.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ],
        highlight: true
      },
      {
        name: "Component Architecture & Theme Systems",
        category: "Architecture & Engineering",
        proficiency: "Core Technology",
        description: "Modular React component design, dark/light theme context providers, and responsive layout systems.",
        usedInProjects: [
          { name: "Portfolio", href: "#hero" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" },
          { name: "Snapclass", href: "/projects/snapclass" }
        ]
      },
      {
        name: "Form Validation & Error Handling",
        category: "Architecture & Engineering",
        proficiency: "Core Technology",
        description: "Regex pattern matching, server-side payload safety, user feedback banners, and custom 404 routing.",
        usedInProjects: [
          { name: "Portfolio (/contact)", href: "/contact" },
          { name: "OMS Platform", href: "/projects/oms" },
          { name: "Zyvora E-Commerce", href: "/projects/zyvora" },
          { name: "Backbone Academy", href: "/projects/backbone-academy" }
        ]
      }
    ]
  }
];

export const skillGroups = skillCategoryGroups;

