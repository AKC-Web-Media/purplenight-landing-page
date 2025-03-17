import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* A Logo */}
        <h2 className="text-2xl font-bold">A</h2>

        {/* Desktop Navigation - Aligned to Right */}
        <ul className="hidden md:flex space-x-6 text-lg ml-auto">
          {["Claude API", "Research", "Commitments", "Learn", "News"].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (☰) */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(true)}>☰</button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
          
          {/* Top Section - A Logo & Close Button */}
          <div className="absolute top-6 left-6 text-2xl font-bold">A</div>
          <button className="absolute top-6 right-6 text-3xl" onClick={() => setIsOpen(false)}>✖</button>

          {/* Menu Links */}
          {["Claude API", "Research", "Commitments", "Learn", "News"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="text-2xl font-semibold py-4 w-full text-center border-b border-gray-300">
              {item}
            </a>
          ))}

          {/* Buttons (Only in Mobile Menu) */}
          <button className="bg-black text-white w-3/4 py-3 mt-6 text-lg rounded-full">Try Claude</button>
          <button className="border border-black w-3/4 py-3 mt-3 text-lg rounded-full">Download App</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



