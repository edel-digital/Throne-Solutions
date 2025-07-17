import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  UserCheck,
  BarChart,
  Users,
  Shield,
  Award,
  Star
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const counters = [200, 15, 98, 8];
  const filteredStats = [
    { id: 1, description: 'Organizations Transformed' },
    { id: 2, description: 'Industry Awards' },
    { id: 3, description: 'Client Retention' },
    { id: 4, description: 'Countries Served' },
  ];

  const programs = [
    {
      id: 1,
      title: "Executive Leadership Excellence",
      category: "leadership",
      description: "Transform your leadership capabilities with our flagship program for executives and senior leaders.",
      duration: "6 Months",
      level: "Advanced",
      rating: 4.9,
      icon: <Briefcase className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "Emerging Leaders Program",
      category: "development",
      description: "Develop essential leadership skills for high-potential professionals transitioning into management.",
      duration: "4 Months",
      level: "Intermediate",
      rating: 4.8,
      icon: <UserCheck className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700"
    },
    {
      id: 3,
      title: "Strategic Business Acumen",
      category: "business",
      description: "Master financial literacy, market analysis, and strategic planning to drive business growth.",
      duration: "3 Months",
      level: "All Levels",
      rating: 4.7,
      icon: <BarChart className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-amber-600 to-orange-600"
    },
    {
      id: 4,
      title: "High-Performance Teams",
      category: "team",
      description: "Build and lead teams that consistently exceed expectations through trust and collaboration.",
      duration: "5 Months",
      level: "Intermediate",
      rating: 4.9,
      icon: <Users className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-violet-600 to-purple-700"
    },
    {
      id: 5,
      title: "Women in Leadership",
      category: "leadership",
      description: "Empowering female leaders to overcome barriers and achieve their full potential.",
      duration: "4 Months",
      level: "All Levels",
      rating: 4.8,
      icon: <Shield className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-rose-600 to-pink-700"
    },
    {
      id: 6,
      title: "Innovation Leadership",
      category: "innovation",
      description: "Develop the mindset and skills to drive innovation and lead transformational change.",
      duration: "3 Months",
      level: "Advanced",
      rating: 4.7,
      icon: <Award className="text-white" size={20} />,
      bgColor: "bg-gradient-to-br from-cyan-600 to-blue-500"
    }
  ];

  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter(program => program.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FC] to-[#E6E9F4]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Programs Section */}
      <div className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-base md:text-sm uppercase tracking-wide mb-2 text-brand font-bold">
              OUR PROGRAMS
            </p>
            <h2 className="text-3xl min-[400px]:text-[32px] md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
              Transformative <span className="text-[#30344D]">Leadership Development</span>
            </h2>
            <p className="text-lg md:text-base text-gray-600 max-w-2xl mx-auto">
              Each program is meticulously designed to address specific leadership challenges and opportunities
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            {['all', 'leadership', 'development', 'business'].map((category) => (
              <button
                key={category}
                className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-[#30344D] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Programs Grid - 2 columns on mobile */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-md md:shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:hover:shadow-xl border border-gray-100"
              >
                <div className={`${program.bgColor} p-4 md:p-5 flex justify-between items-start`}>
                  <div className="p-2 md:p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    {program.icon}
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-white/20 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {program.duration}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    {/* Increased font size for mobile */}
                    <h3 className="text-xl min-[500px]:text-lg md:text-lg font-bold text-gray-800">{program.title}</h3>
                    <div className="flex items-center bg-[#FFD166]/20 px-2 py-1 rounded">
                      <Star className="text-[#FFD166] mr-1" size={14} />
                      <span className="text-[#30344D] font-medium text-sm">{program.rating}</span>
                    </div>
                  </div>

                  {/* Increased font size for mobile */}
                  <p className="text-base min-[500px]:text-sm md:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex justify-between items-center mt-4 md:mt-5">
                    <Link
                      to={`/programs`}
                      className="text-[#30344D] font-medium hover:text-[#FFD166] transition-colors flex items-center text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>

                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Starts:</span> Oct 15, 2025
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight">
              It's time to redefine success for your leadership and business
            </h3>
            <p className="text-lg md:text-base text-gray-600 max-w-xl mx-auto mb-4 md:mb-6">
              Explore our full range of programs designed to elevate your leadership journey
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-[#30344D] text-white font-medium rounded-lg hover:bg-[#1E2238] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore All Programs
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <section
        className="relative py-16 md:py-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/cta-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-2xl min-[400px]:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight"
            >
              Experience Transformation
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="w-24 h-1 bg-orange-500 mx-auto mt-5 md:mt-6 origin-left"
            />
          </div>

          <div ref={ref} className="grid grid-cols-2 min-[500px]:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-12">
            {filteredStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl min-[400px]:text-4xl md:text-5xl font-bold text-brand mb-1 md:mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                >
                  {counters[index].toLocaleString()}+
                </motion.div>
                <p className="text-white text-sm min-[400px]:text-base font-medium px-2">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-white -mb-px" />
      </section>
    </div>
  );
};

export default ProgramsPage;