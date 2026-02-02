import React from 'react'
import CultureAndCareersSection from './CultureAndCareersSection'

const DiscoverAndCultureSection = () => {
  return (
    <div className="w-full bg-white">
      
      {/* Discover More Section */}
      <div className="py-9 lg:py-10 border-b border-gray-200">
        <div className="">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold mb-8 lg:mb-12">
            Discover more from Teade VR
          </h2>
          
          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Teade VR products built to support you
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-base"
              >
                Explore Teade VR products and apps
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Achieve more with the Teade VR Cloud
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-base"
              >
                Learn about Teade VR Cloud
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Any platform. Any language. Our tools.
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-base"
              >
                Visit Teade VR Developer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Our Culture and Careers Section */}
      
      <CultureAndCareersSection/>

    </div>
  )
}

export default DiscoverAndCultureSection
