import React from "react";

function HeroSection() {
  return (
    <section id="hero" className="bg-stone-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Claude 3.7 Sonnet and Claude Code
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Introducing Claude 3.7, our most advanced model for fast thinking and deep reasoning. 
              We're also launching Claude Code, a new agentic CLI tool for coding.
            </p>
            <button className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium">
              Read the announcement
            </button>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
            <div className="bg-stone-200 p-6 rounded-lg flex-1 shadow">
              <p className="text-sm font-medium text-gray-600 mb-1">Introducing</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Claude 3.7 Sonnet</h2>
              <p className="text-gray-700 text-sm">Available in Claude 3</p>
            </div>

            <div className="bg-stone-200 p-6 rounded-lg flex-1 shadow">
              <p className="text-sm font-medium text-gray-600 mb-1">Experimental Feature</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Claude's Extended Thinking</h2>
              <p className="text-gray-700 text-sm">Now available in preview mode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
