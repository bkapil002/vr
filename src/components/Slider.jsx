import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import home from "../image/home.jpg";
import home2 from "../image/home2.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);


  const realSlides = [
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
      title: "Build Real Skills in  Virtual World",
      description:
        "Train Like a Job, Not a Class - Learn Skills. Get Future Ready with Modern Training for Modern Trades",
      buttonText: "How it Works",
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

  /* AUTOPLAY */
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  /* LOOP FIX */
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
  }, [currentSlide, totalSlides, realSlides.length]);

  const slideNext = () => setCurrentSlide((p) => p + 1);
  const slidePrev = () => setCurrentSlide((p) => p - 1);

  return (
    <div className="w-full mb-[50px]">
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Image Slider */}
        <div className="relative w-full h-[480px] overflow-hidden">
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

                {/* CONTENT WRAPPER - Only visible on large screens (>1288px) */}
                <div
                  className="
                    absolute inset-0
                    hidden [@media(min-width:1289px)]:flex
                    max-w-[1400px] mx-auto
                    px-4 sm:px-6 md:px-8
                    items-center -mt-22
                  "
                >
                  {/* TEXT CARD - Large screens */}
                  <div className="max-w-[590px]  text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    <p className="max-w-[400px]   text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-normal text-black mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      {slide.description}
                    </p>

                    <button className="bg-[#0067B8] text-sm font-semibold cursor-pointer text-white px-4 py-1.5 sm:px-6 sm:py-2 md:px-7 md:py-2.5 rounded-[3px] transition-colors duration-300 hover:bg-[#005a9e]">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT BELOW IMAGE - Only visible on small/medium screens (≤1288px) */}
        <div className="[@media(min-width:1289px)]:hidden w-full   ">
          <div className="max-w-[1400px] mx-auto bg-white p-6 px-4 sm:px-6 md:px-8 rounded-md shadow-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              {realSlides[currentSlide === 0 ? realSlides.length - 1 : currentSlide === totalSlides - 1 ? 0 : currentSlide - 1].title}
            </h1>

            <p className="text-[11px] sm:text-[12px] md:text-[13px] font-normal text-black mb-4 sm:mb-5 leading-relaxed">
              {realSlides[currentSlide === 0 ? realSlides.length - 1 : currentSlide === totalSlides - 1 ? 0 : currentSlide - 1].description}
            </p>

            <button className="bg-[#0067B8] text-sm font-semibold cursor-pointer text-white px-4 py-1.5 sm:px-6 sm:py-2 md:px-7 md:py-2.5 rounded-[3px] transition-colors duration-300 hover:bg-[#005a9e]">
              {realSlides[currentSlide === 0 ? realSlides.length - 1 : currentSlide === totalSlides - 1 ? 0 : currentSlide - 1].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="w-full py-4 flex justify-center">
        <div className="flex items-center gap-4">
          <button
            className="text-[#0D349C] hover:text-[#0a2670] transition-colors"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <button 
            className="text-[#0D349C] hover:text-[#0a2670] transition-colors" 
            onClick={slidePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {realSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index + 1
                    ? "bg-[#0D349C] border-2 border-[#0D349C] w-2.5"
                    : "bg-white border-2 border-[#0D349C] w-2.5"
                }`}
              />
            ))}
          </div>

          <button 
            className="text-[#0D349C] hover:text-[#0a2670] transition-colors" 
            onClick={slideNext}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;