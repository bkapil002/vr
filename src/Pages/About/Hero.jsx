import React, { useState } from 'react'

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false)
  
  return (
    <div className="w-full bg-white mb-9 lg:mb-10">

      {/* ── Hero Section ── */}
      <div className="relative w-full">

        {/* Hero Image */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
           {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
          )}

          <div className="absolute inset-0 overflow-hidden">
            <iframe
              className="
    absolute top-1/2 left-1/2
    w-[100vw] h-[100vh]
    -translate-x-1/2 -translate-y-1/2
    scale-[2.4] sm:scale-[1.6] lg:scale-[1.2]
    pointer-events-none
  "
              src="https://www.youtube.com/embed/DFBB6khs1Y8?autoplay=1&mute=1&loop=1&playlist=DFBB6khs1Y8&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
              title="VR Welding Training Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="eager"
              onLoad={() => setVideoLoaded(true)}
            />

          </div>
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