import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-accent font-medium"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="fixed top-0 w-full bg-[#0B0B0D]/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-9 w-9 object-cover rounded-full border border-border"
          />
          <span className="text-gray-200 font-semibold tracking-wide">
            KHUSH
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0B0B0D] border-t border-border transition-all duration-300 overflow-hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/resume" className={linkClass}>
            Resume
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
