import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

// smooth scroll helper
const scrollToSection = (id) => {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-black text-zinc-500"
          : "bg-white text-gray-500"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Created By (TOP) */}
        <div className="pt-10 pb-4 text-center text-xs tracking-widest uppercase">
          Created by Mukundh
        </div>

        {/* Divider */}
        <div
          className={`h-px w-full ${
            theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
          }`}
        />

        {/* Footer Content */}
        <div className="py-8 flex flex-col gap-6">

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-cyan-400 transition"
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-lg">
            <a
              href="https://github.com/Mukundh15"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mukundh-dubasi-7a7158293/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs">
            © {new Date().getFullYear()} Dubasi Mukundh. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
