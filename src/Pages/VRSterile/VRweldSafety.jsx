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
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-black">
             Sterile Processing Training Demands Perfection — with No Room for 
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Sterile Processing Technicians and Central Service professionals are responsible for the safety of every patient they support.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Traditional training often struggles with:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Limited access to sterile environments</li>
              <li>High-risk, high-stakes learning conditions</li>
              <li>Difficulty practicing complete workflows end-to-end</li>
              <li>Inconsistent training experiences across cohorts</li>
            </ul>
            <p className="text-base text-gray-700 leading-relaxed">
              As a result, learners are expected to master critical procedures with limited opportunity to practice safely.
            </p>
            <p className="text-base italic text-gray-700 leading-relaxed pt-2">
              Precision can’t be learned through observation alone.
            </p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default VRweldSafety
