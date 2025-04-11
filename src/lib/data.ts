import { CgWorkAlt } from "react-icons/cg";
import pred from "../../public/pred.png";
import currency from "../../public/currency.png";
import tasks from "../../public/tasks.png";
import laresume from "../../public/laresume.png";
import quotica from "../../public/quotica.png";
// import ozdevsImg from "../../public/ozdevs-two.png";
// import assetTradingImg from "../../public/asset-trading.jpg";
// import techprowlImg from "../../public/techprowl-two.png";
// import taskManagerImg from "../../public/task-manager.png";
// import familyTreeImg from "../../public/bfsproject.jpg";
// import binaryGameImg from "../../public/binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "M3 Digital - Contract",
    description:
      "Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain. Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.",
    icon: CgWorkAlt,
    date: "September 2021 - February 2022",
  },
  {
    title: "Junior Developer",
    location: "YouPay",
    description:
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
    icon: CgWorkAlt,
    date: "February 2022 - November 2022",
  },
  {
    title: "Software Engineer",
    location: "The University of Queensland",
    description:
      "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
    icon: CgWorkAlt,
    date: "November 2022 - January 2024",
  },
  {
    title: "Software Engineer",
    location: "Humanforce",
    description:
      "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
    icon: CgWorkAlt,
    date: "January 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Quotica",
    description:
      "An AI-powered quote image generator that lets users create and customize beautiful quote images with ease. Offers a one-time lifetime subscription.",
    tags: ["Next.js", "AI", "Typescript", "Prisma"],
    icons: [
      "logos:nextjs-icon",
      "logos:openai-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:mongodb-icon",
      "logos:google-gemini",
    ],
    imageUrl: quotica,
    githubLink: "https://github.com/shvmmshr/Quotica", // Replace with actual link if public
    demoLink: "https://quotica.fun",
  },
  {
    title: "LaResume",
    description:
      "A resume builder website built with Next.js, allowing users to create, customize, and download professional resumes in multiple formats.",
    tags: ["Next.js", "TypeScript", "AWS", "prisma", "mongodb"],
    icons: [
      "logos:nextjs-icon",
      "logos:typescript-icon",
      "logos:aws",
      "logos:prisma",
      "logos:mongodb-icon",
      "logos:docker-icon",
    ],
    imageUrl: laresume,
    githubLink: "https://github.com/shubhamku044/la-resume",
    demoLink: "https://la-resume.tech",
  },
  {
    title: "StackOverflow Tags Predictor",
    description:
      "A model that predicts tags for Stack Overflow questions, simplifying the process of categorization and making questions easier to discover",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:python",
      "logos:jupyter",
      "logos:flask",
      "logos:javascript",
      "logos:docker",
    ],
    imageUrl: pred,
    githubLink: "https://github.com/PriyabrataMo/predicting-stackoverflow-tags",
    demoLink: "",
  },
  {
    title: "Tasks CLI App",
    description:
      "A simple and efficient CLI task manager built with Golang, designed to help users track their to-dos directly from the terminal.",
    tags: ["Golang", "CLI", "Productivity"],
    icons: ["logos:go", "logos:terminal"],
    imageUrl: tasks,
    githubLink: "https://github.com/PriyabrataMo/tasks-cli",
    demoLink: "",
  },
  {
    title: "Currency Converter TUI",
    description:
      "A terminal-based currency converter built with Golang TUI, allowing users to quickly convert between different currencies with real-time exchange rates.",
    tags: ["Golang", "TUI", "Currency Conversion"],
    icons: ["logos:go", "logos:terminal", "logos:money"],
    imageUrl: currency,
    githubLink: "https://github.com/PriyabrataMo/currency-converter-tui",
    demoLink: "",
  },
] as const;

export const skillsData = [
  // Programming Languages
  {
    name: "C",
    icon: "logos:c",
  },
  {
    name: "C++",
    icon: "logos:c-plusplus",
  },
  {
    name: "Go",
    icon: "logos:go",
  },
  {
    name: "NextJS",
    icon: "logos:nextjs-icon",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },

  // Backend Technologies
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },

  // Frontend Technologies
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },

  // Databases
  {
    name: "MySQL",
    icon: "logos:mysql",
  },

  // DevOps & Tools
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  // Cloud & OS
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "Prisma",
    icon: "logos:prisma",
  },
] as const;
