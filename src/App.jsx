import React, { useState, useEffect } from "react";
import { Atom } from "react-loading-indicators";
import "./App.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnerAdvantages from "./components/PartnerAdvantages";
import PartnershipPrograms from "./components/PartnershipPrograms";
import StartFree from "./components/StartFree";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e]">
        <Atom
          color="#ffffff"
          size="large"
          text="loading..."
          textColor="#ffffff"
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <PartnerAdvantages />
      <PartnershipPrograms />
      <StartFree />
      <Footer />
      <BottomBar />
    </>
  );
}

export default App;
