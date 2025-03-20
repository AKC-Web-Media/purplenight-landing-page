import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { List, X } from "@phosphor-icons/react";
import FullLogo from "./FullLogo";

function Navbar({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  // Map section names to refs
  const sections = {
    Examples: refs.examplesRef,
    "Learn More": refs.learnMoreRef,
    Pricing: refs.pricingRef,
    Footer: refs.footerRef,
  };

  // Scroll function
  const handleScroll = (section) => {
    scrollToSection(sections[section]);
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="bg-gradient-to-b from-slate-200 to-slate-100 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <FullLogo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg ml-auto">
          {Object.keys(sections).map((item, index) => (
            <li key={index}>
              <button onClick={() => handleScroll(item)} className="hover:text-gray-300">
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <List color="black" size={22} onClick={() => setIsOpen(true)} />
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
          <FullLogo className="absolute top-6 left-6 text-2xl font-bold" />
          <X className="absolute top-6 right-6 text-3xl" color="black" size={32} onClick={() => setIsOpen(false)} />

          {/* Mobile Links */}
          {Object.keys(sections).map((item, index) => (
            <button key={index} onClick={() => handleScroll(item)} className="text-2xl font-semibold py-4">
              {item}
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://purplenight.hyperingenious.tech", "_blank")}
            className="bg-black text-white mt-6 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
          >
            Try out now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
