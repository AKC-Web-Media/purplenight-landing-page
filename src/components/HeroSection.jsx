import React from 'react';

function HeroSection() {
  return (
    <section id="hero" className="bg-stone-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Side - Text */}
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Claude 3.7 Sonnet and Claude Code
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Our most intelligent reasoning model. We're also launching Claude Code, 
              an agentic CLI tool for coding.
            </p>
            <button className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium">
              Read the announcement
            </button>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
            <div className="bg-stone-200 p-6 rounded-lg flex-1 shadow">
              <p className="text-sm font-medium text-gray-600 mb-1">Claude 3.7</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Sonnet</h2>
              <p className="text-gray-700 text-sm">Available in Claude 3</p>
            </div>

            <div className="bg-stone-200 p-6 rounded-lg flex-1 shadow">
              <p className="text-sm font-medium text-gray-600 mb-1">Preview mode</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Claude's Extended Thinking</h2>
              <p className="text-gray-700 text-sm">Enabled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

