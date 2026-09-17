import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import {
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

/* Simple technology icon used when a local logo is not available. */
const TextIcon = ({ text }: { text: string }) => (
  <span className="text-[10px] font-bold">{text}</span>
);

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const skill = (title: string, text: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <TextIcon text={text} />,
});

const PROJECT_SKILLS = {
  // Core / Backend
  java: skill("Java", "JAVA"),
  springboot: skill("Spring Boot", "SB"),
  springweb: skill("Spring Web", "SW"),
  rest: skill("REST APIs", "API"),
  maven: skill("Maven", "MVN"),

  // Frontend
  javascript: skill("JavaScript", "JS"),
  html: skill("HTML", "HTML"),
  css: skill("CSS", "CSS"),
  react: skill("React", "R"),
  next: skill("Next.js", "N"),
  tailwind: skill("Tailwind CSS", "TW"),
  shadcn: skill("shadcn/ui", "SH"),

  // Node
  node: skill("Node.js", "NODE"),
  express: skill("Express.js", "EXP"),

  // Databases / Backend Services
  postgresql: skill("PostgreSQL", "PG"),
  mysql: skill("MySQL", "SQL"),
  supabase: skill("Supabase", "SUPA"),

  // Security
  springSecurity: skill("Spring Security", "SEC"),
  jwt: skill("JWT", "JWT"),
  jdbc: skill("JDBC / JdbcTemplate", "JDBC"),

  // AI / GenAI
  ollama: skill("Ollama", "OLL"),
  qwen: skill("Qwen2.5-Coder", "Q"),
  llm: skill("LLM Agent Architecture", "LLM"),
  rag: skill("RAG", "RAG"),
  gemini: skill("Gemini", "G"),
  clip: skill("CLIP", "CLIP"),
  chroma: skill("ChromaDB", "CH"),

  // Python / AI
  python: skill("Python", "PY"),
  streamlit: skill("Streamlit", "ST"),
  pymupdf: skill("PyMuPDF", "PDF"),
  pillow: skill("Pillow", "PIL"),
  pytorch: skill("PyTorch", "PT"),
  detectron: skill("Detectron2", "D2"),
  densepose: skill("DensePose", "DP"),
  fastapi: skill("FastAPI", "FA"),
  numpy: skill("NumPy", "NP"),
  opencv: skill("OpenCV", "CV"),
  mediapipe: skill("MediaPipe", "MP"),

  // DevOps / Tools
  docker: skill("Docker", "DOC"),
  git: skill("Git", "GIT"),
  github: skill("GitHub", "GH"),
  githubactions: skill("GitHub Actions", "CI"),
  cicd: skill("CI/CD", "CI"),
};

const ProjectsLinks = ({
  live,
  repo,
}: {
  live?: string;
  repo?: string;
}) => {
  return (
    <div className="my-3 mb-8 flex flex-col items-center justify-start gap-3 md:flex-row">
      {live && live !== "#" && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant="default" size="sm">
            Visit Website
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </Button>
        </Link>
      )}

      {repo && repo !== "#" && (
        <Link
          className="flex gap-2 font-mono underline"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant="default" size="sm">
            GitHub
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  /* =========================================================
     1. AI SQL GENERATOR
     ========================================================= */

  {
    id: "ai-sql-generator",
    category: "AI Developer Tool",
    title: "AI SQL Generator",

    src: `${BASE_PATH}/ai-sql-generator/1.png`,

    screenshots: [
      `${BASE_PATH}/ai-sql-generator/1.png`,
      `${BASE_PATH}/ai-sql-generator/2.png`,
      `${BASE_PATH}/ai-sql-generator/3.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.javascript,
    PROJECT_SKILLS.tailwind,
  ],
  backend: [
    PROJECT_SKILLS.java,
    PROJECT_SKILLS.springboot,
    PROJECT_SKILLS.springweb,
    PROJECT_SKILLS.rest,
    PROJECT_SKILLS.postgresql,
    PROJECT_SKILLS.jdbc,
    PROJECT_SKILLS.springSecurity,
    PROJECT_SKILLS.jwt,
    PROJECT_SKILLS.ollama,
    PROJECT_SKILLS.qwen,
    PROJECT_SKILLS.docker,
  ],
},

    live: "#",

    github:
      "https://github.com/Samruddhi192105/ai-sql-generator",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Turn natural-language requirements into schema-aware SQL.
          </TypographyP>

          <TypographyP className="font-mono">
            AI SQL Generator is an AI-powered developer tool that converts
            natural-language requirements into SQL queries using the prepared
            database schema. The application combines a Spring Boot backend,
            PostgreSQL, and a locally running Ollama model using
            Qwen2.5-Coder.
          </TypographyP>

          <ProjectsLinks
            repo={this.github}
            live={this.live}
          />

          <TypographyH3 className="my-4 mt-8">
            Schema-aware SQL generation
          </TypographyH3>

          <p className="mb-2 font-mono">
            The backend retrieves database schema information from PostgreSQL
            system metadata using JdbcTemplate. This schema information is
            provided to the AI model so generated queries are based on the
            available tables and columns.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ai-sql-generator/1.png`,
              `${BASE_PATH}/ai-sql-generator/2.png`,
              `${BASE_PATH}/ai-sql-generator/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Validation and security
          </TypographyH3>

          <p className="mb-2 font-mono">
            SQL and input validation is used to detect invalid tables and
            columns and restrict unsafe generated queries. Spring Security
            with JWT authentication protects the application, while
            user-specific query history allows users to access previous
            generated queries.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Local AI and Docker
          </TypographyH3>

          <p className="mb-2 font-mono">
            The AI model runs locally through Ollama, avoiding dependence on a
            paid external AI API for SQL generation. The application is
            containerized using Docker.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     2. AI AGENT SWARM
     ========================================================= */

  {
    id: "ai-agent-swarm",
    category: "AI Engineering",
    title: "AI Agent Swarm",

    src: `${BASE_PATH}/ai-agent-swarm/1.png`,

    screenshots: [
      `${BASE_PATH}/ai-agent-swarm/1.png`,
      `${BASE_PATH}/ai-agent-swarm/2.png`,
      `${BASE_PATH}/ai-agent-swarm/3.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.tailwind,
  ],
  backend: [
    PROJECT_SKILLS.java,
    PROJECT_SKILLS.springboot,
    PROJECT_SKILLS.springweb,
    PROJECT_SKILLS.rest,
    PROJECT_SKILLS.maven,
    PROJECT_SKILLS.llm,
    PROJECT_SKILLS.docker,
    PROJECT_SKILLS.git,
    PROJECT_SKILLS.github,
    PROJECT_SKILLS.githubactions,
    PROJECT_SKILLS.cicd,
  ],
},

    live: "#",

    github:
      "https://github.com/Samruddhi192105/ai-agent-swarm",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            A multi-agent workflow for building and reviewing software.
          </TypographyP>

          <TypographyP className="font-mono">
            AI Agent Swarm is a multi-agent software engineering system where
            specialized AI agents collaborate across different stages of
            software development. A Spring Boot backend orchestrates the
            workflow between planning, coding, testing, and reviewing agents.
          </TypographyP>

          <ProjectsLinks
            repo={this.github}
            live={this.live}
          />

          <SlideShow
            images={[
              `${BASE_PATH}/ai-agent-swarm/1.png`,
              `${BASE_PATH}/ai-agent-swarm/2.png`,
              `${BASE_PATH}/ai-agent-swarm/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Multi-agent workflow
          </TypographyH3>

          <p className="mb-2 font-mono">
            The workflow starts with a user requirement and passes it through
            specialized agents. The Planner analyzes the requirement and
            creates an implementation plan. The Coder generates project files
            and source code. The Tester generates and runs tests to identify
            build or runtime failures, while the Reviewer evaluates the
            generated project for bugs, missing requirements, and
            maintainability.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Isolated execution
          </TypographyH3>

          <p className="mb-2 font-mono">
            Docker is used to provide an isolated and reproducible environment
            for executing generated code and testing project artifacts.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Development workflow
          </TypographyH3>

          <p className="mb-2 font-mono">
            The project is structured around Spring Boot, REST APIs, Maven,
            Docker, Git, GitHub, and GitHub Actions, making the system suitable
            for automated development and CI/CD workflows.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     3. SECUREDOC MANAGER
     ========================================================= */

  {
    id: "securedoc",
    category: "Secure Document Management",
    title: "SecureDoc Manager",

    src: `${BASE_PATH}/securedoc/1.png`,

    screenshots: [
      `${BASE_PATH}/securedoc/1.png`,
      `${BASE_PATH}/securedoc/2.png`,
      `${BASE_PATH}/securedoc/3.png`,
      `${BASE_PATH}/securedoc/4.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.javascript,
    PROJECT_SKILLS.tailwind,
  ],
  backend: [
    PROJECT_SKILLS.supabase,
  ],
},

    live: "https://secure-doc-lac.vercel.app/",

    github:
      "https://github.com/Samruddhi192105/SecureDoc",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            A private and organized space for important documents.
          </TypographyP>

          <TypographyP className="font-mono">
            SecureDoc Manager is a document management application for
            storing certificates, resumes, IDs, and other important documents
            in one organized place. It uses Supabase authentication, Row
            Level Security, and Storage for user-specific document access.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Document organization
          </TypographyH3>

          <p className="mb-2 font-mono">
            Users can upload, search, rename, replace, and delete documents.
            Files can be organized using titles and tags to make documents
            easier to find.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/securedoc/1.png`,
              `${BASE_PATH}/securedoc/2.png`,
              `${BASE_PATH}/securedoc/3.png`,
              `${BASE_PATH}/securedoc/4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Version management and access control
          </TypographyH3>

          <p className="mb-2 font-mono">
            Multiple versions of documents can be maintained using version
            tracking. Supabase Row Level Security ensures users can access
            only their own data, while controlled access is used for stored
            files.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     4. MULTIMODAL RAG
     ========================================================= */

  {
    id: "multimodal-rag",
    category: "Generative AI",
    title: "Multimodal RAG",

    src: `${BASE_PATH}/multimodal-rag/1.png`,

    screenshots: [
      `${BASE_PATH}/multimodal-rag/1.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.streamlit,
  ],
  backend: [
    PROJECT_SKILLS.pymupdf,
    PROJECT_SKILLS.pillow,
    PROJECT_SKILLS.clip,
    PROJECT_SKILLS.chroma,
    PROJECT_SKILLS.gemini,
    PROJECT_SKILLS.rag,
  ],
},

    live: "https://multimodal-rag-web2.streamlit.app/",

    github:
      "https://github.com/Samruddhi192105/multimodal-rag",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Ask questions about PDF documents using text and images.
          </TypographyP>

          <TypographyP className="font-mono">
            Multimodal RAG is a retrieval-augmented generation application
            that works with PDF documents containing both text and visual
            information. It extracts content from PDFs, creates embeddings,
            retrieves relevant information, and generates grounded answers.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Multimodal document retrieval
          </TypographyH3>

          <p className="mb-2 font-mono">
            PyMuPDF is used to extract PDF text and images. CLIP embeddings
            represent visual content and are stored in ChromaDB for
            similarity-based retrieval. Relevant retrieved content is then
            provided to Gemini for answer generation.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/multimodal-rag/1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Retrieval before generation
          </TypographyH3>

          <p className="mb-2 font-mono">
            Instead of sending the entire document to the model, the system
            retrieves relevant content based on the user's query and uses
            that context for grounded response generation.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     5. DENSEPOSE
     ========================================================= */

  {
    id: "densepose",
    category: "Computer Vision",
    title: "DensePose Human Body Surface Mapper",

    src: `${BASE_PATH}/densepose/1.png`,

    screenshots: [
      `${BASE_PATH}/densepose/1.png`,
      `${BASE_PATH}/densepose/2.png`,
      `${BASE_PATH}/densepose/3.png`,
      `${BASE_PATH}/densepose/4.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
  ],
  backend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.pytorch,
    PROJECT_SKILLS.detectron,
    PROJECT_SKILLS.densepose,
    PROJECT_SKILLS.fastapi,
    PROJECT_SKILLS.docker,
    PROJECT_SKILLS.githubactions,
    PROJECT_SKILLS.cicd,
  ],
},

    live: "#",

    github:
      "https://github.com/Samruddhi192105/densepose-human-body-surface-mapper",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Map human body surfaces from images and videos.
          </TypographyP>

          <TypographyP className="font-mono">
            DensePose Human Body Surface Mapper is a computer vision project
            using Detectron2 and DensePose to map pixels of a person's body
            to a predefined human surface representation.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Body surface mapping
          </TypographyH3>

          <p className="mb-2 font-mono">
            The application processes images and videos and generates
            DensePose-based visual outputs, including overlays, IUV
            representations, body-part maps, and analysis information.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/densepose/1.png`,
              `${BASE_PATH}/densepose/2.png`,
              `${BASE_PATH}/densepose/3.png`,
              `${BASE_PATH}/densepose/4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Dockerized execution
          </TypographyH3>

          <p className="mb-2 font-mono">
            The project supports Docker-based execution and can be configured
            for CPU or GPU processing depending on the available environment.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     6. NURSE MANAGEMENT SYSTEM
     ========================================================= */

  {
    id: "nurse-management",
    category: "Full-Stack Application",
    title: "Nurse Management System",

    src: `${BASE_PATH}/nurse-management/1.png`,

    screenshots: [
      `${BASE_PATH}/nurse-management/1.png`,
      `${BASE_PATH}/nurse-management/2.png`,
      `${BASE_PATH}/nurse-management/3.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.next,
    PROJECT_SKILLS.react,
    PROJECT_SKILLS.javascript,
    PROJECT_SKILLS.tailwind,
    PROJECT_SKILLS.shadcn,
  ],
  backend: [
    PROJECT_SKILLS.supabase,
  ],
},

    live: "#",

    github:
      "https://github.com/Samruddhi192105/NurseManagementSystem",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Role-based nurse staffing and shift management.
          </TypographyP>

          <TypographyP className="font-mono">
            Nurse Management System is a full-stack staffing management
            application developed with Next.js and Supabase. It provides
            separate workflows for Admin, Hospital, and Agency users to manage
            staffing operations and shifts.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Role-based workflows
          </TypographyH3>

          <p className="mb-2 font-mono">
            The application provides different workflows for Admin, Hospital,
            and Agency users. Authentication and Row Level Security are used
            to control access to application data.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/nurse-management/1.png`,
              `${BASE_PATH}/nurse-management/2.png`,
              `${BASE_PATH}/nurse-management/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Shift management
          </TypographyH3>

          <p className="mb-2 font-mono">
            The system supports nurse staffing and shift management while
            preventing duplicate shifts. The frontend uses Next.js, Tailwind
            CSS, and shadcn/ui with Supabase handling authentication and
            database access.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     7. AR FACE FILTER
     ========================================================= */

  {
    id: "ar-face-filter",
    category: "Computer Vision",
    title: "AR Face Filter",

    src: `${BASE_PATH}/ar-face-filter/1.png`,

    screenshots: [
      `${BASE_PATH}/ar-face-filter/1.png`,
    ],

    skills: {
  frontend: [
    PROJECT_SKILLS.python,
    PROJECT_SKILLS.opencv,
  ],
  backend: [
    PROJECT_SKILLS.mediapipe,
    PROJECT_SKILLS.numpy,
  ],
},

    live: "#",

    github:
      "https://github.com/Samruddhi192105/AR-Face-Filter",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Real-time augmented-reality face filters.
          </TypographyP>

          <TypographyP className="font-mono">
            AR Face Filter is a computer vision project that applies
            augmented-reality accessories to a detected face in real time.
            The project uses OpenCV and MediaPipe for face detection and
            landmark tracking.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Real-time face tracking
          </TypographyH3>

          <p className="mb-2 font-mono">
            Facial landmarks are used to determine the position of important
            points on the face so virtual accessories can be positioned
            relative to the user's face.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/ar-face-filter/1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Interactive filters
          </TypographyH3>

          <p className="mb-2 font-mono">
            The project demonstrates real-time overlays such as sunglasses,
            hats, and moustaches using webcam input.
          </p>
        </div>
      );
    },
  },

  /* =========================================================
     8. EXPENSE TRACKER
     ========================================================= */

  {
    id: "expense-tracker",
    category: "Full-Stack Web Application",
    title: "Expense Tracker",

    src: `${BASE_PATH}/expense-tracker/1.png`,

    screenshots: [
      `${BASE_PATH}/expense-tracker/1.png`,
      `${BASE_PATH}/expense-tracker/2.png`,
      `${BASE_PATH}/expense-tracker/3.png`,
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mysql,
      ],
    },

    live: "#",

    github:
      "https://github.com/Samruddhi192105/ExpenseTracker",

    get content() {
      return (
        <div>
          <TypographyP className="text-center font-mono text-2xl">
            Track income, expenses, budgets, and financial activity.
          </TypographyP>

          <TypographyP className="font-mono">
            Expense Tracker is a full-stack web application that helps users
            manage daily income and expenses. It maintains financial records
            in a MySQL database and displays updated information through a
            simple web interface.
          </TypographyP>

          <ProjectsLinks
            live={this.live}
            repo={this.github}
          />

          <TypographyH3 className="my-4 mt-8">
            Income and expense management
          </TypographyH3>

          <p className="mb-2 font-mono">
            Users can add income and expense entries by providing details such
            as title, amount, and transaction type. The application maintains
            separate income and expense records and calculates the total
            balance.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/expense-tracker/1.png`,
              `${BASE_PATH}/expense-tracker/2.png`,
              `${BASE_PATH}/expense-tracker/3.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Backend API and database
          </TypographyH3>

          <p className="mb-2 font-mono">
            The frontend communicates with a Node.js and Express.js backend
            through APIs. The backend stores and retrieves transaction data
            from MySQL, allowing the frontend to display updated financial
            information dynamically.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Budget and visualization
          </TypographyH3>

          <p className="mb-2 font-mono">
            The application also includes monthly budget management and
            visualizations that help users understand their spending activity.
          </p>
        </div>
      );
    },
  },
];

export default projects;