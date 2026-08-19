import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">G</span>,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SQL</span>,
  },
  github: {
    title: "GitHub REST",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">GH</span>,
  },
  oauth: {
    title: "OAuth",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Auth</span>,
  },
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
  pinecone: {
    title: "Pinecone",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Pc</span>,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">LC</span>,
  },
  webrtc: {
    title: "WebRTC",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">RTC</span>,
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "codeplanner",
    category: "AI architecture briefing",
    title: "CodePlanner",
    src: "/assets/projects-screenshots/codeplanner/home-repo.png",
    screenshots: [
      "home-repo.png",
      "home-plan.png",
      "repo-traffic.png",
      "repo-architecture.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.github,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.oauth,
      ],
    },
    live: "https://code-planner.vercel.app",
    github: "https://github.com/Ajyendu/CodePlanner",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Know your system scale. Or plan an app that does not exist yet.
          </TypographyP>
          <TypographyP className="font-mono ">
            CodePlanner is a Next.js briefing tool. Paste a public GitHub URL,
            or write a few sentences about a new product and the load it must
            take. It does not clone the repo — GitHub REST pulls the tree and
            selected files into a ~180K-token Gemini window. The UI answers
            like a briefing: traffic numbers, a map of who talks to whom, the
            stack, security scoring, 2x/4x/8x scale-up paths, and a chat that
            stays with that project.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Two modes, one home</TypographyH3>
          <p className="font-mono mb-2">
            Toggle <strong>REPO</strong> to paste <code>owner/repo</code> and
            hit Read it — you get a source-backed briefing: daily/peak load,
            security score, stack, architecture map, request workflow,
            bottlenecks, and 2x / 4x / 8x changes. Toggle{" "}
            <strong>NO REPO</strong> to describe a product and the traffic
            (e.g. 20k DAU, 50 orders / min peak) — you get one recommended
            architecture: who talks to whom, capacity for the traffic you
            typed, stack, tables, building blocks, workflow, and how to deploy.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codeplanner/home-repo.png`,
              `${BASE_PATH}/codeplanner/home-plan.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Existing repo — traffic, safety, scale
          </TypographyH3>
          <p className="font-mono mb-2">
            The briefing is a vertical conversation of cards. Capacity is one
            estimate shown three ways (daily, busy second, people at once) —
            not three different guesses — with a confidence stamp and evidence
            from the files. Security is a score out of 100 plus protections
            already in source (Helmet, rate limits, httpOnly cookies) and
            gaps. Architecture is a fan-out map (client, app, auth, database,
            cache, storage) and a workflow for one request. Then three
            bottlenecks and 2x / 4x / 8x cards with the change to make.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codeplanner/repo-traffic.png`,
              `${BASE_PATH}/codeplanner/repo-architecture.png`,
              `${BASE_PATH}/codeplanner/repo-scale.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Greenfield plan — one architecture you could ship
          </TypographyH3>
          <p className="font-mono mb-2">
            No scores, verdicts, or 2x/4x/8x ladders. You get a named
            architecture, capacity sized to the traffic you typed, a suggested
            stack, tables with fields, product-specific building blocks (live
            maps, payments, realtime), a one-request workflow, and a deploy
            pick. Chat, copy, and Save PDF keep the thread; GitHub OAuth
            unlocks private repos, higher rate limits, and the last 24 visits
            in SQLite. Redis caches repo indexes, blobs, and analyses so a
            second look is cheap.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codeplanner/plan-architecture.png`,
              `${BASE_PATH}/codeplanner/plan-stack.png`,
              `${BASE_PATH}/codeplanner/plan-workflow.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "healthcura",
    category: "Healthcare platform",
    title: "HealthCura",
    src: "/assets/projects-screenshots/healthcura/landing.png",
    screenshots: ["gallery-01.png", "gallery-02.png", "gallery-03.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://health-cura.vercel.app",
    github: "https://github.com/Ajyendu/Health-Cura",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Care, connected. Book doctors, manage visits, keep records.
          </TypographyP>
          <TypographyP className="font-mono ">
            HealthCura is a full-stack healthcare app for patients and
            providers: discover doctors on a map, book appointments, and manage
            medical records with secure, role-based access. It&apos;s a monorepo
            — React + Vite + TypeScript on the client, Express 5 + MongoDB on
            the API — so one command runs the whole stack.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Dual roles, maps, booking
          </TypographyH3>
          <p className="font-mono mb-2">
            Separate flows for patients and doctors. JWT lives in httpOnly
            cookies with role-aware route guards. Leaflet maps (clustered
            markers) power doctor discovery and location-aware browsing.
            Appointments generate slots, validate bookings, and handle
            conflicts, with reason notes and scheduling rules on both sides of
            the lifecycle.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/healthcura/gallery-01.png`,
              `${BASE_PATH}/healthcura/gallery-02.png`,
              `${BASE_PATH}/healthcura/gallery-03.png`,
              `${BASE_PATH}/healthcura/gallery-04.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Records, API, deploy</TypographyH3>
          <p className="font-mono mb-2">
            Medical files upload to the server and stay tied to patient
            profiles. REST under <code>/api/v1</code> covers auth, users,
            doctors, appointments, and records. Hardening: rate limiting,
            Helmet, express-validator, bcrypt, cookie-parser, CORS locked to
            deployed origins. Locally Vite proxies to Express on :8005; in
            production the Vercel SPA forwards <code>/api/v1</code> to the
            Render API. Docker Compose for MongoDB. Stack: React 18, Tailwind,
            Radix UI, React Leaflet, Mongoose.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/healthcura/gallery-05.png`,
              `${BASE_PATH}/healthcura/gallery-06.png`,
              `${BASE_PATH}/healthcura/gallery-07.png`,
              `${BASE_PATH}/healthcura/doctor.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "blahblah",
    category: "Real-time communication",
    title: "Blah Blah",
    src: "/assets/projects-screenshots/blahblah/landing.png",
    screenshots: ["gallery-01.png", "gallery-02.png", "gallery-03.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.zustand,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.webrtc,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "https://blahblah-red.vercel.app",
    github: "https://github.com/Ajyendu/Blah-Blah",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Chat, calls, and creativity in one place.
          </TypographyP>
          <TypographyP className="font-mono ">
            Blah Blah is a real-time chat product: message friends, accept chat
            requests, hop on audio/video calls, then stay in the sidebar for
            notes, a shared drawing canvas, watch-together, mini-games, and Chat
            DNA analytics. React + Vite + Zustand on the client; Express +
            MongoDB + Socket.IO on one HTTP server. Themeable light/dark UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Conversations and presence
          </TypographyH3>
          <p className="font-mono mb-2">
            Chat list, search, unread badges, friend request / accept / reject,
            and user codes for adding people. JWT (Bearer + optional cookies),
            bcrypt passwords, encrypted message fields where implemented.
            Cloudinary for avatars. Socket.IO rooms handle delivery, typing,
            online presence, and drawing sync. Timed and scheduled messages
            included.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blahblah/gallery-01.png`,
              `${BASE_PATH}/blahblah/gallery-02.png`,
              `${BASE_PATH}/blahblah/gallery-03.png`,
              `${BASE_PATH}/blahblah/gallery-04.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Calls, watch party, Chat DNA
          </TypographyH3>
          <p className="font-mono mb-2">
            Audio/video calling over WebRTC with Socket.IO signaling.
            Watch-together, collaborative drawing, per-chat notes, truth-or-dare,
            and Chat DNA charts (Recharts). REST under <code>/api</code> for
            auth, messages, conversations, notes, drawings, chat-dna, and
            watch-party. CORS for Vercel plus <code>*.vercel.app</code>{" "}
            previews, compression, and a health route. Optional OpenAI / Google
            AI for bot features. Frontend on Vercel, API on Render.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blahblah/gallery-05.png`,
              `${BASE_PATH}/blahblah/gallery-06.png`,
              `${BASE_PATH}/blahblah/gallery-07.png`,
              `${BASE_PATH}/blahblah/gallery-08.png`,
              `${BASE_PATH}/blahblah/gallery-09.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
