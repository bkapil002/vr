import { useState, useEffect, useRef } from "react";


/* ── SVG Icon Components ── */
const IconWrench = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconLayout = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
  </svg>
);

const IconLeaf = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconSettings = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconBarChart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const IconTarget = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconTrendingUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const IconCheckCircle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const IconRefreshCw = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

const IconDollarSign = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const IconPackage = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const IconUsers = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconAlertTriangle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const IconShield = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconPiggyBank = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z"/><path d="M2 9v1a2 2 0 0 0 2 2h1"/><path d="M16 11h.01"/>
  </svg>
);

const IconAward = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const IconGlobe = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

/* ── Data ── */
const problems = [
  { Icon: IconDollarSign, text: "Equipment is expensive", color: "text-rose-600", bg: "bg-rose-50" },
  { Icon: IconPackage, text: "Consumables add recurring costs", color: "text-orange-600", bg: "bg-orange-50" },
  { Icon: IconUsers, text: "Instructor-to-student ratios limit practice time", color: "text-violet-600", bg: "bg-violet-50" },
  { Icon: IconAlertTriangle, text: "Safety concerns restrict experimentation", color: "text-amber-600", bg: "bg-amber-50" },
];

const benefits = [
  { Icon: IconShield, title: "Safe Practice", desc: "Repeatable hands-on training without real-world risk", color: "text-blue-600", bg: "bg-blue-50" },
  { Icon: IconPiggyBank, title: "Lower Costs", desc: "Reduce equipment damage and material waste significantly", color: "text-emerald-600", bg: "bg-emerald-50" },
  { Icon: IconAward, title: "Build Confidence", desc: "Students master skills before real-world exposure", color: "text-amber-600", bg: "bg-amber-50" },
  { Icon: IconGlobe, title: "Scalable Access", desc: "Expand technical education without heavy infrastructure", color: "text-sky-600", bg: "bg-sky-50" },
];

const institutions = [
  "ITIs and Polytechnics", "Engineering Colleges", "Vocational Training Institutes",
  "Government Skill Missions", "CSR-Funded Skill Labs", "Private Trade Academies",
];

const analytics = [
  {
    Icon: IconBarChart,
    label: "Real-time Performance Analytics",
    desc: "Live dashboards showing student progress as it happens",
    color: "bg-blue-50 text-[#005a9e]",
  },
  {
    Icon: IconTarget,
    label: "Objective Skill Assessment Metrics",
    desc: "Data-driven scoring without instructor bias",
    color: "bg-sky-50 text-sky-700",
  },
  {
    Icon: IconTrendingUp,
    label: "Individual Progress Tracking",
    desc: "Per-student growth curves across every module",
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    Icon: IconCheckCircle,
    label: "Standardized Evaluation Across Batches",
    desc: "Consistent benchmarks regardless of batch or instructor",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    Icon: IconRefreshCw,
    label: "Replay and Review Functionality",
    desc: "Instructors replay any session to coach precisely",
    color: "bg-amber-50 text-amber-700",
  },
];

const infra = [
  {
    Icon: IconWrench,
    text: "No heavy tools required",
    desc: "All equipment replaced by a single VR headset",
    color: "text-[#005a9e]",
    bg: "bg-blue-50",
  },
  {
    Icon: IconLayout,
    text: "Minimal floor space",
    desc: "A 10×10 ft room can host a full lab",
    color: "text-sky-700",
    bg: "bg-sky-50",
  },
  {
    Icon: IconLeaf,
    text: "Reduced consumable waste",
    desc: "Zero materials consumed in virtual practice",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    Icon: IconSettings,
    text: "Lower equipment maintenance",
    desc: "No mechanical wear, no calibration downtime",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
];

const steps = [
  { num: "01", title: "VR Lab Setup & Hardware Installation" },
  { num: "02", title: "Faculty Orientation & Training" },
  { num: "03", title: "Curriculum Integration" },
  { num: "04", title: "Student Practice + Performance Tracking" },
];

const transformations = [
  { from: "Passive listening", to: "Active learning" },
  { from: "Theory-heavy", to: "Skill-balanced education" },
  { from: "Fear of mistakes", to: "Fearless practice" },
];

/* ── Component ── */
export default function SchoolsColleges() {



  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO with background image ── */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600&q=80')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f54]/90 via-[#005a9e]/75 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 drop-shadow-md">
              Beyond the Classroom.<br />
              <span className="text-sky-300">Into the Future.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-md">
              Bridging the gap between theory and trade through immersive discovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-lg"
              >
                Request a demo
              </button>
              <button className="border border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-sm text-sm transition-colors duration-150 backdrop-blur-sm">
                Learn more ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Why This Matters</h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mb-4">
            Students don't drop out of learning because they lack intelligence.{" "}
            <strong className="text-gray-900">They disengage because learning feels distant from reality.</strong>
          </p>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-4">
            When education becomes overly theoretical, students struggle to connect concepts with outcomes. They memorize
            processes without understanding application. They pass exams without building confidence. And over time,
            curiosity fades.
          </p>
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Traditional vocational labs attempt to bridge this gap — but they come with real constraints.
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {problems.map(({ Icon, text, color, bg }, i) => (
              <div className="border border-gray-200 rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{text}</p>
              </div>
          ))}
        </div>

          <div className="mt-12 border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-xl font-bold text-gray-900 leading-snug">
              How do we make skill-building <em>safe, scalable, and inspiring?</em>
            </p>
            <p className="text-gray-500 mt-2 text-base">
              And more importantly — how do we bring relevance back into the classroom?
            </p>
          </div>
      </section>

      {/* ── THE TRADEVR ANSWER ── */}
      <section className="bg-gray-50 py-10 ">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Answer</h2>
            <p className="text-gray-500 text-base max-w-xl mb-12">
              With immersive VR skill training, schools and colleges can reimagine hands-on learning.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ Icon, title, desc, color, bg }, i) => (
              
                <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  {/* <h3 className="font-bold text-gray-900 mb-2">{title}</h3> */}
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              
            ))}
          </div>

            <div className="mt-12 relative overflow-hidden rounded-sm">
              {/* Background with image overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
               
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f54]/97 via-[#005a9e]/92 to-[#0078c8]/85" />

              <div className="relative z-10 px-10 py-12">
                {/* Header */}
                <h3 className="text-2xl font-bold text-white mb-10 max-w-lg leading-snug">
                  Students don't just <em className="not-italic text-sky-300">imagine</em> the job through theory.<br />
                  <span className="font-light text-blue-100">They live it.</span>
                </h3>

                {/* Step cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { Icon: IconGlobe,       step: "01", label: "Step Into It",       sub: "Full immersion in a real trade environment" },
                    { Icon: IconWrench,      step: "02", label: "Perform It",          sub: "Execute tasks with correct technique" },
                    { Icon: IconSettings,    step: "03", label: "Experiment",          sub: "Try variations without consequences" },
                    { Icon: IconAlertTriangle, step: "04", label: "Correct Mistakes",  sub: "Learn from errors safely and instantly" },
                    { Icon: IconAward,       step: "05", label: "Grow",               sub: "Build real confidence with every session" },
                  ].map(({ Icon, step, label, sub }, i) => (
                    <div
                      key={i}
                      className="group flex flex-col bg-white/8 hover:bg-white/15 border border-white/10 hover:border-sky-400/40 rounded-sm p-5 transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-sky-400/70 tracking-widest">{step}</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-sky-400/20 flex items-center justify-center transition-colors duration-200">
                          <Icon className="w-4 h-4 text-sky-300" />
                        </div>
                      </div>
                      <p className="text-white font-bold text-sm mb-1 leading-tight">{label}</p>
                      <p className="text-blue-200/70 text-xs leading-relaxed">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* ── DESIGNED FOR ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">
            Institutions That Believe Skills Matter
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-lg">
            TradeVR is built for every institution committed to outcome-driven education.
          </p>
          <div className="flex flex-wrap gap-2">
            {institutions.map((inst, i) => (
              <span key={i} className="inline-block bg-blue-50 text-[#005a9e] text-sm font-semibold px-4 py-2 rounded-sm border border-blue-100">
                {inst}
              </span>
            ))}
          </div>
        
      </section>

      {/* ── WHAT CHANGES ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-10">What Changes</h2>
          
          <div className="flex flex-col gap-3">
            {transformations.map((t, i) => (
             
                <div className="flex items-stretch bg-white border border-gray-200 rounded-sm overflow-hidden">
                  <div className="flex-1 px-7 py-5 text-gray-400 font-medium text-base border-r border-gray-200">{t.from}</div>
                  <div className="px-6 flex items-center text-[#005a9e] font-bold text-xl">→</div>
                  <div className="flex-1 px-7 py-5 text-gray-900 font-bold text-base">{t.to}</div>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR EDUCATORS — analytics with SVG icons ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Right — analytics cards with SVG icons */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1 ">
            {analytics.map(({ Icon, label, desc, color }, i) => (
              
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-sm px-5 py-5 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group h-full">
                  <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#005a9e] transition-colors duration-150">{label}</p>
                    {/* <p className="text-xs text-gray-500 leading-relaxed">{desc}</p> */}
                  </div>
                </div>
              
            ))}
          </div>
          {/* Left text */}
          <div className="lg:w-80 flex-shrink-0  order-1 lg:order-2" >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-4 leading-snug">
                Built for Educators,<br />Not Just Learners
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                TradeVR doesn't replace instructors — it strengthens them with powerful tools for assessment and insight.
              </p>
            
          </div>

          
        </div>
      </section>

      {/* ── INTEGRATION STEPS ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-10">
              TradeVR Integrates into Your Campus
            </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              
                <div className="relative bg-white border border-gray-200 rounded-sm p-7 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#005a9e]" />
                  <p className="text-5xl font-bold text-blue-100 leading-none mb-2">{s.num}</p>
                  <p className="text-sm font-bold text-gray-900 leading-snug">{s.title}</p>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPAND ACCESS — infra with SVG icons ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8 mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-2">
            Expand Access Without Expanding <br/>Infrastructure
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-lg">
            Deploy TradeVR labs in any existing space — no renovation required.
          </p>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infra.map(({ Icon, text, desc, color, bg }, i) => (
            
              <div className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group h-full">
                {/* Icon circle */}
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className={`font-bold text-sm mb-1 group-hover:${color} transition-colors duration-150 text-gray-900`}>{text}</h3>
                
              </div>
           
          ))}
        </div>
        
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002f54]/95 via-[#005a9e]/88 to-sky-700/80" />
        <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4">
              Because Education Shouldn't Just Prepare Students for Exams.
            </h2>
            <h3 className="text-lg lg:text-xl font-light text-blue-100 mb-10">
              It Should Prepare Them for Life.
            </h3>
            <button
              
              className="bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-10 py-3 rounded-sm text-base shadow-xl transition-colors duration-150"
            >
              Request a demo
            </button>
          
        </div>
      </section>

      
    </div>
  );
}
