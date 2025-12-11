import React from "react";

const TradeVRSection = () => {
  return (
    <div className="w-full h-110 mt-30 flex justify-center px-5">
      {/* This is now max-w-6xl WITH background image */}
      <div
        className="max-w-6xl w-full bg-cover bg-center bg-no-repeat rounded-[5px] py-20  px-6  md:px-12"
        style={{
          backgroundImage:
            "url('https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/dual_knit_band__cuhpalc1t9ea_large.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1  p-6 rounded-md ">
            <h2 className="text-3xl font-bold mb-4">Get Started with TradeVR</h2>

            <p className="text-white mb-6 max-w-md">
              Revolutionize trade skills training with a smarter, safer, and
              scalable virtual reality platform.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0067B8] text-[12px] md:text-[15px] text-white px-5 py-2 rounded ">
                Our Products
              </button>

              <button className="bg-[#0067B8] text-[12px] md:text-[15px] text-white px-5 py-2 rounded ">
                Request a Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TradeVRSection;
