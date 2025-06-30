import React from "react";
import "../App.css";

export default function StartFree() {
  return (
    <div className="relative text-center h-[30rem] flex justify-center flex-col items-center left-0 w-full font-sans bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] text-white px-6 py-8 md:px-20 md:py-16 overflow-hidden">
      <h1 className="text-xl">Get started for free</h1>
      <p className="text-xl leading-none">
        Build and test for as long as you need.
      </p>
      <p className="text-xl leading-none">Pick a plan when you are ready.</p>
      <div className="mt-6 flex gap-4 btns-hvr">
        <button className="border-white border-[0.5px] p-3 start-free-btns">
          Start free trial
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-purple-600 text-white p-3 start-free-btns">
          Schedule a demo
        </button>
      </div>

      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-80 w-80 h-80 bg-gradient-to-r from-purple-600 to-purple-200 opacity-100 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-500 opacity-70 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
  
}