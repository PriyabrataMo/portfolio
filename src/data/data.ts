import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const personalData = {
  name: "Priyabrata Mondal",
  initials: "PM",
  url: "https://priyabratamondal.com",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru+India",
  description:
    "AI/Agent Engineer at QAD Inc. I build LLM-powered agentic workflows for enterprise supply chain automation.",
  summary:
    "I'm an **AI/Agent Engineer at QAD Inc.**, building LLM-powered agentic workflows for supply chain automation, resolving 55+ production tickets across ERP agent development, bug fixes, and system design. Previously at **Kavida AI** (acquired by QAD), I migrated agent infrastructure from LangChain to native Python with LiteLLM and implemented Langfuse + SigNoz observability. I hold a **B.Tech in Computer Science** from Techno Main Salt Lake (CGPA 8.55). A competitive programmer — **Guardian on LeetCode (top 1%, 2178 rating)** and **4-star on CodeChef (1917 rating)** — with 2500+ problems solved across platforms.",
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
      { name: "Langfuse", icon: "material-symbols:analytics" },
      { name: "SigNoz", icon: "material-symbols:monitor-heart" },
      { name: "Structured Logging", icon: "material-symbols:text-snippet" },
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
      "Architected and maintained LLM-powered agentic workflows for supply chain automation, resolving 55+ production tickets across 5 Jira boards spanning agent development, bug fixes, and system design.",
      "Debugged and hardened ERP agents (PO creation, production order close, file mapping) — fixed critical issues like bulk-action safety guards, missing API response fields, and inaccurate cost analysis feedback for enterprise QAD Adaptive ERP customers.",
      "Built a JQ-based schema query tool for the file mapping agent, replacing 2.5MB inline schema injection with on-demand tool calls — reducing token usage per batch by over 80%.",
      "Designed automated regression pipelines for agent quality validation, including eval suites comparing mapping accuracy between inline-schema and tool-based approaches.",
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
      "Migrated the Agent Maxi setup from LangChain chains to native Python with LiteLLM, achieving streaming SSE for multi-agent reasoning/thoughts and reducing framework overhead.",
      "Implemented Langfuse observability for hierarchical LLM tracing without LangChain dependency, and added SigNoz tracing for route-level API observability in production.",
      "Migrated 3 business-critical services (procurement change monitor, RFQ monitor, quotation change monitor) from scriptr-worker into KavidaAgentUX monorepo.",
      "Developed AI-powered news article scraping pipeline for supplier risk intelligence.",
      "Migrated copilot to uv package manager and implemented authentication and conversation thread management.",
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
    title: "Backend Developer Intern",
    logoUrl: "/grouple-logo.jpeg",
    start: "Apr 2025",
    end: "Jun 2025",
    description: [
      "Built and maintained backend services for Grouple's group dining and reservation platform.",
      "Developed REST APIs with Node.js and Express.js for booking management and user workflows.",
      "Integrated third-party services and worked with AWS for deployment and infrastructure.",
    ],
    skills: ["Node.js", "Express.js", "AWS", "React.js", "REST APIs"],
  },
] as const;

export const educationData = [
  {
    school: "Techno Main Salt Lake",
    href: "https://www.technomain.edu.in/",
    degree: "B.Tech in Computer Science and Business Systems",
    logoUrl: "/techno-logo.jpeg",
    start: "Oct 2021",
    end: "May 2025",
    description: [
      "CGPA: 8.55",
      "Selected for Amazon Machine Learning Summer School 2024",
      "Qualified for Round 2 in the Meta Hacker Cup 2024",
      "Guardian on LeetCode (top 1%, 2178 rating) — ranked in top 1% globally",
      "4-star on CodeChef (1917 rating) — ranked in top 5000 globally",
      "2500+ DSA problems solved across coding platforms",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "LaResume",
    href: "https://la-resume.tech",
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
      { type: "Website", href: "https://la-resume.tech", icon: "globe" },
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
    href: "https://quotica.fun",
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
      { type: "Website", href: "https://quotica.fun", icon: "globe" },
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
    href: "https://github.com/PriyabrataMo/currency-converter-tui",
    dates: "2023",
    active: true,
    description:
      "Terminal-based currency converter with a rich TUI built in Golang, with real-time exchange rates.",
    detailedDescription:
      "A terminal-based currency converter built with a Golang TUI library, fetching live exchange rates for quick multi-currency conversions.",
    keyFeatures: [
      "Rich terminal UI with Golang TUI library",
      "Real-time exchange rate fetching",
      "Support for multiple currency pairs",
    ],
    technologies: [{ name: "Go", icon: "logos:go" }],
    links: [
      {
        type: "Github",
        href: "https://github.com/PriyabrataMo/currency-converter-tui",
        icon: "github",
      },
    ],
    images: ["/currency.png"] as string[],
    video: "",
  },
] as const;
