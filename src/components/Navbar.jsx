import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { FiMoon, FiSun, FiX, FiMenu } from "react-icons/fi";
import { toggleTheme } from "../store/themeSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.theme.mode);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0B0B0D] border-b border-gray-200 dark:border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-9 w-9 rounded-full border border-gray-200 dark:border-[#1F2937]"
          />
          <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
            KHUSH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-accent"
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-accent"
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-accent"
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-accent"
          >
            Contact
          </NavLink>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-lg border border-gray-200 dark:border-[#1F2937]"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200 p-2"
        >
          <FiMenu />
        </button>
      </div>

      {/* FULLSCREEN MENU */}
      <div
        className={`
          fixed inset-0 z-[60] md:hidden
          bg-white dark:bg-[#0B0B0D]
          transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-[#1F2937]">
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
            Menu
          </span>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-700 dark:text-gray-300"
          >
            <FiX />
          </button>
        </div>

        {/* Center Links */}
        <div className="flex flex-col items-center justify-center gap-6 h-[85%]">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-accent"
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-accent"
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-accent"
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-3xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-accent"
          >
            Contact
          </NavLink>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="mt-8 p-3 rounded-lg border border-gray-200 dark:border-[#1F2937] text-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
