import React, { useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { mission, vision } from '../data/content';
import TeamSection from './Team';
import Partners from './Partners';

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = "areGS92QFW8"; // Using your YouTube video ID

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Image Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="/images/about.jpeg" 
          alt="Mental health support" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <motion.h1 
      className="text-white text-4xl md:text-6xl font-bold text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Us
    </motion.h1>
  </div>
      </section>

      {/* About Content */}
      <section className="text-center py-16 px-4 flex flex-col justify-center">
        <h4 className="text-sm text-black uppercase tracking-wide mb-2">ABOUT</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">THRONE SOLUTIONS</h1>
        <p className="text-black max-w-2xl mx-auto mt-4">
          Throne Solutions Ltd is a dynamic consulting company specializing in leadership and business development. 
          With a history spanning six years, we have established ourselves as trusted advisors and partners to numerous 
          organizations seeking to unlock their full potential. Based in Nairobi, the thriving business hub of East Africa, 
          we are strategically positioned to cater to the growing needs of this vibrant and expanding population. Our deep-rooted 
          understanding of the local landscape, coupled with our extensive expertise, allows us to navigate the complexities of the regional market with ease.
          Throne Solutions Ltd empowers small and medium-sized enterprises (SMEs) to grow and compete at a higher level.
          
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Mission Card */}
            <motion.div 
              className="md:w-1/2 flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col h-full bg-gradient-to-br text-brand p-8 rounded-2xl shadow-2xl relative w-full">
                <div className="absolute -top-6 -left-6 bg-black rounded-full p-4 shadow-lg">
                  <Heart className="text-brand" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
                <p className="text-black mb-6 leading-relaxed">{mission}</p>
              </div>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              className="md:w-1/2 flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col h-full bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl relative w-full">
                <div className="absolute -top-6 -left-6 bg-brand rounded-full p-4 shadow-lg">
                  <span className="text-black text-2xl font-bold">✨</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-brand">Our Vision</h2>
                <p className="text-white mb-6 leading-relaxed">{vision}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TeamSection />

      {/* Video Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story in Motion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch this short video to learn more about our journey, values, and the impact we've created.
          </p>
        </div>

        <div 
          className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          <div className="relative aspect-video">
            {/* Using YouTube thumbnail */}
            <img 
              src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`} 
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/images/video-fallback.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-xl font-bold text-white">Throne Solutions Journey</h3>
            <p className="text-white/80 mt-1">Click to watch our story</p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white text-4xl z-10 hover:text-gray-300 transition-colors"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              &times;
            </button>
            
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="Throne Solutions Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Partners />

      <Footer />
    </div>
  );
};

export default AboutUs;