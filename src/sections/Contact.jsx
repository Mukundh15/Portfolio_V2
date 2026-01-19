import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xojjvqeb", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`py-14 sm:py-24 px-3 sm:px-6 ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className={`inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${
            theme === "dark"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-green-100 text-green-700 border border-green-200"
          }`}
        >
          🟢 Open to Opportunities
        </span>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
          Let's Build Something Together
        </h2>
        <p
          className={`mt-2 sm:mt-4 text-base sm:text-lg ${
            theme === "dark" ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Looking for SDE / Full Stack Developer roles • Available to start immediately
        </p>
        <p
          className={`mt-1 sm:mt-2 text-xs sm:text-base ${
            theme === "dark" ? "text-zinc-500" : "text-gray-500"
          }`}
        >
          📍 India • Open to Remote & On-site
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center gap-6 sm:gap-10">
          <a
            href="https://github.com/Mukundh15"
            target="_blank"
            rel="noreferrer"
            className={`text-2xl sm:text-3xl transition ${
              theme === "dark"
                ? "text-zinc-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mukundh-dubasi-7a7158293/"
            target="_blank"
            rel="noreferrer"
            className={`text-2xl sm:text-3xl transition ${
              theme === "dark"
                ? "text-zinc-400 hover:text-blue-500"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mukundhdubasi9@gmail.com"
            className={`text-2xl sm:text-3xl transition ${
              theme === "dark"
                ? "text-zinc-400 hover:text-red-400"
                : "text-gray-600 hover:text-red-500"
            }`}
          >
            <FaEnvelope />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 sm:mt-20 space-y-5 sm:space-y-8 text-left"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className={`w-full p-3 sm:p-4 text-base sm:text-lg border-b bg-transparent outline-none transition ${
              theme === "dark"
                ? "border-zinc-700 placeholder-zinc-500 focus:border-white"
                : "border-gray-300 placeholder-gray-500 focus:border-black"
            }`}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className={`w-full p-3 sm:p-4 text-base sm:text-lg border-b bg-transparent outline-none transition ${
              theme === "dark"
                ? "border-zinc-700 placeholder-zinc-500 focus:border-white"
                : "border-gray-300 placeholder-gray-500 focus:border-black"
            }`}
          />
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className={`w-full p-3 sm:p-4 text-base sm:text-lg border-b bg-transparent outline-none resize-none transition ${
              theme === "dark"
                ? "border-zinc-700 placeholder-zinc-500 focus:border-white"
                : "border-gray-300 placeholder-gray-500 focus:border-black"
            }`}
          />
          <div className="pt-4 sm:pt-6 flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-black text-white hover:bg-gray-800"
              } ${status === "sending" && "opacity-60 cursor-not-allowed"}`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {status !== "idle" && status !== "sending" && (
          <div
            className={`mt-6 sm:mt-10 mx-auto max-w-md rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center border ${
              theme === "dark"
                ? status === "success"
                  ? "bg-zinc-900 border-zinc-700 text-zinc-200"
                  : "bg-zinc-900 border-zinc-700 text-zinc-300"
                : status === "success"
                ? "bg-gray-50 border-gray-200 text-gray-800"
                : "bg-gray-50 border-gray-200 text-gray-700"
            }`}
          >
            <p className="text-sm sm:text-base font-medium">
              {status === "success"
                ? "Message sent successfully. I’ll get back to you soon."
                : "Something went wrong. Please try again later."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
