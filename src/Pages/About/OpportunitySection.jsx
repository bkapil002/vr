import React from 'react'

const OpportunitySection = () => {
  return (
    <div className="w-full bg-white py-9 lg:py-10">
      <div className="">
        {/* Desktop: Side by side layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/About-Mission-Video-Teens-Tablet:VP2-859x557"
              alt="Students using technology"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-tight mb-6">
              Our opportunity and responsibility
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
              We're living in an era in which technology has the potential to power awesome advancements across every sector of our economy and society. This places us at a historic intersection of opportunity and responsibility. Our mission has never been more important. To realize it, we must create a future that benefits everyone.
            </p>
            
            {/* Watch the video link */}
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-base sm:text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Watch the video
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OpportunitySection
