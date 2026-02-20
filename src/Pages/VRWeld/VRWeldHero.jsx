import React, { useState } from 'react'

const VRWeldHero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="w-full ">
      <div className="relative w-full">

        <div className="w-full  h-[400px] sm:h-[500px] lg:h-[600px]  relative bg-black">
          {/* Loading placeholder */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
          )}

          {/* Video wrapper with overflow hidden */}
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              className="
    absolute top-1/2 left-1/2
    w-[100vw] h-[100vh]
    -translate-x-1/2 -translate-y-1/2
    scale-[2.4] sm:scale-[1.6] lg:scale-[1.2]
    pointer-events-none
  "
              src="https://www.youtube.com/embed/T2RNM39INh4?autoplay=1&mute=1&loop=1&playlist=T2RNM39INh4&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
              title="VR Welding Training Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="eager"
              onLoad={() => setVideoLoaded(true)}
            />

          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Desktop Overlay Card */}
        <div className="hidden lg:block absolute inset-0  pointer-events-none">
          <div className="container max-w-[1400px] mx-auto px-6 xl:px-8 h-full flex items-center">
            <div className="max-w-[500px]  rounded-lg pointer-events-auto">
              <h1 className="text-[2rem] text-white font-semibold leading-tight mb-5 drop-shadow-lg">
                <b>LEARN</b> Through doing. <b>GROW</b> with purpose. Belong to something <b>BIGGER.</b>
              </h1>
              <p className="text-base text-white leading-relaxed drop-shadow-md">
                An immersive <strong>VR welding training</strong> journey where learners gain skills, confidence, and community safely,freely, and fiercely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Card */}
      <div className="block lg:hidden relative -mt-20 sm:-mt-30 z-10 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg  p-6 sm:p-10">
            <h1 className="text-[1.40rem] sm:text-[2rem] font-semibold leading-tight mb-4 text-gray-900">
              <b>LEARN</b> Through doing. <b>GROW</b> with purpose. Belong to something <b>BIGGER.</b>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              An immersive <strong>VR welding training</strong> journey where learners gain skills, confidence, and community — safely,freely, and fiercely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VRWeldHero

