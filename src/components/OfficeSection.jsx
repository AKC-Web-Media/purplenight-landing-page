import React from "react";

function OfficeSection({ref}) {
  return (
    <section ref={ref} id="office" className="py-16 px-6 bg-stone-100">
      <div className=" flex flex-col gap-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Side - Office Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={'https://viqwjhprxs3j5sad.public.blob.vercel-storage.com/1-M27n3PaVEG4Z7Xb8TYpkh5D3AdXzIn.png'}
              alt="Modern office space with a professional environment"
              className="w-full h-72 object-cover"
            />
          </div>
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Purplenight has got it.
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Ever wondered how much more you end up reading if you could read
              your books in the traffic.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Systematically chosen blog with AI made out of your favourite
              books.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to use?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Using purplenight involves just simple steps.
            </p>
            <ol
              className="text-gray-700 text-lg ml-6 mb-4"
              style={{ listStyle: "decimal" }}
            >
              <li>Choose your favourite book PDF.</li>
              <li>Select number of blogs you like to read.</li>
              <li>Click Genrate.</li>
              <li>Wait a bit..</li>
            </ol>
          </div>

          {/* Right Side - Office Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
            src={'https://viqwjhprxs3j5sad.public.blob.vercel-storage.com/1-aUbQpYSnbs3cGSFnXEpswndRI1ivbZ.png'}
              alt="Modern office space with a professional environment"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeSection;
