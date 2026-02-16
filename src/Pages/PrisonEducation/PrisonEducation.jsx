import { useState, useEffect, useRef } from "react";

/* ── Scroll-trigger hook ── */


/* ── SVG Icons ── */
const IconHeart      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconShield     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconDollar     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconWrench     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IconZap        = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconTarget     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconCheckCircle= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconBriefcase  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconMessageSq  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconAward      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IconClipboard  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

/* ── Data ── */
const challenges = [
  { Icon: IconUsers,  text: "Many incarcerated individuals lack access to meaningful vocational training.", color: "text-[#005a9e]",  bg: "bg-blue-50",  border: "border-blue-200"  },
  { Icon: IconShield, text: "Strict safety regulations around tools and equipment.",                        color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  { Icon: IconDollar, text: "Budget limitations that restrict program expansion.",                          color: "text-rose-700",  bg: "bg-rose-50",  border: "border-rose-200"  },
];

const modelCards = [
  {
    Icon: IconWrench,
    title: "Provide structured vocational learning without heavy equipment",
    desc: "Traditional workshops require physical tools, protective infrastructure, and intensive supervision. VR eliminates these barriers while preserving skill sequencing and technical discipline.",
    tag: "No Equipment Needed",
    color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200", accent: "bg-[#005a9e]",
  },
  {
    Icon: IconShield,
    title: "Eliminate physical tool risks",
    desc: "Without live sparks, metal, or machinery, facilities reduce safety concerns while maintaining structured skill exposure.",
    tag: "Zero Physical Risk",
    color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200", accent: "bg-[#005a9e]",
  },
  {
    Icon: IconBarChart,
    title: "Create measurable skill development pathways",
    desc: "Learners move through defined modules, building competencies step by step. Progress can be tracked objectively. This creates a sense of achievement tied to performance, not time served.",
    tag: "Trackable Progress",
    color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200", accent: "bg-[#005a9e]",
  },
  {
    Icon: IconBriefcase,
    title: "Prepare inmates for employment post-release",
    desc: "By familiarizing learners with real-world task simulation and industry terminology, TradeVR bridges the psychological and technical gap between incarceration and workforce participation.",
    tag: "Employment Ready",
    color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200", accent: "bg-[#005a9e]",
  },
];

const postRelease = [
  {
    Icon: IconTarget,
    title: "Industry-relevant practice",
    desc: "Simulation replicates task structure, sequencing, and execution standards aligned with modern job requirements.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconMessageSq,
    title: "Technical vocabulary",
    desc: "Familiarity with industry language improves interview confidence and communication on job sites.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconCheckCircle,
    title: "Confidence under supervision",
    desc: "Structured evaluation prepares individuals to receive feedback constructively — a key workplace skill.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconClipboard,
    title: "Structured skill validation",
    desc: "Documented performance data offers tangible proof of progression, strengthening employability conversations.",
    color: "text-[#005a9e]", bg: "bg-blue-50",
  },
];

const transformations = [
  { from: "Idle time",    to: "Productive learning"        },
  { from: "Uncertainty",  to: "Employability"               },
  { from: "Stigma",       to: "Skill-backed confidence"     },
];

/* ── Component ── */
export default function PrisonEducation() {

;



  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/88 to-[#005a9e]/65" />
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
           
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 drop-shadow-md">
              Skill, Dignity:<br />
              <span className="text-[#60b8ff]">A Second Beginning.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-xl">
              A blueprint for redemption, changing time served into a life of service and skill.
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
        
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            Re-entry into society requires more than just a certificate; it requires a <strong className="text-gray-900">sense of purpose and a viable path.</strong> TradeVR provides a bridge from the inside to the industry, proving that a person's past does not have to dictate their future.
          </p>
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {challenges.map(({ Icon, text, color, bg, border }, i) => (
              <div className={`flex items-start gap-4 border ${border} rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon c={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug pt-2">{text}</p>
              </div>
          ))}
        </div>

          <div className="mt-12 border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-xl font-bold text-gray-900 leading-snug">
              What if correctional facilities could safely deliver{" "}
              <em className="not-italic text-[#005a9e]">high-value skill training</em> within secure environments?
            </p>
          </div>
      </section>

      {/* ── THE TRADEVR MODEL ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Model</h2>
            <p className="text-gray-500 text-base max-w-2xl mb-12">
              Immersive VR training allows facilities to introduce structured vocational learning within controlled settings.
            </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {modelCards.map(({ Icon, title, tag, desc, color, bg, border, accent }, i) => (
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
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORTING POST-RELEASE EMPLOYMENT ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Supporting Post-Release Employment</h2>
          <p className="text-gray-500 text-base max-w-2xl mb-12">TradeVR equips learners with the tools they need to re-enter the workforce with confidence.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {postRelease.map(({ Icon, title, desc, color, bg }, i) => (
              <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5`}>
                  <Icon c={`w-6 h-6 ${color}`} />
                </div>
                <h3 className={`font-bold text-gray-900 text-sm mb-3 group-hover:${color} transition-colors duration-150 leading-snug`}>{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
          ))}
        </div>

          <div className="mt-12 border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-base text-gray-700 leading-relaxed">
              This moves the focus of rehabilitation from <strong className="text-gray-900">conceptual reform</strong> to{" "}
              <strong className="text-[#005a9e]">concrete training for the workforce.</strong>
            </p>
          </div>
      </section>

      {/* ── WHAT CHANGES ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/82" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#60b8ff] mb-3 block">Transformation</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 leading-tight">What Changes</h2>

          <div className="flex flex-col gap-3 mb-12">
            {transformations.map(({ from, to }, i) => (
                <div className="flex items-stretch bg-white/8 border border-white/15 rounded-sm overflow-hidden hover:bg-white/12 transition-colors duration-200">
                  <div className="flex-1 px-7 py-5 text-white/50 font-medium text-base border-r border-white/10">
                    From <span className=" text-white/40">{from}</span>
                  </div>
                  <div className="px-6 flex items-center">
                    <IconArrowRight c="w-5 h-5 text-[#60b8ff]" />
                  </div>
                  <div className="flex-1 px-7 py-5 text-white font-bold text-base">{to}</div>
                </div>

            ))}
          </div>

            <div className="bg-white/10 border border-white/20 rounded-sm px-8 py-6 max-w-2xl">
              <p className="text-blue-200 text-base leading-relaxed">
                When individuals leave with real competencies, they return to society as{" "}
                <strong className="text-white">contributors, not statistics.</strong>
              </p>
            </div>
        </div>
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="py-24 px-6 text-center bg-white">
          <div className="w-16 h-1 bg-[#005a9e] mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight max-w-2xl mx-auto mb-4">
            Because Every Person Deserves a Skill.
          </h2>
          <h3 className="text-lg lg:text-xl font-light text-[#005a9e] mb-10">
            And Every Skill Creates a New Start.
          </h3>
          <button 
            className="bg-[#005a9e] hover:bg-[#004a87] text-white font-bold px-10 py-3 rounded-sm text-base shadow-lg transition-colors duration-150">
            Request a demo
          </button>
      </section>

    </div>
  );
}