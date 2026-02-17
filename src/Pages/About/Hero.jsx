import React from 'react'

const Hero = () => {
  return (
    <div className="w-full bg-white mb-9 lg:mb-10">

      {/* ── Hero Section ── */}
      <div className="relative w-full">

        {/* Hero Image */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <picture>
            {/* Desktop */}
            <source
              media="(min-width: 1024px)"
              srcSet="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80"
            />
            {/* Tablet */}
            <source
              media="(min-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1083&q=80"
            />
            {/* Mobile */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=860&q=80"
              alt="TradeVR — Building Skill, Strengthening Futures"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Desktop Overlay Card */}
        <div className="hidden lg:block absolute inset-0">
          <div className="max-w-[1400px] mx-auto px-6 xl:px-8 h-full flex items-center">
            <div className="bg-white max-w-[520px] p-10 shadow-lg">
              <h1 className="text-[2.5rem] font-semibold leading-tight mb-5 text-gray-900">
                Building Skill,<br />Strengthening Futures.
              </h1>

              <p className="text-base text-gray-700 leading-relaxed mb-5">
                At TradeVR, we believe skill is more than a qualification.
              </p>

              {/* Three-line callout */}
              <div className="border-l-4 border-[#005a9e] pl-5 mb-6 flex flex-col gap-1.5">
                {["It is confidence.", "It is independence.", "It is opportunity."].map((line, i) => (
                  <p key={i} className="text-sm font-semibold text-[#005a9e]">{line}</p>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                And yet, access to high-quality hands-on training remains uneven across institutions, industries, and geographies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Card — overlaps the image */}
      <div className="block lg:hidden relative -mt-10 sm:-mt-20 z-10 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg p-6 sm:p-10">

            {/* Accent bar */}
            <div className="w-8 h-1 bg-[#005a9e] mb-5" />

            <h1 className="text-[1.75rem] sm:text-[2rem] font-semibold leading-tight mb-4 text-gray-900">
              Building Skill,<br />Strengthening Futures.
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              At TradeVR, we believe skill is more than a qualification.
            </p>

            {/* Three-line callout */}
            <div className="border-l-4 border-[#005a9e] pl-4 mb-5 flex flex-col gap-1">
              {["It is confidence.", "It is independence.", "It is opportunity."].map((line, i) => (
                <p key={i} className="text-sm font-semibold text-[#005a9e]">{line}</p>
              ))}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              And yet, access to high-quality hands-on training remains uneven across institutions, industries, and geographies.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero