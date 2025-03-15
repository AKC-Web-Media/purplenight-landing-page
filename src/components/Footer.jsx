import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Claude 3</li>
            <li>Claude Code</li>
            <li>Claude for Enterprise</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Docs</li>
            <li>Blog</li>
            <li>API Reference</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Help and security</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-500 text-sm text-center mt-8">
        © 2025 Anthropic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

