const config = {
  title: "Ajyendu Chaudhary | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ajyendu Chaudhary, a full-stack developer specializing in TypeScript, Node.js, real-time web apps, and Generative AI. Discover RepoMind, HealthCura, Blah Blah, and more.",
    short:
      "Portfolio of Ajyendu Chaudhary — full-stack developer building scalable backends, real-time apps, and GenAI products.",
  },
  keywords: [
    "Ajyendu",
    "Ajyendu Chaudhary",
    "portfolio",
    "full-stack developer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "RepoMind",
    "HealthCura",
    "Blah Blah",
    "Generative AI",
    "LangChain",
    "RAG",
  ],
  author: "Ajyendu Chaudhary",
  email: "ajyenduc@gmail.com",
  site: "https://ajyendu.dev",

  // GitHub stars button in the header — flagship project
  githubUsername: "Ajyendu",
  githubRepo: "RepoMind",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "https://github.com/Ajyendu",
    leetcode: "https://leetcode.com/u/ajyendu",
  },
};
export { config };
