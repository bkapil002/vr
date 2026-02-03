import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden ">
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
                    <h1 className="text-1xl md:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                        It's not about mastering a tool.
                        <br />
                        It's about becoming kind of person who builds with
                        <br />
                        meaningful purpose.
                    </h1>

                    {/* Subheading / Description */}
                    <p className="text-base md:text-lg lg:text-xl italic leading-relaxed max-w-3xl mx-auto">
                        Inspired by Gandhi's vision of <strong>vocational learning</strong>, <strong>VRweld</strong> empowers learners to contribute to society, not just succeed in it — through <strong>immersive, skill-based welding education</strong>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection