import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Claude Clone</h1>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-3xl z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
          <li><a href="#work" className="hover:text-gray-300">Work</a></li>
          <li><a href="#office" className="hover:text-gray-300">Office</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
          <button 
            className="absolute top-6 right-6 text-3xl" 
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <ul className="space-y-8 text-2xl">
            <li><a href="#hero" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#work" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Work</a></li>
            <li><a href="#office" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Office</a></li>
            <li><a href="#footer" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
