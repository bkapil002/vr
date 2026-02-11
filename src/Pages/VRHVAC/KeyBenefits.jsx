import React, { useState, useEffect } from 'react'
import Agency from "../../image/Agency-Autonomy-1.png"
import Community from "../../image/Community-Belonging-1.png"
import Innovation from "../../image/Innovation-Stability-1.png"
import Resilience from "../../image/Resilience-Reinvention-1.png"

const KeyBenefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      title: "See the Whole System",
      Subtitle: "Understand how HVAC systems work together — not just piece by piece.",
      description: "Step inside complete HVAC environments to visualize airflow, pressure, and system behavior in real time.",
      description2: "Students learn why systems work — not just how to assemble them.",
      image: Agency
    },
    {
      title: "Learn Without Fear",
      Subtitle: "Make mistakes safely. Learn faster.",
      description: "Students can test ideas, troubleshoot faults, and try again without damaging equipment or risking safety.",
      description2: "Every mistake becomes a lesson — not a setback.",
      image: Community
    },
    {
      title: "Build Skill Through Doing",
      Subtitle: "Practice turns into confidence.",
      description: "Learners interact directly with HVAC components and workflows using their hands — reinforcing muscle memory, spatial understanding, and technical confidence.",
      description2: "",
      image: Innovation
    },
    {
      title: "Teach Together in One Virtual Space",
      Subtitle: "One classroom. One system. Many learners.",
      description: "Instructors guide students live using multiplayer classrooms, demonstrations, and real-time controls — making complex concepts easier to understand and repeat.",
      description2: "",
      image: Resilience
    }
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full bg-white text-black py-9 lg:py-10">
      <div className="container max-w-[1400px] mx-auto px-6 xl:px-8">
        {/* Title */}
        <h2 className="text-1xl lg:text-2xl xl:text-3xl font-semibold mb-8 lg:mb-10">
          What Powers the VRHVAC Experience
        </h2>

        {/* Mobile: Image Section (shows second on mobile) */}
        <div className="relative mb-8 lg:hidden">
          <div className="aspect-[4/3]  overflow-hidden">
            <iframe
              className="w-full h-full object-cover scale-[1.4] pointer-events-none"
              src="https://www.youtube.com/embed/tm5GW2okL2E?autoplay=1&mute=1&loop=1&playlist=tm5GW2okL2E&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
              title="Key Benefits Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="eager"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 ">

            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className='w-35 h-35'
            />


            <h3 className="text-1xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
              {slides[currentSlide].title}
            </h3>
            <p className=" pl-5 font-medium lg:text-[1rem] text-gray-80 leading-relaxed">
              {slides[currentSlide].Subtitle}
            </p>

            <p className=" pl-5 lg:text-[1rem] text-gray-80 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <p className=" pl-5 lg:text-[1rem] text-gray-80 leading-relaxed">
              {slides[currentSlide].description2}
            </p>

            {/* Progress Bars */}
            <div className="flex gap-3 pt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative h-1 flex-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer hover:bg-gray-500 transition-colors"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`absolute inset-0 bg-[#005a9e] rounded-full transition-all duration-300 ${index === currentSlide ? 'w-full' : 'w-0'
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 pt-4">
              {/* Pause/Play Button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-12 h-12 rounded-full bg-white text-[#005a9e] flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                )}
              </button>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full  text-[#005a9e] flex items-center justify-center  transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full text-[#005a9e]  flex items-center justify-center  transition-colors"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Right Side - Static Image (hidden on mobile) */}
          <div className="relative hidden lg:block">
            <div className="h-85 bg-gradient-to-br  overflow-hidden">
              <iframe
                className="w-full h-full object-cover scale-[1] pointer-events-none"
                src="https://www.youtube.com/embed/tm5GW2okL2E?autoplay=1&mute=1&loop=1&playlist=tm5GW2okL2E&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                title="Key Benefits Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                loading="eager"
              />


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyBenefits


