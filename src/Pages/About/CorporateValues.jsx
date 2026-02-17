import React from "react";

const CorporateValues = () => {
  return (
    <section className="w-full bg-white">
      <div className="py-9 lg:py-10">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
            Our Commitment
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            We are committed to making skill development work for every learner,
            every institution, and every region — without compromise.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          {/* Accessible */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Accessible</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              So geography does not limit ambition.
            </p>
          </div>

          {/* Measurable */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Measurable</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              So progress is visible and validated.
            </p>
          </div>

          {/* Scalable */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Scalable</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              So institutions can grow without constraint.
            </p>
          </div>

          {/* Future-ready */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Future-ready</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              So learners are prepared for evolving industries.
            </p>
          </div>

        </div>

        {/* Explore CTA */}
        <div className="border-t border-gray-200 pt-10">
          <div className="max-w-3xl">
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-gray-900">
              Explore What Skill Can Become
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              See how immersive vocational training can transform your institution, your workforce, and your impact.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-base sm:text-lg transition-colors duration-150"
            >
              Explore the Learning Path
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateValues;