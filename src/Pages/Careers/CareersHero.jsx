import React, { useState } from "react";
import careersD from "../../image/Home_Desktop.jpg";
import careersM from "../../image/Home_Mobile.jpg";

const CareersHero = () => {
  const [jobSearch, setJobSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { jobSearch, location });
  };

  return (
    <section className="relative w-full  overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 ">
        <img
          src={careersD}
          alt="Careers background"
          className="hidden md:block w-full h-90 object-cover"
        />
        <img
          src={careersM}
          alt="Careers background mobile"
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mb-15 mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-10">
            Win and thrive together
          </h1>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row w-full bg-white shadow-lg"
          >
            {/* Job Search */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search by job title, ID, or keyword"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                className="w-full h-[60px] pl-12 pr-4 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-[#005a9e]"
              />
            </div>

            {/* Location */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="City, state, or country/region"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-[60px] pl-12 pr-4 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 border-t-0 sm:border-t sm:border-l-0 focus:outline-none focus:border-[#005a9e]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="h-[60px] px-8 bg-[#005a9e] text-white text-sm font-semibold hover:bg-[#004578] transition whitespace-nowrap"
            >
              Find jobs
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
