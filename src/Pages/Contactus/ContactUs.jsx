import { useState } from "react";
import { Link } from "react-router-dom";

/* ── SVG Icons ── */
const IconBuilding  = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>;
const IconMail      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconUser      = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconPhone     = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconCheckCircle = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconArrowRight = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconChevronDown = ({ c }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const inquiryTypes = [
  "Implementation inquiry",
  "Partnership opportunity",
  "Deployment planning",
  "General information",
  "Request a demo",
  "Other",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "", organisation: "", email: "", phone: "", type: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: "", org: "", email: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  const handleDemoSubmit = () => {
    if (demoForm.name && demoForm.org && demoForm.email) {
      setDemoSubmitted(true);
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── TOP BLUE HERO ── */}
      <section className="w-full bg-[#005a9e] relative overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px)" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Join Us in Creating<br />
              <span className="text-blue-200">Skills of the Future</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-5 max-w-xl">
              Whether you're exploring implementation, partnership, deployment, or simply learning more about TradeVR, we're here to help.
            </p>
            <p className="text-sm text-blue-200/80 mb-8 max-w-lg">
              Our team works with institutions, enterprises, and government bodies across regions to design scalable, measurable vocational training systems.
            </p>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: FORM + DEMO ── */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* ── LEFT: CONTACT FORM (2/3 width) ── */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <div className="h-1 w-full bg-[#005a9e]" />
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Get in Touch</h2>
                  <p className="text-sm text-gray-500 mb-8">Fill in the details below and our team will reach out within one business day.</p>

                  {!submitted ? (
                    <div className="flex flex-col gap-5">
                      {/* Name + Organisation row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Full Name <span className="text-[#005a9e]">*</span></label>
                          <div className="relative">
                            <IconUser c="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input type="text" placeholder="Your full name" value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm pl-9 pr-4 py-3 text-sm transition-colors duration-150" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Organisation</label>
                          <div className="relative">
                            <IconBuilding c="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input type="text" placeholder="Your organisation" value={form.organisation}
                              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                              className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm pl-9 pr-4 py-3 text-sm transition-colors duration-150" />
                          </div>
                        </div>
                      </div>

                      {/* Email + Phone row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Work Email <span className="text-[#005a9e]">*</span></label>
                          <div className="relative">
                            <IconMail c="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input type="email" placeholder="your@email.com" value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm pl-9 pr-4 py-3 text-sm transition-colors duration-150" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Phone</label>
                          <div className="relative">
                            <IconPhone c="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input type="tel" placeholder="+1 000 000 0000" value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm pl-9 pr-4 py-3 text-sm transition-colors duration-150" />
                          </div>
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Inquiry Type</label>
                        <div className="relative">
                          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm px-4 py-3 text-sm appearance-none bg-white transition-colors duration-150 text-gray-700">
                            <option value="">Select inquiry type</option>
                            {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <IconChevronDown c="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 tracking-wide uppercase">Message <span className="text-[#005a9e]">*</span></label>
                        <textarea placeholder="Tell us how we can help — implementation scope, region, timeline, or any questions." value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={4}
                          className="w-full border border-gray-300 focus:border-[#005a9e] outline-none rounded-sm px-4 py-3 text-sm resize-none transition-colors duration-150" />
                      </div>

                      <button onClick={handleSubmit}
                        className="self-start flex items-center gap-2 bg-[#005a9e] hover:bg-[#004a87] text-white font-semibold px-8 py-3 rounded-sm text-sm transition-colors duration-150 shadow-sm">
                        Send Message
                        <IconArrowRight c="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconCheckCircle c="w-8 h-8 text-[#005a9e]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto">Thank you for reaching out. Our team will get back to you within one business day.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── RIGHT: REQUEST A DEMO card (1/3 width) ── */}
            <div className="flex flex-col gap-5">
              {/* Demo Card */}
              <div className="bg-[#005a9e] rounded-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 p-7">
                  
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">Request a Demo</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Want to see how immersive vocational training works in action?
                  </p>

                  {!demoSubmitted ? (
                    <div className="flex flex-col gap-3">
                      {[
                        { key: "name",  placeholder: "Full name",    type: "text"  },
                        { key: "org",   placeholder: "Organisation",  type: "text"  },
                        { key: "email", placeholder: "Work email",    type: "email" },
                      ].map(({ key, placeholder, type }) => (
                        <input key={key} type={type} placeholder={placeholder} value={demoForm[key]}
                          onChange={(e) => setDemoForm({ ...demoForm, [key]: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 focus:border-white/60 outline-none rounded-sm px-4 py-2.5 text-sm text-white placeholder-blue-200/60 transition-colors duration-150" />
                      ))}
                      <button onClick={handleDemoSubmit}
                        className="flex items-center justify-center gap-2 bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-6 py-3 rounded-sm text-sm transition-colors duration-150 mt-1">
                        Request a Demo
                        <IconArrowRight c="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconCheckCircle c="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-bold text-sm mb-1">Demo Requested!</p>
                      <p className="text-blue-200 text-xs">We'll be in touch very soon.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}