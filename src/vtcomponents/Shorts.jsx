import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Shorts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const shorts = [
    "XrJpnRO5QsE",
    "5ud53ZSDu1M", 
    "Rr5Ja2RW8zY",
    "KBVG__8rfus",
    "26_Huwpd1-E",
    "iR6nDf_hNag",
    "1iuuuTGILrM",
    "esyo7d4RjTQ",
    "ImMhdsLJZEU",
    "oh6AiTQ9GV0"
  ];

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < shorts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < shorts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="justify-center items-center mx-auto max-w-[81%] pt-8 mb-12">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">Our Shorts</h2>
        
      </div>

      <div className="relative flex justify-center">
        {/* Shorts Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-8 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {shorts.map((shortId, index) => (
              <div key={index} className="flex-shrink-0 w-48 sm:w-56">
                <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${shortId}?controls=1&modestbranding=1&rel=0${index === currentIndex ? '&autoplay=1' : ''}`}
                    title={`VentureTalks Short ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrev}
            className="absolute z-10 p-3 text-white transition-all transform -translate-y-1/2 rounded-full left-2 top-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {currentIndex < shorts.length - 1 && (
          <button
            onClick={goToNext}
            className="absolute z-10 p-3 text-white transition-all transform -translate-y-1/2 rounded-full right-2 top-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>


    </div>
  );
};

export default Shorts;