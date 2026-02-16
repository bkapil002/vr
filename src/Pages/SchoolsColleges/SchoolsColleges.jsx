import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const problems = [
  { icon: "💸", text: "Equipment is expensive" },
  { icon: "♻️", text: "Consumables add recurring costs" },
  { icon: "👥", text: "Instructor-to-student ratios limit practice time" },
  { icon: "⚠️", text: "Safety concerns restrict experimentation" },
];

const benefits = [
  { icon: "🛡️", title: "Safe Practice", desc: "Repeatable hands-on training without real-world risk" },
  { icon: "📉", title: "Lower Costs", desc: "Reduce equipment damage and material waste significantly" },
  { icon: "🚀", title: "Build Confidence", desc: "Students master skills before real-world exposure" },
  { icon: "🌐", title: "Scalable Access", desc: "Expand technical education without heavy infrastructure" },
];

const institutions = [
  "ITIs and Polytechnics", "Engineering Colleges", "Vocational Training Institutes",
  "Government Skill Missions", "CSR-Funded Skill Labs", "Private Trade Academies",
];

const analytics = [
  { icon: "📊", label: "Real-time Performance Analytics" },
  { icon: "🎯", label: "Objective Skill Assessment Metrics" },
  { icon: "📈", label: "Individual Progress Tracking" },
  { icon: "✅", label: "Standardized Evaluation Across Batches" },
  { icon: "🔄", label: "Replay and Review Functionality" },
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

const infra = [
  { icon: "🔧", text: "No heavy tools required" },
  { icon: "📐", text: "Minimal floor space" },
  { icon: "♻️", text: "Reduced consumable waste" },
  { icon: "🔩", text: "Lower equipment maintenance" },
];


const SchoolsColleges = () => {
      const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", institution: "", email: "" });

  const handleSubmit = () => {
    if (form.name && form.institution && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setDemoOpen(false);
        setSubmitted(false);
        setForm({ name: "", institution: "", email: "" });
      }, 2500);
    }
  };

  return (
    <div className=" bg-white text-gray-900 overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-300 rounded-full opacity-10 translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#005a9e] mb-4">
              Schools &amp; Colleges
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
              Beyond the Classroom.<br />
              <span className="text-[#005a9e]">Into the Future.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-8">
              Bridging the gap between theory and trade through immersive discovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setDemoOpen(true)}
                className="bg-[#005a9e] hover:bg-[#005a9e] text-white font-semibold px-7 py-3 rounded-sm text-sm transition-colors duration-150 shadow-sm"
              >
                Request a demo
              </button>
              <button className="border border-[#005a9e] text-[#005a9e] hover:bg-blue-50 font-semibold px-7 py-3 rounded-sm text-sm transition-colors duration-150">
                Learn more ↓
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-56 rounded bg-gradient-to-br from-[#005a9e] via-[#005a9e] to-blue-900 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white opacity-5" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-white opacity-5" />
              <div className="relative z-10 text-center text-white px-6">
                <div className="text-5xl mb-3">🥽</div>
                <p className="text-lg font-bold tracking-tight">Immersive VR Training</p>
                <p className="text-xs text-blue-200 mt-1 tracking-widest uppercase">Safe · Scalable · Inspiring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <FadeIn>
          <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">The Problem</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-5">Why This Matters</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
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
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="border border-gray-200 rounded-sm p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div className="text-3xl mb-3">{p.icon}</div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12 border-l-4 border-[#005a9e] bg-blue-50 px-7 py-6 rounded-r-sm">
            <p className="text-[#005a9e] font-semibold text-sm mb-1">The question becomes:</p>
            <p className="text-xl font-bold text-gray-900 leading-snug">
              How do we make skill-building <em>safe, scalable, and inspiring?</em>
            </p>
            <p className="text-gray-500 mt-2 text-base">
              And more importantly — how do we bring relevance back into the classroom?
            </p>
          </div>
        </FadeIn>
      </section>

      {/* THE TRADEVR ANSWER */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">The Solution</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">The TradeVR Answer</h2>
            <p className="text-gray-500 text-base max-w-xl mb-12">
              With immersive VR skill training, schools and colleges can reimagine hands-on learning.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-sm p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 bg-[#005a9e] rounded-sm px-8 py-7">
              <p className="text-blue-100 text-sm mb-3">Students don't just imagine the jobs through theory.</p>
              <div className="flex flex-wrap gap-5">
                {["They step into it.", "They perform it.", "They experiment.", "They correct mistakes.", "They grow."].map(
                  (t, i) => (
                    <span key={i} className={`text-white font-semibold text-sm ${i === 0 ? "opacity-100" : "opacity-80"}`}>
                      → {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DESIGNED FOR */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <FadeIn>
          <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">Designed For</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-3">
            Institutions That Believe Skills Matter
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-lg">
            TradeVR is built for every institution committed to outcome-driven education.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {institutions.map((inst, i) => (
              <span key={i} className="inline-block bg-blue-50 text-[#005a9e] text-sm font-semibold px-4 py-2 rounded-sm">
                {inst}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* WHAT CHANGES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">Transformation</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-10">What Changes</h2>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {transformations.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-stretch bg-white border border-gray-200 rounded-sm overflow-hidden">
                  <div className="flex-1 px-7 py-5 text-gray-400 font-medium text-base border-r border-gray-200">
                    {t.from}
                  </div>
                  <div className="px-6 flex items-center text-[#005a9e] font-bold text-xl">→</div>
                  <div className="flex-1 px-7 py-5 text-gray-900 font-bold text-base">{t.to}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR EDUCATORS */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <FadeIn>
              <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">For Educators</span>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-4 leading-snug">
                Built for Educators,<br />Not Just Learners
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                TradeVR doesn't replace instructors — it strengthens them with powerful tools for assessment and insight.
              </p>
            </FadeIn>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {analytics.map((a, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-sm px-5 py-4 hover:border-blue-500 transition-colors duration-150 group cursor-default">
                  <span className="text-xl">{a.icon}</span>
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-[#005a9e] transition-colors duration-150">
                    {a.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION STEPS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">Integration</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-10">
              TradeVR Integrates into Your Campus
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative bg-white border border-gray-200 rounded-sm p-7 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#005a9e]" />
                  <p className="text-5xl font-bold text-blue-100 leading-none mb-2">{s.num}</p>
                  <p className="text-sm font-bold text-gray-900 leading-snug">{s.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPAND ACCESS */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <FadeIn>
          <span className="text-xs font-bold tracking-widest uppercase text-[#005a9e]">Infrastructure</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-4">
            Expand Access Without<br />Expanding Infrastructure
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {infra.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="flex items-center gap-3 bg-blue-50 rounded-sm px-5 py-5">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-800">{item.text}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <p className="mt-7 text-lg font-bold text-[#005a9e]">More access. Less overhead.</p>
        </FadeIn>
      </section>

      {/* CTA CLOSING */}
      <section className="bg-gradient-to-br from-blue-800 via-[#005a9e] to-sky-500 py-24 px-6 text-center">
        <FadeIn>
          <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-4">Closing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4">
            Because Education Shouldn't Just Prepare Students for Exams.
          </h2>
          <h3 className="text-xl lg:text-3xl font-light text-blue-100 mb-10">
            It Should Prepare Them for Life.
          </h3>
          <button
            onClick={() => setDemoOpen(true)}
            className="bg-white text-[#005a9e] hover:bg-blue-50 font-bold px-10 py-4 rounded-sm text-base shadow-xl transition-colors duration-150"
          >
            Request a demo
          </button>
        </FadeIn>
      </section>

      {/* DEMO MODAL */}
      {demoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setDemoOpen(false); }}
        >
          <div className="bg-white rounded-sm shadow-2xl p-10 w-full max-w-md mx-4">
            {!submitted ? (
              <>
                <div className="flex justify-between items-start mb-7">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Request a Demo</h3>
                    <p className="text-sm text-gray-400 mt-1">We'll reach out within one business day.</p>
                  </div>
                  <button
                    onClick={() => setDemoOpen(false)}
                    className="text-gray-400 hover:text-gray-700 text-2xl leading-none font-light"
                  >
                    ×
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 focus:border-blue-500 outline-none rounded-sm px-4 py-3 text-sm transition-colors duration-150"
                  />
                  <input
                    type="text"
                    placeholder="Institution name"
                    value={form.institution}
                    onChange={(e) => setForm({ ...form, institution: e.target.value })}
                    className="w-full border border-gray-300 focus:border-blue-500 outline-none rounded-sm px-4 py-3 text-sm transition-colors duration-150"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 focus:border-blue-500 outline-none rounded-sm px-4 py-3 text-sm transition-colors duration-150"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#005a9e] hover:bg-[#005a9e] text-white font-semibold py-3 rounded-sm text-sm transition-colors duration-150 mt-1"
                  >
                    Submit Request
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-500 text-sm">Our team will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SchoolsColleges
