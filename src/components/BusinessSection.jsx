import React from "react";
import { ChevronRight } from "lucide-react";
import school from '../image/school.jpg'
import workforce from '../image/workforce.jpg'
import corporat from '../image/corporat.jpg'
import govttraining from '../image/govt-training.jpg'
export default function BusinessSection() {
  const cards = [
    {
      title: "Schools & Colleges",
      description:
        "Upgrade campuses with cutting-edge VR tools that make trade learning safer, faster, and more effective.",
      image:school,
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
      image:corporat,
      alt: "Corporate training",
    },
    {
      title: "Government Training Centers",
      description:
        "Strengthen national workforce capability with advanced VR training for Government and Military personnel.",
      image:govttraining,
      alt: "Government training facility",
    },
  ];

  return (
    <div className="  mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">For business</h2>

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
                <h3 className="text-lg font-bold text-gray-900 mb-3">
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

        <div className="mt-20 pb-8 flex items-center justify-between  border-gray-200 pt-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Follow Trade VR</span>
            <div className="flex justify-center text-center gap-3">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.1c.5-1 1.8-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-4v-8.3c0-2-.1-4.6-3-4.6-3 0-3.4 2.2-3.4 4.5V24h-4V8z"/>
  </svg>
</a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 533.5 544.3"
                  fill="currentColor"
                >
                  <path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.1h147.3c-6.4 34.7-25.9 64.1-55.1 83.7v69.4h88.7c52-47.8 80.6-118.2 80.6-198z" />
                  <path d="M272 544.3c74.7 0 137.4-24.7 183.3-67.1l-88.7-69.4c-24.6 16.5-56 26.3-94.6 26.3-72.8 0-134.4-49.2-156.4-115.3H24.9v72.7c45.8 91 139.8 152.8 247.1 152.8z" />
                  <path d="M115.6 318.8c-10.4-31-10.4-64.4 0-95.4v-72.7H24.9c-41.2 81.4-41.2 179.4 0 260.8l90.7-72.7z" />
                  <path d="M272 107.7c40.6-.6 79.8 14.8 109.6 42.9l82.1-82C409.4 24.7 346.7 0 272 0 164.7 0 70.7 61.8 24.9 152.8l90.7 72.7C137.6 156.5 199.2 107.7 272 107.7z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15 3h-2c-2.2 0-4 1.8-4 4v2H7v3h2v9h3v-9h2.6l.4-3H12V7c0-.6.4-1 1-1h2V3z" />
                </svg>
              </a>
            </div>
          </div>

          <a
            href="#"
            className="flex cursor-pointer bg-[#E6E6E6] py-2 px-3  rounded-[4px] items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
