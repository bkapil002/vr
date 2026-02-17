import React from 'react'

/* ── SVG Icons ── */
const IconDollar   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconWrench   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IconPackage  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IconAlertTri = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;

const problems = [
  { Icon: IconDollar,   text: "Workshops are expensive to build and maintain."         },
  { Icon: IconWrench,   text: "Equipment requires continuous upkeep and replacement."  },
  { Icon: IconPackage,  text: "Consumables increase recurring cost."                   },
  { Icon: IconAlertTri, text: "Safety risks restrict experimentation."                 },
];

const OpportunitySection = () => {
  return (
    <div className="w-full bg-white py-9 lg:py-10">
      <div className="">
        {/* Desktop: Side by side layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=860&q=80"
              alt="Vocational training — The problems we set out to solve"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-tight mb-6 text-gray-900">
              The Problems We Set Out to Solve
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Traditional vocational training models face persistent constraints:
            </p>

            {/* Problem list */}
            <div className="flex flex-col gap-3 mb-8">
              {problems.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon c="w-4 h-4 text-[#005a9e]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium leading-snug pt-2">{text}</p>
                </div>
              ))}
            </div>

            {/* Callout question */}
            <div className="border-l-4 border-[#005a9e] bg-blue-50 pl-5 pr-4 py-4 rounded-r-sm">
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
                What if skill development could be{" "}
                <span className="text-[#005a9e]">immersive, measurable, and accessible</span>{" "}
                — without the constraints of traditional infrastructure?
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunitySection