import React from "react";

const programs = [
  {
    title: "Welding Training",
    desc: "Master MIG welding, joints, angles, safety, and AWS-aligned fundamentals with hyper-realistic simulations and real-time scoring.",
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Pro-AI-11Ed-Platinum-x86-001-COMMR?wid=406&hei=230&fit=crop&resSharp=1",
  },
  {
    title: "Sterile Processing",
    desc: "Practice measuring, marking, cutting, and framing without wasting a single piece of material. Perfect for beginners and trade schools.",
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=406&hei=230&fit=crop&resSharp=1",
  },
  {
    title: "HVAC Training System",
    desc: "Teach duct design, airflow balancing, troubleshooting, and complete HVAC workflows in a fully interactive VR environment.",
    img: "https://cms-assets.xboxservices.com/assets/94/d6/94d66c09-f466-4ed3-9b1e-c098f2737f5b.jpg?n=Xbox-Series-X_Content-Placement-0_Next-Gen-Framerates_788x444_01.jpg",
  },
  {
    title: "Woodwork & Framing",
    desc: "Train sterile room workflows, contamination control, PPE, and equipment handling—ideal for hospitals and allied health programs.",
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Digital-Content-Xbox-Game-Pass-Oct25?wid=297&hei=167&fit=crop",
  },
];

const TrainingPrograms = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {programs.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-[3px] shadow-md overflow-hidden "
          >
            {/* Image */}
            <div className="relative h-[200px]">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full cursor-pointer shadow-lg">
                  <svg
                    fill="#fff"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{p.desc}</p>

              {/* Button */}
              <button className="bg-[#0067B8] text-white px-8 py-2 text-sm  rounded-[2px] hover:bg-blue-700">
                Explore
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TrainingPrograms;
