import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FULL_NAME = "Mukundh Dubasi";

const Hero = () => {
  const { theme } = useTheme();
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < FULL_NAME.length) {
      const timeout = setTimeout(() => {
        setTypedName((prev) => prev + FULL_NAME[index]);
        setIndex(index + 1);
      }, 200); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center px-6 pt-32 md:pt-0 overflow-hidden transition-colors ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
        } bg-[size:64px_64px]`}
      />

      {/* Spotlight */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-30 ${
          theme === "dark" ? "bg-cyan-500" : "bg-blue-400"
        }`}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left">

          {/* ROLE */}
          <span
            className={`inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide border ${
              theme === "dark"
                ? "bg-zinc-900/80 text-cyan-400 border-zinc-800"
                : "bg-gray-100 text-blue-600 border-gray-200"
            }`}
          >
            Full Stack Developer | MERN
          </span>

          {/* NAME WITH TYPING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {typedName}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* VALUE */}
          <p
            className={`mt-6 text-lg md:text-xl max-w-xl ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            I build <span className="font-semibold">scalable web applications</span> with
            clean code and modern tools. Passionate about{" "}
            <span className="font-semibold">React, Node.js, and MongoDB</span> —
            also experienced in Flask, Next.js & Cloud deployment.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0">
            {[
              { label: "Projects Built", value: "10+" },
              { label: "Available", value: "Immediately" },
              { label: "Core Stack", value: "MERN" },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl px-4 py-3 text-center border backdrop-blur ${
                  theme === "dark"
                    ? "bg-zinc-900/60 border-zinc-800"
                    : "bg-white/70 border-gray-200"
                }`}
              >
                <div className="text-lg font-semibold">
                  {item.value}
                </div>
                <div className="text-xs tracking-wide uppercase opacity-70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className={`px-8 py-3 rounded-full font-medium transition ${
                theme === "dark"
                  ? "bg-cyan-500 text-black hover:bg-cyan-400"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/1K_En5KYg6H6Vj9q4KFKrq9wnLvh-coqo/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3 rounded-full font-medium transition border ${
                theme === "dark"
                  ? "border-zinc-600 text-zinc-300 hover:border-white"
                  : "border-gray-400 text-gray-700 hover:border-gray-900"
              }`}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <img
              src="/profile.png"
              alt="Mukundh Dubasi"
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 shadow-xl ${
                theme === "dark"
                  ? "border-cyan-400"
                  : "border-blue-500"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full blur-2xl -z-10 ${
                theme === "dark"
                  ? "bg-cyan-400/30"
                  : "bg-blue-500/30"
              }`}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
