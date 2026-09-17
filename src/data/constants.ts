/* =========================================================
   SKILLS
   ========================================================= */

export enum SkillNames {
  JAVA = "java",
  JAVASCRIPT = "javascript",
  CPP = "cpp",
  PYTHON = "python",

  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",

  NODEJS = "nodejs",
  EXPRESS = "express",
  SPRINGBOOT = "springboot",
  RESTAPIS = "restapis",

  POSTGRESQL = "postgresql",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  SUPABASE = "supabase",

  DOCKER = "docker",
  MAVEN = "maven",
  GIT = "git",
  GITHUB = "github",
  GITHUBACTIONS = "githubactions",
  VERCEL = "vercel",

  OLLAMA = "ollama",
  GEMINI = "gemini",
  LLMINTEGRATION = "llmintegration",
  RAG = "rag",
  CLIP = "clip",
  DENSEPOSE = "densepose",

  OPENCV = "opencv",

  VSCODE = "vscode",
  CURSOR = "cursor",
  FIGMA = "figma",
  CANVA = "canva",
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
  /* =========================
     LANGUAGES
     ========================= */

  [SkillNames.JAVA]: {
    id: 1,
    name: "java",
    label: "Java",
    shortDescription:
      "Object-oriented programming, backend development, and DSA.",
    color: "#ED8B00",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  [SkillNames.JAVASCRIPT]: {
    id: 2,
    name: "javascript",
    label: "JavaScript",
    shortDescription:
      "Building interactive web applications and full-stack solutions.",
    color: "#F7DF1E",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.CPP]: {
    id: 3,
    name: "cpp",
    label: "C++",
    shortDescription:
      "DSA, problem solving, and object-oriented programming.",
    color: "#00599C",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 4,
    name: "python",
    label: "Python",
    shortDescription:
      "Used for AI, ML, computer vision, and RAG projects.",
    color: "#3776AB",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  /* =========================
     FRONTEND
     ========================= */

  [SkillNames.HTML]: {
    id: 5,
    name: "html",
    label: "HTML",
    shortDescription:
      "Semantic structure and accessible web interfaces.",
    color: "#E34F26",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 6,
    name: "css",
    label: "CSS",
    shortDescription:
      "Responsive layouts, animations, and modern UI styling.",
    color: "#1572B6",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 7,
    name: "react",
    label: "React",
    shortDescription:
      "Component-based interfaces and interactive web applications.",
    color: "#61DAFB",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 8,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Full-stack React applications with App Router and server features.",
    color: "#FFFFFF",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 9,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Utility-first responsive UI development.",
    color: "#06B6D4",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  /* =========================
     BACKEND
     ========================= */

  [SkillNames.NODEJS]: {
    id: 10,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript runtime for backend and API development.",
    color: "#339933",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 11,
    name: "express",
    label: "Express.js",
    shortDescription:
      "REST APIs, middleware, and backend services.",
    color: "#FFFFFF",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.SPRINGBOOT]: {
    id: 12,
    name: "springboot",
    label: "Spring Boot",
    shortDescription:
      "Java backend development and REST API design.",
    color: "#6DB33F",
    icon:
      "https://cdn.simpleicons.org/springboot/6DB33F",
  },

  [SkillNames.RESTAPIS]: {
    id: 13,
    name: "restapis",
    label: "REST APIs",
    shortDescription:
      "Designing and integrating RESTful APIs for web applications.",
    color: "#6DB33F",
    icon:
      "https://cdn.simpleicons.org/fastapi/009688",
  },

  /* =========================
     DATABASES
     ========================= */

  [SkillNames.POSTGRESQL]: {
    id: 14,
    name: "postgresql",
    label: "PostgreSQL",
    shortDescription:
      "Relational database design, SQL, and application data management.",
    color: "#4169E1",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MYSQL]: {
    id: 15,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "Relational databases and SQL-based application development.",
    color: "#4479A1",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 16,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "NoSQL database for flexible application data.",
    color: "#47A248",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.SUPABASE]: {
    id: 17,
    name: "supabase",
    label: "Supabase",
    shortDescription:
      "Authentication, PostgreSQL, Row Level Security, and storage.",
    color: "#3ECF8E",
    icon:
      "https://cdn.simpleicons.org/supabase/3ECF8E",
  },

  /* =========================
     DEVELOPMENT TOOLS
     ========================= */

  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Containerizing applications and development environments.",
    color: "#2496ED",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.MAVEN]: {
    id: 19,
    name: "maven",
    label: "Maven",
    shortDescription:
      "Java project build and dependency management.",
    color: "#C71A36",
    icon:
      "https://cdn.simpleicons.org/apachemaven/C71A36",
  },

  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    shortDescription:
      "Version control and collaborative software development.",
    color: "#F05032",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 21,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Source control, collaboration, and project hosting.",
    color: "#FFFFFF",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.GITHUBACTIONS]: {
    id: 22,
    name: "githubactions",
    label: "GitHub Actions",
    shortDescription:
      "CI/CD workflows for automated testing and deployment.",
    color: "#2088FF",
    icon:
      "https://cdn.simpleicons.org/githubactions/2088FF",
  },

  [SkillNames.VERCEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deployment and hosting for modern web applications.",
    color: "#FFFFFF",
    icon:
      "https://cdn.simpleicons.org/vercel/FFFFFF",
  },

  /* =========================
     AI / ML
     ========================= */

  [SkillNames.OLLAMA]: {
    id: 24,
    name: "ollama",
    label: "Ollama",
    shortDescription:
      "Running local LLMs for AI-powered applications.",
    color: "#FFFFFF",
    icon:
      "https://cdn.simpleicons.org/ollama/FFFFFF",
  },

  [SkillNames.GEMINI]: {
    id: 25,
    name: "gemini",
    label: "Gemini",
    shortDescription:
      "Generative AI APIs for multimodal and RAG applications.",
    color: "#8E75B2",
    icon:
      "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },

  [SkillNames.LLMINTEGRATION]: {
    id: 26,
    name: "llmintegration",
    label: "LLM Integration",
    shortDescription:
      "Integrating large language models into application workflows.",
    color: "#8E75B2",
    icon:
      "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },

  [SkillNames.RAG]: {
    id: 27,
    name: "rag",
    label: "RAG",
    shortDescription:
      "Retrieval-Augmented Generation for grounded AI applications.",
    color: "#8E75B2",
    icon:
      "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },

  [SkillNames.CLIP]: {
    id: 28,
    name: "clip",
    label: "CLIP",
    shortDescription:
      "Image and text embeddings for multimodal retrieval.",
    color: "#FFD21E",
    icon:
      "https://cdn.simpleicons.org/huggingface/FFD21E",
  },

  [SkillNames.DENSEPOSE]: {
    id: 29,
    name: "densepose",
    label: "DensePose",
    shortDescription:
      "Human body surface mapping and computer vision.",
    color: "#FFFFFF",
    icon:
      "https://cdn.simpleicons.org/meta/FFFFFF",
  },

  [SkillNames.OPENCV]: {
    id: 30,
    name: "opencv",
    label: "OpenCV",
    shortDescription:
      "Computer vision and real-time image processing.",
    color: "#5C3EE8",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },

  /* =========================
     DEVELOPMENT / DESIGN
     ========================= */

  [SkillNames.VSCODE]: {
    id: 31,
    name: "vscode",
    label: "VS Code",
    shortDescription:
      "Development environment for coding, debugging, and project workflows.",
    color: "#007ACC",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  [SkillNames.CURSOR]: {
    id: 32,
    name: "cursor",
    label: "Cursor",
    shortDescription:
      "AI-assisted code editing and software development.",
    color: "#FFFFFF",
    icon:
      "https://cdn.simpleicons.org/cursor/FFFFFF",
  },

  [SkillNames.FIGMA]: {
    id: 33,
    name: "figma",
    label: "Figma",
    shortDescription:
      "UI design, wireframing, prototyping, and design systems.",
    color: "#F24E1E",
    icon:
      "https://cdn.simpleicons.org/figma/F24E1E",
  },

  [SkillNames.CANVA]: {
    id: 34,
    name: "canva",
    label: "Canva",
    shortDescription:
      "Visual design, presentations, and creative assets.",
    color: "#00C4CC",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
};

/* =========================================================
   TECH STACK
   ========================================================= */

export const TECH_STACK_GROUPS: {
  title: string;
  skills: Skill[];
}[] = [
  {
    title: "Languages",
    skills: [
      SKILLS[SkillNames.JAVA],
      SKILLS[SkillNames.JAVASCRIPT],
      SKILLS[SkillNames.CPP],
      SKILLS[SkillNames.PYTHON],
    ],
  },

  {
    title: "Frontend",
    skills: [
      SKILLS[SkillNames.HTML],
      SKILLS[SkillNames.CSS],
      SKILLS[SkillNames.JAVASCRIPT],
      SKILLS[SkillNames.REACT],
      SKILLS[SkillNames.NEXTJS],
      SKILLS[SkillNames.TAILWIND],
    ],
  },

  {
    title: "Backend",
    skills: [
      SKILLS[SkillNames.SPRINGBOOT],
      SKILLS[SkillNames.NODEJS],
      SKILLS[SkillNames.EXPRESS],
      SKILLS[SkillNames.RESTAPIS],
    ],
  },

  {
    title: "Databases",
    skills: [
      SKILLS[SkillNames.POSTGRESQL],
      SKILLS[SkillNames.MYSQL],
      SKILLS[SkillNames.MONGODB],
      SKILLS[SkillNames.SUPABASE],
    ],
  },

  {
    title: "Tools & AI",
    skills: [
      SKILLS[SkillNames.DOCKER],
      SKILLS[SkillNames.MAVEN],
      SKILLS[SkillNames.GIT],
      SKILLS[SkillNames.GITHUB],
      SKILLS[SkillNames.GITHUBACTIONS],
      SKILLS[SkillNames.VERCEL],
      SKILLS[SkillNames.OLLAMA],
      SKILLS[SkillNames.GEMINI],
      SKILLS[SkillNames.LLMINTEGRATION],
      SKILLS[SkillNames.RAG],
      SKILLS[SkillNames.OPENCV],
      SKILLS[SkillNames.CLIP],
      SKILLS[SkillNames.DENSEPOSE],
      SKILLS[SkillNames.VSCODE],
      SKILLS[SkillNames.CURSOR],
      SKILLS[SkillNames.FIGMA],
      SKILLS[SkillNames.CANVA],
    ],
  },
];

export const TECH_STACK: Skill[] =
  TECH_STACK_GROUPS.flatMap((group) => group.skills);

/* =========================================================
   EXPERIENCE
   ========================================================= */

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
    startDate: "Jan 2026",
    endDate: "Feb 2026",
    title: "Full Stack Development Intern",
    company: "NextEra Code",
    description: [
      "Worked as a frontend lead on a Nurse Staffing Management System using Next.js, Tailwind CSS, Supabase, REST APIs, and PostgreSQL.",
      "Implemented database operations, authentication workflows, and business-rule validations for nurse scheduling and assignment workflows.",
      "Collaborated with a development team to integrate APIs, debug application issues, and deliver functional features.",
    ],
    skills: [
      SkillNames.JAVASCRIPT,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TAILWIND,
      SkillNames.SUPABASE,
      SkillNames.RESTAPIS,
      SkillNames.POSTGRESQL,
    ],
  },

  {
    id: 2,
    startDate: "Nov 2025",
    endDate: "Dec 2025",
    title: "UI/UX Intern",
    company: "Smaran.ai",
    description: [
      "Designed and improved user interfaces for a student-focused quiz application with a simple and kid-friendly experience.",
      "Redesigned the SmaranAI website using wireframes and a clean visual system focused on usability and accessibility.",
      "Worked on minimal layouts, soft colors, and intuitive user flows for student-facing products.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.REACT,
      SkillNames.FIGMA,
    ],
  },

  {
    id: 3,
    startDate: "Oct 2025",
    endDate: "Nov 2025",
    title: "Web Development Intern",
    company: "Vault of Codes",
    description: [
      "Developed responsive web application components and integrated frontend workflows with backend APIs.",
      "Debugged application issues and optimized UI functionality while working in a collaborative development environment.",
    ],
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JAVASCRIPT,
      SkillNames.REACT,
    ],
  },
];

/* =========================================================
   THEME MESSAGES
   ========================================================= */

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
    "Dark mode activated! Thank you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

export type ProjectDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  howItWorks: string[];
  techStack: string[];
  technicalDetails?: string[];
  challenges?: string[];
  limitations?: string[];
  github: string;
  live?: string;
  screenshots: string[];
};

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "ai-sql-generator",
    title: "AI SQL Generator",

    shortDescription:
      "An AI-powered developer tool that converts natural-language requirements into SQL queries using a prepared PostgreSQL schema.",

    overview:
      "AI SQL Generator is a full-stack developer tool that converts natural-language requests into SQL queries. The application combines a Next.js frontend with a Java Spring Boot backend, PostgreSQL schema metadata, Spring JDBC, and a locally hosted Ollama model using Qwen2.5-Coder 1.5B.",

    problem:
      "Writing SQL queries can require knowledge of SQL syntax, table structures, column names, filtering conditions, and joins. The goal of this project was to provide a simpler natural-language interface for generating SQL.",

    solution:
      "The application accepts an English description from the user and processes it through the Spring Boot backend. The backend uses the prepared PostgreSQL schema and AI generation flow to produce SQL. The application also provides authentication, query history, SQL explanations, and validation.",

    features: [
      "Natural-language to SQL generation",
      "JWT-based user authentication",
      "Registration and login",
      "Protected dashboard, query, and history pages",
      "SQL query explanation",
      "Prepared PostgreSQL schema metadata",
      "Query history for users",
      "SQL and input validation",
      "Ollama with Qwen2.5-Coder 1.5B",
      "Dockerized frontend, backend, and PostgreSQL",
      "Docker Compose based setup",
    ],

    howItWorks: [
      "The user enters a natural-language SQL requirement.",
      "The Next.js frontend sends the request to the Spring Boot REST API.",
      "The backend accesses the prepared PostgreSQL schema metadata.",
      "The AI service sends the relevant context to the locally running Ollama model.",
      "Qwen2.5-Coder generates the SQL query.",
      "The backend validates the generated SQL and input.",
      "The generated SQL and explanation are returned to the frontend.",
      "The query can be stored in the user's query history.",
    ],

    techStack: [
      "Java 25",
      "Spring Boot",
      "Spring Web MVC",
      "Spring JDBC",
      "JdbcTemplate",
      "Spring Security",
      "JWT",
      "PostgreSQL 17",
      "JSQLParser",
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Ollama",
      "Qwen2.5-Coder 1.5B",
      "Docker",
      "Docker Compose",
      "Maven",
    ],

    technicalDetails: [
      "REST APIs are implemented using Spring Boot.",
      "JdbcTemplate is used for database interaction and schema metadata access.",
      "Spring Security and JWT protect authenticated application routes.",
      "JSQLParser is used as part of SQL validation.",
      "Ollama runs the Qwen2.5-Coder 1.5B model locally.",
      "The frontend is built using Next.js 16 and React 19.",
      "The application can be started using Docker Compose.",
    ],

    limitations: [
      "The project generates SQL against a prepared schema.",
      "It does not display real user database data or return database query results to the user.",
      "The AI model is locally hosted through Ollama.",
    ],

    github: "https://github.com/Samruddhi192105/ai-sql-generator",

    screenshots: [
      "/assets/projects-screenshots/ai-sql-generator/1.png",
      "/assets/projects-screenshots/ai-sql-generator/2.png",
      "/assets/projects-screenshots/ai-sql-generator/3.png",
    ],
  },

  {
    slug: "secure-doc",
    title: "SecureDoc Manager",

    shortDescription:
      "A secure document management web application with authentication, private storage, search, and document versioning.",

    overview:
      "SecureDoc Manager is a full-stack document management application designed for securely uploading, organizing, searching, and managing private documents.",

    problem:
      "Managing personal documents can become difficult when files are scattered across different locations. The project focuses on providing a centralized interface with authentication and controlled document access.",

    solution:
      "The application uses Next.js together with Supabase Authentication, PostgreSQL, Storage, and Row Level Security to provide authenticated document management and private file access.",

    features: [
      "Secure user authentication",
      "Private document storage",
      "Upload and manage documents",
      "Document search and retrieval",
      "Dashboard",
      "Document versioning",
      "Responsive interface",
      "PostgreSQL database",
      "Supabase Storage",
      "Row Level Security",
    ],

    howItWorks: [
      "The user signs into the application using Supabase Authentication.",
      "Authenticated users can upload and manage their documents.",
      "Document metadata is stored in PostgreSQL.",
      "Files are stored using Supabase Storage.",
      "Row Level Security controls access to user-specific records.",
      "Documents can be searched and retrieved from the dashboard.",
      "Different versions of documents can be maintained.",
    ],

    techStack: [
      "Next.js",
      "JavaScript",
      "Supabase",
      "Supabase Auth",
      "PostgreSQL",
      "Supabase Storage",
      "Row Level Security",
      "REST APIs",
      "Vercel",
      "Git",
      "GitHub",
      "Figma",
    ],

    technicalDetails: [
      "The application uses Next.js App Router.",
      "Supabase Authentication handles user authentication.",
      "PostgreSQL stores document metadata.",
      "Supabase Storage handles private document files.",
      "Row Level Security restricts database access.",
      "Document versions are grouped and tracked within the application.",
    ],

    github: "https://github.com/Samruddhi192105/SecureDoc",

    live: "https://secure-doc-lac.vercel.app/",

    screenshots: [
      "/assets/projects-screenshots/securedoc/1.png",
      "/assets/projects-screenshots/securedoc/2.png",
      "/assets/projects-screenshots/securedoc/3.png",
      "/assets/projects-screenshots/securedoc/4.png",
    ],
  },

  {
    slug: "multimodal-rag",
    title: "Multimodal RAG",

    shortDescription:
      "A multimodal Retrieval-Augmented Generation system that retrieves relevant text and images from PDF documents before generating grounded answers.",

    overview:
      "Multimodal RAG is a document question-answering system that works with both text and images extracted from PDF files. It uses CLIP for shared text-image embeddings, ChromaDB for vector retrieval, and Gemini for generating grounded responses.",

    problem:
      "Traditional document retrieval systems often focus primarily on text. Important information in PDFs can also exist inside images, diagrams, and other visual content.",

    solution:
      "The system extracts both text and embedded images from PDFs, converts them into CLIP embeddings, stores them in ChromaDB, and retrieves the most relevant content for a user's question before sending the retrieved context to Gemini.",

    features: [
      "PDF document upload",
      "Text extraction using PyMuPDF",
      "Embedded image extraction",
      "Overlapping text chunking",
      "CLIP-based multimodal embeddings",
      "ChromaDB vector retrieval",
      "Top-k retrieval",
      "Page-specific retrieval",
      "Gemini-based grounded answers",
      "Streamlit chat interface",
      "Streamlit Cloud deployment",
    ],

    howItWorks: [
      "The user uploads a PDF document.",
      "PyMuPDF extracts text and embedded images.",
      "Text is divided into overlapping chunks.",
      "Text and images are represented using CLIP embeddings.",
      "Embeddings are stored in ChromaDB.",
      "The user's question is converted into a CLIP query embedding.",
      "The system retrieves the most relevant text and images.",
      "The retrieved context is passed to Gemini.",
      "Gemini generates a grounded response using the retrieved information.",
    ],

    techStack: [
      "Python",
      "Streamlit",
      "PyMuPDF",
      "OpenAI CLIP",
      "ChromaDB",
      "Google Gemini",
      "Pillow",
    ],

    technicalDetails: [
      "CLIP provides a shared embedding space for text and images.",
      "ChromaDB is used for vector similarity retrieval.",
      "PyMuPDF handles PDF text and image extraction.",
      "The system supports page-specific retrieval for questions referring to particular pages.",
      "The application retrieves only the top-k relevant results rather than reviewing the entire PDF for every question.",
    ],

    github: "https://github.com/Samruddhi192105/multimodal-rag",

    live: "https://multimodal-rag-web2.streamlit.app/",

    screenshots: [
      "/assets/projects-screenshots/multimodal-rag/1.png",
    ],
  },

  {
    slug: "densepose-human-body-surface-mapper",
    title: "DensePose Human Body Surface Mapper",

    shortDescription:
      "A computer vision application that maps visible human pixels to a canonical human body surface representation using DensePose.",

    overview:
      "DensePose Human Body Surface Mapper uses DensePose and Detectron2 to map visible human pixels from RGB images to a canonical representation of the human body surface.",

    problem:
      "Understanding where pixels belong on a human body requires more than simply detecting a person. The system needs to associate visible pixels with semantic body regions and surface coordinates.",

    solution:
      "The project uses DensePose to generate IUV representations and semantic body-part mappings, together with visualization and pixel-level analysis.",

    features: [
      "DensePose visualization",
      "IUV representation",
      "Body-part mapping",
      "Human detection information",
      "Body-part pixel analysis",
      "Confidence scores",
      "Bounding boxes",
      "Image processing",
      "Dockerized environment",
      "GitHub Actions CI",
    ],

    howItWorks: [
      "An RGB image containing a person is provided to the system.",
      "Detectron2 detects the human region.",
      "DensePose predicts body-surface information.",
      "The IUV representation is generated.",
      "Pixels are mapped to DensePose body-part regions.",
      "The system produces visual overlays and analysis information.",
      "Confidence scores and bounding-box information are included in the output.",
    ],

    techStack: [
      "Python",
      "Detectron2",
      "DensePose",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "Docker",
      "GitHub Actions",
    ],

    technicalDetails: [
      "I represents the DensePose body-part index.",
      "U represents the horizontal coordinate on the corresponding body surface.",
      "V represents the vertical coordinate on the corresponding body surface.",
      "The 24 DensePose patches are grouped into 14 semantic body regions.",
    ],

    limitations: [
      "The system maps visible human pixels.",
      "It does not reconstruct hidden body surfaces.",
      "It does not generate a complete 3D human model from a single RGB image.",
    ],

    github:
      "https://github.com/Samruddhi192105/densepose-human-body-surface-mapper",

    screenshots: [
      "/assets/projects-screenshots/densepose/1.png",
      "/assets/projects-screenshots/densepose/2.png",
      "/assets/projects-screenshots/densepose/3.png",
      "/assets/projects-screenshots/densepose/4.png",
    ],
  },

  {
    slug: "ar-face-filter",
    title: "AR Face Filter",

    shortDescription:
      "A real-time augmented reality face filter that tracks facial landmarks and dynamically overlays accessories using OpenCV and MediaPipe.",

    overview:
      "AR Face Filter is a real-time computer vision application that uses a webcam to detect facial landmarks and overlay augmented-reality accessories such as sunglasses, a mustache, and a hat.",

    problem:
      "AR face effects need to remain aligned with a moving face. Static image overlays do not work reliably when the user changes position, scale, or head orientation.",

    solution:
      "The application detects facial landmarks with MediaPipe and uses landmark coordinates, distance-based scaling, head tilt, rotation, and alpha blending to dynamically position the AR elements.",

    features: [
      "Real-time webcam processing",
      "Face landmark detection",
      "Sunglasses overlay",
      "Mustache overlay",
      "Hat overlay",
      "Dynamic position adjustment",
      "Dynamic size scaling",
      "Head-tilt handling",
      "Alpha blending",
      "FPS monitoring",
    ],

    howItWorks: [
      "The webcam captures a video frame.",
      "The frame is converted from BGR to RGB.",
      "MediaPipe detects facial landmarks.",
      "Eye landmarks are used to position the sunglasses.",
      "Mouth landmarks are used to position the mustache.",
      "Face and forehead landmarks are used to position the hat.",
      "Distances between landmarks are used for scaling.",
      "Head orientation is used to calculate rotation.",
      "The accessories are blended onto the original frame.",
      "The final AR frame is displayed in real time.",
    ],

    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Git",
      "GitHub",
    ],

    technicalDetails: [
      "Facial landmark coordinates are used as geometric reference points.",
      "Landmark distances help scale overlays according to face size.",
      "Head tilt is used to rotate the overlays.",
      "Alpha blending combines transparent AR assets with webcam frames.",
    ],

    github: "https://github.com/Samruddhi192105/AR-Face-Filter",

    screenshots: [
      "/assets/projects-screenshots/ar-face-filter/1.png",
    ],
  },

  {
    slug: "ai-agent-swarm",
    title: "AI Agent Swarm",

    shortDescription:
      "A multi-agent AI software engineering system that plans, generates, tests, reviews, and iterates on software projects.",

    overview:
      "AI Agent Swarm is a multi-agent software engineering system designed to automate stages of software development. A Spring Boot backend orchestrates specialized agents that work together to transform a user requirement into a generated software project.",

    problem:
      "Software development involves several connected stages including planning, implementation, testing, debugging, and review. Coordinating these stages manually can be repetitive and time-consuming.",

    solution:
      "The system separates software engineering tasks into specialized AI agents. A Planner creates the implementation plan, a Coder generates project files, a Tester validates the generated project, and a Reviewer checks quality and requirements.",

    features: [
      "Multi-agent AI architecture",
      "Planner agent",
      "Coder agent",
      "Tester agent",
      "Reviewer agent",
      "Iterative development workflow",
      "Spring Boot orchestration",
      "Docker sandbox",
      "Generated project export",
      "REST APIs",
      "CI/CD-ready architecture",
      "Local and free-tier LLM support",
    ],

    howItWorks: [
      "The user provides a software requirement.",
      "The Planner agent analyzes the requirement and creates an implementation plan.",
      "The Coder agent generates project files and source code.",
      "The Tester agent generates and runs tests.",
      "Build or runtime failures are detected.",
      "The Reviewer agent evaluates quality, bugs, missing requirements, and maintainability.",
      "The workflow can iterate based on the test and review results.",
      "The final generated project can be exported.",
    ],

    techStack: [
      "Java",
      "Spring Boot",
      "Spring Web",
      "REST APIs",
      "Maven",
      "LLM Agent Architecture",
      "Docker",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
    ],

    technicalDetails: [
      "Spring Boot acts as the central orchestration layer.",
      "Generated code is intended to execute inside an isolated Docker sandbox.",
      "The architecture supports configurable LLM providers and models.",
      "The project is designed with CI/CD workflows in mind.",
    ],

    github: "https://github.com/Samruddhi192105/ai-agent-swarm",

    screenshots: [
      "/assets/projects-screenshots/ai-agent-swarm/1.png",
      "/assets/projects-screenshots/ai-agent-swarm/2.png",
      "/assets/projects-screenshots/ai-agent-swarm/3.png",
    ],
  },

  {
    slug: "nurse-management-system",
    title: "Nurse Staffing Management System",

    shortDescription:
      "A full-stack workforce management platform connecting hospitals, staffing agencies, nurses, and administrators through role-based workflows.",

    overview:
      "The Nurse Staffing Management System is a full-stack platform designed to support nurse staffing and workforce management workflows between hospitals, staffing agencies, and administrators.",

    problem:
      "Nurse staffing involves multiple organizations and user roles with different responsibilities. A centralized system can organize role-specific workflows and provide controlled access to staffing information.",

    solution:
      "The application uses Next.js and Supabase to provide role-based dashboards, authentication, PostgreSQL data management, and Row Level Security.",

    features: [
      "Secure authentication",
      "Role-based access control",
      "Admin dashboard",
      "Staffing Agency dashboard",
      "Hospital dashboard",
      "Nurse staffing management",
      "Hospital workflows",
      "Agency workflows",
      "PostgreSQL database",
      "Row Level Security",
      "Responsive UI",
    ],

    howItWorks: [
      "Users authenticate through Supabase Authentication.",
      "The application determines the user's role.",
      "Users are directed to role-specific workflows and dashboards.",
      "Application data is stored in PostgreSQL.",
      "Row Level Security controls access to protected records.",
      "Hospitals and staffing agencies interact with the staffing workflow through the application.",
    ],

    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Next.js App Router",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security",
      "Git",
      "GitHub",
      "Vercel",
    ],

    technicalDetails: [
      "Next.js App Router is used for the frontend application.",
      "Supabase Authentication handles user authentication.",
      "PostgreSQL stores application data.",
      "Row Level Security provides database-level access control.",
      "Different user roles receive different dashboards and workflows.",
    ],

    github:
      "https://github.com/Samruddhi192105/NurseManagementSystem",

    screenshots: [
      "/assets/projects-screenshots/nurse-management/1.png",
      "/assets/projects-screenshots/nurse-management/2.png",
      "/assets/projects-screenshots/nurse-management/3.png",
    ],
  },

  {
    slug: "expense-tracker",
    title: "Expense Tracker",

    shortDescription:
      "A simple full-stack expense and income tracker with MySQL storage, Node.js APIs, balance tracking, and visual summaries.",

    overview:
      "Expense Tracker is a full-stack web application for recording income and expenses and tracking the resulting balance.",

    problem:
      "Manually tracking income and expenses can make it difficult to understand spending patterns and current balance.",

    solution:
      "The application provides a simple interface for entering financial records and uses a Node.js backend with MySQL to store and retrieve the data.",

    features: [
      "Add income",
      "Add expenses",
      "Track total balance",
      "Separate income and expense records",
      "MySQL database storage",
      "Node.js backend API",
      "Expense visualization",
      "Simple user interface",
    ],

    howItWorks: [
      "The user enters a title, amount, and transaction type.",
      "The frontend sends the transaction to the backend API.",
      "Node.js and Express process the request.",
      "The transaction is stored in MySQL.",
      "The frontend fetches the updated records.",
      "The application calculates and displays the current balance and expense information.",
    ],

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    technicalDetails: [
      "Node.js and Express provide the backend API.",
      "MySQL stores income and expense records.",
      "The frontend communicates with the backend through API requests.",
    ],

    github:
      "https://github.com/Samruddhi192105/ExpenseTracker",

    screenshots: [
      "/assets/projects-screenshots/expense-tracker/1.png",
      "/assets/projects-screenshots/expense-tracker/2.png",
      "/assets/projects-screenshots/expense-tracker/3.png",
    ],
  },
];