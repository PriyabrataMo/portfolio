import { Icons } from "@/components/icons";
import { HomeIcon, NotebookPenIcon } from "lucide-react";

export const personalData = {
  name: "Priyabrata Mondal",
  initials: "PM",
  url: "https://priyabratamondal.com",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru+India",
  description:
    "AI/Agent Engineer at QAD Inc. I build LLM-powered agentic workflows for enterprise supply chain automation.",
  summary:
    "I'm an **AI/Agent Engineer** with **1 year** of experience building production-grade LLM applications and Agentic Systems for ERP and supply chain automation. Currently, I work at **QAD**, where I focus on designing scalable AI agents, evaluation frameworks, observability systems, and workflow automation solutions for enterprise customers.\n\nI hold a **B.Tech in Computer Science** from Techno Main Salt Lake (CGPA 8.55), where I ranked **2nd in the department**. Outside of work, I enjoy competitive programming and have solved **2500+ problems** across platforms, achieving **Guardian on LeetCode** (2178) and **4★ on CodeChef** (1917).",
  avatarUrl: "/avatar.jpg",
} as const;

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Go", icon: "logos:go" },
      { name: "C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "LangChain", icon: "simple-icons:langchain" },
      { name: "LiteLLM", icon: "material-symbols:model-training" },
      { name: "OpenAI API", icon: "logos:openai-icon" },
      { name: "Gemini API", icon: "logos:google-gemini" },
      { name: "Pydantic", icon: "logos:python" },
      { name: "Prompt Engineering", icon: "material-symbols:chat" },
      { name: "Agentic Workflows", icon: "material-symbols:smart-toy" },
      { name: "JQ", icon: "material-symbols:data-object" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "Langfuse", icon: "simple-icons:langfuse" },
      { name: "SigNoz", icon: "simple-icons:signoz" },
      { name: "OpenTelemetry", icon: "simple-icons:opentelemetry" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "Express.js", icon: "logos:express" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "SSE", icon: "material-symbols:stream" },
      { name: "asyncio", icon: "logos:python" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "DynamoDB", icon: "logos:aws-dynamodb" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS Lambda", icon: "logos:aws-lambda" },
      { name: "AWS EC2/S3/SQS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "NGINX", icon: "logos:nginx" },
      { name: "CI/CD", icon: "material-symbols:sync" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Agile/Scrum", icon: "lucide:repeat" },
      { name: "Microservices", icon: "material-symbols:grid-view" },
      { name: "Domain-Driven Design", icon: "material-symbols:architecture" },
      { name: "TDD", icon: "lucide:flask-conical" },
      { name: "Strategy Pattern", icon: "material-symbols:code" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookPenIcon, label: "Blog" },
] as const;

export const contactData = {
  email: "priyabrata8558@gmail.com",
  tel: "+91 6297559892",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/PriyabrataMo",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/priyabrata-mondal/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "QAD Inc.",
    href: "https://qad.com",
    location: "Bengaluru, India",
    title: "AI/Agent Engineer",
    logoUrl: "/qad-logo.jpeg",
    start: "Dec 2025",
    end: "Present",
    description: [
      "Improved the reliability and production readiness of ERP automation agents (PO creation, production order closure, and file mapping) by resolving critical workflow, validation, and data integrity issues for enterprise QAD Adaptive ERP customers.",
      "Optimized the file mapping agent by introducing on-demand schema retrieval, reducing token consumption by over 80% per batch and improving scalability for complex data mappings.",
      "Developed automated agent evaluation and regression testing frameworks to validate workflow accuracy, tool usage, and response quality before production deployments.",
      "Replaced Lambda-based invocations with direct HTTP APIs for alert creation, improving cross-environment reliability (dev, preprod, prod) and eliminating deployment blockers.",
    ],
    skills: [
      "Python",
      "LangChain",
      "LiteLLM",
      "JQ",
      "FastAPI",
      "AWS Lambda",
      "Pydantic",
      "asyncio",
    ],
  },
  {
    company: "Kavida AI (Acquired by QAD)",
    href: "https://qad.com",
    location: "Remote",
    title: "Junior Data Scientist",
    logoUrl: "/kavida-logo.jpeg",
    start: "Aug 2025",
    end: "Nov 2025",
    description: [
      "Led the redesign of Agent Maxi's core agent architecture to support large-scale enterprise customers, replacing LangChain chains with a native Python + LiteLLM implementation. Enabled real-time streaming SSE for multi-agent reasoning, improved observability, and significantly reduced framework overhead to support production-scale workloads.",
      "Implemented Langfuse observability for end-to-end LLM tracing across multi-agent workflows and integrated SigNoz for route-level API monitoring and production observability.",
      "Redesigned the architecture of three business-critical monitoring services, consolidating duplicated logic, optimizing database connectivity through memoized resource initialization, and reducing failure points to improve performance and operational stability.",
      "Developed AI-powered news article scraping pipeline for supplier risk intelligence.",
    ],
    skills: [
      "Python",
      "LiteLLM",
      "Langfuse",
      "SigNoz",
      "FastAPI",
      "SSE",
      "asyncio",
      "uv",
    ],
  },
  {
    company: "Grouple",
    href: "https://grouple.in",
    location: "Mumbai, Maharashtra, India",
    title: "Full Stack Developer Intern",
    logoUrl: "/grouple-logo.jpeg",
    start: "Apr 2025",
    end: "Jun 2025",
    description: [
      "Revamped the homepage using Next.js and Tailwind CSS, significantly improving load time and UI responsiveness.",
      "Fixed critical bugs in the email service responsible for end-user communication and improved navigation and user interaction flow.",
      "Deployed the website to a custom domain via AWS EC2 with a CI/CD pipeline, and configured NGINX for efficient serving with caching, compression, and routing rules.",
      "Worked with AWS RDS for database management, optimized queries, and cleaned the database by removing redundant entries and dropping unused tables.",
    ],
    skills: ["Next.js", "Tailwind CSS", "Node.js", "AWS EC2", "NGINX", "AWS RDS", "CI/CD"],
  },
] as const;

export const educationData = [
  {
    school: "Techno Main Salt Lake",
    href: "https://www.technomain.edu.in/",
    degree: "B.Tech — Major: Computer Science · Minor: Business Systems",
    logoUrl: "/techno-logo.jpeg",
    start: "Oct 2021",
    end: "May 2025",
    description: [
      "CGPA: 8.55 — Ranked 2nd in the department",
      "Selected for Amazon Machine Learning Summer School 2024",
      "Qualified for Round 2 in the Meta Hacker Cup 2024",
      "Guardian on LeetCode (top 1%, 2178 rating)",
      "4★ on CodeChef (1917 rating)",
      "2500+ DSA problems solved across coding platforms",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "LaResume",
    href: "https://la-resume.com",
    dates: "2024",
    active: true,
    description:
      "ATS-friendly resume builder with LaTeX export and PDF generation. 2900+ signups, 4000+ resumes created, 190+ GitHub stars.",
    detailedDescription:
      "A comprehensive ATS-friendly resume builder that allows users to create, customize, and download professional resumes in LaTeX and PDF formats. Deployed to AWS EC2 with Docker/ECR, GitHub Actions CI/CD, and separate dev/prod environments.",
    keyFeatures: [
      "ATS-friendly resume templates with LaTeX export and PDF generation",
      "Deployed to AWS EC2 with Docker/ECR and GitHub Actions CI/CD",
      "Separate dev and prod environments",
      "2900+ signups, 4000+ resumes created, 190+ GitHub stars",
    ],
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "AWS EC2", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Prisma", icon: "logos:prisma" },
    ],
    links: [
      { type: "Website", href: "https://la-resume.com", icon: "globe" },
      {
        type: "Github",
        href: "https://github.com/shubhamku044/la-resume",
        icon: "github",
      },
    ],
    images: ["/laresume.png"] as string[],
    video: "",
  },
  {
    title: "Quotica",
    href: "https://quotica.priyabratamondal.com",
    dates: "2024",
    active: true,
    description:
      "Full-stack AI image generation app using OpenAI and Gemini APIs with context-aware chat and webhook-based payments.",
    detailedDescription:
      "A full-stack AI image generation app that creates beautiful quote images from user prompts using OpenAI and Gemini APIs. Features context-aware chat with conversational memory across prompts and webhook-based payments for premium features.",
    keyFeatures: [
      "AI-powered quote image generation using OpenAI and Gemini APIs",
      "Context-aware chat with conversational memory across prompts",
      "Webhook-based payments for premium features",
      "One-time lifetime subscription model",
    ],
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "Gemini", icon: "logos:google-gemini" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Prisma", icon: "logos:prisma" },
    ],
    links: [
      { type: "Website", href: "https://quotica.priyabratamondal.com", icon: "globe" },
      {
        type: "Github",
        href: "https://github.com/shvmmshr/Quotica",
        icon: "github",
      },
    ],
    images: ["/quotica.png"] as string[],
    video: "",
  },
  {
    title: "StackOverflow Tags Predictor",
    href: "https://github.com/PriyabrataMo/predicting-stackoverflow-tags",
    dates: "2023",
    active: true,
    description:
      "ML model that predicts tags for Stack Overflow questions, simplifying categorization and discovery.",
    detailedDescription:
      "A machine learning model that predicts relevant tags for Stack Overflow questions using NLP. The model is served via a Flask API deployed on AWS.",
    keyFeatures: [
      "Multi-label classification for Stack Overflow question tags",
      "NLP-based feature engineering on question text",
      "Flask REST API for serving predictions",
      "Dockerized and deployed on AWS",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "Jupyter", icon: "logos:jupyter" },
      { name: "Flask", icon: "logos:flask" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/PriyabrataMo/predicting-stackoverflow-tags",
        icon: "github",
      },
    ],
    images: ["/pred.png"] as string[],
    video: "",
  },
  {
    title: "Tasks CLI",
    href: "https://github.com/PriyabrataMo/tasks-cli",
    dates: "2023",
    active: true,
    description:
      "Lightweight CLI task manager built with Golang to track to-dos directly from the terminal.",
    detailedDescription:
      "A lightweight CLI task manager built with Golang for fast, persistent to-do tracking entirely from the terminal.",
    keyFeatures: [
      "Add, complete, and delete tasks from the terminal",
      "Persistent task storage across sessions",
      "Fast and lightweight single Go binary",
    ],
    technologies: [{ name: "Go", icon: "logos:go" }],
    links: [
      {
        type: "Github",
        href: "https://github.com/PriyabrataMo/tasks-cli",
        icon: "github",
      },
    ],
    images: ["/tasks.png"] as string[],
    video: "",
  },
  {
    title: "Currency Converter TUI",
    href: "https://github.com/PriyabrataMo/currency",
    dates: "2023",
    active: true,
    description:
      "Terminal-based currency converter with a rich TUI built in Golang, with real-time exchange rates. Installable via Homebrew.",
    detailedDescription:
      "A terminal-based currency converter built with a Golang TUI library, fetching live exchange rates for quick multi-currency conversions. Distributed via a custom Homebrew tap.",
    keyFeatures: [
      "Rich terminal UI with Golang TUI library",
      "Real-time exchange rate fetching via ExchangeRatesAPI",
      "Installable via Homebrew (`brew install currency`)",
      "Support for multiple currency pairs",
    ],
    technologies: [{ name: "Go", icon: "logos:go" }],
    links: [
      {
        type: "Github",
        href: "https://github.com/PriyabrataMo/currency",
        icon: "github",
      },
    ],
    images: ["/currency.png"] as string[],
    video: "",
  },
] as const;
