import { Link } from "react-router-dom";
import React, { useState } from 'react'

/* ── SVG Icons ── */
const IconGlobe = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const IconZap = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const IconShield = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const IconTarget = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const IconUsers = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
const IconBarChart = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>;
const IconHeart = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const IconRefresh = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>;
const IconLayout = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
const IconBuilding = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01" /></svg>;
const IconMapPin = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const IconAward = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>;

/* ── Data ── */
const stakeholders = [
  { Icon: IconZap, label: "For industries", desc: "Safer workforce preparation." },
  { Icon: IconBuilding, label: "For institutions", desc: "Scalable infrastructure." },
  { Icon: IconBarChart, label: "For governments", desc: "Standardized training models." },
  { Icon: IconUsers, label: "For learners", desc: "Access to real opportunity." },
];

const commitments = [
  {
    num: "1",
    Icon: IconGlobe,
    title: "Expand Access to Opportunity",
    body: "We design VR-based training environments that reduce dependency on heavy infrastructure, making high-quality skill development possible in schools and colleges, correctional facilities, workforce centers, remote regions, and emerging economies.",
    callout: "Access to skill should not depend on geography or capital investment. It should depend on ambition — and we help institutions unlock it.",
  },
  {
    num: "2",
    Icon: IconTarget,
    title: "Build Trust Through Measurable Training",
    body: "Skill development must be credible. That means structured modules, standardized assessments, performance tracking, and clear learning progression.",
    callout: "Our simulations are not abstract experiences — they are performance-based systems aligned with industry benchmarks.",
  },
  {
    num: "3",
    Icon: IconHeart,
    title: "Enable Dignified Employability",
    body: "Vocational training is not just about job placement. It is about restoring confidence, rebuilding direction, and enabling independence. Whether we work with students, mid-career professionals, or rehabilitation programs, our goal is consistent:",
    callout: "To transform learners into capable, work-ready contributors.",
  },
  {
    num: "4",
    Icon: IconRefresh,
    title: "Support Sustainable Workforce Ecosystems",
    body: "Industrial growth depends on consistent, scalable workforce pipelines. By reducing dependency on physical consumables and enabling repeatable simulations, we help institutions scale responsibly while maintaining training quality.",
    bullets: ["Faster onboarding", "Lower training risk", "Reduced material waste", "Improved safety compliance", "Standardized cross-location training"],
  },
];

const cultureCards = [
  { Icon: IconShield, title: "Integrity", desc: "We align with industry standards and measurable outcomes." },
  { Icon: IconTarget, title: "Accountability", desc: "We build systems that deliver verifiable performance results." },
  { Icon: IconUsers, title: "Collaboration", desc: "We partner with educators, industry leaders, and governments to create long-term impact." },
];

const visionItems = [
  "Vocational training is as advanced as academic education.",
  "Skill development is data-driven and globally portable.",
  "Reskilling is efficient and confidence-building.",
  "Every learner has access to safe, measurable practical training.",
];

const techPurpose = [
  { Icon: IconLayout, text: "A digital layer that strengthens existing education systems." },
  { Icon: IconUsers, text: "A support system for instructors and trainers." },
  { Icon: IconTrendingUp, text: "A multiplier for institutions looking to expand their reach." },
];

export default function OurMission() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px]  flex items-center overflow-hidden">
        {/* ── Background Video Layer ── */}
        <div className="absolute inset-0 overflow-hidden">

          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse z-10" />
          )}

          <iframe
            className="
      absolute top-1/2 left-1/2
      w-[100vw] h-[100vh]
      -translate-x-1/2 -translate-y-1/2
      scale-[2.4] sm:scale-[1.6] lg:scale-[1.2]
      pointer-events-none
    "
            src="https://www.youtube.com/embed/MrbT5pZCw1c?autoplay=1&mute=1&loop=1&playlist=MrbT5pZCw1c&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1"
            title="VR Welding Training Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            loading="eager"
            onLoad={() => setVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />

        </div>
        <div className="relative hidden lg:block z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 drop-shadow-md">
              Giving People the Ability<br />
              <span className="text-blue-200">to Grow with Expertise</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed max-w-xl mb-6">
              TradeVR exists to expand access to high-quality vocational training — safely, scalably, and globally.
            </p>
            <p className="text-sm text-blue-100 leading-relaxed max-w-lg mb-6">
              We believe skill development is one of the most powerful drivers of economic mobility, industrial growth, and social transformation.
            </p>
            <p className="text-sm text-blue-100 leading-relaxed max-w-lg mb-10">
              Yet millions of learners lack access to modern labs, safe training environments, and measurable pathways to employment. Technology gives us the opportunity to change that. And with that opportunity comes responsibility.
            </p>
            <Link to="#"
              className="inline-flex items-center gap-2 bg-[#005a9e] hover:bg-[#004a87] text-white font-bold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-lg">
              Explore the Learning Path
              <IconArrowRight c="w-4 h-4" />
            </Link>
          </div>
        </div>


      </section>
      {/* Mobile/Tablet Card */}
      <div className="block lg:hidden relative -mt-40 sm:-mt-30 z-10 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg  p-6 sm:p-10">
            <h1 className="text-[1.40rem] sm:text-[2rem] font-semibold leading-tight mb-4 text-gray-900">
              <b>  Giving People the Ability to Grow with Expertise</b>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              TradeVR exists to expand access to high-quality vocational training — safely, scalably, and globally.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We believe skill development is one of the most powerful drivers of economic mobility, industrial growth, and social transformation.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Yet millions of learners lack access to modern labs, safe training environments, and measurable pathways to employment. Technology gives us the opportunity to change that. And with that opportunity comes responsibility.
            </p>
            <Link to="#"
              className="inline-flex items-center gap-2 bg-[#005a9e] hover:bg-[#004a87] text-white font-bold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-lg">
              Explore the Learning Path
              <IconArrowRight c="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── OUR OPPORTUNITY AND OUR RESPONSIBILITY ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Our Opportunity, And Our Responsibility</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              We are living in a time when immersive technology can redefine how practical skills are taught, assessed, and deployed.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              But innovation alone is not enough. If immersive training is going to shape the future workforce, it must be:
            </p>
            <div className="flex flex-col gap-2">
              {["Accessible.", "Responsible.", "Aligned with real industry needs.", "Built to serve long-term economic progress, not short-term novelty."].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#005a9e] flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-[#005a9e] mt-6">TradeVR stands at that intersection.</p>
          </div>

          {/* Stakeholder grid */}
          <div className="grid grid-cols-2 gap-4">
            {stakeholders.map(({ Icon, label, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <Icon c="w-5 h-5 text-[#005a9e]" />
                </div>
                <p className="text-xs font-bold text-[#005a9e] mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandate callout */}
        <div className="bg-[#005a9e] rounded-sm px-8 py-7 max-w-2xl">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">We believe organizations that can scale skill — should</p>
          <p className="text-white text-base leading-relaxed mb-1">
            Workforce gaps are widening. Industries are evolving faster than traditional education models can adapt. Reskilling demands are rising globally.
          </p>
          <p className="text-blue-100 text-sm font-semibold mt-3">
            Not just to innovate — but to enable inclusion. That belief guides everything we build.
          </p>
        </div>
      </section>

      {/* ── CORE COMMITMENTS ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Our Core Commitments</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">
            To ensure our mission translates into measurable impact, we operate around four enduring commitments.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {commitments.map(({ num, Icon, title, body, callout, bullets }, i) => (
              <div key={i} className="bg-white border border-blue-200 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group flex flex-col">
                <div className="h-1 w-full bg-[#005a9e]" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon c="w-5 h-5 text-[#005a9e]" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e] border border-blue-200 px-2 py-0.5 rounded-sm">
                        Commitment {num}
                      </span>
                    </div>
                    <span className="text-4xl font-bold text-gray-100 leading-none select-none">{num}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{title}</h3>
                  <div className="h-px w-12 bg-[#005a9e] mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{body}</p>

                  {bullets && (
                    <ul className="flex flex-col gap-2 mb-4">
                      {bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#005a9e]" />
                          </div>
                          <span className="text-sm text-gray-600">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {callout && (
                    <div className="mt-auto pt-4 border-t border-blue-100">
                      <p className="text-xs font-semibold text-[#005a9e] leading-relaxed">{callout}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY WITH PURPOSE ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Technology with Purpose</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              We see immersive technology not as entertainment, but as <strong className="text-gray-900">infrastructure.</strong>
            </p>
            <div className="flex flex-col gap-4 mb-8">
              {techPurpose.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon c="w-5 h-5 text-[#005a9e]" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-[#005a9e] bg-blue-50 px-6 py-5 rounded-r-sm">
              <p className="text-sm text-gray-700 leading-relaxed">
                Our platform <strong className="text-[#005a9e]">does not replace educators</strong> — it empowers them.{" "}
                It does not replace workshops — it <strong className="text-[#005a9e]">strengthens preparedness</strong> before learners enter them.
              </p>
            </div>
          </div>

          {/* Right — Vision */}
          <div className="bg-[#005a9e] rounded-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 p-8">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-3 block">Our Vision for the Future</span>
              <h3 className="text-xl font-bold text-white mb-6 leading-snug">We envision a world where:</h3>
              <div className="flex flex-col gap-4">
                {visionItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE OPERATE / CULTURE ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">How We Operate Since Day 1</h2>
          <p className="text-gray-500 text-base max-w-lg mb-12">Our culture is grounded in three principles:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {cultureCards.map(({ Icon, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-sm p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                  <Icon c="w-6 h-6 text-[#005a9e]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#005a9e] transition-colors duration-150">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
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
            Partner with TradeVR
          </h2>
          <p className="text-lg text-blue-100 font-light mb-10 max-w-xl mx-auto">
            Create scalable, measurable, and future-ready vocational pathways.
          </p>
          <Link to="#"
            className="inline-flex items-center gap-2 bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-10 py-3 rounded-sm text-base shadow-xl transition-colors duration-150">
            Explore the Learning Path
            <IconArrowRight c="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}