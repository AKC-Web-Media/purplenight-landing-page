import React from 'react';

function HeroSection() {
  return (
    <div className="bg-stone-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-2">Claude 3.7 Sonnet and Claude Code</h2>
            <p className="text-sm text-gray-700 mb-4">
              Our most intelligent reasoning model. We're also launching Claude Code, an agentic CLI tool for coding.
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
            <p className="text-lg font-bold mb-1">Claude's reasoning</p>
            <p className="text-sm">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
