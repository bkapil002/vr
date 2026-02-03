import React, { useState, useEffect } from 'react'

const KeyBenefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      title: "Agency & Autonomy",
      description: "Own your path. Thrive in skilled trades through VR training.",
      image: "https://vrwelding.org/wp-content/uploads/2025/06/Agency-Autonomy-1.png"
    },
    {
      title: "Community & Belonging",
      description: "Train together in immersive VR. Share progress & Grow.",
      image: "https://vrwelding.org/wp-content/uploads/2025/06/Community-Belonging-1.png"
    },
    {
      title: "Innovation & Stability",
      description: "Explore safely. Build welding skills with virtual tools and steady growth",
      image: "https://vrwelding.org/wp-content/uploads/2025/06/Innovation-Stability-1.png"
    },
    {
      title: "Resilience & Reinvention",
      description: "Fail fast. Evolve through hands-on VR welding practice.",
      image: "https://vrwelding.org/wp-content/uploads/2025/06/Resilience-Reinvention-1.png"
    }
  ]

  // Auto-slide effect
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
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 lg:mb-10">
          What Powers the VRweld Experience
        </h2>

        {/* Mobile: Image Section (shows second on mobile) */}
        <div className="relative mb-8 lg:hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-purple-300 to-blue-400 rounded-lg overflow-hidden">
            <iframe
  className="w-full h-full object-cover scale-[1.4]"
  src="https://www.youtube.com/embed/tm5GW2okL2E?autoplay=1&mute=1&loop=1&playlist=tm5GW2okL2E&controls=0&rel=0&showinfo=0&playsinline=1"
  title="Key Benefits Background Video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
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
  className='w-40 h-40'
/>
            
           
            <h3 className="text-2xl lg:text-3xl font-semibold leading-tight">
              {slides[currentSlide].title}
            </h3>
            
            <p className="text-base pl-5 lg:text-lg text-gray-80 leading-relaxed">
              {slides[currentSlide].description}
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
                    className={`absolute inset-0 bg-[#005a9e] rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-full' : 'w-0'
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
                  className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors"
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
            <div className="aspect-[3/2] bg-gradient-to-br from-purple-200 via-purple-300 to-blue-400 rounded-lg overflow-hidden">
              <iframe
  className="w-full h-full object-cover scale-[1.3]"
  src="https://www.youtube.com/embed/tm5GW2okL2E?autoplay=1&mute=1&loop=1&playlist=tm5GW2okL2E&controls=0&rel=0&showinfo=0&playsinline=1"
  title="Key Benefits Background Video"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyBenefits


