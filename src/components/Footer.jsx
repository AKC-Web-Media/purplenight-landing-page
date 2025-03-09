import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="white"/>
              </svg>
            </div>
            <p className="text-xs text-gray-400">© 2024 Anthropic PBC</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Claude</li>
              <li>Claude for Enterprise</li>
              <li>Developer Platform</li>
              <li>API Changelog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Index</li>
              <li>Frontier Models</li>
              <li>Safety</li>
              <li>Claude models</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Terms and policies</li>
              <li>Privacy Policy</li>
              <li>Service Terms</li>
              <li>Acceptable Use</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
