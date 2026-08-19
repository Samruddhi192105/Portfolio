// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue", // spline keycap id — logo swapped to C++
    label: "C++",
    shortDescription: "low-level speed for DSA and systems work ⚡",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier", // spline keycap id — logo swapped to Python
    label: "Python",
    shortDescription: "the glue language: scripts, ML, and 3am glue 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm", // spline keycap id — logo swapped to Redis
    label: "Redis",
    shortDescription: "RAM but for data that needs to zoom 🚀",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Socket.IO",
    shortDescription: "websockets but make it a party 🎉",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress", // spline keycap id — logo swapped to MySQL
    label: "MySQL",
    shortDescription: "the classic relational workhorse 🐬",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux", // spline keycap id — logo swapped to Kafka
    label: "Kafka",
    shortDescription: "the event bus that never sleeps 🚌",
    color: "#231f20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx", // spline keycap id — logo swapped to Pinecone
    label: "Pinecone",
    shortDescription: "vectors in, meaning out 🧠",
    color: "#1ac0a2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws", // spline keycap id — logo swapped to Prisma
    label: "Prisma",
    shortDescription: "typesafe ORM, fewer 3am SQL bugs 💅",
    color: "#2d3748",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim", // spline keycap id — logo swapped to LangChain
    label: "LangChain",
    shortDescription: "LLMs with a pipeline, not vibes-only 🔗",
    color: "#1c3c3c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

/** Written stack, grouped for the skills section. Spline object names stay in SKILLS. */
export const TECH_STACK_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      SKILLS[SkillNames.JS],
      SKILLS[SkillNames.TS],
      SKILLS[SkillNames.VUE], // C++
      SKILLS[SkillNames.PRETTIER], // Python
    ],
  },
  {
    title: "Frontend",
    skills: [
      SKILLS[SkillNames.HTML],
      SKILLS[SkillNames.CSS],
      SKILLS[SkillNames.REACT],
      SKILLS[SkillNames.NEXTJS],
      SKILLS[SkillNames.TAILWIND],
    ],
  },
  {
    title: "Backend",
    skills: [
      SKILLS[SkillNames.NODEJS],
      SKILLS[SkillNames.EXPRESS],
      SKILLS[SkillNames.LINUX], // Kafka
      SKILLS[SkillNames.AWS], // Prisma
      SKILLS[SkillNames.VIM], // LangChain
    ],
  },
  {
    title: "Databases",
    skills: [
      SKILLS[SkillNames.POSTGRES],
      SKILLS[SkillNames.MONGODB],
      SKILLS[SkillNames.WORDPRESS], // MySQL
      SKILLS[SkillNames.NPM], // Redis
      SKILLS[SkillNames.NGINX], // Pinecone
    ],
  },
  {
    title: "Tools",
    skills: [
      SKILLS[SkillNames.DOCKER],
      SKILLS[SkillNames.GIT],
      SKILLS[SkillNames.GITHUB],
      SKILLS[SkillNames.VERCEL],
    ],
  },
];

export const TECH_STACK: Skill[] = TECH_STACK_GROUPS.flatMap((group) => group.skills);

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Feb 2026",
    endDate: "Apr 2026",
    title: "Software Development Engineer (Intern)",
    company: "Xelron AI",
    description: [
      "Shipped 4 authentication REST endpoints (sign-up, login, session refresh, validation) for the web app; tightened ORM queries on user/auth paths (fewer round-trips, smaller selects), cutting hot-path response time by ~50%; coordinated with frontend when request shapes changed.",
      "Debugged production auth issues (failed logins, flaky sessions), added structured logging, and landed fixes through code review.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 2,
    startDate: "2023",
    endDate: "Jun 2027",
    title: "B.Tech Information Technology (GPA: 8.0/10)",
    company: "Indian Institute of Information Technology, Sonepat",
    description: [
      "Coursework in Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks.",
      "Solved 600+ LeetCode problems with a contest rating of 1800+.",
    ],
    skills: [SkillNames.JS, SkillNames.TS, SkillNames.REACT, SkillNames.NODEJS],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

