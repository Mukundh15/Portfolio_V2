import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const navItems = ["Home", "About", "Education", "Skills","Projects", "Experience", "Contact"];

// smooth scroll
const scrollToSection = (id) => {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (mobileMenuOpen) return setShowNavbar(true);

      setShowNavbar(current < 10 || current < lastScrollY);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[70] hidden md:block transition-all duration-300
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <SlideTabs />
      </div>

      {/* Mobile Hamburger */}
      <div className="fixed top-5 left-5 z-[70] md:hidden">
        <HamburgerButton
          open={mobileMenuOpen}
          setOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
          theme={theme}
        />
      </div>

      {/* Mobile Theme Toggle */}
      <div className="fixed top-5 right-5 z-[70] md:hidden">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur ${
            theme === "dark"
              ? "bg-zinc-900/70 text-yellow-400"
              : "bg-white/80 text-orange-500 shadow-lg"
          }`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] backdrop-blur flex items-center justify-center md:hidden ${
              theme === "dark" ? "bg-zinc-950/90" : "bg-white/95"
            }`}
          >
            <ul
              className={`space-y-8 text-2xl text-center ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {navItems.map((label) => (
                <li
                  key={label}
                  className={`cursor-pointer transition ${
                    theme === "dark"
                      ? "hover:text-cyan-400"
                      : "hover:text-blue-500"
                  }`}
                  onClick={() => {
                    scrollToSection(label);
                    setMobileMenuOpen(false);
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = () => {
  const { theme, toggleTheme } = useTheme();
  const tabRefs = useRef([]);
  const [active, setActive] = useState("Home");
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const index = navItems.indexOf(active);
    const el = tabRefs.current[index];
    if (el) {
      setCursor({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  }, [active]);

  return (
    <div className="flex items-center gap-3">
      <ul
        className={`relative flex px-2 py-2 rounded-full backdrop-blur ${
          theme === "dark" ? "bg-zinc-900/70" : "bg-white/80 shadow-lg"
        }`}
      >
        {navItems.map((label, i) => (
          <li
            key={label}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => {
              setActive(label);
              scrollToSection(label);
            }}
            className={`px-5 h-10 flex items-center uppercase cursor-pointer z-10 transition ${
              active === label
                ? theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
                : theme === "dark"
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            {label}
          </li>
        ))}
        <motion.li
          animate={cursor}
          className={`absolute h-10 rounded-full ${
            theme === "dark" ? "bg-zinc-600/70" : "bg-blue-500/70"
          }`}
        />
      </ul>

      <button
        onClick={toggleTheme}
        className={`p-3 rounded-full backdrop-blur ${
          theme === "dark"
            ? "bg-zinc-900/70 text-yellow-400"
            : "bg-white/80 text-orange-500 shadow-lg"
        }`}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

const HamburgerButton = ({ open, setOpen, theme }) => (
  <button
    onClick={setOpen}
    className={`p-3 rounded-full backdrop-blur ${
      theme === "dark"
        ? "bg-zinc-900/70 text-yellow-400"
        : "bg-white/80 text-orange-500 shadow-lg"
    }`}
  >
    {open ? "Close" : "Menu"}
  </button>
);

export default PillNavbar;
