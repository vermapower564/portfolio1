# Roushan Kumar Verma — Full-Stack Developer Portfolio

A premium, recruiter-ready, production-grade full-stack developer portfolio built for **Roushan Kumar Verma** using **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Executive Overview

This portfolio presents Roushan Kumar Verma's software engineering capabilities through real-world production projects, multi-tier Role-Based Access Control (RBAC) architectures, RESTful API integrations, and cloud database implementations (MySQL, Prisma, TiDB Cloud).

- **Developer Identity:** Roushan Kumar Verma
- **Role:** Full-Stack Developer
- **Academic Qualifications:** Master of Computer Applications (MCA 2024–2026), B.Sc. Mathematics
- **Core Engineering Pillars:** Modern Frontend, REST APIs, RBAC Security, Database Design, Production Engineering

---

## 🚀 Key Features & Architecture

### 1. Interactive Developer Console
- Interactive terminal prompt in the Hero section (`$ whoami`, `$ role`, `$ stack`, `$ projects`, `$ status`, `$ contact`, `$ help`, `$ clear`).

### 2. Deep Project Showcase & Architecture Visualizer
- **OMS (Operations Management System):** Enterprise ERP/CRM business platform enforcing a strict 5-tier organizational hierarchy (`ADMIN → PROJECT MANAGER → PROJECT → TEAM LEADER → PROJECT TEAM → EMPLOYEES`), attendance tracking, EOD updates, leave pipelines, and payroll analytics.
- **Zyvora:** Modern full-stack e-commerce marketplace with catalog search, optimistic cart state management, and Cloudinary CDN optimizations.
- **Backbone Academy:** Dual-engine education management platform separating public marketing from internal student/faculty dashboards with SMTP OTP verification and TiDB Cloud.
- **Snapclass:** Smart classroom & attendance platform built with Next.js, TypeScript, Tailwind CSS, Prisma ORM, and MySQL.

### 3. Skill-to-Project Cross-Filtering
- Interactive skill chips (e.g. `Prisma`, `RBAC`, `Cloudinary`, `TypeScript`) that dynamically highlight matching production projects.

### 4. Interactive Case Study Modals
- Detailed case study views breaking down Problem, Solution, Core Features, System Flow, and Engineering Highlights.

### 5. Production Contact Engine
- Fully validated contact form communicating with a Next.js API Route (`/api/contact`) supporting Nodemailer / SMTP email delivery with graceful fallback simulation.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript (ESNext) |
| **Styling** | Tailwind CSS & PostCSS |
| **Icons & UI** | Lucide React, Framer Motion |
| **Backend & API** | Node.js, Express.js, Next.js API Routes |
| **Databases** | MySQL, Prisma ORM, TiDB Cloud |
| **Services & Auth** | Cloudinary CDN, Nodemailer (SMTP), JWT, RBAC |

---

## 📁 Project Directory Structure

```text
c:\Users\HP\OneDrive\Desktop\portfolio
├── public/
│   └── resume.pdf                 # Formatted resume PDF asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Nodemailer contact API endpoint
│   │   ├── globals.css            # Custom theme variables & scrollbar
│   │   ├── layout.tsx             # Root layout with OpenGraph & Schema.org JSON-LD
│   │   ├── page.tsx               # Main portfolio page orchestrating all sections
│   │   ├── robots.ts              # Production SEO robots file
│   │   └── sitemap.ts             # Production SEO sitemap file
│   ├── components/
│   │   ├── navbar.tsx             # Sticky header with theme toggle & mobile drawer
│   │   ├── hero.tsx               # Hero section with headline & metric chips
│   │   ├── developer-console.tsx  # Interactive CLI shell prompt widget
│   │   ├── trust-strip.tsx        # Core technology strip
│   │   ├── about.tsx              # Educational & technical background
│   │   ├── what-i-build.tsx       # Software scope cards
│   │   ├── skills.tsx             # Categorized skill badges with cross-filtering
│   │   ├── engineering-approach.tsx # Core architectural principles
│   │   ├── projects.tsx           # Production project cards
│   │   ├── project-modal.tsx      # Interactive case study modal
│   │   ├── architecture-diagram.tsx # Multi-tier visual system diagrams
│   │   ├── journey.tsx            # Academic & development timeline
│   │   ├── resume-section.tsx     # Resume CTA section
│   │   ├── resume-modal.tsx       # In-app document viewer modal
│   │   ├── contact.tsx            # Contact form with state feedback
│   │   ├── footer.tsx             # Footer with back-to-top control
│   │   └── theme-provider.tsx     # Dark/Light theme context provider
│   ├── data/
│   │   ├── profile.ts             # Personal & educational details
│   │   ├── projects.ts            # Detailed project case study data
│   │   ├── skills.ts              # Grouped technical skill data
│   │   └── journey.ts             # Milestone timeline data
│   └── lib/
│       └── utils.ts               # Tailwind class merger utility
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 💻 Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

---

## 🔐 Environment Variables (.env.local)

```env
# Optional SMTP configuration for live contact form delivery
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER_EMAIL=roushanverma.dev@gmail.com
```

---

## 🏗️ Production Build Verification

```bash
# Run production build
npm run build

# Start production server
npm run start
```

Build Status: **0 TypeScript Errors, 0 ESLint Warnings, Static Pages Prerendered (100% Success)**.
