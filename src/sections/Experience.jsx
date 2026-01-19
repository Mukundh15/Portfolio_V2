import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-14 sm:py-24 px-3 sm:px-6 ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold">
            Experience
          </h2>
          <p
            className={`mt-2 sm:mt-4 text-base sm:text-lg ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Professional experience and leadership roles that shaped my journey
          </p>
          <div className="mt-3 sm:mt-6 mx-auto h-1 w-12 sm:w-20 bg-blue-500 rounded-full" />
        </div>
        <div
          className={`rounded-2xl p-5 sm:p-8 border mb-8 sm:mb-16 ${
            theme === "dark"
              ? "bg-zinc-900/60 border-zinc-800"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <h3 className="text-lg sm:text-2xl font-semibold">
            Software Developer Intern
          </h3>
          <p className="mt-1 font-medium text-blue-500">
            Pragament Tech Solutions
          </p>
          <p
            className={`mt-1 sm:mt-2 text-xs sm:text-sm ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            September 2025 – November 2025 · Internship Completed
          </p>
          <p
            className={`mt-4 sm:mt-6 leading-relaxed ${
              theme === "dark" ? "text-zinc-300" : "text-gray-700"
            }`}
          >
            Worked as a Software Developer Intern focusing on backend and full-stack development. Built and optimized REST APIs using Flask and MongoDB,
            and contributed to frontend features using React.js and Next.js.
          </p>
          <div className="mt-4 sm:mt-6">
            <h4 className={`font-semibold mb-2 sm:mb-3 ${theme === "dark" ? "text-zinc-200" : "text-gray-800"}`}>
              Key Contributions:
            </h4>
            <ul className={`space-y-1 sm:space-y-2 ${theme === "dark" ? "text-zinc-300" : "text-gray-700"}`}>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">▹</span>
                Developed and optimized RESTful APIs improving response efficiency
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">▹</span>
                Built responsive UI components using React.js and Next.js
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">▹</span>
                Collaborated in agile workflows with production-level code practices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">▹</span>
                Integrated MongoDB for efficient data storage and retrieval
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-8">
            Leadership & Community Roles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <RoleCard
              title="Technical Head"
              org="Coding Brigade BVRIT"
              linkedin="https://www.linkedin.com/company/coding-brigade-bvrit/"
              instagram="https://www.instagram.com/coding_brigade"
              theme={theme}
            />
            <RoleCard
              title="PR Lead"
              org="Google Developer Groups On Campus"
              linkedin="https://www.linkedin.com/in/gdg-on-campus-bvrit/"
              instagram="https://www.instagram.com/gdgc.bvritn"
              theme={theme}
            />
            <RoleCard
              title="Technical Lead"
              org="Student Research Cell"
              linkedin="https://www.linkedin.com/in/src-bvrit/"
              instagram="https://www.instagram.com/src.bvrit"
              theme={theme}
            />
            <RoleCard
              title="Campus Ambassador"
              org="BeingZero Campus Ambassador"
              linkedin="https://www.linkedin.com/company/being-zero/"
              theme={theme}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const RoleCard = ({ title, org, linkedin, instagram, placeholder, theme }) => {
  const styles = placeholder
    ? theme === "dark"
      ? "bg-zinc-900/40 border-zinc-700 text-zinc-400 border-dashed"
      : "bg-gray-50 border-gray-300 text-gray-500 border-dashed"
    : theme === "dark"
    ? "bg-zinc-900/60 border-zinc-800"
    : "bg-gray-50 border-gray-200";
  return (
    <div className={`relative rounded-xl p-4 sm:p-8 border ${styles}`}>
      <h4 className="text-base sm:text-lg font-semibold">
        {title}
      </h4>
      <p className="mt-1 font-medium text-blue-500">
        {org}
      </p>
      {!placeholder && (linkedin || instagram) && (
        <div className="absolute bottom-4 right-4 flex gap-3 sm:gap-4 text-base sm:text-lg">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
