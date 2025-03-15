import React from "react";

function WorkSection() {
  return (
    <div id="work" className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-100 p-6 shadow rounded-lg">
            <p className="text-gray-500 text-sm">Product</p>
            <h4 className="text-md font-semibold">Claude for Enterprise</h4>
            <img src="C:\Users\hp220\Downloads\DALL·E 2025-03-15 23.31.48 - A modern office space with large windows, natural light, and a collaborative work environment. The office has an open layout with desks, plants, and e.webp" alt="Office Space" />
            <p className="text-gray-500 text-sm mt-2">March 2024</p>
          </div>
          <div className="bg-stone-100 p-6 shadow rounded-lg">
            <p className="text-gray-500 text-sm">Alignment & Research</p>
            <h4 className="text-md font-semibold">Contextualized AI: Personalized from AI Feedback</h4>
            <p className="text-gray-500 text-sm mt-2">March 2024</p>
          </div>
          <div className="bg-stone-100 p-6 shadow rounded-lg">
            <p className="text-gray-500 text-sm">Announcement</p>
            <h4 className="text-md font-semibold">Core Views on AI Safety: When, Why, What, and How</h4>
            <p className="text-gray-500 text-sm mt-2">March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;


