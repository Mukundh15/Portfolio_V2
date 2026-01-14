import { useTheme } from "../context/ThemeContext";

/* ================= DATA ================= */

const programming = [
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-c-plain colored", label: "C" },
];

const webTech = [
  { icon: "devicon-html5-plain colored", label: "HTML" },
  { icon: "devicon-css3-plain colored", label: "CSS" },
  { icon: "devicon-tailwindcss-original colored", label: "Tailwind" },
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-nodejs-plain colored", label: "Node.js" },
  { icon: "devicon-express-original colored", label: "Express" },
];

const databases = [
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-mysql-plain colored", label: "MySQL" },
  { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
];

const tools = [
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-github-original colored", label: "GitHub" },
  { icon: "devicon-docker-plain colored", label: "Docker" },
  { icon: "devicon-postman-plain colored", label: "Postman" },
  { icon: "devicon-netlify-plain colored", label: "Netlify" },
  { icon: "devicon-firebase-plain colored", label: "Firebase" },
];

/* ================= COMPONENT ================= */

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-36 px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-28">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Skills
          </h2>
          <p
            className={`mt-6 text-lg max-w-xl mx-auto ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Practical skills built through real-world projects and internships
          </p>
        </div>

        <SkillSection title="Programming Languages" data={programming} />
        <SkillSection title="Web Technologies" data={webTech} />
        <SkillSection title="Databases" data={databases} />
        <SkillSection title="Tools & Deployment" data={tools} />

      </div>
    </section>
  );
};

export default Skills;

/* ================= SUB COMPONENTS ================= */

const SkillSection = ({ title, data }) => (
  <div className="mb-28">
    <h3 className="text-center text-3xl md:text-4xl font-semibold mb-16">
      {title}
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-20 gap-y-16 place-items-center">
      {data.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-4 group"
        >
          <i
            className={`${skill.icon} text-6xl md:text-7xl transition-transform duration-300 group-hover:scale-110`}
          />
          <span className="text-sm md:text-base font-medium tracking-wide opacity-80">
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);
