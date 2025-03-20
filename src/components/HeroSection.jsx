import React from "react";
import Subscription from "./Subscription";

function HeroSection({ref}) {
  return (
    <section ref={ref} id="hero" className="bg-stone-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Purplenight evolves as your need arises
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              We try to be generous towards our content generation but we got
              bills to pay as well, Free tier is nice one as well.
            </p>
            <button
              onClick={() =>
                window.open("https://purplenight.hyperingenious.tech", "_blank")
              }
              className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium"
            >
              Try out now <span className="text-xl">&rarr;</span>
            </button>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
            <Subscription />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
