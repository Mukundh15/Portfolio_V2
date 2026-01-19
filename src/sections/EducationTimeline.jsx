import { useTheme } from "../context/ThemeContext";

const education = [
  {
    period: "2023 – Present",
    title: "Computer Science Engineering",
    org: "B V Raju Institute of Technology, Narsapur",
  },
  {
    period: "2021 – 2023",
    title: "Intermediate – MPC",
    org: "Resonance Junior College",
  },
  {
    period: "2019 – 2021",
    title: "Secondary Education (Class IX & X)",
    org: "S R Prime School",
  },
  {
    period: "2009 - 2019",
    title: "Primary & Middle School",
    org: "Oasis Public School",
  },
];

const EducationTimeline = () => {
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`py-14 sm:py-24 px-3 sm:px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-20 text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.25em] text-xs text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-extrabold">
            Education
          </h2>

          <p
            className={`mt-3 sm:mt-6 text-base sm:text-lg leading-relaxed ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            A concise view of my academic background and the institutions
            that shaped my foundation in computer science.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
          {education.map((e, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 sm:gap-10">
              <div className="text-cyan-400 text-base sm:text-lg font-semibold md:text-right">
                {e.period}
              </div>
              <div className="relative pl-5 sm:pl-8">
                <div
                  className={`absolute left-0 top-2 h-full w-[2px] ${
                    theme === "dark"
                      ? "bg-zinc-700"
                      : "bg-gray-300"
                  }`}
                />

                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">
                  {e.title}
                </h3>

                <p
                  className={`mt-1 sm:mt-2 text-sm sm:text-lg ${
                    theme === "dark"
                      ? "text-zinc-400"
                      : "text-gray-600"
                  }`}
                >
                  {e.org}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationTimeline;
