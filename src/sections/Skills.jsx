import { useTheme } from "../context/ThemeContext";

const programming = [
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-typescript-plain colored", label: "TypeScript" },
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-c-plain colored", label: "C" },
];

const frontend = [
  { icon: "devicon-react-original colored", label: "React.js" },
  // { icon: "devicon-nextjs-plain", label: "Next.js" },
  { icon: "devicon-html5-plain colored", label: "HTML5" },
  { icon: "devicon-css3-plain colored", label: "CSS3" },
  { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
  { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
  { icon: "devicon-redux-original colored", label: "Redux" },
];

const backend = [
  { icon: "devicon-nodejs-plain colored", label: "Node.js" },
  { icon: "devicon-express-original", label: "Express.js" },
  { icon: "devicon-flask-original", label: "Flask" },
  { icon: "devicon-socketio-original", label: "Socket.io" },
];

const databases = [
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-mysql-plain colored", label: "MySQL" },
  { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
];

const devops = [
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-github-original", label: "GitHub" },
  { icon: "devicon-docker-plain colored", label: "Docker" },
  { icon: "devicon-amazonwebservices-plain-wordmark colored", label: "AWS" },
  { icon: "devicon-linux-plain", label: "Linux" },
];

const tools = [
  { icon: "devicon-vscode-plain colored", label: "VS Code" },
  { icon: "devicon-postman-plain colored", label: "Postman" },
  { icon: "devicon-figma-plain colored", label: "Figma" },
  { icon: "devicon-npm-original-wordmark colored", label: "npm" },
  { icon: "devicon-netlify-plain colored", label: "Netlify" },
  { icon: "devicon-vercel-original", label: "Vercel" },
  { icon: "devicon-firebase-plain colored", label: "Firebase" },
];


const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`py-14 sm:py-24 px-3 sm:px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
            Skills
          </h2>
          <p
            className={`mt-3 sm:mt-6 text-base sm:text-lg max-w-xl mx-auto ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Practical skills built through real-world projects and internships
          </p>
        </div>
        <SkillSection title="Programming Languages" data={programming} />
        <SkillSection title="Frontend Development" data={frontend} />
        <SkillSection title="Backend Development" data={backend} />
        <SkillSection title="Databases" data={databases} />
        <SkillSection title="DevOps & Cloud" data={devops} />
        <SkillSection title="Tools & Platforms" data={tools} />
      </div>
    </section>
  );
};

export default Skills;

const SkillSection = ({ title, data }) => (
  <div className="mb-10 sm:mb-20">
    <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-12">
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 md:gap-y-12 place-items-center">
      {data.map((skill, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 sm:gap-4 group"
        >
          <i
            className={`${skill.icon} text-4xl sm:text-6xl md:text-7xl transition-transform duration-300 group-hover:scale-110`}
          />
          <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide opacity-80">
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);
