import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaTimes, FaBars } from 'react-icons/fa';
import { DiSublime } from 'react-icons/di';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navlink Styles - Reduced duration to 300ms for a snappier feel
  const base =
    'transition-all text-slate-300 hover:text-sky-300 md:hover:border-b-2 md:hover:border-sky-400 duration-300';
  const active =
    'text-sky-400 font-semibold duration-300 md:border-b-2 md:border-sky-400';

  return (
    <nav className="sticky top-5 z-50 mx-auto max-w-7xl px-2 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl">
      <div className="max-w-6xl mx-auto px-3 py-2 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent"
        >
          <div className="flex items-center space-around">
            <DiSublime className="text-sky-400 text-3xl drop-shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            SYB
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/hobby"
            >
              Hobby
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sky-400 text-xl p-2 transition-transform active:scale-90 transform duration-1000"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed Animation & Missing Links */}
      {/* Mobile Navigation - Overlay Style */}
      <div
        className={`absolute left-50 right-0 top-[calc(100%+10px)] transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-2 bg-slate-950/90 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl">
          <div className="px-4 py-8 flex flex-col space-y-6 items-center text-center">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blog"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/hobby"
              onClick={() => setMenuOpen(false)}
            >
              Hobby
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
