import React from "react";
import sterileprocessing from "../image/sterile-processing.jpg";
import woodwork from "../image/woodwork.jpg";
import video from "../image/video1.mp4";
import video2 from "../image/video2.mp4";


const programs = [
  {
    title: "Welding Training",
    desc: "Master MIG welding, joints, angles, safety, and AWS aligned fundamentals.",
    video: video,
  },
  {
    title: "Sterile Processing",
    desc: "Practice measuring, marking, cutting, and framing without wasting material.",
    img: sterileprocessing,
  },
  {
    title: "HVAC Training System",
    desc: "Teach duct design, airflow balancing, and troubleshooting.",
    video: video2,
  },
  {
    title: "Woodwork & Framing",
    desc: "Train sterile room workflows and contamination control.",
    img: woodwork,
  },
];

const TrainingPrograms = () => {
  return (
    <div className="max-w-[1400px]  py-3 mb-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#FFFFFF] border rounded-[3px] shadow-md border-gray-200 overflow-hidden"
          >
            {/* MEDIA */}
            <div className="h-48 overflow-hidden bg-black">
              {p.video ? (
                <video
                  src={p.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                {p.title}
              </h3>

              <p className="text-sm text-black mb-6 flex-grow">
                {p.desc}
              </p>

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
