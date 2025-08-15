import React from 'react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-stone-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex space-x-8 mb-4 md:mb-0 text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-green-400 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('developers')}
              className="hover:text-green-400 transition"
            >
              Developer
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-green-400 transition"
            >
              Home
            </button>
          </li>
        </ul>

        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
