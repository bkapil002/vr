import { Link } from "react-router-dom";

/* ── SVG Icons ── */
const IconMail       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconRocket     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const IconList       = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const IconUsers      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart   = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const IconHelpCircle = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconHeadphones = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;
const IconMonitor    = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;

/* ── Knowledge Base Articles ── */
const kbArticles = [
  { Icon: IconRocket,    label: "Getting Started Guide",        desc: "Initial setup, onboarding steps, and first session walkthrough."   },
  { Icon: IconList,      label: "Deployment Checklist",         desc: "Step-by-step checklist for rolling out TradeVR at your facility."  },
  { Icon: IconUsers,     label: "Instructor Manual",            desc: "Tools, controls, and best practices for session facilitators."     },
  { Icon: IconBarChart,  label: "Performance Analytics Guide",  desc: "Understanding metrics, reports, and learner progress dashboards."  },
  { Icon: IconHelpCircle,label: "Frequently Asked Questions",   desc: "Quick answers to the most common queries from teams and admins."   },
];


export default function SupportCenter() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="w-full bg-[#005a9e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px)" }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
    
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Reliable Support for<br />
              <span className="text-blue-200">Reliable Training</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-6 max-w-xl">
              TradeVR is built for performance, and our support systems are designed the same way.
            </p>
            <p className="text-sm text-blue-200/80 max-w-xl mb-10">
              Whether you're an administrator, instructor, or technical lead, we provide structured assistance to keep your training ecosystem running smoothly.
            </p>

           
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* ── LEFT: EMAIL SUPPORT ── */}
            <div className="flex flex-col gap-5">
              {/* Email Card */}
              <div className="bg-[#005a9e] rounded-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 p-7">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4">
                    <IconMail c="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Email Us</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-5">
                    Have a specific issue or question? Reach our support team directly.
                  </p>
                  <a href="mailto:support@tradevr.com"
                    className="flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 transition-colors duration-150 rounded-sm px-4 py-3 w-full">
                    <IconMail c="w-4 h-4 text-blue-200 flex-shrink-0" />
                    <span className="text-white text-sm font-semibold truncate">support@tradevr.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: KNOWLEDGE BASE (2/3 width) ── */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <div className="h-1 w-full bg-[#005a9e]" />
                <div className="p-8 lg:p-10">
                 
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Knowledge Base</h2>
                  <p className="text-sm text-gray-500 mb-8">Explore quick guides and documentation to get the most out of TradeVR.</p>

                  {/* Article list */}
                  <div className="flex flex-col gap-3 mb-8">
                    {kbArticles.map(({ Icon, label, desc }, i) => (
                      <Link key={i} to="#"
                        className="flex items-start gap-4 border border-gray-200 rounded-sm px-5 py-4 hover:border-[#005a9e] hover:shadow-md transition-all duration-200 group">
                        <div className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-[#005a9e]/10 flex items-center justify-center flex-shrink-0 transition-colors duration-150">
                          <Icon c="w-4 h-4 text-[#005a9e]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 group-hover:text-[#005a9e] transition-colors duration-150 leading-snug">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                        </div>
                        <IconArrowRight c="w-4 h-4 text-gray-300 group-hover:text-[#005a9e] flex-shrink-0 mt-2 transition-colors duration-150" />
                      </Link>
                    ))}
                  </div>

                  {/* Visit full KB CTA */}
                  <div className="border-t border-gray-100 pt-6">
                    <Link to="#"
                      className="inline-flex items-center gap-2 text-[#005a9e] font-semibold text-sm hover:underline group">
                      Visit our knowledge base for general guide
                      <IconArrowRight c="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}