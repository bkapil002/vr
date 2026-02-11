import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[280px] md:h-[380px] lg:h-[480px] overflow-hidden ">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://vrwelding.org/wp-content/uploads/2025/05/vrweldabout-2-e1747132080225.png"
                    alt="VRweld training community"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8">

                    {/* Main Heading */}
                    <h1 className="text-1xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                       See VR Healthcare in Action
                    </h1>

                    {/* Subheading / Description */}
                    <p className="text-[1rem] italic leading-relaxed max-w-3xl mx-auto">
                       Experience how immersive training prepares sterile processing and central service technicians for real-world healthcare environments.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <button className="bg-[#005a9e] hover:bg-[#004a7e] text-white font-semibold px-8 py-3 rounded-md transition-all duration-300">
                            Request a Demo
                        </button>
                    </div>

                    {/* Closing Line */}
                    <p className="text-base italic leading-relaxed pt-2">
                        Train precisely. Practice safely. Protect patients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection