import React from "react";
import { ChevronRight } from "lucide-react";

import school from "../image/cschool.mp4";
import workforce from "../image/workforce.jfif";
import NEET from "../image/NEET.png";
import govttraining from "../image/govt-training.jpg";

import Google from "../image/Google.png";
import Linked from "../image/Linked.png";
import Twitter from "../image/Twitter.png";
import Facebook from "../image/Facebook.png";

export default function BusinessSection() {
  const cards = [
    {
      title: "High School Training Centers",
      description:
        "Strengthen national workforce capability with advanced VR/AR/MR training for high school seniors before they graduate.",
      image: govttraining,
      alt: "High School Training Centers",
    },
    {
      title: "Workforce Development",
      description:
        "Empower your community with VR-powered skill training built for today's high-demand careers.",
      image: workforce,
      alt: "Workforce Development",
    },
    {
      title: "NEET Participants",
      description:
        "Assisting NEET's to have practical trade skills, rebuild confidence, and create sustainable career opportunities.",
      image: NEET,
      alt: "NEET Participants",
    },
    {
      title: "Career Schools",
      description:
        "Upgrade campuses with cutting-edge VR tools that make trade learning safer, faster, and more effective.",
      video: school,
      alt: "Career Schools",
    },
  ];

  return (
    <div className="mb-[90px]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-5">
          Made with You in Mind
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border rounded-[3px] shadow-md border-gray-200 overflow-hidden"
            >
              {/* Media */}
              <div className="h-48 overflow-hidden">
                {card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-black mb-6 flex-grow">
                  {card.description}
                </p>

                <button className="inline-flex items-center text-white bg-[#0067B8] rounded-[2px] px-4 py-2 text-sm font-semibold transition-colors duration-200 self-start">
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-[90px] flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-[18px] text-gray-900">Follow Trade VR</span>
            <div className="flex items-center gap-3">
              <img src={Twitter} className="w-[20px] sm:w-[23px]" alt="Twitter" />
              <img src={Linked} className="w-[18px] sm:w-[21px]" alt="LinkedIn" />
              <img src={Google} className="w-[18px] sm:w-[20px]" alt="Google" />
              <img src={Facebook} className="w-[10px] sm:w-[11px]" alt="Facebook" />
            </div>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            className="flex bg-[#E6E6E6] py-2 px-3 rounded-[4px] items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
