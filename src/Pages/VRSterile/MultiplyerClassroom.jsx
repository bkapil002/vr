import React from 'react'
import vrglass from '../../image/vrglass.png'

const MultiplyerClassroom = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="container max-w-[1400px] mx-auto px-6 xl:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">

          

          {/* Right Side - Text Content */}
          <div className="space-y-5 order-2 lg:order-1">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight text-black">
              Train the Entire Sterile Process — from Start to Finish
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
             VR Healthcare teaches sterile processing as a complete, connected workflow — not isolated tasks.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Instrument decontamination and cleaning workflows</li>
              <li>Assembly and packaging procedures</li>
              <li>Sterilization processes and compliance checks</li>
              <li>Contamination awareness and prevention</li>
              <li>Procedural accuracy and sequencing</li>
              
            </ul>

            <p className="text-base italic text-gray-700 leading-relaxed pt-2">
             Every step matters. Every detail counts.
            </p>
          </div>
           {/* Left Side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[2/1] overflow-hidden rounded-lg">
              <img
                src={vrglass}
                alt="VR welding safety training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiplyerClassroom
