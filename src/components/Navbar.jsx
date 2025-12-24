import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive 
      ? "text-neon font-medium relative" 
      : "text-gray-300 hover:text-white transition-colors duration-300";

  return (
    <nav className="fixed top-0 w-full bg-bg/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with glow effect */}
        <Link 
          to="/" 
          className="font-arcade text-neon text-xl hover:text-neon/80 transition-colors duration-300 relative group"
        >
          KHUSHNAWAJ
          <span className="absolute -inset-1 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-neon"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={linkClass}>
            <span className="relative">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </span>
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            <span className="relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </span>
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            <span className="relative">
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </span>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <span className="relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neon hover:text-neon/80 transition-colors duration-300 relative w-8 h-8"
          aria-label="Menu"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 mt-1 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-neon transition-all duration-300 mt-1 ${open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu with slide effect */}
      <div className={`md:hidden bg-panel/95 backdrop-blur-sm border-t border-gray-800 transition-all duration-300 ease-in-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-4 space-y-4">
          <NavLink 
            onClick={() => setOpen(false)} 
            to="/" 
            className={({ isActive }) => `block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-neon bg-neon/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
          >
            Home
          </NavLink>
          <NavLink 
            onClick={() => setOpen(false)} 
            to="/projects" 
            className={({ isActive }) => `block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-neon bg-neon/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
          >
            Projects
          </NavLink>
          <NavLink 
            onClick={() => setOpen(false)} 
            to="/resume" 
            className={({ isActive }) => `block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-neon bg-neon/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
          >
            Resume
          </NavLink>
          <NavLink 
            onClick={() => setOpen(false)} 
            to="/contact" 
            className={({ isActive }) => `block py-2 px-3 rounded transition-colors duration-300 ${isActive ? 'text-neon bg-neon/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}