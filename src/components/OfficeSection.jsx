import React from "react";

function OfficeSection() {
  return (
    <section id="office" className="py-16 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Work with Anthropic
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Anthropic is an AI safety and research company based in 
              San Francisco, developing AI systems to keep AI beneficial 
              for humanity. We are looking for researchers, engineers, and 
              system designers to build reliable AI.  
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Join a team dedicated to creating **safe AI systems** 
              that align with human values. Help us push the 
              boundaries of **AI safety and innovation**.
            </p>
            <button className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium">
              View Careers
            </button>
          </div>

          {/* Right Side - Office Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="C:\Users\hp220\Downloads\DALL·E 2025-03-15 23.31.48 - A modern office space with large windows, natural light, and a collaborative work environment. The office has an open layout with desks, plants, and e.webp0"
              alt="Modern office space with a professional environment"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default OfficeSection;



