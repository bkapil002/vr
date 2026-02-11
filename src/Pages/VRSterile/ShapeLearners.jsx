import React, { useState, useEffect } from 'react'
import gif from "../../image/vrweld1.gif"

const ShapeLearners = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [direction, setDirection] = useState('next')

    const stories = [
        {
            image: gif,
            header: "Built for Healthcare Training Programs",
            points: [
                "Structured, repeatable sterile processing instruction",
                "Reduced risk during early-stage training",
                "Consistent training across cohorts and locations",
                "Support for certification-aligned curricula",
                "Safer onboarding for new learners"
            ]
        }
    ]

    // Auto-slide effect - only run if more than one story
    useEffect(() => {
        if (!isPaused && stories.length > 1) {
            const interval = setInterval(() => {
                setDirection('next')
                setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
            }, 6000)

            return () => clearInterval(interval)
        }
    }, [isPaused, stories.length])

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 'next' : 'prev')
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setDirection('prev')
        setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setDirection('next')
        setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8'>
            <div className="bg-white text-black py-9 lg:py-10 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 xl:px-8">

                    {/* Slider Container */}
                    <div className="relative">

                        {/* Content Grid with Sliding Animation */}
                        <div className="relative">
                            {stories.map((story, index) => (
                                <div
                                    key={index}
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ease-in-out ${index === currentSlide
                                        ? 'opacity-100 translate-x-0 relative'
                                        : index < currentSlide
                                            ? 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none'
                                            : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
                                        }`}
                                >

                                    {/* Left Side - Image */}
                                    <div className="relative order-2 lg:order-1">
                                        <div className="h-80 overflow-hidden ">
                                            <img
                                                src={story.image}
                                                alt="VRweld training"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Side - Text Content */}
                                    <div className="space-y-6 order-1 lg:order-2">
                                        <h2 className="text-1xl lg:text-2xl xl:text-3xl font-semibold mb-6 lg:mb-6">
                                            {story.header}
                                        </h2>

                                        {/* Points List */}
                                        {story.points && (
                                            <ul className="text-lg lg:text-[1rem] leading-relaxed mb-6 text-gray-700 space-y-2">
                                                {story.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="mr-2">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Quote */}
                                        {story.quote && (
                                            <blockquote className="text-lg lg:text-[1rem] leading-relaxed mb-6 text-gray-700">
                                                {story.quote}
                                            </blockquote>
                                        )}
                                        
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows - Desktop/Tablet - Only show if more than one story */}
                        {stories.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrevious}
                                    onMouseEnter={() => setIsPaused(true)}
                                    onMouseLeave={() => setIsPaused(false)}
                                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full cursor-pointer   text-gray-700 hover:text-gray-900 items-center justify-center transition-all z-10"
                                    aria-label="Previous story"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={goToNext}
                                    onMouseEnter={() => setIsPaused(true)}
                                    onMouseLeave={() => setIsPaused(false)}
                                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full cursor-pointer  text-gray-700 hover:text-gray-900 items-center justify-center transition-all z-10"
                                    aria-label="Next story"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Dots Navigation - Only show if more than one story */}
                    {stories.length > 1 && (
                        <div className="flex items-center justify-center gap-3 mt-12">
                            {stories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentSlide
                                        ? 'w-3 h-3 bg-[#005a9e]'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to story ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Mobile Navigation Buttons - Only show if more than one story */}
                    {stories.length > 1 && (
                        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
                            <button
                                onClick={goToPrevious}
                                className="w-12 h-12 rounded-full  text-gray-700 hover:text-gray-900 flex items-center justify-center transition-all"
                                aria-label="Previous story"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={goToNext}
                                className="w-12 h-12 rounded-full  text-gray-700 hover:text-gray-900 flex items-center justify-center transition-all"
                                aria-label="Next story"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}


                </div>
                <div className='w-full pt-8 pb-3 justify-center items-center text-center'>
                    <p className='text-base italic text-gray-700 leading-relaxed pt-2'>Train with confidence — before entering real facilities.</p>
                </div>
            </div>
        </div>
    )
}

export default ShapeLearners