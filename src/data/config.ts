const config = {
  title: "Ajyendu Chaudhary | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ajyendu Chaudhary, a full-stack developer specializing in TypeScript, Node.js, real-time web apps, and Generative AI. Discover CodePlanner, HealthCura, Blah Blah, and more.",
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
    "CodePlanner",
    "HealthCura",
    "Blah Blah",
    "Generative AI",
    "Gemini",
    "GitHub",
  ],
  author: "Ajyendu Chaudhary",
  email: "ajyenduc@gmail.com",
  site: "https://ajyendu.dev",

  // GitHub stars button in the header — flagship project
  githubUsername: "Ajyendu",
  githubRepo: "CodePlanner",

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
