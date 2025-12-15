import React from "react";
import { ChevronRight } from "lucide-react";
import school from "../image/school.jpg";
import workforce from "../image/workforce.jpg";
import corporat from "../image/corporat.jpg";
import govttraining from "../image/govt-training.jpg";
import Google from "../image/Google.png";
import Linked from "../image/Linked.png";
import Twitter from "../image/Twitter.png";
import Facebook from "../image/Facebook.png";
export default function BusinessSection() {
  const cards = [
    {
      title: "Schools & Colleges",
      description:
        "Upgrade campuses with cutting-edge VR tools that make trade learning safer, faster, and more effective.",
      image: school,
      alt: "Students in classroom",
    },
    {
      title: "Workforce Development Programs",
      description:
        "Empower your community with VR-powered skill training built for today's high-demand careers.",
      image: workforce,
      alt: "Workforce training session",
    },
    {
      title: "Corporations & Apprenticeships",
      description:
        "Enhance corporate training and apprenticeships with immersive simulations that build real-world trade skills.",
      image: corporat,
      alt: "Corporate training",
    },
    {
      title: "Government Training Centers",
      description:
        "Strengthen national workforce capability with advanced VR training for Government and Military personnel.",
      image: govttraining,
      alt: "Government training facility",
    },
  ];

  return (
    <div className=" mb-[90px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px]  mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-5">For business</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border rounded-[3px] shadow-md border-gray-200 overflow-hidden   "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-[#000000] mb-6 flex-grow">
                  {card.description}
                </p>

                <button className="inline-flex items-center text-white bg-[#0067B8]  px-4 py-2 text-sm font-semibold transition-colors duration-200 self-start">
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

          <div className="mt-[90px]   flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
      {/* Social block: stays centered on phone, left-aligned on desktop */}
      <div className="flex items-center gap-4">
        <span className="text-[18px] text-gray-900">Follow Trade VR</span>
        <div className="flex items-center justify-center gap-3">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <img src={Twitter} className="w-[20px] sm:w-[23px]" alt="Twitter" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <img src={Linked} className="w-[18px] sm:w-[21px]" alt="LinkedIn" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <img src={Google} className="w-[18px] sm:w-[20px]" alt="Google" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <img src={Facebook} className="w-[10px] sm:w-[11px]" alt="Facebook" />
          </a>
        </div>
      </div>

      {/* Back to top: centered below on phone, right on desktop */}
      <a
        href="#"
        className="flex cursor-pointer bg-[#E6E6E6] py-2 px-3 rounded-[4px] items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        ↑ Back to top
      </a>
    </div>
      </div>
    </div>
  );
}
