import React from 'react'

/* ── SVG Icons ── */
const IconBuilding  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconZap       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconHeart     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconGlobe     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;

const commitments = [
  {
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=406&h=230&fit=crop",
    Icon: IconBuilding,
    title: "Strengthen Technical Education",
    description: "Strengthen technical education in schools and colleges with immersive, measurable vocational simulations.",
  },
  {
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=406&h=230&fit=crop",
    Icon: IconZap,
    title: "Accelerate Workforce Upskilling",
    description: "Accelerate workforce upskilling in industry through safe, repeatable, performance-driven learning environments.",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=406&h=230&fit=crop",
    Icon: IconHeart,
    title: "Support Rehabilitation Programs",
    description: "Support structured rehabilitation programs that restore confidence and create pathways to employment.",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=406&h=230&fit=crop",
    Icon: IconGlobe,
    title: "Expand Access Globally",
    description: "Enable large-scale reskilling initiatives and expand access to vocational training across geographies.",
  },
];

const CommitmentsSection = () => {
  return (
    <div className="w-full py-9 lg:py-10">
      <div className="">

        {/* Header Section */}
        <div className="mb-10 lg:mb-16">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-tight mb-6 text-gray-900">
            TradeVR was built to answer that.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl">
            We combine immersive virtual reality with structured vocational training frameworks to create safe, repeatable, and performance-driven learning environments.
          </p>

          {/* What we are / are not */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl">
            <div className="flex items-start gap-2">
              <span className="text-gray-400 text-sm font-semibold mt-0.5 flex-shrink-0">—</span>
              <p className="text-sm text-gray-500 leading-snug">We are not a hardware company.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 text-sm font-semibold mt-0.5 flex-shrink-0">—</span>
              <p className="text-sm text-gray-500 leading-snug">We are not just a simulation platform.</p>
            </div>
          </div>

          {/* Callout */}
          <div className="border-l-4 border-[#005a9e] bg-blue-50 pl-5 pr-4 py-3 rounded-r-sm mb-8 max-w-xl">
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
              We are a{" "}
              <span className="text-[#005a9e]">workforce development ecosystem</span>{" "}
              designed to serve institutions, industries, and learners globally.
            </p>
          </div>

          {/* Explore link */}
          <a href="#"
            className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-base sm:text-lg transition-colors duration-150">
            Explore our commitments
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {commitments.map(({ image, Icon, title, description }, index) => (
            <div key={index} className="bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">

              {/* Image with icon badge overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Icon badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white shadow-sm px-3 py-2 flex items-center gap-2">
                    <Icon c="w-4 h-4 text-[#005a9e]" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Top accent line */}
                <div className="w-8 h-0.5 bg-[#005a9e] mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-[#005a9e] transition-colors duration-150 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
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