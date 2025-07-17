// src/pages/services/coaching.jsx
import React from 'react';
import Partners from './Partners';
import { Link } from  'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  BarChart2, 
  Target, 
  BookOpen, 
  Users, 
  Award,
  ArrowRight,
  ChevronRight,
  Quote
} from 'lucide-react';
import Testimonials from './testimonials';
import Footer from './Footer';

const TeamLeadership = () => {
  const benefits = [
    {
      icon: <User className="text-brand" size={24} />,
      title: "Tailored Team Strategies",
      description: "Customized coaching to address your team's unique dynamics and challenges"
    },
    {
      icon: <BarChart2 className="text-brand" size={24} />,
      title: "Enhanced Collaboration",
      description: "Develop skills to foster teamwork and effective communication"
    },
    {
      icon: <Target className="text-brand" size={24} />,
      title: "Team Performance",
      description: "Set and achieve collective goals that drive success"
    },
    {
      icon: <BookOpen className="text-brand" size={24} />,
      title: "Skill Development",
      description: "Access to resources for building leadership capabilities in your team"
    },
    {
      icon: <Users className="text-brand" size={24} />,
      title: "Empowered Team Members",
      description: "Learn to delegate effectively and develop your team's potential"
    },
    {
      icon: <Award className="text-brand" size={24} />,
      title: "Sustainable Team Culture",
      description: "Create a positive and enduring team culture that thrives"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Session",
      description: "Assessment of your team's leadership needs and objectives"
    },
    {
      step: "02",
      title: "Customized Plan",
      description: "Development of a team-focused coaching strategy"
    },
    {
      step: "03",
      title: "Bi-weekly Sessions",
      description: "Regular coaching with actionable team-building insights"
    },
    {
      step: "04",
      title: "Skill Application",
      description: "Practical implementation with real team challenges"
    },
    {
      step: "05",
      title: "Progress Review",
      description: "Continuous evaluation of team development"
    },
    {
      step: "06",
      title: "Sustainable Growth",
      description: "Ongoing support for team leadership excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FC] to-[#E6E9F4]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="/images/home-1.jpeg" 
          alt="Team leadership coaching" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Team Leadership Coaching
          </motion.h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#30344D] mb-6">
                Transform Your Team Leadership
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Team Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles.
                </p>
                <p>
                  Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.
                </p>
                <p>
                  Our team coaching program is designed for managers, supervisors, and team leaders who want to enhance collaboration, boost team performance, and create high-performing teams.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-[#FFD166]/20 p-3 rounded-lg mr-4">
                  <Target className="text-[#FFD166]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#30344D]">Who Benefits Most</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Team leaders aiming to enhance collaboration",
                  "Managers seeking to improve team performance",
                  "New supervisors transitioning into leadership roles",
                  "Project leads handling cross-functional teams",
                  "Leaders fostering inclusive team environments",
                  "Professionals preparing for team leadership positions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-brand mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#30344D] mb-4">
              Team Leadership Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team coaching delivers measurable results that transform both leaders and their teams
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#F8F9FC] to-[#E6E9F4] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#30344D]">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-16 bg-gradient-to-br from-[#F8F9FC] to-[#E6E9F4] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#30344D] mb-4">
              Our Team Coaching Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to developing exceptional team leaders
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl font-bold text-brand mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-[#30344D] mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand font-bold tracking-wider uppercase text-sm mb-2">
              GALLERY
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Team Leadership <span className="text-[#30344D]">In Action</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See our transformative programs and team leaders in action
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <div key={id} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={`/images/gallery-${id}.jpg`} 
                    alt={`Team leadership activity ${id}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-[#30344D] text-white font-medium rounded-lg hover:bg-[#1E2238] transition-all duration-300 shadow-md hover:shadow-lg">
              View Full Gallery
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div> */}
        </div>
      </section>
      
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};

export default TeamLeadership;