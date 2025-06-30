import React from "react";
import "../App.css";
import "../index.css";
import {
  FaGift,
  FaHandshake,
  FaChalkboard,
  FaUserShield,
  FaClock,
  FaCubes,
  FaBook,
  FaTools,
  FaCoins,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaGift size={24} />,
    title: "Free credits",
    description: "Empowering partners to scale.",
  },
  {
    icon: <FaHandshake size={24} />,
    title: "Revenue share",
    description: "Get monthly recurring revenues when you refer clients.",
  },
  {
    icon: <FaChalkboard size={24} />,
    title: "Training and mentoring sessions",
    description: "Enabling partners to deliver the best experience.",
  },
  {
    icon: <FaUserShield size={24} />,
    title: "Special developer access",
    description:
      "Get an all-access account to build unlimited PoCs for your clients.",
  },
  {
    icon: <FaClock size={24} />,
    title: "Reduced time",
    description:
      "Deliver your products much faster with our partners’ programs.",
  },
  {
    icon: <FaCubes size={24} />,
    title: "Value addition to your users",
    description: "We need a 2 line text here",
  },
  {
    icon: <FaBook size={24} />,
    title: "Knowledge sessions",
    description: "Access to product and market sessions.",
  },
  {
    icon: <FaTools size={24} />,
    title: "On-demand support",
    description: "Technical assistance for implementation.",
  },
  {
    icon: <FaCoins size={24} />,
    title: "Significant passive income",
    description: "We need a 2 line text here",
  },
];

const PartnerAdvantages = () => {
  return (
    <section className="relative left-0 w-full min-h-screen bg-black text-white px-6 py-28 md:px-20 overflow-hidden">
      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-orange-500 font-semibold mb-2 text-left">
            Be a partner
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            CometChat partner <br /> advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-5 w-full">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="advantage-card text-left flex flex-col items-center md:items-start bg-[#1a1a2e] p-6 rounded-xl h-full shadow-md"
            >
              <div className="text-orange-500 text-xl bg-[#2a2a3d] p-3 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerAdvantages;
