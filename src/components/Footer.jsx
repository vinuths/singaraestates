import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-amber-400 mb-4">
            Singara Estates
          </h2>
          <p className="text-blue-100 mb-6">
            Building dreams with trust, innovation, and excellence.  
            Your trusted partner in premium real estate.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="bg-white/10 hover:bg-amber-400 hover:text-blue-900 p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-amber-400 hover:text-blue-900 p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-amber-400 hover:text-blue-900 p-3 rounded-full transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-amber-400 hover:text-blue-900 p-3 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-blue-100">
            <li>
              <a
                href="#about"
                className="hover:text-amber-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-amber-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#properties"
                className="hover:text-amber-400 transition-colors"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-blue-100">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-amber-400" />
              <span>123 Main Street, Singara City, India</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-amber-400" />
              <span>contact@singaraestates.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">
            Subscribe
          </h3>
          <p className="text-blue-100 mb-4">
            Get updates on our latest properties and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-400 text-blue-900 px-5 py-3 rounded-lg font-semibold hover:bg-amber-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative container mx-auto mt-12 border-t border-white/20 pt-6 text-center text-blue-200">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-semibold">Singara Estates</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
