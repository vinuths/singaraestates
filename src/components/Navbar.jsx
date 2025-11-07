import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png"; // 👈 Replace with your actual logo

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span
            className={`text-2xl font-extrabold ${
              scrolled ? "text-blue-900" : "text-amber-400"
            }`}
          >
            Singara Estates
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Home */}
          <Link
            to="/"
            className={`relative font-medium group ${
              scrolled
                ? "text-blue-900 hover:text-amber-500"
                : "text-white hover:text-amber-400"
            }`}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Dropdown (About) */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition ${
                scrolled
                  ? "text-blue-900 hover:text-amber-500"
                  : "text-white hover:text-amber-400"
              }`}
            >
              About
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 top-8 bg-white text-blue-900 rounded-lg shadow-xl w-44 animate-fadeIn z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-amber-100"
                >
                  Who We Are
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 hover:bg-amber-100"
                >
                  Our Team
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 hover:bg-amber-100"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          {/* Properties */}
          <Link
            to="/properties"
            className={`relative font-medium group ${
              scrolled
                ? "text-blue-900 hover:text-amber-500"
                : "text-white hover:text-amber-400"
            }`}
          >
            Properties
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`relative font-medium group ${
              scrolled
                ? "text-blue-900 hover:text-amber-500"
                : "text-white hover:text-amber-400"
            }`}
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-amber-400 text-blue-900 px-5 py-2 rounded-full font-semibold hover:bg-amber-300 transition duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden ${scrolled ? "text-blue-900" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md text-blue-900 flex flex-col space-y-4 py-5 px-6 shadow-xl animate-slideDown">
          <Link to="/" className="font-semibold hover:text-amber-500">
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="w-full flex justify-between items-center font-semibold hover:text-amber-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              About
              <FaChevronDown
                className={`text-sm transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdownOpen && (
              <div className="flex flex-col mt-2 ml-4 space-y-2 text-sm">
                <Link to="/about" className="hover:text-amber-500">
                  Who We Are
                </Link>
                <Link to="/team" className="hover:text-amber-500">
                  Our Team
                </Link>
                <Link to="/careers" className="hover:text-amber-500">
                  Careers
                </Link>
              </div>
            )}
          </div>

          <Link to="/properties" className="font-semibold hover:text-amber-500">
            Properties
          </Link>
          <Link to="/contact" className="font-semibold hover:text-amber-500">
            Contact
          </Link>

          <Link
            to="/contact"
            className="bg-amber-400 text-blue-900 text-center py-2 rounded-lg font-semibold hover:bg-amber-300 transition"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
