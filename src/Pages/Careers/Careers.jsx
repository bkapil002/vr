import { Link } from "react-router-dom";

/* ── SVG Icons ── */
const IconTarget     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconZap        = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconTrendingUp = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconShield     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconHeart      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconCheckCircle= ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconLayout     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconAward      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IconCode       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;

/* ── Data ── */
const impacts = [
  { text: "A student gaining confidence."              },
  { text: "A worker upgrading their expertise."        },
  { text: "An institution scaling safely."             },
  { text: "A community gaining economic mobility."     },
];

const whyJoin = [
  {
    Icon: IconHeart,
    title: "Meaningful Impact",
    desc: "The work you do here doesn't sit in abstraction. It shows up in classrooms, training centers, rehabilitation programs, and industrial environments across regions.",
    bullets: null,
  },
  {
    Icon: IconZap,
    title: "Innovation with Accountability",
    desc: "We operate at the intersection of immersive technology and vocational education. Experimentation is encouraged, but outcomes matter. We acknowledge and value:",
    bullets: ["Critical thinking", "Problem-solving", "Industry alignment", "Measurable results"],
  },
  {
    Icon: IconUsers,
    title: "Collaborative by Design",
    desc: "TradeVR brings together diverse disciplines to build a unified platform:",
    bullets: ["Engineers", "VR designers", "Education specialists", "Industry experts", "Deployment strategists", "Data and performance analysts"],
  },
  {
    Icon: IconTrendingUp,
    title: "Growth That Mirrors Our Mission",
    desc: "We build platforms that help others grow — and we apply that same philosophy internally. At TradeVR, you'll have:",
    bullets: ["Access to emerging technologies", "Exposure to real industry challenges", "Opportunities to work across sectors", "Room to expand beyond defined roles"],
  },
];

const hiringSteps = [
  { step: "01", text: "Clear role expectations"              },
  { step: "02", text: "Collaborative conversations"         },
  { step: "03", text: "Skills-based evaluation"             },
  { step: "04", text: "Open communication at every stage"   },
];

const employerCommitments = [
  { Icon: IconUsers,  text: "An inclusive workplace"       },
  { Icon: IconHeart,  text: "A respectful environment"     },
  { Icon: IconShield, text: "A culture of integrity"       },
  { Icon: IconTarget, text: "A system of accountability"   },
];

/* ── Component ── */
export default function Careers() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/88 to-[#005a9e]/60" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5 drop-shadow-md">
              Build the Future<br />
              <span className="text-blue-200">of Skill</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-4 max-w-xl">
              At TradeVR, you're not just joining a company. You're contributing to a global shift in how skills are built, measured, and deployed.
            </p>
            <p className="text-sm text-blue-200/80 leading-relaxed max-w-lg mb-10">
              We are redefining vocational training through immersive technology — and that takes thinkers, builders, educators, technologists, and problem-solvers who believe skill development can change lives.
            </p>
            <Link to="#"
              className="inline-flex items-center gap-2 bg-[#005a9e] hover:bg-[#004a87] text-white font-bold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-lg">
              Explore Opportunities
              <IconArrowRight c="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WORK WITH PURPOSE ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Work With Purpose. Build With Impact.</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Every product we design has a real-world outcome:
            </p>
            <div className="flex flex-col gap-4">
              {impacts.map(({ text }, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircleMini />
                  </div>
                  <p className="text-sm lg:text-base font-semibold text-gray-800 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dark accent card */}
          <div className="bg-[#001f3f] rounded-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 p-10">
              <div className="w-8 h-1 bg-blue-400 mb-6" />
              <p className="text-2xl font-bold text-white leading-snug mb-5">
                "Skill development can change lives."
              </p>
              <p className="text-blue-200/80 text-sm leading-relaxed">
                That belief isn't a tagline — it's the standard we hold every product, every deployment, and every team member to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN TRADEVR ── */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-12">Why Join TradeVR?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {whyJoin.map(({ Icon, title, desc, bullets }, i) => (
              <div key={i} className="bg-white border border-blue-200 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group flex flex-col">
                <div className="h-1 w-full bg-[#005a9e]" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon c="w-5 h-5 text-[#005a9e]" />
                      </div>
                    </div>
                    <span className="text-4xl font-bold text-gray-100 leading-none select-none">0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{title}</h3>
                  <div className="h-px w-12 bg-[#005a9e] mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                  {bullets && (
                    <ul className="flex flex-col gap-1.5 mt-auto">
                      {bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#005a9e] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING JOURNEY ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/97 via-[#003366]/93 to-[#005a9e]/80" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">Hiring Journey</h2>
          <p className="text-blue-200 text-base mb-3 max-w-xl">
            We design our hiring process the same way we design our platform:
          </p>
          <p className="text-white font-bold text-base mb-10">
            Structured. Transparent. Respectful.
          </p>
          <p className="text-blue-200 text-sm mb-8">You can expect:</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {hiringSteps.map(({ step, text }, i) => (
              <div key={i} className="bg-white/8 border border-white/15 rounded-sm px-5 py-5 hover:bg-white/14 hover:border-blue-300/40 transition-all duration-200 group">
                <span className="text-3xl font-bold text-white/20 leading-none select-none block mb-3">{step}</span>
                <p className="text-white text-sm font-semibold leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYER COMMITMENT ── */}
      <section className="py-10 max-w-[1400px] mx-auto px-6 xl:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">Our Commitment as an Employer</h2>
        <p className="text-gray-500 text-base mb-12 max-w-xl">We are committed to building:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {employerCommitments.map(({ Icon, text }, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-sm p-7 hover:border-[#005a9e] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Icon c="w-6 h-6 text-[#005a9e]" />
              </div>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#005a9e] transition-colors duration-150 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA CLOSING ── */}
      <section className="relative py-15 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/96 via-[#003366]/90 to-[#005a9e]/82" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-5">
            Step Into the Future of Skill
          </h2>
          <div className="flex flex-col gap-2 mb-8">
            {[
              "If you believe skill creates opportunity,",
              "If you believe technology should enable inclusion,",
              "If you want your work to strengthen real industries and real communities —",
            ].map((line, i) => (
              <p key={i} className="text-blue-200 text-base font-light">{line}</p>
            ))}
            <p className="text-white text-base font-bold mt-2">Then TradeVR may be the place for you.</p>
          </div>
          <p className="text-blue-100/80 text-sm mb-10">
            Explore open roles and help shape the next generation of workforce training.
          </p>
          <Link to="#"
            className="inline-flex items-center gap-2 bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-10 py-3 rounded-sm text-base shadow-xl transition-colors duration-150">
            Explore Opportunities
            <IconArrowRight c="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

/* ── Mini check icon (inline, no import needed) ── */
const CheckCircleMini = () => (
  <svg className="w-4 h-4 text-[#005a9e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);