import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Mukundh15";

const projects = [
  {
    name: "LFPortal",
    problem:
      "Built a secure Lost & Found reporting system with role-based access control, image-based listings via Cloudinary, and JWT authentication — reducing item recovery time for campus users.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/Mukundh15/LFPortal",
    live: "https://lfportal.netlify.app/",
    highlights: ["Role-based access", "Image uploads", "Secure auth"],
  },
  {
    name: "StayEasy",
    problem:
      "Full-stack Airbnb-style accommodation platform with user authentication, Cloudinary image uploads, session management, and CRUD operations for property listings.",
    tech: ["EJS", "Node.js", "Express", "MongoDB", "Cloudinary", "Passport.js"],
    github: "https://github.com/Mukundh15/StayEasy",
    live: "https://stayeasy-vjvt.onrender.com/listings",
    highlights: ["Auth system", "Cloud storage", "MVC architecture"],
  },
  {
    name: "Real-Time Chat App",
    problem:
      "Developed a real-time messaging application with instant message delivery, online user status, and typing indicators using WebSocket technology.",
    tech: ["React", "Spring Boot", "WebSocket","MongoDB"],
    github: "https://github.com/Mukundh15/chat-web-usign-springboot",
    highlights: ["Real-time messaging", "WebSockets"],
  },
  {
    name: "More Projects",
    problem:
      "Built 10+ full-stack projects including college websites, club portals, REST APIs, and database-driven applications. Explore my GitHub for the complete collection.",
    tech: ["MERN", "Flask", "Next.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/Mukundh15?tab=repositories",
    highlights: ["10+ projects", "Various tech stacks", "Open source"],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [repoCount, setRepoCount] = useState(null);
  const [statsLoaded, setStatsLoaded] = useState(true);

  const githubStatsUrl =
    theme === "dark"
      ? `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&hide_border=true&rank_icon=github`
      : `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=default&hide_border=true&rank_icon=github`;

  // Fetch GitHub repo count
  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "User-Agent": "portfolio-app",
            },
          }
        );

        if (!res.ok) throw new Error("GitHub API failed");

        const data = await res.json();
        setRepoCount(data.public_repos);
      } catch (err) {
        console.error("GitHub API error:", err);
        setRepoCount("—");
      }
    };

    fetchRepoCount();
  }, []);

  return (
    <section
      id="projects"
      className={`py-32 px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold">Projects</h2>
          <p
            className={`mt-6 text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Solving real-world problems through production-ready applications
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`rounded-3xl border p-10 transition hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-zinc-900/60 border-zinc-800 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.25)]"
                  : "bg-gray-50 border-gray-200 hover:shadow-lg"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {project.name}
              </h3>

              <p
                className={`leading-relaxed mb-6 ${
                  theme === "dark" ? "text-zinc-300" : "text-gray-700"
                }`}
              >
                <span className="font-medium">Problem Solved:</span>{" "}
                {project.problem}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-sm px-3 py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-zinc-800 text-zinc-300"
                        : "bg-white text-gray-700 border"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Key Features */}
              {project.highlights && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs px-2 py-1 rounded-md font-medium ${
                        theme === "dark"
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-6 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:underline"
                >
                  <FaGithub /> GitHub Repo
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GITHUB ACTIVITY */}
        <div className="max-w-5xl mx-auto">
          {/* Header - always visible */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg font-semibold hover:text-cyan-400 transition"
            >
              <FaGithub className="text-3xl" />
              github.com/{GITHUB_USERNAME}
            </a>

            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">
                {repoCount !== null ? `${repoCount} Repositories` : "Repositories"}
              </span>
              <div
                className={`hidden sm:block h-px w-24 ${
                  theme === "dark" ? "bg-zinc-700" : "bg-gray-300"
                }`}
              />
            </div>

          </div>

          {statsLoaded ? (
            /* Stats Image - show if loaded */
            <div
              className={`rounded-2xl border p-6 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <img
                src={githubStatsUrl}
                alt="GitHub stats"
                className="mx-auto w-full max-w-md"
                loading="lazy"
                onError={() => setStatsLoaded(false)}
              />
            </div>
          ) : (
            /* Fallback Card - show only if stats fails */
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className={`block text-center p-8 rounded-2xl border transition hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-zinc-900/60 border-zinc-800 hover:border-cyan-500/50"
                  : "bg-gray-50 border-gray-200 hover:border-blue-400"
              }`}
            >
              <p className={`text-lg ${theme === "dark" ? "text-zinc-300" : "text-gray-700"}`}>
                Check out my contributions and projects on GitHub →
              </p>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
