import { useState, useEffect, useRef } from "react";




/* ── SVG Icons ── */
const IconRefresh    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const IconZap        = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconTrendingDn = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>;
const IconClock      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconBook       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconShield     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconHeart      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconActivity   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconTarget     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconAward      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconRepeat     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>;
const IconMessageSq  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconLayout     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const IconCheckCircle= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconBriefcase  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;

/* ── Data ── */
const disruptions = [
  { Icon: IconZap,        text: "Automation"           },
  { Icon: IconTrendingDn, text: "Industry disruption"  },
  { Icon: IconRefresh,    text: "Economic transitions" },
];

const whyMatters = [
  { Icon: IconClock,    text: "Long classroom hours often delay practical exposure.",              color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
  { Icon: IconShield,   text: "Limited practice slots slow confidence building.",                  color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
  { Icon: IconActivity, text: "Slow progress increases financial pressure during transition periods.", color: "text-[#005a9e]", bg: "bg-blue-50", border: "border-blue-200" },
];

const reskillCards = [
  {
    Icon: IconHeart,
    title: "Retain dignity",
    tag: "Professional Pride",
    desc: "Instead of sitting through entry-level classroom sessions disconnected from hands-on practice, learners immediately engage in applied simulation.",
    detail: "This preserves professional pride and confidence while relearning.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconRepeat,
    title: "Build muscle memory safely",
    tag: "Safe Repetition",
    desc: "Repetition without financial or safety consequences accelerates confidence. Workers learn by doing, not just observing.",
    detail: "Every simulation session builds deeper motor patterns that transfer directly to the job site.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
  {
    Icon: IconArrowRight,
    title: "Transition without starting from step 0",
    tag: "Experience Transfers",
    desc: "Existing discipline, work ethic, and operational understanding transfer into structured skill acquisition.",
    detail: "VR becomes a bridge, not a restart.",
    accent: "bg-[#005a9e]", border: "border-blue-200", color: "text-[#005a9e]", bg: "bg-blue-50",
  },
];

const pathway = [
  { Icon: IconUsers,      text: "Learners gain hands-on exposure without prior technical background."                              },
  { Icon: IconShield,     text: "Practice happens in a risk-free environment that encourages repetition."                          },
  { Icon: IconBarChart,   text: "Progress is measurable and structured, reinforcing motivation."                                   },
  { Icon: IconTrendingUp, text: "Fear of starting over becomes excitement about growth as visible improvement builds confidence."   },
];

const alignment = [
  { Icon: IconTarget,    label: "Industry benchmarks"         },
  { Icon: IconAward,     label: "Certification frameworks"    },
  { Icon: IconBriefcase, label: "Apprenticeship pipelines"    },
];

const outcomes = [
  { Icon: IconClock,      title: "Reduced transition time",              desc: "Continuous simulation shortens the gap between retraining and redeployment."                          },
  { Icon: IconRepeat,     title: "Repetitive simulation builds muscle memory", desc: "Skill repetition strengthens coordination, consistency, and accuracy — essential in technical trades." },
  { Icon: IconMessageSq,  title: "Immediate feedback improves correction speed", desc: "Learners adjust in real time, preventing bad habits from forming."                              },
  { Icon: IconLayout,     title: "No waiting for equipment access",      desc: "Multiple trainees can progress without infrastructure bottlenecks."                                    },
  { Icon: IconTrendingUp, title: "Increased learner confidence",         desc: "Visible performance improvement reduces self-doubt during career transition."                          },
  { Icon: IconUsers,      title: "Scalable retraining programs",         desc: "Institutions can run larger cohorts without proportional increases in physical resources."             },
];

const transformations = [
  { from: "Unskilled",        to: "Job-ready"          },
  { from: "Retraining",       to: "Redeployment"       },
  { from: "Starting over",    to: "Accelerated growth" },
];

/* ── Component ── */
export default function ReskillingPrograms() {
 

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/88 to-[#005a9e]/65" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4 drop-shadow-md">
              Pivot with Purpose.
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 font-light mb-8 leading-snug">
              When Careers Shift, Skills Should Too. That's why: Turning yesterday's experience into tomorrow's career.
            </p>
            {/* Disruption pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {disruptions.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-sm">
                  <Icon c="w-4 h-4 text-blue-300" />
                  <span className="text-white text-xs font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Why This Matters</h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
            Mid-career professionals can't afford to start from zero. But{" "}
            <strong className="text-gray-900">traditional retraining models are not solutions for everyone, sometimes.</strong>
          </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {whyMatters.map(({ Icon, text, color, bg, border }, i) => (
              <div className={`flex items-start gap-4 border ${border} rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon c={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug pt-2">{text}</p>
              </div>
          ))}
        </div>
      </section>

      {/* ── RESKILLING WITHOUT RESETTING IDENTITY ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Reskilling Without Resetting Identity</h2>
            <p className="text-gray-500 text-base max-w-xl mb-12">TradeVR allows experienced workers to move forward — not backward.</p>
          

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {reskillCards.map(({ Icon, title, tag, desc, detail, accent, border, color, bg }, i) => (
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
        </div>
      </section>

      {/* ── THE TRADEVR PATHWAY ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Pathway</h2>
          <p className="text-gray-500 text-base max-w-2xl mb-12">
            We help workers transition from declining industries into the heart of modern skills needs. With immersive VR vocational programs:
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {pathway.map(({ Icon, text }, i) => (
              <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-sm p-6 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon c="w-5 h-5 text-[#005a9e]" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pt-1 font-medium">{text}</p>
              </div>
          ))}
        </div>

          <div className="border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-base font-bold text-[#005a9e] leading-snug">
              Fast-track the transition from unskilled to job-ready through intensive, muscle-memory-based VR simulation.
            </p>
          </div>
      </section>

      {/* ── FROM TRAINING TO EMPLOYABILITY ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/80" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">From Training to Employability</h2>
            <p className="text-blue-200 text-base mb-10 max-w-xl">Programs can align with:</p>

          <div className="flex flex-wrap gap-4 mb-12">
            {alignment.map(({ Icon, label }, i) => (
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/16 hover:border-blue-300/50 rounded-sm px-6 py-4 transition-all duration-200 group">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <Icon c="w-4 h-4 text-blue-200" />
                  </div>
                  <span className="text-white font-bold text-sm">{label}</span>
                </div>
            ))}
          </div>

            <div className="bg-white/10 border border-white/20 rounded-sm px-8 py-6 max-w-2xl">
              <p className="text-blue-100 text-sm font-semibold mb-2">This makes placement conversations easier.</p>
              <p className="text-white text-base leading-relaxed">
                When employers see structured performance data,{" "}
                <strong className="text-blue-200">hiring decisions feel less risky.</strong>
              </p>
            </div>
          
        </div>
      </section>

      {/* ── THE OUTCOME: ACCELERATED SKILL ACQUISITION ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The Outcome: Accelerated Skill Acquisition</h2>
          <p className="text-gray-500 text-base mb-12 max-w-xl">Measurable impact across every stage of career transition.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map(({ Icon, title, desc }, i) => (
              <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                  <Icon c="w-6 h-6 text-[#005a9e]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#005a9e] transition-colors duration-150 leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
          ))}
        </div>
      </section>

      {/* ── TRANSFORMATION ROWS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-10">What Changes</h2>
          <div className="flex flex-col gap-3">
            {transformations.map(({ from, to }, i) => (
                <div className="flex items-stretch bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-[#005a9e] transition-colors duration-200">
                  <div className="flex-1 px-7 py-5 text-gray-400 font-medium text-base border-r border-gray-200">{from}</div>
                  <div className="px-6 flex items-center text-[#005a9e] font-bold text-xl">→</div>
                  <div className="flex-1 px-7 py-5 text-gray-900 font-bold text-base">{to}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/96 via-[#003366]/90 to-[#005a9e]/82" />

        <div className="relative z-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-3">
              Re-skill. Re-tool. Re-launch.
            </h2>
            <h3 className="text-lg lg:text-xl font-light text-blue-100 mb-10">
              Because Reinvention Should Be Empowering. Not Overwhelming.
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