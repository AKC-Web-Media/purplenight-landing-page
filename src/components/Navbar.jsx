import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Claude Clone</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
          <li><a href="#work" className="hover:text-gray-300">Work</a></li>
          <li><a href="#office" className="hover:text-gray-300">Office</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
