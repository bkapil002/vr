import React from 'react'

const VRweldSafety = () => {
  return (
    <div className="w-full bg-white py-9 lg:py-10 ">
      <div className="container max-w-[1400px] mx-auto px-6 xl:px-8">
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[2/1] bg-gradient-to-br overflow-hidden">
              <img
                src="https://vrwelding.org/wp-content/uploads/2025/05/home-cover-transparent-1.png"
                alt="VR welding safety training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-1xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-black">
              VRweld is Not just a Product.But a Mindset-Driven Virtual Welding Education.
            </h2>

            <p className="text-base lg:text-[1rem] text-gray-700 leading-relaxed">
              <b>VRweld</b> isn’t just about learning — it’s about becoming. We empower learners through<b>virtual reality education</b> to act with intention, think critically, and contribute meaningfully to the world around them.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              
              
                <p className="text-base lg:text-[1rem] italic text-gray-700 leading-relaxed">
               “Nurturing & transforming communities through purpose & action."
            </p>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VRweldSafety