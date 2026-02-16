import { useState, useEffect, useRef } from "react";



/* ── SVG Icons ── */
const IconGlobe      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconMapPin     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconDollar     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconPackage    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IconCloud      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const IconLayout     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const IconMonitor    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IconTarget     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconShield     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconCheckCircle= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconBuilding   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconHeart      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconBriefcase  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconClipboard  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const IconZap        = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

/* ── Data ── */
const challenges = [
  { Icon: IconMapPin,   text: "Limited access to modern vocational labs",    color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
  { Icon: IconDollar,   text: "High setup costs",                             color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
  { Icon: IconUsers,    text: "Shortage of certified trainers",               color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
  { Icon: IconBarChart, text: "Unequal training standards",                   color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
];

const deployments = [
  { Icon: IconBuilding,  text: "Schools can introduce practical exposure without building heavy workshops."                                    },
  { Icon: IconClipboard, text: "Government initiatives can implement structured programs across multiple districts."                           },
  { Icon: IconTarget,    text: "Industrial training centers can standardize competency measurement."                                           },
  { Icon: IconGlobe,     text: "International workforce programs can maintain consistency across borders."                                     },
];

const scalableCards = [
  {
    Icon: IconPackage,
    title: "Portable hardware",
    tag: "Anywhere Ready",
    desc: "Allows deployment in urban centers, rural regions, or temporary training setups without heavy installation.",
    detail: "No fixed infrastructure required — set up a full training lab in any available space.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconCloud,
    title: "Cloud-enabled performance tracking",
    tag: "Central Oversight",
    desc: "Central authorities can monitor multiple training sites remotely, maintaining oversight and quality control.",
    detail: "Real-time dashboards give program managers full visibility across every deployment location.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconLayout,
    title: "Standardized curriculum modules",
    tag: "Consistent Quality",
    desc: "Ensures consistent competency benchmarks across countries while allowing local adaptation.",
    detail: "Global standards with local flexibility — the best of both worlds for international programs.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconMonitor,
    title: "Remote monitoring capability",
    tag: "Faster Scale-Up",
    desc: "Reduces dependency on highly specialized local trainers, enabling faster scale-up in emerging markets.",
    detail: "Expert oversight from anywhere means quality doesn't depend on local trainer availability.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
];

const idealFor = [
  { Icon: IconClipboard, label: "Government Skill Missions"   },
  { Icon: IconGlobe,     label: "International NGOs"          },
  { Icon: IconTrendingUp,label: "Development Agencies"        },
  { Icon: IconBuilding,  label: "Multinational Enterprises"   },
  { Icon: IconHeart,     label: "CSR Initiatives"             },
];

const oneStandard = [
  {
    Icon: IconShield,
    title: "Uniform training quality",
    desc: "Learners in different regions receive consistent exposure and evaluation.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconTarget,
    title: "Benchmark-based evaluation",
    desc: "Institutions can compare performance across cohorts, cities, or even countries.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconGlobe,
    title: "Cross-border skill comparability",
    desc: "Standardized training makes worker mobility easier in global labor markets.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
];

const enables = [
  { Icon: IconMapPin,    text: "Rapid deployment in remote or underserved regions" },
  { Icon: IconDollar,    text: "Reduced infrastructure costs"                       },
  { Icon: IconGlobe,     text: "Unified training standards across countries"        },
  { Icon: IconBarChart,  text: "Measurable outcomes at scale"                       },
];

/* ── Component ── */
export default function GlobalDeployments() {


  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/88 to-[#005a9e]/60" />
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 drop-shadow-md">
              Impact Without Borders.
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 font-light mb-10 leading-snug max-w-xl">
              Talent is everywhere. Training infrastructure is not.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="bg-[#005a9e] hover:bg-[#004a87] text-white font-bold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-lg">
                Request a demo
              </button>
              <button className="border border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-sm text-sm transition-colors duration-150 backdrop-blur-sm">
                Learn more ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Why This Matters</h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
            Many regions face systemic barriers that keep talent potential underdeveloped — and global skill gaps slow economic progress.
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {challenges.map(({ Icon, text, color, bg, border }, i) => (
              <div className={`flex items-start gap-4 border ${border} rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon c={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug pt-2">{text}</p>
              </div>
          ))}
        </div>

          <div className="border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-[#005a9e] font-semibold text-sm mb-1">So the question becomes:</p>
            <p className="text-xl font-bold text-gray-900 leading-snug">
              How do we <em className="not-italic text-[#005a9e]">democratize high-quality vocational training</em> worldwide?
            </p>
          </div>
      </section>

      {/* ── THE TRADEVR GLOBAL ADVANTAGE ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Global Advantage</h2>
            <p className="text-gray-500 text-base max-w-2xl mb-10">
              Through portable VR systems and standardized modules, TradeVR can be deployed across any context — urban or rural, local or international.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {deployments.map(({ Icon, text }, i) => (
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-sm p-6 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon c="w-5 h-5 text-[#005a9e]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-relaxed pt-1">{text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR SCALABLE ROLLOUT ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Built for Scalable Rollout</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">
            Global programs require flexibility. TradeVR's modular structure allows phased deployment.
          </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {scalableCards.map(({ Icon, title, tag, desc, detail, accent, border, color, bg }, i) => (
              <div className={`bg-white border ${border} rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group h-full flex flex-col`}>
                <div className={`h-1 w-full ${accent}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon c={`w-5 h-5 ${color}`} />
                      </div>
                      <span className={`text-xs font-bold tracking-widest uppercase ${color} border ${border} px-2 py-0.5 rounded-sm`}>{tag}</span>
                    </div>
                    <span className="text-4xl font-bold text-gray-100 leading-none select-none">0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{title}</h3>
                  <div className={`h-px w-12 ${accent} mb-4 group-hover:w-full transition-all duration-500`} />
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{desc}</p>
                  <div className={`pt-4 border-t ${border}`}>
                    <p className={`text-xs font-semibold ${color} leading-relaxed`}>{detail}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* ── IDEAL FOR ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/80" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 leading-tight">Who It's Built For</h2>

          <div className="flex flex-wrap gap-4">
            {idealFor.map(({ Icon, label }, i) => (
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/16 hover:border-blue-300/50 rounded-sm px-6 py-4 transition-all duration-200 group">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <Icon c="w-4 h-4 text-blue-200" />
                  </div>
                  <span className="text-white font-bold text-sm">{label}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE STANDARD. ANYWHERE. ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">One Standard. Anywhere.</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">TradeVR enables consistent quality regardless of geography.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {oneStandard.map(({ Icon, title, desc, color, bg }, i) => (
              <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5`}>
                  <Icon c={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#005a9e] transition-colors duration-150">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
          ))}
        </div>

          <div className="border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm max-w-3xl">
            <p className="text-base text-gray-700 leading-relaxed">
              This is how new-world technology closes opportunity gaps — not by replacing local systems, but by{" "}
              <strong className="text-[#005a9e]">strengthening them with scalable infrastructure.</strong>
            </p>
          </div>
      </section>

      {/* ── WHAT IT ENABLES ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-12">What It Enables</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {enables.map(({ Icon, text }, i) => (
                <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                    <Icon c="w-6 h-6 text-[#005a9e]" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#005a9e] transition-colors duration-150">{text}</p>
                </div>
              
            ))}
          </div>

         
            <div className="bg-[#005a9e] rounded-sm px-8 py-7 max-w-2xl">
              <p className="text-blue-100 text-sm mb-1">A bigger purpose:</p>
              <p className="text-white font-bold text-lg leading-snug">
                This isn't just exporting technology.<br />
                <span className="font-light text-blue-200">It's exporting opportunity.</span>
              </p>
            </div>
          
        </div>
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/96 via-[#003366]/90 to-[#005a9e]/82" />

        <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4">
              Because Skill Is Universal.
            </h2>
            <h3 className="text-lg lg:text-xl font-light text-blue-100 mb-10">
              And So Should Access To It.
            </h3>
            <button
              className="bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-10 py-3 rounded-sm text-base shadow-xl transition-colors duration-150">
              Request a demo
            </button>
        </div>
      </section>

    
    </div>
  );
}