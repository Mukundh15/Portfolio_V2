import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import FAQS2 from "../data/chatbotFAQs.json";
import { useTheme } from "../context/ThemeContext";

const FAQS = [
  {
    q: "introduction",
    label: "👋 Introduction",
    a: "Hi! I'm Mukundh Dubasi, a Full Stack Developer specializing in the MERN stack. I build scalable web apps and enjoy solving real-world problems using clean, efficient code."
  },
  {
    q: "skills",
    label: "🛠️ Skills",
    a: "I work mainly with React, Node.js, Express, MongoDB, JavaScript, Tailwind CSS, REST APIs, Git/GitHub, and Cloudinary."
  },
  {
    q: "projects",
    label: "📂 Projects",
    a: "I’ve built projects like LFPortal (Lost & Found system), StayEasy (rental platform), and AI-based projects like PARIJANA and TaskMate AI."
  },
  {
    q: "different",
    label: "🚀 What makes you different?",
    a: "I focus on building complete, production-ready apps, not just demos. I understand both frontend and backend and constantly improve my skills."
  },
  {
    q: "team",
    label: "🤝 Team & Internships",
    a: "Yes! I’ve worked in teams, participated in hackathons, and collaborated under mentors."
  },
  {
    q: "learning",
    label: "📚 Currently Learning",
    a: "I'm improving my skills in full-stack architecture, AI integration, and scalable backend systems."
  },
  {
    q: "contact",
    label: "📩 Contact",
    a: "You can reach me at mukundhdubasi9@gmail.com or through the contact section of this portfolio."
  }
];


const Chatbot = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm Mukundh’s portfolio bot. Ask me anything below!" }
  ]);
    const [showToast, setShowToast] = useState(false);
    const toastTimerRef = useRef();
    const toastHideTimerRef = useRef();

    useEffect(() => {
      toastTimerRef.current = setTimeout(() => {
        setShowToast(true);
        toastHideTimerRef.current = setTimeout(() => setShowToast(false), 5000);
      }, 10000);
      return () => {
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        if (toastHideTimerRef.current) clearTimeout(toastHideTimerRef.current);
      };
    }, []);

    useEffect(() => {
      if (open) {
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        setShowToast(false);
      }
    }, [open]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAnswer = (text) => {
    const lower = text.toLowerCase();
    const mainMatch = FAQS.find(faq => lower.includes(faq.q));
    if (mainMatch) return mainMatch.a;
    for (let item of FAQS2) {
      for (let key of item.keys) {
        if (lower.includes(key)) return item.a;
      }
    }
    return "🤖 I can help you with Mukundh’s skills, projects, experience, or contact info. Try asking something related!";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { from: "user", text }]);
    setTyping(true);

    setTimeout(() => {
      const reply = findAnswer(text);
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 600);

    setInput("");
  };

  return (
    <>
      {showToast && (
        <div className="fixed z-[100] flex flex-col items-end" style={{ right: '2.5rem', bottom: '6.5rem' }}>
          <div className="relative flex items-center gap-3 bg-white/90 dark:bg-gray-900/90 text-cyan-900 dark:text-cyan-200 px-5 py-3 rounded-2xl shadow-2xl border border-cyan-400/40 animate-fade-in-up" style={{ minWidth: '260px', maxWidth: '320px' }}>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white shadow-md">
              <FaRobot />
            </span>
            <span>
              <span className="font-semibold">I'm here to help!</span><br />Ask me about Mukundh’s skills, projects, or experience.
            </span>
            <div className="absolute right-0 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-900"></div>
          </div>
        </div>
      )}
      {!open && (
        <button
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl hover:scale-110 transition
            ${theme === "dark"
              ? "bg-gradient-to-br from-gray-800 to-gray-700 text-cyan-300 border border-gray-600"
              : "bg-gradient-to-br from-blue-600 to-cyan-500 text-white border border-blue-200"}
          `}
          onClick={() => setOpen(true)}
        >
          <FaComments size={24} />
        </button>
      )}

      {open && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-80 rounded-2xl overflow-hidden
            border border-white/30 dark:border-cyan-400/40
            shadow-2xl shadow-cyan-500/20
            bg-white/10 dark:bg-gray-900/10
            backdrop-blur-[8px] backdrop-saturate-150
          `}
        >
          <div
            className={`flex justify-between items-center px-4 py-3
              ${theme === "dark"
                ? "bg-gradient-to-r from-gray-800 to-gray-700 text-cyan-300 border-b border-gray-700"
                : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-b border-blue-200"}
            `}
          >
            <div className="flex items-center gap-2">
              <FaRobot />
              <span className="font-semibold">Mukundh’s Bot</span>
            </div>
            <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>
          <div
            className={`p-4 h-72 overflow-y-auto space-y-3 ${theme === "dark" ? "bg-transparent" : "bg-transparent"} chat-scrollbar-hide`}
            onWheel={e => {
              const el = e.currentTarget;
              const atTop = el.scrollTop === 0;
              const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
              if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`px-4 py-2 rounded-xl text-sm max-w-[80%] shadow
                    ${msg.from === "bot"?
                      theme === "dark"
                        ? "bg-gray-800/70 text-cyan-200 border border-gray-700"
                        : "bg-blue-100/80 text-blue-900 border border-blue-200"
                      : theme === "dark"
                        ? "bg-cyan-700/80 text-white border border-cyan-900"
                        : "bg-blue-600/90 text-white border border-blue-600"}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className={`text-sm animate-pulse ${theme === "dark" ? "text-cyan-400" : "text-blue-500"}`}>
                🤖 Typing...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
          <div className={`p-3 border-t flex flex-col gap-2
            ${theme === "dark" ? "bg-transparent border-gray-700" : "bg-transparent border-blue-100"}
          `}>
            <div
              className="flex gap-2 overflow-x-auto pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FAQS.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(faq.q)}
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition
                    ${theme === "dark"
                      ? "bg-gray-800 text-cyan-300 border border-cyan-900 hover:bg-cyan-900 hover:text-white"
                      : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"}
                  `}
                >
                  {faq.label}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className={`flex-1 px-3 py-2 rounded-full border outline-none transition
                  ${theme === "dark"
                    ? "bg-gray-800 text-cyan-200 border-gray-700 focus:ring-2 focus:ring-cyan-600 placeholder:text-cyan-400"
                    : "bg-white text-blue-900 border-blue-200 focus:ring-2 focus:ring-blue-400 placeholder:text-blue-400"}
                `}
              />
              <button
                className={`p-2 rounded-full transition
                  ${theme === "dark"
                    ? "bg-cyan-700 text-white hover:bg-cyan-600"
                    : "bg-blue-600 text-white hover:bg-cyan-500"}
                `}
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
