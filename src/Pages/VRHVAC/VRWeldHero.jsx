import React, { useState } from 'react'
import heroimage from '../../image/cover hvac.jpg'

const VRWeldHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative bg-black">

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
          )}

          {/* Image wrapper */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroimage}
              onLoad={() => setImageLoaded(true)}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Desktop Overlay Card */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="container max-w-[1400px] mx-auto px-6 xl:px-8 h-full flex items-center">
            <div className="max-w-[500px] rounded-lg pointer-events-auto">
              <h1 className="text-[2rem] text-white font-semibold leading-tight mb-5 drop-shadow-lg">
                Learn HVAC Systems the Way They Work in the Real World
              </h1>
              <p className="text-base text-white leading-relaxed drop-shadow-md">
                Teach installation, airflow, and troubleshooting in immersive virtual environments — without equipment limits or safety risks.
              </p>
              <div className="pt-3">
                <button className="bg-[#005a9e] hover:bg-[#004a7e] text-white font-semibold px-8 py-2.5 rounded-md transition-all duration-300">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Card */}
      <div className="block lg:hidden relative -mt-20 sm:-mt-28 z-10 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg p-6 sm:p-10">
            <h1 className="text-[1.40rem] sm:text-[2rem] font-semibold leading-tight mb-4 text-gray-900">
              Learn HVAC Systems the Way They Work in the Real World
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Teach installation, airflow, and troubleshooting in immersive virtual environments — without equipment limits or safety risks.
            </p>
            <div className="pt-3">
              <button className="bg-[#005a9e] hover:bg-[#004a7e] text-white font-semibold px-5 py-2 rounded-md transition-all duration-300">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VRWeldHero