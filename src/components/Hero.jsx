import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="left-0 w-full h-screen bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] text-white px-6 py-8 md:px-20 md:py-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-full mx-auto gap-12 md:gap-20 h-full relative z-10">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Join the CometChat <br /> partner universe
          </h1>
          <p className="text-2xl text-gray-300 max-w-lg">
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>

        {/* Right form */}
        <div className="bdr bg-gradient-to-br from-[#373749] to-[#141447] bg-opacity-80 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6">Become a partner</h2>
          <form className="space-y-0.5">
            <label htmlFor="">Name</label>l
            <input
              type="text"
              placeholder="Type your name here..."
              className="bg-gradient-to-br from-[#373749] to-[#141447] w-full px-4 py-3 mb-3 rounded bg-[#2b2b3d] text-white placeholder-gray-400 focus:outline-none mt-2"
            />
            <label htmlFor="">Email address</label>
            <input
              type="email"
              placeholder="Type your email..."
              className="bg-gradient-to-br from-[#373749] to-[#141447] w-full px-4 py-3 mb-3 rounded bg-[#2b2b3d] text-white placeholder-gray-400 focus:outline-none mt-2"
            />
            <label htmlFor="">Company's Name</label>
            <input
              type="text"
              placeholder="Type your company's name here..."
              className="bg-gradient-to-br from-[#373749] to-[#141447] w-full px-4 py-3 mb-3 rounded bg-[#2b2b3d] text-white placeholder-gray-400 focus:outline-none mt-2"
            />
            <button
              type="submit"
              className="w-auto text-black font-semibold py-2 px-3 rounded shadow-md hover:brightness-105 transition-all bg-gradient-to-r from-purple-600 to-purple-400"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-65 w-80 h-80 bg-violet-800 opacity-100 rounded-full blur-3xl"></div>
        <div className="absolute left-125 top-160 w-80 h-80 bg-orange-500 opacity-70 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-40 w-80 h-80 bg-gradient-to-br from-[#bdbde3] to-[#2a2a9f] opacity-100 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
