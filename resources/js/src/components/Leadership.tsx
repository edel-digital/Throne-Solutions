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

const CoachingService = () => {
  const benefits = [
    {
      icon: <User className="text-brand" size={24} />,
      title: "Personalized Approach",
      description: "One-on-one coaching tailored to your specific leadership challenges and goals"
    },
    {
      icon: <BarChart2 className="text-brand" size={24} />,
      title: "Strategic Thinking",
      description: "Develop critical skills for navigating complex business environments"
    },
    {
      icon: <Target className="text-brand" size={24} />,
      title: "Goal Achievement",
      description: "Clear roadmap to achieve your professional objectives and career aspirations"
    },
    {
      icon: <BookOpen className="text-brand" size={24} />,
      title: "Continuous Learning",
      description: "Access to cutting-edge leadership frameworks and resources"
    },
    {
      icon: <Users className="text-brand" size={24} />,
      title: "Team Empowerment",
      description: "Learn to inspire, motivate, and develop high-performing teams"
    },
    {
      icon: <Award className="text-brand" size={24} />,
      title: "Legacy Building",
      description: "Create lasting impact and establish your leadership legacy"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Session",
      description: "In-depth assessment of your leadership profile and objectives"
    },
    {
      step: "02",
      title: "Customized Plan",
      description: "Development of a personalized coaching roadmap"
    },
    {
      step: "03",
      title: "Bi-weekly Sessions",
      description: "Regular coaching sessions with actionable insights"
    },
    {
      step: "04",
      title: "Skill Application",
      description: "Practical implementation with real-world challenges"
    },
    {
      step: "05",
      title: "Progress Review",
      description: "Continuous evaluation and strategy refinement"
    },
    {
      step: "06",
      title: "Sustainable Growth",
      description: "Ongoing support for long-term leadership excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FC] to-[#E6E9F4]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section */}
     <section className="relative h-[80vh] w-full overflow-hidden">
              <img 
          src="/images/home-1.jpeg" 
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
                  Executive Leadership Coaching
                </motion.h1>
              </div>
            </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#30344D] mb-6">
                Elevate Your Leadership Journey
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles.
                </p>
                <p>
                  Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.
                </p>
                <p>
                  Our executive coaching program is designed for C-suite leaders, senior executives, and rising stars who are ready to transform their leadership approach and create lasting impact.
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
                  "CEOs and C-suite executives navigating complex challenges",
                  "Senior leaders preparing for greater responsibilities",
                  "High-potential managers transitioning to executive roles",
                  "Leaders driving organizational transformation",
                  "Executives seeking work-life integration strategies",
                  "Technical experts moving into leadership positions"
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
              Transformative Coaching Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our executive coaching delivers measurable results that transform both leaders and organizations
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

     <section className="py-16 bg-white">
             <div className="container mx-auto px-4 max-w-6xl">
               <div className="text-center mb-12">
                 <p className="text-brand font-bold tracking-wider uppercase text-sm mb-2">
                   GALLERY
                 </p>
                 <h2 className="text-2xl font-bold text-gray-800 mb-3">
                   Leadership <span className="text-[#30344D]">In Action</span>
                 </h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">
                   See our transformative programs and participants in action
                 </p>
                 <div className="w-16 h-0.5 bg-gradient-to-r from-[#30344D] to-[#FFD166] mx-auto mt-4 rounded-full"></div>
               </div>
     
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                   <div key={id} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                     <div className="relative h-56 overflow-hidden">
                       <img 
                         src={`/images/gallery-${id}.jpg`} 
                         alt={`Gallery item ${id}`}
                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                       />
                       {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <button className="bg-white/80 hover:bg-white text-[#30344D] px-4 py-2 rounded-full font-medium transition-colors">
                           View
                         </button>
                       </div> */}
                     </div>
                     {/* <div className="p-4">
                       <h3 className="font-medium text-gray-800">Program Session #{id}</h3>
                       <p className="text-gray-600 text-sm mt-1">Leadership workshop activity</p>
                     </div> */}
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

export default CoachingService;