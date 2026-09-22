const config = {
  title: "Samruddhi Ghawade | Full-Stack Developer | Backend Engineer | Generative AI Enthusiast",
  description: {
    long: "Explore the portfolio of Samruddhi Ghawade, a Computer Science Engineering student and full-stack developer building scalable web applications, backend systems, and AI-powered products.",
    short:
      "Portfolio of Samruddhi Ghawade — full-stack developer building web applications, backend systems, and AI-powered products.",
  },
  keywords: [
    "Samruddhi",
    "Samruddhi Ghawade",
    "portfolio",
    "full-stack developer",
    "backend developer",
    "Java",
    "Spring Boot",
    "JavaScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Generative AI",
    "AI",
    "GitHub",
  ],
  author: "Samruddhi Ghawade",
  email: "ghawadesamruddhi19@gmail.com",
  site: "http://localhost:3000",

  // GitHub stars button in the header — flagship project
  githubUsername: "Samruddhi192105",
  githubRepo: "ai-sql-generator",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/samruddhi-ghawade-967744327/",
    instagram: "https://www.instagram.com/samruddhighawade/",
    facebook: "",
    github: "https://github.com/Samruddhi192105",
  },
};
export { config };
