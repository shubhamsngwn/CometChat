import React from "react";
import { Anchor } from "react-bootstrap";
import "../App.css";

export default function Footer() {
  const allData = {
    features: [
      "Chat & Messaging",
      "Voice & Video Call",
      "Security & Compliance",
      "Extensions",
      "Features at a Glance",
      "Webhooks & Bots",
      "Moderation",
      "Analytics & Insights",
    ],
    implementation: ["Widgets", "UI Kits", "SDKs & APIs"],
    technologies: [
      "React Chat SDK & API",
      "Angular Chat SDK & API",
      "View Chat SDK & API",
      "IOS Swift Chat SDK & API",
      "Android Kotlin Chat SDK & API",
      "Android Java Chat SDK & API",
      "React Native Chat SDK & API",
      "Ionic/Capacitor Chat SDK & API",
      "Wordpress Chat SDK & API",
      "Lavarel/PHP Chat SDK & API",
      "Flutter Chat SDK & API",
      "Next.js Chat SDK & API",
    ],
    by_use_cases: [
      "Social Community",
      "Marketplace",
      "Healthcare",
      "Education",
      "Virtual Events",
      "On-Demand Service",
      "Dating Apps",
      "Gaming",
    ],
    by_organisation_type: ["Enterprise", "Startups"],
    technologies_documentation: [
      "React",
      "Angular",
      "View",
      "IOS Swift",
      "Android Kotlin",
      "Android Java",
      "React Native",
      "Ionic/Capacitor",
      "Wordpress",
      "Lavarel/PHP",
      "Flutter",
      "Next.js",
    ],
    documentation: [
      "Documentation",
      "Product Updates",
      "Tutorials",
      "Open Source Apps",
      "Product Status",
      "Glossary",
    ],
    resources: [
      "Customer Stories",
      "Blog",
      "Give Feedback",
      "Community Forum",
      "Help Center",
      "Partners",
    ],
    competitors: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
    company: ["AboutUs", "Careers", "Partners", "Pricing", "Chat with us"],
  };

  return (
    <div className="bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] footer-cmn font-fm">
      <div className="text-left hding font-sans">
        <h3 className="heading pt-5 pl-10">
          comet<b>chat</b>
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start ml-6 mr-6 md:ml-25 md:mr-25 gap-10 md:gap-0">
        {/* Platforms */}
        <div className="flex flex-col leading-10">
          <div className="content-heading">
            <p className="text-violet-600">Platforms</p>
          </div>
          <div className="hidden md:flex flex-col">
            <a href="" className="gry-clr">
              Features
            </a>
            {allData.features.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <a href="" className="gry-clr">
              Implementations
            </a>
            {allData.implementation.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <a href="" className="gry-clr">
              Technologies
            </a>
            {allData.technologies.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="flex flex-col leading-10">
          <div className="content-heading">
            <p className="text-violet-600">Solutions</p>
          </div>
          <div className="hidden md:flex flex-col">
            <a href="" className="gry-clr">
              By use cases
            </a>
            {allData.by_use_cases.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <a href="" className="gry-clr">
              By Organization Types
            </a>
            {allData.by_organisation_type.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
          </div>
        </div>

        {/* Developers */}
        <div className="flex flex-col leading-10">
          <div className="content-heading">
            <p className="text-violet-600">Developers</p>
          </div>
          <div className="hidden md:flex flex-col">
            <a href="" className="gry-clr">
              Technologies Documentation
            </a>
            {allData.technologies_documentation.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <a href="" className="gry-clr">
              Documentation
            </a>
            {allData.documentation.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
          </div>
        </div>

        {/* Resources, Competitors, Company */}
        <div className="flex flex-col leading-10">
          <div className="content-heading">
            <p className="text-violet-600">Resources</p>
          </div>
          <div className="hidden md:flex flex-col">
            {allData.resources.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <div className="content-heading mt-2">
              <p className="text-violet-600">Competitors</p>
            </div>
            {allData.competitors.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
            <div className="content-heading mt-2">
              <p className="text-violet-600">Company</p>
            </div>
            {allData.company.map((feature, index) => (
              <a href="#" key={index} className="anchors">
                {feature}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
