import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import home from "../image/home.jpg";
import home2 from "../image/tradeVR.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at slide 1 (first REAL slide)
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const realSlides = [
    {
      title: "Transforming Trade Education with VR & Cognitive Learning",
      description:
        "Trade VR immerses learners in real job environments where they can build mental models, sharpen critical thinking, and accelerate hands-on skill development.",
      buttonText: "Request a Demo",
      bgDesktop: home2,
      bgTablet: home2,
      bgMobile: home2,
    },
    {
      title: "Transforming Trade Education with VR & Cognitive Learning",
      description:
        "Trade VR immerses learners in real job environments where they can build mental models, sharpen critical thinking, and accelerate hands-on skill development.",
      buttonText: "Request a Demo",
      bgDesktop: home,
      bgTablet: home,
      bgMobile: home,
    },
    {
      title: "Transforming Trade Education with VR & Cognitive Learning",
      description:
        "Trade VR immerses learners in real job environments where they can build mental models, sharpen critical thinking, and accelerate hands-on skill development.",
      buttonText: "Request a Demo",
      bgDesktop: home2,
      bgTablet: home2,
      bgMobile: home2,
    },
  ];

  const slides = [
    realSlides[realSlides.length - 1], 
    ...realSlides,
    realSlides[0], 
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slideNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const slidePrev = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Smooth infinite loop fix
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentSlide(1);
      }, 700);

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.7s ease";
      }, 750);
    }

    if (currentSlide === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentSlide(realSlides.length);
      }, 700);

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.7s ease";
      }, 750);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-120 overflow-hidden">

      {/* SLIDER TRACK */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <picture className="absolute inset-0 block w-full h-full">
              <source media="(min-width: 1024px)" srcSet={slide.bgDesktop} />
              <source media="(min-width: 640px)" srcSet={slide.bgTablet} />
              <img
                src={slide.bgMobile}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>

            <div className="absolute inset-0 bg-white/15"></div>

            <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center">
              <div className="max-w-[600px] text-center sm:text-left mx-auto sm:mx-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-medium text-black mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-[#0067B8] cursor-pointer text-white font-semibold px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2.5 rounded transition-colors duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 bg-black/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-2.5 rounded-full">

        {/* Play/Pause */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-black transition-colors"
        >
          {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {/* Previous */}
        <button onClick={slidePrev} className="text-black transition-colors">
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 sm:gap-2">
          {realSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index + 1)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index + 1
                  ? "bg-black w-6 sm:w-8"
                  : "bg-black/50 hover:bg-black/75"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button onClick={slideNext} className="text-black transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
