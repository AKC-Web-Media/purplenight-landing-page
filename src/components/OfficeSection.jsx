import React from 'react';

function OfficeSection() {
  return (
    <div className="py-12 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">Work with Anthropic</h2>
            <p className="text-gray-700 mb-4">
              Anthropic builds reliable AI systems designed to keep AI beneficial 
              for humanity. Join us in building foundation models and conducting 
              research to promote responsible AI. Our team combines research and 
              system reliability leadership.
            </p>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm w-fit">
              View careers
            </button>
          </div>
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Anthropic office space with team members working together" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeSection;
