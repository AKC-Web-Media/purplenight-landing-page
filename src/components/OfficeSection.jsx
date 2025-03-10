import React from "react";

function OfficeSection() {
  return (
    <div id="office" className="py-12 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Work with Anthropic</h2>
            <p className="text-gray-700 mb-4">
              Anthropic is an AI safety and research company based in San Francisco, 
              developing AI systems to keep AI beneficial for humanity. We are looking 
              for researchers, engineers, and system designers to build reliable AI.
            </p>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm w-fit">
              View Careers
            </button>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Anthropic office space with team members working"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeSection;

