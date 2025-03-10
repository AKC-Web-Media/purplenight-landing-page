import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="bg-stone-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-2">
              Claude 3.7 Sonnet and Claude Code
            </h2>
            <p className="text-gray-700 mb-4">
              Introducing Claude 3.7, our most advanced model yet. We're also launching Claude Code, 
              an agentic CLI tool for coding.
            </p>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm">
              Read the announcement
            </button>
          </div>
          <div className="bg-stone-200 p-4 rounded-lg">
            <p className="text-sm font-medium mb-1">Claude 3.7</p>
            <p className="text-lg font-bold mb-1">Sonnet</p>
            <p className="text-sm">Available in Claude 3</p>
          </div>
          <div className="bg-stone-200 p-4 rounded-lg">
            <p className="text-sm font-medium mb-1">Preview mode</p>
            <p className="text-lg font-bold mb-1">Claude's Extended Thinking</p>
            <p className="text-sm">Enabled</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Our Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="text-md font-semibold">Claude for Enterprise</h4>
              <p className="text-gray-500 text-sm mt-2">March 2024</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="text-md font-semibold">
                Contextualized AI: Personalized from AI Feedback
              </h4>
              <p className="text-gray-500 text-sm mt-2">March 2024</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="text-md font-semibold">
                Core Views on AI Safety: When, Why, What, and How
              </h4>
              <p className="text-gray-500 text-sm mt-2">March 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

