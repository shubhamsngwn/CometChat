import React from "react";
import "../App.css";
import "../index.css";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] top-0 left-0 w-full z-50 px-6 md:px-20 py-4 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white">cometchat</div>

        {/* Navigation */}
        <nav className="mid-btns hidden md:flex space-x-8 text-sm text-white no-underline">
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors duration-300"
          >
            Platform
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors duration-300"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors duration-300"
          >
            Developers
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors duration-300"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors duration-300"
          >
            Pricing
          </a>
        </nav>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <button className="log-btn text-sm text-white transition-colors hover:text-purple-400 cursor-pointer ml-1 mr-1">
            Log in
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-black font-semibold px-4 py-2 rounded shadow-md hover:brightness-105 cursor-pointer transition-all">
            Schedule a demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
