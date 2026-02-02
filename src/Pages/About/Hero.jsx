import React from 'react'

const Hero = () => {
  return (
    <div className="w-full bg-white mb-9 lg-10">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Hero Image - Responsive images for different screen sizes */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <picture>
            {/* Desktop - VP4 (1399x600) */}
            <source
              media="(min-width: 1024px)"
              srcSet="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-HealthcareTechnology-ResearcherDeveloper-Highlight1920x720:VP4-1399x600"
            />
            {/* Tablet - VP3 (1083x600) */}
            <source
              media="(min-width: 640px)"
              srcSet="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-HealthcareTechnology-ResearcherDeveloper-Highlight1920x720:VP3-1083x600"
            />
            {/* Phone - VP2 (859x540) */}
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-HealthcareTechnology-ResearcherDeveloper-Highlight1920x720:VP2-859x540"
              alt="Healthcare Technology - Researcher and Developer"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Desktop Overlay Card - Only visible on large screens */}
        <div className="hidden  lg:block absolute inset-0">
          <div className="container max-w-[1400px] mx-auto px-6 xl:px-8 h-full flex items-center">
            <div className="bg-white max-w-[500px] p-10 shadow-lg">
              <h1 className="text-[2.5rem] font-semibold leading-tight mb-5">
                We empower the world
              </h1>
              <p className="text-base text-gray-800 leading-relaxed">
                Teade VR's mission is to empower every person and every organization on the planet to achieve more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Card - Overlapping the image */}
      <div className="block lg:hidden relative -mt-10 sm:-mt-20 z-10 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg p-6 sm:p-10">
            <h1 className="text-[1.75rem] sm:text-[2rem] font-semibold leading-tight mb-4">
              We empower the world
            </h1>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              Teade VR's mission is to empower every person and every organization on the planet to achieve more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
