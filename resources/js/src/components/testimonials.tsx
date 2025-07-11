import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations Ltd",
      quote: "Working with Throne Solutions transformed our leadership approach. The insights we gained were invaluable in scaling our business across East Africa.",
      avatar: "👩🏽‍💼"
    },
    {
      id: 2,
      name: "Michael Omondi",
      role: "Director, Green Energy Africa",
      quote: "Robert's coaching helped our executive team align our vision and execute our strategy with remarkable clarity. The results speak for themselves!",
      avatar: "👨🏾‍💼"
    },
    {
      id: 3,
      name: "Amina Hassan",
      role: "Founder, Nairobi Fintech Hub",
      quote: "The personalized coaching sessions provided exactly what my leadership team needed to navigate our rapid growth phase. Highly recommended!",
      avatar: "👩🏾‍💼"
    },
    {
      id: 4,
      name: "David Kimani",
      role: "COO, Kenya Logistics Network",
      quote: "Throne Solutions helped us develop a cohesive leadership culture that improved our decision-making and operational efficiency across all branches.",
      avatar: "👨🏽‍💼"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8F9FC] to-[#EFF1F8] font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#30344D] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#FFD166] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
           Real impact, real transformation.
Discover how our clients have grown through leadership and strategic support.
          </motion.p>
        </div>

        {/* Testimonials Container */}
        <div className="relative h-[500px] md:h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute inset-0 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Avatar with decorative elements */}
              <div className="relative flex-shrink-0">
                <div className="relative z-10">
                  <div className="text-8xl">{testimonial.avatar}</div>
                </div>
                
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#FFD166] opacity-20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#5D6BA4] opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[#FFD166] opacity-40"></div>
              </div>
              
              {/* Testimonial Content */}
              <div className="relative max-w-2xl">
                <div className="text-9xl absolute -top-16 -left-6 text-[#FFD166] opacity-20">“</div>
                
                <motion.blockquote 
                  className="text-2xl md:text-3xl font-light italic relative z-10 text-[#30344D] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 20
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {testimonial.quote}
                </motion.blockquote>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-xl font-bold text-[#30344D]">{testimonial.name}</p>
                  <p className="text-[#5D6BA4]">{testimonial.role}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Decorative floating elements */}
          <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-[#BC832B]"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-[#BC832B]"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#FFD166]"></div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#BC832B] scale-125' : 'bg-[#BC832B]'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;