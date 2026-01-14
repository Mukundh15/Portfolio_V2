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
      className={`py-32 px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header – tighter & grounded */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.25em] text-xs text-cyan-400">
            My Journey
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            Educations
          </h2>

          <p
            className={`mt-6 text-lg leading-relaxed ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            A concise view of my academic background and the institutions
            that shaped my foundation in computer science.
          </p>
        </div>

        {/* Entries */}
        <div className="max-w-4xl mx-auto space-y-20">
          {education.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10"
            >
              {/* Year – stronger anchor */}
              <div className="text-cyan-400 text-lg font-semibold md:text-right">
                {e.period}
              </div>

              {/* Content */}
              <div className="relative pl-8">
                {/* Stronger vertical line */}
                <div
                  className={`absolute left-0 top-2 h-full w-[2px] ${
                    theme === "dark"
                      ? "bg-zinc-700"
                      : "bg-gray-300"
                  }`}
                />

                <h3 className="text-2xl md:text-3xl font-bold">
                  {e.title}
                </h3>

                <p
                  className={`mt-2 text-lg ${
                    theme === "dark"
                      ? "text-zinc-400"
                      : "text-gray-600"
                  }`}
                >
                  {e.org}
                </p>

                {/* Accent */}
                {/* <div className="mt-6 w-10 h-[2px] bg-cyan-400" /> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationTimeline;
