import vrimg from "../image/tradeVR.jpg";

const TradeVRSection = () => {
  return (
    <div className="w-full flex justify-center mx-auto px-4 sm:px-6 md:px-10px  lg:px-[125px]   mb-[90px]">
      
      {/* Background Section */}
      <div
        className="w-full max-w-[1400px]  min-h-[420px] bg-cover bg-center bg-no-repeat rounded-[5px] relative flex items-center"
        style={{ backgroundImage: `url(${vrimg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 rounded-[5px]" />

        {/* Content */}
        <div className="relative w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Get Started with TradeVR
            </h2>

            <p className="text-black mb-6">
              Revolutionize trade skills training with a smarter, safer, and
              scalable virtual reality platform.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0067B8] text-white text-sm px-5 py-2 rounded">
                Our Products
              </button>

              <button className="bg-[#0067B8] text-white text-sm px-5 py-2 rounded">
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
