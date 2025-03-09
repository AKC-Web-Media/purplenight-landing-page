import React from 'react';

function WorkSection() {
  return (
    <div className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Enterprise</p>
            <h3 className="text-lg font-bold mb-2">Claude for Enterprise</h3>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Research</p>
            <h3 className="text-lg font-bold mb-2">Expert-level AI Perspective from AI Feedback</h3>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Article</p>
            <h3 className="text-lg font-bold mb-2">Core Values for AI Systems: Where, Why, What, and How</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
