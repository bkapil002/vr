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
              Teach Together. Learn Together. In VR.
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              VRHVAC supports multiplayer classrooms, allowing instructors and students to share the same virtual space.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Teacher-led sessions with live demonstrations</li>
              <li>Real-time avatar and hand tracking</li>
              <li>Voice communication with instructor controls</li>
              <li>Classroom management features (mute, permissions, session control)</li>
            </ul>

            <p className="text-base italic text-gray-700 leading-relaxed pt-2">
             One instructor. One virtual system. Many engaged learners.
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
