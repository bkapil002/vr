import React from 'react'

const CultureAndCareersSection = () => {
  return (
    <div className="w-full bg-white py-9 lg:py-10">
      <div className="">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 lg:mb-16">
          Our culture and careers
        </h2>

        {/* Main Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Because impact matters */}
          <div className=" lg:border-r  lg:border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Because impact matters
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 max-w-lg">
              At Teade VR you can live your purpose every day. With our scale and reach, your personal impact becomes part of a collective force for global progress.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base mb-8"
            >
              Explore careers at Teade VR
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Large Image */}
            <div className="mt-6">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-man-with-illustrated-background-653x653?wid=653&hei=653"
                alt="Teade VR employee with colorful background"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Two Cards Stacked */}
          <div className="space-y-12 lg:space-y-20">
            
            {/* Card 1: Diversity & Inclusion */}
            <div className='pb-8 lg:pb-20 border-b border-gray-200'>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Diversity & Inclusion
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    We believe our continued work to build diverse workforces and strengthen our culture of inclusion helps foster innovation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
                  >
                    Learn about diversity at Teade VR
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-Diversity-Inclusion-three-coworkers-400x400?wid=382&hei=382"
                    alt="Diverse team collaborating"
                    className="w-full sm:w-64 md:w-48 lg:w-56 h-auto object-cover flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Inclusion is innovation */}
            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Inclusion is innovation
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    We're developing solutions to diversity and inclusion challenges by activating the same ingenuity, intention, and experience behind our groundbreaking technological innovations.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
                  >
                    Explore the stories
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-illustrated-inclusive-group-400x400?wid=425&hei=425"
                    alt="Inclusive team illustration"
                    className="w-full sm:w-64 md:w-48 lg:w-56 h-auto object-cover flex-shrink-0"
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