import React from 'react'

const Mindsets = () => {
    return (
        <div>
            <div className="w-full bg-white  text-black py-9 lg:py-10">
                <div className="container max-w-[1400px] mx-auto px-6 xl:px-8">
                    {/* Content Section */}
                    <div className="text-center mb-8 lg:mb-12">
                        {/* Title */}
                        <h2 className="text-1xl lg:text-2xl xl:text-3xl  max-w-4xl mx-auto font-semibold mb-6 lg:mb-8">
                            Empowering Mindsets. Transforming Futures. Through Skill-Based VR Welding Training
                        </h2>

                        {/* Description */}
                        <p className=" lg:text-[1rem] text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                            VRweld isn’t just about learning — it’s about becoming. Through virtual reality vocational training, we empower learners to act with intention, think critically, and contribute meaningfully to the world around them.
                            <sup className="text-sm">1</sup>
                        </p>


                    </div>

                    {/* Image Section */}
                    <div className="relative w-full">
                        <div className="aspect-[16/9] lg:aspect-[20/8]  overflow-hidden">
                            <video
                                className="w-full h-full object-cover "
                                src="https://vrwelding.org/wp-content/uploads/2025/06/web-vrweld.mp4#t=12,50"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mindsets