import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      title: "Transforming Trade Education with VR & Cognitive Learning",
      description:
        "Trade VR immerses learners in real job environments where they can build mental models, sharpen critical thinking.",
      buttonText: "Request a Demo",
      bgDesktop:
        "https://images.pexels.com/photos/4009622/pexels-photo-4009622.jpeg",
      bgTablet:
        "https://images.pexels.com/photos/4009622/pexels-photo-4009622.jpeg",
      bgMobile:
        "https://images.pexels.com/photos/4009622/pexels-photo-4009622.jpeg",
    },
    {
      title: "Hands-On Skills Training in Virtual Reality",
      description:
        "Experience realistic welding, electrical work, and construction scenarios without the risks and costs of traditional training methods.",
      buttonText: "Learn More",
      bgDesktop:
        "https://images.pexels.com/photos/7561998/pexels-photo-7561998.jpeg",
      bgTablet:
        "https://images.pexels.com/photos/7561998/pexels-photo-7561998.jpeg",
      bgMobile:
        "https://images.pexels.com/photos/7561998/pexels-photo-7561998.jpeg",
    },
    {
      title: "Build Expertise Through Immersive Practice",
      description:
        "Master complex trade skills with interactive VR simulations that adapt to your learning pace and provide instant feedback.",
      buttonText: "Get Started",
      bgDesktop:
        "https://images.pexels.com/photos/12960383/pexels-photo-12960383.jpeg",
      bgTablet:
        "https://images.pexels.com/photos/12960383/pexels-photo-12960383.jpeg",
      bgMobile:
        "hhttps://images.pexels.com/photos/12960383/pexels-photo-12960383.jpeg",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-140 overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Responsive Background using picture */}
          <picture className="absolute inset-0 block w-full h-full">
            {/* Desktop: min-width 1024px (tailwind lg breakpoint) */}
            <source media="(min-width: 1024px)" srcSet={slide.bgDesktop} />
            {/* Tablet: min-width 640px (tailwind sm) */}
            <source media="(min-width: 640px)" srcSet={slide.bgTablet} />
            {/* Fallback / Mobile */}
            <img
              src={slide.bgMobile}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-[11px] md:text-[13px] lg:text-[15px] text-gray-200 mb-6 md:mb-8 leading-relaxed">
                {slide.description}
              </p>
              <button className="bg-[#0067B8] cursor-pointer text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded transition-colors duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full">
        {/* Play/Pause */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-white hover:text-blue-400 transition-colors"
          aria-label={isAutoPlay ? 'Pause' : 'Play'}
        >
          {isAutoPlay ? (
            <Pause size={16} className="sm:w-5 sm:h-5" />
          ) : (
            <Play size={16} className="sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;