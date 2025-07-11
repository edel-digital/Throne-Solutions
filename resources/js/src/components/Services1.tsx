import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from './Services';
import Testimonials from './testimonials';
import Partners from './Partners';
import Footer from './Footer';

const ServicePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Mock data for counters and stats
  const counters = [200, 15, 98, 8];
  const filteredStats = [
    { id: 1, description: 'Organizations Transformed' },
    { id: 2, description: 'Industry Awards' },
    { id: 3, description: 'Client Retention' },
    { id: 4, description: 'Countries Served' },
  ];

  return (
  <section id="services" className="bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>

      
      {/* Hero Section */}
      <section id="Services" className="relative h-[70vh]  flex items-center justify-center overflow-hidden pt-48">
        
          <img 
            src="/images/leadership.png" 
            alt="Mental health support" 
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <motion.h1 
      className="text-white text-4xl md:text-6xl font-bold text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Services
    </motion.h1>
  </div>
          {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
        
      </section>

      {/* Services Section */}
      <Services />

      {/* CTA Section with Animation */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/cta-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Experience Transformation
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="w-24 h-1 bg-orange-500 mx-auto mt-6 origin-left"
            />
          </div>

          {/* Impact Stats Grid */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {filteredStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-brand mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                >
                  {counters[index].toLocaleString()}+
                </motion.div>
                <p className="text-white text-sm md:text-base font-medium px-2">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            {/* <Link
              to="/impact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              Read About Our Impact
            </Link> */}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-white -mb-px" />
      </section>

      {/* Testimonials & Partners */}
      <Testimonials />
      <Partners />
      <Footer />
    </section>
  );
};

export default ServicePage;
