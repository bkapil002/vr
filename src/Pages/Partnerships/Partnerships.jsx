import { useState, useEffect, useRef } from "react";


/* ── SVG Icons ── */
const IconHandshake   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>;
const IconBuilding    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconZap         = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconUsers       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconGlobe       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconTarget      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconTrendingUp  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconBarChart    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconCheckCircle = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconArrowRight  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconClipboard   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const IconRefresh     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const IconLayout      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;

/* ── Data ── */
const partnershipPathways = [
  {
    Icon: IconBuilding,
    title: "Education & Academic Partnerships",
    audience: "For schools, colleges, and vocational institutions seeking to modernize practical training.",
    label: "Education",
    intro: "We help you:",
    points: [
      "Introduce immersive trade simulations safely",
      "Standardize learning outcomes across campuses",
      "Increase student engagement in technical pathways",
      "Expand capacity without proportional infrastructure growth",
      "Track performance through structured analytics",
    ],
  },
  {
    Icon: IconZap,
    title: "Industry & Enterprise Partnerships",
    audience: "For companies seeking workforce readiness, safety training, and scalable onboarding.",
    label: "Enterprise",
    intro: "We support:",
    points: [
      "Pre-employment skill validation",
      "Structured onboarding modules",
      "Safety-first practice environments",
      "Cross-location training standardization",
      "Reduced material and downtime costs",
    ],
  },
  {
    Icon: IconUsers,
    title: "Workforce Development Partnerships",
    audience: "For agencies building regional or national skill initiatives.",
    label: "Workforce",
    intro: "TradeVR supports:",
    points: [
      "Standardized vocational frameworks",
      "Scalable deployment across institutions",
      "Data-driven skill tracking",
      "Rehabilitation-based employability programs",
      "Reskilling initiatives for evolving sectors",
    ],
  },
  {
    Icon: IconGlobe,
    title: "Global Deployment & Strategic Alliances",
    audience: "For international organizations, NGOs, and global workforce programs.",
    label: "Global",
    intro: "We enable:",
    points: [
      "Portable training models across regions",
      "Infrastructure-light deployment",
      "Multisite standardization",
      "Performance reporting across geographies",
      "Adaptable curriculum frameworks",
    ],
  },
];

const strongPartnership = [
  { Icon: IconTarget,    title: "Alignment of Purpose",      desc: "A shared commitment to workforce readiness and measurable skill outcomes."                              },
  { Icon: IconTrendingUp,title: "Long-Term Vision",          desc: "Sustainable ecosystem development, not one-time deployment."                                            },
  { Icon: IconBarChart,  title: "Measurable Impact",         desc: "Clear success metrics tied to employability, safety, and scalability."                                  },
  { Icon: IconUsers,     title: "Operational Collaboration", desc: "Open communication between educators, trainers, and implementation teams."                               },
];

const howWeWork = [
  {
    step: "01",
    Icon: IconClipboard,
    title: "Needs Assessment & Skill Mapping",
    desc: "We analyze your workforce or learner requirements and align simulation pathways accordingly.",
  },
  {
    step: "02",
    Icon: IconLayout,
    title: "Structured Deployment Planning",
    desc: "We design a rollout strategy suited to your infrastructure, scale, and objectives.",
  },
  {
    step: "03",
    Icon: IconUsers,
    title: "Instructor & Stakeholder Enablement",
    desc: "We train trainers and administrators to maximize platform effectiveness.",
  },
  {
    step: "04",
    Icon: IconBarChart,
    title: "Performance Monitoring & Optimization",
    desc: "We provide ongoing analytics and feedback loops to improve outcomes.",
  },
];

const ecosystemPillars = [
  { label: "Educators"           },
  { label: "Industry Leaders"    },
  { label: "Governments"         },
  { label: "Tech Providers"      },
  { label: "Workforce Orgs"      },
];

/* ── Component ── */
export default function Partnerships() {
  const [partnerForm, setPartnerForm] = useState({ name: "", org: "", email: "", type: "" });
  const [submitted, setSubmitted]     = useState(false);

  const handleSubmit = () => {
    if (partnerForm.name && partnerForm.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/88 to-[#005a9e]/65" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4 drop-shadow-md">
              Partner With TradeVR
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 font-light mb-6 leading-snug">
              Building Skill Ecosystems — Together.
            </p>
            <p className="text-sm text-blue-100/80 leading-relaxed max-w-xl mb-8">
              The future of workforce development cannot be built in isolation. It requires collaboration between educators, industry leaders, governments, technology providers, and workforce organizations.
            </p>
            <p className="text-sm text-blue-200 font-medium italic mb-10 max-w-lg border-l-2 border-blue-400 pl-4">
              At TradeVR, we don't just deploy technology. We build long-term partnerships that strengthen vocational ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNERSHIPS MATTER ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Workforce gaps are growing.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {[
            { Icon: IconRefresh, text: "Industries are evolving faster than traditional training systems can adapt." },
            { Icon: IconBuilding, text: "Institutions are under pressure to scale without expanding infrastructure." },
            { Icon: IconZap,     text: "Enterprises need job-ready talent, not theoretical exposure." },
          ].map(({ Icon, text }, i) => (
              <div className="flex items-start gap-4 border border-blue-200 rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon c="w-5 h-5 text-[#005a9e]" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug pt-2">{text}</p>
              </div>
          ))}
        </div>
          <div className="border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm max-w-3xl">
            <p className="text-base text-gray-700 leading-relaxed">
              TradeVR partners with institutions that believe{" "}
              <strong className="text-[#005a9e]">scalable, immersive, and measurable training</strong>{" "}
              is the next evolution of vocational development.
            </p>
          </div>
      </section>

      {/* ── PARTNERSHIP PATHWAYS ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Partnership Pathways</h2>
            <p className="text-gray-500 text-base max-w-xl mb-12">
              We work across multiple partnership models depending on your goals and impact scope.
            </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {partnershipPathways.map(({ Icon, title, audience, label, intro, points }, i) => (
                <div className="bg-white border border-blue-200 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group h-full flex flex-col">
                  <div className="h-1 w-full bg-[#005a9e]" />
                  <div className="p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Icon c="w-5 h-5 text-[#005a9e]" />
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e] border border-blue-200 px-2 py-0.5 rounded-sm">{label}</span>
                      </div>
                      <span className="text-4xl font-bold text-gray-100 leading-none select-none">0{i + 1}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{title}</h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed italic">{audience}</p>
                    <div className="h-px w-12 bg-[#005a9e] mb-4 group-hover:w-full transition-all duration-500" />

                    <p className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">{intro}</p>
                    <ul className="flex flex-col gap-2 flex-1">
                      {points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#005a9e]" />
                          </div>
                          <span className="text-sm text-gray-600 leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES A STRONG PARTNERSHIP ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">What Makes a Strong TradeVR Partnership?</h2>
          <p className="text-gray-500 text-base max-w-xl mb-12">We believe successful partnerships are built on:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strongPartnership.map(({ Icon, title, desc }, i) => (
              <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                  <Icon c="w-6 h-6 text-[#005a9e]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#005a9e] transition-colors duration-150">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK WITH PARTNERS ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/80" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">How We Work With Partners</h2>
            <p className="text-blue-200 text-base mb-12 max-w-lg">Our partnership model typically includes:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeWork.map(({ step, Icon, title, desc }, i) => (
                <div className="bg-white/8 border border-white/15 rounded-sm p-6 hover:bg-white/14 hover:border-blue-300/40 transition-all duration-200 group h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl font-bold text-white/20 leading-none select-none">{step}</span>
                    <div className="w-10 h-10 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors duration-150">
                      <Icon c="w-5 h-5 text-blue-200" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-3 leading-snug">{title}</h3>
                  <div className="h-px w-8 bg-blue-400 mb-3 group-hover:w-full transition-all duration-500" />
                  <p className="text-xs text-blue-200/80 leading-relaxed flex-1">{desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / BECOME A PARTNER ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — CTA text */}
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5 leading-snug">
              Let's Build What's Next
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-md">
              Explore partnership opportunities and design a scalable skill ecosystem with TradeVR.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Needs Assessment & Skill Mapping",
                "Structured Deployment Planning",
                "Instructor & Stakeholder Enablement",
                "Performance Monitoring & Optimization",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <IconCheckCircle c="w-3 h-3 text-[#005a9e]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

          {/* Right — Partner form */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <div className="h-1 w-full bg-[#005a9e]" />
              <div className="p-8">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                        <IconHandshake c="w-4 h-4 text-[#005a9e]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">Become a Partner</h3>
                        <p className="text-xs text-gray-400">We'll reach out within one business day.</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {[
                        { key: "name",  placeholder: "Full name",          type: "text"  },
                        { key: "org",   placeholder: "Organisation / Body", type: "text"  },
                        { key: "email", placeholder: "Work email",          type: "email" },
                      ].map(({ key, placeholder, type }) => (
                        <input key={key} type={type} placeholder={placeholder} value={partnerForm[key]}
                          onChange={(e) => setPartnerForm({ ...partnerForm, [key]: e.target.value })}
                          className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm px-4 py-3 text-sm transition-colors duration-150" />
                      ))}

                      <select value={partnerForm.type}
                        onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value })}
                        className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm px-4 py-3 text-sm bg-white text-gray-700 appearance-none transition-colors duration-150">
                        <option value="">Partnership type</option>
                        {["Education & Academic", "Industry & Enterprise", "Workforce Development", "Global & Strategic"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>

                      <button onClick={handleSubmit}
                        className="flex items-center justify-center gap-2 w-full bg-[#005a9e] hover:bg-[#004a87] text-white font-bold py-3 rounded-sm text-sm transition-colors duration-150 shadow-sm">
                        Become a Partner
                        <IconArrowRight c="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconCheckCircle c="w-8 h-8 text-[#005a9e]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                    <p className="text-gray-500 text-sm">Our partnerships team will contact you shortly.</p>
                  </div>
                )}
              </div>
            </div>

        </div>
      </section>

    </div>
  );
}