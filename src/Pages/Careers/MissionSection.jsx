import React from 'react';

const MissionSection = () => {
  return (
    <div className="mt-20 md:mt-0 mb-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video */}
          <div className="relative">
  <div className="relative aspect-video bg-black overflow-hidden shadow-lg">

    {/* YouTube Video */}
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
      title="Our Mission Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

          {/* Right Side - Mission Text */}
          <div className="space-y-7">
            <h2 className="text-[19px] md:text-[25px] font-semibold text-gray-800">
              Empowered by Purpose. United by Mission
            </h2>
            
            <p className="text-[17px] text-gray-700 leading-relaxed">
              When you join tradevr, you're not just stepping into a job— you're stepping into a mission-driven company where purpose is at the heart of everything we do.
            </p>
            
            <p className="text-[17px] text-gray-700 leading-relaxed">
              Our mission—to empower every person and every organization on the planet to achieve more—isn't just words.
            </p>
            
            <p className="text-[17px] text-gray-700 leading-relaxed">
              It's our foundation. It's what sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;