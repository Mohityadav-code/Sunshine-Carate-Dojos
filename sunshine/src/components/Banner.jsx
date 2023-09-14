import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    'https://zodiacmatctest.s3.amazonaws.com/banner1.jpg',
    'https://zodiacmatctest.s3.amazonaws.com/banner2.jpg',
    'https://zodiacmatctest.s3.amazonaws.com/banner3.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="w-full  h-[280px] lg:h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-2 w-3 h-3 rounded-full transition-opacity duration-300 ${
              currentSlide === index ? 'bg-white opacity-100' : 'bg-gray-300 opacity-50'
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* <div className="absolute bottom-0 left-0 flex items-center mb-4 ml-4 top-1/4">
        <button
          className="text-lg font-bold text-white"
          onClick={prevSlide}
        >
          &lt;
        </button>
      </div>
      <div className="absolute bottom-0 right-0 flex items-center mb-4 mr-4 top-1/4">
        <button
          className="text-lg font-bold text-white"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;
