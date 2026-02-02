import React from 'react'

const CommitmentsSection = () => {
  const commitments = [
    {
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Impact-Summary-Cross-Expand-Opportunity-834x470?wid=406&hei=230&fit=crop&resSharp=1",
      title: "Expand opportunity",
      description: "We expand economic opportunity and growth for all."
    },
    {
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Impact-Summary-Cross-Earn-Trust-834x470?wid=380&hei=213&fit=crop",
      title: "Earn trust",
      description: "We create a safe, secure, and responsible digital world."
    },
    {
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Impact-Summary-Cross-Earn-Trust-834x470?wid=380&hei=213&fit=crop",
      title: "Protect fundamental rights",
      description: "We support and advance people's fundamental rights."
    },
    {
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Impact-Summary-Cross-Sustainability-834x470?wid=380&hei=213&fit=crop",
      title: "Advance sustainability",
      description: "We are committed to meeting our own climate goals while enabling others to do the same."
    }
  ]

  return (
    <div className="w-full bg-gray-50 py-9 lg:py-10">
      <div className="">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-16">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-tight mb-4 lg:mb-6">
            We believe that companies that can do more, should
          </h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
            We focus on four enduring commitments that are central to our mission, serving as a guide to ensure our actions align with our mission.
          </p>
          
          {/* Explore link */}
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-base sm:text-lg"
          >
            Explore our commitments
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Image with Badge */}
              <div className="relative">
                <img
                  src={commitment.image}
                  alt={commitment.title}
                  className="w-full h-48 object-cover"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <span className={`${commitment.badgeColor} text-black text-sm font-medium px-4 py-2 inline-block`}>
                    {commitment.badge}
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CommitmentsSection
