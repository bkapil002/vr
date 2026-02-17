import React from 'react'

const CultureAndCareersSection = () => {
  return (
    <div className="w-full bg-white py-9 lg:py-10">
      <div className="">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 lg:mb-16 text-gray-900">
          More Than Simulation, A Skill Infrastructure
        </h2>

        {/* Main Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="lg:border-r lg:border-gray-200 lg:pr-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              Our focus is not short-term training.<br />
              It is long-term employability.
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              At its core, TradeVR exists to solve a structural problem: the world needs skilled professionals. But training capacity cannot always keep up.
            </p>

            {/* Four principles */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                { label: "Safe enough",       desc: "to encourage experimentation."               },
                { label: "Structured enough", desc: "to ensure consistency."                      },
                { label: "Scalable enough",   desc: "to reach entire systems, not just small groups." },
                { label: "Measurable enough", desc: "to support compliance and workforce planning." },
              ].map(({ label, desc }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#005a9e] mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-snug">
                    <span className="font-semibold text-gray-900">{label}</span>{" "}
                    <span className="text-gray-500">{desc}</span>
                  </p>
                </div>
              ))}
            </div>

            <a href="#"
              className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm sm:text-base mb-8 transition-colors duration-150">
              Explore careers at TradeVR
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Image */}
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=653&h=653&fit=crop"
                alt="TradeVR — immersive vocational training"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Two stacked cards */}
          <div className="space-y-12 lg:space-y-20">

            {/* Card 1 */}
            <div className="pb-8 lg:pb-20 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="w-8 h-0.5 bg-[#005a9e] mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    Reducing dependency on infrastructure
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    By reducing dependency on heavy infrastructure and introducing data-backed performance tracking, we enable institutions to train more learners — without proportionally increasing cost or risk.
                  </p>
                  <a href="#"
                    className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm sm:text-base transition-colors duration-150">
                    Learn how it works
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=400&fit=crop"
                    alt="Industrial training environment"
                    className="w-full sm:w-64 md:w-48 lg:w-56 h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="w-8 h-0.5 bg-[#005a9e] mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                    This is how opportunity expands.
                  </h3>
                  <div className="flex flex-col gap-2 mb-4">
                    {[
                      "This is how opportunity expands.",
                      "This is how workforce ecosystems strengthen.",
                      "This is how economic mobility grows.",
                    ].map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">{line}</p>
                    ))}
                  </div>
                  <a href="#"
                    className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm sm:text-base transition-colors duration-150">
                    Explore our impact
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop"
                    alt="Workforce and community growth"
                    className="w-full sm:w-64 md:w-48 lg:w-56 h-auto object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CultureAndCareersSection