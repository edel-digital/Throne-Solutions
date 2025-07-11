import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/home-1.jpeg',
      title: 'Eyeing that promotion?',
      subtitle: 'Our Leadership Coaching Program prepares you for success'
    },
    {
      image: '/images/home-2.jpeg',
      title: 'Your next promotion awaits',
      subtitle: 'Are you ready? Elevate your leadership with our expert coaching'
    },
    {
      image: '/images/home-3.jpeg',
      title: 'From Wish to blueprint',
      subtitle: 'Our business coaching program shapes your success'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
        index === currentSlide 
          ? 'opacity-100 z-10 pointer-events-auto' 
          : 'opacity-0 z-0 pointer-events-none'
      }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center mt-[100px] text-white container-max">
        <div className="overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 absolute inset-x-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold text-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-bold leading-relaxed text-shadow-lg">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        {/* Updated Button Section */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
          
<Link to="/programs">
<button className="mt-4 px-8 py-3.5 bg-transparent border-2 border-[#FFD166] text-white font-bold rounded-full hover:bg-[#FFD166] hover:text-brand transition-all duration-300 transform hover:-translate-y-1 text-base">
              Programs
            </button>
            </Link>
<Link to="/services">
<button className="mt-4 px-8 py-3.5 bg-transparent border-2 border-[#FFD166] text-white font-bold rounded-full hover:bg-[#FFD166] hover:text-brand transition-all duration-300 transform hover:-translate-y-1 text-base">
              Learn More
            </button>
            </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;