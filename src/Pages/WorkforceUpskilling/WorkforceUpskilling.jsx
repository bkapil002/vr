import { useState, useEffect, useRef } from "react";


/* ── SVG Icons ── */
const IconZap        = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconClock      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconPackage    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IconAlertTri   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconFactory    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>;
const IconFlame      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
const IconHammer     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12l-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="M17.5 15H20a2 2 0 0 0 0-4h-3.5l-4-3.5L16 5l1 1 3.5-3.5-3-3L14 3 13 2l-2 2-1 1-1 2.5 3 2.5-4 4z"/></svg>;
const IconBuilding   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconShield     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconInfra      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconClipboard  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const IconShieldCheck= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
const IconTarget     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconAward      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IconDollar     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconCheckCircle= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

/* ── Data ── */
const challenges = [
  { Icon: IconZap,       text: "Machines change",        color: "text-orange-600", bg: "bg-orange-50" },
  { Icon: IconClipboard, text: "Standards tighten",      color: "text-rose-600",   bg: "bg-rose-50"   },
  { Icon: IconTrendingUp,text: "Technology advances",    color: "text-violet-600", bg: "bg-violet-50" },
];

const whyMatters = [
  { Icon: IconDollar,    text: "Downtime is expensive",                                  color: "text-rose-600",   bg: "bg-rose-50"   },
  { Icon: IconPackage,   text: "Retraining consumes materials, supervision & floor space",color: "text-orange-600", bg: "bg-orange-50" },
  { Icon: IconAlertTri,  text: "Mistakes during training are even more costly",           color: "text-amber-600",  bg: "bg-amber-50"  },
];

const industries = [
  { Icon: IconFactory,   label: "Manufacturing Plants"      },
  { Icon: IconFlame,     label: "Oil & Gas Operations"      },
  { Icon: IconHammer,    label: "Heavy Fabrication Units"   },
  { Icon: IconBuilding,  label: "Construction Firms"        },
  { Icon: IconInfra,     label: "Infrastructure Companies"  },
  { Icon: IconClipboard, label: "Skill Compliance Teams"    },
];

const tradevr = [
  {
    Icon: IconShield,
    title: "Reduces Risk During Early-Stage Practice",
    tag: "Safety First",
    desc: "New technicians often make errors during their first exposure to live equipment. In high-risk industries, even minor mistakes can damage materials, compromise safety, or slow production lines.",
    detail: "TradeVR allows workers to refine positioning, angles, sequencing, and coordination in a simulated environment — where errors become learning moments instead of operational liabilities.",
    color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200", accent: "bg-blue-600",
  },
  {
    Icon: IconClock,
    title: "Shortens Training Cycles",
    tag: "Faster Readiness",
    desc: "Because workers can repeat simulations without waiting for equipment availability, learning becomes continuous. Repetition builds muscle memory faster and feedback is immediate.",
    detail: "Skill gaps are corrected earlier in the process, compressing the time from onboarding to job readiness significantly.",
    color: "text-sky-700", bg: "bg-sky-50", border: "border-sky-200", accent: "bg-sky-600",
  },
  {
    Icon: IconTarget,
    title: "Standardizes Skill Benchmarks",
    tag: "Consistency",
    desc: "Traditional training often varies by instructor, shift timing, or facility capacity. TradeVR introduces structured evaluation parameters — ensuring every worker is measured against the same technical standards.",
    detail: "This improves fairness, compliance, and consistency across teams, batches, and locations.",
    color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200", accent: "bg-indigo-600",
  },
  {
    Icon: IconBarChart,
    title: "Tracks Performance and Progress",
    tag: "Data Visibility",
    desc: "Supervisors gain visibility into development curves, allowing targeted interventions rather than generalized retraining.",
    detail: "Instead of assuming readiness, managers can deploy workers based on measurable performance data — objectively and confidently.",
    color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", accent: "bg-emerald-600",
  },
];

const scenarios = [
  { label: "Complex joint positions"     },
  { label: "Confined-space welding"      },
  { label: "Precision angle training"    },
  { label: "Hazard-prone tasks"          },
];

const metrics = [
  { Icon: IconTarget,     label: "Accuracy Scoring",              desc: "Accuracy scoring helps identify technical weaknesses early.",              color: "text-[#005a9e]", bg: "bg-blue-50"    },
  { Icon: IconClock,      label: "Speed Tracking",                desc: "Speed tracking measures efficiency improvements over time.",        color: "text-sky-700",   bg: "bg-sky-50"     },
  { Icon: IconTrendingUp, label: "Skill Progression Curves",      desc: "Skill progression curves allow managers to benchmark cohorts.",            color: "text-indigo-700",bg: "bg-indigo-50"  },
  { Icon: IconAward,      label: "Certification Readiness",       desc: "Certification readiness benchmarks indicate deployment eligibility.",     color: "text-amber-700", bg: "bg-amber-50"   },
];

const impact = [
  { Icon: IconDollar,      label: "Lower Training Costs",               color: "text-emerald-700", bg: "bg-emerald-50" },
  { Icon: IconZap,         label: "Faster Competency Development",      color: "text-blue-700",    bg: "bg-blue-50"    },
  { Icon: IconShieldCheck, label: "Higher Compliance & Safety Standards",color: "text-sky-700",    bg: "bg-sky-50"     },
  { Icon: IconUsers,       label: "Increased Workforce Confidence",     color: "text-violet-700",  bg: "bg-violet-50"  },
];

/* ── Main Component ── */
export default function WorkforceUpskilling() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#003366]/85 to-[#005a9e]/60" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-6 drop-shadow-md">
              Upgrade Skills.<br />
              <span className="text-orange-300">Without Slowing</span><br />
              <span className="text-orange-300">Business Down.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-xl">
               Industries are evolving faster than training systems can keep up.
            </p>
          </div>

          {/* Floating challenge pills */}
          <div className="flex flex-wrap gap-3 ">
            {challenges.map(({ Icon, text, color, bg }, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-sm">
                <Icon c={`w-4 h-4 text-orange-300`} />
                <span className="text-white text-xs font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-4">Why This Matters The Most</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">
            Companies don't just need workers. They need <strong className="text-gray-800">future-ready technicians.</strong>
          </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {whyMatters.map(({ Icon, text, color, bg }, i) => (
          
              <div className="flex items-start gap-4 border border-gray-200 rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon c={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug pt-2">{text}</p>
              </div>
          ))}
        </div>
          <div className="border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-xl font-bold text-gray-900 leading-snug">
              How do you upskill your workforce <em className="not-italic text-[#005a9e]">without halting productivity?</em>
            </p>
          </div>
      </section>

      {/* ── FOR INDUSTRIAL LEADERS ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">For Industrial Leaders Who Value Precision</h2>
            <p className="text-gray-500 text-base mb-10 max-w-lg">Built for industries where precision is non-negotiable.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ Icon, label }, i) => (
                <div className="flex flex-col items-center text-center gap-3 bg-white border border-gray-200 rounded-sm p-5 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#005a9e]/8 group-hover:bg-[#005a9e]/15 flex items-center justify-center transition-colors duration-200">
                    <Icon c="w-5 h-5 text-[#005a9e]" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 leading-tight">{label}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TRADEVR WAY ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Way</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">
            Immersive, on-demand skill training that fits into your operations — not around them.
          </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {tradevr.map(({ Icon, title, tag, desc, detail, color, bg, border, accent }, i) => (
              <div className={`bg-white border ${border} rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group h-full flex flex-col`}>
                {/* Top accent bar */}
                <div className={`h-1 w-full ${accent}`} />
                <div className="p-7 flex flex-col flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon c={`w-5 h-5 ${color}`} />
                      </div>
                      <span className={`text-xs font-bold tracking-widest uppercase ${color} border ${border} px-2 py-0.5 rounded-sm`}>{tag}</span>
                    </div>
                    <span className="text-4xl font-bold text-gray-100 leading-none select-none">0{i + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 text-base mb-3 group-hover:${color} transition-colors duration-150 leading-snug`}>{title}</h3>

                  {/* Divider */}
                  <div className={`h-px w-12 ${accent} mb-4 group-hover:w-full transition-all duration-500`} />

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{desc}</p>

                  {/* Detail — highlighted callout */}
                 
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* ── HIGH-RISK SCENARIOS BANNER ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/80" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
     
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight max-w-2xl">
              Train for High-Risk Scenarios,<br />
              <span className="text-orange-300">Without Real-World Consequences.</span>
            </h2>
            <p className="text-blue-200 text-base mb-10 max-w-lg">
              Workers simulate the most demanding tasks in virtual environments — refining technique before risk becomes real.
            </p>


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {scenarios.map(({ label }, i) => (

                <div className="flex items-center gap-3 bg-white/8 border border-white/15 hover:bg-white/14 hover:border-orange-300/40 rounded-sm px-5 py-4 transition-all duration-200 group">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-150" />
                  <span className="text-white text-sm font-semibold leading-snug">{label}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA-DRIVEN METRICS ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left */}
           

            {/* Right — metric cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {metrics.map(({ Icon, label, desc, color, bg }, i) => (
                
                  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-sm px-5 py-5 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group h-full">
                    <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon c={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#005a9e] transition-colors duration-150">{label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
           
              ))}
            </div>
             <div className="lg:w-72 flex-shrink-0 order-1 -mt-0 md:-mt-4 lg:order-2">
              
                <h2 className="text-xl lg:text-3xl font-bold tracking-tight mt-3 mb-4 leading-snug">
                  Data-Driven Workforce Development
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                 With Virtual Reality technology, every session generates measurable metrics
                </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL IMPACT ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The Entirety of Real Impact</h2>
          <p className="text-gray-500 text-base mb-12 max-w-lg">Measurable results across every organization that deploys TradeVR.</p>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impact.map(({ Icon, label, color, bg }, i) => (
            
              <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-5`}>
                  <Icon c={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#005a9e] transition-colors duration-150">{label}</h3>
              </div>
            
          ))}
        </div>
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/96 via-[#003366]/90 to-[#005a9e]/82" />

        <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4">
              Because Growth Shouldn't Interrupt Operations.
            </h2>
            <h3 className="text-lg lg:text-xl font-light text-blue-100 mb-10">
              It Should Strengthen Them.
            </h3>
            <button 
              className="bg-[#005a9e] text-white font-bold px-10 py-3 rounded-sm text-base shadow-xl transition-colors duration-150">
              Request a demo
            </button>
        </div>
      </section>

 
     
    </div>
  );
}