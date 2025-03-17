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
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
          <li><a href="#work" className="hover:text-gray-300">Work</a></li>
          <li><a href="#office" className="hover:text-gray-300">Office</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white py-4 px-6 space-y-3 text-center">
          <li><a href="#hero" className="block hover:text-gray-300">Home</a></li>
          <li><a href="#work" className="block hover:text-gray-300">Work</a></li>
          <li><a href="#office" className="block hover:text-gray-300">Office</a></li>
          <li><a href="#footer" className="block hover:text-gray-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

