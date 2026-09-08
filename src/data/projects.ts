export interface Project {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  problem: string;
  solution: string;
  overview: string;
  featured: boolean;
  category: "Full-Stack" | "Enterprise / ERP" | "E-Commerce" | "EdTech";
  stack: string[];
  features: string[];
  engineeringHighlights: string[];
  architecture: {
    frontend: string;
    api: string;
    auth: string;
    backend: string;
    database: string;
    services: string[];
    dataFlowExplanation?: string;
  };
  challenges: string[];
  demonstrates: string[];
  status: "Active Development" | "Core Features Implemented" | "Production Preparation" | "Recently Updated";
  currentlyBuilding?: boolean;
  currentlyBuildingNote?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "oms",
    name: "OMS — Operations Management System",
    badge: "Enterprise Platform",
    tagline: "ERP/CRM Business Platform with Multi-Tier Role-Based Access Control",
    shortDescription: "Enterprise-grade operations management system handling organizational hierarchy, project allocation, EOD reporting, leave approval, and payroll analytics.",
    overview: "OMS is a serious enterprise management platform designed to streamline corporate workflows. It enforces a strict organizational hierarchy (Admin → Project Manager → Project → Team Leader → Project Team → Employees), ensuring fine-grained access control across all operational modules.",
    problem: "Growing software and service organizations face severe inefficiencies tracking project progress, team assignments, daily end-of-day (EOD) work updates, employee attendance, and salary/payroll processing across nested management levels.",
    solution: "A centralized ERP/CRM platform with automated role-based dashboard views, real-time activity tracking, structured EOD updates, leaves management pipeline, and document sharing workflows.",
    featured: true,
    category: "Enterprise / ERP",
    stack: ["Node.js", "Express.js", "React", "Next.js", "TypeScript", "MySQL", "Prisma", "TiDB Cloud", "REST APIs", "JWT Auth", "RBAC"],
    features: [
      "Multi-tier Organizational Hierarchy (Admin, PM, TL, Employee)",
      "Strict Role-Based Access Control (RBAC) & Route Guard Middleware",
      "Interactive Project & Team Member Matrix Allocation",
      "Daily Work & End-of-Day (EOD) Status Reporting Engine",
      "Automated Employee Attendance & Leave Workflow Approval",
      "Payroll & Salary Distribution Reporting Module",
      "Secure Document & File Storage Handling via Cloud APIs",
      "Comprehensive Managerial Analytics & Workload Visuals"
    ],
    engineeringHighlights: [
      "Architected 5-level hierarchical RBAC middleware protecting API routes and UI components",
      "Normalized relational database schema optimized for multi-level project tree queries",
      "Implemented transactional operations for payroll and attendance ledger consistency",
      "Designed RESTful endpoints with structured payload validation and centralized error logging"
    ],
    challenges: [
      "Architecting 5-level hierarchical RBAC middleware (Admin -> PM -> TL -> Employee) without compounding database query latency",
      "Ensuring transactional consistency across employee attendance records and salary/payroll calculation ledgers",
      "Designing relational schemas optimized for multi-level project assignment tree queries"
    ],
    demonstrates: [
      "Full-Stack Enterprise Architecture",
      "Multi-Tier Role-Based Access Control (RBAC)",
      "Relational Database Design & Transactional Integrity",
      "RESTful API Architecture & Payload Safety",
      "Managerial Analytics & Corporate Workflow Automation"
    ],
    status: "Active Development",
    currentlyBuilding: true,
    currentlyBuildingNote: "Refining multi-tier role permission middleware and building real-time managerial analytics for project workload tracking.",
    architecture: {
      frontend: "Next.js / React with Tailwind CSS & Dynamic Role Dashboards",
      api: "RESTful API Routes with JSON Web Token (JWT) Bearer Verification",
      auth: "Multi-Tier Role-Based Access Control (RBAC) Middleware",
      backend: "Node.js & Express.js Application Server",
      database: "MySQL / TiDB Cloud managed via Prisma ORM",
      services: ["Cloudinary File Storage", "Automated Email Alerts"],
      dataFlowExplanation: "HTTP requests carrying JWT bearer tokens pass through strict 5-tier RBAC guard middleware. Verified requests interact with Node.js/Express service controllers, executing Prisma ORM queries against MySQL/TiDB Cloud and dispatching media assets to Cloudinary."
    },
    githubUrl: "https://github.com/vermapower564/operations-management-system",
    liveUrl: "https://oms-platform.demo.dev"
  },
  {
    id: "zyvora",
    name: "Zyvora — E-Commerce Platform",
    badge: "E-Commerce",
    tagline: "Modern Full-Stack E-Commerce Application with Scalable Product Architecture",
    shortDescription: "Modern shopping experience featuring product catalog filtering, cart state management, JWT authentication, and MySQL/Prisma backend architecture.",
    overview: "Zyvora is a full-stack e-commerce platform engineered for speed, clean UX, and reliable inventory/order processing. Designed around production performance and intuitive user journeys.",
    problem: "Modern e-commerce requires lightning-fast catalog search, dynamic filtering, persistent cart state across devices, and secure transaction handling without UI lag.",
    solution: "Developed Zyvora with an optimized REST API, cached inventory queries, optimistic UI cart updates, and responsive checkout flows.",
    featured: true,
    category: "E-Commerce",
    stack: ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "MySQL", "Prisma", "Cloudinary", "Tailwind CSS", "JWT Auth"],
    features: [
      "Modern Responsive Shopping Interface with Dark/Light Adaptability",
      "Multi-Category Product Filtering, Search & Sorting Algorithm",
      "Optimistic Cart State Management & Order Summary Calculator",
      "User Authentication & Order History Tracking",
      "Cloudinary Image Transformation & CDN Asset Pipeline",
      "Admin Product Catalog & Inventory Management API",
      "Structured Payload Validation & Secure Checkout Flow"
    ],
    engineeringHighlights: [
      "Designed normalized relational database models for Products, Categories, Orders, and Users",
      "Implemented optimistic cart UI updates reducing perceived latency to zero",
      "Integrated Cloudinary image optimizations with responsive srcsets and WebP formatting"
    ],
    challenges: [
      "Eliminating UI latency in multi-criteria product filtering and catalog sorting algorithms",
      "Handling optimistic cart state synchronization across client-side state and cookie-backed user sessions",
      "Managing secure JWT cookie lifecycle with CSRF mitigation and route protection"
    ],
    demonstrates: [
      "E-Commerce Full-Stack System Design",
      "Optimistic UI & Client State Synchronization",
      "Relational Database Modeling for Catalogs & Orders",
      "Cloud Image Optimization & CDN Asset Pipelines",
      "JWT Cookie Authentication & Route Guarding"
    ],
    status: "Production Preparation",
    currentlyBuilding: true,
    currentlyBuildingNote: "Optimizing checkout state persistence and Cloudinary image transformation pipelines for sub-second page loads.",
    architecture: {
      frontend: "Next.js App Router & Tailwind CSS UI",
      api: "Express.js RESTful API Endpoints",
      auth: "Encrypted JWT Cookie Authentication",
      backend: "Node.js Express Server",
      database: "MySQL Database mapped via Prisma ORM",
      services: ["Cloudinary Media Cloud"],
      dataFlowExplanation: "Next.js App Router client manages optimistic cart state and dispatches API requests to Node/Express REST endpoints. Prisma ORM queries MySQL database for products/orders, while Cloudinary serves responsive WebP media."
    },
    githubUrl: "https://github.com/vermapower564/zyvora-ecommerce",
    liveUrl: "https://zyvora-store.demo.dev"
  },
  {
    id: "backbone-academy",
    name: "Backbone Academy",
    badge: "EdTech Platform",
    tagline: "Dual-Engine Educational Portal & Institution Management Platform",
    shortDescription: "Real-world education portal separating public academy marketing from student/teacher dashboards, OTP verification, attendance, exams, and fee reports.",
    overview: "Backbone Academy is a complete educational ecosystem split into two dedicated engines: a public marketing & admissions site, and an internal institutional management portal for students, faculty, and administrators.",
    problem: "Educational institutions struggle to bridge the gap between prospective student outreach and complex internal administration (attendance, fee collection, exam transcripts, assignment delivery, and instant email notifications).",
    solution: "Built a dual-interface architecture featuring a high-converting public portal alongside a secure, role-restricted management system equipped with SMTP OTP authentication, Cloudinary asset pipelines, and real-time gradebooks.",
    featured: true,
    category: "EdTech",
    stack: ["React", "Vite", "Node.js", "Express.js", "JavaScript", "TiDB Cloud", "REST APIs", "Cloudinary", "Nodemailer / SMTP", "Tailwind CSS"],
    features: [
      "Dual Interface Architecture: Public Academy Website + Management Portal",
      "Secure Student/Teacher Registration with SMTP OTP Verification",
      "Self-Service Password Recovery & Encrypted Session Handler",
      "Comprehensive Student & Faculty Attendance Logging System",
      "Fee Payment Tracking, Invoice Generation & Ledger Reports",
      "Exam Management, Gradebook Publishing & Academic Transcripts",
      "Cloudinary-backed Assignment Uploads & Course Material Repository",
      "Instant Announcement Engine with Automated Email Notifications"
    ],
    engineeringHighlights: [
      "Engineered decoupled frontend client using Vite and React with optimized build bundles",
      "Integrated Nodemailer/SMTP service for high-deliverability OTP and security notifications",
      "Leveraged TiDB Cloud distributed MySQL database for ultra-fast query execution and zero-downtime scaling",
      "Implemented direct-to-Cloudinary signed file upload pipeline for course materials"
    ],
    challenges: [
      "Decoupling public academy marketing portal from internal student/faculty administration while sharing unified auth APIs",
      "Implementing secure SMTP Nodemailer OTP verification for password resets and critical account updates",
      "Optimizing TiDB Cloud distributed queries for real-time exam transcripts and fee payment ledgers"
    ],
    demonstrates: [
      "Dual-Engine Frontend Architecture",
      "OTP Authentication & Session Security",
      "Cloud Database Integration (TiDB Cloud Distributed MySQL)",
      "Media & Document Asset Pipeline (Cloudinary CDN)",
      "Automated Email Notification Systems (SMTP/Nodemailer)"
    ],
    status: "Active Development",
    currentlyBuilding: true,
    currentlyBuildingNote: "Enhancing Nodemailer OTP verification fallback handling and optimizing exam gradebook PDF report rendering.",
    architecture: {
      frontend: "React + Vite SPA with Dual Public/Admin Layout Controllers",
      api: "Node.js & Express.js REST API with Rate-Limiting & Input Validation",
      auth: "JWT Session Tokens + SMTP OTP Verification Workflow",
      backend: "Node.js Micro-Server Architecture",
      database: "TiDB Cloud Distributed MySQL",
      services: ["Cloudinary Asset CDN", "Nodemailer SMTP Dispatcher"],
      dataFlowExplanation: "React/Vite client sends requests to Node.js/Express microservices. Authentication requests trigger Nodemailer SMTP OTP dispatch, while database operations query TiDB Cloud distributed MySQL and Cloudinary handles assignment media assets."
    },
    githubUrl: "https://github.com/vermapower564/backbone-academy",
    liveUrl: "https://backbone-academy.demo.dev"
  },
  {
    id: "snapclass",
    name: "Snapclass — Smart Classroom Manager",
    badge: "Classroom Platform",
    tagline: "Classroom & Attendance Management Platform built with Next.js, TypeScript & Prisma",
    shortDescription: "Type-safe web application streamlining classroom creation, daily student attendance, assignments, and class-wide announcements.",
    overview: "Snapclass provides educators and students with an effortless platform to organize courses, take daily attendance, publish announcements, and distribute digital assignments.",
    problem: "Teachers waste valuable instructional time manually recording paper attendance and distributing physical course materials across multiple class sections.",
    solution: "Created a single, type-safe Next.js platform where teachers can record batch attendance in seconds, publish digital assignments, and post real-time course notices.",
    featured: false,
    category: "Full-Stack",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL", "REST APIs", "Shadcn/UI"],
    features: [
      "Classroom Creation & Roster Management System",
      "One-Click Daily Student Attendance Matrix & Statistics",
      "Teacher & Student Role-Based Dashboard Views",
      "Assignment Publishing, Submissions & Due Date Tracking",
      "Class Announcement Feed & Material Resource Library",
      "Type-safe End-to-End API Architecture using TypeScript & Prisma"
    ],
    engineeringHighlights: [
      "100% End-to-End TypeScript type safety across server components and Prisma client",
      "Batch attendance database upsert queries for fast multi-student recording",
      "Clean server-side rendered dashboard components for instant page loads"
    ],
    challenges: [
      "Achieving 100% end-to-end static type safety from Next.js App Router server components down to Prisma database schemas",
      "Designing high-speed batch attendance upsert queries for multi-student class rosters"
    ],
    demonstrates: [
      "Type-Safe Next.js Full-Stack Engineering",
      "Server-Side Rendered Dynamic Dashboards",
      "Prisma Relational Database Modeling",
      "Role-Based Dashboard Layouts"
    ],
    status: "Recently Updated",
    currentlyBuilding: false,
    architecture: {
      frontend: "Next.js App Router Server & Client Components",
      api: "Next.js Server Actions & API Routes",
      auth: "Role-Based Session Management",
      backend: "Next.js Node.js Runtime",
      database: "MySQL with Prisma ORM Schemas",
      services: ["Vercel Edge Network"],
      dataFlowExplanation: "Next.js App Router server components execute server actions and Prisma client calls directly against MySQL database, delivering instant server-rendered HTML views to teachers and students."
    },
    githubUrl: "https://github.com/vermapower564/snapclass-app",
    liveUrl: "https://snapclass.demo.dev"
  }
];
