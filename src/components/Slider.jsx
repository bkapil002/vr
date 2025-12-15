import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import home from "../image/home.jpg";
import home2 from "../image/tradeVR.jpg";

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
      title: "Transforming Trade Education with VR & Cognitive Learning",
      description:
        "Trade VR immerses learners in real job environments where they can build mental models, sharpen critical thinking, and accelerate hands-on skill development.",
      buttonText: "Request a Demo",
      bgDesktop: home2,
      bgTablet: home2,
      bgMobile: home2,
    },
  ];

  // Infinite loop clones
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

      <div className="relative w-full h-[480px] overflow-hidden">
        <div
        ref={sliderRef}
        className="absolute inset-0 flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <picture className="absolute inset-0 block w-full h-full">
              <source media="(w 1000000px)" srcSet={slide.bgDesktop} />
              <source media="(min-width: 640px)" srcSet={slide.bgTablet} />
              <img
                src={slide.bgMobile}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>

            <div className="absolute inset-0 "></div>

            <div className="relative h-full -mt-14 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex items-center">
              <div className="max-w-[590px] text-center sm:text-left mx-auto sm:mx-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[33px] font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-[11px] max-w-[400px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-normal text-black mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-[#0067B8] text-[12px] cursor-pointer text-white font-semibold px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2.5 rounded-[3px] transition-colors duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="w-full  py-4 flex justify-center">
        <div className="flex items-center gap-4">

          {/* Play / Pause */}
          <button className="text-[#0D349C]" onClick={() => setIsAutoPlay(!isAutoPlay)}>
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Prev */}
          <button className="text-[#0D349C]" onClick={slidePrev}>
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {realSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index + 1
                    ? "bg-[#0D349C] border-2 border-[#0D349C] w-2.5"
                    : "bg-white border-2 border-[#0D349C] w-2.5"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button className="text-[#0D349C]" onClick={slideNext}>
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Slider;
