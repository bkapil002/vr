import React from "react";
import weldingtraining from "../image/welding-training.jpg";
import sterileprocessing from "../image/sterile-processing.jpg";
import hvactraining from "../image/hvac-training.jpg";
import woodwork from "../image/woodwork.jpg";
import play from "../image/play.png"
const programs = [
  {
    title: "Welding Training",
    desc: "Master MIG welding, joints, angles, safety, and AWS aligned fundamentals with hyper realistic simulations fundamentals with hyper realistic  and ti-me scoring.",
    img: weldingtraining,
  },
  {
    title: "Sterile Processing",
    desc: "Practice measuring, marking, cutting, and framing without wasting a single piece of material with hyper realistic Perfect for beginners and trade schools.",
    img: sterileprocessing,
  },
  {
    title: "HVAC Training System",
    desc: "Teach duct design, airflow balancing, troubleshooting, and fundamentals with hyper realistic  complete HVAC workflows in a fully interactive VR env- ironment.",
    img: hvactraining,
  },
  {
    title: "Woodwork & Framing",
    desc: "Train sterile room workflows, contami- nation control, PPE, and equipment handling ideal for hospitals and all- ied health programs.",
    img: woodwork,
  },
];

const TrainingPrograms = () => {
  return (
   <div className="max-w-6xl mx-auto px-4 py-3 mt-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border rounded-[3px] shadow-md border-gray-200 overflow-hidden relative"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            {(index === 0 || index === 2) && (
              <div className="absolute inset-0  bottom-60 flex items-center justify-center">
                <img src={play} className="w-[56px] cursor-pointer" />
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {p.title}
              </h3>

              <p className="text-sm text-[#000000] mb-6 flex-grow">{p.desc}</p>

              <button className="inline-flex items-center cursor-pointer text-white bg-[#0067B8] px-8 py-2 text-sm font-semibold transition-colors duration-200 self-start">
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


