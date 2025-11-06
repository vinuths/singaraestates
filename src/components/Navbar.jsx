import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-primary">Singara Estates</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-secondary transition">Home</Link>
          <Link to="/properties" className="hover:text-secondary transition">Properties</Link>
          <Link to="/contact" className="hover:text-secondary transition">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col space-y-3 py-4 px-6 bg-white shadow">
          <Link to="/" className="hover:text-secondary transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/properties" className="hover:text-secondary transition" onClick={() => setOpen(false)}>Properties</Link>
          <Link to="/contact" className="hover:text-secondary transition" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
