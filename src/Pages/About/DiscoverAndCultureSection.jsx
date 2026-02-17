import React from 'react'
import CultureAndCareersSection from './CultureAndCareersSection'
/* ── SVG Icons ── */
const IconBuilding  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconZap       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconClipboard = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const IconHeart     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconUsers     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

const ChevronRight = () => (
  <svg className="w-5 h-5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const partners = [
  { Icon: IconBuilding,  label: "Educational institutions",             desc: "Preparing the next generation of skilled workers."           },
  { Icon: IconZap,       label: "Industrial enterprises",               desc: "Strengthening workforce readiness and onboarding."           },
  { Icon: IconClipboard, label: "Government bodies",                    desc: "Building national and regional skill frameworks."            },
  { Icon: IconHeart,     label: "Correctional facilities",              desc: "Creating structured rehabilitation pathways."                },
  { Icon: IconUsers,     label: "Workforce development organizations",  desc: "Addressing employment gaps at scale."                        },
];

const DiscoverAndCultureSection = () => {
  return (
    <div className="w-full bg-white">

      {/* ── Discover More Section ── */}
      <div className="py-9 lg:py-10 border-b border-gray-200">
        <div className="">

          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-semibold mb-4 text-gray-900 leading-tight">
            Designed for Institutions That Think Long-Term
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 lg:mb-14 max-w-2xl">
            TradeVR partners with organizations committed to scalable, measurable vocational development.
          </p>

          {/* Three-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            {/* Column 1 */}
            <div className="flex flex-col gap-7">
              {partners.slice(0, 2).map(({ Icon, label, desc }, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon c="w-3.5 h-3.5 text-[#005a9e]" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">{label}</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-[2.375rem] mb-2 leading-relaxed">{desc}</p>
                  <a href="#"
                    className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm ml-[2.375rem] transition-colors duration-150">
                    Learn more <ChevronRight />
                  </a>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-7">
              {partners.slice(2, 4).map(({ Icon, label, desc }, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon c="w-3.5 h-3.5 text-[#005a9e]" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">{label}</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-[2.375rem] mb-2 leading-relaxed">{desc}</p>
                  <a href="#"
                    className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm ml-[2.375rem] transition-colors duration-150">
                    Learn more <ChevronRight />
                  </a>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-7">
              {/* Last partner */}
              {partners.slice(4).map(({ Icon, label, desc }, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon c="w-3.5 h-3.5 text-[#005a9e]" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">{label}</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-[2.375rem] mb-2 leading-relaxed">{desc}</p>
                  <a href="#"
                    className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-sm ml-[2.375rem] transition-colors duration-150">
                    Learn more <ChevronRight />
                  </a>
                </div>
              ))}

              {/* Partnership CTA */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Ready to partner with TradeVR?
                </h3>
                <a href="#"
                  className="inline-flex items-center text-[#005a9e] hover:text-[#004a87] font-medium text-base transition-colors duration-150">
                  Explore partnership opportunities
                  <ChevronRight />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    <CultureAndCareersSection/>
    </div>
  )
}

export default DiscoverAndCultureSection