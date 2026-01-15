import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-28 px-6 transition-colors ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-blue-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT – MAIN PITCH */}
          <div className="space-y-6 text-lg leading-relaxed">

            <p className={theme === "dark" ? "text-zinc-300" : "text-gray-700"}>
              I am a <span className="font-semibold">Full Stack Developer</span>{" "}
              with strong hands-on experience in building scalable and
              production-ready web applications using the{" "}
              <span className="font-medium">MERN stack</span>.
            </p>

            {/* 🔥 PLACEMENT POWER LINE */}
            <p className="font-semibold text-blue-500">
              Built multiple college and club websites, completed a
              pre-graduate internship, and delivered{" "}
              <span className="font-bold">10+ real-world full-stack projects</span>.
            </p>

            <p className={theme === "dark" ? "text-zinc-300" : "text-gray-700"}>
              I have practical exposure to cloud deployment, authentication
              systems, REST APIs, and database-driven applications, and I enjoy
              solving real-world problems through clean, maintainable code.
            </p>
          </div>

          {/* RIGHT – QUICK HIGHLIGHTS */}
          <div
            className={`rounded-xl p-6 space-y-5 border ${
              theme === "dark"
                ? "border-zinc-800 bg-zinc-900/60"
                : "border-gray-200 bg-white"
            }`}
          >
            <div>
              <h4 className="font-semibold">🎓 Education</h4>
              <p className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
                B.Tech – Computer Science
              </p>
            </div>

            <div>
              <h4 className="font-semibold">💼 Experience</h4>
              <p className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
                Pre-Graduate Internship + Academic & Personal Projects
              </p>
            </div>

            <div>
              <h4 className="font-semibold">🛠 Technical Focus</h4>
              <p className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
                MERN Stack, Cloud Deployment, REST APIs, Databases
              </p>
            </div>

            <div>
              <h4 className="font-semibold">🚀 Career Goal</h4>
              <p className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
                Software Engineer / Full Stack Developer
              </p>
            </div>
          </div>

        </div>

        {/* RECRUITER CTA BANNER */}
        <div
          className={`mt-16 rounded-2xl p-8 text-center border-2 border-dashed ${
            theme === "dark"
              ? "border-cyan-500/50 bg-cyan-500/5"
              : "border-blue-500/50 bg-blue-50"
          }`}
        >
          <p className="text-xl font-semibold mb-2">
            🎯 Actively seeking SDE / Full Stack Developer roles
          </p>
          <p className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
            Internship completed • 10+ projects built • Available to join immediately
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full font-medium transition ${
                theme === "dark"
                  ? "bg-cyan-500 text-black hover:bg-cyan-400"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className={`px-6 py-2 rounded-full font-medium transition border ${
                theme === "dark"
                  ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  : "border-blue-500 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
