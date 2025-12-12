import React from "react";
import weldingtraining from "../image/welding-training.jpg";
import sterileprocessing from "../image/sterile-processing.jpg";
import hvactraining from "../image/hvac-training.jpg";
import woodwork from "../image/woodwork.jpg";
import play from "../image/play.png"
const programs = [
  {
    title: "Welding Training",
    desc: "Master MIG welding, joints, angles, safety, and AWS-aligned fundamentals with hyper-realistic simulations and real-time scoring.",
    img: weldingtraining,
  },
  {
    title: "Sterile Processing",
    desc: "Practice measuring, marking, cutting, and framing without wasting a single piece of material. Perfect for beginners and trade schools.",
    img: sterileprocessing,
  },
  {
    title: "HVAC Training System",
    desc: "Teach duct design, airflow balancing, troubleshooting, and complete HVAC workflows in a fully interactive VR environment.",
    img: hvactraining,
  },
  {
    title: "Woodwork & Framing",
    desc: "Train sterile room workflows, contamination control, PPE, and equipment handling—ideal for hospitals and allied health programs.",
    img: woodwork,
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
              {(index === 0 || index === 2) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={play} className="w-[56px] cursor-pointer"/>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-[20px] font-semibold mb-2">{p.title}</h3>
              <p className="text-[#000000] text-sm mb-4">{p.desc}</p>

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
