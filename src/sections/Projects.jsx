import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Mukundh15";

const projects = [
  {
    name: "LFPortal",
    problem:
      "Built a secure Lost & Found reporting system to help users post, track, and recover items using image-based listings and role-based access.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Mukundh15/LFPortal",
    live: "https://lfportal.netlify.app/",
  },
  {
    name: "StayEasy",
    problem:
      "Solved the problem of discovering, listing, and managing short-term stays by building a full-stack accommodation platform with authentication, image uploads, and secure sessions.",
    tech: ["EJS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Mukundh15/StayEasy",
    live: "https://stayeasy-vjvt.onrender.com/listings",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [repoCount, setRepoCount] = useState(null);

  // 🔹 Fetch GitHub repo count
  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const data = await res.json();
        setRepoCount(data.public_repos);
      } catch (err) {
        console.error("GitHub API error:", err);
        setRepoCount(null);
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
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Projects
          </h2>
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

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mb-8">
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

              {/* Links */}
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

          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

            {/* Profile */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg font-semibold hover:text-cyan-400 transition"
            >
              <FaGithub className="text-3xl" />
              github.com/{GITHUB_USERNAME}
            </a>

            {/* Repo Count (Dynamic) */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">
                {repoCount !== null
                  ? `${repoCount} Repositories`
                  : "Repositories"}
              </span>
              <div
                className={`h-px w-24 ${
                  theme === "dark" ? "bg-zinc-700" : "bg-gray-300"
                }`}
              />
            </div>

          </div>

          {/* Streak Card */}
          <div
            className={`rounded-2xl border p-6 ${
              theme === "dark"
                ? "bg-zinc-900 border-zinc-800"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=${
                theme === "dark" ? "dark" : "light"
              }&hide_border=true`}
              alt="GitHub streak"
              className="mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
