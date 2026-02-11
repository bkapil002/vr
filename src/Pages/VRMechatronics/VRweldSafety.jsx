import React from 'react'
import vrglass from '../../image/vrglass.png'

const VRweldSafety = () => {
  return (
    <div className="w-full bg-white py-10 mt-0 md:mt-8">
      <div className="container max-w-[1400px] mx-auto px-6 xl:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[2/1] overflow-hidden rounded-lg">
              <img
                src={vrglass}
                alt="VR welding safety training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-3 order-1 lg:order-2">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-black">
             Mechatronics Training Is Advanced — and Resource Intensive
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Mechatronics education requires learners to understand how mechanical systems, electronics, and software work together.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Traditional training often struggles with:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Expensive and limited lab equipment</li>
              <li>Difficulty visualizing system interactions</li>
              <li>Steep learning curves for beginners</li>
              <li>One instructor supporting many learners at different skill levels</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              As a result, students often learn components in isolation without fully understanding system integration.
            </p>
            <p className="text-base italic text-gray-700 leading-relaxed pt-2">
              Understanding automation requires seeing systems in motion.
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default VRweldSafety
