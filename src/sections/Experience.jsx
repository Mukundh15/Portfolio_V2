import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-32 px-6 ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Experience
          </h2>
          <p
            className={`mt-4 text-lg ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Currently seeking internship opportunities while strengthening real-world skills
          </p>
          <div className="mt-6 mx-auto h-1 w-20 bg-blue-500 rounded-full" />
        </div>

        {/* Internship */}
        <div
          className={`rounded-2xl p-10 border mb-16 ${
            theme === "dark"
              ? "bg-zinc-900/60 border-zinc-800"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-semibold">
            Software Developer Intern
          </h3>

          <p className="mt-1 font-medium text-blue-500">
            Pragament Tech Solutions
          </p>

          <p
            className={`mt-2 text-sm ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            September 2025 – November 2025 · Internship Completed
          </p>

          <p
            className={`mt-6 leading-relaxed ${
              theme === "dark" ? "text-zinc-300" : "text-gray-700"
            }`}
          >
            Worked as a Software Developer Intern focusing on backend and full-stack
            development. Built and optimized REST APIs using Flask and MongoDB,
            and contributed to frontend features using React.js and Next.js.
            This experience helped me understand real project workflows,
            backend efficiency, and production-level code practices.
          </p>
        </div>

        {/* Leadership & Community */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Leadership & Community Roles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <RoleCard
              title="Technical Head"
              org="Coding Brigade BVRIT (CBB)"
              linkedin="https://www.linkedin.com/company/coding-brigade-bvrit/"
              instagram="https://www.instagram.com/coding_brigade"
              theme={theme}
            />

            <RoleCard
              title="PR Lead"
              org="Google Developer Groups On Campus (GDGOC)"
              linkedin="linkedin.com/company/gdg-bvrit"
              instagram="https://www.instagram.com/gdgc.bvritn"
              theme={theme}
            />

            <RoleCard
              title="Technical Lead"
              org="Student Research Cell (SRC)"
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

/* ---------- ROLE CARD ---------- */

const RoleCard = ({ title, org, linkedin, instagram, placeholder, theme }) => {
  const styles = placeholder
    ? theme === "dark"
      ? "bg-zinc-900/40 border-zinc-700 text-zinc-400 border-dashed"
      : "bg-gray-50 border-gray-300 text-gray-500 border-dashed"
    : theme === "dark"
    ? "bg-zinc-900/60 border-zinc-800"
    : "bg-gray-50 border-gray-200";

  return (
    <div className={`relative rounded-xl p-8 border ${styles}`}>
      <h4 className="text-lg font-semibold">
        {title}
      </h4>

      <p className="mt-1 font-medium text-blue-500">
        {org}
      </p>

      {!placeholder && (linkedin || instagram) && (
        <div className="absolute bottom-5 right-5 flex gap-4 text-lg">
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
